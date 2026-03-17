import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/twilio";
const OTP_EXPIRY_MS = 10 * 60 * 1000; // 10 minutes
const MAX_ATTEMPTS = 5;

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function normalizePhone(phone: string): string {
  let cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 10) cleaned = "1" + cleaned;
  if (!cleaned.startsWith("+")) cleaned = "+" + cleaned;
  return cleaned;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  if (!LOVABLE_API_KEY) {
    return new Response(JSON.stringify({ error: "LOVABLE_API_KEY is not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const TWILIO_API_KEY = Deno.env.get("TWILIO_API_KEY");
  if (!TWILIO_API_KEY) {
    return new Response(JSON.stringify({ error: "TWILIO_API_KEY is not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const TWILIO_PHONE_NUMBER = Deno.env.get("TWILIO_PHONE_NUMBER");
  if (!TWILIO_PHONE_NUMBER) {
    return new Response(JSON.stringify({ error: "TWILIO_PHONE_NUMBER is not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
  const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return new Response(JSON.stringify({ error: "Supabase configuration missing" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // Use service role to bypass RLS
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  try {
    const body = await req.json();
    const { action, phone, code } = body;

    if (!phone || typeof phone !== "string") {
      return new Response(JSON.stringify({ error: "Valid phone number is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const normalizedPhone = normalizePhone(phone);

    if (normalizedPhone.length < 10 || normalizedPhone.length > 16) {
      return new Response(JSON.stringify({ error: "Invalid phone number format" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "send") {
      // Check for recent OTP (rate limiting — block if sent < 60s ago, regardless of expiry)
      const { data: existing } = await supabase
        .from("phone_otps")
        .select("created_at")
        .eq("phone", normalizedPhone)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (existing) {
        const secondsAgo = (Date.now() - new Date(existing.created_at).getTime()) / 1000;
        if (secondsAgo < 60) {
          const retryAfter = Math.ceil(60 - secondsAgo);
          return new Response(
            JSON.stringify({ error: "Please wait before requesting a new code.", retryAfter: Math.ceil(60 - secondsAgo) }),
            { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
      }

      // Delete any old OTPs for this phone
      await supabase.from("phone_otps").delete().eq("phone", normalizedPhone);

      const otp = generateOTP();
      const expiresAt = new Date(Date.now() + OTP_EXPIRY_MS).toISOString();

      // Store OTP in DB
      const { error: insertError } = await supabase.from("phone_otps").insert({
        phone: normalizedPhone,
        code: otp,
        expires_at: expiresAt,
        attempts: 0,
      });

      if (insertError) {
        console.error("Failed to store OTP:", insertError);
        throw new Error("Failed to store verification code");
      }

      // Send via Twilio connector gateway
      const twilioRes = await fetch(`${GATEWAY_URL}/Messages.json`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "X-Connection-Api-Key": TWILIO_API_KEY,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          To: normalizedPhone,
          From: TWILIO_PHONE_NUMBER,
          Body: `Your Previse Mortgage verification code is: ${otp}. Valid for 10 minutes. Do not share this code.`,
        }),
      });

      const twilioData = await twilioRes.json();
      if (!twilioRes.ok) {
        // Clean up the stored OTP if SMS failed
        await supabase.from("phone_otps").delete().eq("phone", normalizedPhone);
        console.error("Twilio error:", twilioData);
        throw new Error(`SMS sending failed [${twilioRes.status}]: ${JSON.stringify(twilioData)}`);
      }

      console.log("OTP sent to", normalizedPhone, "SID:", twilioData.sid);

      return new Response(JSON.stringify({ success: true, message: "Verification code sent" }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "verify") {
      if (!code || typeof code !== "string") {
        return new Response(JSON.stringify({ error: "Verification code is required" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Fetch stored OTP
      const { data: stored, error: fetchError } = await supabase
        .from("phone_otps")
        .select("*")
        .eq("phone", normalizedPhone)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (fetchError) {
        console.error("DB fetch error:", fetchError);
        throw new Error("Failed to retrieve verification code");
      }

      if (!stored) {
        return new Response(
          JSON.stringify({ error: "No verification code found. Please request a new code." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (new Date() > new Date(stored.expires_at)) {
        await supabase.from("phone_otps").delete().eq("id", stored.id);
        return new Response(
          JSON.stringify({ error: "Verification code has expired. Please request a new one." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const newAttempts = stored.attempts + 1;

      if (newAttempts > MAX_ATTEMPTS) {
        await supabase.from("phone_otps").delete().eq("id", stored.id);
        return new Response(
          JSON.stringify({ error: "Too many attempts. Please request a new code." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (stored.code !== code.trim()) {
        // Increment attempts
        await supabase.from("phone_otps").update({ attempts: newAttempts }).eq("id", stored.id);
        return new Response(
          JSON.stringify({ error: `Incorrect code. ${MAX_ATTEMPTS - newAttempts} attempts remaining.` }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // OTP verified — clean up
      await supabase.from("phone_otps").delete().eq("id", stored.id);

      return new Response(JSON.stringify({ success: true, verified: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Invalid action. Use 'send' or 'verify'." }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("phone-otp error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

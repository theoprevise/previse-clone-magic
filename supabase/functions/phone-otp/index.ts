import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// In-memory OTP store: phone -> { code, expiresAt, attempts }
// For production scale, use Redis/Supabase table. Fine for current traffic.
const otpStore = new Map<string, { code: string; expiresAt: number; attempts: number }>();

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

    // Validate it looks like a real phone number
    if (normalizedPhone.length < 10 || normalizedPhone.length > 16) {
      return new Response(JSON.stringify({ error: "Invalid phone number format" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "send") {
      // Rate limiting: check if there's a recent unexpired OTP
      const existing = otpStore.get(normalizedPhone);
      if (existing && existing.expiresAt > Date.now()) {
        const remainingSeconds = Math.ceil((existing.expiresAt - Date.now()) / 1000);
        // Allow resend only if more than 60 seconds have passed
        if (remainingSeconds > OTP_EXPIRY_MS / 1000 - 60) {
          return new Response(
            JSON.stringify({ error: "Please wait before requesting a new code.", retryAfter: 60 }),
            { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
      }

      const otp = generateOTP();
      otpStore.set(normalizedPhone, {
        code: otp,
        expiresAt: Date.now() + OTP_EXPIRY_MS,
        attempts: 0,
      });

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

      const stored = otpStore.get(normalizedPhone);

      if (!stored) {
        return new Response(
          JSON.stringify({ error: "No verification code found. Please request a new code." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (Date.now() > stored.expiresAt) {
        otpStore.delete(normalizedPhone);
        return new Response(
          JSON.stringify({ error: "Verification code has expired. Please request a new one." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      stored.attempts += 1;
      if (stored.attempts > MAX_ATTEMPTS) {
        otpStore.delete(normalizedPhone);
        return new Response(
          JSON.stringify({ error: "Too many attempts. Please request a new code." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (stored.code !== code.trim()) {
        return new Response(
          JSON.stringify({ error: `Incorrect code. ${MAX_ATTEMPTS - stored.attempts} attempts remaining.` }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // OTP verified — clean up
      otpStore.delete(normalizedPhone);

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

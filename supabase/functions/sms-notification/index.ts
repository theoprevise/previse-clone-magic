import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.52.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SMSNotificationRequest {
  leadId?: string;
  message?: string;
  to?: string;
  notificationType?: 'new_lead' | 'follow_up' | 'custom';
}

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const twilioAccountSid = Deno.env.get("TWILIO_ACCOUNT_SID");
const twilioAuthToken = Deno.env.get("TWILIO_AUTH_TOKEN");
const twilioPhoneNumber = Deno.env.get("TWILIO_PHONE_NUMBER");
const adminPhoneNumber = Deno.env.get("ADMIN_PHONE_NUMBER"); // Your phone to receive notifications

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const sendSMS = async (to: string, body: string) => {
  if (!twilioAccountSid || !twilioAuthToken || !twilioPhoneNumber) {
    console.log("Twilio not configured, logging SMS instead:", { to, body });
    return { success: true, simulated: true };
  }

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${twilioAccountSid}:${twilioAuthToken}`)}`,
      },
      body: new URLSearchParams({
        To: to,
        From: twilioPhoneNumber,
        Body: body,
      }),
    }
  );

  const result = await response.json();
  
  if (!response.ok) {
    throw new Error(`Twilio error: ${result.message || result.error_message}`);
  }

  return { success: true, sid: result.sid };
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { leadId, message, to, notificationType }: SMSNotificationRequest = await req.json();

    console.log("SMS notification request:", { leadId, notificationType, to });

    // If a specific lead is provided, fetch their details
    let lead = null;
    if (leadId) {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .eq("id", leadId)
        .single();

      if (error) throw error;
      lead = data;
    }

    // Determine message and recipient based on notification type
    let smsMessage = message;
    let recipient = to;

    if (notificationType === 'new_lead' && lead && adminPhoneNumber) {
      // Notify admin about new lead
      recipient = adminPhoneNumber;
      smsMessage = `🏠 New Lead!\n${lead.first_name} ${lead.last_name}\n${lead.email}\n${lead.phone || 'No phone'}\nSource: ${lead.source || 'Unknown'}\nScore: ${lead.lead_score || 0}`;
    } else if (notificationType === 'follow_up' && lead && lead.phone) {
      // Send follow-up to lead
      recipient = lead.phone;
      smsMessage = `Hi ${lead.first_name}! This is Teddy from Previse Mortgage. I received your inquiry and would love to help you with your home financing needs. When's a good time to chat? Reply STOP to opt out.`;
    }

    if (!recipient) {
      throw new Error("No recipient phone number provided");
    }

    if (!smsMessage) {
      throw new Error("No message content provided");
    }

    // Clean phone number (ensure it starts with +1 for US)
    let cleanedNumber = recipient.replace(/\D/g, '');
    if (cleanedNumber.length === 10) {
      cleanedNumber = '1' + cleanedNumber;
    }
    if (!cleanedNumber.startsWith('+')) {
      cleanedNumber = '+' + cleanedNumber;
    }

    const result = await sendSMS(cleanedNumber, smsMessage);

    // Update lead's last activity
    if (leadId) {
      await supabase
        .from("leads")
        .update({ last_activity_at: new Date().toISOString() })
        .eq("id", leadId);
    }

    return new Response(
      JSON.stringify({ success: true, ...result }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("SMS notification error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

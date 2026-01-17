import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface LeadData {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  campaign_type: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  event_name?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = Deno.env.get("ZAPIER_WEBHOOK_URL");
    
    if (!webhookUrl) {
      console.error("ZAPIER_WEBHOOK_URL is not configured");
      return new Response(
        JSON.stringify({
          success: false,
          error: "ZAPIER_WEBHOOK_URL is not configured",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const incoming: LeadData = await req.json();
    console.log("Received lead data:", incoming);

    // Basic server-side validation
    const first_name = (incoming.first_name ?? "").toString().trim();
    const last_name = (incoming.last_name ?? "").toString().trim();
    const email = (incoming.email ?? "").toString().trim();
    const phone = (incoming.phone ?? "").toString().trim();
    const campaign_type = (incoming.campaign_type ?? "").toString().trim();

    if (!first_name || !last_name || !email || !phone || !campaign_type) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert lead server-side (avoids client RLS/RETURNING issues) if no id provided
    let leadId = incoming.id;
    if (!leadId) {
      const { data: inserted, error: insertErr } = await supabase
        .from("leads")
        .insert({
          first_name,
          last_name,
          email,
          phone,
          campaign_type,
          utm_source: incoming.utm_source ?? null,
          utm_medium: incoming.utm_medium ?? null,
          utm_campaign: incoming.utm_campaign ?? null,
          event_name: incoming.event_name ?? null,
          address: incoming.address ?? null,
          source: incoming.source ?? "landing_page",
          zapier_synced: false,
        })
        .select("id")
        .single();

      if (insertErr) {
        console.error("Error inserting lead server-side:", insertErr);
        return new Response(
          JSON.stringify({ success: false, error: "Failed to save lead" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      leadId = inserted.id;
      console.log("Lead inserted server-side:", leadId);
    } else {
      // Verify the lead exists and email matches (prevents tampering)
      const { data: existingLead, error: lookupError } = await supabase
        .from("leads")
        .select("id, zapier_synced, email")
        .eq("id", leadId)
        .single();

      if (lookupError || !existingLead) {
        console.error("Lead not found:", leadId);
        return new Response(
          JSON.stringify({ success: false, error: "Lead not found" }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (existingLead.email !== email) {
        console.error("Email mismatch for lead:", leadId);
        return new Response(
          JSON.stringify({ success: false, error: "Verification failed" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      if (existingLead.zapier_synced) {
        console.log("Lead already synced:", leadId);
        return new Response(
          JSON.stringify({ success: true, message: "Already synced", lead_id: leadId }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Prepare payload for Zapier with specific source tracking
    const leadSource = incoming.source || "website_unknown";
    const zapierPayload = {
      ...incoming,
      id: leadId,
      first_name,
      last_name,
      email,
      phone,
      campaign_type,
      timestamp: new Date().toISOString(),
      source: leadSource,
      source_detail: `previsemortgage.com | ${leadSource} | ${campaign_type}`,
    };

    console.log("Sending to Zapier:", zapierPayload);

    // Send to Zapier webhook
    const zapierResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(zapierPayload),
    });

    const zapierResponseText = await zapierResponse.text();
    console.log("Zapier response status:", zapierResponse.status);
    console.log("Zapier response:", zapierResponseText);

    // Mark as synced
    const { error: updateError } = await supabase
      .from("leads")
      .update({ zapier_synced: true })
      .eq("id", leadId);

    if (updateError) {
      console.error("Error updating lead sync status:", updateError);
    } else {
      console.log("Lead marked as synced:", leadId);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Lead sent to Zapier successfully",
        lead_id: leadId,
        zapier_status: zapierResponse.status,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending to Zapier:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

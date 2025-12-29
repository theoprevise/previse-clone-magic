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

    const leadData: LeadData = await req.json();
    console.log("Received lead data:", leadData);

    // Prepare payload for Zapier
    const zapierPayload = {
      ...leadData,
      timestamp: new Date().toISOString(),
      source: "previse_mortgage_landing_page",
    };

    console.log("Sending to Zapier:", zapierPayload);

    // Send to Zapier webhook
    const zapierResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(zapierPayload),
    });

    const zapierResponseText = await zapierResponse.text();
    console.log("Zapier response status:", zapierResponse.status);
    console.log("Zapier response:", zapierResponseText);

    // Update lead record in database to mark as synced
    if (leadData.id) {
      const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
      const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      const { error: updateError } = await supabase
        .from("leads")
        .update({ zapier_synced: true })
        .eq("id", leadData.id);

      if (updateError) {
        console.error("Error updating lead sync status:", updateError);
      } else {
        console.log("Lead marked as synced:", leadData.id);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Lead sent to Zapier successfully",
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

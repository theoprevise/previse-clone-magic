import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const webhookUrl = "https://hooks.zapier.com/hooks/catch/25742852/uw3xqpk/";
    
    const testData = {
      first_name: "Test",
      last_name: "User",
      email: "test@example.com",
      phone: "(555) 123-4567",
      campaign_type: "webinar",
      source: "landing_page",
      utm_source: "facebook",
      utm_medium: "cpc",
      utm_campaign: "first_time_homebuyer_2025",
      timestamp: new Date().toISOString(),
      event_name: "First-Time Homebuyer Webinar"
    };

    console.log("Sending test data to Zapier:", testData);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const responseText = await response.text();
    console.log("Zapier response status:", response.status);
    console.log("Zapier response:", responseText);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Test data sent to Zapier successfully",
        zapier_status: response.status,
        zapier_response: responseText,
        data_sent: testData
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

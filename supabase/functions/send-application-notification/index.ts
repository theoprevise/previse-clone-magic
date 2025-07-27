import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { record } = await req.json();
    console.log('New application received:', record);

    const emailContent = `
      <h2>New Mortgage Application Submitted</h2>
      <p><strong>Application ID:</strong> ${record.id}</p>
      <p><strong>Loan Type:</strong> ${record.loan_type || 'Not specified'}</p>
      <p><strong>Applicant:</strong> ${record.first_name || ''} ${record.last_name || ''}</p>
      <p><strong>Email:</strong> ${record.email || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${record.phone || 'Not provided'}</p>
      <p><strong>Location:</strong> ${record.location || 'Not specified'}</p>
      <p><strong>ZIP Code:</strong> ${record.zip_code || 'Not provided'}</p>
      <p><strong>Home Budget:</strong> ${record.home_budget || 'Not specified'}</p>
      <p><strong>Home Type:</strong> ${record.home_type || 'Not specified'}</p>
      <p><strong>Home Use:</strong> ${record.home_use || 'Not specified'}</p>
      <p><strong>First Time Buyer:</strong> ${record.first_time_buyer || 'Not specified'}</p>
      <p><strong>Purchase Timing:</strong> ${record.purchase_timing || 'Not specified'}</p>
      <p><strong>Down Payment:</strong> ${record.down_payment || 'Not specified'}</p>
      <p><strong>Annual Income:</strong> ${record.annual_income || 'Not specified'}</p>
      <p><strong>Credit Score:</strong> ${record.credit_score || 'Not specified'}</p>
      <p><strong>Employment Status:</strong> ${record.employment_status || 'Not specified'}</p>
      <p><strong>Submitted:</strong> ${new Date(record.created_at).toLocaleString()}</p>
    `;

    const emailResponse = await resend.emails.send({
      from: "Previse Mortgage <onboarding@resend.dev>",
      to: ["teddy@previsemortgage.com"],
      subject: `New Mortgage Application - ${record.first_name || 'Unknown'} ${record.last_name || 'Applicant'}`,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-application-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
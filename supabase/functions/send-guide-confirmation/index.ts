import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface GuideConfirmationRequest {
  firstName: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, email }: GuideConfirmationRequest = await req.json();

    // Validate required fields
    if (!firstName || !email) {
      return new Response(
        JSON.stringify({ error: 'firstName and email are required' }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Processing guide confirmation request for ${email}`);

    // Use service role to verify the lead exists in database
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Verify the lead exists in the database
    const { data: lead, error: leadError } = await supabaseClient
      .from('leads')
      .select('*')
      .eq('email', email)
      .eq('first_name', firstName)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (leadError || !lead) {
      console.log("Lead not found for:", email, leadError?.message);
      return new Response(
        JSON.stringify({ error: 'Lead not found' }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify the lead was created recently (within 10 minutes) to prevent abuse
    const leadCreatedAt = new Date(lead.created_at);
    const now = new Date();
    const leadAge = now.getTime() - leadCreatedAt.getTime();
    
    if (leadAge > 10 * 60 * 1000) { // 10 minutes
      console.log("Lead too old for guide confirmation:", email);
      return new Response(
        JSON.stringify({ error: 'Guide already sent' }),
        { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Sending guide confirmation to verified lead: ${email}`);

    const emailResponse = await resend.emails.send({
      from: "Previse Mortgage <noreply@previsemortgage.com>",
      to: [email],
      subject: "Your First-Time Homebuyer Guide is Ready!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #1a1a2e;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 40px;">
              <h1 style="color: #d2b18c; margin: 0; font-size: 28px;">Previse Mortgage</h1>
            </div>
            
            <!-- Main Content -->
            <div style="background-color: #242445; border-radius: 16px; padding: 40px; border: 1px solid rgba(210, 177, 140, 0.2);">
              <h2 style="color: #ffffff; margin: 0 0 20px 0; font-size: 24px;">
                Hi ${firstName}! 👋
              </h2>
              
              <p style="color: #a0a0b0; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Thank you for downloading <strong style="color: #d2b18c;">The Complete First-Time Homebuyer Guide</strong>. 
                You're one step closer to owning your dream home!
              </p>
              
              <!-- Download Button -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://previsemortgage.com/downloads/first-time-homebuyer-guide.pdf" 
                   style="display: inline-block; background-color: #d2b18c; color: #1a1a2e; padding: 16px 32px; 
                          text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
                  📥 Download Your Guide
                </a>
              </div>
              
              <!-- What's Inside -->
              <div style="background-color: rgba(210, 177, 140, 0.1); border-radius: 12px; padding: 20px; margin: 30px 0;">
                <h3 style="color: #d2b18c; margin: 0 0 15px 0; font-size: 18px;">What's Inside:</h3>
                <ul style="color: #a0a0b0; margin: 0; padding-left: 20px; line-height: 1.8;">
                  <li>5-Step Homebuying Roadmap</li>
                  <li>Pre-Approval Document Checklist</li>
                  <li>Down Payment Assistance Programs</li>
                  <li>Closing Day Essentials</li>
                  <li>Budget Worksheets</li>
                  <li>Mortgage Glossary</li>
                </ul>
              </div>
              
              <p style="color: #a0a0b0; font-size: 16px; line-height: 1.6; margin: 20px 0;">
                Have questions about your homebuying journey? I'm here to help! Schedule a free consultation 
                and let's create a personalized plan for you.
              </p>
              
              <!-- CTA Button -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://previsemortgage.com/schedule" 
                   style="display: inline-block; background-color: transparent; color: #d2b18c; padding: 14px 28px; 
                          text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px;
                          border: 2px solid #d2b18c;">
                  Schedule Free Consultation
                </a>
              </div>
            </div>
            
            <!-- Signature -->
            <div style="margin-top: 30px; padding: 20px; text-align: center;">
              <p style="color: #a0a0b0; margin: 0 0 10px 0; font-size: 14px;">
                Best regards,
              </p>
              <p style="color: #ffffff; margin: 0; font-size: 16px; font-weight: bold;">
                Teddy Carbone
              </p>
              <p style="color: #d2b18c; margin: 5px 0 0 0; font-size: 14px;">
                Mortgage Loan Officer | NMLS #2436937
              </p>
              <p style="color: #a0a0b0; margin: 10px 0 0 0; font-size: 14px;">
                📞 (717) 801-8498 | ✉️ teddy@previsemortgage.com
              </p>
            </div>
            
            <!-- Footer -->
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(210, 177, 140, 0.2); text-align: center;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                Previse Mortgage | Spring Grove, PA
              </p>
              <p style="color: #666; font-size: 12px; margin: 10px 0 0 0;">
                <a href="https://previsemortgage.com/privacy-policy" style="color: #666; text-decoration: underline;">Privacy Policy</a>
                 | 
                <a href="https://previsemortgage.com/terms-of-service" style="color: #666; text-decoration: underline;">Terms of Service</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Guide confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending guide confirmation email:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

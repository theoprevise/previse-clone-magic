import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ThankYouEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  replayUrl?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("send-webinar-thankyou function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, replayUrl }: ThankYouEmailRequest = await req.json();
    
    console.log("Sending thank you email to:", email);

    const emailResponse = await resend.emails.send({
      from: "Previse Home Loans <onboarding@resend.dev>",
      to: [email],
      subject: "Thank You for Attending Our First-Time Homebuyer Webinar!",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2d1b69; margin-bottom: 10px;">Thank You for Attending! 🏠</h1>
            <p style="color: #666; font-size: 18px;">First-Time Homebuyer Secrets Revealed</p>
          </div>

          <div style="background: linear-gradient(135deg, #2d1b69 0%, #1a1a2e 100%); color: white; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
            <p style="margin: 0 0 20px 0; font-size: 16px;">Hi ${firstName},</p>
            <p style="margin: 0; font-size: 16px;">Thank you so much for joining our First-Time Homebuyer webinar! We hope you found the information valuable and that you're now feeling more confident about your homebuying journey.</p>
          </div>

          ${replayUrl ? `
          <div style="background: #e8f4f8; padding: 25px; border-radius: 12px; margin-bottom: 30px; text-align: center;">
            <h3 style="color: #2d1b69; margin-top: 0;">📹 Watch the Replay</h3>
            <p style="margin-bottom: 20px;">Missed something? Want to review a topic? Watch the full recording anytime.</p>
            <a href="${replayUrl}" 
               style="display: inline-block; background: #00bcd4; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
              Watch Replay
            </a>
          </div>
          ` : ''}

          <div style="margin-bottom: 30px;">
            <h3 style="color: #2d1b69;">📝 Key Takeaways Recap:</h3>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 8px;"><strong>Budget First:</strong> Know your debt-to-income ratio before house hunting</li>
              <li style="margin-bottom: 8px;"><strong>Get Pre-Approved:</strong> It shows sellers you're serious and helps you know your limits</li>
              <li style="margin-bottom: 8px;"><strong>Explore Loan Options:</strong> FHA, VA, USDA, and Conventional all have different benefits</li>
              <li style="margin-bottom: 8px;"><strong>Down Payment Help:</strong> Many programs exist to help with down payments</li>
              <li style="margin-bottom: 8px;"><strong>Hidden Costs:</strong> Plan for closing costs, inspections, and moving expenses</li>
              <li style="margin-bottom: 8px;"><strong>Build Your Team:</strong> A good lender and agent make all the difference</li>
            </ul>
          </div>

          <div style="background: #d4edda; padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #28a745;">
            <h3 style="color: #155724; margin-top: 0;">🎯 Your Next Step</h3>
            <p style="color: #155724; margin-bottom: 20px;">
              Ready to take action? Schedule a free, no-obligation consultation with our team. 
              We'll review your unique situation and create a personalized plan for your homebuying journey.
            </p>
            <a href="https://yourwebsite.com/schedule" 
               style="display: inline-block; background: #28a745; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
              Schedule Free Consultation
            </a>
          </div>

          <div style="background: #f8f9fa; padding: 25px; border-radius: 12px; margin-bottom: 30px;">
            <h3 style="color: #2d1b69; margin-top: 0;">📚 Helpful Resources</h3>
            <ul style="padding-left: 20px; margin-bottom: 0;">
              <li style="margin-bottom: 8px;">
                <a href="https://yourwebsite.com/first-time-homebuyer" style="color: #2d1b69;">First-Time Homebuyer Guide</a>
              </li>
              <li style="margin-bottom: 8px;">
                <a href="https://yourwebsite.com/mortgage-calculator" style="color: #2d1b69;">Mortgage Calculator</a>
              </li>
              <li style="margin-bottom: 8px;">
                <a href="https://yourwebsite.com/mortgage-programs" style="color: #2d1b69;">Loan Program Comparison</a>
              </li>
              <li style="margin-bottom: 0;">
                <a href="https://yourwebsite.com/credit-score-mortgage-tips" style="color: #2d1b69;">Credit Score Tips</a>
              </li>
            </ul>
          </div>

          <div style="background: #fff3cd; padding: 20px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #ffc107;">
            <h4 style="margin-top: 0; color: #856404;">💬 We'd Love Your Feedback!</h4>
            <p style="margin-bottom: 0; color: #856404;">
              Did you find the webinar helpful? Reply to this email and let us know what you thought, 
              or what topics you'd like us to cover in future sessions!
            </p>
          </div>

          <div style="border-top: 1px solid #e9ecef; padding-top: 20px; text-align: center; color: #666; font-size: 14px;">
            <p>Have questions? Reply to this email or call us at (555) 123-4567</p>
            <p style="margin-bottom: 0;">© 2025 Previse Home Loans. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Thank you email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-webinar-thankyou function:", error);
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
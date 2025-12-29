import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WebinarConfirmationRequest {
  firstName: string;
  lastName: string;
  email: string;
  webinarDate: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("send-webinar-confirmation function called");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, webinarDate }: WebinarConfirmationRequest = await req.json();
    
    console.log("Processing registration for:", email);

    const date = new Date(webinarDate);
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    const emailResponse = await resend.emails.send({
      from: "Teddy Carbone - Previse Home Loans <teddy@previsemortgage.com>",
      to: [email],
      subject: "You're Registered! First-Time Homebuyer Webinar Confirmation",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #2d1b69; margin-bottom: 10px;">You're Registered! 🎉</h1>
            <p style="color: #666; font-size: 18px;">First-Time Homebuyer Secrets Revealed</p>
          </div>

          <div style="background: linear-gradient(135deg, #2d1b69 0%, #1a1a2e 100%); color: white; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
            <p style="margin: 0 0 20px 0; font-size: 16px;">Hi ${firstName},</p>
            <p style="margin: 0; font-size: 16px;">Thank you for registering for our exclusive webinar! We're excited to share valuable insights that will help you on your homebuying journey.</p>
          </div>

          <div style="background: #f8f9fa; padding: 25px; border-radius: 12px; margin-bottom: 30px;">
            <h2 style="color: #2d1b69; margin-top: 0; margin-bottom: 20px;">📅 Webinar Details</h2>
            <table style="width: 100%;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                  <strong>Date:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                  ${formattedDate}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                  <strong>Time:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                  ${formattedTime} (60 minutes)
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                  <strong>Platform:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e9ecef;">
                  Zoom
                </td>
              </tr>
            </table>
          </div>

          <div style="background: #e8f4f8; padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #00bcd4;">
            <h3 style="color: #2d1b69; margin-top: 0;">🔗 Zoom Meeting Link</h3>
            <p style="margin-bottom: 15px;">
              <strong>Join URL:</strong> [ZOOM_LINK_PLACEHOLDER]<br>
              <strong>Meeting ID:</strong> [MEETING_ID_PLACEHOLDER]<br>
              <strong>Passcode:</strong> [PASSCODE_PLACEHOLDER]
            </p>
            <p style="font-size: 14px; color: #666; margin-bottom: 0;">
              <em>Note: You'll receive a reminder email with the meeting link 24 hours before the webinar.</em>
            </p>
          </div>

          <div style="margin-bottom: 30px;">
            <h3 style="color: #2d1b69;">📝 What You'll Learn:</h3>
            <ul style="padding-left: 20px;">
              <li style="margin-bottom: 8px;">How to calculate what you can truly afford</li>
              <li style="margin-bottom: 8px;">Documents needed for pre-approval</li>
              <li style="margin-bottom: 8px;">Understanding FHA, VA, and Conventional loans</li>
              <li style="margin-bottom: 8px;">Down payment assistance programs</li>
              <li style="margin-bottom: 8px;">Hidden costs to prepare for</li>
              <li style="margin-bottom: 8px;">Tips for working with real estate professionals</li>
            </ul>
          </div>

          <div style="background: #fff3cd; padding: 20px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #ffc107;">
            <h4 style="margin-top: 0; color: #856404;">💡 Pro Tip</h4>
            <p style="margin-bottom: 0; color: #856404;">
              Come prepared with your questions! We'll have a live Q&A session at the end of the webinar.
            </p>
          </div>

          <div style="text-align: center; margin-bottom: 30px;">
            <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=First-Time%20Homebuyer%20Webinar&dates=${date.toISOString().replace(/-|:|\.\d+/g, '')}/${new Date(date.getTime() + 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, '')}" 
               style="display: inline-block; background: #2d1b69; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
              Add to Google Calendar
            </a>
          </div>

          <div style="border-top: 1px solid #e9ecef; padding-top: 20px; text-align: center; color: #666; font-size: 14px;">
            <p>Questions? Reply to this email or visit our website.</p>
            <p style="margin-bottom: 0;">© 2025 Previse Home Loans. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-webinar-confirmation function:", error);
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
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.52.1";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailDripRequest {
  leadId?: string;
  triggerEvent?: string; // 'lead_created', 'prequal_completed', etc.
  forceStep?: number; // Force send a specific step
}

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const resendApiKey = Deno.env.get("RESEND_API_KEY");

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Email templates based on step
const getEmailTemplate = (step: number, lead: any) => {
  const templates: Record<number, { subject: string; html: string }> = {
    1: {
      subject: `${lead.first_name}, Thank You for Your Interest!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a365d;">Hi ${lead.first_name}!</h1>
          <p>Thank you for reaching out to Previse Mortgage. We're excited to help you on your homeownership journey!</p>
          <p>A mortgage specialist will be in touch within 24 hours to discuss your options and answer any questions.</p>
          <p>In the meantime, here are some resources that might help:</p>
          <ul>
            <li><a href="https://previsemortgage.com/pre-qualify">Check Your Pre-Qualification</a></li>
            <li><a href="https://previsemortgage.com/mortgage-calculator">Mortgage Calculator</a></li>
            <li><a href="https://previsemortgage.com/credit-score-mortgage-tips">Credit Score Tips</a></li>
          </ul>
          <p>Best regards,<br>The Previse Mortgage Team</p>
          <p style="font-size: 12px; color: #666;">Previse Mortgage NMLS# 2730429 | PA Broker License #115658</p>
        </div>
      `,
    },
    2: {
      subject: `${lead.first_name}, Did You Know About These Loan Options?`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a365d;">Hi ${lead.first_name}!</h1>
          <p>We wanted to share some popular loan programs that might be perfect for your situation:</p>
          <h3>🏠 FHA Loans</h3>
          <p>As low as 3.5% down payment, great for first-time buyers.</p>
          <h3>🎖️ VA Loans</h3>
          <p>Zero down payment for eligible veterans and military families.</p>
          <h3>🌳 USDA Loans</h3>
          <p>100% financing for rural and suburban homes.</p>
          <h3>📊 Conventional Loans</h3>
          <p>Competitive rates with flexible terms.</p>
          <p><a href="https://previsemortgage.com/mortgage-programs" style="background-color: #c6a052; color: #1a365d; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Explore All Programs</a></p>
          <p>Ready to talk? <a href="https://previsemortgage.com/schedule">Schedule a call with us!</a></p>
          <p>Best regards,<br>The Previse Mortgage Team</p>
        </div>
      `,
    },
    3: {
      subject: `${lead.first_name}, Your Personalized Rate Quote is Ready`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a365d;">Hi ${lead.first_name}!</h1>
          <p>We've been reviewing your information and would love to provide you with a personalized rate quote.</p>
          <p>To get started, all we need is a quick 10-minute conversation to understand your goals.</p>
          <p><a href="https://previsemortgage.com/schedule" style="background-color: #c6a052; color: #1a365d; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Schedule Your Free Consultation</a></p>
          <p>Or call us directly at <strong>(717) 819-5196</strong></p>
          <p>We're here to help make your homeownership dreams a reality!</p>
          <p>Best regards,<br>Teddy Carbone<br>Senior Mortgage Advisor<br>NMLS# 2723255</p>
        </div>
      `,
    },
    4: {
      subject: `${lead.first_name}, Last Chance - Special Offer Inside`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a365d;">Hi ${lead.first_name}!</h1>
          <p>We haven't heard from you in a while, and we don't want you to miss out!</p>
          <p>For a limited time, we're offering:</p>
          <ul>
            <li>✅ Free credit analysis</li>
            <li>✅ No-obligation rate quote</li>
            <li>✅ Personalized loan recommendations</li>
          </ul>
          <p><a href="https://previsemortgage.com/schedule" style="background-color: #c6a052; color: #1a365d; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Claim Your Free Consultation</a></p>
          <p>Questions? Reply to this email or call us at <strong>(717) 819-5196</strong></p>
          <p>Best regards,<br>The Previse Mortgage Team</p>
        </div>
      `,
    },
  };

  return templates[step] || templates[1];
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const resend = new Resend(resendApiKey);
    const { leadId, triggerEvent, forceStep }: EmailDripRequest = await req.json();

    console.log("Email drip request:", { leadId, triggerEvent, forceStep });

    let leadsToProcess = [];

    if (leadId) {
      // Process specific lead
      const { data: lead, error } = await supabase
        .from("leads")
        .select("*")
        .eq("id", leadId)
        .single();

      if (error) throw error;
      leadsToProcess.push(lead);
    } else {
      // Process leads due for next email step
      const now = new Date();
      const { data: leads, error } = await supabase
        .from("leads")
        .select("*")
        .lt("email_sequence_step", 4)
        .not("email", "is", null);

      if (error) throw error;

      // Filter leads that are due for next step (24+ hours since last activity)
      leadsToProcess = (leads || []).filter((lead) => {
        if (!lead.email_sequence_started_at) return true; // New lead, start sequence
        const lastActivity = new Date(lead.last_activity_at || lead.created_at);
        const hoursSinceActivity = (now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60);
        const delayHours = lead.email_sequence_step === 0 ? 0 : 24 * lead.email_sequence_step;
        return hoursSinceActivity >= delayHours;
      });
    }

    console.log(`Processing ${leadsToProcess.length} leads for email drip`);

    const results = [];

    for (const lead of leadsToProcess) {
      const nextStep = forceStep || lead.email_sequence_step + 1;
      
      if (nextStep > 4) {
        console.log(`Lead ${lead.id} has completed all steps`);
        continue;
      }

      const template = getEmailTemplate(nextStep, lead);

      try {
        const emailResult = await resend.emails.send({
          from: "Previse Mortgage <hello@previsemortgage.com>",
          to: [lead.email],
          subject: template.subject,
          html: template.html,
        });

        console.log(`Email sent to ${lead.email}:`, emailResult);

        // Update lead with new step
        await supabase
          .from("leads")
          .update({
            email_sequence_step: nextStep,
            email_sequence_started_at: lead.email_sequence_started_at || new Date().toISOString(),
            last_activity_at: new Date().toISOString(),
          })
          .eq("id", lead.id);

        results.push({ leadId: lead.id, email: lead.email, step: nextStep, status: "sent" });
      } catch (emailError) {
        console.error(`Failed to send email to ${lead.email}:`, emailError);
        results.push({ leadId: lead.id, email: lead.email, step: nextStep, status: "failed", error: String(emailError) });
      }
    }

    return new Response(
      JSON.stringify({ success: true, processed: results.length, results }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email drip error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

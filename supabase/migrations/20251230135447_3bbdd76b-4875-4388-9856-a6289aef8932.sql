-- Add lead scoring columns to leads table
ALTER TABLE public.leads
ADD COLUMN IF NOT EXISTS lead_score INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS score_breakdown JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS last_activity_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
ADD COLUMN IF NOT EXISTS email_sequence_step INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS email_sequence_started_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS sms_opt_in BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS notes TEXT;

-- Create index for lead scoring queries
CREATE INDEX IF NOT EXISTS idx_leads_score ON public.leads(lead_score DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email_sequence ON public.leads(email_sequence_step);

-- Create email_campaigns table to track drip campaigns
CREATE TABLE IF NOT EXISTS public.email_campaigns (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  trigger_event TEXT NOT NULL, -- 'lead_created', 'prequal_completed', etc.
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create email_sequence_steps table for drip campaign steps
CREATE TABLE IF NOT EXISTS public.email_sequence_steps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_id UUID NOT NULL REFERENCES public.email_campaigns(id) ON DELETE CASCADE,
  step_order INTEGER NOT NULL,
  delay_hours INTEGER NOT NULL DEFAULT 24, -- Hours to wait after previous step
  subject TEXT NOT NULL,
  body_template TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create email_sends table to track sent emails
CREATE TABLE IF NOT EXISTS public.email_sends (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID NOT NULL REFERENCES public.leads(id) ON DELETE CASCADE,
  campaign_id UUID NOT NULL REFERENCES public.email_campaigns(id) ON DELETE CASCADE,
  step_id UUID REFERENCES public.email_sequence_steps(id),
  sent_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  opened_at TIMESTAMP WITH TIME ZONE,
  clicked_at TIMESTAMP WITH TIME ZONE,
  status TEXT NOT NULL DEFAULT 'sent' -- 'sent', 'delivered', 'opened', 'clicked', 'bounced', 'unsubscribed'
);

-- Enable RLS on new tables
ALTER TABLE public.email_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_sequence_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_sends ENABLE ROW LEVEL SECURITY;

-- RLS policies for email_campaigns (admin only)
CREATE POLICY "Admins can manage email campaigns" ON public.email_campaigns
FOR ALL USING (has_role(auth.uid(), 'admin'));

-- RLS policies for email_sequence_steps (admin only)
CREATE POLICY "Admins can manage email sequence steps" ON public.email_sequence_steps
FOR ALL USING (has_role(auth.uid(), 'admin'));

-- RLS policies for email_sends (admin only)
CREATE POLICY "Admins can view email sends" ON public.email_sends
FOR SELECT USING (has_role(auth.uid(), 'admin'));

-- Insert to email_sends allowed from edge functions (service role)
CREATE POLICY "Service role can insert email sends" ON public.email_sends
FOR INSERT WITH CHECK (true);

-- Create function to calculate lead score
CREATE OR REPLACE FUNCTION public.calculate_lead_score(lead_row public.leads)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  score INTEGER := 0;
  breakdown JSONB := '{}';
BEGIN
  -- Score based on source (higher intent sources = higher score)
  IF lead_row.source IN ('prequal_calculator', 'application') THEN
    score := score + 30;
    breakdown := breakdown || '{"source": 30}'::jsonb;
  ELSIF lead_row.source IN ('fha_loans_page', 'va_loans_page', 'conventional_loans_page', 'usda_loans_page') THEN
    score := score + 25;
    breakdown := breakdown || '{"source": 25}'::jsonb;
  ELSIF lead_row.source IN ('webinar', 'educational_event') THEN
    score := score + 20;
    breakdown := breakdown || '{"source": 20}'::jsonb;
  ELSIF lead_row.source IN ('exit_intent', 'popup') THEN
    score := score + 10;
    breakdown := breakdown || '{"source": 10}'::jsonb;
  ELSE
    score := score + 5;
    breakdown := breakdown || '{"source": 5}'::jsonb;
  END IF;

  -- Score based on completeness of information
  IF lead_row.phone IS NOT NULL AND lead_row.phone != '' THEN
    score := score + 15;
    breakdown := breakdown || '{"has_phone": 15}'::jsonb;
  END IF;

  IF lead_row.address IS NOT NULL AND lead_row.address != '' THEN
    score := score + 10;
    breakdown := breakdown || '{"has_address": 10}'::jsonb;
  END IF;

  -- Update the lead with the new score
  UPDATE public.leads 
  SET lead_score = score, score_breakdown = breakdown
  WHERE id = lead_row.id;

  RETURN score;
END;
$$;

-- Create trigger to auto-calculate score on lead insert/update
CREATE OR REPLACE FUNCTION public.trigger_calculate_lead_score()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  PERFORM public.calculate_lead_score(NEW);
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS calculate_lead_score_trigger ON public.leads;
CREATE TRIGGER calculate_lead_score_trigger
AFTER INSERT ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.trigger_calculate_lead_score();
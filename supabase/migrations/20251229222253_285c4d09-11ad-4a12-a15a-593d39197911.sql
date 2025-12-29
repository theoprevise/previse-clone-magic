-- Add tracking columns to leads table for campaign and UTM tracking
ALTER TABLE public.leads 
ADD COLUMN IF NOT EXISTS campaign_type text DEFAULT 'popup',
ADD COLUMN IF NOT EXISTS utm_source text,
ADD COLUMN IF NOT EXISTS utm_medium text,
ADD COLUMN IF NOT EXISTS utm_campaign text,
ADD COLUMN IF NOT EXISTS zapier_synced boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS event_name text;

-- Create index for campaign_type for faster filtering
CREATE INDEX IF NOT EXISTS idx_leads_campaign_type ON public.leads(campaign_type);

-- Create index for zapier_synced to quickly find unsynced leads
CREATE INDEX IF NOT EXISTS idx_leads_zapier_synced ON public.leads(zapier_synced);
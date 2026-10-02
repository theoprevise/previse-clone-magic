ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS sms_consent_at timestamptz,
  ADD COLUMN IF NOT EXISTS sms_consent_text text,
  ADD COLUMN IF NOT EXISTS sms_consent_page text;
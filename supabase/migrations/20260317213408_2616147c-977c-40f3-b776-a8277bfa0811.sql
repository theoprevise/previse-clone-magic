-- No public access to OTPs — only service role key bypasses RLS
-- This policy ensures regular users/anon cannot read or write OTPs
CREATE POLICY "No public access to phone_otps"
  ON public.phone_otps
  FOR ALL
  USING (false)
  WITH CHECK (false);
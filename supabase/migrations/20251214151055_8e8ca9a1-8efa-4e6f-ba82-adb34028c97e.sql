-- Add SELECT policy to restrict mortgage_applications access to admins only
CREATE POLICY "Only admins can read applications" 
ON public.mortgage_applications 
FOR SELECT 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));
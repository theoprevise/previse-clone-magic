-- Create admin access policy for mortgage applications
CREATE POLICY "Admins can view all applications" 
ON public.mortgage_applications 
FOR SELECT 
USING (true);

-- Note: This temporarily allows all reads for development
-- In production, you should implement proper user roles and restrict to actual admins
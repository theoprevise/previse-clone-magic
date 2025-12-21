-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create index for faster slug lookups
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(published);

-- RLS Policies
-- Anyone can read published posts
CREATE POLICY "Anyone can view published posts"
ON public.blog_posts
FOR SELECT
USING (published = true);

-- Admins can view all posts (including drafts)
CREATE POLICY "Admins can view all posts"
ON public.blog_posts
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can create posts
CREATE POLICY "Admins can create posts"
ON public.blog_posts
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Admins can update posts
CREATE POLICY "Admins can update posts"
ON public.blog_posts
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can delete posts
CREATE POLICY "Admins can delete posts"
ON public.blog_posts
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Trigger for updating updated_at
CREATE OR REPLACE FUNCTION public.update_blog_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_blog_updated_at();
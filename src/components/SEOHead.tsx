import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

const SEOHead = ({ 
  title = "Previse Mortgage - Professional Mortgage Services in Pennsylvania",
  description = "Expert mortgage lending services in Pennsylvania. Specializing in home loans, refinancing, VA loans, FHA loans, and investment property financing with competitive rates and personalized service.",
  keywords = "mortgage lender, home loans, refinancing, VA loans, FHA loans, Pennsylvania mortgage, Spring Grove PA, NMLS licensed, investment property loans, first time homebuyer",
  canonicalUrl = "https://previsemortgage.com",
  noIndex = false
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Set page title
    document.title = title;
    
    // Set or update meta description
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = description;
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set or update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
    if (metaKeywords) {
      metaKeywords.content = keywords;
    } else {
      const keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      keywordsMeta.content = keywords;
      document.head.appendChild(keywordsMeta);
    }

    // Set canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = canonicalUrl;
    } else {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    // Set Open Graph tags for better social sharing
    const setOGTag = (property: string, content: string) => {
      const existingTag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (existingTag) {
        existingTag.content = content;
      } else {
        const tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.content = content;
        document.head.appendChild(tag);
      }
    };

    setOGTag('og:title', title);
    setOGTag('og:description', description);
    setOGTag('og:url', canonicalUrl);
    setOGTag('og:type', 'website');
    setOGTag('og:site_name', 'Previse Mortgage');
    
    // Twitter Card tags
    const setTwitterTag = (name: string, content: string) => {
      const existingTag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (existingTag) {
        existingTag.content = content;
      } else {
        const tag = document.createElement('meta');
        tag.name = name;
        tag.content = content;
        document.head.appendChild(tag);
      }
    };

    setTwitterTag('twitter:card', 'summary_large_image');
    setTwitterTag('twitter:title', title);
    setTwitterTag('twitter:description', description);

    // Add robots meta tag for SEO
    const robotsTag = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    const robotsContent = noIndex 
      ? 'noindex, nofollow' 
      : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    
    if (robotsTag) {
      robotsTag.content = robotsContent;
    } else {
      const robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = robotsContent;
      document.head.appendChild(robots);
    }

    // Add viewport meta tag if not present
    const viewportTag = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    if (!viewportTag) {
      const viewport = document.createElement('meta');
      viewport.name = 'viewport';
      viewport.content = 'width=device-width, initial-scale=1';
      document.head.appendChild(viewport);
    }

  }, [title, description, keywords, canonicalUrl, noIndex]);

  return null;
};

export default SEOHead;
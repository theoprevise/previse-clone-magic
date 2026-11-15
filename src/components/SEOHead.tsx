
interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  /** Open Graph type: "website" (default), "article" for blog posts, "product" for loan product pages. */
  ogType?: "website" | "article" | "product";
  /** Absolute https URL of the share image for this page. */
  ogImage?: string | null;
}

// Page metadata is server-rendered by each route's head() in src/routes; this component is kept so
// existing page markup compiles, and intentionally renders nothing.
const SEOHead = (_props: SEOHeadProps) => null;

export default SEOHead;

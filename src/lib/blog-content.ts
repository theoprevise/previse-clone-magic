import sanitizeHtml from "sanitize-html";
import { decodeHTML } from "entities";
import type { Database } from "@/integrations/supabase/types";

export type BlogArticle = Pick<Database["public"]["Tables"]["blog_posts"]["Row"],
  "id" | "title" | "slug" | "excerpt" | "content" | "featured_image" | "published" | "created_at" | "updated_at">;

// DOM-independent: identical sanitization in the browser and during Worker SSR.
export function sanitizeArticleHtml(content: string): string {
  return sanitizeHtml(content, {
    allowedTags: ["p", "br", "strong", "em", "u", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li", "a", "blockquote", "img", "code", "pre", "table", "thead", "tbody", "tr", "th", "td", "div", "span"],
    allowedAttributes: { "*": ["class"], a: ["href", "target", "rel"], img: ["src", "alt", "width", "height", "loading"] },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowedSchemesByTag: { img: ["https", "http"] },
    allowProtocolRelative: false,
    transformTags: {
      h1: "h2",
      a: (tagName, attribs) => ({ tagName, attribs: { ...attribs, ...(attribs["target"] === "_blank" ? { rel: "noopener noreferrer" } : {}) } }),
    },
  });
}

export function articleDescription(post: Pick<BlogArticle, "excerpt" | "content">): string {
  const text = sanitizeHtml((post.excerpt || post.content).replace(/<\/(?:p|div|li|h[1-6])>|<br\s*\/?>/gi, " "), { allowedTags: [], allowedAttributes: {} });
  return decodeHTML(text).replace(/\s+/g, " ").trim().slice(0, 160);
}

export function absoluteArticleImage(image: string | null): string | null {
  if (!image) return null;
  try {
    const url = new URL(image);
    return url.protocol === "https:" ? url.href : null;
  } catch { return null; }
}

export function requireBlogData<T>(data: T | null, error: unknown): T | null {
  if (error) throw new Error("Articles could not be loaded. Please try again.");
  return data;
}

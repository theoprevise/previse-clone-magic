import { createElement, type ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import type { BlogArticle } from "@/lib/blog-content";

vi.mock("@/components/Header", () => ({ default: () => null }));
vi.mock("@/components/Footer", () => ({ default: () => null }));
vi.mock("@/components/SEOHead", () => ({ default: () => null }));
vi.mock("@/lib/router-compat", () => ({
  Link: ({ to, children, ...props }: { to: string; children: ReactNode }) => createElement("a", { ...props, href: to }, children),
}));

import BlogPost from "@/pages/BlogPost";

describe("blog article server rendering", () => {
  it("renders untrusted saved article content without executing or exposing injected scripts", () => {
    const post: BlogArticle = {
      id: "ssr-regression-fixture", slug: "ssr-regression-fixture", title: "Income review",
      content: '<p>Rental documentation</p><script>window.injected=true</script><img src="https://example.com/property.jpg" onerror="window.injected=true">',
      excerpt: null, featured_image: null, published: true,
      created_at: "2026-11-19T12:00:00Z", updated_at: "2026-11-19T12:00:00Z",
    };
    const html = renderToString(createElement(BlogPost, { post }));
    expect(html).not.toContain("window.injected");
    expect(html).not.toContain("onerror=");
  });
});
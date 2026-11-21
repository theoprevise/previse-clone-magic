import { describe, expect, it } from "vitest";
import { sanitizeArticleHtml, articleDescription, absoluteArticleImage, requireBlogData } from "@/lib/blog-content";

describe("article content security", () => {
  it("removes executable scripts and event handlers", () => {
    const result = sanitizeArticleHtml('<p onclick="alert(1)">Rental income</p><script>alert(1)</script><img src="https://example.com/house.jpg" onerror="alert(1)">');
    expect(result).toContain("Rental income");
    expect(result).not.toMatch(/script|onclick|onerror|alert/);
  });
  it("rejects script URLs", () => {
    expect(sanitizeArticleHtml('<a href="javascript:alert(1)">Inquiry</a>')).not.toContain("javascript:");
  });
  it("does not accept executable CSS or embedded data images", () => {
    expect(sanitizeArticleHtml('<p style="background:url(javascript:alert(1))">Content</p><img src="data:image/svg+xml,test">')).not.toMatch(/javascript:|data:image|style=/);
  });
  it("does not mask a data-service error as an empty or missing result", () => {
    expect(() => requireBlogData(null, { message: "unavailable" })).toThrow("Articles could not be loaded");
    expect(requireBlogData([], null)).toEqual([]);
    expect(requireBlogData(null, null)).toBeNull();
  });
  it("accepts only absolute HTTPS sharing images", () => {
    expect(absoluteArticleImage("javascript:alert(1)")).toBeNull();
    expect(absoluteArticleImage("/photo.jpg")).toBeNull();
    expect(absoluteArticleImage("https://example.com/photo.jpg")).toBe("https://example.com/photo.jpg");
  });
});

describe("description extraction", () => {
  it("returns decoded text and drops executable content", () => {
    expect(articleDescription({ excerpt: null, content: '<p>Rent &amp; taxes</p><p>Review income.</p><script>secret()</script>' })).toBe("Rent & taxes Review income.");
  });
});

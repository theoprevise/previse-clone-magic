import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { LEARN_ARTICLES } from "@/lib/learning-center";

describe("Mortgage Learning Center", () => {
  it("has five articles with unique titles and descriptions", () => {
    expect(LEARN_ARTICLES).toHaveLength(5);
    expect(new Set(LEARN_ARTICLES.map((a) => a.title)).size).toBe(5);
    expect(new Set(LEARN_ARTICLES.map((a) => a.description)).size).toBe(5);
  });
  it("lists every article in the sitemap", () => {
    const xml = readFileSync("public/sitemap.xml", "utf8");
    for (const a of LEARN_ARTICLES) expect(xml).toContain(`https://previsemortgage.com/learn/${a.slug}<`);
  });
});

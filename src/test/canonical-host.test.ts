import { describe, expect, it } from "vitest";

import { canonicalHostRedirect } from "@/server";

describe("primary domain", () => {
  it("permanently redirects www to the apex domain, keeping path and query", () => {
    const res = canonicalHostRedirect(new Request("https://www.previsemortgage.com/dscr-loans?utm=x"));
    expect(res?.status).toBe(301);
    expect(res?.headers.get("location")).toBe("https://previsemortgage.com/dscr-loans?utm=x");
  });

  it("does not redirect the apex domain", () => {
    expect(canonicalHostRedirect(new Request("https://previsemortgage.com/blog"))).toBeUndefined();
  });
});

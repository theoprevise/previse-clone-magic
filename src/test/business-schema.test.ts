import { describe, expect, it } from "vitest";
import { BUSINESS_SCHEMA, FOUNDER_SCHEMA, WEBSITE_SCHEMA, serializeSchema } from "@/lib/business-schema";

describe("structured-data serialization", () => {
  it("prevents article data from closing a metadata script", () => {
    const serialized = serializeSchema({ description: "</script><script>alert(1)</script>" });
    expect(serialized).not.toContain("</script>");
    expect(JSON.parse(serialized)).toEqual({ description: "</script><script>alert(1)</script>" });
  });
  it("uses one shared identity without inventing a site-search endpoint", () => {
    expect(FOUNDER_SCHEMA.worksFor["@id"]).toBe(BUSINESS_SCHEMA["@id"]);
    expect(WEBSITE_SCHEMA.publisher["@id"]).toBe(BUSINESS_SCHEMA["@id"]);
    expect(WEBSITE_SCHEMA).not.toHaveProperty("potentialAction");
  });
});
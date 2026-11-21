import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("ChatGPT Search crawler access", () => {
  it("explicitly permits OAI-SearchBot to crawl all public service paths", () => {
    const robots = readFileSync("public/robots.txt", "utf8");
    const groups = robots.split(/\n\s*\n/);
    const searchBotGroup = groups.find((group) =>
      /^User-agent:\s*OAI-SearchBot\s*$/im.test(group),
    );

    expect(searchBotGroup).toBeDefined();
    expect(searchBotGroup).toMatch(/^Allow:\s*\/\s*$/m);
    expect(searchBotGroup).not.toMatch(/^Disallow:\s*\S+/im);
  });
});
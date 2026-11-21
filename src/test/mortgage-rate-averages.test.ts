import { describe, expect, it } from "vitest";
import { mortgageRateAverages, MORTGAGE_RATE_SOURCE, weeklyRateChange } from "../lib/mortgage-rate-averages";

describe("Freddie Mac national average snapshot", () => {
  it("contains the verified November 19, 2026 averages", () => {
    expect(MORTGAGE_RATE_SOURCE.publishedAt).toBe("November 19, 2026");
    expect(mortgageRateAverages.map(({ type, rate }) => ({ type, rate }))).toEqual([
      { type: "30-Year Fixed", rate: 7.28 },
      { type: "15-Year Fixed", rate: 6.66 },
    ]);
  });

  it("does not invent APRs or rates for products outside the survey", () => {
    expect(mortgageRateAverages).toHaveLength(2);
    for (const average of mortgageRateAverages) expect(average).not.toHaveProperty("apr");
  });

  it("computes weekly changes in percentage points", () => {
    expect(weeklyRateChange(7.28, 7.11)).toBe(0.17);
    expect(weeklyRateChange(6.66, 6.45)).toBe(0.21);
  });
});
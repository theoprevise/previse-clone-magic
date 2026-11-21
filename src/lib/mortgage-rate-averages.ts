// Verified against https://www.freddiemac.com/pmms on November 21, 2026.
// This is a dated snapshot, not an automatic feed or a Previse rate quote.
export const MORTGAGE_RATE_SOURCE = {
  name: "Freddie Mac Primary Mortgage Market Survey® (PMMS®)",
  url: "https://www.freddiemac.com/pmms",
  publishedAt: "November 19, 2026",
} as const;

export const mortgageRateAverages = [
  {
    type: "30-Year Fixed",
    rate: 7.28,
    previousRate: 7.11,
    description: "Conventional conforming purchase mortgages",
    bestFor: "30-year loan term",
  },
  {
    type: "15-Year Fixed",
    rate: 6.66,
    previousRate: 6.45,
    description: "Conventional conforming purchase mortgages",
    bestFor: "15-year loan term",
  },
] as const;

export function weeklyRateChange(rate: number, previousRate: number): number {
  return Number((rate - previousRate).toFixed(2));
}
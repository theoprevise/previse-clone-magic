import { describe, expect, it } from "vitest";
import { INVESTMENT_STATES, RESIDENTIAL_STATES } from "@/lib/service-areas";

describe("lending service areas", () => {
  it("covers the approved 29 states for business-purpose investment loans", () => {
    expect(INVESTMENT_STATES).toEqual([
      "Alabama",
      "Arkansas",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Indiana",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Mississippi",
      "Missouri",
      "New Hampshire",
      "New Mexico",
      "Ohio",
      "Oklahoma",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "Tennessee",
      "Texas",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ]);
  });

  it("limits residential loans to Pennsylvania and Colorado", () => {
    expect(RESIDENTIAL_STATES).toEqual(["Pennsylvania", "Colorado"]);
  });
});

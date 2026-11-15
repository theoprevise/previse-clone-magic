export const INVESTMENT_STATES = [
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
] as const;

export const RESIDENTIAL_STATES = ["Pennsylvania", "Colorado"] as const;

export const INVESTMENT_AREA_SERVED = INVESTMENT_STATES.map((name) => ({
  "@type": "State",
  name,
}));

export const RESIDENTIAL_AREA_SERVED = RESIDENTIAL_STATES.map((name) => ({
  "@type": "State",
  name,
}));

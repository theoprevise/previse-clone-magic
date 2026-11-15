import { createFileRoute } from "@tanstack/react-router";
import MortgageCalculator from "@/pages/MortgageCalculator";

export const Route = createFileRoute("/mortgage-calculator")({
  head: () => ({
    meta: [
      {
        "title": "Mortgage Calculator | Estimate Payments | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Mortgage Calculator | Estimate Payments | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Mortgage Calculator | Estimate Payments | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Estimate monthly mortgage payments, refinance savings and DSCR ratios for Pennsylvania and Colorado home and investment loans with Previse Mortgage."
      },
      {
        "property": "og:description",
        "content": "Estimate monthly mortgage payments, refinance savings and DSCR ratios for Pennsylvania and Colorado home and investment loans with Previse Mortgage."
      },
      {
        "name": "twitter:description",
        "content": "Estimate monthly mortgage payments, refinance savings and DSCR ratios for Pennsylvania and Colorado home and investment loans with Previse Mortgage."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/mortgage-calculator"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/mortgage-calculator"}],
  }),
  component: MortgageCalculator,
});

import { createFileRoute } from "@tanstack/react-router";
import DSCRLoanGuide from "@/pages/DSCRLoanGuide";

export const Route = createFileRoute("/dscr-loan-guide")({
  head: () => ({
    meta: [
      {
        "title": "Free DSCR Loan Guide for Investors | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Free DSCR Loan Guide for Investors | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Free DSCR Loan Guide for Investors | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Download our free DSCR loan guide for real estate investors. Includes DSCR calculators, qualification checklists, and portfolio scaling strategies."
      },
      {
        "property": "og:description",
        "content": "Download our free DSCR loan guide for real estate investors. Includes DSCR calculators, qualification checklists, and portfolio scaling strategies."
      },
      {
        "name": "twitter:description",
        "content": "Download our free DSCR loan guide for real estate investors. Includes DSCR calculators, qualification checklists, and portfolio scaling strategies."
      },
      {
        "name": "keywords",
        "content": "DSCR loan guide, investor mortgage guide, rental property financing, DSCR ratio calculator, investment property loan guide"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/dscr-loan-guide"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/dscr-loan-guide"}],
  }),
  component: DSCRLoanGuide,
});

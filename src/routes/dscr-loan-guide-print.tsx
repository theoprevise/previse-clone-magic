import { createFileRoute } from "@tanstack/react-router";
import DSCRLoanGuidePrint from "@/pages/DSCRLoanGuidePrint";

export const Route = createFileRoute("/dscr-loan-guide-print")({
  head: () => ({
    meta: [
      {
        "title": "DSCR Loan Guide (Printable) | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "DSCR Loan Guide (Printable) | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "DSCR Loan Guide (Printable) | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Printable version of the Previse Mortgage DSCR loan guide for real estate investors."
      },
      {
        "property": "og:description",
        "content": "Printable version of the Previse Mortgage DSCR loan guide for real estate investors."
      },
      {
        "name": "twitter:description",
        "content": "Printable version of the Previse Mortgage DSCR loan guide for real estate investors."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/dscr-loan-guide-print"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/dscr-loan-guide-print"}],
  }),
  component: DSCRLoanGuidePrint,
});

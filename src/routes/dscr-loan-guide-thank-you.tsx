import { createFileRoute } from "@tanstack/react-router";
import DSCRLoanGuideThankYou from "@/pages/DSCRLoanGuideThankYou";

export const Route = createFileRoute("/dscr-loan-guide-thank-you")({
  head: () => ({
    meta: [
      {
        "title": "Your DSCR Guide is Ready | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Your DSCR Guide is Ready | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Your DSCR Guide is Ready | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Thank you for requesting our DSCR Loan Investor Guide. Access your copy now."
      },
      {
        "property": "og:description",
        "content": "Thank you for requesting our DSCR Loan Investor Guide. Access your copy now."
      },
      {
        "name": "twitter:description",
        "content": "Thank you for requesting our DSCR Loan Investor Guide. Access your copy now."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/dscr-loan-guide-thank-you"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/dscr-loan-guide-thank-you"}],
  }),
  component: DSCRLoanGuideThankYou,
});

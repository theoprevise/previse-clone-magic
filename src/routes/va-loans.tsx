import { createFileRoute } from "@tanstack/react-router";
import VALoans from "@/pages/VALoans";

export const Route = createFileRoute("/va-loans")({
  head: () => ({
    meta: [
      {
        "title": "VA Loans Pennsylvania | Zero Down Military Home Loans | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "VA Loans Pennsylvania | Zero Down Military Home Loans | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "VA Loans Pennsylvania | Zero Down Military Home Loans | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "VA home loans for veterans, active-duty military, and surviving spouses in Pennsylvania. Zero down payment, no PMI, and competitive rates. Expert VA loan guidance."
      },
      {
        "property": "og:description",
        "content": "VA home loans for veterans, active-duty military, and surviving spouses in Pennsylvania. Zero down payment, no PMI, and competitive rates. Expert VA loan guidance."
      },
      {
        "name": "twitter:description",
        "content": "VA home loans for veterans, active-duty military, and surviving spouses in Pennsylvania. Zero down payment, no PMI, and competitive rates. Expert VA loan guidance."
      },
      {
        "name": "keywords",
        "content": "VA loans, VA home loan, veteran mortgage, military home loan, zero down payment VA, no PMI, Pennsylvania VA loan, VA loan eligibility, VA funding fee, Certificate of Eligibility"
      },
      {
        "property": "og:type",
        "content": "product"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/va-loans"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/va-loans"}],
  }),
  component: VALoans,
});

import { createFileRoute } from "@tanstack/react-router";
import USDALoans from "@/pages/USDALoans";

export const Route = createFileRoute("/usda-loans")({
  head: () => ({
    meta: [
      {
        "title": "USDA Loans Pennsylvania | Zero Down Payment Rural Mortgages | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "USDA Loans Pennsylvania | Zero Down Payment Rural Mortgages | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "USDA Loans Pennsylvania | Zero Down Payment Rural Mortgages | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "USDA loans in Pennsylvania with zero down payment for rural and suburban homes. Check your eligibility for 100% financing. No PMI required!"
      },
      {
        "property": "og:description",
        "content": "USDA loans in Pennsylvania with zero down payment for rural and suburban homes. Check your eligibility for 100% financing. No PMI required!"
      },
      {
        "name": "twitter:description",
        "content": "USDA loans in Pennsylvania with zero down payment for rural and suburban homes. Check your eligibility for 100% financing. No PMI required!"
      },
      {
        "name": "keywords",
        "content": "USDA loans, rural development loan, zero down payment, Pennsylvania rural mortgage, 100% financing, no money down"
      },
      {
        "property": "og:type",
        "content": "product"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/usda-loans"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/usda-loans"}],
  }),
  component: USDALoans,
});

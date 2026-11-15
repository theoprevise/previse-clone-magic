import { createFileRoute } from "@tanstack/react-router";
import FHALoans from "@/pages/FHALoans";

export const Route = createFileRoute("/fha-loans")({
  head: () => ({
    meta: [
      {
        "title": "FHA Loans Pennsylvania | Low Down Payment Mortgages | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "FHA Loans Pennsylvania | Low Down Payment Mortgages | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "FHA Loans Pennsylvania | Low Down Payment Mortgages | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "FHA loans in Pennsylvania with as little as 3.5% down payment. Perfect for first-time homebuyers and those with lower credit scores. Get pre-approved today!"
      },
      {
        "property": "og:description",
        "content": "FHA loans in Pennsylvania with as little as 3.5% down payment. Perfect for first-time homebuyers and those with lower credit scores. Get pre-approved today!"
      },
      {
        "name": "twitter:description",
        "content": "FHA loans in Pennsylvania with as little as 3.5% down payment. Perfect for first-time homebuyers and those with lower credit scores. Get pre-approved today!"
      },
      {
        "name": "keywords",
        "content": "FHA loans, FHA mortgage, first time homebuyer, low down payment, Pennsylvania FHA loans, 3.5% down payment"
      },
      {
        "property": "og:type",
        "content": "product"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/fha-loans"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/fha-loans"}],
  }),
  component: FHALoans,
});

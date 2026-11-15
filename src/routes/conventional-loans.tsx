import { createFileRoute } from "@tanstack/react-router";
import ConventionalLoans from "@/pages/ConventionalLoans";

export const Route = createFileRoute("/conventional-loans")({
  head: () => ({
    meta: [
      {
        "title": "Conventional Loans Pennsylvania | Competitive Mortgage Rates | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Conventional Loans Pennsylvania | Competitive Mortgage Rates | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Conventional Loans Pennsylvania | Competitive Mortgage Rates | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Conventional mortgage loans in Pennsylvania with competitive rates. No PMI with 20% down. Perfect for buyers with good credit. Get your rate quote today!"
      },
      {
        "property": "og:description",
        "content": "Conventional mortgage loans in Pennsylvania with competitive rates. No PMI with 20% down. Perfect for buyers with good credit. Get your rate quote today!"
      },
      {
        "name": "twitter:description",
        "content": "Conventional mortgage loans in Pennsylvania with competitive rates. No PMI with 20% down. Perfect for buyers with good credit. Get your rate quote today!"
      },
      {
        "name": "keywords",
        "content": "conventional loans, conventional mortgage, competitive mortgage rates, Pennsylvania mortgage, no PMI, 20% down payment"
      },
      {
        "property": "og:type",
        "content": "product"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/conventional-loans"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/conventional-loans"}],
  }),
  component: ConventionalLoans,
});

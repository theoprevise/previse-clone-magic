import { createFileRoute } from "@tanstack/react-router";
import MortgageSolutions from "@/pages/MortgageSolutions";

export const Route = createFileRoute("/mortgage-solutions")({
  head: () => ({
    meta: [
      {
        "title": "Mortgage Solutions | Home Loan Programs | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Mortgage Solutions | Home Loan Programs | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Mortgage Solutions | Home Loan Programs | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Explore mortgage solutions including USDA, FHA, conventional, bank statement, and investment property loans. Find the right home financing program for your needs in Pennsylvania."
      },
      {
        "property": "og:description",
        "content": "Explore mortgage solutions including USDA, FHA, conventional, bank statement, and investment property loans. Find the right home financing program for your needs in Pennsylvania."
      },
      {
        "name": "twitter:description",
        "content": "Explore mortgage solutions including USDA, FHA, conventional, bank statement, and investment property loans. Find the right home financing program for your needs in Pennsylvania."
      },
      {
        "name": "keywords",
        "content": "mortgage solutions, home loan programs, USDA loans, FHA loans, conventional mortgage, bank statement loans, investment property financing, Pennsylvania mortgage"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/mortgage-solutions"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/mortgage-solutions"}],
  }),
  component: MortgageSolutions,
});

import { createFileRoute } from "@tanstack/react-router";
import MortgagePrograms from "@/pages/MortgagePrograms";

export const Route = createFileRoute("/mortgage-programs")({
  head: () => ({
    meta: [
      {
        "title": "Mortgage Programs | FHA, VA, Conventional & USDA Loans | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Mortgage Programs | FHA, VA, Conventional & USDA Loans | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Mortgage Programs | FHA, VA, Conventional & USDA Loans | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Explore mortgage loan programs at Previse Mortgage. Compare FHA, VA, Conventional, USDA, and Jumbo loans. Find the perfect home financing solution in Pennsylvania."
      },
      {
        "property": "og:description",
        "content": "Explore mortgage loan programs at Previse Mortgage. Compare FHA, VA, Conventional, USDA, and Jumbo loans. Find the perfect home financing solution in Pennsylvania."
      },
      {
        "name": "twitter:description",
        "content": "Explore mortgage loan programs at Previse Mortgage. Compare FHA, VA, Conventional, USDA, and Jumbo loans. Find the perfect home financing solution in Pennsylvania."
      },
      {
        "name": "keywords",
        "content": "mortgage programs, FHA loans, VA loans, conventional loans, USDA loans, jumbo loans, Pennsylvania mortgage, home loan options"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/mortgage-programs"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/mortgage-programs"}],
  }),
  component: MortgagePrograms,
});

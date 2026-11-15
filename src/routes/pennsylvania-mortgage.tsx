import { createFileRoute } from "@tanstack/react-router";
import PennsylvaniaMortgage from "@/pages/PennsylvaniaMortgage";

export const Route = createFileRoute("/pennsylvania-mortgage")({
  head: () => ({
    meta: [
      {
        "title": "Pennsylvania Mortgage Lender | PA Home Loans | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Pennsylvania Mortgage Lender | PA Home Loans | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Pennsylvania Mortgage Lender | PA Home Loans | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Licensed Pennsylvania mortgage lender offering FHA, conventional, USDA, and DSCR loans across all PA counties. Competitive rates, fast closings, and personalized service from Spring Grove, PA."
      },
      {
        "property": "og:description",
        "content": "Licensed Pennsylvania mortgage lender offering FHA, conventional, USDA, and DSCR loans across all PA counties. Competitive rates, fast closings, and personalized service from Spring Grove, PA."
      },
      {
        "name": "twitter:description",
        "content": "Licensed Pennsylvania mortgage lender offering FHA, conventional, USDA, and DSCR loans across all PA counties. Competitive rates, fast closings, and personalized service from Spring Grove, PA."
      },
      {
        "name": "keywords",
        "content": "Pennsylvania mortgage lender, PA home loans, mortgage broker Pennsylvania, PA mortgage rates, Spring Grove PA mortgage, York County mortgage, Pennsylvania FHA loans, PA first time homebuyer, Pennsylvania refinance, PA USDA loans, mortgage company Pennsylvania"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/pennsylvania-mortgage"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/pennsylvania-mortgage"}],
  }),
  component: PennsylvaniaMortgage,
});

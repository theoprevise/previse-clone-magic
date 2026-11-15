import { createFileRoute } from "@tanstack/react-router";
import YorkPAMortgage from "@/pages/YorkPAMortgage";

export const Route = createFileRoute("/mortgage-lender-york-pa")({
  head: () => ({
    meta: [
      {
        "title": "Mortgage Lender in York, PA | Home Loans York County | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Mortgage Lender in York, PA | Home Loans York County | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Mortgage Lender in York, PA | Home Loans York County | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Local mortgage lender serving York, PA and York County. FHA, conventional, USDA, and investment property loans with competitive rates. Based in nearby Spring Grove, PA."
      },
      {
        "property": "og:description",
        "content": "Local mortgage lender serving York, PA and York County. FHA, conventional, USDA, and investment property loans with competitive rates. Based in nearby Spring Grove, PA."
      },
      {
        "name": "twitter:description",
        "content": "Local mortgage lender serving York, PA and York County. FHA, conventional, USDA, and investment property loans with competitive rates. Based in nearby Spring Grove, PA."
      },
      {
        "name": "keywords",
        "content": "mortgage lender York PA, York PA home loans, York County mortgage broker, mortgage rates York Pennsylvania, Spring Grove PA mortgage, home loans York County PA, FHA loans York PA, first time homebuyer York PA, refinance York PA, USDA loans York County"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/mortgage-lender-york-pa"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/mortgage-lender-york-pa"}],
  }),
  component: YorkPAMortgage,
});

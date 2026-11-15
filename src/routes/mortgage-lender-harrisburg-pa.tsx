import { createFileRoute } from "@tanstack/react-router";
import HarrisburgPAMortgage from "@/pages/HarrisburgPAMortgage";

export const Route = createFileRoute("/mortgage-lender-harrisburg-pa")({
  head: () => ({
    meta: [
      {
        "title": "Mortgage Lender in Harrisburg, PA | Home Loans Dauphin County | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Mortgage Lender in Harrisburg, PA | Home Loans Dauphin County | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Mortgage Lender in Harrisburg, PA | Home Loans Dauphin County | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Trusted mortgage lender serving Harrisburg, PA and the Greater Harrisburg area. FHA, conventional, USDA, and investment property loans with competitive rates and personalized service."
      },
      {
        "property": "og:description",
        "content": "Trusted mortgage lender serving Harrisburg, PA and the Greater Harrisburg area. FHA, conventional, USDA, and investment property loans with competitive rates and personalized service."
      },
      {
        "name": "twitter:description",
        "content": "Trusted mortgage lender serving Harrisburg, PA and the Greater Harrisburg area. FHA, conventional, USDA, and investment property loans with competitive rates and personalized service."
      },
      {
        "name": "keywords",
        "content": "mortgage lender Harrisburg PA, Harrisburg PA home loans, Dauphin County mortgage broker, mortgage rates Harrisburg Pennsylvania, home loans Harrisburg PA, FHA loans Harrisburg, first time homebuyer Harrisburg PA, refinance Harrisburg PA, Greater Harrisburg mortgage, Camp Hill PA mortgage"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/mortgage-lender-harrisburg-pa"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/mortgage-lender-harrisburg-pa"}],
  }),
  component: HarrisburgPAMortgage,
});

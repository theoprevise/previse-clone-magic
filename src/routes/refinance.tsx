import { createFileRoute } from "@tanstack/react-router";
import Refinance from "@/pages/Refinance";

export const Route = createFileRoute("/refinance")({
  head: () => ({
    meta: [
      {
        "title": "Refinance Your Mortgage in Pennsylvania | Lower Rates | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Refinance Your Mortgage in Pennsylvania | Lower Rates | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Refinance Your Mortgage in Pennsylvania | Lower Rates | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Refinance your Pennsylvania mortgage to lower your rate, reduce monthly payments, or access home equity. Cash-out and rate-and-term refinancing with competitive rates."
      },
      {
        "property": "og:description",
        "content": "Refinance your Pennsylvania mortgage to lower your rate, reduce monthly payments, or access home equity. Cash-out and rate-and-term refinancing with competitive rates."
      },
      {
        "name": "twitter:description",
        "content": "Refinance your Pennsylvania mortgage to lower your rate, reduce monthly payments, or access home equity. Cash-out and rate-and-term refinancing with competitive rates."
      },
      {
        "name": "keywords",
        "content": "refinance mortgage Pennsylvania, mortgage refinancing PA, cash out refinance, lower mortgage rate, rate and term refinance, home equity, refinance calculator, Pennsylvania refinance rates"
      },
      {
        "property": "og:type",
        "content": "product"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/refinance"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/refinance"}],
  }),
  component: Refinance,
});

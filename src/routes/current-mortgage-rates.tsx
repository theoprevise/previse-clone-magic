import { createFileRoute } from "@tanstack/react-router";
import CurrentMortgageRates from "@/pages/CurrentMortgageRates";

export const Route = createFileRoute("/current-mortgage-rates")({
  head: () => ({
    meta: [
      {
        "title": "Current Mortgage Rates Today | Compare Home Loan Rates | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Current Mortgage Rates Today | Compare Home Loan Rates | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Current Mortgage Rates Today | Compare Home Loan Rates | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Compare today's mortgage rates for 30-year fixed, 15-year fixed, FHA, VA, and jumbo loans. Updated weekly with rate trends and expert analysis. Get a personalized rate quote."
      },
      {
        "property": "og:description",
        "content": "Compare today's mortgage rates for 30-year fixed, 15-year fixed, FHA, VA, and jumbo loans. Updated weekly with rate trends and expert analysis. Get a personalized rate quote."
      },
      {
        "name": "twitter:description",
        "content": "Compare today's mortgage rates for 30-year fixed, 15-year fixed, FHA, VA, and jumbo loans. Updated weekly with rate trends and expert analysis. Get a personalized rate quote."
      },
      {
        "name": "keywords",
        "content": "current mortgage rates, today's mortgage rates, 30 year fixed rate, 15 year mortgage rate, FHA rates, VA loan rates, jumbo mortgage rates, compare mortgage rates, competitive mortgage rates"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/current-mortgage-rates"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/current-mortgage-rates"}],
  }),
  component: CurrentMortgageRates,
});

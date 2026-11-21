import { createFileRoute } from "@tanstack/react-router";
import CurrentMortgageRates from "@/pages/CurrentMortgageRates";

export const Route = createFileRoute("/current-mortgage-rates")({
  head: () => ({
    meta: [
      { name: "twitter:card", content: "summary_large_image" },
      {
        "title": "Freddie Mac Mortgage Rate Averages | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Freddie Mac Mortgage Rate Averages | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Freddie Mac Mortgage Rate Averages | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "View Freddie Mac national 30-year and 15-year fixed mortgage averages, dated November 19, 2026. These are market benchmarks, not Previse loan quotes."
      },
      {
        "property": "og:description",
        "content": "View Freddie Mac national 30-year and 15-year fixed mortgage averages, dated November 19, 2026. These are market benchmarks, not Previse loan quotes."
      },
      {
        "name": "twitter:description",
        "content": "View Freddie Mac national 30-year and 15-year fixed mortgage averages, dated November 19, 2026. These are market benchmarks, not Previse loan quotes."
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

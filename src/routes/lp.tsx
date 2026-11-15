import { createFileRoute } from "@tanstack/react-router";
import CampaignLanding from "@/pages/CampaignLanding";

export const Route = createFileRoute("/lp")({
  head: () => ({
    meta: [
      {
        "title": "Special Mortgage Offer | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Special Mortgage Offer | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Special Mortgage Offer | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Exclusive mortgage rates and personalized service. Get pre-approved today with Previse Mortgage."
      },
      {
        "property": "og:description",
        "content": "Exclusive mortgage rates and personalized service. Get pre-approved today with Previse Mortgage."
      },
      {
        "name": "twitter:description",
        "content": "Exclusive mortgage rates and personalized service. Get pre-approved today with Previse Mortgage."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/lp"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/lp"}],
  }),
  component: CampaignLanding,
});

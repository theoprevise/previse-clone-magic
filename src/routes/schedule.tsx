import { createFileRoute } from "@tanstack/react-router";
import Schedule from "@/pages/Schedule";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      {
        "title": "Schedule a Free Mortgage Consultation | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Schedule a Free Mortgage Consultation | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Schedule a Free Mortgage Consultation | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Book a free 30-minute mortgage consultation with Previse Mortgage. Get expert advice on home loans, refinancing, and investment property financing in Pennsylvania."
      },
      {
        "property": "og:description",
        "content": "Book a free 30-minute mortgage consultation with Previse Mortgage. Get expert advice on home loans, refinancing, and investment property financing in Pennsylvania."
      },
      {
        "name": "twitter:description",
        "content": "Book a free 30-minute mortgage consultation with Previse Mortgage. Get expert advice on home loans, refinancing, and investment property financing in Pennsylvania."
      },
      {
        "name": "keywords",
        "content": "mortgage consultation, free mortgage advice, schedule mortgage appointment, Pennsylvania mortgage advisor"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/schedule"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/schedule"}],
  }),
  component: Schedule,
});

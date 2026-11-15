import { createFileRoute } from "@tanstack/react-router";
import Events from "@/pages/Events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      {
        "title": "Free Homebuyer Events in Pennsylvania | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Free Homebuyer Events in Pennsylvania | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Free Homebuyer Events in Pennsylvania | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Join free Previse Mortgage educational events to learn about home loans, budgeting and the mortgage process."
      },
      {
        "property": "og:description",
        "content": "Join free Previse Mortgage educational events to learn about home loans, budgeting and the mortgage process."
      },
      {
        "name": "twitter:description",
        "content": "Join free Previse Mortgage educational events to learn about home loans, budgeting and the mortgage process."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/events"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/events"}],
  }),
  component: Events,
});

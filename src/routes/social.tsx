import { createFileRoute } from "@tanstack/react-router";
import Social from "@/pages/Social";

export const Route = createFileRoute("/social")({
  head: () => ({
    meta: [
      {
        "title": "Get Pre-Approved | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Get Pre-Approved | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Get Pre-Approved | Previse Mortgage"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/social"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/social"}],
  }),
  component: Social,
});

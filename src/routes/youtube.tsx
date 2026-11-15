import { createFileRoute } from "@tanstack/react-router";
import YouTube from "@/pages/YouTube";

export const Route = createFileRoute("/youtube")({
  head: () => ({
    meta: [
      {
        "title": "Mortgage Tips on YouTube | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Mortgage Tips on YouTube | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Mortgage Tips on YouTube | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Watch Previse Mortgage videos with mortgage tips, market insights and investor loan guidance, and get free resources by email."
      },
      {
        "property": "og:description",
        "content": "Watch Previse Mortgage videos with mortgage tips, market insights and investor loan guidance, and get free resources by email."
      },
      {
        "name": "twitter:description",
        "content": "Watch Previse Mortgage videos with mortgage tips, market insights and investor loan guidance, and get free resources by email."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/youtube"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/youtube"}],
  }),
  component: YouTube,
});

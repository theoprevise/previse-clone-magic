import { createFileRoute } from "@tanstack/react-router";
import YouTubeThankYou from "@/pages/YouTubeThankYou";

export const Route = createFileRoute("/youtube-thank-you")({
  head: () => ({
    meta: [
      {
        "title": "Welcome to the Community | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Welcome to the Community | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Welcome to the Community | Previse Mortgage"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/youtube-thank-you"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/youtube-thank-you"}],
  }),
  component: YouTubeThankYou,
});

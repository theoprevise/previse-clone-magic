import { createFileRoute } from "@tanstack/react-router";
import ThankYou from "@/pages/ThankYou";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      {
        "title": "Thank You | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Thank You | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Thank You | Previse Mortgage"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/thank-you"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/thank-you"}],
  }),
  component: ThankYou,
});

import { createFileRoute } from "@tanstack/react-router";
import SocialThankYou from "@/pages/SocialThankYou";

export const Route = createFileRoute("/social-thank-you")({
  head: () => ({
    meta: [
      {
        "title": "Thanks for Connecting | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Thanks for Connecting | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Thanks for Connecting | Previse Mortgage"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/social-thank-you"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/social-thank-you"}],
  }),
  component: SocialThankYou,
});

import { createFileRoute } from "@tanstack/react-router";
import HomebuyerGuideThankYou from "@/pages/HomebuyerGuideThankYou";

export const Route = createFileRoute("/homebuyer-guide-thank-you")({
  head: () => ({
    meta: [
      {
        "title": "Download Your Free Guide | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Download Your Free Guide | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Download Your Free Guide | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Thank you for requesting our First-Time Homebuyer Guide. Download your copy now."
      },
      {
        "property": "og:description",
        "content": "Thank you for requesting our First-Time Homebuyer Guide. Download your copy now."
      },
      {
        "name": "twitter:description",
        "content": "Thank you for requesting our First-Time Homebuyer Guide. Download your copy now."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/homebuyer-guide-thank-you"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/homebuyer-guide-thank-you"}],
  }),
  component: HomebuyerGuideThankYou,
});

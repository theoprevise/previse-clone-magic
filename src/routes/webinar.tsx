import { createFileRoute } from "@tanstack/react-router";
import Webinar from "@/pages/Webinar";

export const Route = createFileRoute("/webinar")({
  head: () => ({
    meta: [
      {
        "title": "Free Homebuyer Webinar | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Free Homebuyer Webinar | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Free Homebuyer Webinar | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Register for a free Previse Mortgage webinar on buying a home, financing options and preparing for a smooth, predictable closing."
      },
      {
        "property": "og:description",
        "content": "Register for a free Previse Mortgage webinar on buying a home, financing options and preparing for a smooth, predictable closing."
      },
      {
        "name": "twitter:description",
        "content": "Register for a free Previse Mortgage webinar on buying a home, financing options and preparing for a smooth, predictable closing."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/webinar"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/webinar"}],
  }),
  component: Webinar,
});

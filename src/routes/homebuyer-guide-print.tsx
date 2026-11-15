import { createFileRoute } from "@tanstack/react-router";
import HomebuyerGuidePrint from "@/pages/HomebuyerGuidePrint";

export const Route = createFileRoute("/homebuyer-guide-print")({
  head: () => ({
    meta: [
      {
        "title": "Homebuyer Guide (Printable) | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Homebuyer Guide (Printable) | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Homebuyer Guide (Printable) | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Printable version of the Previse Mortgage homebuyer guide."
      },
      {
        "property": "og:description",
        "content": "Printable version of the Previse Mortgage homebuyer guide."
      },
      {
        "name": "twitter:description",
        "content": "Printable version of the Previse Mortgage homebuyer guide."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/homebuyer-guide-print"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/homebuyer-guide-print"}],
  }),
  component: HomebuyerGuidePrint,
});

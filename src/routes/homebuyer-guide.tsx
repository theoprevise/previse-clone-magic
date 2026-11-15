import { createFileRoute } from "@tanstack/react-router";
import HomebuyerGuide from "@/pages/HomebuyerGuide";

export const Route = createFileRoute("/homebuyer-guide")({
  head: () => ({
    meta: [
      {
        "title": "Free First-Time Homebuyer Guide | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Free First-Time Homebuyer Guide | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Free First-Time Homebuyer Guide | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Download our free comprehensive guide for first-time homebuyers. Includes checklists, down payment programs, and step-by-step roadmap to homeownership."
      },
      {
        "property": "og:description",
        "content": "Download our free comprehensive guide for first-time homebuyers. Includes checklists, down payment programs, and step-by-step roadmap to homeownership."
      },
      {
        "name": "twitter:description",
        "content": "Download our free comprehensive guide for first-time homebuyers. Includes checklists, down payment programs, and step-by-step roadmap to homeownership."
      },
      {
        "name": "keywords",
        "content": "first time homebuyer guide, homebuying checklist, down payment assistance, mortgage guide, Pennsylvania first time buyer"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/homebuyer-guide"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/homebuyer-guide"}],
  }),
  component: HomebuyerGuide,
});

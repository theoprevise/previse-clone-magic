import { createFileRoute } from "@tanstack/react-router";
import FirstTimeHomebuyer from "@/pages/FirstTimeHomebuyer";

export const Route = createFileRoute("/first-time-homebuyer")({
  head: () => ({
    meta: [
      {
        "title": "First-Time Homebuyer Guide | Steps to Buying Your First Home | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "First-Time Homebuyer Guide | Steps to Buying Your First Home | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "First-Time Homebuyer Guide | Steps to Buying Your First Home | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Complete first-time homebuyer guide: learn about down payment assistance, FHA loans, pre-approval steps, and how to buy your first home with confidence. Expert guidance from Previse Mortgage."
      },
      {
        "property": "og:description",
        "content": "Complete first-time homebuyer guide: learn about down payment assistance, FHA loans, pre-approval steps, and how to buy your first home with confidence. Expert guidance from Previse Mortgage."
      },
      {
        "name": "twitter:description",
        "content": "Complete first-time homebuyer guide: learn about down payment assistance, FHA loans, pre-approval steps, and how to buy your first home with confidence. Expert guidance from Previse Mortgage."
      },
      {
        "name": "keywords",
        "content": "first time homebuyer, buying first home, down payment assistance, FHA loan first time buyer, how to buy a house, homebuyer guide, pre-approval, mortgage for first time buyers"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/first-time-homebuyer"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/first-time-homebuyer"}],
  }),
  component: FirstTimeHomebuyer,
});

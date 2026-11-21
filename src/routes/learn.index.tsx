import { createFileRoute } from "@tanstack/react-router";
import LearningCenter from "@/pages/learn/LearningCenter";

const TITLE = "Mortgage Learning Center | Homebuying, Refinancing & Investing | Previse Mortgage";
const DESC = "Plain-English mortgage guides on homebuying, refinancing, self-employed borrowers and real estate investing from Previse Mortgage LLC.";
const URL = "https://previsemortgage.com/learn";

export const Route = createFileRoute("/learn/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: LearningCenter,
});

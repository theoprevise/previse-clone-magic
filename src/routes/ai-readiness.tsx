import { createFileRoute } from "@tanstack/react-router";
import AIReadinessAnalysis from "@/pages/AIReadinessAnalysis";

export const Route = createFileRoute("/ai-readiness")({
  head: () => ({
    meta: [
      {
        "title": "AI Readiness Analysis | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "AI Readiness Analysis | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "AI Readiness Analysis | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Internal AI search readiness review for the Previse Mortgage website."
      },
      {
        "property": "og:description",
        "content": "Internal AI search readiness review for the Previse Mortgage website."
      },
      {
        "name": "twitter:description",
        "content": "Internal AI search readiness review for the Previse Mortgage website."
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/ai-readiness"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/ai-readiness"}],
  }),
  component: AIReadinessAnalysis,
});

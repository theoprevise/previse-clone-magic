import { createFileRoute } from "@tanstack/react-router";
import Application from "@/pages/Application";

export const Route = createFileRoute("/application/$loanType")({
  head: () => ({
    meta: [
      {
        "title": "Mortgage Application | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Mortgage Application | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Mortgage Application | Previse Mortgage"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "name": "robots",
        "content": "noindex, nofollow"
      }
    ],
    links: [],
  }),
  component: Application,
});

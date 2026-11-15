import { createFileRoute } from "@tanstack/react-router";
import MortgageProcessExplained from "@/pages/MortgageProcessExplained";

export const Route = createFileRoute("/how-the-mortgage-process-works")({
  head: () => ({
    meta: [
      {
        "title": "How the Mortgage Process Works | Step-by-Step Guide | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "How the Mortgage Process Works | Step-by-Step Guide | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "How the Mortgage Process Works | Step-by-Step Guide | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Understand how mortgages work with our complete step-by-step guide. From pre-approval to closing day, learn what to expect at every stage of getting a home loan."
      },
      {
        "property": "og:description",
        "content": "Understand how mortgages work with our complete step-by-step guide. From pre-approval to closing day, learn what to expect at every stage of getting a home loan."
      },
      {
        "name": "twitter:description",
        "content": "Understand how mortgages work with our complete step-by-step guide. From pre-approval to closing day, learn what to expect at every stage of getting a home loan."
      },
      {
        "name": "keywords",
        "content": "how mortgages work, mortgage process explained, home loan process, buying a house steps, mortgage timeline, closing process"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/how-the-mortgage-process-works"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/how-the-mortgage-process-works"}],
  }),
  component: MortgageProcessExplained,
});

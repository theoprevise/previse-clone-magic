import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        "title": "Mortgage Blog | Expert Tips & Insights | Previse Mortgage"
      },
      {
        "property": "og:title",
        "content": "Mortgage Blog | Expert Tips & Insights | Previse Mortgage"
      },
      {
        "name": "twitter:title",
        "content": "Mortgage Blog | Expert Tips & Insights | Previse Mortgage"
      },
      {
        "name": "description",
        "content": "Stay informed with the latest mortgage tips, home buying advice, and industry insights from Previse Mortgage experts."
      },
      {
        "property": "og:description",
        "content": "Stay informed with the latest mortgage tips, home buying advice, and industry insights from Previse Mortgage experts."
      },
      {
        "name": "twitter:description",
        "content": "Stay informed with the latest mortgage tips, home buying advice, and industry insights from Previse Mortgage experts."
      },
      {
        "name": "keywords",
        "content": "mortgage blog, home buying tips, mortgage advice, refinancing tips, first time homebuyer guide"
      },
      {
        "property": "og:type",
        "content": "website"
      },
      {
        "property": "og:url",
        "content": "https://previsemortgage.com/blog"
      }
    ],
    links: [{"rel": "canonical", "href": "https://previsemortgage.com/blog"}],
  }),
  component: Blog,
});

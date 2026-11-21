import { createFileRoute, notFound } from "@tanstack/react-router";
import LearnArticlePage from "@/pages/learn/LearnArticlePage";
import { getLearnArticle, LEARN_CATEGORIES } from "@/lib/learning-center";

export const Route = createFileRoute("/learn/$slug")({
  loader: ({ params }) => {
    const article = getLearnArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Article not found | Previse Mortgage" }, { name: "robots", content: "noindex" }] };
    const url = `https://previsemortgage.com/learn/${a.slug}`;
    const cat = LEARN_CATEGORIES.find((c) => c.id === a.category)?.name ?? "";
    return {
      meta: [
        { title: a.title },
        { name: "description", content: a.description },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: a.title },
        { name: "twitter:description", content: a.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.h1,
            description: a.description,
            mainEntityOfPage: url,
            articleSection: cat,
            author: { "@type": "Organization", name: "Previse Mortgage LLC", url: "https://previsemortgage.com" },
            publisher: { "@type": "Organization", name: "Previse Mortgage LLC", url: "https://previsemortgage.com" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://previsemortgage.com/" },
              { "@type": "ListItem", position: 2, name: "Mortgage Learning Center", item: "https://previsemortgage.com/learn" },
              { "@type": "ListItem", position: 3, name: a.h1, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ArticleRoute,
});

function ArticleRoute() {
  const { article } = Route.useLoaderData();
  return <LearnArticlePage article={article} />;
}

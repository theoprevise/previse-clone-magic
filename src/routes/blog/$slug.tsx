import { createFileRoute, notFound } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import BlogPost from "@/pages/BlogPost";
import BlogLoadError from "@/components/BlogLoadError";
import NotFound from "@/pages/NotFound";
import { blogPostOptions } from "@/lib/blog-queries";
import { articleDescription, absoluteArticleImage } from "@/lib/blog-content";
import { BUSINESS_ID, serializeSchema } from "@/lib/business-schema";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params, context }) => {
    const post = await context.queryClient.ensureQueryData(blogPostOptions(params.slug));
    if (!post) throw notFound();
    return post;
  },
  errorComponent: BlogLoadError,
  notFoundComponent: NotFound,
  head: ({ loaderData: post, params }) => {
    if (!post) return { meta: [{ title: "Article unavailable | Previse Mortgage" }, { name: "robots", content: "noindex" }] };
    const title = `${post.title} | Previse Mortgage Blog`;
    const description = articleDescription(post);
    const url = `https://previsemortgage.com/blog/${encodeURIComponent(params.slug)}`;
    const image = absoluteArticleImage(post.featured_image);
    const meta: Array<Record<string, string>> = [
      { title },
      { property: "og:title", content: title },
      { name: "description", content: description },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ];
    if (image) {
      meta.push({ property: "og:image", content: image });
      meta.push({ name: "twitter:image", content: image });
    }
    return {
      meta,
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: serializeSchema({
          "@context": "https://schema.org", "@type": "Article",
          headline: post.title, description, mainEntityOfPage: url,
          datePublished: post.created_at,
          author: { "@id": BUSINESS_ID }, publisher: { "@id": BUSINESS_ID },
          ...(image ? { image } : {}),
        }) },
        { type: "application/ld+json", children: serializeSchema({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://previsemortgage.com/" },
            { "@type": "ListItem", position: 2, name: "Mortgage Blog", item: "https://previsemortgage.com/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        }) },
      ],
    };
  },
  component: BlogPostRoute,
});

function BlogPostRoute() {
  const { slug } = Route.useParams();
  const { data: post } = useSuspenseQuery({ ...blogPostOptions(slug), initialData: Route.useLoaderData() });
  if (!post) return <NotFound />;
  return <BlogPost post={post} />;
}

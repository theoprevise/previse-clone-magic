import { queryOptions } from "@tanstack/react-query";
import { fetchPublishedBlog } from "@/lib/blog.functions";

export const blogListOptions = queryOptions({
  queryKey: ["blog-posts"],
  queryFn: () => fetchPublishedBlog({ data: {} }),
  staleTime: 60_000,
});

export const blogPostOptions = (slug: string) => queryOptions({
  queryKey: ["blog-post", slug],
  queryFn: async () => (await fetchPublishedBlog({ data: { slug } }))[0] ?? null,
  staleTime: 60_000,
});

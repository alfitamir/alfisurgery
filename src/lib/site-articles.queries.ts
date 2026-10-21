import { queryOptions } from "@tanstack/react-query";
import { listPublishedSiteArticles } from "@/lib/site-articles.functions";

export const publishedSiteArticlesQuery = () => queryOptions({
  queryKey: ["site-articles", "published"],
  queryFn: () => listPublishedSiteArticles().catch(() => []),
  staleTime: 60_000,
});

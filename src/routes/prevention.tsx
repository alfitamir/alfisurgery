import { createFileRoute } from "@tanstack/react-router";
import { PreventionContent } from "@/components/PreventionContent";
import { preventionCopy } from "@/data/prevention";
import { siteLanguages } from "@/lib/site-language";

export const Route = createFileRoute("/prevention")({
  component: PreventionContent,
  head: ({ match }) => {
    const language = siteLanguages.find((l) => l.code === match.search.lang)?.code ?? "en";
    const t = preventionCopy[language];
    const title = `${t.title} | Alfi Surgery`;
    return {
      meta: [
        { title },
        { name: "description", content: t.intro },
        { property: "og:title", content: title },
        { property: "og:description", content: t.intro },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { CalendarClock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { postsCommentsCopy } from "@/data/posts-comments-copy";

export const Route = createFileRoute("/posts")({
  component: PostsPage,
  head: () => ({ meta: [
    { title: "Dr. Tamer Elalfy's surgical update posts | Alfi Surgery" },
    { name: "description", content: "Full posts and images by Dr. Tamer Elalfy on the latest surgical updates, dated and updated weekly." },
    { property: "og:title", content: "Dr. Tamer Elalfy's surgical update posts" },
    { property: "og:description", content: "Full surgical update posts with images, updated weekly." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
});

type Post = { id: string; posted_at: string; original_text: string; original_lang: string; image_url: string | null; translations: Record<string, string> };

function PostCard({ post }: { post: Post }) {
  const { language } = useSiteLanguage();
  const c = postsCommentsCopy[language];
  const tr = post.original_lang !== language ? post.translations?.[language] : undefined;
  const [orig, setOrig] = useState(false);
  const text = tr && !orig ? tr : post.original_text;
  return <article className="overflow-hidden rounded-md border border-border bg-card">
    {post.image_url && <img src={post.image_url} alt="" loading="lazy" className="w-full object-cover" />}
    <div className="p-5">
      <p dir="auto" className="whitespace-pre-line leading-loose">{text}</p>
      {tr && <Button variant="link" className="px-0" onClick={() => setOrig(!orig)}>{orig ? c.showTranslation : c.showOriginal}</Button>}
    </div>
  </article>;
}

function PostsPage() {
  const { language } = useSiteLanguage();
  const c = postsCommentsCopy[language];
  const { data = [], isFetched } = useQuery({
    queryKey: ["doctor-posts"],
    queryFn: async () => ((await supabase.from("doctor_posts").select("id,posted_at,original_text,original_lang,image_url,translations").order("posted_at", { ascending: false })).data ?? []) as Post[],
  });
  return <main lang={language} className="mx-auto max-w-3xl px-5 py-10">
    <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary"><CalendarClock className="size-4" />{c.weekly}</span>
    <h1 className="mt-3 text-3xl font-bold">{c.postsTitle}</h1>
    <p className="mt-2 text-muted-foreground">{c.postsIntro}</p>
    <div className="mt-6 grid gap-6">
      {isFetched && data.length === 0 && <p className="text-muted-foreground">{c.empty}</p>}
      {data.map((p) => <PostCard key={p.id} post={p} />)}
    </div>
    <p className="mt-8 text-sm text-muted-foreground">{c.note}</p>
  </main>;
}

import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { postsCommentsCopy } from "@/data/posts-comments-copy";

const contactPattern = /(\+?\d[\d\s-]{7,}\d)|(\S+@\S+\.\S+)/;

export function PatientComments() {
  const { language } = useSiteLanguage();
  const c = postsCommentsCopy[language];
  const qc = useQueryClient();
  const [nickname, setNickname] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const { data = [] } = useQuery({
    queryKey: ["patient-comments"],
    queryFn: async () => (await supabase.from("patient_comments").select("id,nickname,body,created_at,source").order("created_at", { ascending: false }).limit(50)).data ?? [],
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const n = nickname.trim(), b = body.trim();
    if (n.length < 2 || n.length > 40 || b.length < 3 || b.length > 1000 || contactPattern.test(b) || contactPattern.test(n)) return setStatus("error");
    if (Date.now() - Number(localStorage.getItem("last-comment") ?? 0) < 60000) return setStatus("error");
    setStatus("sending");
    const { error } = await supabase.from("patient_comments").insert({ nickname: n, body: b });
    if (error) return setStatus("error");
    localStorage.setItem("last-comment", String(Date.now()));
    setNickname(""); setBody(""); setStatus("done");
    qc.invalidateQueries({ queryKey: ["patient-comments"] });
  }

  return <section id="impressions" aria-labelledby="impressions-title" className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10">
    <h2 id="impressions-title" className="flex items-center gap-2 text-2xl font-bold text-patient-ink"><MessageCircle className="size-6 text-primary" />{c.commentsTitle}</h2>
    <p className="mt-2 text-sm text-muted-foreground">{c.commentsIntro}</p>
    <form onSubmit={submit} className="mt-4 grid gap-3 rounded-md border border-border bg-card p-4">
      <Input value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder={c.nickname} aria-label={c.nickname} maxLength={40} required />
      <Textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder={c.comment} aria-label={c.comment} maxLength={1000} rows={3} required />
      <p className="text-xs text-muted-foreground">{c.privacy}</p>
      <div className="flex flex-wrap items-center gap-3"><Button type="submit" disabled={status === "sending"}>{c.send}</Button>
        {status === "done" && <span className="text-sm text-primary">{c.thanks}</span>}
        {status === "error" && <span className="text-sm text-destructive">{c.error}</span>}</div>
    </form>
    <ul className="mt-5 grid gap-3 md:grid-cols-2">
      {data.length === 0 && <li className="text-sm text-muted-foreground">{c.noComments}</li>}
      {data.map((x) => <li key={x.id} className="rounded-md border border-border bg-card p-4">
        <div className="flex justify-between gap-2 text-sm"><strong dir="auto">{x.nickname}</strong><time className="text-muted-foreground" dateTime={x.created_at}>{new Date(x.created_at).toLocaleDateString(language)}</time></div>
        <p dir="auto" className="mt-2 whitespace-pre-line text-sm leading-relaxed">{x.body}</p>
        {x.source !== "site" && <p dir="auto" className="mt-2 text-xs text-muted-foreground">{x.source}</p>}
      </li>)}
    </ul>
  </section>;
}

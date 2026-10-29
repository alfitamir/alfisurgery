import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { postsCommentsCopy } from "@/data/posts-comments-copy";
import {
  isPatientCommentCooldownActive,
  isValidPatientComment,
} from "@/lib/patient-comments-safety";

export function PatientComments() {
  const { language } = useSiteLanguage();
  const c = postsCommentsCopy[language];
  const qc = useQueryClient();
  const [nickname, setNickname] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const { data = [] } = useQuery({
    queryKey: ["patient-comments"],
    queryFn: async () =>
      (
        await supabase
          .from("patient_comments")
          .select("id,nickname,body,created_at,source")
          .eq("hidden", false)
          .order("created_at", { ascending: false })
          .limit(50)
      ).data ?? [],
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const n = nickname.trim(),
      b = body.trim();
    if (!isValidPatientComment(n, b)) return setStatus("error");
    let lastCommentAt: string | null = null;
    try {
      lastCommentAt = localStorage.getItem("last-comment");
    } catch {
      // Storage is optional; server-side controls must enforce abuse prevention.
    }
    if (isPatientCommentCooldownActive(lastCommentAt)) return setStatus("error");
    setStatus("sending");
    let response: Response;
    try {
      response = await fetch("/api/public/patient-comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname: n, body: b }),
      });
    } catch {
      return setStatus("error");
    }
    if (!response.ok) return setStatus("error");
    try {
      localStorage.setItem("last-comment", String(Date.now()));
    } catch {
      // Storage is optional and may be disabled by the browser.
    }
    setNickname("");
    setBody("");
    setStatus("done");
    qc.invalidateQueries({ queryKey: ["patient-comments"] });
  }

  return (
    <section
      id="impressions"
      aria-labelledby="impressions-title"
      className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10"
    >
      <h2
        id="impressions-title"
        className="flex items-center gap-2 text-2xl font-bold text-patient-ink"
      >
        <MessageCircle className="size-6 text-primary" />
        {c.commentsTitle}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">{c.commentsIntro}</p>
      <p className="mt-2 rounded-md border border-border bg-muted/50 p-3 text-xs leading-6 text-muted-foreground">
        {c.privacy}
      </p>
      <aside
        className="mt-4 rounded-md border border-primary/30 bg-secondary/50 p-4 text-sm"
        dir="rtl"
        lang="ar"
      >
        <p className="font-semibold">تقييمات من منصات أخرى</p>
        <p className="mt-1">
          <strong className="text-primary">98%</strong> يوصون بمركز د. تامر رشدي الألفي للجراحات
          المتطورة بالزقازيق — بناءً على 24 مراجعة على Facebook.
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          التقييم خاص بصفحة المركز. وأدناه شهادات مرضى منشورة علنًا مع ذكر مصدرها.
        </p>
      </aside>
      <form
        onSubmit={submit}
        className="mt-4 grid gap-3 rounded-md border border-border bg-card p-4"
      >
        <Input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder={c.nickname}
          aria-label={c.nickname}
          maxLength={40}
          required
        />
        <Textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder={c.comment}
          aria-label={c.comment}
          maxLength={1000}
          rows={3}
          required
        />
        <p className="text-xs text-muted-foreground">{c.privacy}</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" disabled={status === "sending"}>
            {c.send}
          </Button>
          {status === "done" && <span className="text-sm text-primary">{c.thanks}</span>}
          {status === "error" && <span className="text-sm text-destructive">{c.error}</span>}
        </div>
      </form>
      <ul className="mt-5 grid gap-3 md:grid-cols-2">
        {data.length === 0 && <li className="text-sm text-muted-foreground">{c.noComments}</li>}
        {data.map((x) => (
          <li key={x.id} className="rounded-md border border-border bg-card p-4">
            <div className="flex justify-between gap-2 text-sm">
              <strong dir="auto">{x.nickname}</strong>
              {!x.source.includes("مقتطف") && (
                <time className="text-muted-foreground" dateTime={x.created_at}>
                  {new Date(x.created_at).toLocaleDateString(language)}
                </time>
              )}
            </div>
            <p dir="auto" className="mt-2 whitespace-pre-line text-sm leading-relaxed">
              {x.body}
            </p>
            {x.source !== "site" && (
              <p dir="auto" className="mt-2 text-xs text-muted-foreground">
                {x.source}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

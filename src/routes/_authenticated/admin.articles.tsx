import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { Eye, EyeOff, FilePlus2, Globe, Languages, Loader2, LogOut, Save, Sparkles, Trash2, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { siteLanguages, type SiteLanguage } from "@/lib/site-language";
import { isRtl, siteLanguageCodes, type SiteArticleRow } from "@/lib/site-articles";
import { sanitizeArticleHtml } from "@/lib/article-html";
import { deleteSiteArticle, geminiWrite, getAdminStatus, listAdminArticles, saveSiteArticle } from "@/lib/site-articles.functions";

export const Route = createFileRoute("/_authenticated/admin/articles")({
  head: () => ({ meta: [
    { title: "إدارة المقالات | د. تامر الألفي" },
    { name: "description", content: "إضافة المقالات وتعديلها وترجمتها إلى لغات الموقع السبع بحساب Gemini." },
    { property: "og:title", content: "إدارة المقالات | د. تامر الألفي" },
    { property: "og:description", content: "إضافة المقالات وتعديلها وترجمتها إلى لغات الموقع السبع بحساب Gemini." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex, nofollow" },
  ] }),
  component: AdminArticlesPage,
});

type Edition = { title: string; content: string };
type Draft = { id?: number; source_lang: SiteLanguage; category: string; status: "draft" | "published"; editions: Record<SiteLanguage, Edition> };

const categories = [
  { value: "", label: "تلقائي حسب العنوان" },
  { value: "الجراحة العامة", label: "الجراحة العامة" },
  { value: "المرارة والجراحة", label: "المرارة والجراحة" },
  { value: "التغذية والوزن", label: "التغذية والوزن" },
  { value: "التكميم والمتابعة", label: "التكميم والمتابعة" },
];
const languageName = (code: SiteLanguage) => siteLanguages.find((l) => l.code === code)?.name ?? code;
const emptyEditions = () => Object.fromEntries(siteLanguageCodes.map((c) => [c, { title: "", content: "" }])) as Record<SiteLanguage, Edition>;
const newDraft = (): Draft => ({ source_lang: "ar", category: "", status: "draft", editions: emptyEditions() });
const fromRow = (row: SiteArticleRow): Draft => ({ id: row.id, source_lang: row.source_lang, category: row.category, status: row.status, editions: { ...emptyEditions(), ...row.editions } as Record<SiteLanguage, Edition> });
const filled = (e: Edition) => !!(e.title.trim() && e.content.trim());
const errorText = (e: unknown) => (e instanceof Error ? e.message : "حدث خطأ غير متوقع.");

function AdminArticlesPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const statusFn = useServerFn(getAdminStatus);
  const listFn = useServerFn(listAdminArticles);
  const saveFn = useServerFn(saveSiteArticle);
  const deleteFn = useServerFn(deleteSiteArticle);
  const geminiFn = useServerFn(geminiWrite);

  const status = useQuery({ queryKey: ["admin-status"], queryFn: () => statusFn() });
  const articles = useQuery({ queryKey: ["admin-articles"], queryFn: () => listFn(), enabled: !!status.data?.isAdmin });

  const [draft, setDraft] = useState<Draft>(newDraft);
  const [active, setActive] = useState<SiteLanguage>("ar");
  const [dirty, setDirty] = useState(false);
  const [preview, setPreview] = useState(false);
  const [busy, setBusy] = useState("");
  const [message, setMessage] = useState<{ kind: "ok" | "error"; text: string } | null>(null);
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");
  const [instruction, setInstruction] = useState("");
  const [overwrite, setOverwrite] = useState(false);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => { e.preventDefault(); };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  const edition = draft.editions[active];
  const setEdition = (code: SiteLanguage, value: Partial<Edition>) => { setDraft((d) => ({ ...d, editions: { ...d.editions, [code]: { ...d.editions[code], ...value } } })); setDirty(true); };

  function open(next: Draft) {
    if (dirty && !window.confirm("لديك تعديلات غير محفوظة. هل تريد تركها؟")) return;
    setDraft(next); setActive(next.source_lang); setDirty(false); setPreview(false); setMessage(null);
  }

  async function run(label: string, task: () => Promise<void>) {
    setBusy(label); setMessage(null);
    try { await task(); } catch (e) { setMessage({ kind: "error", text: errorText(e) }); } finally { setBusy(""); }
  }

  const save = (nextStatus: Draft["status"]) => run("save", async () => {
    const row = await saveFn({ data: { id: draft.id, source_lang: draft.source_lang, category: draft.category, status: nextStatus, editions: draft.editions } });
    setDraft(fromRow(row)); setDirty(false);
    await queryClient.invalidateQueries({ queryKey: ["admin-articles"] });
    await queryClient.invalidateQueries({ queryKey: ["site-articles"] });
    setMessage({ kind: "ok", text: nextStatus === "published" ? "تم الحفظ والنشر على الموقع." : "تم الحفظ كمسودة (غير ظاهرة للزوار)." });
  });

  const remove = () => draft.id && window.confirm("حذف هذا المقال نهائيًا بكل لغاته؟") && run("delete", async () => {
    await deleteFn({ data: { id: draft.id! } });
    await queryClient.invalidateQueries({ queryKey: ["admin-articles"] });
    await queryClient.invalidateQueries({ queryKey: ["site-articles"] });
    setDraft(newDraft()); setActive("ar"); setDirty(false);
    setMessage({ kind: "ok", text: "تم حذف المقال." });
  });

  const writeDraft = () => run("draft", async () => {
    const result = await geminiFn({ data: { mode: "draft", language: draft.source_lang, topic, notes } });
    setEdition(draft.source_lang, { title: result.title, content: result.content }); setActive(draft.source_lang);
    setMessage({ kind: "ok", text: `كتب Gemini (${result.model}) مسودة بـ${languageName(draft.source_lang)}. راجعها طبيًا ثم احفظ.` });
  });

  const revise = () => run("revise", async () => {
    const result = await geminiFn({ data: { mode: "revise", language: active, title: edition.title, content: edition.content, instruction } });
    setEdition(active, { title: result.title, content: result.content }); setInstruction("");
    setMessage({ kind: "ok", text: "عدّل Gemini النص حسب طلبك. راجع التعديل ثم احفظ." });
  });

  const translateAll = () => run("translate", async () => {
    const source = draft.editions[draft.source_lang];
    if (!filled(source)) throw new Error(`اكتب المقال بـ${languageName(draft.source_lang)} أولًا.`);
    const targets = siteLanguageCodes.filter((c) => c !== draft.source_lang && (overwrite || !filled(draft.editions[c])));
    if (!targets.length) { setMessage({ kind: "ok", text: "كل اللغات مكتملة. فعّل «استبدال الترجمات الموجودة» لإعادة الترجمة." }); return; }
    const failed: string[] = [];
    for (const [index, code] of targets.entries()) {
      setBusy(`translate:${index + 1}/${targets.length}:${languageName(code)}`);
      try {
        const result = await geminiFn({ data: { mode: "translate", from: draft.source_lang, to: code, title: source.title, content: source.content } });
        setEdition(code, { title: result.title, content: result.content });
      } catch (e) { failed.push(`${languageName(code)}: ${errorText(e)}`); }
    }
    setMessage(failed.length ? { kind: "error", text: `اكتملت بعض الترجمات، وتعذرت: ${failed.join(" — ")}` } : { kind: "ok", text: "اكتملت الترجمة إلى كل لغات الموقع. راجعها ثم احفظ." });
  });

  async function signOut() {
    if (dirty && !window.confirm("لديك تعديلات غير محفوظة. هل تريد الخروج؟")) return;
    await queryClient.cancelQueries(); queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  if (status.isLoading) return <main dir="rtl" className="grid min-h-[50vh] place-items-center"><Loader2 className="size-8 animate-spin text-primary" /></main>;
  if (status.isError || !status.data?.isAdmin) return <main dir="rtl" lang="ar" className="mx-auto max-w-lg px-5 py-16"><div className="rounded-md border border-border bg-card p-6"><h1 className="text-2xl font-bold">لا توجد صلاحية</h1><p className="mt-3 text-sm leading-loose text-muted-foreground">الحساب {status.data?.email} ليس حساب إدارة الموقع.</p><Button variant="outline" className="mt-5" onClick={signOut}><LogOut />تسجيل الخروج</Button></div></main>;

  const translating = busy.startsWith("translate:") ? busy.split(":") : null;
  const anyBusy = !!busy;

  return <main dir="rtl" lang="ar" className="mx-auto max-w-7xl px-4 py-8 md:px-8">
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
      <div><h1 className="text-2xl font-bold md:text-3xl">إدارة المقالات</h1><p className="mt-1 text-sm text-muted-foreground">{status.data.email} · الكتابة والترجمة عبر حساب Gemini الخاص بك</p></div>
      <div className="flex flex-wrap gap-2"><Button onClick={() => open(newDraft())} disabled={anyBusy}><FilePlus2 />مقال جديد</Button><Button variant="outline" onClick={signOut}><LogOut />خروج</Button></div>
    </header>

    <div className="mt-6 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside aria-label="المقالات المحفوظة" className="rounded-md border border-border bg-card p-3">
        <p className="px-2 pb-2 text-sm font-semibold">المقالات ({articles.data?.length ?? 0})</p>
        {articles.isLoading && <Loader2 className="m-3 animate-spin text-primary" />}
        {articles.data?.length === 0 && <p className="px-2 py-3 text-sm text-muted-foreground">لا توجد مقالات بعد. ابدأ بـ«مقال جديد».</p>}
        <ul className="space-y-1">{articles.data?.map((a) => {
          const count = siteLanguageCodes.filter((c) => a.editions[c]).length;
          return <li key={a.id}><button type="button" onClick={() => open(fromRow(a))} className={`w-full rounded-md px-3 py-2 text-start text-sm hover:bg-secondary ${draft.id === a.id ? "bg-secondary" : ""}`}>
            <span className="line-clamp-2 font-medium">{a.editions[a.source_lang]?.title ?? "بدون عنوان"}</span>
            <span className="mt-1 flex gap-2 text-xs text-muted-foreground"><span className={a.status === "published" ? "text-primary" : ""}>{a.status === "published" ? "منشور" : "مسودة"}</span>·<span>{count}/7 لغات</span></span>
          </button></li>;
        })}</ul>
      </aside>

      <section className="min-w-0 space-y-5">
        <div className="rounded-md border border-border bg-secondary/50 p-4 md:p-5">
          <h2 className="flex items-center gap-2 font-bold"><Sparkles className="size-5 text-primary" />اكتب مسودة بمساعدة Gemini</h2>
          <div className="mt-3 grid gap-3">
            <div><Label htmlFor="topic">موضوع المقال</Label><Input id="topic" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="مثال: متى يحتاج فتق السرة إلى جراحة؟" className="mt-1" /></div>
            <div><Label htmlFor="notes">ملاحظاتك أو نصك الخام (اختياري)</Label><Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} placeholder="الصق هنا نقاطك أو مقالًا كتبته في Gemini، وسيُنسَّق ويُراجَع." className="mt-1" /></div>
            <Button onClick={writeDraft} disabled={anyBusy || topic.trim().length < 3} className="justify-self-start">{busy === "draft" ? <Loader2 className="animate-spin" /> : <Sparkles />}اكتب المسودة بـ{languageName(draft.source_lang)}</Button>
          </div>
        </div>

        <div className="rounded-md border border-border bg-card p-4 md:p-5">
          <div className="flex flex-wrap items-end gap-4">
            <div><Label htmlFor="source-lang">لغة المقال الأصلية</Label><select id="source-lang" value={draft.source_lang} onChange={(e) => { setDraft((d) => ({ ...d, source_lang: e.target.value as SiteLanguage })); setDirty(true); }} className="mt-1 block h-10 rounded-md border border-input bg-background px-3 text-sm">{siteLanguages.map((l) => <option key={l.code} value={l.code}>{l.name}</option>)}</select></div>
            <div><Label htmlFor="category">القسم</Label><select id="category" value={draft.category} onChange={(e) => { setDraft((d) => ({ ...d, category: e.target.value })); setDirty(true); }} className="mt-1 block h-10 rounded-md border border-input bg-background px-3 text-sm">{categories.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}</select></div>
            <p className="text-sm text-muted-foreground">الحالة: <strong className={draft.status === "published" ? "text-primary" : ""}>{draft.status === "published" ? "منشور" : "مسودة"}</strong>{draft.id ? ` · رقم ${draft.id}` : " · لم يُحفظ بعد"}{dirty ? " · تعديلات غير محفوظة" : ""}</p>
          </div>

          <div role="tablist" aria-label="لغة النسخة" className="mt-5 flex flex-wrap gap-2">{siteLanguages.map((l) => <Button key={l.code} role="tab" aria-selected={active === l.code} size="sm" variant={active === l.code ? "default" : "outline"} onClick={() => setActive(l.code)}>{l.name}{filled(draft.editions[l.code]) ? " ✓" : ""}{l.code === draft.source_lang ? " (الأصل)" : ""}</Button>)}</div>

          <div dir={isRtl(active) ? "rtl" : "ltr"} lang={active} className="mt-4 grid gap-3">
            <div><Label htmlFor="title">العنوان</Label><Input id="title" value={edition.title} onChange={(e) => setEdition(active, { title: e.target.value })} className="mt-1 text-lg" /></div>
            <div>
              <div className="flex items-center justify-between"><Label htmlFor="content">نص المقال</Label><Button variant="ghost" size="sm" onClick={() => setPreview((p) => !p)}>{preview ? <EyeOff /> : <Eye />}{preview ? "تحرير" : "معاينة"}</Button></div>
              {preview
                ? <div className="blog-content mt-1 min-h-80 rounded-md border border-border bg-background p-4 leading-loose" dangerouslySetInnerHTML={{ __html: sanitizeArticleHtml(edition.content) }} />
                : <Textarea id="content" value={edition.content} onChange={(e) => setEdition(active, { content: e.target.value })} rows={18} placeholder="<p>اكتب الفقرة هنا…</p>  — يمكنك استخدام <h2> للعناوين و<ul><li> للقوائم" className="mt-1 font-mono text-sm leading-relaxed" />}
            </div>
            <div className="flex flex-wrap gap-2"><Input value={instruction} onChange={(e) => setInstruction(e.target.value)} placeholder="اطلب تعديلًا: مثل «بسّط الفقرة الثانية» أو «أضف قسمًا عن الرجوع للعمل»" className="min-w-0 flex-1" /><Button variant="outline" onClick={revise} disabled={anyBusy || instruction.trim().length < 3 || !filled(edition)}>{busy === "revise" ? <Loader2 className="animate-spin" /> : <Wand2 />}عدّل بـ Gemini</Button></div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
            <Button variant="secondary" onClick={translateAll} disabled={anyBusy}>{translating ? <Loader2 className="animate-spin" /> : <Languages />}{translating ? `ترجمة ${translating[1]} — ${translating[2]}` : "ترجم إلى كل لغات الموقع"}</Button>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={overwrite} onChange={(e) => setOverwrite(e.target.checked)} />استبدال الترجمات الموجودة</label>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => save("draft")} disabled={anyBusy}>{busy === "save" ? <Loader2 className="animate-spin" /> : <Save />}{draft.status === "published" ? "إلغاء النشر وحفظ كمسودة" : "حفظ كمسودة"}</Button>
            <Button onClick={() => save("published")} disabled={anyBusy}><Globe />{draft.status === "published" ? "حفظ التعديلات المنشورة" : "نشر على الموقع"}</Button>
            {draft.id && draft.status === "published" && <Button asChild variant="link"><Link to="/articles/$articleId" params={{ articleId: String(draft.id) }} search={{ lang: active } as never} target="_blank">عرض على الموقع</Link></Button>}
            {draft.id && <Button variant="ghost" onClick={remove} disabled={anyBusy} className="ms-auto text-destructive"><Trash2 />حذف</Button>}
          </div>
          {message && <p role={message.kind === "error" ? "alert" : "status"} className={`mt-4 rounded-md p-3 text-sm leading-loose ${message.kind === "error" ? "bg-destructive/10 text-destructive" : "bg-secondary"}`}>{message.text}</p>}
          <p className="mt-4 text-xs leading-loose text-muted-foreground">الترجمات والمسودات من Gemini آلية: راجع المعلومة الطبية والأرقام قبل النشر. يظهر للزوار تنبيه بأن الترجمات لم يراجعها بعد مختص متحدث أصلي. المقالات المنشورة تظهر فورًا في مكتبة المقالات بلغاتها المكتملة.</p>
        </div>
      </section>
    </div>
  </main>;
}

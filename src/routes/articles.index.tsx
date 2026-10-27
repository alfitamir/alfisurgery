import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight, BookOpen, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articleCategory, articlesForLanguage, articleText } from "@/lib/blog";
import illustration from "@/assets/sleeve-plateau-habits.webp";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { languageContentCopy, translatedSearchText, translatedText } from "@/lib/site-language";
import { publishedSiteArticlesQuery } from "@/lib/site-articles.queries";
import { siteArticleEdition } from "@/lib/site-articles";

export const Route = createFileRoute("/articles/")({
  loader: ({ context }) => context.queryClient.ensureQueryData(publishedSiteArticlesQuery()),
  component: ArticlesPage,
  head: () => ({
    meta: [
      { title: "مقالات طبية مبسطة | د. تامر الألفي" },
      {
        name: "description",
        content:
          "مكتبة مقالات د. تامر الألفي الكاملة عن الجراحة والتكميم والتغذية والتعافي، مع البحث والقراءة المباشرة.",
      },
      { property: "og:title", content: "مقالات طبية مبسطة | د. تامر الألفي" },
      {
        property: "og:description",
        content:
          "مقالات د. تامر الألفي التثقيفية وأرشيف مدونته بنصوصها الكاملة، مع البحث والقراءة المباشرة.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "https://alfisurgery.com/articles" },
      { rel: "alternate", hrefLang: "en", href: "https://alfisurgery.com/articles" },
      { rel: "alternate", hrefLang: "ar", href: "https://alfisurgery.com/articles?lang=ar" },
      { rel: "alternate", hrefLang: "x-default", href: "https://alfisurgery.com/articles" },
    ],
  }),
});

const categories = ["الكل", "المرارة والجراحة", "التغذية والوزن", "التكميم والمتابعة"];
const normalize = (text: string) =>
  text
    .toLocaleLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[\u064B-\u065F\u0640]/g, "");

function ArticlesPage() {
  const { language, dictionary } = useSiteLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("الكل");
  const { data: siteRows } = useSuspenseQuery(publishedSiteArticlesQuery());
  const available = useMemo(
    () => [
      ...siteRows.flatMap((row) => {
        const edition = siteArticleEdition(row, language);
        return edition
          ? [
              {
                id: edition.id,
                title: edition.title,
                content: edition.content,
                excerpt: articleText(edition.content).slice(0, 160),
                category: row.category || articleCategory(edition.title),
              },
            ]
          : [];
      }),
      ...articlesForLanguage(language),
    ],
    [language, siteRows],
  );
  const filtered = useMemo(
    () =>
      available.filter(
        (a) =>
          (category === "الكل" || a.category === category) &&
          normalize(
            `${a.title} ${articleText(a.content)} ${translatedSearchText(a.title, dictionary)} ${Object.keys(
              dictionary,
            )
              .filter((key) => articleText(a.content).includes(key))
              .map((key) => dictionary[key])
              .join(" ")}`,
          ).includes(normalize(query.trim())),
      ),
    [query, category, dictionary, available],
  );
  if (language !== "ar")
    return (
      <main data-no-translate lang={language} className="mx-auto min-h-[50vh] max-w-6xl px-5 py-12">
        <h1 className="text-3xl font-bold">{languageContentCopy[language].articles}</h1>
        {!available.length ? (
          <p role="status" className="mt-6 text-muted-foreground">
            {languageContentCopy[language].noArticles}
          </p>
        ) : (
          <>
            <div className="relative mt-6 max-w-3xl">
              <Search className="absolute start-4 top-1/2 size-5 -translate-y-1/2 text-primary" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={translatedText("Search articles…", dictionary)}
                aria-label={translatedText("Search articles", dictionary)}
                className="h-12 w-full rounded-lg border border-border bg-card pe-4 ps-12 focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <p aria-live="polite" className="mt-5 text-sm text-muted-foreground">
              {filtered.length} {translatedText("articles", dictionary)}
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((a) => (
                <article key={a.id} className="rounded-lg border border-border bg-card p-5">
                  <p className="text-xs font-semibold text-primary">
                    {translatedText("Gallbladder surgery", dictionary)}
                  </p>
                  <h2 className="mt-3 text-xl font-bold">
                    <Link to="/articles/$articleId" params={{ articleId: String(a.id) }}>
                      {a.title}
                    </Link>
                  </h2>
                  <p className="mt-4 line-clamp-3 text-sm leading-loose text-muted-foreground">
                    {a.excerpt}…
                  </p>
                  <Button asChild variant="link" className="mt-5 px-0">
                    <Link to="/articles/$articleId" params={{ articleId: String(a.id) }}>
                      {translatedText("Read full article", dictionary)}
                      <ArrowRight />
                    </Link>
                  </Button>
                </article>
              ))}
            </div>
            {!filtered.length && (
              <p className="py-12 text-muted-foreground">
                {translatedText("No articles matched your search.", dictionary)}
              </p>
            )}
          </>
        )}
      </main>
    );
  return (
    <div
      dir="rtl"
      lang="ar"
      className="patient-site min-h-screen bg-patient-canvas text-patient-ink"
    >
      <header className="border-b border-patient-mist bg-card">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <Link to="/ar" className="font-semibold text-patient-deep">
            د. تامر الألفي
          </Link>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link to="/ar/patients">
                دليل المرضى
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/">الرئيسية</Link>
            </Button>
          </div>
        </div>
      </header>
      <main>
        <section className="border-b border-patient-mist bg-patient-mist/20">
          <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
            <p className="flex items-center gap-2 text-sm font-semibold text-patient-deep">
              <BookOpen className="size-5" />
              من مدونة د. تامر الألفي
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-relaxed text-patient-deep md:text-5xl">
              مقالات طبية مبسطة
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-loose">
              {available.length} مقالًا عن الجراحة والتكميم والتغذية والتعافي.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-5 py-8 md:py-12" aria-label="مكتبة المقالات">
          <div className="relative max-w-3xl">
            <Search className="absolute start-4 top-1/2 size-5 -translate-y-1/2 text-patient-deep" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث في المقالات…"
              aria-label="ابحث في المقالات"
              className="h-12 w-full rounded-lg border border-patient-mist bg-card pe-4 ps-12 outline-none focus-visible:ring-2 focus-visible:ring-patient-blue"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="موضوع المقال">
            {categories.map((c) => (
              <Button
                key={c}
                variant={category === c ? "default" : "outline"}
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
              >
                {c}
              </Button>
            ))}
          </div>
          <p aria-live="polite" className="mt-5 text-sm text-patient-ink/70">
            {filtered.length} مقالًا
          </p>
          {!filtered.length && <p className="py-16 text-center">لا توجد مقالات مطابقة لبحثك.</p>}
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <article
                key={a.id}
                className="flex flex-col overflow-hidden rounded-lg border border-patient-mist bg-card"
              >
                {a.id === 198 && (
                  <img
                    src={illustration}
                    alt="عادات صحية بعد التكميم"
                    width={1536}
                    height={1024}
                    className="h-44 w-full object-cover"
                  />
                )}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold text-patient-deep">{a.category}</p>
                  <h2 className="mt-3 text-xl font-bold leading-relaxed text-patient-deep">
                    <Link
                      to="/articles/$articleId"
                      params={{ articleId: String(a.id) }}
                      className="hover:underline"
                    >
                      {a.title}
                    </Link>
                  </h2>
                  <p className="mt-4 line-clamp-3 text-sm leading-loose text-patient-ink/80">
                    {a.excerpt}…
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="mt-auto h-auto justify-start px-0 pt-5 text-patient-deep"
                  >
                    <Link to="/articles/$articleId" params={{ articleId: String(a.id) }}>
                      اقرأ المقال كاملًا
                      <ArrowLeft />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 border-t border-patient-mist pt-6 text-sm leading-loose text-patient-ink/70">
            مقالات للتثقيف العام، ولا تغني عن استشارة الفريق الطبي المتابع لحالتك. تختلف تعليمات
            العلاج والغذاء حسب حالتك وتاريخ العملية.
          </p>
        </section>
      </main>
    </div>
  );
}

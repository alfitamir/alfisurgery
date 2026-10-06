import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, ExternalLink, Newspaper, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogArticles } from "@/data/blog-articles";

export const Route = createFileRoute("/articles")({
  component: ArticlesPage,
  head: () => ({
    meta: [
      { title: "مقالات طبية مبسطة | د. تامر الألفي" },
      {
        name: "description",
        content:
          "مقالات توعوية للمرضى بقلم د. تامر الألفي عن جراحات السمنة والتكميم والتغذية والتعافي، منقولة من مدونته ومتاحة للقراءة مباشرة.",
      },
      { property: "og:title", content: "مقالات طبية مبسطة | د. تامر الألفي" },
      {
        property: "og:description",
        content: "أكثر من 40 مقالًا توعويًا عن جراحات السمنة والتكميم والتعافي والتغذية.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/articles" }],
  }),
});

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" });
}

function ArticlesPage() {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim();
    if (!q) return blogArticles;
    return blogArticles.filter(
      (a) => a.title.includes(q) || a.content.replace(/<[^>]+>/g, " ").includes(q),
    );
  }, [query]);

  return (
    <div dir="rtl" lang="ar" className="patient-site min-h-screen bg-patient-canvas text-patient-ink">
      <header className="border-b border-patient-mist bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/ar/patients" className="font-semibold text-patient-deep hover:underline">
            د. تامر الألفي · دليل المرضى
          </Link>
          <Button asChild variant="outline" size="sm" className="border-patient-mist text-patient-deep">
            <Link to="/ar/patients">
              كل الأدلة <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <p className="text-sm font-bold text-patient-blue">من مدونة د. تامر الألفي</p>
        <h1 className="mt-3 text-3xl font-bold leading-relaxed text-patient-deep md:text-5xl">
          مقالات طبية مبسطة
        </h1>
        <p className="mt-4 text-lg leading-loose text-patient-ink/80">
          {blogArticles.length} مقالًا توعويًا عن جراحات السمنة والتكميم والتغذية والتعافي — اقرأها هنا مباشرة دون مغادرة الموقع.
        </p>

        <div className="relative mt-8">
          <Search className="absolute start-4 top-1/2 size-5 -translate-y-1/2 text-patient-ink/50" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث في المقالات… مثل: التكميم، الفيتامينات، ثبات الوزن"
            aria-label="ابحث في المقالات"
            className="w-full rounded-full border border-patient-mist bg-card py-3 pe-4 ps-12 text-base outline-none focus-visible:ring-2 focus-visible:ring-patient-blue"
          />
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-patient-ink/70">لا توجد مقالات مطابقة لبحثك.</p>
        )}

        <div className="mt-8 space-y-4">
          {filtered.map((a) => {
            const open = openId === a.id;
            return (
              <article key={a.id} className="rounded-2xl border border-patient-mist bg-card">
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : a.id)}
                  aria-expanded={open}
                  aria-controls={`article-${a.id}`}
                  className="flex w-full items-center justify-between gap-4 p-5 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patient-blue rounded-2xl"
                >
                  <div className="flex items-start gap-3">
                    <Newspaper className="mt-1 size-5 shrink-0 text-patient-blue" />
                    <div>
                      <h2 className="text-lg font-bold leading-relaxed text-patient-deep">{a.title}</h2>
                      <time dateTime={a.date} className="mt-1 block text-xs text-patient-ink/60">
                        {formatDate(a.date)}
                      </time>
                    </div>
                  </div>
                  <ChevronDown
                    className={`size-5 shrink-0 text-patient-deep transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <div id={`article-${a.id}`} className="border-t border-patient-mist px-5 py-6">
                    <div
                      className="blog-content text-base leading-loose text-patient-ink/90"
                      dangerouslySetInnerHTML={{ __html: a.content }}
                    />
                    <a
                      href={a.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-patient-deep hover:underline"
                    >
                      الأصل على مدونة ووردبريس <ExternalLink className="size-4" />
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-sm leading-loose text-patient-ink/70">
          هذه المقالات للتثقيف العام ولا تغني عن استشارة الفريق الطبي المتابع لحالتك.
        </p>
      </main>
    </div>
  );
}

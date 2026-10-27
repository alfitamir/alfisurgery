import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Printer, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogArticles as importedArticles } from "@/data/blog-articles";
import { newArabicArticles } from "@/data/new-arabic-articles";
const blogArticles = [...newArabicArticles, ...importedArticles];
import {
  articleBody,
  articleCategory,
  articleText,
  articleEdition,
  articlesForLanguage,
} from "@/lib/blog";
import { patientGuideCopy } from "@/data/patient-guide-copy";
import { languageContentCopy, translatedText } from "@/lib/site-language";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { getPublishedSiteArticle } from "@/lib/site-articles.functions";
import { isRtl, type SiteArticleRow } from "@/lib/site-articles";
import { sanitizeArticleHtml } from "@/lib/article-html";

type LocalArticle = (typeof blogArticles)[number];

export const Route = createFileRoute("/articles/$articleId")({
  loader: async ({
    params,
  }): Promise<
    { article: LocalArticle; siteArticle: null } | { article: null; siteArticle: SiteArticleRow }
  > => {
    const article = blogArticles.find((a) => String(a.id) === params.articleId);
    if (article) return { article, siteArticle: null };
    const id = Number(params.articleId);
    if (!Number.isInteger(id) || id < 10001) throw notFound();
    const siteArticle = await getPublishedSiteArticle({ data: { id } }).catch(() => null);
    if (!siteArticle) throw notFound();
    return { article: null, siteArticle };
  },
  head: ({ loaderData }) => {
    const source =
      loaderData?.article ??
      (loaderData?.siteArticle
        ? loaderData.siteArticle.editions[loaderData.siteArticle.source_lang]
        : undefined);
    const title = source ? `${source.title} | د. تامر الألفي` : "المقال غير موجود | د. تامر الألفي";
    const description = source
      ? articleText(source.content).slice(0, 180)
      : "تعذر العثور على هذا المقال في مكتبة د. تامر الألفي.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
        ...(!source ? [{ name: "robots", content: "noindex" }] : []),
      ],
    };
  },
  component: FullArticlePage,
  notFoundComponent: ArticleNotFound,
});

function ArticleNotFound() {
  return (
    <main dir="rtl" className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl">المقال غير موجود</h1>
      <Button asChild variant="link" className="mt-6">
        <Link to="/articles">
          العودة إلى المقالات
          <ArrowRight />
        </Link>
      </Button>
    </main>
  );
}

function FullArticlePage() {
  const data = Route.useLoaderData();
  return data.siteArticle ? (
    <SiteArticlePage row={data.siteArticle} />
  ) : (
    <LocalArticlePage source={data.article} />
  );
}

function SiteArticlePage({ row }: { row: SiteArticleRow }) {
  const { language, dictionary } = useSiteLanguage();
  const shown = row.editions[language] ? language : row.source_lang;
  const edition = row.editions[shown]!;
  return (
    <main
      data-no-translate
      lang={shown}
      dir={isRtl(shown) ? "rtl" : "ltr"}
      className="mx-auto max-w-3xl px-5 py-10 md:py-14"
    >
      <article>
        {row.category && shown === "ar" && (
          <p className="text-sm font-semibold text-primary">{row.category}</p>
        )}
        <h1 className="mt-4 break-words text-3xl font-bold leading-relaxed md:text-4xl">
          {edition.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6 text-sm text-muted-foreground">
          <span>{isRtl(shown) && shown === "ar" ? "د. تامر الألفي" : "Dr. Tamer Elalfy"}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.print()}
            className="article-no-print"
          >
            <Printer />
            {translatedText("Print article", dictionary)}
          </Button>
        </div>
        <aside className="my-6 flex items-start gap-3 border-s-4 border-primary bg-secondary p-4 text-sm leading-loose">
          <ShieldCheck className="mt-1 size-5 shrink-0 text-primary" />
          <p>{patientGuideCopy[shown].safety}</p>
        </aside>
        <div
          className="blog-content break-words text-lg leading-loose"
          dangerouslySetInnerHTML={{ __html: sanitizeArticleHtml(edition.content) }}
        />
      </article>
      <Button asChild variant="outline" className="article-no-print mt-8">
        <Link to="/articles">
          {languageContentCopy[language].articles}
          <ArrowRight className={isRtl(shown) ? "" : "rotate-180"} />
        </Link>
      </Button>
    </main>
  );
}

function LocalArticlePage({ source }: { source: LocalArticle }) {
  const { language, dictionary } = useSiteLanguage();
  const article = articleEdition(source, language) ?? articleEdition(source, "ar") ?? source;
  const related = articlesForLanguage(language)
    .filter((a) => a.id !== article.id && a.category === articleCategory(source.title))
    .slice(0, 3);
  if (language === "ta" && source.id === 228)
    return (
      <main data-no-translate lang="ta" dir="ltr" className="mx-auto max-w-3xl px-5 py-10 md:py-14">
        <article>
          <p className="text-sm font-semibold text-primary">
            {translatedText("Gallbladder surgery", dictionary)}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-relaxed md:text-4xl">{article.title}</h1>
          <Button
            variant="outline"
            onClick={() => window.print()}
            className="article-no-print mt-5"
          >
            <Printer />
            {translatedText("Print article", dictionary)}
          </Button>
          <aside className="my-6 border-s-4 border-primary bg-secondary p-4 text-sm leading-loose">
            {patientGuideCopy.ta.safety}
          </aside>
          <div
            className="blog-content break-words text-lg leading-loose"
            dangerouslySetInnerHTML={{ __html: articleBody(article.content) }}
          />
        </article>
        <Button asChild variant="outline" className="article-no-print mt-8">
          <Link to="/articles">
            {translatedText("All articles", dictionary)}
            <ArrowRight />
          </Link>
        </Button>
      </main>
    );
  if (language === "en" && source.id === 228)
    return (
      <main data-no-translate lang="en" dir="ltr" className="mx-auto max-w-3xl px-5 py-10 md:py-14">
        <article>
          <p className="text-sm font-semibold text-primary">Gallbladder surgery</p>
          <h1 className="mt-4 text-3xl font-bold leading-relaxed md:text-4xl">{article.title}</h1>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6 text-sm text-muted-foreground">
            <span>Dr. Tamer Elalfy</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.print()}
              className="article-no-print"
            >
              <Printer />
              Print article
            </Button>
          </div>
          <aside className="my-6 border-s-4 border-primary bg-secondary p-4 text-sm leading-loose">
            This archived article is for general education, not personal treatment. Recommendations
            may change. Follow your treating team's instructions; do not start or stop medicines,
            diets or fasting based on this article. Seek urgent assessment for chest pain,
            breathlessness, worsening severe pain or persistent vomiting.
          </aside>
          <div
            className="blog-content break-words text-lg leading-loose"
            dangerouslySetInnerHTML={{ __html: articleBody(article.content) }}
          />
        </article>
        <Button asChild variant="outline" className="article-no-print mt-8">
          <Link to="/articles">
            All articles
            <ArrowRight />
          </Link>
        </Button>
      </main>
    );
  return (
    <div
      dir="rtl"
      lang="ar"
      className="patient-site min-h-screen bg-patient-canvas text-patient-ink"
    >
      <header className="article-no-print border-b border-patient-mist bg-card">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <Link to="/ar" className="font-semibold text-patient-deep">
            د. تامر الألفي
          </Link>
          <Button asChild variant="outline">
            <Link to="/articles">
              <ArrowRight />
              جميع المقالات
            </Link>
          </Button>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-10 md:py-14">
        <article>
          <p className="text-sm font-semibold text-patient-deep">{articleCategory(source.title)}</p>
          <h1 className="mt-4 break-words text-3xl font-bold leading-relaxed text-patient-deep md:text-4xl">
            {article.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-patient-mist pb-6 text-sm text-patient-ink/70">
            <span>د. تامر الألفي</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.print()}
              className="article-no-print"
            >
              <Printer />
              طباعة المقال
            </Button>
          </div>
          <aside className="my-6 flex items-start gap-3 border-s-4 border-patient-apricot bg-patient-mist/20 p-4 text-sm leading-loose">
            <ShieldCheck className="mt-1 size-5 shrink-0 text-patient-deep" />
            <p>
              {source.source.includes("wordpress")
                ? "هذا نص من أرشيف المدونة، وليس وصفة علاجية شخصية. قد تتغير التوصيات مع الوقت؛ لا تبدأ أو توقف دواءً أو حميةً أو صيامًا اعتمادًا عليه، واتبع تعليمات الفريق الطبي المتابع لحالتك. عند ألم الصدر أو ضيق التنفس أو ألم شديد متزايد أو قيء مستمر، اطلب تقييمًا عاجلًا ولا تؤخره لتجربة نصائح المقال."
                : "معلومات تثقيفية عامة كُتبت لهذا الموقع، وليست وصفة علاجية شخصية. قد تتغير التوصيات مع الوقت؛ لا تبدأ أو توقف دواءً أو حميةً أو صيامًا اعتمادًا عليه، واتبع تعليمات الفريق الطبي المتابع لحالتك. عند ألم الصدر أو ضيق التنفس أو ألم شديد متزايد أو قيء مستمر، اطلب تقييمًا عاجلًا ولا تؤخره لتجربة نصائح المقال."}
            </p>
          </aside>
          <div
            dir="auto"
            className="blog-content break-words text-lg leading-loose text-patient-ink"
            dangerouslySetInnerHTML={{ __html: articleBody(article.content) }}
          />
          <div className="article-no-print mt-10 border-t border-patient-mist pt-6">
            {article.source.includes("wordpress") && (
              <a
                href={article.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-patient-deep hover:underline"
              >
                المقال الأصلي على ووردبريس
                <ExternalLink className="size-4" />
              </a>
            )}
          </div>
        </article>
        {related.length > 0 && (
          <section className="article-no-print mt-12 border-t border-patient-mist pt-8">
            <h2 className="text-2xl font-bold text-patient-deep">مقالات ذات صلة</h2>
            <ul className="mt-4 divide-y divide-patient-mist">
              {related.map((a) => (
                <li key={a.id} className="py-4">
                  <Link
                    to="/articles/$articleId"
                    params={{ articleId: String(a.id) }}
                    className="font-semibold leading-loose text-patient-deep hover:underline"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/ar/patients">
                دليل المرضى
                <ArrowRight />
              </Link>
            </Button>
          </section>
        )}
      </main>
    </div>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Printer, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogArticles } from "@/data/blog-articles";
import { articleBody, articleCategory, articleText } from "@/lib/blog";

export const Route = createFileRoute("/articles/$articleId")({
  loader: ({ params }) => {
    const article = blogArticles.find((a) => String(a.id) === params.articleId);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.article.title} | د. تامر الألفي` : "المقال غير موجود | د. تامر الألفي";
    const description = loaderData ? articleText(loaderData.article.content).slice(0, 180) : "تعذر العثور على هذا المقال في مكتبة د. تامر الألفي.";
    return { meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary" },
      ...(!loaderData ? [{ name: "robots", content: "noindex" }] : []),
    ] };
  },
  component: FullArticlePage,
  notFoundComponent: ArticleNotFound,
});

function ArticleNotFound() {
  return <main dir="rtl" className="mx-auto max-w-3xl px-5 py-16"><h1 className="text-3xl">المقال غير موجود</h1><Button asChild variant="link" className="mt-6"><Link to="/articles">العودة إلى المقالات<ArrowRight /></Link></Button></main>;
}

function FullArticlePage() {
  const { article } = Route.useLoaderData();
  const related = blogArticles.filter((a) => a.id !== article.id && articleCategory(a.title) === articleCategory(article.title)).slice(0, 3);
  return (
    <div dir="rtl" lang="ar" className="patient-site min-h-screen bg-patient-canvas text-patient-ink">
      <header className="article-no-print border-b border-patient-mist bg-card">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <Link to="/ar" className="font-semibold text-patient-deep">د. تامر الألفي</Link>
          <Button asChild variant="outline"><Link to="/articles"><ArrowRight />جميع المقالات</Link></Button>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-10 md:py-14">
        <article>
          <p className="text-sm font-semibold text-patient-deep">{articleCategory(article.title)}</p>
          <h1 className="mt-4 break-words text-3xl font-bold leading-relaxed text-patient-deep md:text-4xl">{article.title}</h1>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-patient-mist pb-6 text-sm text-patient-ink/70">
            <span>د. تامر الألفي · <time dateTime={article.date}>{new Date(article.date).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</time></span>
            <Button variant="outline" size="sm" onClick={() => window.print()} className="article-no-print"><Printer />طباعة المقال</Button>
          </div>
          <aside className="my-6 flex items-start gap-3 border-s-4 border-patient-apricot bg-patient-mist/20 p-4 text-sm leading-loose">
            <ShieldCheck className="mt-1 size-5 shrink-0 text-patient-deep" />
            <p>هذا نص من أرشيف المدونة بتاريخ نشره، وليس وصفة علاجية شخصية. قد تتغير التوصيات مع الوقت؛ لا تبدأ أو توقف دواءً أو حميةً أو صيامًا اعتمادًا عليه، واتبع تعليمات الفريق الطبي المتابع لحالتك. عند ألم الصدر أو ضيق التنفس أو ألم شديد متزايد أو قيء مستمر، اطلب تقييمًا عاجلًا ولا تؤخره لتجربة نصائح المقال.</p>
          </aside>
          <div dir="auto" className="blog-content break-words text-lg leading-loose text-patient-ink" dangerouslySetInnerHTML={{ __html: articleBody(article.content) }} />
          <div className="article-no-print mt-10 border-t border-patient-mist pt-6">
            <a href={article.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-patient-deep hover:underline">المقال الأصلي على ووردبريس<ExternalLink className="size-4" /></a>
          </div>
        </article>
        <section className="article-no-print mt-12 border-t border-patient-mist pt-8">
          <h2 className="text-2xl font-bold text-patient-deep">مقالات ذات صلة</h2>
          <ul className="mt-4 divide-y divide-patient-mist">{related.map((a) => <li key={a.id} className="py-4"><Link to="/articles/$articleId" params={{ articleId: String(a.id) }} className="font-semibold leading-loose text-patient-deep hover:underline">{a.title}</Link></li>)}</ul>
          <Button asChild variant="outline" className="mt-6"><Link to="/ar/patients">دليل المرضى<ArrowRight /></Link></Button>
        </section>
      </main>
    </div>
  );
}
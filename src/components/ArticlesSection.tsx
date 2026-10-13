import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articlePreviews } from "@/lib/blog";
import articleIllustration from "@/assets/sleeve-plateau-habits.jpg";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";

export function ArticlesSection({ ar = false }: { ar?: boolean }) {
  const { language } = useSiteLanguage();
  const Arrow = ar ? ArrowLeft : ArrowRight;
  const featured = [228, 198, 88].flatMap((id) => articlePreviews.filter((a) => a.id === id));
  return (
    <section aria-labelledby={`articles-heading-${ar ? "ar" : "en"}`} className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-accent"><BookOpen className="size-5" />{ar ? "بقلم د. تامر الألفي" : "From Dr. Tamer Elalfy's journal"}</p>
            <h2 id={`articles-heading-${ar ? "ar" : "en"}`} className="mt-3 text-3xl font-bold leading-relaxed md:text-4xl">{ar ? "مقالات طبية مبسطة" : "Medical articles"}</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">{ar ? `${articlePreviews.length} مقالًا عن الجراحة والتكميم والتغذية والتعافي.` : `${articlePreviews.length} original Arabic articles on surgery, sleeve gastrectomy, nutrition and recovery.`}</p>
          </div>
          <Button asChild size="lg"><Link to="/articles">{ar ? "جميع المقالات" : "Browse all articles"}<Arrow /></Link></Button>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featured.map((article, index) => (
            <article key={article.id} dir={language === "en" || ar ? "rtl" : undefined} lang={language === "en" || ar ? "ar" : undefined} className="flex flex-col overflow-hidden rounded-lg border border-border bg-card">
              {index === 1 ? <img src={articleIllustration} alt="عادات التغذية والحركة بعد التكميم" loading="lazy" className="h-40 w-full object-cover" width={1536} height={1024} /> : <div className="flex h-40 items-center justify-between gap-4 bg-secondary px-6 text-accent"><BookOpen className="size-12" strokeWidth={1.2} /><span className="max-w-40 text-xl font-semibold">{article.category}</span></div>}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold text-accent">{article.category}</p>
                <h3 className="mt-3 text-xl font-bold leading-relaxed"><Link to="/articles/$articleId" params={{ articleId: String(article.id) }} className="hover:text-accent">{article.title}</Link></h3>
                <p className="mt-3 line-clamp-3 text-sm leading-loose text-muted-foreground">{article.excerpt}…</p>
                <Button asChild variant="link" className="mt-auto h-auto justify-start px-0 pt-5"><Link to="/articles/$articleId" params={{ articleId: String(article.id) }}>اقرأ المقال كاملًا<ArrowLeft /></Link></Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
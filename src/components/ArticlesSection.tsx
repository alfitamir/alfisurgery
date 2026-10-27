import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articlesForLanguage } from "@/lib/blog";
import articleIllustration from "@/assets/sleeve-plateau-habits.jpg";
import { translatedText } from "@/lib/site-language";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";

export function ArticlesSection({ ar = false }: { ar?: boolean }) {
  const { language, dictionary } = useSiteLanguage();
  const Arrow = ar ? ArrowLeft : ArrowRight;
  const available = articlesForLanguage(language);
  const featured = (language === "ar" ? [9005, 228, 198] : [228, 198, 88]).flatMap((id) =>
    available.filter((a) => a.id === id),
  );
  if (!available.length) return null;
  return (
    <section
      aria-labelledby={`articles-heading-${ar ? "ar" : "en"}`}
      className="border-y border-border bg-secondary/50"
    >
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-accent">
              <BookOpen className="size-5" />
              {ar ? "بقلم د. تامر الألفي" : "From Dr. Tamer Elalfy's journal"}
            </p>
            <h2
              id={`articles-heading-${ar ? "ar" : "en"}`}
              className="mt-3 text-3xl font-bold leading-relaxed md:text-4xl"
            >
              {ar ? "مقالات طبية مبسطة" : "Medical articles"}
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              {ar
                ? `${available.length} مقالًا عن الجراحة والتكميم والتغذية والتعافي.`
                : "Patient education from Dr. Tamer Elalfy's journal."}
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/articles">
              {ar ? "جميع المقالات" : "Browse all articles"}
              <Arrow />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featured.map((article) => (
            <article
              key={article.id}
              data-no-translate
              dir={ar ? "rtl" : "ltr"}
              lang={language}
              className="flex flex-col overflow-hidden rounded-lg border border-border bg-card"
            >
              {article.id === 198 ? (
                <img
                  src={articleIllustration}
                  alt="عادات التغذية والحركة بعد التكميم"
                  loading="lazy"
                  className="h-40 w-full object-cover"
                  width={1536}
                  height={1024}
                />
              ) : (
                <div className="flex h-40 items-center justify-between gap-4 bg-secondary px-6 text-accent">
                  <BookOpen className="size-12" strokeWidth={1.2} />
                  <span className="max-w-40 text-xl font-semibold">
                    {ar ? article.category : translatedText("Gallbladder surgery", dictionary)}
                  </span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold text-accent">
                  {ar ? article.category : translatedText("Gallbladder surgery", dictionary)}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-relaxed">
                  <Link
                    to="/articles/$articleId"
                    params={{ articleId: String(article.id) }}
                    className="hover:text-accent"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-loose text-muted-foreground">
                  {article.excerpt}…
                </p>
                <Button asChild variant="link" className="mt-auto h-auto justify-start px-0 pt-5">
                  <Link to="/articles/$articleId" params={{ articleId: String(article.id) }}>
                    {ar ? "اقرأ المقال كاملًا" : translatedText("Read full article", dictionary)}
                    <Arrow />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

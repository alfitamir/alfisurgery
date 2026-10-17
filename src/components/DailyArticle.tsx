import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { articlesForLanguage } from "@/lib/blog";
import { dailyArticleSelection } from "@/lib/daily-article";
import type { SiteLanguage } from "@/lib/site-language";

const copy: Record<SiteLanguage, { today: string; read: string }> = {
  ar: { today: "مقال اليوم", read: "اقرأ المقال" },
  en: { today: "Article of the day", read: "Read article" },
  ur: { today: "آج کا مضمون", read: "مضمون پڑھیں" },
  hi: { today: "आज का लेख", read: "लेख पढ़ें" },
  bn: { today: "আজকের প্রবন্ধ", read: "প্রবন্ধ পড়ুন" },
  tl: { today: "Artikulo ngayong araw", read: "Basahin ang artikulo" },
  ta: { today: "இன்றைய கட்டுரை", read: "கட்டுரையைப் படிக்கவும்" },
};

export function DailyArticle() {
  const { language } = useSiteLanguage();
  const articles = useMemo(() => articlesForLanguage(language), [language]);
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const refresh = () => setNow(new Date());
    refresh();
    const interval = window.setInterval(refresh, 1000);
    return () => window.clearInterval(interval);
  }, []);
  const selected = now ? dailyArticleSelection(articles, now) : undefined;
  if (!selected?.article) return null;
  const t = copy[language];
  return <section data-no-translate lang={language} aria-labelledby="daily-article-heading" className="daily-article border-y" data-tone={selected.tone}>
    <div className="mx-auto grid max-w-6xl gap-5 px-5 py-7 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center md:gap-7 md:px-8 md:py-9">
      <div className="flex items-center gap-3 md:flex-col md:gap-2">
        <span className="daily-article-icon grid size-14 shrink-0 place-items-center rounded-md"><BookOpen className="size-7" strokeWidth={1.6} /></span>
        <p className="flex items-center gap-1.5 text-sm font-bold"><Sparkles className="size-4 shrink-0" />{t.today}</p>
      </div>
      <h2 id="daily-article-heading" className="min-w-0 text-xl font-bold leading-relaxed md:text-2xl"><Link to="/articles/$articleId" params={{ articleId: String(selected.article.id) }} search={{ lang: language }} className="underline-offset-4 hover:underline">{selected.article.title}</Link></h2>
      <Button asChild variant="outline" className="daily-article-link h-auto min-h-11 justify-self-start whitespace-normal py-3"><Link to="/articles/$articleId" params={{ articleId: String(selected.article.id) }} search={{ lang: language }}>{t.read}<ArrowRight className="shrink-0 rtl:rotate-180" /></Link></Button>
    </div>
  </section>;
}
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { EnglishSiteSections } from "@/components/EnglishSiteSections";
import { ArabicSiteSections } from "@/components/ArabicSiteSections";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { navigationCopy } from "@/data/site-navigation";
import { VideosSection } from "@/components/VideosSection";
import { sectionCopy } from "@/data/section-copy";

export function OrganizedPage({ group }: { group: "profile" | "research" | "teaching" | "updates" | "contact" | "videos" }) {
  const { language } = useSiteLanguage(); const t = navigationCopy[language];
  return <main><div data-no-translate lang={language} className="border-b border-border bg-secondary/40"><div className="mx-auto max-w-6xl px-5 py-8 md:px-8"><p className="text-xs font-semibold text-primary">{t.name} / {t[group]}</p><h1 className="mt-4 text-3xl font-bold md:text-4xl">{group === "profile" ? sectionCopy[language].doctor : t[group]}</h1><nav className="mt-5 flex flex-wrap gap-2">{group === "profile" || group === "research" || group === "teaching" ? <><Button asChild variant="outline"><Link to="/research">{t.research}</Link></Button><Button asChild variant="outline"><Link to="/publications">{t.researchIntro}</Link></Button><Button asChild variant="outline"><Link to="/teaching">{t.teaching}</Link></Button><Button asChild variant="outline"><Link to="/updates">{t.updates}</Link></Button></> : null}</nav></div></div>{group === "videos" ? <VideosSection ar={language === "ar"} /> : language === "ar" ? <ArabicSiteSections group={group} /> : <EnglishSiteSections group={group} />}</main>;
}
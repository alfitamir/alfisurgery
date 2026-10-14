import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { preventionCopy, preventionDiseases } from "@/data/prevention";
import { siteLanguages } from "@/lib/site-language";
import lifestyleImage from "@/assets/patient-journey-recover.jpg";

const sources = [
  { name: "NIDDK", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/gallstones/eating-diet-nutrition" },
  { name: "NHS", url: "https://www.nhs.uk/conditions/hernia/" },
  { name: "NHS", url: "https://www.nhs.uk/conditions/piles-haemorrhoids/", extra: "https://www.nhs.uk/conditions/anal-fissure/" },
  { name: "NHS", url: "https://www.nhs.uk/conditions/diverticular-disease-and-diverticulitis/" },
  { name: "CDC", url: "https://www.cdc.gov/colorectal-cancer/prevention/index.html" },
  { name: "NHS", url: "https://www.nhs.uk/conditions/obesity/treatment/" },
  { name: "NHS", url: "https://www.nhs.uk/conditions/pilonidal-sinus/" },
  { name: "NHS", url: "https://www.guysandstthomas.nhs.uk/health-information/hidradenitis-suppurativa/looking-after-yourself-physically" },
  { name: "NHS", url: "https://www.nhs.uk/conditions/ingrown-toenail/", extra: "https://www.nhs.uk/conditions/skin-abscess/" },
  { name: "NIDDK", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/appendicitis/symptoms-causes" },
];

export function PreventionEntry() {
  const { language } = useSiteLanguage();
  const t = preventionCopy[language];
  return <section data-no-translate lang={language} className="border-y border-border bg-secondary/40">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
      <div className="min-w-0 max-w-2xl"><ShieldCheck className="size-6 text-primary" /><h2 className="mt-3 text-2xl font-bold leading-snug">{t.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.intro}</p></div>
      <Button asChild variant="outline" className="h-auto min-h-11 max-w-full whitespace-normal text-start"><Link to="/prevention"><ShieldCheck className="shrink-0" />{t.read}</Link></Button>
    </div>
  </section>;
}

export function PreventionContent() {
  const { language } = useSiteLanguage();
  const t = preventionCopy[language];
  const [query, setQuery] = useState("");
  const needle = query.trim().toLocaleLowerCase();
  const diseases = preventionDiseases[language].map((text, index) => ({ text, index })).filter(({ text }) => text.join(" ").toLocaleLowerCase().includes(needle));
  return <main data-no-translate lang={language} dir={siteLanguages.find((l) => l.code === language)?.dir} className="mx-auto max-w-5xl px-5 py-8 md:px-8 md:py-12">
    <Button asChild variant="ghost" className="h-auto min-h-11 max-w-full whitespace-normal text-start"><Link to={language === "ar" ? "/ar/patients" : "/patients"}><ArrowLeft className="shrink-0 rtl:rotate-180" />{t.back}</Link></Button>
    <h1 className="mt-6 text-3xl font-bold leading-snug md:text-4xl">{t.title}</h1>
    <p className="mt-4 leading-relaxed text-muted-foreground">{t.intro}</p>
    <img src={lifestyleImage} alt="" width={1024} height={1024} className="mt-6 aspect-[3/1] w-full rounded-md object-cover" />
    <p className="mt-6 border-s-2 border-primary ps-4 text-sm leading-loose text-muted-foreground">{t.safety}</p>
    {language !== "en" && <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.review}</p>}
    <div className="relative mt-8"><Search className="pointer-events-none absolute start-3 top-3 size-5 text-muted-foreground" /><input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.search} aria-label={t.search} className="h-12 w-full rounded-md border border-input bg-background pe-4 ps-11 text-sm outline-none focus:ring-2 focus:ring-ring" /></div>
    <div className="mt-6 divide-y divide-border">{diseases.map(({ text: [title, advice, limits], index }) => {
      const source = sources[index];
      return <section key={index} className="py-8" aria-labelledby={`disease-${index}`}>
        <h2 id={`disease-${index}`} className="text-2xl font-semibold leading-snug">{title}</h2>
        <div className="mt-5 grid gap-6 md:grid-cols-2"><div><h3 className="font-semibold text-primary">{t.advice}</h3><p className="mt-2 text-sm leading-loose">{advice}</p></div><div><h3 className="font-semibold">{t.limits}</h3><p className="mt-2 text-sm leading-loose text-muted-foreground">{limits}</p></div></div>
        {source && <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground"><span>{t.sources}:</span><a href={source.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{source.name}</a>{source.extra && <a href={source.extra} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{source.name} (2)</a>}</div>}
      </section>;
    })}</div>
    {!diseases.length && <p role="status" className="py-8 text-muted-foreground">{t.empty}</p>}
    <aside className="mt-6 flex gap-3 border-s-4 border-destructive bg-destructive/5 p-4"><AlertTriangle className="mt-1 size-5 shrink-0 text-destructive" /><p className="text-sm leading-loose">{t.urgent}</p></aside>
  </main>;
}
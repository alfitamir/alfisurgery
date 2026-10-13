import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ClipboardCheck, HeartPulse, Microscope, Play, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { navigationCopy } from "@/data/site-navigation";
import { ArticlesSection } from "@/components/ArticlesSection";
import portrait from "@/assets/dr-elalfy-main.jpg.asset.json";
import patientImage from "@/assets/patient-journey-hero.jpg";
import researchImage from "@/assets/sections/research.jpg";

export function SiteHome() {
  const { language } = useSiteLanguage(); const t = navigationCopy[language];
  const patients = language === "ar" ? "/ar/patients" : "/patients";
  const destinations = [
    { to: patients, title: t.patients, text: t.patientIntro, image: patientImage, icon: HeartPulse, number: "01" },
    { to: "/profile", title: t.profile, text: t.profileIntro, image: portrait.url, icon: Stethoscope, number: "02" },
    { to: "/research", title: t.research, text: t.researchIntro, image: researchImage, icon: Microscope, number: "03" },
  ] as const;
  return <main>
    <section data-no-translate lang={language} className="home-introduction border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:px-8 md:py-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <div><p className="flex items-center gap-2 text-sm font-semibold text-primary"><span className="h-px w-8 bg-primary" />{t.welcome}</p><h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">{t.name}</h1><p className="mt-4 text-lg font-medium text-primary md:text-xl">{t.role}</p><p className="mt-5 max-w-2xl text-base leading-loose text-muted-foreground">{t.intro}</p><div className="mt-7 flex flex-wrap gap-3"><Button asChild size="lg" className="h-12 px-5"><Link to={patients}><HeartPulse />{t.operations}<ArrowRight className="rtl:rotate-180" /></Link></Button><Button asChild variant="outline" size="lg" className="h-12 px-5"><Link to="/profile">{t.profile}</Link></Button></div><p className="mt-7 text-xs leading-relaxed text-muted-foreground">{t.location}</p></div>
        <figure className="home-portrait relative mx-auto w-full max-w-sm"><img src={portrait.url} alt={t.name} width={480} height={540} className="aspect-[4/4.5] w-full rounded-md object-cover object-top" /><figcaption className="mt-3 flex items-center gap-2 text-xs text-muted-foreground"><Stethoscope className="size-4 text-primary" />{t.name}</figcaption></figure>
      </div>
    </section>
    <section data-no-translate lang={language} className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-12"><div className="grid gap-6 md:grid-cols-3">{destinations.map((d) => <article key={d.to} className="group overflow-hidden rounded-md border border-border bg-card"><Link to={d.to} className="block"><img src={d.image} alt={d.title} loading="lazy" className={`h-40 w-full object-cover ${d.to === "/profile" ? "object-[center_30%]" : ""}`} /><div className="p-5"><div className="flex items-center justify-between"><d.icon className="size-5 text-primary" /><span className="text-xs text-muted-foreground">{d.number}</span></div><h2 className="mt-4 text-xl font-bold">{d.title}</h2><p className="mt-3 min-h-12 text-sm leading-relaxed text-muted-foreground">{d.text}</p><span className="mt-5 flex items-center gap-2 text-sm font-semibold text-primary">{d.title}<ArrowRight className="size-4 rtl:rotate-180" /></span></div></Link></article>)}</div></section>
    <section data-no-translate lang={language} className="border-y border-border bg-secondary/60"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[0.7fr_1.3fr] md:px-8"><div><p className="text-sm font-semibold text-primary">{t.patients}</p><h2 className="mt-3 text-3xl font-bold">{t.resources}</h2><p className="mt-4 text-sm leading-loose text-muted-foreground">{t.warning}</p></div><nav className="grid gap-x-6 sm:grid-cols-2">{[{to: patients, title:t.operations, icon:ClipboardCheck},{to:"/articles",title:t.articles,icon:BookOpen},{to:"/videos",title:t.videos,icon:Play},{to:"/ar/medical-questions",title:t.questions,icon:HeartPulse}].map((r) => <Button key={r.to} asChild variant="ghost" className="h-auto min-h-16 justify-start gap-3 whitespace-normal border-b border-border py-4 text-start"><Link to={r.to}><r.icon className="text-primary" /><span className="flex-1">{r.title}</span><ArrowRight className="rtl:rotate-180" /></Link></Button>)}</nav></div></section>
    <ArticlesSection ar={language === "ar"} />
  </main>;
}
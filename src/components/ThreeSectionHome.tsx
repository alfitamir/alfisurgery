import { Link } from "@tanstack/react-router";
import { ArrowRight, HeartPulse, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { navigationCopy } from "@/data/site-navigation";
import { sectionCopy } from "@/data/section-copy";
import portrait from "@/assets/dr-elalfy-main.jpg.asset.json";
import patientImage from "@/assets/patient-journey-hero.jpg";

export function ThreeSectionHome() {
  const { language } = useSiteLanguage();
  const t = navigationCopy[language];
  const s = sectionCopy[language];
  const sections = [
    { to: "/profile", title: s.doctor, description: s.doctorText, image: portrait.url, icon: Stethoscope },
    { to: language === "ar" ? "/ar/patients" : "/patients", title: s.patient, description: s.patientText, image: patientImage, icon: HeartPulse },
  ] as const;
  return <main data-no-translate lang={language} className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
    <div className="flex items-center gap-5 border-b border-border pb-8">
      <img src={portrait.url} alt={t.name} width={180} height={210} className="h-32 w-24 shrink-0 rounded-md object-cover object-top md:h-40 md:w-32" />
      <div className="min-w-0"><p className="text-sm font-semibold text-primary">{t.welcome}</p><h1 className="mt-3 text-3xl font-bold md:text-4xl">{t.name}</h1><p className="mt-3 text-sm text-muted-foreground md:text-base">{t.role}</p></div>
    </div>
    <div className="mt-8 grid gap-6 md:grid-cols-2" aria-label={t.menu}>
      {sections.map((section, index) => <section key={section.to} className="flex min-w-0 flex-col overflow-hidden rounded-md border border-border bg-card">
        <Link to={section.to} aria-label={section.title}><img src={section.image} alt={section.title} className={`h-44 w-full object-cover ${index === 0 ? "object-[center_25%]" : ""}`} /></Link>
        <div className="flex flex-1 flex-col p-5"><div className="flex items-center justify-between"><section.icon className="size-5 text-primary" /><span className="text-xs text-muted-foreground">0{index + 1}</span></div><h2 className="mt-4 text-2xl font-bold">{section.title}</h2><p className="mb-6 mt-3 text-sm leading-relaxed text-muted-foreground">{section.description}</p><Button asChild variant="outline" className="mt-auto h-auto min-h-11 justify-between whitespace-normal text-start"><Link to={section.to}>{s.enter}<ArrowRight className="rtl:rotate-180" /></Link></Button></div>
      </section>)}
    </div>
  </main>;
}
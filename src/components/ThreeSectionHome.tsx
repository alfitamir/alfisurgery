import { Link } from "@tanstack/react-router";
import { ArrowRight, ClipboardCheck, HeartPulse, Search, ShieldAlert, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { navigationCopy } from "@/data/site-navigation";
import { sectionCopy } from "@/data/section-copy";
import { homeCopy } from "@/data/home-copy";
import portrait from "@/assets/dr-elalfy-main.jpg.asset.json";
import patientImage from "@/assets/patient-journey-hero.jpg";

export function ThreeSectionHome() {
  const { language } = useSiteLanguage();
  const t = navigationCopy[language];
  const s = sectionCopy[language];
  const h = homeCopy[language];
  const patients = language === "ar" ? "/ar/patients" : "/patients";
  const steps = [
    { id: "prepare", title: t.prepare, icon: ClipboardCheck, tone: "text-primary bg-secondary" },
    { id: "recovery", title: t.recover, icon: HeartPulse, tone: "text-patient-blue bg-patient-mist" },
    { id: "urgent", title: h.urgent, icon: ShieldAlert, tone: "text-destructive bg-destructive/10" },
  ];
  return <main data-no-translate lang={language} className="home-refresh">
    <section className="home-cover relative isolate overflow-hidden border-b border-border bg-patient-mist">
      <img src={patientImage} alt="" aria-hidden width={1536} height={1024} className="home-cover-image absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" />
      <div className="home-cover-veil absolute inset-0 -z-10" />
      <div className="mx-auto flex min-h-[440px] max-w-6xl items-center px-5 py-12 md:px-8 lg:min-h-[470px]">
        <div className="home-enter min-w-0 max-w-xl lg:max-w-[55%]">
          <p className="flex items-center gap-2 text-sm font-semibold text-primary"><Stethoscope className="size-4 shrink-0" />{t.patients}</p>
          <h1 className="mt-5 text-3xl font-bold leading-relaxed text-patient-ink sm:text-4xl lg:text-5xl">{h.title}</h1>
          <p className="mt-5 max-w-lg text-base leading-loose text-foreground md:text-lg">{h.intro}</p>
          <Button asChild size="lg" className="mt-7 h-auto min-h-12 max-w-full gap-3 whitespace-normal py-3 text-start"><Link to={patients} hash="operations"><Search className="shrink-0" /><span className="min-w-0">{t.operations}</span><ArrowRight className="shrink-0 rtl:rotate-180" /></Link></Button>
        </div>
      </div>
    </section>
    <section aria-labelledby="home-journey" className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10">
      <h2 id="home-journey" className="text-xl font-bold md:text-2xl">{h.journey}</h2>
      <nav aria-label={h.journey} className="home-journey mt-5 grid gap-3 sm:grid-cols-3">
        {steps.map((step, index) => <Button key={step.id} asChild variant="ghost" className="home-step home-enter h-auto min-h-24 justify-start rounded-md border border-border bg-card px-4 py-5 text-start"><Link to={patients} hash={step.id} className="grid grid-cols-[auto_minmax(0,1fr)_auto] gap-3"><span className={`grid size-10 shrink-0 place-items-center rounded-full ${step.tone}`}><step.icon className="size-5" /></span><span className="min-w-0 whitespace-normal"><span className="mb-1 block text-xs font-normal text-muted-foreground">0{index + 1}</span><span className="text-base font-semibold">{step.title}</span></span><ArrowRight className="size-4 shrink-0 text-muted-foreground rtl:rotate-180" /></Link></Button>)}
      </nav>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t.warning}</p>
    </section>
    <section className="border-t border-border bg-secondary/40">
      <div className="home-enter mx-auto grid max-w-6xl grid-cols-[88px_minmax(0,1fr)] items-center gap-5 px-5 py-8 sm:grid-cols-[140px_minmax(0,1fr)] md:gap-8 md:px-8 md:py-10">
        <img src={portrait.url} alt={t.name} width={140} height={160} loading="lazy" className="aspect-[7/8] w-full rounded-md object-cover object-top" />
        <div className="min-w-0"><h2 className="text-xl font-bold md:text-2xl">{s.doctor}</h2><p className="mt-3 text-sm leading-loose text-muted-foreground">{s.doctorText}</p><Button asChild variant="link" className="mt-3 h-auto max-w-full justify-start whitespace-normal px-0 text-start"><Link to="/profile">{s.enter}<ArrowRight className="shrink-0 rtl:rotate-180" /></Link></Button></div>
      </div>
    </section>
  </main>;
}
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { navigationCopy } from "@/data/site-navigation";
import { showsVideos } from "@/lib/site-language";
import { ArticlesSection } from "@/components/ArticlesSection";
import portrait from "@/assets/dr-elalfy-main.jpg.asset.json";
import patientImage from "@/assets/patient-journey-hero.webp";
import researchImage from "@/assets/sections/research.jpg";

const journeyIcons = [CheckCircle2, ClipboardCheck, HeartPulse, ShieldCheck] as const;

export function SiteHome() {
  const { language } = useSiteLanguage();
  const t = navigationCopy[language];
  const isArabic = language === "ar";
  const patients = isArabic ? "/ar/patients" : "/patients";
  const professional = isArabic ? "/research?lang=ar" : "/research";
  const articles = isArabic ? "/articles?lang=ar" : "/articles";

  const heroTitle = isArabic
    ? "افهم عمليتك الجراحية قبل أن تخوضها"
    : "Understand your surgery before you face it.";
  const heroIntro = isArabic
    ? "معلومات جراحية واضحة وعملية للمرضى وعائلاتهم، إلى جانب مصادر مهنية للأطباء وفرق الجراحة."
    : "Clear, practical surgical education for patients and families — alongside professional resources for doctors and surgical teams.";
  const patientTitle = isArabic ? "للمرضى وعائلاتهم" : "For patients and families";
  const patientText = isArabic
    ? "افهم حالتك، واستعد للعملية، وتعرّف على مراحل التعافي وعلامات الخطر التي تستدعي التواصل مع فريقك الطبي."
    : "Understand your condition, prepare for surgery, follow recovery guidance, and recognize warning signs that need your clinical team's attention.";
  const professionalTitle = isArabic ? "للأطباء وفرق الجراحة" : "For doctors and surgical teams";
  const professionalText = isArabic
    ? "كتب مفتوحة الوصول، وأبحاث، ومواد تعليمية عملية للتعلم الجراحي والتواصل السريري."
    : "Open-access books, research, teaching resources and practical material for surgical learning and clinical communication.";
  const journeyTitle = isArabic
    ? "من القلق إلى خطوة أوضح"
    : "From uncertainty to a clearer next step";
  const journeyItems = isArabic
    ? [
        "افهم حالتك وعمليتك",
        "استعد بطريقة عملية قبل الجراحة",
        "تعرّف على ما قد يتضمنه التعافي",
        "انتبه إلى علامات الخطر",
      ]
    : [
        "Learn what your condition and operation mean",
        "Prepare with practical preoperative guidance",
        "Know what recovery may involve",
        "Recognize warning signs and when to call",
      ];

  const quickLinks = [
    { to: patients, label: t.operations, icon: ClipboardCheck },
    { to: isArabic ? "/prevention?lang=ar" : "/prevention", label: t.prepare, icon: ShieldCheck },
    { to: articles, label: t.articles, icon: BookOpen },
    {
      to: professional,
      label: isArabic ? "مصادر المتخصصين" : "Professional resources",
      icon: Microscope,
    },
  ];

  return (
    <main className="home-refresh">
      <section data-no-translate lang={language} className="home-hero border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:py-20">
          <div className="home-enter">
            <p className="eyebrow">{t.welcome}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-[var(--home-doctor)] md:text-6xl">
              {heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              {heroIntro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded-full px-6 shadow-sm">
                <Link to={patients}>
                  <HeartPulse aria-hidden />
                  {t.operations}
                  <ArrowRight className="rtl:rotate-180" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-6">
                <Link to="/profile">
                  <Stethoscope aria-hidden />
                  {t.profile}
                </Link>
              </Button>
            </div>
            <p className="mt-7 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="size-2 rounded-full bg-[var(--home-patient)]" />
              {t.location}
            </p>
          </div>
          <figure className="home-hero-portrait relative mx-auto w-full max-w-md">
            <div
              className="home-portrait-frame absolute -inset-3 rounded-[2rem] border border-[var(--gold)]/35"
              aria-hidden
            />
            <img
              src={portrait.url}
              alt={t.name}
              width={640}
              height={720}
              className="relative aspect-[4/4.5] w-full rounded-[1.75rem] object-cover object-top shadow-[var(--shadow-elegant)]"
            />
            <figcaption className="relative mx-5 -mt-10 rounded-2xl border border-white/50 bg-card/95 p-4 shadow-lg backdrop-blur">
              <p className="font-semibold text-[var(--home-doctor)]">{t.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        data-no-translate
        lang={language}
        aria-labelledby="audience-heading"
        className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16"
      >
        <div className="max-w-2xl">
          <p className="eyebrow">{isArabic ? "اختر مسارك" : "Choose your path"}</p>
          <h2
            id="audience-heading"
            className="mt-4 text-3xl font-bold text-[var(--home-doctor)] md:text-4xl"
          >
            {isArabic
              ? "المعلومة المناسبة تبدأ من المكان الصحيح"
              : "The right information starts with the right pathway"}
          </h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Link to={patients} className="home-audience-card home-audience-patient group">
            <img src={patientImage} alt="" aria-hidden loading="lazy" />
            <div className="home-audience-overlay" />
            <div className="relative z-10 flex min-h-72 flex-col justify-end p-6 text-white md:min-h-80 md:p-8">
              <HeartPulse className="size-8" aria-hidden />
              <h3 className="mt-4 text-2xl font-bold">{patientTitle}</h3>
              <p className="mt-3 max-w-lg leading-7 text-white/85">{patientText}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-semibold">
                {t.operations}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </span>
            </div>
          </Link>
          <Link to={professional} className="home-audience-card home-audience-professional group">
            <img src={researchImage} alt="" aria-hidden loading="lazy" />
            <div className="home-audience-overlay" />
            <div className="relative z-10 flex min-h-72 flex-col justify-end p-6 text-white md:min-h-80 md:p-8">
              <Microscope className="size-8" aria-hidden />
              <h3 className="mt-4 text-2xl font-bold">{professionalTitle}</h3>
              <p className="mt-3 max-w-lg leading-7 text-white/85">{professionalText}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-semibold">
                {isArabic ? "استكشف المصادر" : "Explore resources"}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section
        data-no-translate
        lang={language}
        aria-labelledby="journey-heading"
        className="border-y border-border bg-[var(--home-patient-surface)]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="eyebrow">{t.patients}</p>
            <h2
              id="journey-heading"
              className="mt-4 text-3xl font-bold text-[var(--home-doctor)] md:text-4xl"
            >
              {journeyTitle}
            </h2>
            <p className="mt-5 max-w-md leading-8 text-muted-foreground">{t.warning}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {journeyItems.map((item, index) => {
              const Icon = journeyIcons[index];
              return (
                <div
                  key={item}
                  className="home-journey-step flex items-start gap-4 rounded-2xl border border-white/80 bg-white/65 p-5"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--home-doctor)] text-sm font-bold text-white">
                    0{index + 1}
                  </span>
                  <div>
                    <Icon className="size-5 text-[var(--home-patient)]" aria-hidden />
                    <p className="mt-2 font-semibold leading-6 text-[var(--home-doctor)]">{item}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        data-no-translate
        lang={language}
        aria-labelledby="resources-heading"
        className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16"
      >
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">{t.resources}</p>
            <h2
              id="resources-heading"
              className="mt-4 text-3xl font-bold text-[var(--home-doctor)] md:text-4xl"
            >
              {isArabic ? "أدوات عملية للخطوة التالية" : "Practical tools for your next step"}
            </h2>
          </div>
          <Link
            to={patients}
            className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            {isArabic ? "عرض مكتبة العمليات" : "View the operation library"}
            <ArrowRight className="size-4 rtl:rotate-180" />
          </Link>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks
            .filter((link) => showsVideos(language) || link.to !== "/videos")
            .map((link) => (
              <Link key={link.to} to={link.to} className="home-quick-link group">
                <link.icon className="size-6 text-[var(--home-patient)]" aria-hidden />
                <span className="mt-5 block font-semibold text-[var(--home-doctor)]">
                  {link.label}
                </span>
                <ArrowRight
                  className="mt-5 size-4 text-muted-foreground transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
                  aria-hidden
                />
              </Link>
            ))}
        </div>
      </section>

      <ArticlesSection ar={isArabic} />
    </main>
  );
}

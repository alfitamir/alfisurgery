import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Bandage,
  Check,
  ClipboardCheck,
  Download,
  FileText,
  Globe,
  HeartPulse,
  Home,
  MessageCircle,
  Pill,
  Search,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { EducationSummaryDialog } from "@/components/EducationSummaryDialog";
import { InstallAppButton } from "@/components/InstallAppButton";
import { ArticlesSection } from "@/components/ArticlesSection";
import {
  educationCategories,
  educationCategoriesAr,
  educationCategoryImages,
  formatSize,
  patientEducation,
  type EducationCategory,
} from "@/data/patient-education";
import { educationSummaries } from "@/data/patient-education-summaries";
import heroIllustration from "@/assets/patient-journey-hero.jpg";
import prepareIllustration from "@/assets/patient-journey-prepare.jpg";
import recoverIllustration from "@/assets/patient-journey-recover.jpg";
import plateauIllustration from "@/assets/sleeve-plateau-guide.jpg";

type Language = "en" | "ar";

const preOp = [
  ["Confirm your date and arrival time", "تأكد من تاريخ العملية ووقت الحضور"],
  ["Ask which medicines to pause", "اسأل عن الأدوية التي يجب إيقافها"],
  ["Follow your fasting instructions", "اتبع تعليمات الصيام الخاصة بك"],
  ["Bring your ID, medicine list and loose clothes", "أحضر الهوية وقائمة الأدوية وملابس مريحة"],
] as const;

const postOp = [
  ["Walk little and often", "امشِ قليلًا وبانتظام"],
  ["Keep your wound clean and dry", "حافظ على الجرح نظيفًا وجافًا"],
  ["Take pain relief as prescribed", "تناول المسكنات حسب الوصفة"],
  ["Keep your follow-up appointment", "احضر موعد المتابعة"],
] as const;

const redFlags = [
  ["Fever above 38.5°C", "حرارة أعلى من 38.5° مئوية"],
  ["Sudden or worsening severe pain", "ألم شديد مفاجئ أو متزايد"],
  ["Heavy bleeding or wound opening", "نزيف غزير أو انفتاح الجرح"],
  ["Breathlessness or chest pain", "ضيق التنفس أو ألم الصدر"],
  ["Persistent vomiting", "قيء مستمر"],
  ["Redness, swelling or pus", "احمرار أو تورم أو صديد"],
] as const;

const copy = {
  en: {
    home: "Doctor's website",
    nav: ["Find your operation", "Before surgery", "Recovery", "Urgent help"],
    heroLabel: "Clear guidance for patients & families",
    title: "Your surgery journey, explained.",
    subtitle: "Understand your operation",
    intro: "Choose your procedure and follow a calm, illustrated path from preparation to recovery — with printable guidance you can keep.",
    start: "Find my operation",
    prepare: "Prepare for surgery",
    phaseOne: "Step 01",
    prepareText: "A few simple checks before hospital can make your day safer and less stressful.",
    recovery: "Recover with confidence",
    phaseTwo: "Step 02",
    recoveryText: "Know what is normal at home, how to care for yourself, and when to ask for help.",
    urgent: "Know the warning signs",
    phaseThree: "Important",
    urgentText: "Contact your clinic or visit the nearest emergency department when something does not feel right.",
    browseLabel: "Operation library",
    browseTitle: "Choose your operation.",
    browseText: "Search by name or choose a category. Every guide includes a quick visual summary and printable information.",
    search: `Search ${patientEducation.length} operation guides…`,
    all: "All guides",
    noResults: "No guide matches your search. Try another term or category.",
    quick: "Quick summary",
    print: "Print PDF",
    edit: "DOCX",
    checklist: "Checklist",
    article: "Full article",
    topics: "guides",
    note: "These guides support — but never replace — advice from your own surgical team.",
    call: "Call clinic",
    whatsapp: "Patient channel",
  },
  ar: {
    home: "موقع الطبيب",
    nav: ["اختر عمليتك", "قبل العملية", "التعافي", "مساعدة عاجلة"],
    heroLabel: "إرشاد واضح للمرضى وذويهم",
    title: "رحلتك الجراحية، بشرح مبسّط.",
    subtitle: "افهم عمليتك الجراحية",
    intro: "أدلة د. تامر الألفي لفهم التشخيص والعملية والعناية بعد الخروج: جراحات البطن والفتق والشرج والمستقيم والثدي والغدد الصماء والأطفال والإجراءات الصغرى.",
    start: "ابحث عن عمليتي",
    prepare: "استعد للعملية",
    phaseOne: "الخطوة ٠١",
    prepareText: "تعرّف في دليل عمليتك على سبب الإجراء وطريقته والتخدير والإقامة المتوقعة. تختلف الاستعدادات حسب العملية وحالتك الصحية؛ التزم بتعليمات فريقك بشأن الصيام والأدوية.",
    recovery: "تعافَ بثقة",
    phaseTwo: "الخطوة ٠٢",
    recoveryText: "تتضمن نشرات العمليات إرشادات التغذية والعناية بالجرح والحركة والعودة للنشاط. بعد استئصال المرارة يُنصح بتجنب الوجبات الدسمة لمدة ٢–٣ أسابيع، وبعد إصلاح الفتق تختلف قيود رفع الأثقال حسب نوع الإصلاح وتعليمات الجراح.",
    urgent: "تعرّف على علامات التحذير",
    phaseThree: "مهم",
    urgentText: "راجع علامات التحذير الخاصة بعمليتك: اصفرار العين أو البول الداكن بعد استئصال المرارة، وعدم القدرة على التبول بعد جراحة البواسير، من الأعراض التي تستدعي التقييم. عند ضيق التنفس أو ألم الصدر أو النزيف الغزير، اطلب المساعدة الطارئة فورًا ولا تنتظر رد العيادة.",
    browseLabel: "مكتبة العمليات",
    browseTitle: "اختر عمليتك.",
    browseText: "معلومات عن التشخيص والعلاج والتعافي من نشرات التثقيف الخاصة بكل حالة، مع الملخصات المصوّرة وملفات الطباعة وقائمة الاستعداد لإغلاق الفغرة.",
    search: `ابحث في ${patientEducation.length} دليلًا جراحيًا…`,
    all: "كل الأدلة",
    noResults: "لا يوجد دليل مطابق. جرّب كلمة أو فئة أخرى.",
    quick: "ملخص سريع",
    print: "PDF للطباعة",
    edit: "DOCX",
    checklist: "قائمة المراجعة",
    article: "المقال الكامل",
    topics: "أدلة",
    note: "هذه الأدلة تساعدك، لكنها لا تحل محل تعليمات فريقك الجراحي.",
    call: "اتصل بالعيادة",
    whatsapp: "قناة المرضى",
  },
} as const;

export function PatientEducationSite({ lang }: { lang: Language }) {
  const ar = lang === "ar";
  const t = copy[lang];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<EducationCategory | "all">("all");
  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    return patientEducation.filter((item) => {
      const categoryMatches = category === "all" || item.category === category;
      const searchMatches = !needle || [item.title, item.titleAr, item.summary, item.summaryAr]
        .join(" ").toLocaleLowerCase().includes(needle);
      return categoryMatches && searchMatches;
    });
  }, [category, query]);
  const Arrow = ar ? ArrowLeft : ArrowRight;

  return (
    <div dir={ar ? "rtl" : "ltr"} lang={lang} className="patient-site min-h-screen bg-patient-canvas text-patient-ink">
      <header className="sticky top-0 z-50 border-b border-patient-mist bg-patient-canvas/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 md:px-8">
          <Link to={ar ? "/ar" : "/"} className="flex min-w-0 items-center gap-2 font-semibold text-patient-deep">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-patient-deep text-primary-foreground"><Stethoscope /></span>
            <span className="hidden sm:inline">{ar ? "د. تامر الألفي" : "Dr. Tamer Elalfy"}</span>
          </Link>
          <nav aria-label={ar ? "أقسام دليل المريض" : "Patient guide sections"} className="hidden items-center gap-6 text-sm font-medium lg:flex">
            <a href="#operations">{t.nav[0]}</a><a href="#prepare">{t.nav[1]}</a><a href="#recovery">{t.nav[2]}</a><a href="#urgent">{t.nav[3]}</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="link" size="sm"><Link to="/articles">{ar ? "المقالات" : "Articles"}</Link></Button>
            <InstallAppButton ar={ar} />
            <Button asChild variant="outline" size="sm" className="rounded-full border-patient-mist bg-card text-patient-deep">
              <Link to={ar ? "/patients" : "/ar/patients"}><Globe />{ar ? "English" : "العربية"}</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 md:px-8 md:py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-patient-mist bg-card px-4 py-2 text-xs font-semibold text-patient-deep">
              <HeartPulse className="text-patient-apricot" />{t.heroLabel}
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-patient-deep md:text-6xl">{t.title}</h1>
            <p className="mt-3 text-xl font-medium text-patient-blue md:text-2xl">{t.subtitle}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-patient-ink/75">{t.intro}</p>
            <Button asChild size="lg" className="mt-8 h-12 rounded-xl bg-patient-deep px-6 text-primary-foreground shadow-[var(--shadow-patient)] hover:bg-patient-blue">
              <a href="#operations">{t.start}<Arrow /></a>
            </Button>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-patient-mist bg-patient-mist shadow-[10px_10px_0_var(--patient-blue)]">
            <img src={heroIllustration} alt={ar ? "مريضة تناقش رحلة العملية مع الجراح" : "A patient reviewing her surgery journey with a surgeon"} width={1536} height={1024} className="aspect-[3/2] w-full object-cover" />
          </div>
        </section>

        <section aria-label={ar ? "خطوات رحلة الجراحة" : "Surgery journey steps"} className="relative mx-auto max-w-6xl space-y-20 overflow-hidden px-4 py-16 md:px-8">
          <div className="pointer-events-none absolute inset-y-24 left-1/2 hidden w-px -translate-x-1/2 border-l-2 border-dashed border-patient-mist lg:block" />
          <JourneyStep id="prepare" reverse={false} image={prepareIllustration} imageAlt={ar ? "مريضة تستعد للعملية مع أسرتها" : "A patient preparing for surgery with family support"} label={t.phaseOne} title={t.prepare} text={t.prepareText} items={preOp.map((item) => item[ar ? 1 : 0])} icon={ClipboardCheck} />
          <JourneyStep id="recovery" reverse image={recoverIllustration} imageAlt={ar ? "مريضة تتعافى في المنزل" : "A patient recovering safely at home"} label={t.phaseTwo} title={t.recovery} text={t.recoveryText} items={postOp.map((item) => item[ar ? 1 : 0])} icon={Activity} accent />
          <div id="urgent" className="relative z-10 rounded-[2rem] border-4 border-patient-apricot bg-card p-6 shadow-[8px_8px_0_var(--patient-apricot)] md:p-9">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
              <div className="flex-1">
                <span className="inline-flex rounded-full bg-patient-apricot/20 px-4 py-1 text-xs font-bold uppercase text-patient-deep">{t.phaseThree}</span>
                <div className="mt-4 flex items-center gap-3"><AlertTriangle className="size-7 text-destructive" /><h2 className="text-3xl text-patient-deep">{t.urgent}</h2></div>
                <p className="mt-3 text-patient-ink/70">{t.urgentText}</p>
              </div>
              <ul className="grid flex-1 gap-3 sm:grid-cols-2">
                {redFlags.map((item) => <li key={item[0]} className="flex gap-2 rounded-xl border border-destructive/20 bg-destructive/5 p-3 text-sm"><AlertTriangle className="mt-0.5 size-4 shrink-0 text-destructive" />{item[ar ? 1 : 0]}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="operations" className="border-y border-patient-mist bg-card py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-14 grid items-center gap-6 border-b border-patient-mist pb-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
              <img src={plateauIllustration} alt={ar ? "مريضة تتحدث مع اختصاصية التغذية بعد جراحة التكميم" : "A patient talking with a dietitian after sleeve surgery"} loading="lazy" width={1408} height={912} className="aspect-[16/9] w-full rounded-md object-cover" />
              <div>
                <p className="text-sm font-bold text-patient-blue">{ar ? "مقال مهم · بعد عملية التكميم" : "Important · After sleeve surgery"}</p>
                <h2 className="mt-3 text-2xl font-bold leading-relaxed text-patient-deep md:text-3xl">{ar ? "هام بعد عملية التكميم: عند ثبات الوزن ماذا أفعل؟" : "Weight plateau after sleeve surgery: what should I do?"}</h2>
                <p className="mt-3 leading-relaxed text-patient-ink/75">{ar ? "خطوات آمنة لمراجعة التغذية والنشاط، ومتى تطلب المشورة الطبية." : "Practical steps for nutrition, activity and knowing when to seek advice. Article in Arabic."}</p>
                <Button asChild className="mt-5 bg-patient-deep text-primary-foreground hover:bg-patient-blue"><Link to="/patient-education/weight-plateau-after-sleeve">{ar ? "اقرأ المقال" : "Read article"}<Arrow /></Link></Button>
              </div>
            </div>
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-xs font-bold uppercase text-patient-blue">{t.browseLabel}</div>
              <h2 className="mt-3 text-4xl text-patient-deep md:text-5xl">{t.browseTitle}</h2>
              <p className="mt-4 text-patient-ink/70">{t.browseText}</p>
            </div>
            <div className="relative mx-auto mt-10 max-w-3xl">
              <Search className={`absolute top-1/2 size-5 -translate-y-1/2 text-patient-blue ${ar ? "right-5" : "left-5"}`} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t.search} aria-label={t.search} className={`h-14 w-full rounded-2xl border-2 border-patient-mist bg-patient-canvas text-base outline-none transition focus:border-patient-deep focus:ring-4 focus:ring-patient-mist/50 ${ar ? "pr-14 pl-5" : "pl-14 pr-5"}`} />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2" role="group" aria-label={ar ? "تصفية حسب الفئة" : "Filter by category"}>
              <Button variant={category === "all" ? "default" : "outline"} onClick={() => setCategory("all")} className="rounded-full border-patient-mist data-[active=true]:bg-patient-deep" data-active={category === "all"}>{t.all}</Button>
              {educationCategories.map((cat) => <Button key={cat} variant={category === cat ? "default" : "outline"} onClick={() => setCategory(cat)} className="rounded-full border-patient-mist" aria-pressed={category === cat}>{ar ? educationCategoriesAr[cat] : cat}</Button>)}
            </div>

            {filtered.length ? (
              <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filtered.map((item) => (
                  <article key={item.id} className="group flex flex-col overflow-hidden rounded-2xl border-2 border-patient-mist bg-patient-canvas transition hover:-translate-y-1 hover:shadow-[var(--shadow-patient)]">
                    <img src={educationCategoryImages[item.category]} alt="" loading="lazy" width={1280} height={640} className="h-36 w-full object-cover" />
                    <div className="flex flex-1 flex-col p-5">
                      <div className="text-xs font-bold uppercase text-patient-blue">{ar ? item.categoryAr : item.category}</div>
                      <h3 className="mt-2 text-xl leading-snug text-patient-deep">{ar ? item.titleAr : item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-patient-ink/70">{ar ? item.summaryAr : item.summary}</p>
                      {ar && educationSummaries[item.id]?.length > 0 && (
                        <dl className="my-5 space-y-3 border-t border-patient-mist pt-4">
                          {educationSummaries[item.id].map((point, index) => (
                            <div key={index}>
                              <dt className="text-sm font-semibold text-patient-deep">{point.labelAr}</dt>
                              <dd className="mt-1 text-sm leading-relaxed text-patient-ink/70">{point.textAr}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                      <div className="mt-auto flex flex-wrap gap-2 border-t border-patient-mist pt-5">
                        <EducationSummaryDialog entry={item} image={educationCategoryImages[item.category]} lang={lang} />
                        <Button asChild size="sm" className="rounded-full bg-patient-deep text-primary-foreground"><a href={item.pdfUrl} download={item.pdfName}><Download />{t.print}</a></Button>
                        <Button asChild size="sm" variant="outline" className="rounded-full border-patient-mist"><a href={item.fileUrl} download={item.fileName}><FileText />{t.edit}</a></Button>
                        {item.checklistPdfUrl && <Button asChild size="sm" variant="secondary" className="rounded-full"><a href={item.checklistPdfUrl} download={item.checklistPdfName}><ClipboardCheck />{t.checklist}</a></Button>}
                        {item.articleRoute && <Button asChild size="sm" variant="link"><Link to={item.articleRoute}>{t.article}<Arrow /></Link></Button>}
                      </div>
                      <div className="mt-3 text-xs text-patient-ink/50">PDF · {formatSize(item.pdfSize)}</div>
                    </div>
                  </article>
                ))}
              </div>
            ) : <div className="mx-auto mt-12 max-w-xl rounded-2xl border border-patient-mist bg-patient-canvas p-8 text-center text-patient-ink/70">{t.noResults}</div>}
          </div>
        </section>
      </main>
      <ArticlesSection ar={ar} />

      <footer className="bg-patient-deep text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div><div className="font-serif text-xl">{ar ? "رحلتك الجراحية" : "Your Surgery Journey"}</div><p className="mt-2 max-w-xl text-sm opacity-80">{t.note}</p></div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary" className="rounded-full"><a href="tel:+966138011910"><Stethoscope />{t.call}</a></Button>
            <Button asChild className="rounded-full bg-patient-apricot text-patient-deep hover:bg-patient-apricot/90"><a href="https://whatsapp.com/channel/0029VbDHjNiKAwEkWMqT5C2P" target="_blank" rel="noopener noreferrer"><MessageCircle />{t.whatsapp}</a></Button>
            <Button asChild variant="ghost" className="rounded-full text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to={ar ? "/ar" : "/"}><Home />{t.home}</Link></Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function JourneyStep({ id, reverse, image, imageAlt, label, title, text, items, icon: Icon, accent = false }: { id: string; reverse: boolean; image: string; imageAlt: string; label: string; title: string; text: string; items: readonly string[]; icon: typeof Bandage; accent?: boolean }) {
  return (
    <div id={id} className={`relative z-10 flex flex-col items-center gap-10 lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""}`}>
      <div className="flex-1"><img src={image} alt={imageAlt} loading="lazy" width={1024} height={1024} className={`mx-auto aspect-square w-full max-w-md rounded-full border-4 object-cover ${accent ? "border-patient-apricot" : "border-patient-mist"}`} /></div>
      <div className={`flex-1 rounded-[2rem] border-4 bg-card p-7 transition hover:-translate-y-1 md:p-9 ${accent ? "border-patient-apricot shadow-[8px_8px_0_var(--patient-apricot)]" : "border-patient-mist shadow-[8px_8px_0_var(--patient-mist)]"}`}>
        <span className={`inline-flex rounded-full px-4 py-1 text-xs font-bold uppercase text-patient-deep ${accent ? "bg-patient-apricot/25" : "bg-patient-mist"}`}>{label}</span>
        <div className="mt-4 flex items-center gap-3"><span className="flex size-11 items-center justify-center rounded-xl bg-patient-deep text-primary-foreground"><Icon /></span><h2 className="text-3xl text-patient-deep">{title}</h2></div>
        <p className="mt-4 leading-relaxed text-patient-ink/70">{text}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex gap-2 text-sm"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-patient-apricot text-patient-deep"><Check className="size-3" /></span>{item}</li>)}</ul>
      </div>
    </div>
  );
}
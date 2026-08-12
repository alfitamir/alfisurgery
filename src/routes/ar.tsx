import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Stethoscope, Activity, GraduationCap, ShieldCheck, Users, Microscope,
  HeartPulse, ClipboardList, Mail, MapPin, Award, ArrowLeft, Phone, Download, Globe, Youtube, Facebook, MessageCircle, Linkedin, ExternalLink, BookOpen, Building2, CalendarCheck, Presentation, Eye, FileText, ChevronDown, ChevronUp,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

import { patientEducation, educationCategories, educationCategoriesAr, educationCategoryImages, formatSize } from "@/data/patient-education";
import { surgeryUpdates } from "@/data/surgery-updates";
import portraitAsset from "@/assets/dr-elalfy-main.jpg.asset.json";
const portrait = portraitAsset.url;
import analConditionsPpt from "@/assets/anal-conditions-ppt.asset.json";
import sleevePpt from "@/assets/sleeve-190825155836.pptx.asset.json";
import puhPpt from "@/assets/puh-140513144027-phpapp01.pptx.asset.json";
import cbdPpt from "@/assets/managementofcbdstonesastudy-140511193239-phpapp02.ppt.asset.json";
import herniaPpt from "@/assets/herniaabdwalllecture-100618085852-phpapp02.pptx.asset.json";
import neckIntroPpt from "@/assets/neckintro-140406192526-phpapp01.ppt.asset.json";
import thyroidPpt from "@/assets/thyroid-presentation1aim-net-100618084512-phpapp02.ppt.asset.json";
import burn1Ppt from "@/assets/newmicrosoftofficepowerpointpresentation-100618082020-phpapp01.pptx.asset.json";
import burn2Ppt from "@/assets/tamer-100618082530-phpapp01.pptx.asset.json";
import parathyroidIllustration from "@/assets/parathyroid-exploration-illustration.asset.json";
import sboIllustration from "@/assets/sbo-decision-clock-illustration.asset.json";
import cbdStoneIllustration from "@/assets/retained-cbd-stone-illustration.asset.json";
import subtotalCholeIllustration from "@/assets/subtotal-cholecystectomy-illustration.asset.json";
import diverticulitisAlgorithmIllustration from "@/assets/perforated-diverticulitis-algorithm.asset.json";
import thyroidIllustration from "@/assets/thyroid-rfa-vs-lobectomy-illustration.asset.json";
import pilonidalIllustration from "@/assets/pilonidal-treatment-shift-illustration.asset.json";
import consentIllustration from "@/assets/cognitive-framing-consent-illustration.asset.json";
import ramadanIllustration from "@/assets/ramadan-diverticulitis-illustration.asset.json";

export const Route = createFileRoute("/ar")({
  component: ArabicIndex,
  head: () => ({
    meta: [
      { title: "د. تامر رشدي الألفي — استشاري الجراحة العامة والمناظير" },
      { name: "description", content: "د. تامر رشدي الألفي، استشاري ورئيس قسم الجراحة العامة وغرف العمليات بمستشفى محمد الدوسري بالخبر، المملكة العربية السعودية." },
      { property: "og:title", content: "د. تامر رشدي الألفي" },
      { property: "og:description", content: "استشاري الجراحة العامة والمناظير — جراحة السمنة والقولون والغدة الدرقية والجهاز الهضمي العلوي." },
      { property: "og:url", content: "/ar" },
      { httpEquiv: "content-language", content: "ar" },
    ],
    links: [
      { rel: "canonical", href: "/ar" },
      { rel: "alternate", hrefLang: "en", href: "/" } as any,
      { rel: "alternate", hrefLang: "ar", href: "/ar" } as any,
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" } as any,
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&family=Amiri:wght@400;700&display=swap" },
    ],
  }),
});

const expertise = [
  { icon: Activity, title: "جراحة المناظير المتقدمة", desc: "تقنيات جراحية بأقل تدخل لإجراء العمليات البطنية المعقدة." },
  { icon: HeartPulse, title: "جراحة السمنة", desc: "اختيار المرضى، الإدارة المحيطة بالجراحة، والوقاية من المضاعفات." },
  { icon: Microscope, title: "جراحة القولون والشرج", desc: "رعاية شاملة في الحالات الاختيارية والطارئة." },
  { icon: Stethoscope, title: "جراحة الغدة الدرقية والرقبة", desc: "جراحات دقيقة للغدد الصماء والرأس والرقبة." },
  { icon: ClipboardList, title: "جراحة الجهاز الهضمي العلوي", desc: "علاج جراحي للمريء والمعدة والكبد والقنوات الصفراوية." },
  { icon: ShieldCheck, title: "الرعاية الحرجة وجراحة الإصابات", desc: "اتخاذ قرارات جراحية طارئة في الحالات الحرجة." },
];

const ResearchGateIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="شعار ResearchGate">
    <path d="M15.92 23.14c-.66 0-1.19-.52-1.19-1.19V14.9c0-.67.53-1.2 1.2-1.2h.3c1.14 0 1.75-.28 2.28-1.05.38-.55.52-1.26.52-2.17 0-.93-.18-1.6-.62-2.12-.5-.6-1.18-.85-2.2-.85h-.28c-.66 0-1.2-.53-1.2-1.2V0H23v.03c-1.1.07-1.75.63-1.9 1.8-.08.64-.1 1.5-.1 2.86v3.3c0 1.6-.24 2.8-.75 3.75-.9 1.7-2.45 2.4-4.33 2.4zM6.8 0C2.91 0 0 2.78 0 6.7c0 3.6 2.7 6.33 6.25 6.33 1.2 0 2.2-.18 3.06-.55.3-.13.47-.42.47-.76V.84c0-.46-.37-.84-.84-.84H6.8zm-.5 10.2c-2.03 0-3.55-1.55-3.55-3.65 0-2.25 1.48-3.8 3.55-3.8 2.06 0 3.55 1.55 3.55 3.8 0 2.1-1.52 3.65-3.55 3.65z"/>
  </svg>
);

const services = [
  "رعاية جراحية آمنة قائمة على الأدلة العلمية",
  "إجراءات متقدمة في المناظير والشرج والغدة الدرقية والسمنة",
  "استشارات جراحية متخصصة ورأي طبي ثانٍ",
  "تقييم مرضى السمنة والتخطيط للجراحة",
  "التعليم الجراحي ومحاضرات التعليم الطبي المستمر والإرشاد",
  "قيادة غرف العمليات وتحسين الأداء",
  "برامج تثقيف المرضى لتحسين النتائج",
];

const illustrationCollections = [
  {
    title: "للأطباء",
    subtitle: "رسوم تعليمية للشرح الجراحي، والخوارزميات، والتعليم المهني المتقدم.",
    pdf: "/downloads/illustrations-for-doctors.pdf",
    pdfMeta: "PDF · 10.3 ميجابايت · 5 رسوم",
    items: [
      {
        title: "مبادئ استكشاف جارات الدرق",
        desc: "رسم تعليمي يربط بين حدود التصوير وأهمية الاعتماد على التشريح الجراحي في اتخاذ القرار.",
        image: parathyroidIllustration.url,
        alt: "رسم تعليمي عن استكشاف جارات الدرق والتشريح الجراحي للغدة الدرقية",
      },
      {
        title: "ساعة القرار في انسداد الأمعاء",
        desc: "خريطة زمنية مختصرة للإنعاش، وتحدي الجاستروجرافين، وتوقيت التصعيد للجراحة.",
        image: sboIllustration.url,
        alt: "رسم تعليمي يوضح خوارزمية انسداد الأمعاء الدقيقة خلال 24 ساعة",
      },
      {
        title: "إطار التعامل مع الحصاة المتبقية بالقناة الصفراوية",
        desc: "مادة بصرية تربط تصنيف الخطورة بالخطة العلاجية والإنقاذ بعد الجراحة.",
        image: cbdStoneIllustration.url,
        alt: "رسم تعليمي عن الحصوات المتبقية في القناة الصفراوية المشتركة بعد استئصال المرارة",
      },
      {
        title: "خيارات الاستئصال الجزئي للمرارة",
        desc: "مقارنة بصرية بين الخيار المفتوح والخيار المُعاد التشكيل في المرارة الصعبة.",
        image: subtotalCholeIllustration.url,
        alt: "رسم تعليمي يقارن بين خيارات الاستئصال الجزئي للمرارة",
      },
      {
        title: "خوارزمية التهاب الرتوج المنثقب",
        desc: "مسار علاجي يضع فسيولوجيا المريض في مركز القرار بين هارتمان والمفاغرة الوقائية.",
        image: diverticulitisAlgorithmIllustration.url,
        alt: "رسم تعليمي يوضح خوارزمية علاج التهاب الرتوج المنثقب",
      },
    ],
  },
  {
    title: "للمرضى",
    subtitle: "رسوم مبسطة لتوضيح الخيارات العلاجية، والتعافي، واتخاذ القرار المشترك.",
    pdf: "/downloads/illustrations-for-patients.pdf",
    pdfMeta: "PDF · 7.7 ميجابايت · 4 رسوم",
    items: [
      {
        title: "خيارات علاج عقيدات الغدة الدرقية",
        desc: "شرح بصري مبسط للمقارنة بين التردد الحراري والاستئصال الجراحي ومتى يناسب كل خيار.",
        image: thyroidIllustration.url,
        alt: "رسم تعليمي يقارن بين التردد الحراري واستئصال فص الغدة الدرقية",
      },
      {
        title: "تحول علاج الناسور العصعصي",
        desc: "مقارنة مرئية بين التدخل المحدود والجراحة بالشرائح في الحالات البسيطة والمعقدة.",
        image: pilonidalIllustration.url,
        alt: "رسم تعليمي يقارن بين العلاج المحدود والجراحة في الناسور العصعصي",
      },
      {
        title: "كيف تؤثر طريقة الشرح على الموافقة",
        desc: "رسم يوضح كيف يمكن لصياغة المعلومات أن تحسن الفهم وتدعم اتخاذ القرار مع المريض.",
        image: consentIllustration.url,
        alt: "رسم تعليمي عن تأثير طريقة عرض المعلومات في الموافقة الجراحية",
      },
      {
        title: "الرعاية الجراحية خلال رمضان",
        desc: "قصة بصرية تشرح العرض الطارئ والجراحة بالمنظار والخروج المبكر وخطة استكمال التعافي.",
        image: ramadanIllustration.url,
        alt: "رسم تعليمي عن الرعاية الجراحية والتعافي خلال شهر رمضان",
      },
    ],
  },
];

function ArabicIndex() {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const toggleGroup = (title: string) => setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  return (
    <div dir="rtl" lang="ar" className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Tajawal', system-ui, sans-serif" }}>
      <style>{`
        [dir="rtl"] h1, [dir="rtl"] h2, [dir="rtl"] h3, [dir="rtl"] h4 {
          font-family: 'Amiri', 'Tajawal', serif;
          letter-spacing: 0;
        }
      `}</style>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md flex items-center justify-center" style={{ backgroundImage: "var(--gradient-accent)" }}>
              <Stethoscope className="h-4 w-4 text-accent-foreground" />
            </div>
            <span className="text-lg font-bold">د. تامر الألفي</span>
          </div>
          {/* Navigation links live in the sticky chapter tabs below to avoid duplication with the header. */}
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition">
              <Globe className="h-4 w-4" /> EN
            </Link>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition">
              تواصل معي <ArrowLeft className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* أقسام الصفحة — شريط تنقل وحيد مع ظل لتمييزه بوضوح */}
      <nav dir="rtl" aria-label="أقسام الصفحة" className="sticky top-16 z-40 border-b border-border bg-background/90 backdrop-blur-md shadow-[0_6px_24px_-6px_rgba(0,0,0,0.12)]">
        <div className="mx-auto max-w-6xl px-6">
          <ul className="flex gap-2 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              { id: "about", label: "نبذة" },
              { id: "expertise", label: "الخبرات" },
              { id: "services", label: "الخدمات" },
              { id: "beyond", label: "ما وراء العمليات" },
              { id: "videos", label: "فيديوهات" },
              { id: "web", label: "حول الويب" },
              { id: "orcid", label: "ORCID" },
              { id: "research", label: "الأبحاث" },
              { id: "teaching", label: "تعليم بصري" },
              { id: "education", label: "تثقيف المرضى" },
              { id: "presentations", label: "العروض التقديمية" },
              { id: "updates", label: "أحدث المستجدات" },
              { id: "contact", label: "تواصل" },
            ].map((t) => (
              <li key={t.id} className="shrink-0">
                <a
                  href={`#${t.id}`}
                  className="inline-flex items-center rounded-full border border-transparent px-4 py-2 text-sm font-medium text-muted-foreground whitespace-nowrap transition hover:border-gold/60 hover:bg-gold/15 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>



      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, oklch(0.75 0.12 200) 0%, transparent 40%), radial-gradient(circle at 20% 60%, oklch(0.55 0.15 220) 0%, transparent 50%)" }} />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 md:py-14 text-[oklch(0.985_0.005_240)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.15_160)]" />
            مفتوح للتعاون المهني
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.1] max-w-4xl">
            د. تامر رشدي <span className="text-[oklch(0.85_0.08_200)]">الألفي</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
            استشاري الجراحة العامة والمناظير. رئيس قسم الجراحة وغرف العمليات بمستشفى محمد الدوسري بالخبر — أستاذ مساعد الجراحة العامة بجامعة الزقازيق، مصر.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#expertise" className="rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">استكشف التخصصات</a>
            <a href="#contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">طلب استشارة</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-32 mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="text-xs tracking-widest text-accent font-bold">نبذة</div>
        <h2 className="mt-3 text-4xl md:text-5xl">منظور جرّاح.</h2>
        <div className="mt-10 grid md:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="md:col-span-4">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl opacity-30 blur-xl" style={{ backgroundImage: "var(--gradient-accent)" }} />
              <img src={portrait} alt="د. تامر رشدي الألفي" className="relative w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)] aspect-[4/5]" />
            </div>
          </div>
          <div className="md:col-span-8 space-y-5 text-lg text-muted-foreground leading-loose">

            <p>
              استشاري الجراحة العامة والمناظير، أتمتع بخبرة واسعة في الجراحات الاختيارية والطارئة، إضافة إلى سجل قوي في القيادة الجراحية والتعليم وإدارة غرف العمليات.
            </p>
            <p>
              أعمل حالياً <span className="text-foreground font-medium">استشارياً ورئيساً لقسم الجراحة العامة وغرف العمليات</span> بمستشفى محمد الدوسري في مدينة الخبر بالمملكة العربية السعودية، حيث أقود فرق العمل الجراحية، وأطوّر سير العمل في غرف العمليات، وأضمن أعلى معايير سلامة المرضى والحوكمة السريرية.
            </p>
            <p>
              مصنّف ومسجّل لدى الهيئة السعودية للتخصصات الصحية كاستشاري جراحة عامة منذ عام 2019. تشمل اهتماماتي الجراحة طفيفة التوغل وجراحة السمنة، والتعليم الجراحي والإرشاد، وتحسين الجودة في المنظومة الصحية.
            </p>
            <a href="/Dr_Tamer_Elalfy_CV.pdf" download className="inline-flex items-center gap-2 mt-4 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition">
              <Download className="h-4 w-4" /> تحميل السيرة الذاتية
            </a>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="scroll-mt-32 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12">
            <div className="text-xs tracking-widest text-accent font-bold">التخصصات السريرية</div>
            <h2 className="mt-3 text-4xl md:text-5xl max-w-xl">عمق في تخصصات الجراحة العامة.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((e, i) => (
              <div key={e.title} className={`bento-card p-8 group ${i === 0 ? "lg:col-span-2" : ""}`}>
                <div
                  className="h-11 w-11 rounded-xl flex items-center justify-center text-accent-foreground"
                  style={{ backgroundImage: "var(--gradient-accent)" }}
                >
                  <e.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl group-hover:text-accent transition-colors">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-loose">{e.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-32 mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 md:sticky md:top-24">
            <div className="text-xs tracking-widest text-accent font-bold">ما أقدمه</div>
            <h2 className="mt-3 text-4xl md:text-5xl">رعاية، مشورة، وقدرة.</h2>
            <p className="mt-4 text-muted-foreground leading-loose">
              سواء احتجت إلى رأي جراحي، أو فعالية تعليم طبي مستمر، أو استشارة قيادية — إليك كيف يمكنني المساعدة.
            </p>
          </div>
          <ul className="md:col-span-7 divide-y divide-border border-y border-border">
            {services.map((s, i) => (
              <li key={s} className="py-5 flex items-start gap-5">
                <span className="text-2xl text-accent w-10 shrink-0 font-bold">0{i + 1}</span>
                <span className="text-lg text-foreground/90">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Capabilities */}
      <section id="beyond" className="scroll-mt-32 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-xs tracking-widest text-[oklch(0.75_0.10_200)] font-bold">القدرات</div>
          <h2 className="mt-3 text-4xl md:text-5xl max-w-2xl">ما وراء غرفة العمليات.</h2>
          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {[
              { title: "القيادة والإدارة", icon: Users, items: ["رئاسة قسم الجراحة وغرف العمليات", "تحسين سير العمل في غرف العمليات", "قيادة فرق متعددة التخصصات", "الحوكمة السريرية وتحسين الجودة", "سلامة المرضى والمراجعات الجراحية"] },
              { title: "التعليم والتدريب", icon: GraduationCap, items: ["محاضرات التعليم الطبي المستمر", "تدريس الجراحة والإرشاد", "تدريب الأطباء المقيمين", "تعليم طاقم التمريض", "تثقيف المرضى المنظَّم", "اجتماعات الوفيات والمضاعفات"] },
              { title: "المهارات المهنية", icon: Award, items: ["الحكم السريري وأخلاقيات المهنة", "اتخاذ قرارات تحت الضغط", "التواصل مع المرضى وذويهم", "بناء الفرق", "تحسين الأنظمة الصحية"] },
            ].map((g) => (
              <div key={g.title}>
                <div className="flex items-center gap-3">
                  <g.icon className="h-5 w-5 text-[oklch(0.75_0.10_200)]" />
                  <h3 className="text-2xl">{g.title}</h3>
                </div>
                <ul className="mt-5 space-y-2.5 text-white/75">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span className="text-[oklch(0.75_0.10_200)] mt-1">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Videos */}
      <section id="videos" className="scroll-mt-32 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12">
            <div className="text-xs tracking-widest text-accent font-bold">تثقيف المرضى</div>
            <h2 className="mt-3 text-4xl md:text-5xl">شاهد وتعلّم.</h2>
            <p className="mt-4 text-muted-foreground max-w-xl leading-loose">مقاطع فيديو تعليمية قصيرة تساعدك على فهم الإجراءات الجراحية الشائعة وما يمكن توقعه.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://youtu.be/OM66BEr8pnc"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bento-card overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://i.ytimg.com/vi/OM66BEr8pnc/maxresdefault.jpg"
                  alt="الاستخدامات المتقدمة لمناظير البطن الجراحية"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition">
                  <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition">
                    <Youtube className="h-6 w-6 text-red-600 ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs tracking-widest text-muted-foreground mb-2">3 دقائق · بالعربية</div>
                <h3 className="text-xl group-hover:text-accent transition">الاستخدامات المتقدمة لمناظير البطن الجراحية</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-loose">
                  نظرة عامة على كيفية تطبيق الجراحة المنظارية في استئصال المرارة والفتق وغيرها من العمليات البطنية — ولماذا تسرّع الشفاء.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* في الصحافة / مذكور في */}
      <section id="web" className="scroll-mt-32 mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <div className="text-xs tracking-widest text-accent font-bold">مذكور ومنشور</div>
          <h2 className="mt-3 text-4xl md:text-5xl">حول الويب.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl leading-loose">ملفات تعريفية مختارة، منصات حجز، وأبحاث منشورة محكّمة.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              icon: Building2,
              tag: "ملف المستشفى",
              title: "مستشفى محمد الدوسري",
              desc: "الملف الرسمي للاستشاري — الجراحة العامة والمناظير.",
              href: "https://mdh.com.sa/doctors/dr-tamer-elalfy/",
            },
            {
              icon: CalendarCheck,
              tag: "الحجز الإلكتروني",
              title: "أوكادوك — الخبر",
              desc: "احجز موعدًا إلكترونيًا مع د. تامر رشدي الألفي.",
              href: "https://www.okadoc.com/en-sa/doctor/general-surgery/khobar/tamer-rushdy-elalfy",
            },
            {
              icon: Linkedin,
              tag: "مهني",
              title: "حساب لينكدإن",
              desc: "للتواصل المهني والتعاون الأكاديمي.",
              href: "https://linkedin.com/in/tamer-elalfy-a47514151",
            },
            {
              icon: ResearchGateIcon,
              tag: "بحث",
              title: "حساب ResearchGate",
              desc: "تابع منشوراتي واقتباساتي وآخر مستجداتي البحثية.",
              href: "https://www.researchgate.net/profile/Tamer-Rushdy/unconfirmed",
            },
            {
              icon: BookOpen,
              tag: "بحث منشور · 2021",
              title: "جراحة هبوط الفغرة المعقّد: هل تقنية ألتماير خيار مناسب؟",
              desc: "Alalfy TR, Orban YA, Algazar M, Farag A. — J. Coloproctol. 41(1), 2021.",
              href: "https://fi-view.bvsalud.org/lilacs/biblio/?filter=author%3A%22Alalfy%2C+Tamer+R%22",
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-5 p-6 bento-card"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition">
                <item.icon className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs tracking-widest text-muted-foreground mb-1">{item.tag}</div>
                <h3 className="text-lg leading-snug group-hover:text-accent transition flex items-start gap-2">
                  <span>{item.title}</span>
                  <ExternalLink className="h-4 w-4 mt-1 shrink-0 opacity-60" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-loose">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ORCID Profile */}
      <section id="orcid" className="scroll-mt-32 mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-12">
          <div className="text-xs tracking-widest text-accent font-bold">هوية الباحث</div>
          <h2 className="mt-3 text-4xl md:text-5xl">ملف ORCID.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl leading-loose">معرّف باحث موثّق يربط المنشورات والمساهمات المهنية.</p>
        </div>
        <a
          href="https://orcid.org/0000-0003-3769-2445"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex gap-5 p-6 bento-card max-w-2xl"
        >
          <div className="h-12 w-12 shrink-0 rounded-xl bg-[#A6CE39]/10 flex items-center justify-center group-hover:bg-[#A6CE39]/20 transition">
            <svg viewBox="0 0 256 256" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" aria-label="ORCID logo">
              <circle cx="128" cy="128" r="128" fill="#A6CE39"/>
              <path d="M86.5 128c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5-7.5-3.4-7.5-7.5zm15 15h-15v30h15v-30z" fill="white"/>
              <path d="M128 98h28c16.5 0 30 13.5 30 30s-13.5 30-30 30h-28v-60zm15 15v30h13c7.5 0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5h-13z" fill="white"/>
              <circle cx="128" cy="128" r="96" fill="none" stroke="white" strokeWidth="8"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs tracking-widest text-muted-foreground mb-1">معرّف ORCID</div>
            <h3 className="text-lg leading-snug group-hover:text-accent transition flex items-start gap-2">
              <span>تامر الألفي</span>
              <ExternalLink className="h-4 w-4 mt-1 shrink-0 opacity-60" />
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-loose font-mono" dir="ltr">0000-0003-3769-2445</p>
          </div>
        </a>
      </section>

      {/* الأبحاث المنشورة */}
      <section id="research" className="scroll-mt-32 mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-12">
          <div className="text-xs tracking-widest text-accent font-bold">أبحاث محكّمة منشورة</div>
          <h2 className="mt-3 text-4xl md:text-5xl">مختارات من الأبحاث.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl leading-loose">مقالات أصلية وتقارير حالات ومراجعات منشورة في دوريات جراحية دولية.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              tag: "Case Rep Gastrointest Med · 2018",
              title: "الناسور القولوني البنكرياسي: مضاعفة نادرة لالتهاب البنكرياس الحاد المتكرر",
              desc: "تقرير حالة يستعرض التشخيص والعلاج المشترك جراحيًا وتنظيريًا للناسور القولوني البنكرياسي.",
              href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5892304/",
            },
            {
              tag: "HPB (Oxford) · 2020",
              title: "مقال في مجلة HPB لجراحة الكبد والبنكرياس والقنوات الصفراوية",
              desc: "مقال أصلي منشور في HPB، المجلة الرسمية للجمعيتين الدوليتين IHPBA و AHPBA.",
              href: "https://www.hpbonline.org/article/S1365-182X(20)30108-8/fulltext",
            },
            {
              tag: "Medicine (Baltimore) · 2016",
              title: "النواسير الهضمية في التهاب البنكرياس الحاد",
              desc: "دراسة سريرية حول معدل حدوث وعوامل الخطر وعلاج النواسير الهضمية المصاحبة لالتهاب البنكرياس الحاد.",
              href: "https://journals.lww.com/md-journal/fulltext/2016/04050/gastrointestinal_fistulas_in_acute_pancreatitis.84.aspx",
            },
            {
              tag: "Am J Surg · 1989",
              title: "مقال في المجلة الأمريكية للجراحة",
              desc: "مساهمة في إحدى أعرق الدوريات الجراحية المحكّمة على مستوى العالم.",
              href: "https://www.americanjournalofsurgery.com/article/0002-9610(89)90198-0/abstract",
            },
            {
              tag: "J. Coloproctol. · 2021",
              title: "جراحة هبوط الفغرة المعقّد: هل تقنية ألتماير خيار مناسب؟",
              desc: "Alalfy TR, Orban YA, Algazar M, Farag A. — تقرير عن ثلاث حالات.",
              href: "https://fi-view.bvsalud.org/lilacs/biblio/?filter=author%3A%22Alalfy%2C+Tamer+R%22",
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-5 p-6 bento-card"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition">
                <BookOpen className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs tracking-widest text-muted-foreground mb-1">{item.tag}</div>
                <h3 className="text-lg leading-snug group-hover:text-accent transition flex items-start gap-2">
                  <span>{item.title}</span>
                  <ExternalLink className="h-4 w-4 mt-1 shrink-0 opacity-60" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-loose">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* الرسوم التوضيحية التعليمية */}
      <section id="teaching" className="scroll-mt-32 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12">
            <div className="text-xs tracking-widest text-accent font-bold">رسوم توضيحية تعليمية</div>
            <h2 className="mt-3 text-4xl md:text-5xl">تعليم بصري للأطباء والمرضى.</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl leading-loose">معرض مختار من الرسوم الجراحية التوضيحية المستخدمة في المحاضرات المهنية، ومناقشات الحالات، والشرح داخل العيادة، وتثقيف المرضى.</p>
          </div>
          <div className="space-y-6">
            {illustrationCollections.map((group, gi) => {
              const isOpen = !!openGroups[group.title];
              const panelId = `illustrations-panel-${gi}`;
              const headingId = `illustrations-heading-${gi}`;
              const focusRing = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
              return (
                <Collapsible key={group.title} open={isOpen} onOpenChange={() => toggleGroup(group.title)}>
                  <div className="bento-card overflow-hidden">
                    <div className="flex items-center justify-between gap-4 p-5 flex-wrap">
                      <div className="min-w-0">
                        <h3 id={headingId} className="inline-flex rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-accent">{group.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-loose">{group.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button
                              type="button"
                              className={`inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors ${focusRing}`}
                              aria-label={`معاينة ملف PDF — ${group.title}`}
                            >
                              <Eye className="h-4 w-4" aria-hidden="true" />
                              <span>معاينة</span>
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-5xl w-[95vw] h-[85vh] p-0 gap-0 flex flex-col" dir="rtl">
                            <DialogHeader className="px-5 py-3 border-b border-border">
                              <DialogTitle className="text-lg">معاينة — {group.title}</DialogTitle>
                            </DialogHeader>
                            <iframe
                              src={`${group.pdf}#view=FitH`}
                              title={`معاينة ملف PDF — ${group.title}`}
                              className="flex-1 w-full bg-secondary"
                            />
                            <div className="px-5 py-3 border-t border-border flex items-center justify-between gap-3 flex-wrap">
                              <span className="text-xs text-muted-foreground">{group.pdfMeta}</span>
                              <a
                                href={group.pdf}
                                download
                                className={`inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors ${focusRing}`}
                              >
                                <Download className="h-4 w-4" aria-hidden="true" />
                                تحميل PDF
                              </a>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <a
                          href={group.pdf}
                          download
                          className={`inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors ${focusRing}`}
                          aria-label={`تحميل ملف PDF للطباعة — ${group.title}`}
                        >
                          <Download className="h-4 w-4" aria-hidden="true" />
                          <span>تحميل PDF</span>
                          <span className="text-xs text-muted-foreground hidden sm:inline">· {group.pdfMeta}</span>
                        </a>
                        <CollapsibleTrigger asChild>
                          <button
                            type="button"
                            id={`${panelId}-trigger`}
                            aria-controls={panelId}
                            aria-expanded={isOpen}
                            aria-label={`${isOpen ? "إخفاء" : "عرض"} الرسوم التعليمية — ${group.title}`}
                            className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium hover:bg-secondary/80 transition-colors ${focusRing}`}
                          >
                            <span>{isOpen ? "إخفاء" : "عرض"}</span>
                            {isOpen ? <ChevronUp className="h-4 w-4" aria-hidden="true" /> : <ChevronDown className="h-4 w-4" aria-hidden="true" />}
                          </button>
                        </CollapsibleTrigger>
                      </div>
                    </div>
                    <CollapsibleContent id={panelId} role="region" aria-labelledby={headingId}>
                      <div className="border-t border-border px-5">
                        <ul className="divide-y divide-border">
                          {group.items.map((item) => (
                            <li key={item.title} className="py-4">
                              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                                <div className="min-w-0">
                                  <h4 className="text-base leading-snug">{item.title}</h4>
                                  <p className="mt-1 text-sm text-muted-foreground leading-loose">{item.desc}</p>
                                </div>
                                <a
                                  href={item.image}
                                  download
                                  className={`inline-flex items-center gap-1.5 self-start rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-secondary transition-colors shrink-0 ${focusRing}`}
                                  aria-label={`تحميل الرسم التعليمي — ${item.title}`}
                                >
                                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                                  PNG
                                </a>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </section>

      {/* تثقيف المرضى — تشخيص بتشخيص */}
      <section id="education" className="scroll-mt-32 mx-auto max-w-6xl px-6 pt-24">
        <div className="mb-12">
          <div className="text-xs tracking-widest text-accent font-bold">تثقيف المرضى</div>
          <h2 className="mt-3 text-4xl md:text-5xl">افهم عمليتك الجراحية.</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-loose">
            نشرات تثقيفية للمرضى مرتّبة حسب التشخيص — ما هي الحالة، لماذا تُجرى الجراحة، كيف يتم الإجراء، وما الذي تتوقعه أثناء التعافي. متاحة للتحميل والمشاركة مجانًا.
          </p>
        </div>
        <div className="space-y-14">
          {educationCategories.map((cat) => {
            const items = patientEducation.filter((e) => e.category === cat);
            if (!items.length) return null;
            return (
              <div key={cat}>
                <div className="mb-5 overflow-hidden rounded-2xl border border-border bg-card">
                  <img
                    src={educationCategoryImages[cat]}
                    alt={`${educationCategoriesAr[cat]} — تعليمات المرضى`}
                    loading="lazy"
                    width={1280}
                    height={640}
                    className="h-40 w-full object-cover md:h-56"
                  />
                </div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent">{educationCategoriesAr[cat]}</div>
                  <div className="h-px flex-1 bg-border" />
                  <div className="text-xs text-muted-foreground">{items.length} موضوع</div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {items.map((item) => (
                    <article key={item.id} className="bento-card p-6 flex flex-col">
                      <div className="flex items-start gap-3">
                        <div className="rounded-lg bg-secondary p-2.5 text-accent shrink-0">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xl leading-snug">{item.titleAr}</h3>
                          <p className="mt-1 text-xs text-muted-foreground" dir="ltr">{item.title}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground leading-loose">{item.summaryAr}</p>
                      <div className="mt-5 flex items-center justify-between gap-3 flex-wrap pt-4 border-t border-border">
                        <span className="text-xs text-muted-foreground">PDF · {formatSize(item.pdfSize)} · DOCX · {formatSize(item.fileSize)}</span>
                        <div className="flex items-center gap-2 flex-wrap">
                          <a
                            href={item.pdfUrl}
                            download={item.pdfName}
                            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
                            aria-label={`تحميل ملف PDF جاهز للطباعة — ${item.titleAr}`}
                          >
                            <Download className="h-4 w-4" />
                            PDF
                          </a>
                          <a
                            href={item.fileUrl}
                            download={item.fileName}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
                            aria-label={`تحميل النسخة القابلة للتعديل DOCX — ${item.titleAr}`}
                          >
                            <Download className="h-4 w-4" />
                            DOCX
                          </a>
                          {item.checklistPdfUrl && (
                            <a
                              href={item.checklistPdfUrl}
                              download={item.checklistPdfName}
                              className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-medium hover:bg-accent/90 transition-colors"
                              aria-label={`تحميل قائمة المراجعة للطباعة — ${item.titleAr}`}
                            >
                              <Download className="h-4 w-4" />
                              قائمة المراجعة PDF
                            </a>
                          )}
                          {item.articleRoute && (
                            <Link
                              to={item.articleRoute}
                              className="inline-flex items-center gap-2 rounded-full border border-accent text-accent px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                              aria-label={`قراءة المقال — ${item.titleAr}`}
                            >
                              <FileText className="h-4 w-4" />
                              قراءة المقال
                            </Link>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* العروض التقديمية */}
      <section id="presentations" className="scroll-mt-32 mx-auto max-w-6xl px-6 pb-24 pt-24">

        <div className="mb-12">
          <div className="text-xs tracking-widest text-accent font-bold">محاضرات وعروض تقديمية</div>
          <h2 className="mt-3 text-4xl md:text-5xl">العروض التقديمية.</h2>
          <p className="mt-4 text-muted-foreground max-w-xl leading-loose">محاضرات تعليم طبي مستمر وعروض أكاديمية من إعداد د. الألفي، متاحة للتحميل للزملاء والأطباء المقيمين والمرضى.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              tag: "جراحة القولون والشرج · محاضرة CME",
              title: "الأمراض الشرجية الشائعة — مقاربة جراحية وغذائية محدّثة",
              desc: "نظرة عملية على البواسير والشروخ والنواسير والحكة الشرجية — تشمل أحدث التقنيات الجراحية ودور التغذية في الوقاية والتعافي.",
              href: analConditionsPpt.url,
              file: "PPTX · 5.2 ميجابايت",
            },
            {
              tag: "جراحة السمنة · محاضرة",
              title: "تكميم المعدة بالمنظار — الأسلوب الجراحي واختيار المريض",
              desc: "خطوات العملية، اعتبارات خط الدبابيس، الوقاية من التسرب، والنتائج بعيدة المدى لتكميم المعدة.",
              href: sleevePpt.url,
              file: "PPTX · 1.0 ميجابايت",
            },
            {
              tag: "الكبد والبنكرياس · دراسة سريرية",
              title: "علاج حصوات القناة الصفراوية المشتركة — دراسة سريرية",
              desc: "خوارزمية التشخيص، المقارنة بين ERCP واستكشاف القناة الصفراوية بالمنظار، ونتائج سلسلة من الحالات.",
              href: cbdPpt.url,
              file: "PPT · 1.6 ميجابايت",
            },
            {
              tag: "جدار البطن · محاضرة",
              title: "فتوق جدار البطن",
              desc: "محاضرة شاملة عن الفتوق الإربية والبطنية والسرية والجراحية — التشريح والتصنيف وطرق الإصلاح.",
              href: herniaPpt.url,
              file: "PPTX · 10.2 ميجابايت",
            },
            {
              tag: "الغدد الصماء · تشريح",
              title: "مقدمة في الرقبة — التشريح الجراحي",
              desc: "الأسس التشريحية لجراحة الرأس والرقبة: الطبقات اللفافية، المثلثات، والتراكيب العصبية الوعائية الأساسية.",
              href: neckIntroPpt.url,
              file: "PPT · 2.2 ميجابايت",
            },
            {
              tag: "الغدد الصماء · محاضرة",
              title: "الغدة الدرقية — نظرة جراحية شاملة",
              desc: "التشريح والفسيولوجيا، تقييم العقد الدرقية، دواعي الجراحة، والطريقة الجراحية لاستئصال الغدة الدرقية.",
              href: thyroidPpt.url,
              file: "PPT · 15.4 ميجابايت",
            },
            {
              tag: "التدريب الجراحي · OSCE",
              title: "أخذ السيرة المرضية والفحص الجراحي — حالة فتق",
              desc: "نهج منظم لأخذ السيرة المرضية والفحص السريري لمريض يعاني من فتق في جدار البطن.",
              href: puhPpt.url,
              file: "PPTX · 0.2 ميجابايت",
            },
            {
              tag: "الحروق · ندوة (الجزء الأول)",
              title: "الحروق — الأساسيات ومبادئ العلاج (الجزء الأول)",
              desc: "علم الأوبئة، الفسيولوجيا المرضية، الرعاية قبل الوصول للمستشفى، والمراحل الأربع لعلاج الحروق الحديث.",
              href: burn1Ppt.url,
              file: "PPTX · 5.2 ميجابايت",
            },
            {
              tag: "الحروق · ندوة (الجزء الثاني)",
              title: "الحروق — الأساسيات ومبادئ العلاج (الجزء الثاني)",
              desc: "معايير الإدخال لمراكز الحروق، شق الجلد المتفحم، رعاية الجرح، التغذية، مكافحة العدوى، والتأهيل.",
              href: burn2Ppt.url,
              file: "PPTX · 3.7 ميجابايت",
            },
          ].map((item) => (
            <div
              key={item.href}
              className="group flex gap-5 p-6 bento-card"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition">
                <Presentation className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs tracking-widest text-muted-foreground mb-1">{item.tag}</div>
                <h3 className="text-lg leading-snug group-hover:text-accent transition">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {item.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-loose">{item.desc}</p>
                <div className="mt-4 flex items-center gap-3 flex-wrap">
                  <span className="text-xs text-accent font-bold">{item.file}</span>
                  <a
                    href={item.href}
                    download
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-3 py-1.5 text-xs font-medium hover:bg-primary/90 transition-colors"
                    aria-label={`تحميل ${item.title}`}
                  >
                    <Download className="h-3.5 w-3.5" />
                    تحميل PPTX
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* المستجدات الجراحية */}
      <section id="updates" className="scroll-mt-32 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="eyebrow">جديد · 2024–2025</div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">أحدث ما تغيّر في الجراحة العامة والمناظير.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              ملخّص مختار من آخر عامين — التحوّلات التي تُعيد رسم الممارسة اليومية للجرّاحين، والتغييرات العملية التي يجب أن يعرفها المريض قبل عمليته.
            </p>
          </div>

          {(["doctors", "patients"] as const).map((audience) => {
            const items = surgeryUpdates.filter((u) => u.audience === audience);
            const isDoctors = audience === "doctors";
            return (
              <div key={audience} className="mt-14">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${isDoctors ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                    {isDoctors ? <Microscope className="h-5 w-5" /> : <HeartPulse className="h-5 w-5" />}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{isDoctors ? "للأطباء والأطباء تحت التدريب" : "للمرضى وذويهم"}</div>
                    <h3 className="font-serif text-2xl md:text-3xl">{isDoctors ? "تحديثات الأدلة والإرشادات" : "ماذا يعني هذا لك"}</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {items.map((u) => (
                    <article key={u.title.ar} className="bento-card p-6 flex flex-col">
                      <div className="flex items-center justify-between text-xs">
                        <span className="uppercase tracking-widest text-accent font-semibold">{u.tag.ar}</span>
                        <span className="text-muted-foreground" dir="ltr">{u.date}</span>
                      </div>
                      <h4 className="mt-3 font-serif text-lg leading-snug">{u.title.ar}</h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{u.summary.ar}</p>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <span className="text-xs text-muted-foreground">{u.source.ar}</span>
                        <a href={u.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline">
                          اقرأ المزيد <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}

          <p className="mt-10 text-xs text-muted-foreground italic max-w-3xl">
            ملخّص تعليمي فقط — لا يُغني عن الاستشارة الطبية الفردية. الإرشادات تتغير باستمرار، وينبغي التأكد دومًا مع الفريق الطبي المعالج.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-32 mx-auto max-w-6xl px-6 py-24">

        <div className="rounded-3xl bg-card border border-border p-10 md:p-16 shadow-[var(--shadow-elegant)] relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full opacity-20" style={{ background: "var(--gradient-accent)" }} />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs tracking-widest text-accent font-bold">تواصل</div>
              <h2 className="mt-3 text-4xl md:text-5xl">لنتعاون.</h2>
              <p className="mt-4 text-muted-foreground max-w-md leading-loose">
                مفتوح للتعاون المهني، فعاليات التعليم الطبي المستمر، التبادل الأكاديمي، ومبادرات القيادة الصحية.
              </p>
            </div>
            <div className="space-y-5">
              <a href="mailto:tamerelalfy@hca.med.sa" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group" dir="ltr">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground">EMAIL</div>
                  <div className="font-medium group-hover:text-accent transition">tamerelalfy@hca.med.sa</div>
                </div>
              </a>
              <a href="tel:+966548026853" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group" dir="ltr">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground">PHONE</div>
                  <div className="font-medium group-hover:text-accent transition">+966 54 802 6853</div>
                </div>
              </a>
              <a href="https://youtube.com/@alfy_surgery" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group" dir="ltr">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <Youtube className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground">YOUTUBE</div>
                  <div className="font-medium group-hover:text-accent transition">@alfy_surgery</div>
                </div>
              </a>
              <a href="https://www.facebook.com/share/18GMPg3MQw/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group" dir="ltr">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <Facebook className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground">FACEBOOK</div>
                  <div className="font-medium group-hover:text-accent transition">Dr. Tamer Elalfy</div>
                </div>
              </a>
              <a href="https://whatsapp.com/channel/0029VbDHjNiKAwEkWMqT5C2P" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground">قناة واتساب</div>
                  <div className="font-medium group-hover:text-accent transition">للمرضى</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/alfitamir/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group" dir="ltr">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <Linkedin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground">LINKEDIN</div>
                  <div className="font-medium group-hover:text-accent transition">in/alfitamir</div>
                </div>
              </a>
              <a href="https://www.researchgate.net/profile/Tamer-Rushdy/unconfirmed" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 rounded-xl border border-border hover:border-accent transition group" dir="ltr">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center">
                  <ResearchGateIcon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground">RESEARCHGATE</div>
                  <div className="font-medium group-hover:text-accent transition">Tamer Rushdy</div>
                </div>
              </a>
              <a href="tel:+966138011910" className="flex items-start gap-4 p-5 rounded-xl border border-border hover:border-accent transition group">
                <div className="h-11 w-11 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground">العيادة</div>
                  <div className="font-medium leading-loose">
                    شارع الرابع، الخبر الجنوبية<br />
                    الخبر 34621، المملكة العربية السعودية
                  </div>
                  <div className="mt-2 text-sm text-accent group-hover:underline" dir="ltr">+966 13 801 1910</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} د. تامر رشدي الألفي</div>
          <div>جامعة الزقازيق · مستشفى محمد الدوسري، المملكة العربية السعودية</div>
          <a
            href="https://alfisurgery.lovable.app/ar"
            className="flex items-center gap-3 group"
            aria-label="امسح الرمز لفتح الموقع"
          >
            <img
              src="/site-qr-ar.svg"
              alt="رمز QR لفتح موقع د. تامر الألفي"
              width={88}
              height={88}
              loading="lazy"
              className="h-22 w-22 rounded-md bg-white p-1.5 ring-1 ring-border"
            />
            <span className="max-w-[9rem] text-xs leading-snug group-hover:text-foreground transition">
              امسح الرمز لفتح الصفحة على هاتفك
            </span>
          </a>
        </div>
      </footer>

    </div>
  );
}


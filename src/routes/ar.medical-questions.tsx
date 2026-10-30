import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Stethoscope,
  ArrowLeft,
  ChevronDown,
  Phone,
  CalendarCheck,
  AlertTriangle,
  Globe,
  Activity,
  HeartPulse,
  Microscope,
  ClipboardList,
  ShieldCheck,
  Apple,
  HelpCircle,
  ArrowRight,
  Siren,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/ar/medical-questions")({
  component: ArabicMedicalQuestionsPage,
  head: () => ({
    meta: [
      { title: "الأسئلة الطبية — د. تامر الألفي" },
      {
        name: "description",
        content:
          "إرشادات عامة حول الحالات الجراحية الشائعة: المرارة، الفتق، السمنة، الغدة الدرقية، القولون والشرج، وأمراض الجهاز الهضمي — مع توجيه لحجز موعد عند الحاجة.",
      },
      { property: "og:title", content: "الأسئلة الطبية — د. تامر الألفي" },
      {
        property: "og:description",
        content: "إجابات مبسطة عن أكثر الأسئلة الجراحية شيوعًا، ومتى يجب زيارة العيادة.",
      },
      { property: "og:url", content: "/ar/medical-questions" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { httpEquiv: "content-language", content: "ar" },
    ],
    links: [
      { rel: "canonical", href: "https://alfisurgery.com/ar/medical-questions" },
      { rel: "alternate", hrefLang: "ar", href: "https://alfisurgery.com/ar/medical-questions" },
      {
        rel: "alternate",
        hrefLang: "x-default",
        href: "https://alfisurgery.com/ar/medical-questions",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&family=Amiri:wght@400;700&display=swap",
      },
    ],
  }),
});

type Condition = {
  id: string;
  icon: LucideIcon;
  title: string;
  intro: string;
  guidance: string[];
  redFlags: string[];
  bookWhen: string;
};

const conditions: Condition[] = [
  {
    id: "gallbladder",
    icon: Microscope,
    title: "المرارة وحصواتها",
    intro:
      "حصوات المرارة شائعة، وكثير منها لا يسبب أعراضًا. الألم النموذجي يكون في الجزء العلوي الأيمن من البطن بعد الأكل الدسم، وقد يمتد إلى الكتف الأيمن أو الظهر.",
    guidance: [
      "تقليل الأطعمة الدهنية والمقلية والوجبات الكبيرة.",
      "تناول وجبات صغيرة ومتكررة بدلًا من وجبة واحدة كبيرة.",
      "الحفاظ على وزن صحي وتجنب فقدان الوزن السريع جدًا.",
      "شرب الماء بانتظام والحفاظ على نشاط بدني معتدل.",
    ],
    redFlags: [
      "ألم شديد ومستمر في أعلى البطن لأكثر من ساعات.",
      "اصفرار الجلد أو العينين أو تغيّر لون البول إلى الداكن.",
      "حمى ورجفة مع ألم في البطن.",
      "غثيان وقيء متكرر يمنعك من الشرب.",
    ],
    bookWhen:
      "إذا تكررت نوبات الألم دون علامات تحذيرية، احجز موعدًا في العيادة لتقييم الحالة وبحث خيار استئصال المرارة بالمنظار. أما ظهور أي علامة تحذيرية فيستدعي التوجه فورًا لأقرب قسم طوارئ دون انتظار موعد.",
  },
  {
    id: "hernia",
    icon: ShieldCheck,
    title: "الفتق (إربي، سُري، جراحي)",
    intro:
      "الفتق هو بروز جزء من محتويات البطن عبر ضعف في جدار البطن. يظهر عادةً ككتلة تزداد مع الكحة أو الوقوف وتختفي عند الاستلقاء.",
    guidance: [
      "تجنب رفع الأوزان الثقيلة والإمساك المزمن.",
      "علاج السعال المزمن وتقليل التدخين.",
      "الحفاظ على وزن مناسب لتقليل الضغط على جدار البطن.",
      "ارتداء حزام الفتق لا يعالج المشكلة لكنه قد يخفف الانزعاج مؤقتًا.",
    ],
    redFlags: [
      "ألم مفاجئ وشديد في موضع الفتق.",
      "تحوّل لون الكتلة إلى الأحمر أو الأزرق وعدم اختفائها.",
      "غثيان وقيء وانتفاخ وعدم خروج غازات أو براز.",
    ],
    bookWhen:
      "كل فتق يُنصح بتقييمه جراحيًا. ظهور أي علامة تحذيرية يستدعي التوجه فورًا للطوارئ، فقد يكون اختناقًا للفتق.",
  },
  {
    id: "bariatric",
    icon: HeartPulse,
    title: "جراحات السمنة",
    intro:
      "جراحات السمنة (تكميم المعدة، التحويل، الساسي) تُعتبر علاجًا فعّالًا للسمنة المرضية ومضاعفاتها مثل السكري والضغط، عند المرضى الذين تنطبق عليهم المعايير الطبية.",
    guidance: [
      "البدء بتغييرات نمط الحياة: التغذية المتوازنة والنشاط البدني.",
      "تقييم شامل قبل الجراحة يشمل تحاليل ودراسات تغذوية ونفسية.",
      "الالتزام بالفيتامينات والمتابعة الدورية مدى الحياة بعد العملية.",
      "تجنب المشروبات الغازية والسكريات المركّزة بعد الجراحة.",
    ],
    redFlags: [
      "ألم بطني شديد، تسارع نبض، أو حمى بعد العملية.",
      "قيء مستمر وعدم القدرة على شرب السوائل.",
      "ضيق تنفس مفاجئ أو ألم في الصدر أو الساق.",
    ],
    bookWhen:
      "احجز موعد استشارة لمناقشة مدى ملاءمتك للجراحة، اختيار الإجراء الأنسب، والتحضير قبل وبعد العملية.",
  },
  {
    id: "thyroid",
    icon: Stethoscope,
    title: "الغدة الدرقية",
    intro:
      "تشمل مشاكل الغدة الدرقية تضخمها أو ظهور عقد بها أو اضطرابات في وظائفها. كثير من العقد حميد، لكن يجب تقييم كل حالة.",
    guidance: [
      "إجراء تحاليل وظائف الغدة (TSH) وأشعة موجات صوتية عند وجود تضخم.",
      "متابعة العقد الصغيرة دوريًا حسب توصية الطبيب.",
      "العقد المشبوهة قد تحتاج إلى عينة بالإبرة الدقيقة (FNA).",
    ],
    redFlags: [
      "تضخم سريع في الرقبة أو ظهور كتلة صلبة.",
      "بحّة مستمرة في الصوت أو صعوبة في البلع أو التنفس.",
      "تضخم في الغدد الليمفاوية بالرقبة.",
    ],
    bookWhen:
      "احجز موعد عند ظهور كتلة في الرقبة، تغيّر الصوت، أو نتائج تحاليل غير طبيعية لمناقشة خطة العلاج وإمكانية الجراحة.",
  },
  {
    id: "colorectal",
    icon: ClipboardList,
    title: "القولون والشرج",
    intro:
      "تشمل البواسير، الشرخ الشرجي، الناسور، وأورام القولون. كثير من الحالات يمكن علاجها بنجاح خاصةً عند التشخيص المبكر.",
    guidance: [
      "تناول ألياف كافية (خضروات، فواكه، حبوب كاملة) وشرب الماء.",
      "تجنب الجلوس الطويل في الحمام والإجهاد أثناء التبرز.",
      "النشاط البدني المنتظم يحسّن حركة الأمعاء.",
      "علاج الإمساك مبكرًا قبل أن يصبح مزمنًا.",
    ],
    redFlags: [
      "نزيف مع البراز أو دم في الحفاظ الشخصي.",
      "تغيّر مفاجئ في عادات التبرز يستمر أكثر من أسبوعين.",
      "فقدان وزن غير مبرر أو فقر دم.",
      "ألم شرجي شديد مع حمى.",
    ],
    bookWhen:
      "أي نزيف مستقيمي أو تغيّر مستمر في التبرز يستدعي تقييمًا جراحيًا. لا تفترض أنه «مجرد بواسير».",
  },
  {
    id: "gi",
    icon: Apple,
    title: "الجهاز الهضمي العلوي والارتجاع",
    intro:
      "ارتجاع المريء وقرحة المعدة من أكثر الحالات شيوعًا. معظمها يستجيب لتعديل نمط الحياة والعلاج الدوائي، وبعضها يحتاج تدخلًا جراحيًا.",
    guidance: [
      "تجنب الوجبات الكبيرة قبل النوم بثلاث ساعات.",
      "رفع الرأس أثناء النوم وتقليل الكافيين والمقليات والتدخين.",
      "إنقاص الوزن إن كان زائدًا.",
      "تجنب مسكنات الألم غير الستيرويدية دون استشارة طبية.",
    ],
    redFlags: [
      "صعوبة أو ألم عند البلع.",
      "قيء دموي أو براز أسود قطراني.",
      "فقدان وزن غير مبرر مع أعراض هضمية.",
      "ألم بطني شديد أو مستمر.",
    ],
    bookWhen:
      "إذا استمرت الأعراض رغم العلاج، أو ظهرت أي علامات تحذيرية، يلزم تقييم متخصص وقد يُنصح بالمنظار.",
  },
];

function ArabicMedicalQuestionsPage() {
  return (
    <div
      dir="rtl"
      lang="ar"
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Tajawal', system-ui, sans-serif" }}
    >
      <style>{`
        [dir="rtl"] h1, [dir="rtl"] h2, [dir="rtl"] h3, [dir="rtl"] h4 {
          font-family: 'Amiri', 'Tajawal', serif;
          letter-spacing: 0;
        }
      `}</style>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link to="/ar" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[var(--gradient-accent)] flex items-center justify-center">
              <Stethoscope className="h-4 w-4 text-accent-foreground" />
            </div>
            <span className="text-lg font-bold">د. تامر الألفي</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/ar" hash="about" className="hover:text-foreground transition">
              نبذة
            </Link>
            <Link to="/ar/patients" className="hover:text-foreground transition">
              للمرضى
            </Link>
            <Link to="/ar/medical-questions" className="text-foreground font-medium">
              الأسئلة الطبية
            </Link>
            <Link to="/ar" hash="contact" className="hover:text-foreground transition">
              تواصل
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="tel:+966138011910"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              احجز موعد <ArrowLeft className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, oklch(0.75 0.12 200) 0%, transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.55 0.15 220) 0%, transparent 50%)",
          }}
        />
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-28 text-[oklch(0.985_0.005_240)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide backdrop-blur">
            <Activity className="h-3.5 w-3.5" /> إرشادات عامة حسب الحالة
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-medium leading-[1.15]">
            الأسئلة <span className="text-[oklch(0.85_0.08_200)]">الطبية الشائعة</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            معلومات مبسطة حول أكثر الحالات الجراحية شيوعًا — ماذا تفعل في المنزل، ومتى تحتاج لزيارة
            العيادة، ومتى يجب التوجه للطوارئ.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:+966138011910"
              className="rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition inline-flex items-center gap-2"
            >
              <Phone className="h-4 w-4" /> اتصل بالعيادة
            </a>
            <Link
              to="/ar/patients"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              قناة المرضى على واتساب
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-4xl px-6 pt-12">
        <div className="rounded-2xl border border-accent/30 bg-card p-5 flex items-start gap-4">
          <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">تنويه:</span> هذه المعلومات للتثقيف العام
            فقط ولا تُغني عن الاستشارة الطبية الشخصية. لتقييم حالتك تحديدًا يرجى حجز موعد. في حالات
            الطوارئ توجّه فورًا لأقرب قسم طوارئ.
          </p>
        </div>
      </section>

      {/* Symptom Triage */}
      <SymptomTriage />

      {/* Conditions */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold text-center">
          حسب الحالة
        </div>
        <h2 className="mt-3 text-4xl md:text-5xl text-center">اختر الموضوع الذي يهمك.</h2>

        <div className="mt-12 space-y-3">
          {conditions.map((c, i) => (
            <div key={c.id} id={c.id} className="scroll-mt-24">
              <ConditionCard c={c} defaultOpen={i === 0} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <CalendarCheck className="h-10 w-10 text-accent mx-auto" />
          <h2 className="mt-4 text-4xl md:text-5xl">سؤالك لم يجد إجابة؟</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            كل حالة مختلفة. لتقييم دقيق يأخذ في الاعتبار تاريخك الطبي وأعراضك، أفضل خطوة هي حجز موعد
            بالعيادة.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+966138011910"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition"
            >
              <Phone className="h-4 w-4" /> +966 13 801 1910
            </a>
            <Link
              to="/ar"
              hash="contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold hover:border-accent transition"
            >
              معلومات العيادة والموقع
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} د. تامر رشدي الألفي</div>
          <Link to="/ar" className="hover:text-foreground transition">
            ← العودة للرئيسية
          </Link>
        </div>
      </footer>
    </div>
  );
}

function ConditionCard({ c, defaultOpen = false }: { c: Condition; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const Icon = c.icon;
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-right hover:bg-secondary/40 transition"
      >
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-lg bg-[var(--gradient-accent)] flex items-center justify-center text-accent-foreground shrink-0">
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-xl">{c.title}</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-6 space-y-6 border-t border-border pt-5">
          <p className="text-muted-foreground leading-relaxed">{c.intro}</p>

          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">إرشادات عامة</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pr-5 marker:text-accent">
              {c.guidance.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
            <h3 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" /> علامات تحذيرية
            </h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pr-5 marker:text-destructive">
              {c.redFlags.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-secondary/60 p-4">
            <h3 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
              <CalendarCheck className="h-4 w-4 text-accent" /> متى تحجز موعدًا
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.bookWhen}</p>
            <a
              href="tel:+966138011910"
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              <Phone className="h-3.5 w-3.5" /> احجز موعد
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

type Question = {
  id: string;
  text: string;
  options: { label: string; next?: string; result?: string; emergency?: boolean }[];
};

type TriageResult = {
  conditionId?: string;
  title: string;
  message: string;
  emergency?: boolean;
  redFlags?: string[];
};

const questions: Record<string, Question> = {
  start: {
    id: "start",
    text: "ما المنطقة أو العَرَض الرئيسي الذي يزعجك؟",
    options: [
      { label: "ألم في أعلى البطن أو تحت الأضلاع اليمنى", next: "gallbladder_q" },
      { label: "كتلة أو انتفاخ في جدار البطن أو الإربية", next: "hernia_q" },
      { label: "زيادة في الوزن أو سؤال عن جراحات السمنة", result: "bariatric" },
      { label: "كتلة أو ألم في الرقبة / مشاكل الغدة الدرقية", next: "thyroid_q" },
      { label: "نزيف، ألم شرجي، أو تغيّر في عادات التبرز", next: "colorectal_q" },
      { label: "حرقة، ارتجاع، أو ألم في المعدة", next: "gi_q" },
    ],
  },
  gallbladder_q: {
    id: "gallbladder_q",
    text: "هل لديك أي من هذه الأعراض الآن؟",
    options: [
      {
        label: "اصفرار الجلد/العين، حمى ورجفة، ألم شديد مستمر لساعات، أو قيء متكرر يمنع الشرب",
        result: "emergency_gallbladder",
        emergency: true,
      },
      { label: "ألم متكرر بعد الأكل الدسم، غثيان أو انتفاخ", result: "gallbladder" },
      { label: "انزعاج خفيف أحيانًا فقط", result: "gallbladder" },
    ],
  },
  hernia_q: {
    id: "hernia_q",
    text: "كيف تتصرف الكتلة عند الضغط أو الاستلقاء؟",
    options: [
      {
        label: "أصبحت مؤلمة جدًا، صلبة، ولا تختفي — مع غثيان أو قيء",
        result: "emergency_hernia",
        emergency: true,
      },
      { label: "تظهر مع الكحة/الوقوف وتختفي عند الاستلقاء", result: "hernia" },
      { label: "موجودة دائمًا لكن بدون ألم شديد", result: "hernia" },
    ],
  },
  thyroid_q: {
    id: "thyroid_q",
    text: "هل ظهرت أي من هذه العلامات؟",
    options: [
      {
        label: "صعوبة شديدة في التنفس أو البلع المفاجئ",
        result: "emergency_general",
        emergency: true,
      },
      { label: "كتلة تتضخم بسرعة، بحّة صوت مستمرة، أو غدد ليمفاوية متضخمة", result: "thyroid" },
      { label: "تضخم خفيف أو نتائج تحاليل غير طبيعية", result: "thyroid" },
    ],
  },
  colorectal_q: {
    id: "colorectal_q",
    text: "ما طبيعة الأعراض؟",
    options: [
      {
        label: "نزيف غزير، دوخة شديدة، أو ألم بطني شديد مع حمى",
        result: "emergency_general",
        emergency: true,
      },
      { label: "نزيف متكرر، تغيّر مستمر بالتبرز، أو فقدان وزن غير مبرر", result: "colorectal" },
      { label: "بواسير أو ألم شرجي خفيف عرضي", result: "colorectal" },
    ],
  },
  gi_q: {
    id: "gi_q",
    text: "هل لديك أي من هذه الأعراض؟",
    options: [
      {
        label: "قيء دموي، براز أسود قطراني، أو ألم شديد مفاجئ",
        result: "emergency_general",
        emergency: true,
      },
      { label: "صعوبة بلع، فقدان وزن، أو أعراض مستمرة رغم العلاج", result: "gi" },
      { label: "حرقة أو ارتجاع متكرر بعد الأكل", result: "gi" },
    ],
  },
};

const results: Record<string, TriageResult> = {
  gallbladder: {
    conditionId: "gallbladder",
    title: "قسم المرارة وحصواتها",
    message:
      "أعراضك قد تتوافق مع مشاكل المرارة. احجز موعدًا في العيادة إن تكررت النوبات. إذا ظهر اصفرار أو حمى ورجفة أو ألم شديد مستمر أو قيء متكرر، توجّه فورًا للطوارئ.",
  },
  hernia: {
    conditionId: "hernia",
    title: "قسم الفتق",
    message: "ما تصفه يتوافق مع وجود فتق. كل فتق يحتاج تقييمًا جراحيًا حتى لو كان مؤلمًا قليلاً.",
  },
  bariatric: {
    conditionId: "bariatric",
    title: "قسم جراحات السمنة",
    message: "اطلع على شروط ومميزات جراحات السمنة، ثم احجز استشارة لتقييم مدى ملاءمتها لك.",
  },
  thyroid: {
    conditionId: "thyroid",
    title: "قسم الغدة الدرقية",
    message: "تحتاج لتقييم الغدة بتحاليل وموجات صوتية. احجز موعدًا لمناقشة النتائج وخطة العلاج.",
  },
  colorectal: {
    conditionId: "colorectal",
    title: "قسم القولون والشرج",
    message: "لا تفترض أنه «مجرد بواسير» — أي نزيف أو تغيّر مستمر يستدعي تقييمًا جراحيًا.",
  },
  gi: {
    conditionId: "gi",
    title: "قسم الجهاز الهضمي والارتجاع",
    message:
      "كثير من الحالات تتحسن بتعديل نمط الحياة والعلاج الدوائي. احجز موعدًا إن استمرت الأعراض.",
  },
  emergency_gallbladder: {
    title: "علامات تحذيرية — توجّه للطوارئ",
    message:
      "هذه الأعراض قد تدل على التهاب حاد بالمرارة أو انسداد القنوات المرارية. لا تنتظر، توجّه فورًا لأقرب قسم طوارئ.",
    emergency: true,
    redFlags: [
      "اصفرار الجلد أو العينين",
      "حمى ورجفة مع ألم البطن",
      "ألم شديد مستمر لساعات",
      "قيء متكرر يمنع الشرب",
    ],
  },
  emergency_hernia: {
    title: "علامات تحذيرية — توجّه للطوارئ",
    message:
      "احتمال اختناق الفتق وارد. التأخير قد يؤدي لمضاعفات خطيرة. توجّه فورًا لأقرب قسم طوارئ.",
    emergency: true,
    redFlags: [
      "ألم شديد مفاجئ في موضع الفتق",
      "كتلة صلبة لا تختفي وتغيّر لونها",
      "غثيان وقيء مع انتفاخ وعدم خروج غازات",
    ],
  },
  emergency_general: {
    title: "علامات تحذيرية — توجّه للطوارئ",
    message: "ما تصفه يستدعي تقييمًا فوريًا. لا تنتظر موعد العيادة — توجّه لأقرب قسم طوارئ الآن.",
    emergency: true,
    redFlags: [
      "نزيف غزير أو قيء/براز دموي",
      "ألم شديد ومفاجئ",
      "صعوبة تنفس أو بلع مفاجئة",
      "دوخة شديدة أو فقدان وعي",
    ],
  },
};

function SymptomTriage() {
  const [history, setHistory] = useState<string[]>(["start"]);
  const [resultId, setResultId] = useState<string | null>(null);

  const currentId = history[history.length - 1];
  const current = questions[currentId];
  const result = resultId ? results[resultId] : null;

  const select = (opt: Question["options"][number]) => {
    if (opt.result) setResultId(opt.result);
    else if (opt.next) setHistory([...history, opt.next]);
  };

  const back = () => {
    if (resultId) {
      setResultId(null);
      return;
    }
    if (history.length > 1) setHistory(history.slice(0, -1));
  };

  const reset = () => {
    setHistory(["start"]);
    setResultId(null);
  };

  const goToCondition = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="mx-auto max-w-4xl px-6 pt-12">
      <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm">
        <div className="p-6 md:p-8 border-b border-border bg-secondary/30">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[var(--gradient-accent)] flex items-center justify-center text-accent-foreground">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                أسئلة سريعة
              </div>
              <h2 className="text-2xl md:text-3xl mt-1">اختر أعراضك ودعنا نوجّهك</h2>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            أجب عن سؤال أو سؤالين لنحدد القسم المناسب لك ونُظهر علامات التحذير المهمة. هذا ليس
            تشخيصًا طبيًا.
          </p>
        </div>

        <div className="p-6 md:p-8">
          {!result && current && (
            <div>
              <div className="text-xs text-muted-foreground mb-3">السؤال {history.length} من 2</div>
              <h3 className="text-xl md:text-2xl mb-5">{current.text}</h3>
              <div className="space-y-2">
                {current.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => select(opt)}
                    className="w-full text-right flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3.5 text-sm hover:border-accent hover:bg-secondary/40 transition"
                  >
                    <span className="leading-relaxed">{opt.label}</span>
                    <ArrowLeft className="h-4 w-4 text-muted-foreground shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {result && (
            <div
              className={
                result.emergency
                  ? "rounded-2xl border-2 border-destructive/40 bg-destructive/5 p-5 md:p-6"
                  : "rounded-2xl border border-accent/30 bg-accent/5 p-5 md:p-6"
              }
            >
              <div className="flex items-center gap-3 mb-3">
                {result.emergency ? (
                  <Siren className="h-6 w-6 text-destructive" />
                ) : (
                  <CalendarCheck className="h-6 w-6 text-accent" />
                )}
                <h3 className="text-xl md:text-2xl">{result.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{result.message}</p>

              {result.redFlags && (
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pr-5 marker:text-destructive">
                  {result.redFlags.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                {result.emergency ? (
                  <a
                    href="tel:997"
                    className="inline-flex items-center gap-2 rounded-full bg-destructive text-destructive-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
                  >
                    <Siren className="h-4 w-4" /> اتصل بالطوارئ 997
                  </a>
                ) : (
                  result.conditionId && (
                    <button
                      onClick={() => goToCondition(result.conditionId!)}
                      className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
                    >
                      اعرض الإرشادات الكاملة <ArrowLeft className="h-4 w-4" />
                    </button>
                  )
                )}
                <a
                  href="tel:+966138011910"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-accent transition"
                >
                  <Phone className="h-4 w-4" /> احجز موعد بالعيادة
                </a>
              </div>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between text-sm">
            <button
              onClick={back}
              disabled={!resultId && history.length === 1}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ArrowRight className="h-4 w-4" /> رجوع
            </button>
            <button
              onClick={reset}
              className="text-muted-foreground hover:text-foreground transition"
            >
              ابدأ من جديد
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

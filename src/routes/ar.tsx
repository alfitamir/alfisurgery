import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Stethoscope, Activity, GraduationCap, ShieldCheck, Users, Microscope,
  HeartPulse, ClipboardList, Mail, MapPin, Award, ArrowLeft, Phone, Download, Globe, Youtube, Facebook, MessageCircle, Linkedin, ExternalLink, BookOpen, Building2, CalendarCheck, Presentation,
} from "lucide-react";
import portrait from "@/assets/dr-elalfy.jpg";
import analConditionsPpt from "@/assets/anal-conditions-ppt.asset.json";

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

const services = [
  "رعاية جراحية آمنة قائمة على الأدلة العلمية",
  "إجراءات متقدمة في المناظير والشرج والغدة الدرقية والسمنة",
  "استشارات جراحية متخصصة ورأي طبي ثانٍ",
  "تقييم مرضى السمنة والتخطيط للجراحة",
  "التعليم الجراحي ومحاضرات التعليم الطبي المستمر والإرشاد",
  "قيادة غرف العمليات وتحسين الأداء",
  "برامج تثقيف المرضى لتحسين النتائج",
];

function ArabicIndex() {
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
            <div className="h-8 w-8 rounded-md bg-[var(--gradient-accent)] flex items-center justify-center">
              <Stethoscope className="h-4 w-4 text-accent-foreground" />
            </div>
            <span className="text-lg font-bold">د. تامر الألفي</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">نبذة</a>
            <a href="#expertise" className="hover:text-foreground transition">التخصصات</a>
            <a href="#services" className="hover:text-foreground transition">الخدمات</a>
            <a href="#contact" className="hover:text-foreground transition">تواصل</a>
          </nav>
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, oklch(0.75 0.12 200) 0%, transparent 40%), radial-gradient(circle at 20% 60%, oklch(0.55 0.15 220) 0%, transparent 50%)" }} />
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36 text-[oklch(0.985_0.005_240)]">
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
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#expertise" className="rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">استكشف التخصصات</a>
            <a href="#contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">طلب استشارة</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-[var(--gradient-accent)] opacity-30 blur-xl" />
              <img src={portrait} alt="د. تامر رشدي الألفي" className="relative w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)] aspect-[4/5]" />
            </div>
            <div className="mt-6 text-xs tracking-widest text-accent font-bold">نبذة</div>
            <h2 className="mt-3 text-4xl">منظور جرّاح.</h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-lg text-muted-foreground leading-loose md:pt-2">
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
      <section id="expertise" className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12">
            <div className="text-xs tracking-widest text-accent font-bold">التخصصات السريرية</div>
            <h2 className="mt-3 text-4xl md:text-5xl max-w-xl">عمق في تخصصات الجراحة العامة.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]">
            {expertise.map((e) => (
              <div key={e.title} className="bg-card p-8 hover:bg-card/70 transition">
                <div className="h-11 w-11 rounded-lg bg-[var(--gradient-accent)] flex items-center justify-center text-accent-foreground">
                  <e.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-loose">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
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
      <section className="bg-primary text-primary-foreground">
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
      <section className="bg-secondary/40 border-y border-border">
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
              className="group block rounded-2xl bg-card border border-border overflow-hidden hover:border-accent transition shadow-[var(--shadow-soft)]"
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
      <section className="mx-auto max-w-6xl px-6 py-24">
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
              className="group flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-accent transition shadow-[var(--shadow-soft)]"
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

      {/* الأبحاث المنشورة */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
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
              className="group flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-accent transition shadow-[var(--shadow-soft)]"
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

      {/* العروض التقديمية */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
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
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-accent transition shadow-[var(--shadow-soft)]"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition">
                <Presentation className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs tracking-widest text-muted-foreground mb-1">{item.tag}</div>
                <h3 className="text-lg leading-snug group-hover:text-accent transition flex items-start gap-2">
                  <span>{item.title}</span>
                  <Download className="h-4 w-4 mt-1 shrink-0 opacity-60" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-loose">{item.desc}</p>
                <div className="mt-3 text-xs text-accent font-bold">{item.file}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
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
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} د. تامر رشدي الألفي</div>
          <div>جامعة الزقازيق · مستشفى محمد الدوسري، المملكة العربية السعودية</div>
        </div>
      </footer>
    </div>
  );
}

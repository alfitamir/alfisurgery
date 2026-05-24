import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Stethoscope, ArrowLeft, MessageCircle, ChevronDown, ShieldCheck, Clock, HeartPulse, Languages, AlertTriangle, Globe, ClipboardList, Activity, Apple, Pill, Bandage, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/ar/patients")({
  component: ArabicPatientsPage,
  head: () => ({
    meta: [
      { title: "للمرضى — د. تامر الألفي" },
      { name: "description", content: "رسالة ترحيب وأسئلة شائعة حول قناة واتساب للمرضى التي يقدمها د. تامر الألفي للتثقيف الجراحي والإرشاد قبل وبعد العمليات." },
      { property: "og:title", content: "للمرضى — د. تامر الألفي" },
      { property: "og:description", content: "ماذا تتوقع من قناة واتساب للمرضى وكيف تستفيد منها." },
      { property: "og:url", content: "/ar/patients" },
      { httpEquiv: "content-language", content: "ar" },
    ],
    links: [
      { rel: "canonical", href: "/ar/patients" },
      { rel: "alternate", hrefLang: "en", href: "/patients" } as any,
      { rel: "alternate", hrefLang: "ar", href: "/ar/patients" } as any,
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" } as any,
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&family=Amiri:wght@400;700&display=swap" },
    ],
  }),
});

const expectations = [
  { icon: HeartPulse, title: "إرشاد جراحي واضح", text: "منشورات مبسطة عن الحالات الجراحية الشائعة وخيارات العلاج ومراحل التعافي." },
  { icon: ShieldCheck, title: "معلومات موثوقة", text: "محتوى مبني على الأدلة العلمية يكتبه ويراجعه استشاري جراحة." },
  { icon: Clock, title: "نصائح قبل وبعد العملية", text: "ما يجب فعله قبل وبعد الجراحة: التغذية، العناية بالجرح، النشاط، والعلامات التحذيرية." },
  { icon: Languages, title: "بالعربية والإنجليزية", text: "المحتوى متاح باللغتين لتسهيل المتابعة على المرضى وذويهم." },
];

const faqs = [
  {
    q: "ما هي قناة واتساب وما الهدف منها؟",
    a: "هي قناة تثقيفية أحادية الاتجاه أشارك فيها رسائل قصيرة وعملية للمرضى وذويهم: كيفية الاستعداد للجراحة، ما يبدو عليه التعافي، نصائح نمط الحياة بعد جراحات السمنة والجراحة العامة، وإجابات للأسئلة التي تتكرر في العيادة.",
  },
  {
    q: "هل ستكون رسائلي خاصة عند الانضمام؟",
    a: "نعم. قنوات واتساب للبث فقط — لا يمكن للمتابعين الآخرين رؤية هويتك أو رقم هاتفك أو ملفك الشخصي. أنت وحدك من يرى المنشورات التي أنشرها.",
  },
  {
    q: "هل يمكنني الحصول على استشارة طبية شخصية عبر القناة؟",
    a: "لا. القناة مخصصة للتثقيف العام وليست بديلًا عن الاستشارة الشخصية. لحالتك الخاصة يرجى حجز موعد بالعيادة أو الاتصال بنا مباشرة على 9101 801 13 966+.",
  },
  {
    q: "كم عدد الرسائل التي سأستقبلها؟",
    a: "بضع منشورات قصيرة أسبوعيًا — عادةً نصيحة أو فيديو قصير أو شرح مبسط لموضوع جراحي شائع. أحرص على أن يبقى المحتوى مفيدًا دون إزعاج.",
  },
  {
    q: "ما هي اللغات المستخدمة؟",
    a: "العربية والإنجليزية معًا. في المواضيع المتعلقة بالسلامة (مثل العلامات التحذيرية بعد الجراحة) أنشر النقاط الأساسية باللغتين.",
  },
  {
    q: "ما هي المواضيع التي تتناولها القناة؟",
    a: "جراحة المناظير، جراحة السمنة، الفتق، المرارة، الغدة الدرقية، أمراض القولون والشرج، الرعاية بعد العملية، التغذية بعد جراحات السمنة، وسلامة المرضى.",
  },
  {
    q: "هل القناة مجانية؟",
    a: "نعم، مجانية بالكامل. لا توجد منتجات للبيع ولا محتوى مدفوع.",
  },
  {
    q: "كيف يمكنني مغادرة القناة؟",
    a: "افتح القناة داخل تطبيق واتساب، اضغط على اسم القناة في الأعلى، ثم اختر «إلغاء المتابعة». يمكنك العودة في أي وقت باستخدام نفس الرابط.",
  },
];

function ArabicPatientsPage() {
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
          <Link to="/ar" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[var(--gradient-accent)] flex items-center justify-center">
              <Stethoscope className="h-4 w-4 text-accent-foreground" />
            </div>
            <span className="text-lg font-bold">د. تامر الألفي</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <Link to="/ar" hash="about" className="hover:text-foreground transition">نبذة</Link>
            <Link to="/ar" hash="expertise" className="hover:text-foreground transition">التخصصات</Link>
            <Link to="/ar/patients" className="text-foreground font-medium">للمرضى</Link>
            <Link to="/ar" hash="contact" className="hover:text-foreground transition">تواصل</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/patients" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition">
              <Globe className="h-4 w-4" /> EN
            </Link>
            <a href="https://whatsapp.com/channel/0029VbDHjNiKAwEkWMqT5C2P" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition">
              انضم للقناة <ArrowLeft className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.75 0.12 200) 0%, transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.55 0.15 220) 0%, transparent 50%)" }} />
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-[oklch(0.985_0.005_240)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide backdrop-blur">
            <MessageCircle className="h-3.5 w-3.5" /> قناة واتساب للمرضى
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-medium leading-[1.15]">
            معلومات <span className="text-[oklch(0.85_0.08_200)]">تستطيع الاعتماد عليها</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            مساحة مرحبة ومبنية على الأدلة العلمية للمرضى وذويهم — من الاستعداد للجراحة وحتى التعافي والصحة على المدى الطويل. رسائل قصيرة، إجابات صادقة، بلا إزعاج.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://whatsapp.com/channel/0029VbDHjNiKAwEkWMqT5C2P" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold hover:bg-white/90 transition inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4" /> تابعنا على واتساب
            </a>
            <Link to="/ar" hash="contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
              احجز استشارة
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">رسالة من د. الألفي</div>
            <h2 className="mt-3 text-4xl">أهلًا بك.</h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              معظم المرضى الذين أقابلهم يطرحون نفس الأسئلة: <em>ماذا يحدث لي؟ ما هي خياراتي؟ كيف سيكون التعافي فعليًا؟</em> الإنترنت نادرًا ما يقدم إجابات واضحة — ووقت العيادة محدود.
            </p>
            <p>
              هذه القناة موجودة لحل ذلك. أشارك فيها نفس الشروحات المبسطة التي أقدمها لمرضاي في العيادة، حتى تأتي إلى موعدك وأنت مطّلع ومستعد وواثق.
            </p>
            <p>
              هي ليست بديلًا عن الرعاية الشخصية — لكنها ستجعل رعايتك أفضل.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]">
          {expectations.map((e) => (
            <div key={e.title} className="bg-card p-7">
              <div className="h-10 w-10 rounded-lg bg-[var(--gradient-accent)] flex items-center justify-center text-accent-foreground">
                <e.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold text-center">الأسئلة الشائعة</div>
          <h2 className="mt-3 text-4xl md:text-5xl text-center">قبل أن تنضم.</h2>

          <div className="mt-14 space-y-3">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-accent/30 bg-card p-6 flex items-start gap-4">
            <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">حالة طوارئ طبية؟</span> لا تستخدم قناة واتساب للأعراض العاجلة. توجّه فورًا إلى أقرب قسم طوارئ أو اتصل برقم الطوارئ في بلدك.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-4xl md:text-5xl">انضم إلى القناة.</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          ضغطة واحدة للمتابعة. بلا إزعاج وبلا التزام. يمكنك المغادرة في أي وقت.
        </p>
        <a href="https://whatsapp.com/channel/0029VbDHjNiKAwEkWMqT5C2P" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition">
          <MessageCircle className="h-4 w-4" /> تابعنا على واتساب <ArrowLeft className="h-3.5 w-3.5" />
        </a>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} د. تامر رشدي الألفي</div>
          <Link to="/ar" className="hover:text-foreground transition">← العودة للرئيسية</Link>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-right hover:bg-secondary/40 transition">
        <span className="text-lg">{q}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{a}</div>
      )}
    </div>
  );
}

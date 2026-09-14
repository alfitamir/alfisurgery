import { createFileRoute } from "@tanstack/react-router";
import { PatientEducationSite } from "@/components/PatientEducationSite";

export const Route = createFileRoute("/ar/patients")({
  component: ArabicPatientsPage,
  head: () => ({
    meta: [
      { title: "افهم عمليتك | دليل المريض الجراحي" },
      { name: "description", content: "دليل مصور ثنائي اللغة للمرضى: اختر عمليتك، استعد بأمان، تعافَ بثقة، وتعرّف على علامات التحذير." },
      { property: "og:title", content: "افهم عمليتك | دليل المريض الجراحي" },
      { property: "og:description", content: "رحلة مصورة وهادئة من الاستعداد للعملية حتى التعافي مع أدلة خاصة بكل عملية." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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

const preOp = [
  { icon: CheckCircle2, title: "تأكيد الموعد", text: "تحقّق من التاريخ والوقت واسم المستشفى وفريق الجراح. احضر قبل الموعد بساعة إلى ساعتين حسب التعليمات." },
  { icon: Pill, title: "مراجعة الأدوية", text: "أخبرنا عن مميعات الدم (الأسبرين، الوارفارين، كلوبيدوغريل، مضادات الالتهاب) وأدوية السكري والمكملات. بعضها يجب إيقافه — لا توقف أي دواء من تلقاء نفسك." },
  { icon: Apple, title: "الصيام", text: "عادةً يُمنع الطعام لمدة 6–8 ساعات والسوائل الصافية لمدة ساعتين قبل العملية، ما لم يُذكر غير ذلك." },
  { icon: Bandage, title: "النظافة والبشرة", text: "استحمّ ليلة العملية وصباحها. لا تحلق منطقة العملية بنفسك. أزل طلاء الأظافر والمجوهرات والعدسات اللاصقة." },
  { icon: ClipboardList, title: "ما تحضره معك", text: "الهوية، بطاقة التأمين، قائمة الأدوية الحالية، النظارة، وملابس فضفاضة مريحة للعودة." },
  { icon: HeartPulse, title: "تحسين حالتك الصحية", text: "أوقف التدخين في أقرب وقت — حتى أسابيع قليلة تساعد على التئام الجرح. حافظ على شرب الماء والمشي يوميًا قدر الإمكان." },
];

const postOp = [
  { icon: Activity, title: "تحرّك مبكرًا وبانتظام", text: "المشي القصير كل 1–2 ساعة أثناء اليقظة يقلل خطر الجلطات والتهابات الصدر. تجنّب رفع الأوزان الثقيلة (أكثر من 5 كجم) لمدة 4–6 أسابيع." },
  { icon: Bandage, title: "العناية بالجرح", text: "حافظ على الضمادات نظيفة وجافة. يمكن الاستحمام عادةً بعد 48 ساعة ما لم يُذكر غير ذلك. جفّف بالتربيت لا بالفرك أو النقع." },
  { icon: Pill, title: "الألم والدواء", text: "تناول مسكنات الألم بانتظام في أول 48–72 ساعة بدلًا من الانتظار حتى يشتدّ الألم. أكمل أي مضاد حيوي حتى نهايته." },
  { icon: Apple, title: "الأكل والشرب", text: "ابدأ برشفات ماء وطعام خفيف. بعد جراحات السمنة اتبع خطة التغذية المتدرجة بدقة. اشرب كمية كافية ليبقى لون البول فاتحًا." },
  { icon: Clock, title: "الراحة والنوم", text: "نم بوضعية شبه جالس إذا أجريت جراحة بطن أو صدر. معظم المرضى يشعرون بتحسّن ملحوظ خلال 3–5 أيام." },
  { icon: CheckCircle2, title: "المتابعة", text: "احضر موعد المتابعة حتى لو شعرت بتحسّن — لنطمئن على الالتئام ونزيل الغرز أو الدبابيس إذا لزم." },
];

const redFlags = [
  "حرارة أعلى من 38.5 درجة مئوية",
  "ألم شديد أو متزايد بشكل مفاجئ",
  "نزيف غزير أو انفتاح الجرح",
  "احمرار أو تورّم أو خروج صديد من الجرح",
  "ضيق في التنفس أو ألم بالصدر",
  "ألم أو تورّم أو احمرار في بطّة الساق",
  "قيء مستمر أو عدم القدرة على شرب السوائل",
  "عدم خروج غازات أو براز لأكثر من 3 أيام بعد جراحة البطن",
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
  return <PatientEducationSite lang="ar" />;
  /* return (
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

      {/* Pre/Post-Op Education */}
      <section id="education" className="bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">تثقيف المرضى</div>
            <h2 className="mt-3 text-4xl md:text-5xl">قبل وبعد عمليتك.</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              قائمة عملية بما يجب فعله في الأيام السابقة للعملية، وكيفية التعافي بأمان بعد العودة إلى المنزل. هذه إرشادات عامة؛ فريقك الجراحي سيعطيك تعليمات خاصة بحالتك.
            </p>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            {/* Pre-op */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-[var(--gradient-accent)] flex items-center justify-center text-accent-foreground">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <h3 className="text-2xl">قبل العملية</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">في الأيام والساعات السابقة للجراحة.</p>

              <ul className="mt-6 space-y-4">
                {preOp.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <item.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed mt-1">{item.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Post-op */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-[var(--gradient-accent)] flex items-center justify-center text-accent-foreground">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="text-2xl">بعد العملية</h3>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">التعافي في المنزل — الأيام والأسابيع الأولى.</p>

              <ul className="mt-6 space-y-4">
                {postOp.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <item.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground leading-relaxed mt-1">{item.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Red flags */}
          <div className="mt-10 rounded-2xl border border-destructive/30 bg-card p-7">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <h3 className="text-xl">متى تتصل بنا فورًا</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">اتصل بالعيادة أو توجّه إلى أقرب طوارئ إذا واجهت:</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {redFlags.map((r) => (
                <li key={r} className="flex gap-2"><span className="text-destructive">•</span>{r}</li>
              ))}
            </ul>
            <a href="tel:+966138011910" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition">
              اتصل بالعيادة: 1910 801 13 966+ <ArrowLeft className="h-3.5 w-3.5" />
            </a>
          </div>
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
  ); */
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

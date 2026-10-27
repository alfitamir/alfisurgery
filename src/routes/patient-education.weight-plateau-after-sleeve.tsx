import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  AlertTriangle,
  HeartPulse,
  Utensils,
  Footprints,
  Droplets,
  ClipboardCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/sleeve-plateau-guide.jpg";
import habits from "@/assets/sleeve-plateau-habits.jpg";

export const Route = createFileRoute("/patient-education/weight-plateau-after-sleeve")({
  component: WeightPlateauArticle,
  head: () => ({
    meta: [
      { title: "هام بعد عملية التكميم: عند ثبات الوزن ماذا أفعل؟ | د. تامر الألفي" },
      {
        name: "description",
        content:
          "دليل للمرضى عن ثبات الوزن بعد تكميم المعدة: متى يكون طبيعيًا، وكيف تراجع التغذية والنشاط، ومتى تتواصل مع فريق جراحة السمنة.",
      },
      { property: "og:title", content: "هام بعد عملية التكميم: عند ثبات الوزن ماذا أفعل؟" },
      {
        property: "og:description",
        content:
          "خطوات آمنة للتعامل مع ثبات الوزن بعد التكميم دون حميات سوائل قاسية أو إيقاف المكملات.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const actions = [
  {
    icon: ClipboardCheck,
    title: "راجع مسار الوزن لا رقم يوم واحد",
    text: "سجّل وزنك في ظروف متشابهة مرة أسبوعيًا، وراجع الاتجاه خلال عدة أسابيع. قد يتغير الوزن مؤقتًا بسبب السوائل أو الإمساك أو الدورة الشهرية.",
  },
  {
    icon: Utensils,
    title: "ابدأ بالبروتين وراجع الوجبات",
    text: "احرص على مصادر بروتين مناسبة في كل وجبة، وراجع حجم الحصص والوجبات الخفيفة والمشروبات عالية السعرات. تناول الطعام ببطء وامضغه جيدًا، واتبع هدف البروتين الذي حدده اختصاصي التغذية لك.",
  },
  {
    icon: Droplets,
    title: "الماء والمكملات جزء من الخطة",
    text: "اشرب الماء على فترات بين الوجبات وفق تعليمات فريقك، وواصل الفيتامينات والمعادن الموصوفة بعد الجراحة. لا توقفها لمحاولة إنقاص الوزن.",
  },
  {
    icon: Footprints,
    title: "تحرّك بانتظام",
    text: "استمر بالمشي، وأضف تمارين مقاومة تدريجيًا إذا سمح فريقك الطبي. راجع النوم والتوتر، فهما يؤثران في الالتزام والنشاط.",
  },
];

function WeightPlateauArticle() {
  return (
    <div
      dir="rtl"
      lang="ar"
      className="patient-site min-h-screen bg-patient-canvas text-patient-ink"
    >
      <header className="border-b border-patient-mist bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/ar/patients" className="font-semibold text-patient-deep hover:underline">
            د. تامر الألفي · دليل المرضى
          </Link>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-patient-mist text-patient-deep"
          >
            <Link to="/ar/patients">
              كل الأدلة <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-6xl px-5 pt-10 md:pt-16">
          <p className="text-sm font-bold text-patient-blue">تثقيف مرضى جراحة السمنة</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-relaxed text-patient-deep md:text-5xl">
            هام بعد عملية التكميم: عند ثبات الوزن ماذا أفعل؟
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-loose text-patient-ink/80">
            ثبات الوزن لفترة قصيرة شائع أثناء رحلة التعافي. قبل تغيير طعامك جذريًا، افهم ما يحدث
            وراجع عاداتك مع فريق جراحة السمنة.
          </p>
          <img
            src={hero}
            alt="مريضة تناقش التغذية والتقدم بعد التكميم مع اختصاصية التغذية"
            width={1408}
            height={912}
            className="mt-9 aspect-[16/9] w-full rounded-md object-cover"
          />
        </div>
        <div className="mx-auto max-w-3xl space-y-12 px-5 py-12 text-base leading-loose md:py-16">
          <section>
            <h2 className="text-2xl font-bold text-patient-deep">
              هل ثبات الوزن يعني فشل العملية؟
            </h2>
            <p className="mt-4">
              لا. يتباطأ نزول الوزن أحيانًا بعد نزول سريع، وقد تثبت القراءة لأيام أو أسابيع. ركّز
              على الاتجاه العام، لا على وزن يوم واحد. إذا استمر الثبات أو بدأ الوزن بالارتفاع، حدّد
              موعدًا مع الجرّاح واختصاصي التغذية لمراجعة نمط الأكل، النشاط، الأدوية، والفحوصات
              اللازمة.
            </p>
          </section>
          <aside
            className="border-r-4 border-patient-apricot bg-card p-5 md:p-7"
            aria-label="تنبيه مهم بشأن حمية السوائل"
          >
            <div className="flex items-center gap-3 text-patient-deep">
              <AlertTriangle className="size-6 shrink-0 text-destructive" />
              <h2 className="text-xl font-bold">تنبيه مهم بشأن «كسر الثبات»</h2>
            </div>
            <p className="mt-3">
              قد تقترح بعض البرامج العودة إلى السوائل فقط أو الطعام المهروس لأيام متتالية لتصغير
              المعدة. <strong>لا تبدأ برنامجًا كهذا بنفسك</strong> بعد التكميم: لا يوجد دليل على أنه
              «يعيد ضبط» حجم المعدة، وقد يقلل البروتين والسوائل والعناصر الغذائية. النص الغذائي
              المرفق يتضمن مثل هذه المراحل؛ لذلك لم نعرضها كوصفة عامة. اطلب خطة شخصية من فريق جراحة
              السمنة، خصوصًا إذا لديك سكري أو تتناول أدوية.
            </p>
          </aside>
          <section>
            <h2 className="text-2xl font-bold text-patient-deep">خطوات عملية وآمنة</h2>
            <div className="mt-6 space-y-7">
              {actions.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 border-b border-patient-mist pb-6 last:border-0"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-patient-mist text-patient-deep">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-patient-deep">{title}</h3>
                    <p className="mt-1 text-patient-ink/80">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <figure>
            <img
              src={habits}
              loading="lazy"
              alt="رسوم توضيحية لوجبة متوازنة والمشي وشرب الماء والنوم"
              width={1200}
              height={864}
              className="w-full rounded-md"
            />
            <figcaption className="mt-3 text-center text-sm text-patient-ink/70">
              عادات صغيرة ومستدامة أهم من حلول سريعة.
            </figcaption>
          </figure>
          <section>
            <h2 className="text-2xl font-bold text-patient-deep">
              ماذا عن الطعام بعد هذه المرحلة؟
            </h2>
            <p className="mt-4">
              إذا انتقلت بالفعل إلى الطعام المعتاد بعد الجراحة، فاحرص على وجبات صغيرة متوازنة تحتوي
              على البروتين والخضراوات وأطعمة غنية بالألياف تتحملها. قلل المشروبات المحلاة والسكريات
              والأطعمة قليلة القيمة الغذائية. لا تفترض أن كل الفاكهة أو النشويات ممنوعة؛ الكمية
              والنوع يعتمدان على احتياجاتك وتحملك وخطتك العلاجية.
            </p>
            <p className="mt-4">
              تعليمات فصل الشرب عن الأكل، وحجم الوجبات، ومواعيدها تختلف بحسب حالتك ومرحلة التعافي؛
              التزم بما أوصى به فريقك بدل فرض جدول ثابت على نفسك.
            </p>
          </section>
          <section className="border-r-4 border-destructive bg-card p-5 md:p-7">
            <div className="flex items-center gap-3 text-patient-deep">
              <HeartPulse className="size-6 text-destructive" />
              <h2 className="text-xl font-bold">متى تحتاج مساعدة؟</h2>
            </div>
            <p className="mt-3">
              تواصل مع فريقك إذا استمر ثبات الوزن لأسابيع رغم الالتزام، أو بدأت تستعيد الوزن، أو
              تعاني من قيء متكرر أو صعوبة في تناول البروتين والسوائل.{" "}
              <strong>اطلب رعاية عاجلة</strong> عند ألم بطن شديد، قيء مستمر، دوخة شديدة أو علامات
              جفاف، أو عدم القدرة على شرب السوائل.
            </p>
          </section>
          <p className="text-sm text-patient-ink/70">
            هذا المقال للتثقيف ولا يحل محل مراجعة الجرّاح واختصاصي التغذية المتابعين لحالتك. مستوحى
            من النقاط العملية في البرنامج الغذائي المرسل، مع تجنب اعتبار العودة للسوائل علاجًا
            مثبتًا لثبات الوزن.
          </p>
          <Button asChild className="bg-patient-deep text-primary-foreground hover:bg-patient-blue">
            <Link to="/ar/patients">
              العودة إلى دليل المرضى <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}

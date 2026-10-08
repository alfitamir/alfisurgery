import { useState } from "react";
import { Play, Youtube } from "lucide-react";

const videos = [
  { id: "wp8Zn9DBP6M", ar: "ما يجب أن تعلمه قبل عملية استئصال المرارة بالمنظار", en: "Before laparoscopic gallbladder surgery — full guide" },
  { id: "gQc0F0gxhVI", ar: "جراحات الجهاز الهضمي المتقدمة بالمنظار", en: "Advanced laparoscopic GI surgery" },
  { id: "FZ8-P39OKxg", ar: "جراحة الفتق بالمنظار", en: "Laparoscopic hernia repair" },
  { id: "QDZ2oavOXJc", ar: "ما معنى تكميم المعدة وكيف يعمل", en: "What is a sleeve gastrectomy and how it works" },
  { id: "IfZJrgjbhj8", ar: "المتابعة بعد عمليات السمنة", en: "Follow-up after obesity surgery" },
  { id: "Tq9lyKYetW8", ar: "الدباسة الجراحية لاستئصال البواسير", en: "Stapled hemorrhoidopexy" },
  { id: "nuxjsTHlN-I", ar: "حصوات المرارة بعد التكميم", en: "Gallbladder stones after sleeve" },
  { id: "IB42ILf1Xyw", ar: "التحاليل المطلوبة للمتابعة بعد التكميم", en: "Lab tests during follow-up after sleeve" },
  { id: "3ZbkylhVEPA", ar: "زيارات ما بعد العملية", en: "Post-operative visits" },
  { id: "IeejzZVvWzc", ar: "رمضان بعد التكميم", en: "Ramadan after sleeve" },
  { id: "KzQdyjoPtK4", ar: "الصقات والجروح وكيفية العناية بها", en: "Dressings and wound care" },
  { id: "mpIIHKOxhZk", ar: "الأدوية المستخدمة بعد التكميم والتحويل", en: "Medications after sleeve and bypass" },
  { id: "z9JsLLmgfvQ", ar: "التدخين والتكميم", en: "Smoking and sleeve surgery" },
  { id: "UsSfMhCGw4E", ar: "رجوع الوزن بعد التكميم", en: "Weight regain after sleeve" },
  { id: "Q_hXklAAaGg", ar: "مشاكل بعد فقدان الوزن", en: "Problems after weight loss" },
  { id: "C3XLgQ0EEB8", ar: "هل ستشعر بالجوع بعد عملية التكميم؟", en: "Will you still feel hungry after sleeve?" },
  { id: "2VVy3q9W5Qo", ar: "تفاصيل الشهر الأول بعد التكميم", en: "The first month after sleeve" },
  { id: "PuV2jvnYGsY", ar: "اللقاء الشهري عن مشاكل عمليات السمنة", en: "Monthly session: obesity surgery problems" },
  { id: "QXqdomP0mr4", ar: "المشروبات الغازية وعمليات السمنة", en: "Soft drinks and obesity surgery" },
  { id: "u4kMj6BuN6A", ar: "عمليات السمنة والحمل — أين الحقيقة؟", en: "Obesity surgery and pregnancy" },
  { id: "_KZvqIHxTKE", ar: "كل ما تريد معرفته عن الأسبوع الأول بعد التكميم أو التحويل", en: "The first week after sleeve or bypass" },
  { id: "WuKCpYzYufw", ar: "أول زيارة لعيادة السمنة قبل العملية", en: "First visit to the obesity clinic" },
  { id: "1oqpTimqB6I", ar: "آخر يومين قبل عملية السمنة", en: "The last two days before surgery" },
  { id: "PlmXNjLqShY", ar: "النظام الغذائي قبل عملية السمنة — متى وكيف؟", en: "The pre-operative diet" },
  { id: "Tm-hmpexEsk", ar: "أيهما تختار: تكميم أم تحويل المسار؟", en: "Sleeve or gastric bypass?" },
  { id: "8425Jq_zuW0", ar: "ارتجاع المريء والتكميم", en: "Acid reflux and sleeve surgery" },
  { id: "hTQ_P05D2Ws", ar: "الأمراض النفسية والإدمان — هل يمنعان التكميم؟", en: "Mental health, addiction and sleeve surgery" },
];

const INITIAL_COUNT = 9;

function Video({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative aspect-video bg-muted">
        {play ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setPlay(true)} className="group absolute inset-0" aria-label={title}>
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition group-hover:scale-110">
                <Play className="h-6 w-6 fill-current" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="p-4 text-sm font-medium text-card-foreground">{title}</figcaption>
    </figure>
  );
}

export function VideosSection({ ar = false }: { ar?: boolean }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? videos : videos.slice(0, INITIAL_COUNT);
  return (
    <section id="videos-list" dir={ar ? "rtl" : "ltr"} className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">YouTube</p>
          <h2 className="mt-1 text-3xl font-bold text-foreground">{ar ? "فيديوهات تثقيفية" : "Educational videos"}</h2>
        </div>
        <a href="https://www.youtube.com/@alfy_surgery" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted">
          <Youtube className="h-4 w-4" /> {ar ? "كل الفيديوهات" : "All videos"}
        </a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((v) => <Video key={v.id} id={v.id} title={ar ? v.ar : v.en} />)}
      </div>
      {videos.length > INITIAL_COUNT && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            aria-expanded={showAll}
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2 text-sm font-medium text-foreground hover:bg-muted"
          >
            {showAll
              ? (ar ? "عرض أقل" : "Show less")
              : (ar ? `عرض المزيد (${videos.length - INITIAL_COUNT} فيديو)` : `Show more (${videos.length - INITIAL_COUNT} videos)`)}
          </button>
        </div>
      )}
    </section>
  );
}

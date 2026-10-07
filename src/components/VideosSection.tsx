import { useState } from "react";
import { Play, Youtube } from "lucide-react";

const videos = [
  { id: "wp8Zn9DBP6M", ar: "ما يجب أن تعلمه قبل عملية استئصال المرارة بالمنظار", en: "Before laparoscopic gallbladder surgery — full guide" },
  { id: "gQc0F0gxhVI", ar: "جراحات الجهاز الهضمي المتقدمة بالمنظار", en: "Advanced laparoscopic GI surgery" },
  { id: "FZ8-P39OKxg", ar: "جراحة الفتق بالمنظار", en: "Laparoscopic hernia repair" },
  { id: "QDZ2oavOXJc", ar: "ما معنى تكميم المعدة وكيف يعمل", en: "What is a sleeve gastrectomy and how it works" },
  { id: "IfZJrgjbhj8", ar: "المتابعة بعد عمليات السمنة", en: "Follow-up after obesity surgery" },
  { id: "Tq9lyKYetW8", ar: "الدباسة الجراحية لاستئصال البواسير", en: "Stapled hemorrhoidopexy" },
];

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
  return (
    <section id="videos" dir={ar ? "rtl" : "ltr"} className="mx-auto max-w-6xl px-4 py-16">
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
        {videos.map((v) => <Video key={v.id} id={v.id} title={ar ? v.ar : v.en} />)}
      </div>
    </section>
  );
}

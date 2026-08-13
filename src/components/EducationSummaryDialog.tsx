import { Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { educationSummaries } from "@/data/patient-education-summaries";
import type { PatientEducationEntry } from "@/data/patient-education";

interface Props {
  entry: PatientEducationEntry;
  image: string;
  lang?: "en" | "ar";
}

export function EducationSummaryDialog({ entry, image, lang = "en" }: Props) {
  const points = educationSummaries[entry.id];
  if (!points?.length) return null;
  const ar = lang === "ar";
  const label = ar ? "ملخص سريع" : "Quick summary";
  const title = ar ? entry.titleAr : entry.title;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-accent text-accent px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          aria-label={`${label} — ${title}`}
        >
          <Sparkles className="h-4 w-4" />
          {label}
        </button>
      </DialogTrigger>
      <DialogContent
        className="max-w-2xl w-[95vw] max-h-[88vh] overflow-y-auto p-0 gap-0"
        dir={ar ? "rtl" : "ltr"}
      >
        <div className="relative">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-36 w-full object-cover md:h-44"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <DialogHeader className="px-6 -mt-10 relative text-start">
          <DialogTitle className="font-serif text-2xl leading-snug">{title}</DialogTitle>
          <p className="mt-1 text-xs text-muted-foreground">
            {ar ? entry.categoryAr : entry.category}
          </p>
        </DialogHeader>
        <div className="px-6 pb-6 pt-5 space-y-3">
          {points.map((pt, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card px-4 py-3"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wide text-accent">
                {ar ? pt.labelAr : pt.label}
              </div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {ar ? pt.textAr : pt.text}
              </p>
            </div>
          ))}
          <p className="pt-2 text-xs text-muted-foreground">
            {ar
              ? "هذا ملخص تعليمي مبسّط ولا يغني عن استشارة الطبيب. حمّل النشرة الكاملة للتفاصيل."
              : "This is a simplified educational summary and does not replace medical advice. Download the full handout for details."}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

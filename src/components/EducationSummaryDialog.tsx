import { Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { educationSummaries } from "@/data/patient-education-summaries";
import type { PatientEducationEntry } from "@/data/patient-education";
import { Button } from "@/components/ui/button";
import { PatientGuideContent } from "@/components/PatientGuideContent";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { siteLanguages, translatedText } from "@/lib/site-language";

interface Props {
  entry: PatientEducationEntry;
  image: string;
  lang?: "en" | "ar";
}

export function EducationSummaryDialog({ entry, image, lang = "en" }: Props) {
  const { language, dictionary } = useSiteLanguage();
  const points = educationSummaries[entry.id];
  if (!points?.length) return null;
  const ar = lang === "ar";
  const label = ar ? "ملخص سريع" : "Quick summary";
  const title = language === "ar" ? entry.titleAr : translatedText(entry.title, dictionary);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" aria-label={`${label} — ${title}`}>
          <Sparkles className="h-4 w-4" />
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent
        className="max-w-2xl w-[95vw] max-h-[88vh] overflow-y-auto p-0 gap-0"
        dir={siteLanguages.find((l) => l.code === language)?.dir}
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
          <PatientGuideContent id={entry.id} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

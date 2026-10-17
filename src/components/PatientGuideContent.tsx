import { AlertTriangle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { educationSummaries } from "@/data/patient-education-summaries";
import { patientGuideCopy } from "@/data/patient-guide-copy";
import { siteLanguages, translatedText } from "@/lib/site-language";

export function PatientGuideContent({ id }: { id: string }) {
  const { language, dictionary } = useSiteLanguage();
  const t = patientGuideCopy[language];
  const dir = siteLanguages.find((l) => l.code === language)?.dir;
  return <div data-no-translate lang={language} dir={dir} className="space-y-6">
    <p className="border-s-2 border-primary ps-4 text-sm leading-relaxed text-muted-foreground">{t.safety}</p>
    {id === "cholecystectomy" && language === "ar" && <section className="border-b border-border pb-5"><h2 className="text-lg font-semibold">هل يمكن علاج حصوات المرارة بدون عملية؟</h2><Button asChild variant="link" className="mt-2 h-auto whitespace-normal px-0 text-start"><Link to="/articles/$articleId" params={{ articleId: "9005" }} search={{ lang: "ar" }}>اقرأ عن البدائل ونسب النجاح وحدودها</Link></Button></section>}
    <dl className="space-y-5">{educationSummaries[id]?.map((point, i) => <div key={i}><dt className="font-semibold text-foreground">{language === "ar" ? point.labelAr : translatedText(point.label, dictionary)}</dt><dd className="mt-2 text-sm leading-loose text-muted-foreground">{language === "ar" ? point.textAr : translatedText(point.text, dictionary)}</dd></div>)}</dl>
    <section><h2 className="text-lg font-semibold">{t.before}</h2><p className="mt-2 text-sm leading-loose text-muted-foreground">{t.preparation}</p></section>
    <section><h2 className="text-lg font-semibold">{t.after}</h2><p className="mt-2 text-sm leading-loose text-muted-foreground">{t.recovery}</p></section>
    <div className="flex gap-3 border-s-4 border-destructive bg-destructive/5 p-4"><AlertTriangle className="mt-1 size-5 shrink-0 text-destructive"/><p className="text-sm leading-loose">{t.urgent}</p></div>
  </div>;
}
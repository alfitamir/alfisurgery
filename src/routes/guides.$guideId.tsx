import { createFileRoute, Link } from "@tanstack/react-router";
import { Printer, Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PatientGuideContent } from "@/components/PatientGuideContent";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { patientEducation, educationCategoryImages } from "@/data/patient-education";
import { patientGuideCopy } from "@/data/patient-guide-copy";
import { navigationCopy } from "@/data/site-navigation";
import { translatedText, siteLanguages } from "@/lib/site-language";
import { guideSeoAr } from "@/data/guide-seo";

export const Route = createFileRoute("/guides/$guideId")({
  component: GuidePage,
  head: ({ params, match }) => {
    const guide = patientEducation.find((g) => g.id === params.guideId);
    const lang = (match.search as { lang?: string }).lang;
    const ar = lang === "ar";
    const title = ar
      ? `${guideSeoAr[params.guideId] ?? guide?.titleAr ?? "دليل العملية"} | د. تامر الألفي`
      : `${guide?.title ?? "Operation guide"} | Dr. Tamer Elalfy`;
    const description = (ar ? guide?.summaryAr : guide?.summary) ?? "Patient guidance from Dr. Tamer Elalfy.";
    const base = `https://alfisurgery.com/guides/${params.guideId}`;
    const url = lang && lang !== "en" ? `${base}?lang=${lang}` : base;
    return {
      meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "article" }, { property: "og:url", content: url }, { property: "og:locale", content: ar ? "ar_SA" : "en_US" }, { name: "twitter:card", content: "summary_large_image" }],
      links: [
        { rel: "canonical", href: url },
        ...siteLanguages.map((l) => ({ rel: "alternate", hrefLang: l.code, href: l.code === "en" ? base : `${base}?lang=${l.code}` })),
        { rel: "alternate", hrefLang: "x-default", href: base },
      ],
      scripts: guide ? [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "MedicalWebPage", name: title, description, url, inLanguage: lang ?? "en", about: { "@type": "MedicalProcedure", name: guide.title, alternateName: guide.titleAr }, author: { "@type": "Physician", name: "Dr. Tamer Elalfy", url: "https://alfisurgery.com/profile" }, audience: { "@type": "Patient" } }) }] : [],
    };
  },
});

function GuidePage() {
  const { guideId } = Route.useParams();
  const { language, dictionary } = useSiteLanguage();
  const guide = patientEducation.find((g) => g.id === guideId);
  const t = patientGuideCopy[language];
  if (!guide) return <main className="mx-auto max-w-3xl px-5 py-12"><h1>Guide not found</h1><Button asChild variant="link"><Link to="/">{navigationCopy[language].home}</Link></Button></main>;
  const title = language === "ar" ? guide.titleAr : translatedText(guide.title, dictionary);
  return <main data-no-translate lang={language} dir={siteLanguages.find((l) => l.code === language)?.dir} className="guide-reading mx-auto max-w-3xl px-5 py-8 md:py-12">
    <div className="guide-actions flex flex-wrap justify-between gap-3"><Button asChild variant="ghost"><Link to={language === "ar" ? "/ar/patients" : "/patients"}><ArrowLeft className="rtl:rotate-180"/>{t.title}</Link></Button><Button variant="outline" onClick={() => window.print()}><Printer/>{t.print}</Button></div>
    <p className="mt-8 text-sm font-semibold text-primary">{language === "ar" ? guide.categoryAr : translatedText(guide.category, dictionary)}</p>
    <h1 className="mt-3 text-3xl font-bold leading-snug md:text-4xl">{title}</h1>
    <p className="mt-4 text-sm text-muted-foreground">{navigationCopy[language].name}</p>
    <img src={educationCategoryImages[guide.category]} alt="" className="my-7 aspect-[3/1] w-full rounded-md object-cover"/>
    <PatientGuideContent id={guide.id}/>
    <div className="guide-actions mt-8 border-t border-border pt-6"><p className="mb-3 text-sm text-muted-foreground">{t.downloads}</p><Button asChild variant="outline"><a href={guide.pdfUrl} download={guide.pdfName}><Download/>PDF</a></Button></div>
  </main>;
}
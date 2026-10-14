import { Link, useRouterState } from "@tanstack/react-router";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { navigationCopy } from "@/data/site-navigation";
import { Button } from "@/components/ui/button";

const originalArabic = {
  ta: "அசல் உள்ளடக்கம் அரபு மொழியில் உள்ளது. கட்டுரைகள் மற்றும் மருத்துவக் கேள்விகளின் அசல் அரபு உரை பாதுகாக்கப்படுகிறது.",
  en: "Original Arabic content. The article text and medical questions are preserved in Arabic.",
  ar: "المحتوى الأصلي باللغة العربية.",
  ur: "اصل مواد عربی زبان میں ہے۔ مضامین اور طبی سوالات کا اصل عربی متن محفوظ ہے۔",
  hi: "मूल सामग्री अरबी में है। लेख और चिकित्सा प्रश्नों का मूल अरबी पाठ सुरक्षित है।",
  bn: "মূল বিষয়বস্তু আরবিতে। নিবন্ধ ও চিকিৎসা প্রশ্নের মূল আরবি পাঠ সংরক্ষিত আছে।",
  tl: "Nasa Arabic ang orihinal na nilalaman. Pinapanatili ang orihinal na teksto ng mga artikulo at tanong medikal.",
};
export function SourceLanguageNotice() {
  const { language } = useSiteLanguage();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const sourceArabic = (pathname.startsWith("/articles/") && pathname !== "/articles/228") || pathname === "/ar/medical-questions" || pathname === "/patient-education/weight-plateau-after-sleeve";
  if (!sourceArabic || language !== "en") return null;
  return <aside data-no-translate lang={language} className="border-b border-border bg-secondary"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-3"><p className="min-w-0 text-sm text-muted-foreground">{originalArabic[language]}</p><Button asChild variant="outline" size="sm"><Link to="/patients" search={(previous) => ({ ...previous, lang: language })}>{navigationCopy[language].patients}</Link></Button></div></aside>;
}
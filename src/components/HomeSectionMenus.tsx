import { Link } from "@tanstack/react-router";
import { ChevronDown, BookOpen, Stethoscope, Contact, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { navigationCopy } from "@/data/site-navigation";
import { patientEducation } from "@/data/patient-education";
import { preventionCopy } from "@/data/prevention";
import { translatedText, showsVideos, type SiteLanguage } from "@/lib/site-language";

// Native labels remain reliable even while the larger reading dictionary loads.
const labels: Record<SiteLanguage, string[]> = {
  en: ["Operation guides", "Warning signs", "Experience", "Specialties", "Surgical services", "Beyond surgery", "Publications", "Lectures & presentations", "Clinic & location", "Professional channels"],
  ar: ["أدلة العمليات", "علامات الخطر", "الخبرة", "التخصصات", "الخدمات الجراحية", "خارج الجراحة", "الأبحاث المنشورة", "المحاضرات والعروض", "العيادة والموقع", "القنوات المهنية"],
  ur: ["آپریشن کے رہنما", "خطرے کی علامات", "تجربہ", "تخصصات", "جراحی خدمات", "جراحی کے علاوہ", "شائع شدہ تحقیق", "لیکچرز اور پیشکشیں", "کلینک اور مقام", "پیشہ ورانہ ذرائع"],
  hi: ["ऑपरेशन मार्गदर्शिकाएँ", "चेतावनी संकेत", "अनुभव", "विशेषज्ञताएँ", "शल्य चिकित्सा सेवाएँ", "सर्जरी से परे", "प्रकाशित शोध", "व्याख्यान और प्रस्तुतियाँ", "क्लिनिक और स्थान", "पेशेवर माध्यम"],
  bn: ["অপারেশনের নির্দেশিকা", "সতর্কসংকেত", "অভিজ্ঞতা", "বিশেষত্ব", "অস্ত্রোপচারের সেবা", "অস্ত্রোপচারের বাইরে", "প্রকাশিত গবেষণা", "বক্তৃতা ও উপস্থাপনা", "ক্লিনিক ও অবস্থান", "পেশাগত মাধ্যম"],
  tl: ["Mga gabay sa operasyon", "Mga babala", "Karanasan", "Mga espesyalidad", "Mga serbisyo sa operasyon", "Bukod sa operasyon", "Mga publikasyon", "Mga lektura at presentasyon", "Klinika at lokasyon", "Mga propesyonal na channel"],
  ta: ["அறுவைச் சிகிச்சை வழிகாட்டிகள்", "எச்சரிக்கை அறிகுறிகள்", "அனுபவம்", "சிறப்புப் பிரிவுகள்", "அறுவைச் சிகிச்சை சேவைகள்", "அறுவைச் சிகிச்சைக்கு அப்பால்", "வெளியீடுகள்", "விரிவுரைகள் மற்றும் விளக்கக்காட்சிகள்", "கிளினிக் மற்றும் இருப்பிடம்", "தொழில்முறை சேனல்கள்"],
};

type Destination = "/patients" | "/ar/patients" | "/prevention" | "/articles" | "/videos" | "/profile" | "/research" | "/publications" | "/teaching" | "/updates" | "/contact" | "/patient-education/weight-plateau-after-sleeve" | "/patient-education/hidradenitis-suppurativa";
type Entry = { label: string; to: Destination; hash?: string };

export function HomeSectionMenus() {
  const { language, dictionary } = useSiteLanguage();
  const t = navigationCopy[language];
  const l = labels[language];
  const patients = language === "ar" ? "/ar/patients" : "/patients";
  const patientItems: Entry[] = [
    { label: t.patients, to: patients },
    { label: t.prepare, to: patients, hash: "prepare" },
    { label: t.recover, to: patients, hash: "recovery" },
    { label: l[1], to: patients, hash: "urgent" },
    { label: preventionCopy[language].title, to: "/prevention" },
    { label: t.articles, to: "/articles" },
    ...(showsVideos(language) ? [{ label: t.videos, to: "/videos" as const }] : []),
    ...(language === "ar" ? [
      { label: "ثبات الوزن بعد التكميم", to: "/patient-education/weight-plateau-after-sleeve" as const },
      { label: "التهاب الغدد العرقية القيحي", to: "/patient-education/hidradenitis-suppurativa" as const },
    ] : []),
  ];
  const doctorItems: Entry[] = [
    { label: t.profile, to: "/profile", hash: "about" },
    { label: l[2], to: "/profile", hash: language === "ar" ? "about" : "experience" },
    { label: l[3], to: "/profile", hash: "expertise" },
    { label: l[4], to: "/profile", hash: "services" },
    { label: l[5], to: "/profile", hash: "beyond" },
    { label: t.research, to: "/research", hash: "research" },
    { label: "ORCID", to: "/research", hash: "orcid" },
    { label: l[6], to: "/publications" },
    { label: t.teaching, to: "/teaching", hash: "teaching" },
    { label: l[7], to: "/teaching", hash: "presentations" },
    { label: t.updates, to: "/updates" },
  ];
  const contactItems: Entry[] = [
    { label: l[8], to: "/contact", hash: "contact" },
    { label: l[9], to: "/contact", hash: "web" },
  ];
  const groups = [
    { label: t.patients, icon: BookOpen, items: patientItems },
    { label: l[0], icon: ClipboardList, items: null },
    { label: t.profile, icon: Stethoscope, items: doctorItems },
    { label: t.contact, icon: Contact, items: contactItems },
  ];
  const categories = [...new Set(patientEducation.map((guide) => guide.category))];
  return <nav data-no-translate lang={language} aria-label={t.menu} className="border-b border-border bg-card">
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-5 py-3 md:flex md:flex-wrap md:px-8">
      {groups.map((group) => <DropdownMenu key={group.label} dir={language === "ar" || language === "ur" ? "rtl" : "ltr"}>
        <DropdownMenuTrigger asChild><Button variant="outline" className="h-auto min-h-11 min-w-0 justify-start gap-2 whitespace-normal py-2 text-start md:flex-1"><group.icon className="size-4 shrink-0 text-primary" /><span className="min-w-0 flex-1 break-words">{group.label}</span><ChevronDown className="size-4 shrink-0 text-muted-foreground" /></Button></DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="z-[60] w-80 max-w-[calc(100vw-2rem)]" data-no-translate lang={language}>
          {group.items ? group.items.map((item) => <DropdownMenuItem asChild key={`${item.to}-${item.hash ?? ""}`} className="min-h-10 whitespace-normal text-start"><Link to={item.to} hash={item.hash} search={{ lang: language }}>{item.label}</Link></DropdownMenuItem>) : <>
            <DropdownMenuItem asChild className="min-h-10"><Link to={patients} hash="operations" search={{ lang: language }}>{t.operations}</Link></DropdownMenuItem>
            {categories.map((category) => <div key={category}>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>{language === "ar" ? patientEducation.find((guide) => guide.category === category)?.categoryAr : translatedText(category, dictionary)}</DropdownMenuLabel>
              {patientEducation.filter((guide) => guide.category === category).map((guide) => <DropdownMenuItem asChild key={guide.id} className="min-h-10 whitespace-normal text-start"><Link to="/guides/$guideId" params={{ guideId: guide.id }} search={{ lang: language }}>{language === "ar" ? guide.titleAr : translatedText(guide.title, dictionary)}</Link></DropdownMenuItem>)}
            </div>)}
          </>}
        </DropdownMenuContent>
      </DropdownMenu>)}
    </div>
  </nav>;
}
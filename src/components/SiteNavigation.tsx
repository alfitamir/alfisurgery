import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Building2, Facebook, GraduationCap, Languages, Linkedin, Mail, MapPin, Menu, MessageCircle, Microscope, Phone, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { navigationCopy } from "@/data/site-navigation";
import { siteLanguages, translatedText } from "@/lib/site-language";
import { sectionCopy } from "@/data/section-copy";
import portrait from "@/assets/dr-elalfy-main.jpg.asset.json";

export function SiteNavigation() {
  const { language, languageMenu } = useSiteLanguage();
  const t = navigationCopy[language];
  const chosen = siteLanguages.find((l) => l.code === language) ?? siteLanguages[0];
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  useEffect(() => { setOpen(false); setLangOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open && !langOpen) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); setLangOpen(false); } };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open, langOpen]);
  const home = language === "ar" ? "/ar" : "/";
  const patients = language === "ar" ? "/ar/patients" : "/patients";
  const sections = sectionCopy[language];
  const items = [
    { to: "/profile", label: sections.doctor },
    { to: patients, label: sections.patient },
  ] as const;
  const active = (to: string) => to === "/" || to === "/ar" ? pathname === to || pathname === `${to}/` : pathname.startsWith(to);
  return <header data-no-translate dir={chosen.dir} lang={language} className="site-main-navigation sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
    <div className="mx-auto grid min-h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:flex sm:justify-between md:px-8">
      <Link to={home} className="flex min-w-0 items-center gap-3 ltr:max-md:pr-40 rtl:max-md:pr-28" onClick={() => setOpen(false)}>
        <img src={portrait.url} alt={t.name} width={44} height={44} className="size-11 shrink-0 rounded-md object-cover object-top" />
        <span className="min-w-0"><span className="block text-base font-bold md:text-lg">{t.name}</span><span className="mt-1 block text-xs text-muted-foreground">{t.role}</span></span>
      </Link>
      <nav className="hidden items-center gap-1 xl:flex" aria-label={t.menu}>{items.map((item) => <Button key={item.to} asChild variant="ghost" className={active(item.to) ? "bg-secondary text-primary" : "text-muted-foreground"}><Link to={item.to} aria-current={active(item.to) ? "page" : undefined}>{item.label}</Link></Button>)}</nav>
      <Button variant="outline" size="icon" className="shrink-0 xl:hidden" aria-label={open ? t.close : t.menu} aria-expanded={open} aria-controls="site-mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    <div className="absolute top-5 z-10 hidden max-md:block ltr:max-md:right-16 rtl:max-md:right-4">
      <div className="relative">
        {langOpen && <div className="absolute right-0 top-full z-50 mt-2 w-52 rounded-2xl border border-border bg-card p-2 shadow-xl">{languageMenu}</div>}
        <Button variant="outline" size="sm" onClick={() => setLangOpen((value) => !value)} aria-expanded={langOpen} aria-label="Choose language" className="gap-2 rounded-full">
          <Languages className="size-4 shrink-0" aria-hidden />
          <span lang={chosen.code} dir={chosen.dir} className="max-w-24 truncate max-[380px]:hidden">{chosen.name}</span>
        </Button>
      </div>
    </div>
    {open && <nav id="site-mobile-menu" aria-label={t.menu} className="max-h-[70vh] overflow-y-auto border-t border-border px-5 py-4 xl:hidden">{items.map((item) => <Button key={item.to} asChild variant="ghost" className={`mb-1 flex h-11 w-full justify-start ${active(item.to) ? "bg-secondary text-primary" : ""}`}><Link to={item.to} onClick={() => setOpen(false)}>{item.label}</Link></Button>)}</nav>}
  </header>;
}

const contactLinks = [
  { href: "https://mdh.com.sa/doctors/dr-tamer-elalfy/", label: "Mohammad Dossary Hospital", icon: Building2 },
  { href: "tel:+966548026853", label: "+966 54 802 6853", icon: Phone },
  { href: "tel:+966138011910", label: "+966 13 801 1910", icon: Phone },
  { href: "https://wa.me/966548026853", label: "WhatsApp", icon: MessageCircle },
  { href: "mailto:tamerelalfy@hca.med.sa", label: "tamerelalfy@hca.med.sa", icon: Mail },
  { href: "https://www.youtube.com/@alfy_surgery", label: "YouTube @alfy_surgery", icon: Youtube },
  { href: "https://www.linkedin.com/in/alfitamir/", label: "LinkedIn", icon: Linkedin },
  { href: "https://orcid.org/0000-0003-3769-2445", label: "ORCID 0000-0003-3769-2445", icon: GraduationCap },
  { href: "https://www.facebook.com/share/18GMPg3MQw/", label: "Facebook", icon: Facebook },
  { href: "https://www.researchgate.net/profile/Tamer-Rushdy/unconfirmed", label: "ResearchGate", icon: Microscope },
  { href: "https://www.google.com/maps/search/?api=1&query=Mohammad+Dossary+Hospital+Al+Khobar", label: "4th St, Al Khobar Al Janubiyah, Al Khobar 34621, Saudi Arabia", icon: MapPin },
] as const;

export function SiteFooter() {
  const { language, dictionary } = useSiteLanguage(); const t = navigationCopy[language]; const s = sectionCopy[language];
  return <footer data-no-translate lang={language} className="border-t border-border bg-card"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_2fr] md:px-8">
    <div><p className="font-bold">{t.name}</p><p className="mt-1 text-sm text-muted-foreground">{t.role}</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.location}</p><nav className="mt-4 flex flex-col items-start gap-2 text-sm"><Link to="/profile">{s.doctor}</Link><Link to={language === "ar" ? "/ar/patients" : "/patients"}>{s.patient}</Link></nav><p className="mt-4 text-xs leading-relaxed text-muted-foreground">{t.warning}</p><p className="mt-3 text-xs text-muted-foreground">© {new Date().getFullYear()} Alfi Surgery · {t.version}</p></div>
    <div><p className="font-semibold">{s.contact}</p><ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">{contactLinks.map((link) => <li key={link.href}><a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" dir="ltr" className="flex items-start gap-2 rounded-md p-1 text-foreground hover:text-primary"><link.icon className="mt-0.5 size-4 shrink-0 text-primary" /><span className="min-w-0 break-words">{language === "ta" ? translatedText(link.label, dictionary) : link.label}</span></a></li>)}</ul></div>
  </div></footer>;
}

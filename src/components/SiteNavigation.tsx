import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Menu, Microscope, Stethoscope, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { navigationCopy } from "@/data/site-navigation";
import { showsVideos, siteLanguages } from "@/lib/site-language";

export function SiteNavigation() {
  const { language } = useSiteLanguage();
  const t = navigationCopy[language];
  const chosen = siteLanguages.find((l) => l.code === language) ?? siteLanguages[0];
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  const home = language === "ar" ? "/ar" : "/";
  const patients = language === "ar" ? "/ar/patients" : "/patients";
  const allItems = [
    { to: home, label: t.home }, { to: "/profile", label: t.profile },
    { to: "/research", label: t.research }, { to: patients, label: t.patients },
    { to: "/articles", label: t.articles }, { to: "/videos", label: t.videos },
    { to: "/contact", label: t.contact },
  ] as const;
  const items = showsVideos(language) ? allItems : allItems.filter((item) => item.to !== "/videos");
  const active = (to: string) => to === "/" || to === "/ar" ? pathname === to || pathname === `${to}/` : pathname.startsWith(to);
  return <header data-no-translate dir={chosen.dir} lang={language} className="site-main-navigation sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
    <div className="mx-auto grid min-h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:flex sm:justify-between md:px-8">
      <Link to={home} className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
        <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground"><Stethoscope className="size-6" /></span>
        <span className="min-w-0"><span className="block text-base font-bold md:text-lg">{t.name}</span><span className="mt-1 block text-xs text-muted-foreground">{t.role}</span></span>
      </Link>
      <nav className="hidden items-center gap-1 xl:flex" aria-label={t.menu}>{items.map((item) => <Button key={item.to} asChild variant="ghost" className={active(item.to) ? "bg-secondary text-primary" : "text-muted-foreground"}><Link to={item.to} aria-current={active(item.to) ? "page" : undefined}>{item.label}</Link></Button>)}<details className="relative"><summary className="cursor-pointer px-3 py-2 text-sm text-primary">{t.teaching}</summary><div className="absolute end-0 top-full z-50 min-w-48 border border-border bg-card p-2"><Button asChild variant="ghost" className="w-full justify-start"><Link to="/teaching">{t.teaching}</Link></Button><Button asChild variant="ghost" className="w-full justify-start"><Link to="/updates">{t.updates}</Link></Button></div></details></nav>
      <Button variant="outline" size="icon" className="shrink-0 xl:hidden" aria-label={open ? t.close : t.menu} aria-expanded={open} aria-controls="site-mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav id="site-mobile-menu" aria-label={t.menu} className="max-h-[70vh] overflow-y-auto border-t border-border px-5 py-4 xl:hidden">{items.map((item) => <Button key={item.to} asChild variant="ghost" className={`mb-1 flex h-11 w-full justify-start ${active(item.to) ? "bg-secondary text-primary" : ""}`}><Link to={item.to} onClick={() => setOpen(false)}>{item.label}</Link></Button>)}<div className="mt-2 flex flex-wrap gap-2 border-t border-border pt-3"><Button asChild variant="outline"><Link to="/teaching" onClick={() => setOpen(false)}>{t.teaching}</Link></Button><Button asChild variant="outline"><Link to="/updates" onClick={() => setOpen(false)}>{t.updates}</Link></Button></div></nav>}
  </header>;
}

export function SiteFooter() {
  const { language } = useSiteLanguage(); const t = navigationCopy[language];
  return <footer data-no-translate lang={language} className="border-t border-border bg-card"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-3 md:px-8"><div><p className="font-bold">{t.name}</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.location}</p><p className="mt-3 text-xs text-muted-foreground">© {new Date().getFullYear()} Alfi Surgery · {t.version}</p></div><nav className="flex flex-col items-start gap-3 text-sm"><Link to="/profile">{t.profile}</Link><Link to="/research">{t.research}</Link><Link to="/teaching">{t.teaching}</Link><Link to="/updates">{t.updates}</Link></nav><div><p className="flex items-center gap-2 font-semibold"><BookOpen className="size-4" />{t.resources}</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.warning}</p><Button asChild variant="link" className="mt-3 px-0"><Link to={language === "ar" ? "/ar/patients" : "/patients"}>{t.operations}<ArrowRight className="rtl:rotate-180" /></Link></Button></div></div></footer>;
}
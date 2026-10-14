import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Share2 } from "lucide-react";
import { normalizeText, siteLanguages, translatedText, type SiteLanguage, type TranslationDictionary } from "@/lib/site-language";
import { navigationCopy } from "@/data/site-navigation";
import { Button } from "@/components/ui/button";
import arabicUi from "@/data/locales/ar-ui.json";

const LanguageContext = createContext({ language: "en" as SiteLanguage, dictionary: {} as TranslationDictionary });
export const useSiteLanguage = () => useContext(LanguageContext);
const storageKey = "alfi-site-language";
const loaders = {
  ta: () => import("@/data/locales/ta.json"),
  ur: () => import("@/data/locales/ur.json"),
  hi: () => import("@/data/locales/hi.json"),
  bn: () => import("@/data/locales/bn.json"),
  tl: () => import("@/data/locales/tl.json"),
};

export function SiteLanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const searchLanguage = useRouterState({ select: (state) => state.location.search.lang });
  const [language, setLanguage] = useState<SiteLanguage>("en");
  const [dictionary, setDictionary] = useState<TranslationDictionary>({});
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const translated = language !== "en" && language !== "ar";
  const chosen = siteLanguages.find((item) => item.code === language) ?? siteLanguages[0];

  useEffect(() => {
    let stored: string | null = new URLSearchParams(window.location.search).get("lang");
    if (stored && siteLanguages.some((item) => item.code === stored)) {
      try { localStorage.setItem(storageKey, stored); } catch { /* optional */ }
    } else {
      try { stored = localStorage.getItem(storageKey); } catch { /* private browsing */ }
    }
    const found = siteLanguages.find((item) => item.code === stored);
    setLanguage(found?.code ?? (pathname.startsWith("/ar") || pathname.startsWith("/articles") ? "ar" : "en"));
    setReady(true);
  }, [pathname, searchLanguage]);

  // Every language is explicit in the URL and retained by root search middleware.
  useEffect(() => {
    if (!ready) return;
    if (!searchLanguage) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", language);
      window.history.replaceState(window.history.state, "", url.href);
    }
  }, [ready, language, searchLanguage]);

  const [copied, setCopied] = useState(false);
  const shareLink = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) { await navigator.share({ title: document.title, url }); return; }
      await navigator.clipboard.writeText(url);
      setCopied(true); setTimeout(() => setCopied(false), 2000);
    } catch { /* cancelled */ }
  };

  useEffect(() => {
    if (!ready) return;
    let cancelled = false;
    setFailed(false);
    if (language === "en" || language === "ar") { setDictionary(language === "ar" ? arabicUi : {}); setLoading(false); return; }
    setLoading(true);
    void loaders[language]().then((result) => {
      if (!cancelled) { setDictionary(result.default); setLoading(false); }
    }).catch(() => { if (!cancelled) { setFailed(true); setLoading(false); } });
    return () => { cancelled = true; };
  }, [language, ready]);

  useEffect(() => {
    if (!ready || loading) return;
    const originalText = new WeakMap<Text, { source: string; output: string }>();
    const originalAttributes = new Map<Element, Map<string, string>>();
    const skip = "script,style,noscript,code,pre,[data-no-translate],input,textarea";
    const direction = chosen.dir;
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.documentElement.dataset.siteLanguage = language;

    const transform = () => {
      observer.disconnect();
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();
      while (node) {
        if (node instanceof Text && !node.parentElement?.closest(skip)) {
          const previous = originalText.get(node);
          const source = previous && node.data === previous.output ? previous.source : node.data;
          const output = translated || language === "ar" ? translatedText(source, dictionary) : source;
          originalText.set(node, { source, output });
          if (node.data !== output) node.data = output;
        }
        node = walker.nextNode();
      }
      document.body.querySelectorAll("[placeholder],[aria-label],[alt],[title],[dir],[lang]").forEach((element) => {
        if (element.closest("[data-no-translate]")) return;
        for (const attribute of ["placeholder", "aria-label", "alt", "title", "dir", "lang"]) {
          const value = element.getAttribute(attribute);
          if (value === null) continue;
          let attributes = originalAttributes.get(element);
          if (!attributes) { attributes = new Map(); originalAttributes.set(element, attributes); }
          if (!attributes.has(attribute)) attributes.set(attribute, value);
          const source = attributes.get(attribute) ?? value;
          const technicalText = /^[\s\d+().,–\-:/@\w]+$/.test(element.textContent ?? "") && /[\d@]/.test(element.textContent ?? "");
          const output = !translated && language !== "ar" ? source : attribute === "dir" ? (technicalText ? "ltr" : direction) : attribute === "lang" ? language : translatedText(source, dictionary);
          if (value !== output) element.setAttribute(attribute, output);
        }
      });
      observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    };
    let frame = 0;
    const observer = new MutationObserver(() => { cancelAnimationFrame(frame); frame = requestAnimationFrame(transform); });
    transform();
    return () => {
      observer.disconnect(); cancelAnimationFrame(frame);
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();
      while (node) {
        if (node instanceof Text) { const previous = originalText.get(node); if (previous && node.data === previous.output) node.data = previous.source; }
        node = walker.nextNode();
      }
      originalAttributes.forEach((attributes, element) => { if (element.isConnected) attributes.forEach((value, key) => element.setAttribute(key, value)); });
    };
  }, [dictionary, loading, ready, pathname, language, chosen.dir, translated]);

  const value = useMemo(() => ({ language, dictionary }), [language, dictionary]);
  const selectLanguage = (next: string) => {
    const found = siteLanguages.find((item) => item.code === next);
    if (!found) return;
    try { localStorage.setItem(storageKey, found.code); } catch { /* optional preference */ }
    if (found.code === "en" || found.code === "ar") {
      const pairs: Record<string, [string, string]> = { "/": ["/", "/ar"], "/ar": ["/", "/ar"], "/patients": ["/patients", "/ar/patients"], "/ar/patients": ["/patients", "/ar/patients"] };
      const pair = pairs[pathname.replace(/\/$/, "") || "/"];
      if (pair) { window.location.assign(`${pair[found.code === "ar" ? 1 : 0]}?lang=${found.code}`); return; }
    }
    const url = new URL(window.location.href);
    url.searchParams.set("lang", found.code);
    window.location.assign(url.href);
  };
  const notice = "Auto-translated text. Confirm medical instructions with your treating team. Videos and downloads remain in their original languages.";

  const flags: Record<SiteLanguage, { src: string; label: string }> = {
    ar: { src: "https://flagcdn.com/sa.svg", label: "Saudi Arabia" },
    en: { src: "https://flagcdn.com/gb.svg", label: "United Kingdom" },
    ur: { src: "https://flagcdn.com/pk.svg", label: "Pakistan" },
    hi: { src: "https://flagcdn.com/in.svg", label: "India" },
    bn: { src: "https://flagcdn.com/bd.svg", label: "Bangladesh" },
    tl: { src: "https://flagcdn.com/ph.svg", label: "Philippines" },
    ta: { src: "https://flagcdn.com/in.svg", label: "India" },
  };
  const languageMenu = (
    <nav aria-label="Website language" className="flex flex-col gap-1">
      {siteLanguages.map((item) => {
        const active = item.code === language;
        return (
          <button
            key={item.code}
            type="button"
            aria-current={active ? "true" : undefined}
            onClick={() => { selectLanguage(item.code); setMenuOpen(false); }}
            className={`flex items-center gap-3 rounded-xl px-3 py-2 text-start text-sm font-medium transition-colors ${active ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
          >
            <img src={flags[item.code].src} alt={flags[item.code].label} width={28} height={28} className="size-7 shrink-0 rounded-full border border-border object-cover" />
            <span lang={item.code} dir={item.dir} className="min-w-0 flex-1 truncate">{item.name}</span>
            {active && <Check className="size-4 shrink-0" aria-hidden />}
          </button>
        );
      })}
    </nav>
  );

  return <LanguageContext.Provider value={value}>
    <div data-no-translate lang={language} className="site-language-bar border-b border-border bg-secondary text-secondary-foreground" dir={chosen.dir}>
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-5 py-2 sm:flex sm:flex-wrap sm:justify-between md:px-8">
        <span className="col-span-2 min-w-0 text-xs font-semibold sm:col-auto">Alfi Surgery <span className="mx-2 text-muted-foreground">/</span>{navigationCopy[language].version}</span>
        <div className="col-span-2 flex min-w-0 flex-wrap items-center gap-2 sm:col-auto">
        <span className="flex shrink-0 items-center gap-1 text-lg leading-none" aria-label="Saudi Arabia and Egypt"><img src="https://flagcdn.com/sa.svg" alt="Saudi Arabia" width={30} height={20} className="h-5 w-auto rounded-sm border border-border" /><img src="https://flagcdn.com/eg.svg" alt="Egypt" width={30} height={20} className="h-5 w-auto rounded-sm border border-border" /></span>
        <Button variant="outline" size="sm" onClick={shareLink} aria-label={navigationCopy[language].share}><Share2 className="size-4" />{copied ? navigationCopy[language].copied : navigationCopy[language].share}</Button>
        </div>
        {translated && <p lang={language} dir={chosen.dir} role="status" className="col-span-2 min-w-0 w-full text-xs leading-relaxed text-muted-foreground">{loading ? "…" : failed ? "Translation unavailable. Please try another language." : dictionary[normalizeText(notice)] ?? notice}</p>}
      </div>
    </div>
    <div data-no-translate className="md:ps-52">
      {children}
    </div>
    <aside data-no-translate className="fixed inset-y-0 start-0 z-40 hidden w-52 flex-col justify-center border-e border-border bg-card/95 p-3 backdrop-blur md:flex" dir="ltr">
      <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Language</p>
      {languageMenu}
    </aside>
    <div data-no-translate className="fixed bottom-4 start-4 z-40 md:hidden" dir="ltr">
      {menuOpen && <div className="mb-2 w-48 rounded-2xl border border-border bg-card p-2 shadow-lg">{languageMenu}</div>}
      <Button variant="default" size="sm" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Choose language" className="gap-2 rounded-full shadow-lg">
        <Languages className="size-4" aria-hidden />
        <span lang={chosen.code} dir={chosen.dir}>{chosen.name}</span>
      </Button>
    </div>
  </LanguageContext.Provider>;
}
import { useEffect, useRef, useState } from "react";
import { Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import { navigationCopy } from "@/data/site-navigation";

const countedKey = "alfi-visit-counted";

export function VisitCounter() {
  const { language } = useSiteLanguage();
  const t = navigationCopy[language];
  const [count, setCount] = useState<number | null>(null);
  const [display, setDisplay] = useState(0);
  const frame = useRef(0);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      let value: number | null = null;
      try {
        const stored = sessionStorage.getItem(countedKey);
        if (stored) value = Number(stored) || null;
        if (!value) {
          const { data, error } = await supabase.rpc("increment_site_visits");
          if (!error && typeof data === "number") {
            value = data;
            sessionStorage.setItem(countedKey, String(data));
          }
        }
      } catch { /* offline or private browsing */ }
      if (!cancelled && value) setCount(value);
    };
    void run();
    return () => { cancelled = true; cancelAnimationFrame(frame.current); };
  }, []);

  useEffect(() => {
    if (count === null) return;
    const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setDisplay(count); return; }
    const start = Math.max(0, count - Math.max(12, Math.round(count * 0.06)));
    const startedAt = performance.now();
    const duration = 1200;
    const step = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (count - start) * eased));
      if (progress < 1) frame.current = requestAnimationFrame(step);
      else setDisplay(count);
    };
    frame.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame.current);
  }, [count]);

  const formatted = new Intl.NumberFormat(language === "ar" ? "ar-EG" : language === "en" || language === "tl" ? "en-US" : "en-IN").format(display);

  return (
    <div data-no-translate className="visit-counter border-t border-border/60">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2.5 px-5 py-4 text-xs text-muted-foreground">
        <Eye className="size-3.5 text-primary/70" aria-hidden />
        <span>{t.visits}</span>
        <span dir="ltr" role="status" className="font-semibold tabular-nums text-foreground">{count === null ? "…" : formatted}</span>
      </div>
    </div>
  );
}

import { siteLanguages, type SiteLanguage } from "@/lib/site-language";

/** Articles written from the admin page and stored in the database (ids start at 10001). */
export type SiteArticleEdition = { title: string; content: string };
export type SiteArticleRow = {
  id: number;
  source_lang: SiteLanguage;
  category: string;
  status: "draft" | "published";
  editions: Partial<Record<SiteLanguage, SiteArticleEdition>>;
  published_at: string | null;
  updated_at: string;
};

export const siteLanguageCodes = siteLanguages.map((l) => l.code) as SiteLanguage[];
export const languageNamesEnglish: Record<SiteLanguage, string> = {
  ar: "Arabic", en: "English", ur: "Urdu", hi: "Hindi", bn: "Bengali", tl: "Filipino (Tagalog)", ta: "Tamil",
};
export const isRtl = (language: SiteLanguage) => language === "ar" || language === "ur";

export function normalizeEditions(value: unknown): Partial<Record<SiteLanguage, SiteArticleEdition>> {
  const out: Partial<Record<SiteLanguage, SiteArticleEdition>> = {};
  if (!value || typeof value !== "object") return out;
  for (const code of siteLanguageCodes) {
    const e = (value as Record<string, unknown>)[code] as { title?: unknown; content?: unknown } | undefined;
    if (e && typeof e.title === "string" && typeof e.content === "string" && e.title.trim() && e.content.trim()) out[code] = { title: e.title, content: e.content };
  }
  return out;
}

export function toSiteArticleRow(row: { id: number; source_lang: string; category: string; status: string; editions: unknown; published_at: string | null; updated_at: string }): SiteArticleRow {
  return {
    id: row.id,
    source_lang: (siteLanguageCodes.includes(row.source_lang as SiteLanguage) ? row.source_lang : "ar") as SiteLanguage,
    category: row.category,
    status: row.status === "published" ? "published" : "draft",
    editions: normalizeEditions(row.editions),
    published_at: row.published_at,
    updated_at: row.updated_at,
  };
}

/** The edition shown for a language: never silently substitutes another language. */
export function siteArticleEdition(row: SiteArticleRow, language: SiteLanguage) {
  const edition = row.editions[language];
  return edition ? { id: row.id, language, ...edition } : undefined;
}

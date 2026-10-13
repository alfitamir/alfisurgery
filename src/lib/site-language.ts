export const siteLanguages = [
  { code: "ar", name: "العربية", dir: "rtl" },
  { code: "en", name: "English", dir: "ltr" },
  { code: "ur", name: "اردو", dir: "rtl" },
  { code: "hi", name: "हिन्दी", dir: "ltr" },
  { code: "bn", name: "বাংলা", dir: "ltr" },
  { code: "tl", name: "Filipino", dir: "ltr" },
] as const;

export type SiteLanguage = typeof siteLanguages[number]["code"];
export type TranslationDictionary = Record<string, string>;
export const languageContentCopy: Record<SiteLanguage, { articles: string; noArticles: string; noVideos: string }> = {
  ar: { articles: "مقالات طبية مبسطة", noArticles: "لا توجد مقالات باللغة العربية حاليًا.", noVideos: "لا توجد فيديوهات باللغة العربية حاليًا." },
  en: { articles: "Medical articles", noArticles: "No articles written in English are available yet.", noVideos: "No videos in English are available yet." },
  ur: { articles: "طبی مضامین", noArticles: "فی الحال اردو میں لکھے گئے مضامین دستیاب نہیں ہیں۔", noVideos: "فی الحال اردو زبان میں ویڈیوز دستیاب نہیں ہیں۔" },
  hi: { articles: "चिकित्सा लेख", noArticles: "अभी हिन्दी में लिखे गए लेख उपलब्ध नहीं हैं।", noVideos: "अभी हिन्दी भाषा में वीडियो उपलब्ध नहीं हैं।" },
  bn: { articles: "চিকিৎসা বিষয়ক নিবন্ধ", noArticles: "এখনও বাংলায় লেখা নিবন্ধ পাওয়া যায়নি।", noVideos: "এখনও বাংলা ভাষায় ভিডিও পাওয়া যায়নি।" },
  tl: { articles: "Mga artikulong medikal", noArticles: "Wala pang mga artikulong nakasulat sa Filipino.", noVideos: "Wala pang mga video sa Filipino." },
};
export const normalizeText = (text: string) => text.replace(/\s+/g, " ").trim();
const translationCache = new WeakMap<TranslationDictionary, Map<string, string>>();

export function translatedText(text: string, dictionary: TranslationDictionary) {
  const normalized = normalizeText(text);
  if (!normalized) return text;
  const exact = dictionary[normalized];
  if (exact) return text.replace(text.trim(), exact);
  let cache = translationCache.get(dictionary);
  if (!cache) { cache = new Map(); translationCache.set(dictionary, cache); }
  const cached = cache.get(normalized);
  if (cached !== undefined) return text.replace(text.trim(), cached);
  // Excerpts and count labels are deliberately split by React into separate nodes.
  const suffix = normalized.endsWith("…") ? "…" : "";
  const fragment = suffix ? normalized.slice(0, -1) : normalized;
  const match = fragment.length > 30 ? Object.keys(dictionary).find((key) => key.startsWith(fragment)) : undefined;
  const output = match ? `${dictionary[match].slice(0, Math.max(fragment.length, 160))}${suffix}` : normalized;
  cache.set(normalized, output);
  return text.replace(text.trim(), output);
}

export function translatedSearchText(text: string, dictionary: TranslationDictionary) {
  return translatedText(text, dictionary);
}
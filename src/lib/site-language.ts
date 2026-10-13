export const siteLanguages = [
  { code: "en", name: "English", dir: "ltr" },
  { code: "ar", name: "العربية", dir: "rtl" },
  { code: "ur", name: "اردو", dir: "rtl" },
  { code: "hi", name: "हिन्दी", dir: "ltr" },
  { code: "bn", name: "বাংলা", dir: "ltr" },
  { code: "tl", name: "Filipino", dir: "ltr" },
] as const;

export type SiteLanguage = typeof siteLanguages[number]["code"];
export type TranslationDictionary = Record<string, string>;
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
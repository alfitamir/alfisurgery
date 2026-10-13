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

export function translatedText(text: string, dictionary: TranslationDictionary) {
  const normalized = normalizeText(text);
  const exact = dictionary[normalized];
  if (exact) return text.replace(text.trim(), exact);
  // Excerpts and count labels are deliberately split by React into separate nodes.
  const suffix = normalized.endsWith("…") ? "…" : "";
  const fragment = suffix ? normalized.slice(0, -1) : normalized;
  const match = Object.keys(dictionary).find((key) => key.startsWith(fragment) && fragment.length > 30);
  return match ? `${dictionary[match].slice(0, Math.max(fragment.length, 160))}${suffix}` : text;
}

export function translatedSearchText(text: string, dictionary: TranslationDictionary) {
  return translatedText(text, dictionary);
}
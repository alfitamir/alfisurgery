const DAY_MS = 86_400_000;
const RIYADH_OFFSET_MS = 3 * 60 * 60 * 1000;
const FIRST_DAY = Math.floor(Date.parse("2026-10-17T00:00:00+03:00") / DAY_MS + RIYADH_OFFSET_MS / DAY_MS);

export function dailyArticleSelection<T>(articles: readonly T[], now: Date) {
  if (!articles.length || !Number.isFinite(now.getTime())) return undefined;
  const day = Math.floor((now.getTime() + RIYADH_OFFSET_MS) / DAY_MS) - FIRST_DAY;
  const index = ((day % articles.length) + articles.length) % articles.length;
  return { article: articles[index], tone: ((day % 4) + 4) % 4 };
}
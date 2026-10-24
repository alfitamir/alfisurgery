// Each chapter is its own lazy chunk so readers only download the chapter they open.
const chapterFiles = import.meta.glob("/src/content/books/*/*.md", { query: "?raw", import: "default" }) as Record<string, () => Promise<string>>;

/** Returns chapter markdown without its leading level-1 heading (the page renders the title itself). */
export async function loadBookChapter(bookId: string, file: string): Promise<string | null> {
  const load = chapterFiles[`/src/content/books/${bookId}/${file}`];
  if (!load) return null;
  const text = await load();
  return text.replace(/^# .*\n+/, "");
}

export function headingSlug(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Level-2 headings, used for the in-chapter navigation. */
export function chapterHeadings(markdown: string) {
  return markdown
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.slice(3).replace(/[*_`]/g, "").trim();
      return { text, id: headingSlug(text) };
    });
}

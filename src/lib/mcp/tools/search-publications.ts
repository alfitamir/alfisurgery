import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { publications } from "@/data/publications";

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export default defineTool({
  name: "search_publications",
  title: "Search peer-reviewed publications",
  description:
    "Search Dr Tamer Elalfy's peer-reviewed publications with optional filters: free-text query, author name, journal name, keywords (with configurable match mode), and year range. Returns the total match count plus the (paginated) matching entries with title, abstract, authors, journal, year, and link (DOI when available).",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Free-text search across title, abstract, authors, and journal."),
    author: z
      .string()
      .optional()
      .describe("Filter by author name substring (case-insensitive), e.g. 'Elalfy'."),
    journal: z
      .string()
      .optional()
      .describe("Filter by journal name substring (case-insensitive), e.g. 'Coloproctol'."),
    keywords: z
      .array(z.string())
      .optional()
      .describe(
        "Keywords to match across title/abstract/authors/journal. Matching behavior controlled by keywordMatch.",
      ),
    keywordMatch: z
      .enum(["substring", "exact", "phrase"])
      .optional()
      .describe(
        "How to match `keywords` (default 'substring'): 'substring' = case-insensitive substring AND-match (current behavior); 'exact' = each keyword must match a full whole word (word-boundary, case-insensitive AND-match); 'phrase' = each keyword is treated as an exact whole-word phrase (multi-word phrases match consecutively, case-insensitive AND-match).",
      ),
    year: z.number().int().optional().describe("Exact publication year filter."),
    yearFrom: z.number().int().optional().describe("Inclusive lower bound for publication year."),
    yearTo: z.number().int().optional().describe("Inclusive upper bound for publication year."),
    limit: z
      .number()
      .int()
      .optional()
      .describe("Maximum number of results to return (default 20)."),
    offset: z
      .number()
      .int()
      .optional()
      .describe("Number of results to skip for pagination (default 0)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({
    query,
    author,
    journal,
    keywords,
    keywordMatch,
    year,
    yearFrom,
    yearTo,
    limit,
    offset,
  }) => {
    const lc = (s: string) => s.toLowerCase();
    const q = query?.trim().toLowerCase() ?? "";
    const terms = q ? q.split(/\s+/).filter(Boolean) : [];
    const kws = (keywords ?? []).map((k) => k.trim().toLowerCase()).filter(Boolean);
    const mode = keywordMatch ?? "substring";
    const authorQ = author?.trim().toLowerCase();
    const journalQ = journal?.trim().toLowerCase();

    const matchKeyword = (hay: string, kw: string): boolean => {
      if (mode === "substring") return hay.includes(kw);
      // 'exact' and 'phrase' both use whole-word boundary matching; multi-word
      // input is matched as a consecutive phrase (whitespace-normalized).
      const parts = kw.split(/\s+/).map(escapeRegex);
      const pattern = `(?:^|\\W)${parts.join("\\s+")}(?=$|\\W)`;
      return new RegExp(pattern, "i").test(hay);
    };

    const scored = publications
      .filter((p) => {
        if (year && p.year !== year) return false;
        if (yearFrom && p.year < yearFrom) return false;
        if (yearTo && p.year > yearTo) return false;
        if (authorQ && !lc(p.authors).includes(authorQ)) return false;
        if (journalQ && !lc(p.journal).includes(journalQ)) return false;
        const hay = lc(`${p.title} ${p.abstract} ${p.authors} ${p.journal}`);
        if (kws.length && !kws.every((k) => matchKeyword(hay, k))) return false;
        return true;
      })
      .map((p) => {
        const hay = lc(`${p.title} ${p.abstract} ${p.authors} ${p.journal}`);
        const score = terms.length
          ? terms.reduce((s, t) => s + (hay.includes(t) ? 1 : 0), 0)
          : 1;
        return { p, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score || b.p.year - a.p.year);

    const totalMatches = scored.length;
    const start = offset && offset > 0 ? offset : 0;
    const max = limit && limit > 0 ? limit : 20;
    const items = scored.slice(start, start + max).map(({ p }) => ({
      id: p.id,
      title: p.title,
      abstract: p.abstract,
      authors: p.authors,
      journal: p.journal,
      year: p.year,
      url: p.url,
      doi: p.doi,
      doiUrl: p.doi ? `https://doi.org/${p.doi}` : undefined,
    }));

    const summary = `Found ${totalMatches} publication(s); returning ${items.length} (offset ${start}, keywordMatch '${mode}').`;
    return {
      content: [
        {
          type: "text",
          text:
            totalMatches === 0
              ? "No publications matched the given filters."
              : `${summary}\n\n${JSON.stringify(items, null, 2)}`,
        },
      ],
      structuredContent: {
        totalMatches,
        returned: items.length,
        offset: start,
        keywordMatch: mode,
        items,
      },
    };
  },
});

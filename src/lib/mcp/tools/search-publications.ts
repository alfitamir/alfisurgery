import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { publications } from "@/data/publications";

export default defineTool({
  name: "search_publications",
  title: "Search peer-reviewed publications",
  description:
    "Search Dr Tamer Elalfy's peer-reviewed publications by free-text query across title, abstract, authors, and journal. Optionally filter by publication year. Returns matching entries with title, abstract, authors, journal, year, and link (DOI when available).",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe(
        "Free-text search across title, abstract, authors, and journal. Omit to list all publications.",
      ),
    year: z.number().int().optional().describe("Optional exact publication year filter, e.g. 2023."),
    limit: z
      .number()
      .int()
      .optional()
      .describe("Maximum number of results to return (default 20)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, year, limit }) => {
    const q = query?.trim().toLowerCase() ?? "";
    const terms = q ? q.split(/\s+/).filter(Boolean) : [];

    const scored = publications
      .filter((p) => !year || p.year === year)
      .map((p) => {
        const hay = `${p.title} ${p.abstract} ${p.authors} ${p.journal}`.toLowerCase();
        const score = terms.length
          ? terms.reduce((s, t) => s + (hay.includes(t) ? 1 : 0), 0)
          : 1;
        return { p, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score || b.p.year - a.p.year);

    const max = limit && limit > 0 ? limit : 20;
    const items = scored.slice(0, max).map(({ p }) => ({
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

    return {
      content: [
        {
          type: "text",
          text:
            items.length === 0
              ? `No publications matched${query ? ` '${query}'` : ""}${year ? ` in ${year}` : ""}.`
              : JSON.stringify(items, null, 2),
        },
      ],
      structuredContent: { count: items.length, items },
    };
  },
});

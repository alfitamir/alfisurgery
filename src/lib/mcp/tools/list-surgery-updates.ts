import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { surgeryUpdates } from "@/data/surgery-updates";

export default defineTool({
  name: "list_surgery_updates",
  title: "List recent surgery updates",
  description:
    "List curated recent updates in general and laparoscopic surgery published on Dr Tamer Elalfy's site. Each entry is tagged for a 'doctors' or 'patients' audience with a bilingual (English/Arabic) summary and a source link. Optionally filter by audience.",
  inputSchema: {
    audience: z.enum(["doctors", "patients"]).optional().describe("Optional audience filter."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ audience }) => {
    const items = surgeryUpdates
      .filter((u) => !audience || u.audience === audience)
      .map((u) => ({
        audience: u.audience,
        tag: u.tag.en,
        date: u.date,
        title: u.title.en,
        titleAr: u.title.ar,
        summary: u.summary.en,
        summaryAr: u.summary.ar,
        source: u.source.en,
        url: u.url,
      }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});

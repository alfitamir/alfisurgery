import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { patientEducation } from "@/data/patient-education";

export default defineTool({
  name: "list_patient_education",
  title: "List patient education materials",
  description:
    "List patient education handouts published by Dr Tamer Elalfy's surgical practice. Each entry covers one operation or diagnosis with a bilingual (English/Arabic) summary and downloadable PDF and DOCX handouts. Optionally filter by category.",
  inputSchema: {
    category: z
      .enum([
        "Abdominal",
        "Breast",
        "Anorectal",
        "Hernia",
        "Minor Procedures",
        "Endocrine",
        "Pediatric",
      ])
      .optional()
      .describe("Optional category filter."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const items = patientEducation
      .filter((e) => !category || e.category === category)
      .map((e) => ({
        id: e.id,
        category: e.category,
        title: e.title,
        titleAr: e.titleAr,
        summary: e.summary,
        summaryAr: e.summaryAr,
        pdfUrl: e.pdfUrl,
        docxUrl: e.fileUrl,
        articleRoute: e.articleRoute,
      }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});

import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { patientEducation } from "@/data/patient-education";

export default defineTool({
  name: "get_patient_education",
  title: "Get a patient education handout",
  description:
    "Return the full bilingual (English/Arabic) summary and downloadable PDF/DOCX links for one patient education handout by its id. Use list_patient_education to discover ids.",
  inputSchema: {
    id: z.string().describe("The handout id, e.g. 'appendectomy' or 'hidradenitis-suppurativa'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const entry = patientEducation.find((e) => e.id === id);
    if (!entry) {
      return {
        content: [{ type: "text", text: `No handout with id '${id}'.` }],
        isError: true,
      };
    }
    const data = {
      id: entry.id,
      category: entry.category,
      title: entry.title,
      titleAr: entry.titleAr,
      summary: entry.summary,
      summaryAr: entry.summaryAr,
      pdfUrl: entry.pdfUrl,
      docxUrl: entry.fileUrl,
      checklistPdfUrl: entry.checklistPdfUrl,
      articleRoute: entry.articleRoute,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});

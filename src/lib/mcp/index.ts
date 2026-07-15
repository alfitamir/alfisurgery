import { defineMcp } from "@lovable.dev/mcp-js";
import listPatientEducation from "./tools/list-patient-education";
import getPatientEducation from "./tools/get-patient-education";
import listSurgeryUpdates from "./tools/list-surgery-updates";

export default defineMcp({
  name: "alfi-surgery-mcp",
  title: "Alfi Surgery MCP",
  version: "0.1.0",
  instructions:
    "Public read-only tools for Dr Tamer Elalfy's surgical practice site (Alfi Surgery). Browse patient education handouts (bilingual English/Arabic PDFs and DOCX) and curated recent updates in general and laparoscopic surgery for doctors and patients.",
  tools: [listPatientEducation, getPatientEducation, listSurgeryUpdates],
});

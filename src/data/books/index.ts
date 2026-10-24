/** Books written by Dr. Tamer Elalfy. Chapter text lives in src/content/books/<bookId>/*.md and is loaded per chapter. */
export type BookPart = "front" | "chapter" | "back";
export type BookChapter = { id: string; file: string; part: BookPart; title: string; words: number };
export type Book = {
  id: string;
  title: string;
  subtitle: string;
  edition: string;
  year: number;
  author: string;
  language: "en-GB";
  doi: string;
  licence: { name: string; url: string };
  evidenceReviewed: string;
  startChapter: string;
  chapters: BookChapter[];
};

const commonAnalConditionsChapters: BookChapter[] = [
  { id: "open-access-copyright-licence-and-cataloguing-page", file: "01-open-access-copyright-licence-and-cataloguing-page.md", part: "front", title: "Open-Access Copyright, Licence and Cataloguing Page", words: 587 },
  { id: "dedication-clinical-audit-and-how-to-use-this-handbook", file: "02-dedication-clinical-audit-and-how-to-use-this-handbook.md", part: "front", title: "Dedication, Clinical Audit and How to Use This Handbook", words: 232 },
  { id: "whats-new-in-version-2", file: "03-whats-new-in-version-2.md", part: "front", title: "What’s New in Version 2", words: 2204 },
  { id: "chapter-01", file: "04-chapter-01.md", part: "chapter", title: "Chapter 01 — Anatomy and Physiology in Three Minutes", words: 2569 },
  { id: "chapter-02", file: "05-chapter-02.md", part: "chapter", title: "Chapter 02 — Before You Assume Haemorrhoids — The Differential and the Look-Alikes", words: 2705 },
  { id: "chapter-03", file: "06-chapter-03.md", part: "chapter", title: "Chapter 03 — Haemorrhoids — Grading, BPRST, and Non-Surgical Mastery", words: 3041 },
  { id: "chapter-04", file: "07-chapter-04.md", part: "chapter", title: "Chapter 04 — Anal Fissure — Break the Pain–Spasm–Ischaemia Cycle", words: 2262 },
  { id: "chapter-05", file: "08-chapter-05.md", part: "chapter", title: "Chapter 05 — Suppurative Disease — Abscess, Fistula, and Fournier’s Gangrene", words: 2961 },
  { id: "chapter-06", file: "09-chapter-06.md", part: "chapter", title: "Chapter 06 — High-Yield Gap-Fillers for the ER and Primary Care", words: 3027 },
  { id: "chapter-07", file: "10-chapter-07.md", part: "chapter", title: "Chapter 07 — Anal Cancer, Anal Intraepithelial Neoplasia, and Non-Healing Anorectal Lesions", words: 3044 },
  { id: "chapter-08", file: "11-chapter-08.md", part: "chapter", title: "Chapter 08 — Rectal Bleeding and Colorectal Cancer Triage", words: 3212 },
  { id: "chapter-09", file: "12-chapter-09.md", part: "chapter", title: "Chapter 09 — Perianal Crohn’s Disease and Inflammatory Bowel Disease", words: 2640 },
  { id: "chapter-10", file: "13-chapter-10.md", part: "chapter", title: "Chapter 10 — Faecal Incontinence, Constipation, and Pelvic-Floor Disorders", words: 2759 },
  { id: "chapter-11", file: "14-chapter-11.md", part: "chapter", title: "Chapter 11 — Sexually Transmitted Infections, Proctitis, and Anorectal Sexual Health", words: 2351 },
  { id: "chapter-12", file: "15-chapter-12.md", part: "chapter", title: "Chapter 12 — Anorectal Trauma, Sexual Assault, and Foreign Bodies", words: 2496 },
  { id: "chapter-13", file: "16-chapter-13.md", part: "chapter", title: "Chapter 13 — Pregnancy, Postpartum, and Pelvic-Floor Anorectal Disease", words: 2156 },
  { id: "chapter-14", file: "17-chapter-14.md", part: "chapter", title: "Chapter 14 — Paediatric and Adolescent Anorectal Conditions", words: 1915 },
  { id: "chapter-15", file: "18-chapter-15.md", part: "chapter", title: "Chapter 15 — Rare but Important Conditions Non-Surgeons Should Recognise", words: 1988 },
  { id: "chapter-16", file: "19-chapter-16.md", part: "chapter", title: "Chapter 16 — The Safety Net — Red Flags, Drug Pitfalls, and the Triage Matrix", words: 1628 },
  { id: "chapter-17", file: "20-chapter-17.md", part: "chapter", title: "Chapter 17 — Getting the Examination Right — Systematic and Tolerable", words: 1642 },
  { id: "chapter-18", file: "21-chapter-18.md", part: "chapter", title: "Chapter 18 — Nursing and Multidisciplinary Team Excellence", words: 1648 },
  { id: "chapter-19", file: "22-chapter-19.md", part: "chapter", title: "Chapter 19 — Synthesis — Master Comparison Table, Capstone Case, and Rapid-Fire Rules", words: 1400 },
  { id: "appendix-a", file: "23-appendix-a.md", part: "back", title: "Appendix A — Master Referral Form", words: 366 },
  { id: "appendix-b", file: "24-appendix-b.md", part: "back", title: "Appendix B — Medication Safety Quick Reference", words: 914 },
  { id: "appendix-c", file: "25-appendix-c.md", part: "back", title: "Appendix C — When Not to Do a DRE or Rectal Instrumentation", words: 307 },
  { id: "appendix-d", file: "26-appendix-d.md", part: "back", title: "Appendix D — Post-Procedure Discharge Instructions", words: 1116 },
  { id: "appendix-e", file: "27-appendix-e.md", part: "back", title: "Appendix E — SBAR Handover Templates", words: 742 },
  { id: "appendix-f", file: "28-appendix-f.md", part: "back", title: "Appendix F — Patient Education Pages", words: 1114 },
  { id: "final-quick-reference-section", file: "29-final-quick-reference-section.md", part: "back", title: "Final Quick-Reference Section", words: 923 },
  { id: "consolidated-reference-list", file: "30-consolidated-reference-list.md", part: "back", title: "Consolidated Reference List", words: 1641 },
  { id: "list-of-tables-and-algorithms", file: "31-list-of-tables-and-algorithms.md", part: "back", title: "List of Tables and Algorithms", words: 799 },
  { id: "list-of-recommended-medical-illustrations", file: "32-list-of-recommended-medical-illustrations.md", part: "back", title: "List of Recommended Medical Illustrations", words: 789 },
  { id: "clinical-safety-review-and-final-quality-control-checklist", file: "33-clinical-safety-review-and-final-quality-control-checklist.md", part: "back", title: "Clinical Safety Review and Final Quality-Control Checklist", words: 491 },
];

export const books: Book[] = [
  {
    id: "common-anal-conditions",
    title: "Common Anal Conditions",
    subtitle: "A Practical, Algorithmic Handbook for Non-Surgeons",
    edition: "Version 2.0 — Second Open-Access Clinical Edition",
    year: 2026,
    author: "Dr. Tamer Rushdy Elalfy",
    language: "en-GB",
    doi: "10.5281/zenodo.23605089",
    licence: { name: "CC BY-NC-SA 4.0", url: "https://creativecommons.org/licenses/by-nc-sa/4.0/" },
    evidenceReviewed: "24 October 2026",
    startChapter: "chapter-01",
    chapters: commonAnalConditionsChapters,
  },
];

export const findBook = (id: string) => books.find((book) => book.id === id);
export const bookCounts = (book: Book) => ({
  chapters: book.chapters.filter((c) => c.part === "chapter").length,
  appendices: book.chapters.filter((c) => c.id.startsWith("appendix-")).length,
});
export const readingMinutes = (words: number) => Math.max(1, Math.round(words / 200));

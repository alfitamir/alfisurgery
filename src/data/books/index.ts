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
  language: "en-GB" | "en-US";
  /** Short label printed on the cover, e.g. "Version 2.0" or "First Edition". */
  coverLabel: string;
  openAccess: boolean;
  /** One-sentence search-engine description of the book. */
  summary: string;
  doi?: string;
  licence?: { name: string; url: string };
  copyright?: string;
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
const fromClinicToRecoveryChapters: BookChapter[] = [
  { id: "copyright-and-notices", file: "01-copyright-and-notices.md", part: "front", title: "Copyright and Notices", words: 193 },
  { id: "preface", file: "02-preface.md", part: "front", title: "Preface", words: 423 },
  { id: "about-the-author", file: "03-about-the-author.md", part: "front", title: "About the Author", words: 79 },
  { id: "how-to-use-this-book", file: "04-how-to-use-this-book.md", part: "front", title: "How to Use This Book", words: 619 },
  { id: "abbreviations", file: "05-abbreviations.md", part: "front", title: "Abbreviations", words: 176 },
  { id: "chapter-01", file: "06-chapter-01.md", part: "chapter", title: "Chapter 01 — Conducting a Surgical Consultation and Obtaining Informed Consent", words: 3606 },
  { id: "chapter-02", file: "07-chapter-02.md", part: "chapter", title: "Chapter 02 — Enhanced Recovery After Surgery: Explaining the Pathway to Patients", words: 2380 },
  { id: "chapter-03", file: "08-chapter-03.md", part: "chapter", title: "Chapter 03 — Printed and Digital Patient Education: Closing the Gap Between Clinic and Home", words: 1642 },
  { id: "references-part-1", file: "09-references-part-1.md", part: "chapter", title: "References for Part I", words: 633 },
  { id: "chapter-04", file: "10-chapter-04.md", part: "chapter", title: "Chapter 04 — Gallbladder Removal: Laparoscopic Cholecystectomy", words: 4931 },
  { id: "chapter-05", file: "11-chapter-05.md", part: "chapter", title: "Chapter 05 — Appendicitis and Appendicectomy", words: 4185 },
  { id: "chapter-06", file: "12-chapter-06.md", part: "chapter", title: "Chapter 06 — Groin Hernia Repair: Inguinal and Femoral Hernias", words: 4153 },
  { id: "chapter-07", file: "13-chapter-07.md", part: "chapter", title: "Chapter 07 — Common Anal Conditions: Hemorrhoids, Anal Fissure, and Perianal Abscess and Fistula", words: 3966 },
  { id: "chapter-08", file: "14-chapter-08.md", part: "chapter", title: "Chapter 08 — Pilonidal Disease", words: 3145 },
  { id: "chapter-09", file: "15-chapter-09.md", part: "chapter", title: "Chapter 09 — Benign Breast Disease", words: 3252 },
  { id: "chapter-10", file: "16-chapter-10.md", part: "chapter", title: "Chapter 10 — Breast Cancer Surgery", words: 3856 },
  { id: "chapter-11", file: "17-chapter-11.md", part: "chapter", title: "Chapter 11 — Thyroid and Parathyroid Surgery", words: 3296 },
  { id: "chapter-12", file: "18-chapter-12.md", part: "chapter", title: "Chapter 12 — Salivary Gland Surgery", words: 2732 },
  { id: "chapter-13", file: "19-chapter-13.md", part: "chapter", title: "Chapter 13 — Obesity and Metabolic and Bariatric Surgery: Choosing Treatment and Living Well Afterward", words: 4119 },
  { id: "chapter-14", file: "20-chapter-14.md", part: "chapter", title: "Chapter 14 — Colorectal Surgery and Living with a Stoma", words: 3915 },
  { id: "chapter-15", file: "21-chapter-15.md", part: "chapter", title: "Chapter 15 — Minor Outpatient Procedures under Local Anesthesia", words: 2694 },
  { id: "chapter-16", file: "22-chapter-16.md", part: "chapter", title: "Chapter 16 — Varicose Veins", words: 2722 },
  { id: "chapter-17", file: "23-chapter-17.md", part: "chapter", title: "Chapter 17 — Splenectomy and Living Without a Spleen", words: 2610 },
  { id: "chapter-18", file: "24-chapter-18.md", part: "chapter", title: "Chapter 18 — Diabetes and Diabetes Medicines, Including SGLT2 Inhibitors", words: 2788 },
  { id: "chapter-19", file: "25-chapter-19.md", part: "chapter", title: "Chapter 19 — Lung Disease, Sleep Apnea, and Surgery", words: 2485 },
  { id: "chapter-20", file: "26-chapter-20.md", part: "chapter", title: "Chapter 20 — Heart Disease, High Blood Pressure, and Surgery", words: 2561 },
  { id: "chapter-21", file: "27-chapter-21.md", part: "chapter", title: "Chapter 21 — Corticosteroids and Other Immunosuppressive Medicines", words: 2160 },
  { id: "chapter-22", file: "28-chapter-22.md", part: "chapter", title: "Chapter 22 — Anticoagulants and Antiplatelet Medicines", words: 2212 },
  { id: "chapter-23", file: "29-chapter-23.md", part: "chapter", title: "Chapter 23 — GLP-1 and GIP/GLP-1 Receptor Agonists: Weight-Loss and Diabetes Injections", words: 2213 },
  { id: "chapter-24", file: "30-chapter-24.md", part: "chapter", title: "Chapter 24 — Older Adults: Frailty, Delirium, and Goals of Care", words: 2199 },
  { id: "chapter-25", file: "31-chapter-25.md", part: "chapter", title: "Chapter 25 — Children and Young People", words: 2282 },
  { id: "chapter-26", file: "32-chapter-26.md", part: "chapter", title: "Chapter 26 — Liver Disease, Kidney Disease, Sickle Cell Disease, and Biologic Therapy", words: 1670 },
  { id: "chapter-27", file: "33-chapter-27.md", part: "chapter", title: "Chapter 27 — Smoking, Alcohol, and Medicine Reconciliation", words: 1179 },
  { id: "chapter-28", file: "34-chapter-28.md", part: "chapter", title: "Chapter 28 — Resuming Intimacy After Surgery", words: 599 },
  { id: "chapter-29", file: "35-chapter-29.md", part: "chapter", title: "Chapter 29 — Driving, Flying, Exercise, and Return to Work: Evidence-Based Readiness Criteria", words: 1200 },
  { id: "appendix-a", file: "36-appendix-a.md", part: "back", title: "Appendix A — Personal Discharge Instruction Card", words: 290 },
  { id: "appendix-b", file: "37-appendix-b.md", part: "back", title: "Appendix B — Questions You May Want to Ask Your Surgeon", words: 273 },
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
    coverLabel: "Version 2.0",
    openAccess: true,
    summary: "Free open-access handbook for emergency physicians, GPs, medical specialists and nurses on recognising and managing common anal conditions.",
    doi: "10.5281/zenodo.23605089",
    licence: { name: "CC BY-NC-SA 4.0", url: "https://creativecommons.org/licenses/by-nc-sa/4.0/" },
    evidenceReviewed: "24 October 2026",
    startChapter: "chapter-01",
    chapters: commonAnalConditionsChapters,
  },
  {
    id: "from-clinic-to-recovery",
    title: "From Clinic to Recovery",
    subtitle: "A Practical Guide to Patient Counseling, Informed Consent, and Recovery in General Surgery",
    edition: "First Edition — complete pilot manuscript",
    year: 2026,
    author: "Dr. Tamer Rushdy Elalfy",
    language: "en-US",
    coverLabel: "First Edition",
    openAccess: false,
    summary: "A practical guide for surgeons, residents and nurses on surgical consultation, informed consent, enhanced recovery and patient guides for common general surgery operations.",
    copyright: "© 2026 Tamer Rushdy Elalfy. All rights reserved.",
    evidenceReviewed: "2026",
    startChapter: "chapter-01",
    chapters: fromClinicToRecoveryChapters,
  },
];

export const findBook = (id: string) => books.find((book) => book.id === id);
export const bookCounts = (book: Book) => ({
  chapters: book.chapters.filter((c) => c.id.startsWith("chapter-")).length,
  appendices: book.chapters.filter((c) => c.id.startsWith("appendix-")).length,
});
export const readingMinutes = (words: number) => Math.max(1, Math.round(words / 200));

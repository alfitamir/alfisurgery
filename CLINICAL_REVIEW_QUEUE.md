# Clinical and compliance review queue

This queue records items found during discovery. Nothing below has been silently corrected.

## High priority: clinical claims requiring author review

- **File/location:** `src/data/blog-articles.ts`, imported article `id: 228` (laparoscopic cholecystectomy), English and Arabic HTML.
  **Concern:** The article contains many numerical estimates, recurrence/failure percentages, complication rates, fasting and admission timing, activity restrictions, medication/pregnancy/breastfeeding statements, and absolute-sounding claims such as “the only permanent cure.” The source is mixed-language WordPress HTML and the figures are not accompanied by a structured reference list in the inspected module.
  **Suggested source:** Author-supplied current hospital protocol plus verifiable guidance from an appropriate current surgical/gastroenterology authority (for example NICE, SAGES, EASL, ACS, or ERAS where applicable). Dr. Elalfy must decide the final clinical wording and references.

- **File/location:** `src/data/blog-articles.ts`, all imported WordPress articles.
  **Concern:** Legacy HTML includes source-specific formatting, occasional mixed Arabic/English paragraphs, imported image URLs, and statements that may be time-sensitive or context-dependent. It must not be treated as a ready-to-translate clinical source without author review.
  **Suggested source:** Dr. Elalfy’s current approved patient handouts and the original cited guideline/study for each claim.

- **File/location:** `src/data/patient-education.ts` and imported DOCX/PDF asset metadata.
  **Concern:** The guide summaries and downloadable handouts are clinical source material. The revamp must preserve facts, doses, indications, risks, and recommendations exactly until the author reviews any proposed plain-language rewrite.
  **Suggested source:** The corresponding current hospital-approved handout and treating-team instructions.

- **File/location:** `src/lib/site-articles.functions.ts`, AI drafting and translation prompts.
  **Concern:** The prompts contain clinical guardrails, but AI-generated drafts/translations can still introduce or alter medical meaning. Every AI-generated edition must remain marked as pending clinical/language review until explicitly approved.
  **Suggested source:** Author review against the source edition and cited primary/guideline sources.

## High priority: compliance review

- **File/location:** `src/components/PatientComments.tsx`, the visible “98% recommend” statement and external patient-review/testimonial section.
  **Concern:** The brief explicitly requires retaining the content while flagging it. Confirm that the rating, sample size, source attribution, wording, consent, and presentation comply with applicable medical-advertising rules in Saudi Arabia and Egypt.
  **Suggested source:** Current Saudi and Egyptian healthcare advertising/endorsement requirements and the underlying platform review record.

- **File/location:** Public comments flow and database policies.
  **Concern:** The UI performs client-side validation and a local-storage one-minute throttle, but discovery did not yet verify server-side rate limiting, spam controls, moderation-before-publication, or RLS policies. The public query should not expose hidden/unmoderated comments.
  **Suggested source:** Supabase RLS/policy inspection and the author’s approved moderation/privacy process.

## Translation and localization review

- **File/location:** `src/routes/__root.tsx` and language provider/dictionaries.
  **Concern:** The root metadata includes the Arabic app title `دليل المريض` in the global shell, including the English edition. Urdu is configured RTL but the root shell only switches direction for Arabic. Some content uses source-language fallback behavior, so “100% in the selected edition” is not yet established.
  **Suggested action:** Fix the language architecture in code, then have native-language reviewers spot-check each edition.

- **File/location:** All future AI-translated patient content.
  **Concern:** Natural patient vocabulary, culturally appropriate examples, script direction, and clinical terminology require native-language review. Do not present AI translations as clinically approved.
  **Suggested action:** Mark every AI-translated item “pending clinical language review” until signed off; create a terminology glossary for each language.

## Evidence and asset review

- **File/location:** Imported WordPress article HTML and asset references.
  **Concern:** Some images point to external WordPress hosting and have empty or insufficient alt text. No identifiable patient photos may be introduced. Every retained third-party asset needs source, author, license, and link attribution.
  **Suggested action:** Audit each image; replace unsafe/unlicensed assets with original illustrations or approved open-licensed sources and record them in `ATTRIBUTIONS.md`.

- **File/location:** Any proposed new statistics, guideline claims, structured-data claims, or infographic copy.
  **Concern:** The brief prohibits invented statistics, references, and guidelines.
  **Suggested action:** Require a verifiable source or omit the claim; keep unsupported concerns in this queue.

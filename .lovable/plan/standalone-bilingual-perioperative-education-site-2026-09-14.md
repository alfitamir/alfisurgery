# Standalone bilingual perioperative education site

## Goal
Transform the existing “Understand your operation” content into a dedicated, patient-first bilingual experience at `/patients` and `/ar/patients`, while keeping it connected to the doctor’s main website.

## What will change
- Rebuild both patient pages as a coherent standalone mini-site rather than a WhatsApp information page.
- Move the complete operation library into these pages: all categories, 21 procedures, bilingual summaries, printable PDFs, DOCX files, checklists, and the HS article.
- Replace the large operation section on the main English and Arabic homepages with a compact visual invitation linking to the new patient site, avoiding duplicated content.
- Add clear patient navigation: home, choose an operation, before surgery, after surgery, warning signs, and language switch.
- Create a bright, reassuring illustration system using colorful custom cartoon scenes for the patient journey and operation categories. Imagery will be friendly and medically respectful, not childish or anatomically alarming.
- Add category browsing and search so patients can quickly locate an operation.
- Turn each operation into an easy visual card with a short overview, quick-summary popup, printable handout, editable document, and checklist/article links where available.
- Preserve the current general preparation, recovery guidance, urgent warning signs, clinic contact, and medical disclaimer.

## Visual direction
- Warm clinical editorial style: emerald trust colors balanced with coral, sky, yellow, and soft neutral surfaces.
- Rounded but controlled illustration panels, large readable type, generous spacing, and clear color coding for preparation, procedure, recovery, and urgent help.
- Arabic layout will be genuinely right-to-left with equivalent hierarchy and artwork placement.
- Mobile-first controls and cards, with desktop layouts expanding into an illustrated guide rather than a dense directory.

## Technical details
- Reuse `patient-education.ts`, `patient-education-summaries.ts`, the existing downloadable assets, and the summary dialog.
- Add dedicated reusable patient-site components and shared bilingual labels to prevent the English and Arabic pages drifting apart.
- Generate and store a cohesive set of original cartoon illustrations in project assets.
- Keep routes under TanStack Start and add unique metadata for each patient page.
- Verify search, filters, dialogs, downloads, language switching, keyboard access, and layouts on phone and desktop.

## Scope boundary
- This remains part of the current deployed project under dedicated patient URLs; it does not create a separate domain or a second Lovable project.

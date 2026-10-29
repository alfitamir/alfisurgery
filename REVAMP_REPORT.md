# Alfi Surgery patient-friendly revamp — Phase 0 discovery report

**Branch:** `revamp/patient-friendly-v1`  
**Repository:** `alfitamir/alfisurgery`  
**Public origin reviewed:** `https://alfisurgery.com`  
**Discovery date:** 2026-10-29

## Scope and safety boundary

This pass is discovery only. It does not rewrite medical content, change clinical recommendations, publish content, alter the database, or change the GitHub/Lovable/Cloudflare deployment path. The working tree was clean when the branch was created. All existing clinical wording is treated as author-controlled content and requires review before any rewrite or translation is promoted.

## Repository and deployment findings

The app is not a plain Vite SPA. It is a TanStack Start application running through Vite, React 19, TanStack Router/Start, Nitro, and the Lovable Vite configuration. The project includes Cloudflare/Wrangler configuration and a Lovable project descriptor. The README states that Lovable commits back to GitHub and that changes pushed to `main` sync to Lovable. The current discovery work is isolated on the requested feature branch; no hosting configuration was changed.

The repository contains both Supabase integration code and Drizzle configuration. `drizzle/schema.ts` is intentionally blank, while the effective database contract is represented by generated Supabase types and server functions. The observed tables are `site_articles`, `patient_comments`, `doctor_posts`, `site_stats`, and `user_roles`; the observed role enum is `admin | moderator | user`. Public article reads go through server functions and only select published rows. Admin article writes and AI drafting/translation/revision are server functions protected by Supabase auth plus an `has_role(..., 'admin')` check. Admin routes are marked `ssr: false` and redirect unauthenticated users to `/auth`.

The current build and deploy conventions are therefore important constraints. The safest implementation path is to preserve TanStack Start and its existing server entry, preserve the Lovable Vite wrapper, preserve Supabase server functions/RLS assumptions, and make changes in small reversible commits. Replacing the stack or introducing a separate deployment pipeline would violate the project brief.

## Routing, language, and content model

There are 36 route files. The main public route families are the home/profile/patient/prevention/articles/posts/videos/research/publications/teaching/updates/contact pages, operation guides, two patient-education articles, and two books with chapter routes. Arabic has dedicated `/ar`, `/ar/patients`, and `/ar/medical-questions` routes. Most other language editions are selected through the root `lang` search parameter, retained globally by the root router middleware.

The seven configured language codes are `ar`, `en`, `ur`, `hi`, `bn`, `tl` (Filipino), and `ta`. Arabic and Urdu are RTL. The root shell currently sets RTL only for Arabic; Urdu is configured as RTL in the language list but is not reflected by the root-shell direction logic. The root metadata includes an Arabic app title (`دليل المريض`) even when the edition is English. Translation dictionaries exist for Arabic, Urdu, Hindi, Bengali, Filipino, and Tamil UI strings, but the architecture still permits source-language fallbacks and mixed-language content.

The main patient guide collection contains 22 operation/condition entries across seven categories: Abdominal, Breast, Anorectal, Hernia, Minor Procedures, Endocrine, and Pediatric. The imported article collection contains 41 typed WordPress-derived articles. The books contain 70 Markdown files across the two professional-audience books. Patient guides are backed by imported DOCX/PDF assets; articles are predominantly imported HTML strings and typed article modules; published admin articles are stored in `site_articles` with one edition object per language where available.

The generated route manifest covers the principal public route patterns but is not a full manifest of every concrete article/chapter URL. The sitemap route emits many query-string language URLs and the live sitemap also exposes both path-based Arabic routes and legacy `?lang=xx` URLs. A path-based seven-edition migration therefore needs an explicit redirect and canonical/hreflang plan before implementation.

## Existing article and posting convention

The existing convention is a dedicated route and typed data module for bundled articles, with HTML content imported from the author's prior WordPress material. A second database-backed path is used for doctor-managed articles in `site_articles`, edited from `/admin/articles`. The admin editor accepts a title, HTML body, source language, category, status, and language editions. Server-side sanitization is applied before saving. Gemini/Lovable AI calls are server-side and restricted to authenticated administrators. This convention should be retained; the article template is the correct insertion point for metadata, reviewer/date fields, warning callouts, related links, print/download styles, and QR generation.

## Current security/compliance observations

The admin route is not merely hidden: the authenticated route checks Supabase `getUser`, and the article functions check the admin role server-side. This is a positive control that must be preserved and tested against direct requests.

The public comments component currently reads the latest 50 rows and inserts directly into `patient_comments` after client-side length/contact checks and a one-minute local-storage throttle. The UI renders comment fields as React text nodes, which avoids direct HTML injection in this component, but the discovery pass did not establish server-side rate limiting, CAPTCHA/spam controls, moderation-before-publication behavior, or database RLS policies. These must be verified in the Supabase project before claiming the feature is safe. The presence of a `hidden` field and an admin comments page indicates a moderation model exists in some form, but the public query does not visibly filter hidden comments in the component code and needs server/RLS verification.

No secret values were printed or committed during discovery. The checked-in `.env` contains variable names for Supabase URL/project/key configuration; whether the values are publishable-only and whether any secret is exposed in a client bundle requires a production bundle scan and deployment-environment check in the next phase.

The public comments UI contains the compliance-sensitive `98%` recommendation statement and an external-review/testimonial section. Per the brief, this has not been removed or altered. It is queued for author/legal/compliance confirmation for Saudi Arabia and Egypt.

## No-JavaScript and live-site observations

The live origin responds with server-generated HTML and a live XML sitemap. The sitemap contains the expected public sections, guides, articles, and book chapters, but it also includes a large legacy/query-string URL set. The repository has a TanStack Start SSR setup, so the target is technically achievable without replacing the framework. The next implementation phase must measure representative raw responses after every rendering change, including a dynamic article, a guide, an unknown route, and both RTL and LTR editions.

## Lighthouse baseline

Lighthouse 13.6.0 was run against the existing development server on eight representative routes: home, patient hub, article index, and cholecystectomy guide in English and Arabic/query-string Arabic. Scores are rounded Lighthouse category scores.

| Route | Performance | Accessibility | Best practices | SEO |
|---|---:|---:|---:|---:|
| `/` | 44 | 100 | 96 | 100 |
| `/patients` | 53 | 97 | 96 | 100 |
| `/articles` | 5 | 100 | 96 | 100 |
| `/guides/cholecystectomy` | 63 | 100 | 96 | 100 |
| `/?lang=ar` | 39 | 100 | 96 | 100 |
| `/ar/patients` | 54 | 100 | 96 | 100 |
| `/articles?lang=ar` | 14 | 100 | 96 | 100 |
| `/guides/cholecystectomy?lang=ar` | 66 | 100 | 96 | 100 |

These are development-server baselines, not a claim about production Core Web Vitals. The article indexes are the clear first performance target. The existing build passed, but `npm run lint` reports 202 existing Prettier errors across generated types and existing source files; the baseline should be separated from newly introduced errors rather than bulk-formatting the project.

## Inventory

The generated inventory contains 609 rows covering seven language editions of the public page set, 22 guides, 41 imported patient articles across edition-status rows, and 70 professional book Markdown files. It records path, title, section, audience, language, word-count estimate, image/reference indicators, translation status, and issues.

See [`article-inventory.csv`](article-inventory.csv).

## Available skills/tools selected for this work

The relevant pre-installed guidance selected for this project is: Webdev for the existing TanStack/Lovable workflow and preview discipline; Webdev SEO for SSR/initial HTML, metadata, canonical URLs, sitemap and robots behavior; Deep Research for verifiable clinical/compliance sources; ImageGen for original patient illustrations and deterministic infographic routing; Image Processing for inspecting or converting supplied assets; Office/Office Documents for DOCX/PDF/CSV inspection; Built-in LLM Models only if bulk language QA or classification is later required; QR generation will use a local build-time SVG library rather than a remote API; Chromium/Lighthouse will be used for browser/performance checks; Git and the existing `gh` CLI will be used for branch/PR operations; the existing Lovable/TanStack/Supabase/Cloudflare toolchain will remain authoritative for build and deploy.

The project-specific medical-posting, Egyptian-Facebook-post-style, and LinkedIn-evidence-series skills are not used for this website revamp because this pass is not creating social posts. Slides, trip, Instagram, Taplio, triggers, payment, handoff, and game-asset workflows are not applicable to the current scope.

## Recommended implementation order

1. Lock the route and canonical strategy while preserving old URLs with redirects; update the route manifest and sitemap design together.
2. Add a shared language/RTL/metadata layer and verify initial HTML, 404 status, hreflang, and Googlebot responses.
3. Add shared patient safety/disclaimer/warning-callout primitives and an article metadata/reviewer model without changing medical facts.
4. Pilot one operation category in all seven languages, with translations marked pending clinical language review.
5. Add build-time QR generation, image attribution/caption handling, search/indexing, and performance improvements.
6. Verify comments/RLS/moderation/rate limits and scan client bundles for secrets before any PR is opened.

No content bulk edit or deployment action should begin until the author approves this route/content pilot strategy and the clinical review queue is acknowledged.

## Foundation batch implemented after discovery

The first code batch on this branch is intentionally limited to low-risk technical controls:

- Added a shared RTL helper and corrected the root document direction for Urdu as well as Arabic.
- Removed the global Arabic app title from the shell metadata.
- Corrected article pages that were incorrectly defaulting to Arabic solely because their path began with `/articles`.
- Stopped automatically appending `?lang=en` to every URL; existing explicit query-string language compatibility remains.
- Added a visible translated urgent-care callout to every operation guide using the existing approved safety copy.
- Made the public comments privacy notice visible and filtered public reads to `hidden = false`.

The build passes after this batch, and the changed files pass targeted ESLint. A raw SSR check shows meaningful initial HTML for the home and guide routes. The legacy local article renderer still contains hard-coded Arabic presentation for much of the imported WordPress collection; this is a known Phase 2 language-matching item and has not been silently rewritten.

The following requested areas remain intentionally open for the next batches: path-based seven-language route migration with redirects; complete per-language UI/content audit; article/guide QR generation with a lockfile-compatible local library; structured data expansion; full search/index; image attribution and infographic production; server-side comment rate limiting/RLS verification; and production deployment. They require additional code and, for patient content, author/native-language/clinical review before release.

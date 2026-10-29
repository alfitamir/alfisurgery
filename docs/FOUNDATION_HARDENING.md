# Foundation hardening

This change set adds a small, testable client-side validation layer for public patient comments and a repeatable foundation check.

## Included

- Shared comment validation preserves the existing limits: nickname 2–40 characters, body 3–1,000 characters, and rejection of apparent phone numbers/email addresses.
- The one-minute browser cooldown is extracted into a pure helper. Local storage is treated as optional so privacy modes or browser settings do not crash submission.
- Public reads continue to filter `hidden = false`; this is defense-in-depth, not an authorization boundary.
- A lightweight foundation script checks RTL language metadata and comment validation/cooldown behavior.
- GitHub Actions runs the foundation check on pull requests and relevant pushes.

## Important security boundary

Browser validation and local-storage cooldowns can be bypassed. Before treating public comments as production-safe, verify Supabase Row Level Security and grants for `patient_comments`, ensure anonymous users can only read approved public rows and cannot set moderation fields, and add server-side rate limiting/spam controls. The client-side `.eq("hidden", false)` filter alone does not protect hidden rows if database policies allow them to be read.

## Clinical and editorial boundary

This change does not rewrite medical advice, translations, testimonials, ratings, or other clinical/editorial claims. The visible “98% recommend” claim and its source/sample size still require author and applicable advertising/compliance review. Translated patient-facing content should not be described as clinically reviewed unless that review has actually occurred.

## Validation status

The foundation check is intended to run with Bun. The GitHub Actions job does not claim to validate the full application build, database policies, deployed environment, or clinical accuracy. Those require separate checks and access to the relevant environment.

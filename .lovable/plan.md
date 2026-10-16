# Dr. Tamer's posts + Patient comments on the homepage

## 1. "Dr. Tamer's posts on the latest surgical updates"
- New homepage card linking to a new page `/posts`, with a badge: "Updated weekly" (translated in all 7 languages).
- The page shows each post in full: full text + image + post date. No outbound links. Newest first.
- Each post shows in the selected site language as a clearly labelled automatic translation, with a "show original" toggle.

### Sources
- **Old posts:** you download your LinkedIn data archive (LinkedIn > Settings > Data privacy > Get a copy of your data > Posts/Shares + media) and upload it here. I import all posts and images once.
- **New posts:** pulled automatically every week from your Lovable autoposting project (posts and images it publishes).
- Duplicates (same post in both sources) are skipped.

### Weekly automatic update
- A scheduled weekly job fetches new posts from the autoposting project, saves text and image, translates into the 7 languages, and records the post date.
- If translation credits run out, the job pauses and posts still appear in their original language.

## 2. Patient impressions & comments
- New homepage section "Patient impressions": a short form (nickname + comment) and a list of recent comments with nickname and date, visible to everyone immediately.
- Safety: no phone/email fields; a note asking patients not to share private medical details; basic spam limits (length, rate).
- A private admin page for you (sign-in required) to delete inappropriate comments.
- Later: a "source" field so collected past reviews from the web can be added with their original date and source name.

## Medical safety
- Posts keep a footer note: educational content; the treating team's instructions take priority.

## Technical details
- Tables: `doctor_posts` (source, external_id unique, posted_at, original_text, original_lang, image_path, translations jsonb), `patient_comments` (nickname, body, created_at, source, hidden). Public read via narrow anon SELECT; comment insert through a validated server function; admin delete via `user_roles` + `has_role`.
- Images stored in a public storage bucket.
- Weekly sync: pg_cron calls `/api/public/sync-posts` (secret-verified), single-flight lock, bounded batch, idempotent on external_id. Autoposting data read via a small read-only endpoint added to the autoposting project, protected by a shared secret.
- Translation via Lovable AI, done once per post and stored.
- Archive import: parse uploaded LinkedIn export (Shares.csv + media) into `doctor_posts`.
- New routes `/posts` and `/admin/comments`; homepage card + comments section in `ThreeSectionHome`; head metadata per route; sitemap updated.

## What I need from you
- The LinkedIn data archive file (for old posts).
- Confirmation of which Lovable project is the autoposting one.
- Nothing is published until you say "Publish".

# Finish the remaining open tasks

## What I can finish now
1. **Article translations (draft):** Finish the six-language editions of the pilonidal, haemorrhoid and hernia articles (9001–9003) and the five missing editions of the gallstone-alternatives article (9005). Link each one to its reading page in every language.
2. **Remaining content translations, in batches:** The 41 imported articles, 20 surgical updates, 13 research summaries and 2 patient articles. This is very large. I'll do it over several sessions, with the most-visited articles first.
3. **Comment moderation:** Add a page, visible only to the admin, where you can hide or delete patient comments.
4. **Checks:** Open sample pages in each language on phone and computer. The new translations stay in the preview until you say "publish".

Every translation is labelled as unreviewed. None will be marked as checked by a doctor.

## Waiting on you (I can't do these)
- Sign in once at /admin/articles with your Google account so you become the admin.
- Native-speaker medical review for each language. You need to supply the reviewers.
- Your LinkedIn data export file for the old posts.
- A posts feed and shared key in the Post Sequence Planner project.
- Your decision on translating the two books.

## Technical details
- Article editions are added to the existing typed edition modules and registered in the article collection.
- Comment moderation uses an admin-only server function that checks `has_role`. It adds a `hidden` flag so public comment reads leave hidden comments out.

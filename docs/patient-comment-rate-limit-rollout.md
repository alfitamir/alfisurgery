# Patient-comment rate-limit rollout

## What this changes

- Public comment submissions go through `POST /api/public/patient-comments`.
- The Cloudflare Worker validates the payload and same-origin browser requests.
- Per-IP identifiers are HMAC-SHA-256 digests keyed with the server-only Supabase service-role key; raw IP addresses are not stored.
- A database RPC enforces a maximum of 1 submission per 60-second window and 5 per 15-minute window. The database upsert is atomic across Worker instances.
- If the rate-limit RPC or server credential is unavailable, the endpoint fails closed and does not insert a comment.
- Migration `0005` creates the rate-limit storage/function. Migration `0006` separately revokes anonymous/authenticated direct inserts to close the bypass.

## Required runtime configuration

The Cloudflare Worker must have the existing server-only variables configured:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY` — a Supabase service-role secret. Configure it as a Worker secret, never as a `VITE_*` variable and never in committed `.env` files.

The repository's server-side Supabase client already expects these names. This change introduces no additional secret. The public `VITE_SUPABASE_PUBLISHABLE_KEY` is not sufficient for this endpoint because the database rate-limit RPC and final insert are restricted to `service_role`.

## Safe rollout order

Do not apply these migrations automatically from CI or as part of deployment.

1. Configure/verify `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in the actual Cloudflare Worker environment. Do not paste the secret into GitHub issues, PR comments, or chat.
2. Apply migration `0005_patient_comment_rate_limits.sql` to the intended Supabase project. It creates the limiter but leaves current comment inserts untouched.
3. Deploy the application containing the endpoint and browser client change. Verify a valid comment succeeds, a second immediate submission receives HTTP 429, and the endpoint returns a safe 503 if the limiter cannot be reached.
4. Only after the new endpoint is live and verified, apply migration `0006_restrict_direct_patient_comment_inserts.sql`. This removes the public INSERT policy and grants so browser clients cannot bypass the endpoint.
5. Verify a comment can still be submitted and moderated. If rollback is needed after step 4, restore the endpoint before changing database permissions; do not re-enable public direct inserts as a routine rollback.

## Operational notes

- The rate limit is keyed to Cloudflare's `CF-Connecting-IP` header. The endpoint deliberately fails closed if the header is missing rather than trusting spoofable `X-Forwarded-For`.
- Database rows contain only HMAC digests and counters, not raw IP addresses or comment text. Each visitor/window bucket reuses one row.
- The rate limiter is not a spam-moderation system. Continue moderating comments and review abuse thresholds if real traffic indicates they are too strict or too permissive.
- No production secrets, migrations, policy changes, or deployments are performed by this pull request.

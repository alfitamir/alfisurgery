import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { isArabicPath, isRtl, siteLanguages } from "../src/lib/site-language.ts";
import {
  isPatientCommentCooldownActive,
  isValidPatientComment,
  PATIENT_COMMENT_COOLDOWN_MS,
} from "../src/lib/patient-comments-safety.ts";

assert.equal(isRtl("ar"), true);
assert.equal(isRtl("ur"), true);
assert.equal(isRtl("en"), false);
assert.equal(isArabicPath("/ar"), true);
assert.equal(isArabicPath("/ar/patients"), true);
assert.equal(isArabicPath("/articles"), false);
assert.equal(isArabicPath("/articles/9005"), false);
assert.equal(isArabicPath("/"), false);
for (const file of ["src/routes/__root.tsx", "src/components/SiteLanguageProvider.tsx"]) {
  assert.doesNotMatch(
    readFileSync(file, "utf8"),
    /startsWith\("\/ar"\)/,
    `${file} must use isArabicPath`,
  );
}
assert.deepEqual(
  siteLanguages.map((language) => language.code).sort(),
  ["ar", "bn", "en", "hi", "ta", "tl", "ur"],
);

assert.equal(isValidPatientComment("Sam", "The team was kind."), true);
assert.equal(isValidPatientComment("S", "The team was kind."), false);
assert.equal(isValidPatientComment("Sam", "OK"), false);
assert.equal(isValidPatientComment("Sam", "Call me at +1 555 123 4567"), false);
assert.equal(isValidPatientComment("sam@example.com", "The team was kind."), false);
assert.equal(isValidPatientComment("Sam", "x".repeat(1001)), false);

const now = 1_800_000_000_000;
assert.equal(isPatientCommentCooldownActive(now - 30_000, now), true);
assert.equal(isPatientCommentCooldownActive(now - PATIENT_COMMENT_COOLDOWN_MS, now), false);
assert.equal(isPatientCommentCooldownActive("not-a-timestamp", now), false);
assert.equal(isPatientCommentCooldownActive(null, now), false);

const commentClient = readFileSync("src/components/PatientComments.tsx", "utf8");
const commentEndpoint = readFileSync("src/routes/api/public/patient-comments.ts", "utf8");
const limiterMigration = readFileSync("drizzle/migrations/0005_patient_comment_rate_limits.sql", "utf8");
const policyMigration = readFileSync("drizzle/migrations/0006_restrict_direct_patient_comment_inserts.sql", "utf8");

assert.match(commentClient, /fetch\("\/api\/public\/patient-comments"/);
assert.doesNotMatch(commentClient, /from\("patient_comments"\)\.insert/);
assert.match(commentEndpoint, /cf-connecting-ip/);
assert.match(commentEndpoint, /HMAC/);
assert.match(commentEndpoint, /consume_patient_comment_rate_limit/);
assert.match(commentEndpoint, /jsonError\(429/);
assert.match(commentEndpoint, /Fail closed/);
assert.match(limiterMigration, /SECURITY DEFINER/);
assert.match(limiterMigration, /REVOKE ALL ON FUNCTION/);
assert.doesNotMatch(limiterMigration, /REVOKE INSERT ON TABLE public\.patient_comments/);
assert.match(policyMigration, /DROP POLICY IF EXISTS "Public add comments"/);
assert.match(policyMigration, /REVOKE INSERT ON TABLE public\.patient_comments FROM anon, authenticated/);

console.log("Foundation checks passed.");

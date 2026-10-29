import assert from "node:assert/strict";
import { isRtl, siteLanguages } from "../src/lib/site-language.ts";
import {
  isPatientCommentCooldownActive,
  isValidPatientComment,
  PATIENT_COMMENT_COOLDOWN_MS,
} from "../src/lib/patient-comments-safety.ts";

assert.equal(isRtl("ar"), true);
assert.equal(isRtl("ur"), true);
assert.equal(isRtl("en"), false);
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

console.log("Foundation checks passed.");

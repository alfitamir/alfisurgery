export const PATIENT_COMMENT_COOLDOWN_MS = 60_000;

const contactPattern = /(\+?\d[\d\s-]{7,}\d)|(\S+@\S+\.\S+)/;

export function isValidPatientComment(nickname: string, body: string): boolean {
  const name = nickname.trim();
  const message = body.trim();

  return (
    name.length >= 2 &&
    name.length <= 40 &&
    message.length >= 3 &&
    message.length <= 1000 &&
    !contactPattern.test(message) &&
    !contactPattern.test(name)
  );
}

/**
 * Client-side friction only. This is not a security boundary; enforce
 * abuse controls and publication permissions on the server/database too.
 */
export function isPatientCommentCooldownActive(
  lastCommentAt: string | number | null | undefined,
  now = Date.now(),
): boolean {
  if (lastCommentAt == null || lastCommentAt === "") return false;

  const timestamp = Number(lastCommentAt);
  if (!Number.isFinite(timestamp)) return false;

  return now - timestamp < PATIENT_COMMENT_COOLDOWN_MS;
}

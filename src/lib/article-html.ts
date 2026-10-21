/** Removes active content from article HTML so pasted or AI-written text can be displayed safely. */
export function sanitizeArticleHtml(html: string) {
  return html
    .replace(/<\s*(script|style|iframe|object|embed|form|input|button|textarea|select|meta|link|base)\b[\s\S]*?(<\s*\/\s*\1\s*>|\/?>)/gi, "")
    .replace(/\s+on[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/\s+(href|src)\s*=\s*("|')\s*(javascript|vbscript|data):[^"']*\2/gi, "")
    .replace(/\s+style\s*=\s*("[^"]*"|'[^']*')/gi, "");
}

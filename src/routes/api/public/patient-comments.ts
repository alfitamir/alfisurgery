import { createFileRoute } from "@tanstack/react-router";
import { isValidPatientComment } from "@/lib/patient-comments-safety";

const MAX_BODY_BYTES = 16_384;
const RATE_LIMITS = [
  { label: "minute", seconds: 60, maximum: 1, retryAfter: 60 },
  { label: "quarter-hour", seconds: 900, maximum: 5, retryAfter: 900 },
] as const;

function jsonError(status: number, error: string, retryAfter?: number): Response {
  const headers = new Headers({ "Cache-Control": "no-store" });
  if (retryAfter !== undefined) headers.set("Retry-After", String(retryAfter));
  return Response.json({ error }, { status, headers });
}

async function keyedHash(secret: string, value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return Array.from(new Uint8Array(signature), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export const Route = createFileRoute("/api/public/patient-comments")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const origin = request.headers.get("origin");
        if (origin) {
          try {
            if (new URL(origin).origin !== new URL(request.url).origin) {
              return jsonError(403, "Request origin not allowed.");
            }
          } catch {
            return jsonError(403, "Request origin not allowed.");
          }
        }

        const contentType = request.headers.get("content-type") ?? "";
        if (!contentType.toLowerCase().includes("application/json")) {
          return jsonError(415, "Send a JSON request.");
        }

        const contentLength = Number(request.headers.get("content-length") ?? "0");
        if (contentLength > MAX_BODY_BYTES) return jsonError(413, "Comment is too large.");

        let payload: unknown;
        try {
          const raw = await request.text();
          if (new TextEncoder().encode(raw).byteLength > MAX_BODY_BYTES) {
            return jsonError(413, "Comment is too large.");
          }
          payload = JSON.parse(raw);
        } catch {
          return jsonError(400, "Invalid JSON.");
        }

        if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
          return jsonError(400, "Invalid comment.");
        }
        const record = payload as Record<string, unknown>;
        if (typeof record.nickname !== "string" || typeof record.body !== "string") {
          return jsonError(400, "Invalid comment.");
        }

        const nickname = record.nickname.trim();
        const body = record.body.trim();
        if (!isValidPatientComment(nickname, body)) {
          return jsonError(400, "Please check the name and comment.");
        }

        // Cloudflare supplies this header at the Worker edge. Do not trust arbitrary
        // X-Forwarded-For values, which callers can spoof.
        const clientIp = request.headers.get("cf-connecting-ip");
        if (!clientIp) {
          return jsonError(503, "Comment submission is temporarily unavailable.");
        }

        const serviceRoleKey = process.env["SUPABASE_SERVICE_ROLE_KEY"];
        if (!serviceRoleKey || !process.env["SUPABASE_URL"]) {
          // Never log or return credential values.
          return jsonError(503, "Comment submission is temporarily unavailable.");
        }

        try {
          const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
          for (const limit of RATE_LIMITS) {
            const keyHash = await keyedHash(serviceRoleKey, `patient-comments:${limit.label}:${clientIp}`);
            const { data: allowed, error } = await supabaseAdmin.rpc(
              "consume_patient_comment_rate_limit",
              {
                p_key_hash: keyHash,
                p_window_seconds: limit.seconds,
                p_max_requests: limit.maximum,
              },
            );
            if (error || typeof allowed !== "boolean") {
              // Fail closed if the rate-limit database function is unavailable.
              return jsonError(503, "Comment submission is temporarily unavailable.");
            }
            if (!allowed) return jsonError(429, "Please wait before submitting another comment.", limit.retryAfter);
          }

          const { error } = await supabaseAdmin.from("patient_comments").insert({
            nickname,
            body,
            source: "site",
            hidden: false,
          });
          if (error) return jsonError(503, "Comment submission is temporarily unavailable.");

          return Response.json(
            { ok: true },
            { status: 201, headers: { "Cache-Control": "no-store" } },
          );
        } catch {
          // Avoid logging payloads, IP addresses, or credential-related errors.
          return jsonError(503, "Comment submission is temporarily unavailable.");
        }
      },
    },
  },
});

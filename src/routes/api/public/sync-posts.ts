import { createFileRoute } from "@tanstack/react-router";
import { authenticateCronRequest } from "@/integrations/supabase/cron-auth";

// Weekly: pulls posted items from the Post Sequence Planner feed, re-hosts images, translates, stores.
const FEED_URL = "https://post-sequence-planner.lovable.app/api/public/posts-feed";
const LANGS = ["en", "ar", "ur", "hi", "bn", "tl", "ta"] as const;
const MAX_PER_RUN = 10;

type FeedPost = { id: string; posted_at: string; body: string; body_ar?: string | null; image_url?: string | null };

async function translate(text: string, missing: string[]): Promise<Record<string, string>> {
  const key = process.env["LOVABLE_API_KEY"];
  if (!key || missing.length === 0) return {};
  const res = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Lovable-API-Key": key, "X-Lovable-AIG-SDK": "fetch" },
    body: JSON.stringify({
      model: "openai/gpt-6-astra", stream: true, store: false, reasoning: { effort: "low" },
      instructions: "Translate this surgeon's LinkedIn post faithfully for patients. Keep line breaks, hashtags and medical meaning. Do not add advice.",
      input: `Target language codes: ${missing.join(", ")}\n\nPOST:\n${text}`,
      text: { format: { type: "json_schema", name: "translations", strict: true, schema: {
        type: "object", additionalProperties: false, required: missing,
        properties: Object.fromEntries(missing.map((l) => [l, { type: "string" }])),
      } } },
    }),
  });
  if (!res.ok || !res.body) throw Object.assign(new Error(`AI ${res.status}: ${await res.text()}`), { status: res.status });
  const reader = res.body.getReader(); const dec = new TextDecoder(); let buf = "", out = "";
  for (;;) {
    const { done, value } = await reader.read(); if (done) break;
    buf += dec.decode(value, { stream: true });
    const lines = buf.split("\n"); buf = lines.pop() ?? "";
    for (const l of lines) {
      if (!l.startsWith("data:")) continue;
      try { const ev = JSON.parse(l.slice(5)); if (ev.type === "response.output_text.delta") out += ev.delta; } catch { /* keep-alive */ }
    }
  }
  return JSON.parse(out);
}

export const Route = createFileRoute("/api/public/sync-posts")({
  server: { handlers: { POST: async ({ request }) => {
    const denied = await authenticateCronRequest(request);
    if (denied) return denied;
    const feedSecret = process.env["PLANNER_FEED_SECRET"];
    if (!feedSecret) return Response.json({ error: "PLANNER_FEED_SECRET missing" }, { status: 500 });
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // single-flight lock (10 min lease)
    const now = new Date();
    const { data: lock } = await supabaseAdmin.from("site_stats").select("updated_at").eq("key", "posts_sync_lock").maybeSingle();
    if (lock && now.getTime() - new Date(lock.updated_at).getTime() < 600000) return Response.json({ skipped: "running" });
    await supabaseAdmin.from("site_stats").upsert({ key: "posts_sync_lock", visit_count: 0, updated_at: now.toISOString() });

    try {
      const feedRes = await fetch(FEED_URL, { headers: { Authorization: `Bearer ${feedSecret}` } });
      if (!feedRes.ok) return Response.json({ error: `Feed ${feedRes.status}: ${await feedRes.text()}` }, { status: 502 });
      const feed = (await feedRes.json()) as { posts: FeedPost[] };
      const ids = feed.posts.map((p) => `planner:${p.id}`);
      const { data: existing } = await supabaseAdmin.from("doctor_posts").select("external_id").in("external_id", ids.length ? ids : ["-"]);
      const have = new Set((existing ?? []).map((r) => r.external_id));
      const todo = feed.posts.filter((p) => !have.has(`planner:${p.id}`)).slice(0, MAX_PER_RUN);
      let added = 0;
      for (const p of todo) {
        let image: string | null = null;
        if (p.image_url) {
          const img = await fetch(p.image_url);
          if (img.ok) {
            const path = `planner/${p.id}.png`;
            const up = await supabaseAdmin.storage.from("doctor-posts").upload(path, await img.arrayBuffer(), { contentType: img.headers.get("content-type") ?? "image/png", upsert: true });
            if (!up.error) image = supabaseAdmin.storage.from("doctor-posts").getPublicUrl(path).data.publicUrl;
          }
        }
        const text = p.body.replace(/^#\s+/m, "");
        const translations: Record<string, string> = {};
        if (p.body_ar) translations.ar = p.body_ar.replace(/^#\s+/m, "");
        try { Object.assign(translations, await translate(text, LANGS.filter((l) => l !== "en" && !translations[l]))); }
        catch (e) { const s = (e as { status?: number }).status; console.error(e); if (s === 402 || s === 403 || s === 429) { /* store original only; retry translation is not automatic */ } }
        const { error } = await supabaseAdmin.from("doctor_posts").insert({ source: "planner", external_id: `planner:${p.id}`, posted_at: p.posted_at, original_text: text, original_lang: "en", image_url: image, translations });
        if (error) console.error(error); else added++;
      }
      return Response.json({ added, remaining: feed.posts.length - have.size - added });
    } finally {
      await supabaseAdmin.from("site_stats").delete().eq("key", "posts_sync_lock");
    }
  } } },
});

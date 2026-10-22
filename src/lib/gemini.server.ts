import { createClient } from "@supabase/supabase-js";
import { streamText } from "ai";
import type { Database } from "@/integrations/supabase/types";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

/** Read-only database client for public pages (published articles only, enforced by RLS). */
export function publicSupabase(url: string, key: string) {
  return createClient<Database>(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

/** Gemini Pro through Lovable AI (the doctor asked for Gemini Pro). */
export const ARTICLE_MODEL = "google/gemini-3.1-pro-preview";

type GeminiResult = { title: string; content: string; model: string };

function parseArticleJson(text: string) {
  const cleaned = text.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try {
    const parsed = JSON.parse(cleaned.slice(start, end + 1)) as { title?: unknown; content?: unknown };
    return typeof parsed.title === "string" && typeof parsed.content === "string" && parsed.content.trim() ? { title: parsed.title.trim(), content: parsed.content.trim() } : null;
  } catch { return null; }
}

function statusOf(error: unknown) {
  const e = error as { statusCode?: number; status?: number; lastError?: { statusCode?: number } };
  return e?.statusCode ?? e?.status ?? e?.lastError?.statusCode ?? 0;
}

export async function generateWithGemini(lovableApiKey: string, system: string, prompt: string): Promise<GeminiResult> {
  const gateway = createLovableAiGatewayProvider(lovableApiKey, undefined, { baseURL: "https://ai.gateway.lovable.dev/v1" });
  let failure: unknown;
  const result = streamText({
    model: gateway(ARTICLE_MODEL),
    system: `${system}\nReply with one JSON object only: {"title": "...", "content": "..."}.`,
    prompt,
    maxRetries: 0,
    onError: ({ error }) => { failure = error; },
  });
  let text = "";
  try { text = await result.text; } catch (error) { failure = failure ?? error; }
  if (failure || !text) {
    const status = statusOf(failure);
    if (status === 429) throw new Error("الخدمة مشغولة الآن. انتظر دقيقة ثم حاول مرة أخرى.");
    if (status === 402) throw new Error("نفد رصيد الذكاء الاصطناعي في مساحة العمل. يمكن إضافة رصيد من Settings → Plans & credits.");
    if (status === 403) throw new Error("رُفض الطلب من خدمة الذكاء الاصطناعي. لم يُغيَّر أي شيء.");
    console.error("Article AI failed", failure);
    throw new Error("تعذر الحصول على رد من Gemini الآن. حاول مرة أخرى بعد قليل.");
  }
  const parsed = parseArticleJson(text);
  if (!parsed) throw new Error("لم يرجع Gemini نصًا صالحًا للمقال. حاول مرة أخرى.");
  return { ...parsed, model: "Gemini Pro" };
}

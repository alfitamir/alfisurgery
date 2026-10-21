import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

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

type GeminiResult = { title: string; content: string; model: string };

/** Calls the doctor's own Google Gemini account (Google AI Studio key). Tries Pro first, then Flash. */
export async function generateWithGemini(apiKey: string, preferredModel: string | undefined, system: string, prompt: string): Promise<GeminiResult> {
  const models = [...new Set([preferredModel, "gemini-2.5-pro", "gemini-2.5-flash"].filter((m): m is string => !!m))];
  let lastStatus = 0;
  for (const model of models) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,
          responseMimeType: "application/json",
          responseSchema: { type: "OBJECT", properties: { title: { type: "STRING" }, content: { type: "STRING" } }, required: ["title", "content"] },
        },
      }),
    });
    if (res.ok) {
      const json = (await res.json()) as { candidates?: { content?: { parts?: { text?: string }[] }; finishReason?: string }[] };
      const text = json.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";
      try {
        const parsed = JSON.parse(text) as { title?: unknown; content?: unknown };
        if (typeof parsed.title === "string" && typeof parsed.content === "string" && parsed.content.trim()) return { title: parsed.title.trim(), content: parsed.content.trim(), model };
      } catch { /* try the next model */ }
      lastStatus = 502;
      continue;
    }
    lastStatus = res.status;
    const body = await res.text();
    if (res.status === 400 && /api key/i.test(body)) throw new Error("مفتاح Gemini غير صالح. أنشئ مفتاحًا جديدًا من Google AI Studio ثم حدّثه.");
    if (res.status === 401 || res.status === 403) throw new Error("رفض Gemini هذا المفتاح. تأكد أن المفتاح مفعّل لواجهة Gemini API في Google AI Studio.");
    if (![404, 429, 500, 502, 503, 504].includes(res.status)) break;
  }
  if (lastStatus === 429) throw new Error("وصلت إلى حد الاستخدام في حساب Gemini الخاص بك. انتظر دقيقة ثم حاول مرة أخرى.");
  throw new Error("تعذر الحصول على رد صالح من Gemini الآن. حاول مرة أخرى بعد قليل.");
}

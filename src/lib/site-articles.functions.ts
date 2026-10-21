import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import type { SupabaseClient } from "@supabase/supabase-js";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import type { Database } from "@/integrations/supabase/types";
import { generateWithGemini, publicSupabase } from "@/lib/gemini.server";
import { sanitizeArticleHtml } from "@/lib/article-html";
import { languageNamesEnglish, siteLanguageCodes, toSiteArticleRow } from "@/lib/site-articles";

const languageSchema = z.enum(["ar", "en", "ur", "hi", "bn", "tl", "ta"]);
const editionSchema = z.object({ title: z.string().trim().max(300), content: z.string().max(300_000) });
const columns = "id, source_lang, category, status, editions, published_at, updated_at";

async function assertAdmin(supabase: SupabaseClient<Database>, userId: string) {
  const { data, error } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
  if (error || !data) throw new Error("هذا الحساب لا يملك صلاحية إدارة المقالات.");
}

/* ---------- Public reads (published articles only) ---------- */

export const listPublishedSiteArticles = createServerFn({ method: "GET" }).handler(async () => {
  const db = publicSupabase(process.env["SUPABASE_URL"]!, process.env["SUPABASE_PUBLISHABLE_KEY"]!);
  const { data, error } = await db.from("site_articles").select(columns).eq("status", "published").order("published_at", { ascending: false });
  if (error) { console.error(error); return []; }
  return data.map(toSiteArticleRow);
});

export const getPublishedSiteArticle = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) => z.object({ id: z.number().int().positive() }).parse(input))
  .handler(async ({ data }) => {
    const db = publicSupabase(process.env["SUPABASE_URL"]!, process.env["SUPABASE_PUBLISHABLE_KEY"]!);
    const { data: row, error } = await db.from("site_articles").select(columns).eq("id", data.id).eq("status", "published").maybeSingle();
    if (error) console.error(error);
    return row ? toSiteArticleRow(row) : null;
  });

/* ---------- Admin ---------- */

export const getAdminStatus = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await context.supabase.rpc("has_role", { _user_id: context.userId, _role: "admin" });
    const email = typeof context.claims?.email === "string" ? context.claims.email : "";
    return { isAdmin: !!data, email };
  });

export const listAdminArticles = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { data, error } = await context.supabase.from("site_articles").select(columns).order("updated_at", { ascending: false });
    if (error) throw new Error("تعذر تحميل المقالات.");
    return data.map(toSiteArticleRow);
  });

export const saveSiteArticle = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({
    id: z.number().int().positive().optional(),
    source_lang: languageSchema,
    category: z.string().trim().max(80),
    status: z.enum(["draft", "published"]),
    editions: z.record(z.string(), editionSchema),
  }).parse(input))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const editions: Record<string, { title: string; content: string }> = {};
    for (const code of siteLanguageCodes) {
      const e = data.editions[code];
      if (e && e.title.trim() && e.content.trim()) editions[code] = { title: e.title.trim(), content: sanitizeArticleHtml(e.content.trim()) };
    }
    if (!editions[data.source_lang]) throw new Error("اكتب عنوان المقال ونصه بلغته الأصلية قبل الحفظ.");
    const values = { source_lang: data.source_lang, category: data.category, status: data.status, editions };
    const query = data.id
      ? context.supabase.from("site_articles").update(values).eq("id", data.id).select(columns).single()
      : context.supabase.from("site_articles").insert({ ...values, created_by: context.userId }).select(columns).single();
    const { data: row, error } = await query;
    if (error) { console.error(error); throw new Error("تعذر حفظ المقال."); }
    return toSiteArticleRow(row);
  });

export const deleteSiteArticle = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ id: z.number().int().positive() }).parse(input))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const { error } = await context.supabase.from("site_articles").delete().eq("id", data.id);
    if (error) throw new Error("تعذر حذف المقال.");
    return { ok: true };
  });

/* ---------- Gemini (the doctor's own Google account) ---------- */

const htmlRules = "Return JSON with \"title\" (plain text) and \"content\" (HTML body only). Allowed tags: h2, h3, p, ul, ol, li, strong, em, a, blockquote, table, thead, tbody, tr, th, td. No scripts, styles, images, markdown or code fences. Never include phone numbers.";
const medicalRules = "You write patient education for Dr. Tamer Elalfy, consultant general and laparoscopic surgeon (Al Khobar, Saudi Arabia). Be accurate and consistent with current international guidelines (e.g. NICE, ACS, SAGES, ASMBS, EASL, ERAS). Explain simply for patients. Never diagnose, never prescribe doses, never promise results; qualify success rates by patient selection, outcome and follow-up length. Always say the treating team's instructions take priority, and include a short section on warning signs that need urgent care. Do not invent studies, numbers or references: if you are not certain a source exists, leave it out.";

export const geminiWrite = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.discriminatedUnion("mode", [
    z.object({ mode: z.literal("draft"), language: languageSchema, topic: z.string().trim().min(3).max(500), notes: z.string().max(20_000).default("") }),
    z.object({ mode: z.literal("translate"), from: languageSchema, to: languageSchema, title: z.string().min(1).max(300), content: z.string().min(1).max(300_000) }),
    z.object({ mode: z.literal("revise"), language: languageSchema, title: z.string().max(300), content: z.string().max(300_000), instruction: z.string().trim().min(3).max(2000) }),
  ]).parse(input))
  .handler(async ({ data, context }) => {
    await assertAdmin(context.supabase, context.userId);
    const apiKey = process.env["GEMINI_API_KEY"];
    if (!apiKey) throw new Error("لم يُربط مفتاح Gemini بعد. أضف مفتاحك من Google AI Studio أولًا.");
    const model = process.env["GEMINI_MODEL"];
    let system: string;
    let prompt: string;
    if (data.mode === "draft") {
      system = `${medicalRules}\n${htmlRules}`;
      prompt = `Write a complete patient-education article in ${languageNamesEnglish[data.language]} about: ${data.topic}\n\n${data.notes ? `Use the doctor's notes below as the main source; keep his clinical points and do not contradict them unless they are unsafe (then soften and flag "يحتاج مراجعة الطبيب").\n\nDoctor's notes:\n${data.notes}` : ""}`;
    } else if (data.mode === "translate") {
      system = `You are a professional medical translator. Translate faithfully from ${languageNamesEnglish[data.from]} into ${languageNamesEnglish[data.to]} for patients. Keep every number, dose, percentage, study name and warning exactly. Keep the same HTML structure and every link href unchanged. Do not add, remove or summarize content. Use clear, natural, respectful wording a patient understands; keep standard medical terms where patients know them. ${htmlRules}`;
      prompt = `Title:\n${data.title}\n\nHTML content:\n${data.content}`;
    } else {
      system = `${medicalRules}\nEdit the article as the doctor asks, keeping it in ${languageNamesEnglish[data.language]}. Change only what the instruction requires and keep everything else. ${htmlRules}`;
      prompt = `Instruction from the doctor:\n${data.instruction}\n\nCurrent title:\n${data.title}\n\nCurrent HTML content:\n${data.content}`;
    }
    const result = await generateWithGemini(apiKey, model, system, prompt);
    return { title: result.title, content: sanitizeArticleHtml(result.content), model: result.model };
  });

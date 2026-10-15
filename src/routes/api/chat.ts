import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

import { patientEducation } from "@/data/patient-education";
import {
  createLovableAiGatewayProvider,
  getLovableAiGatewayRunId,
  withLovableAiGatewayRunIdHeader,
} from "@/lib/ai-gateway.server";

const GATEWAY_URL = "https://ai.gateway.lovable.dev/v1";
const MODEL_ID = "google/gemini-3-flash-preview";

const LANGUAGE_NAMES: Record<string, string> = {
  ar: "Arabic",
  en: "English",
  ur: "Urdu",
  hi: "Hindi",
  bn: "Bengali",
  tl: "Filipino (Tagalog)",
  ta: "Tamil",
};

const guideList = patientEducation
  .map(
    (guide) =>
      `- ${guide.title} / ${guide.titleAr} (${guide.category}): ${guide.summary} | guide page: /guides/${guide.id}`,
  )
  .join("\n");

function buildSystemPrompt(language: string) {
  const languageName = LANGUAGE_NAMES[language] ?? "English";
  return `You are the patient education assistant of Dr. Tamer Elalfy's surgery website (alfisurgery.com), a consultant general, laparoscopic and bariatric surgeon in Saudi Arabia.

Rules you must always follow:
- Answer ONLY in ${languageName}, in simple, warm, non-technical words a patient understands.
- You provide general patient education only. You never diagnose, never prescribe or adjust medication, and never replace the treating medical team.
- Base your answers on the website's operation guides listed below when relevant.
- When a guide exists for the patient's topic, ALWAYS end your answer with a clickable markdown link to that guide's page, using the exact "guide page" path from the list below, with link text in ${languageName} such as "Read the full guide" (or its natural equivalent in ${languageName}). Example format: [Read the full guide](/guides/cholecystectomy). Never link to a page that is not in the list.
- Always remind the patient, briefly and naturally, that their own treating doctor's instructions come first.
- If the question mentions severe pain, high fever, heavy bleeding, difficulty breathing, chest pain, fainting, or any emergency sign, tell them clearly to seek emergency care immediately.
- If the question is unrelated to surgery, operations, preparation, recovery, or surgical diseases, politely say you can only help with patient education topics on this website.
- Keep answers short and clear: a few sentences or a short list. Never invent statistics, drug doses, or hospital policies.

The website's operation guides:
${guideList}`;
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const lovableApiKey = process.env.LOVABLE_API_KEY;
        if (!lovableApiKey) {
          return Response.json({ error: "AI is not configured." }, { status: 500 });
        }

        let body: { messages?: UIMessage[]; language?: string };
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid request body." }, { status: 400 });
        }

        const messages = body.messages;
        if (!Array.isArray(messages) || messages.length === 0) {
          return Response.json({ error: "Messages are required." }, { status: 400 });
        }

        const language = typeof body.language === "string" ? body.language : "en";
        const gateway = createLovableAiGatewayProvider(
          lovableApiKey,
          getLovableAiGatewayRunId(request),
          { baseURL: GATEWAY_URL },
        );

        const result = streamText({
          model: gateway.chatModel(MODEL_ID),
          system: buildSystemPrompt(language),
          messages: await convertToModelMessages(messages),
          maxRetries: 0,
          abortSignal: request.signal,
        });

        const response = result.toUIMessageStreamResponse({
          originalMessages: messages,
          sendReasoning: false,
        });

        return withLovableAiGatewayRunIdHeader(response, gateway);
      },
    },
  },
});

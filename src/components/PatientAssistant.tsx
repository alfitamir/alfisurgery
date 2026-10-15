import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageCircleHeart, X } from "lucide-react";

import { useSiteLanguage } from "@/components/SiteLanguageProvider";
import type { SiteLanguage } from "@/lib/site-language";
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface AssistantCopy {
  button: string;
  title: string;
  subtitle: string;
  empty: string;
  placeholder: string;
  thinking: string;
  disclaimer: string;
  error: string;
}

const assistantCopy: Record<SiteLanguage, AssistantCopy> = {
  ar: {
    button: "اسأل عن عمليتك",
    title: "مساعد تثقيف المرضى",
    subtitle: "إجابات مبسطة من أدلة العمليات في هذا الموقع",
    empty: "اسأل عن عمليتك أو التحضير لها أو التعافي بعدها.",
    placeholder: "اكتب سؤالك هنا…",
    thinking: "يكتب الإجابة…",
    disclaimer: "هذا المساعد للتثقيف العام فقط ولا يغني عن تعليمات فريقك المعالج. في الحالات الطارئة توجه لأقرب طوارئ فورًا.",
    error: "تعذر الحصول على إجابة الآن. حاول مرة أخرى بعد قليل.",
  },
  en: {
    button: "Ask about your operation",
    title: "Patient education assistant",
    subtitle: "Simple answers based on this site's operation guides",
    empty: "Ask about your operation, how to prepare, or recovery afterwards.",
    placeholder: "Type your question here…",
    thinking: "Writing the answer…",
    disclaimer: "This assistant is for general education only and never replaces your treating team's instructions. In an emergency, go to the nearest emergency department immediately.",
    error: "Could not get an answer right now. Please try again shortly.",
  },
  ur: {
    button: "اپنی سرجری کے بارے میں پوچھیں",
    title: "مریضوں کی تعلیمی معاون",
    subtitle: "اس ویب سائٹ کی سرجری گائیڈز پر مبنی آسان جوابات",
    empty: "اپنی سرجری، تیاری یا بحالی کے بارے میں پوچھیں۔",
    placeholder: "اپنا سوال یہاں لکھیں…",
    thinking: "جواب لکھا جا رہا ہے…",
    disclaimer: "یہ معاون صرف عمومی تعلیم کے لیے ہے اور آپ کے معالج ٹیم کی ہدایات کا بدل نہیں۔ ایمرجنسی میں فوری طور پر قریبی ایمرجنسی جائیں۔",
    error: "فی الحال جواب نہیں مل سکا۔ تھوڑی دیر بعد دوبارہ کوشش کریں۔",
  },
  hi: {
    button: "अपनी सर्जरी के बारे में पूछें",
    title: "रोगी शिक्षा सहायक",
    subtitle: "इस वेबसाइट की सर्जरी गाइड पर आधारित सरल उत्तर",
    empty: "अपनी सर्जरी, तैयारी या रिकवरी के बारे में पूछें।",
    placeholder: "अपना सवाल यहाँ लिखें…",
    thinking: "उत्तर लिखा जा रहा है…",
    disclaimer: "यह सहायक केवल सामान्य शिक्षा के लिए है और आपकी treating टीम के निर्देशों का विकल्प नहीं है। आपात स्थिति में तुरंत नज़दीकी इमरजेंसी जाएं।",
    error: "अभी उत्तर नहीं मिल सका। कुछ देर बाद फिर कोशिश करें।",
  },
  bn: {
    button: "আপনার অস্ত্রোপচার সম্পর্কে জিজ্ঞাসা করুন",
    title: "রোগী শিক্ষা সহকারী",
    subtitle: "এই ওয়েবসাইটের অস্ত্রোপচার গাইডের ভিত্তিতে সহজ উত্তর",
    empty: "আপনার অস্ত্রোপচার, প্রস্তুতি বা সুস্থ হওয়া নিয়ে জিজ্ঞাসা করুন।",
    placeholder: "আপনার প্রশ্ন এখানে লিখুন…",
    thinking: "উত্তর লেখা হচ্ছে…",
    disclaimer: "এই সহকারী শুধুমাত্র সাধারণ শিক্ষার জন্য এবং আপনার চিকিৎসক দলের নির্দেশনার বিকল্প নয়। জরুরি অবস্থায় সাথে সাথে নিকটস্থ জরুরি বিভাগে যান।",
    error: "এখন উত্তর পাওয়া যাচ্ছে না। কিছুক্ষণ পর আবার চেষ্টা করুন।",
  },
  tl: {
    button: "Magtanong tungkol sa iyong operasyon",
    title: "Katulong sa edukasyon ng pasyente",
    subtitle: "Mga simpleng sagot batay sa mga gabay sa operasyon ng website na ito",
    empty: "Magtanong tungkol sa iyong operasyon, paghahanda, o pagbawi pagkatapos.",
    placeholder: "I-type ang iyong tanong dito…",
    thinking: "Sinusulat ang sagot…",
    disclaimer: "Ang katulong na ito ay para sa pangkalahatang edukasyon lamang at hindi kapalit ng mga tagubilin ng iyong treating team. Sa emergency, pumunta agad sa pinakamalapit na emergency department.",
    error: "Hindi makakuha ng sagot sa ngayon. Subukan ulit mamaya.",
  },
  ta: {
    button: "உங்கள் அறுவை சிகிச்சை பற்றி கேளுங்கள்",
    title: "நோயாளர் கல்வி உதவியாளர்",
    subtitle: "இந்த இணையதளத்தின் அறுவை சிகிச்சை வழிகாட்டிகளின் அடிப்படையில் எளிய பதில்கள்",
    empty: "உங்கள் அறுவை சிகிச்சை, தயாரிப்பு அல்லது மீட்பு பற்றி கேளுங்கள்.",
    placeholder: "உங்கள் கேள்வியை இங்கே எழுதுங்கள்…",
    thinking: "பதில் எழுதப்படுகிறது…",
    disclaimer: "இந்த உதவியாளர் பொதுக் கல்விக்காக மட்டுமே; உங்கள் சிகிச்சைக் குழுவின் வழிமுறைகளுக்கு மாற்றாகாது. அவசர நிலையில் உடனே அருகிலுள்ள அவசர பிரிவுக்குச் செல்லுங்கள்.",
    error: "இப்போது பதில் கிடைக்கவில்லை. சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும்.",
  },
};

export function PatientAssistant() {
  const { language } = useSiteLanguage();
  const copy = assistantCopy[language] ?? assistantCopy.en;
  const [open, setOpen] = useState(false);

  const { messages, sendMessage, status, stop, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
      body: { language },
    }),
  });

  const busy = status === "submitted" || status === "streaming";

  const handleSubmit = (message: { text?: string }) => {
    const text = message.text?.trim();
    if (!text || busy) return;
    sendMessage({ text });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={copy.button}
        className="fixed bottom-5 right-4 z-40 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-90 md:bottom-8 md:right-8"
      >
        <MessageCircleHeart className="size-5" aria-hidden />
        <span className="max-w-40 truncate sm:max-w-none">{copy.button}</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex h-[85dvh] max-h-[85dvh] w-[calc(100vw-1.5rem)] max-w-2xl flex-col gap-0 overflow-hidden p-0 sm:h-[80dvh]">
          <DialogHeader className="border-b border-border px-5 py-4 text-start">
            <DialogTitle className="flex items-center gap-2 text-base">
              <MessageCircleHeart className="size-5 text-primary" aria-hidden />
              {copy.title}
            </DialogTitle>
            <DialogDescription className="text-xs">{copy.subtitle}</DialogDescription>
          </DialogHeader>

          <Conversation className="flex-1">
            <ConversationContent className="gap-4 px-4 py-4">
              {messages.length === 0 ? (
                <ConversationEmptyState
                  title={copy.title}
                  description={copy.empty}
                  icon={<MessageCircleHeart className="size-8 text-primary" aria-hidden />}
                />
              ) : (
                messages.map((message) => (
                  <Message key={message.id} from={message.role}>
                    <MessageContent>
                      {message.parts.map((part, index) => {
                        if (part.type !== "text") return null;
                        return message.role === "assistant" ? (
                          <MessageResponse key={index}>{part.text}</MessageResponse>
                        ) : (
                          <span key={index}>{part.text}</span>
                        );
                      })}
                    </MessageContent>
                  </Message>
                ))
              )}
              {status === "submitted" && <Shimmer className="text-sm">{copy.thinking}</Shimmer>}
              {error && <p className="text-sm text-destructive">{copy.error}</p>}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <div className="border-t border-border px-4 pb-3 pt-3">
            <PromptInput onSubmit={handleSubmit}>
              <PromptInputTextarea placeholder={copy.placeholder} autoFocus />
              <PromptInputFooter className="justify-end">
                <PromptInputSubmit status={status} disabled={busy ? false : undefined} onStop={stop} />
              </PromptInputFooter>
            </PromptInput>
            <p className="mt-2 text-[11px] leading-snug text-muted-foreground">{copy.disclaimer}</p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute end-3 top-3 rounded-full p-1.5 text-muted-foreground transition hover:bg-muted"
          >
            <X className="size-4" aria-hidden />
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}

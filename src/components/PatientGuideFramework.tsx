import { useState } from "react";
import { ChevronDown, CircleHelp, HeartPulse, ListChecks } from "lucide-react";

import { useSiteLanguage } from "@/components/SiteLanguageProvider";

const copy = {
  en: {
    decision: "Questions before the operation",
    decisionItems: [
      "Why is this operation being considered in my case?",
      "What is the expected benefit and what alternatives should I discuss?",
      "What could happen if I wait or choose not to have the operation now?",
      "What risks are especially relevant to my health and this procedure?",
      "Would a second opinion be useful for me?",
    ],
    recovery: "After you return home",
    recoveryIntro:
      "Use these headings to find the part of recovery you want to discuss with your team.",
    recoveryItems: [
      [
        "Pain and medicines",
        "Take medicines only according to your team's plan and ask what to do if pain is severe, suddenly worse or not improving.",
      ],
      [
        "Wound and drain care",
        "Follow the dressing, shower and surgical drain instructions given for your operation. In Arabic patient materials, the common term is الدرنقة.",
      ],
      [
        "Food and bowel care",
        "Ask about fluids, diet, constipation, nausea and bowel function, especially after abdominal or anorectal surgery.",
      ],
      [
        "Daily life",
        "Ask before driving, travelling, exercising, swimming, returning to work, praying in a different position or resuming intimacy.",
      ],
      [
        "Follow-up and results",
        "Keep the follow-up appointment and ask how pathology, imaging or other results will be communicated.",
      ],
      [
        "Warning signs and contact",
        "Know which changes are expected, who to call during the day and what to do outside clinic hours.",
      ],
    ],
    decisionAr: "أسئلة القرار قبل العملية",
    decisionItemsAr: [
      "لماذا تُناقش هذه العملية في حالتي؟",
      "ما الفائدة المتوقعة وما البدائل التي يجب أن أناقشها؟",
      "ماذا قد يحدث إذا انتظرت أو اخترت عدم إجراء العملية الآن؟",
      "ما المخاطر المهمة بشكل خاص في حالتي وفي هذه العملية؟",
      "هل قد يكون الرأي الثاني مفيداً لي؟",
    ],
    recoveryAr: "بعد العودة إلى المنزل",
    recoveryIntroAr: "استخدم هذه العناوين للوصول إلى الجزء من التعافي الذي تريد مناقشته مع فريقك.",
    recoveryItemsAr: [
      [
        "الألم والأدوية",
        "تناول الأدوية حسب خطة فريقك فقط، واسأل ماذا تفعل إذا كان الألم شديداً أو ازداد فجأة أو لم يتحسن.",
      ],
      ["الجرح والدرنقة", "اتبع تعليمات الضماد والاستحمام والدرنقة الخاصة بعمليتك."],
      [
        "الطعام ووظيفة الأمعاء",
        "اسأل عن السوائل والطعام والإمساك والغثيان ووظيفة الأمعاء، خصوصاً بعد جراحات البطن أو الشرج والمستقيم.",
      ],
      [
        "الحياة اليومية",
        "اسأل قبل القيادة والسفر والرياضة والسباحة والعودة إلى العمل والصلاة في وضع مختلف أو استئناف العلاقة الحميمة.",
      ],
      [
        "المتابعة والنتائج",
        "احضر موعد المتابعة واسأل كيف ستصلك نتائج العينة أو الأشعة أو أي فحوص أخرى.",
      ],
      [
        "علامات الخطر والتواصل",
        "اعرف التغيرات المتوقعة ومن تتصل به أثناء النهار وماذا تفعل خارج ساعات العيادة.",
      ],
    ],
    note: "معلومة تثقيفية عامة؛ تعليمات الفريق المعالج الخاصة بعمليتك وحالتك هي المرجع الأول.",
    noteEn:
      "General education only; the instructions from your treating team for your operation and health come first.",
  },
} as const;

export function PatientGuideFramework() {
  const { language } = useSiteLanguage();
  const [open, setOpen] = useState<number | null>(null);
  if (language !== "ar" && language !== "en") return null;
  const ar = language === "ar";
  const current = copy.en;
  const decisionItems = ar ? current.decisionItemsAr : current.decisionItems;
  const recoveryItems = ar ? current.recoveryItemsAr : current.recoveryItems;

  return (
    <div className="space-y-8">
      <section
        className="rounded-3xl border border-patient-mist bg-patient-canvas p-5 md:p-7"
        aria-labelledby="guide-decision-title"
      >
        <div className="flex items-start gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-patient-apricot text-patient-deep">
            <CircleHelp aria-hidden />
          </span>
          <div>
            <h2 id="guide-decision-title" className="text-xl font-bold text-patient-deep">
              {ar ? current.decisionAr : current.decision}
            </h2>
            <p className="mt-2 text-sm leading-7 text-patient-ink/70">
              {ar
                ? "أسئلة تساعدك على اتخاذ قرار مستنير مع فريقك الطبي."
                : "Questions to support an informed conversation with your clinical team."}
            </p>
          </div>
        </div>
        <ul className="mt-5 grid gap-3">
          {decisionItems.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-2xl border border-patient-mist bg-card p-4 text-sm leading-7 text-patient-deep"
            >
              <ListChecks className="mt-1 size-5 shrink-0 text-patient-blue" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section
        className="rounded-3xl border border-patient-mist bg-card p-5 md:p-7"
        aria-labelledby="guide-recovery-title"
      >
        <div className="flex items-start gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-patient-deep text-primary-foreground">
            <HeartPulse aria-hidden />
          </span>
          <div>
            <h2 id="guide-recovery-title" className="text-xl font-bold text-patient-deep">
              {ar ? current.recoveryAr : current.recovery}
            </h2>
            <p className="mt-2 text-sm leading-7 text-patient-ink/70">
              {ar ? current.recoveryIntroAr : current.recoveryIntro}
            </p>
          </div>
        </div>
        <div className="mt-5 divide-y divide-patient-mist overflow-hidden rounded-2xl border border-patient-mist">
          {recoveryItems.map(([title, text], index) => {
            const isOpen = open === index;
            return (
              <div key={title} className="bg-patient-canvas px-4">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 py-3 text-start font-semibold text-patient-deep"
                >
                  <span>{title}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <p className="pb-4 pe-8 text-sm leading-7 text-patient-ink/75">{text}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <p className="rounded-2xl bg-patient-mist/60 p-4 text-sm leading-7 text-patient-deep">
        {ar ? current.note : current.noteEn}
      </p>
    </div>
  );
}

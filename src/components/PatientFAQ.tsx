import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

import { useSiteLanguage } from "@/components/SiteLanguageProvider";

const faq = {
  en: {
    label: "Questions patients ask",
    title: "Bring better questions to your appointment",
    intro:
      "These answers are general education based on the uploaded handbook. Your operation, health conditions, medicines and hospital pathway may change the advice you receive.",
    questions: [
      [
        "What will you do during the operation?",
        "Your surgeon should explain the purpose of the operation, the main steps, the expected result, important risks and the alternatives that apply to you. Ask for an explanation in words you understand, and take time to ask questions before signing consent.",
      ],
      [
        "Will I need keyhole or open surgery?",
        "The approach depends on the operation, your anatomy, previous operations, the findings during surgery and the surgeon's judgment. Ask which approach is planned, whether it may change during the operation, and why.",
      ],
      [
        "Will I need a stoma or a drain?",
        "Some operations may require a stoma or a surgical drain, while others do not. Ask whether either is expected in your case, how long it may stay, and who will teach you how to care for it. In Arabic patient materials, a surgical drain is called الدرنقة.",
      ],
      [
        "Which medicines should I stop, and when?",
        "Do not stop or restart a medicine on your own. Give the team a complete list of prescription medicines, injections, over-the-counter products and supplements. Your surgical, anesthesia and prescribing teams should give you a specific plan.",
      ],
      [
        "When should I stop eating and drinking?",
        "Follow the fasting times given by your hospital and anesthesia team. Fasting instructions can vary by age, procedure, anesthesia plan, diabetes, medicines and local protocol. If the instructions are unclear, contact the hospital rather than guessing.",
      ],
      [
        "Can I fast during Ramadan before or after surgery?",
        "Ask your surgical and medical teams before fasting. Surgery, anesthesia, diabetes, hydration and medicine timing may require an individualized plan. Do not fast or change medicine timing against the advice of your treating team.",
      ],
      [
        "How long will I stay in hospital?",
        "The expected stay depends on the procedure, your health, pain and nausea control, mobility, eating and drinking, wound condition and the team's discharge criteria. Ask what needs to be achieved before you go home and who will support you afterward.",
      ],
      [
        "How much pain should I expect, and what will help?",
        "Some pain or discomfort may occur, but the team should give you a plan for pain relief and explain when to ask for help. Tell the team if pain is severe, suddenly worse, prevents deep breathing or movement, or is not improving as expected.",
      ],
      [
        "When can I shower, drive, pray, travel or return to work?",
        "There is no single date for every patient or operation. Follow the wound and activity instructions for your procedure. Driving requires safe control of the vehicle and the ability to perform an emergency stop without significant pain; ask your team before driving or travelling.",
      ],
      [
        "Which signs mean I should call, and who answers at night?",
        "Before discharge, ask for the daytime and after-hours contact route. Your guide may help you recognize expected recovery, same-day concerns and possible emergencies. Seek urgent help for severe or rapidly worsening symptoms, breathing difficulty, chest pain or heavy bleeding.",
      ],
      [
        "When and how will I receive my results?",
        "Ask how results such as pathology or imaging will be communicated, when they are expected, and whom to contact if you have not heard by the agreed time. Keep your follow-up appointment even if you feel well.",
      ],
    ],
    note: "Educational content only. It does not diagnose, prescribe, or replace the individualized instructions of your treating clinical team.",
  },
  ar: {
    label: "أسئلة يطرحها المرضى",
    title: "خذ أسئلة أفضل معك إلى موعدك",
    intro:
      "هذه الإجابات للتثقيف العام ومبنية على الكتاب المرفوع. قد تختلف التعليمات حسب نوع عمليتك وحالتك الصحية وأدويتك ومسار المستشفى الذي يعالجك.",
    questions: [
      [
        "ماذا ستفعلون أثناء العملية؟",
        "يشرح لك الجراح هدف العملية وخطواتها الأساسية والنتيجة المتوقعة والمخاطر المهمة والبدائل المناسبة لحالتك. اطلب الشرح بلغة تفهمها وخذ وقتك في طرح الأسئلة قبل توقيع الموافقة.",
      ],
      [
        "هل سأحتاج إلى جراحة بالمنظار أم جراحة مفتوحة؟",
        "يعتمد الأسلوب على نوع العملية وتشريحك والعمليات السابقة وما يظهر أثناء الجراحة وتقدير الجراح. اسأل عن الأسلوب المخطط، وهل يمكن أن يتغير أثناء العملية، ولماذا.",
      ],
      [
        "هل سأحتاج إلى فغرة أو درنقة؟",
        "قد تحتاج بعض العمليات إلى فغرة أو درنقة جراحية، بينما لا تحتاج عمليات أخرى إلى ذلك. اسأل هل يُتوقع وجود أي منهما في حالتك، وكم قد تبقى، ومن سيعلمك طريقة العناية بها.",
      ],
      [
        "ما الأدوية التي يجب أن أوقفها ومتى؟",
        "لا توقف أو تعاود أي دواء من تلقاء نفسك. أعط الفريق قائمة كاملة بالأدوية الموصوفة والحقن والأدوية التي تُصرف دون وصفة والمكملات. يجب أن يعطيك فريق الجراحة والتخدير والطبيب الذي وصف الدواء خطة محددة.",
      ],
      [
        "متى أتوقف عن الطعام والشراب؟",
        "اتبع أوقات الصيام التي أعطاك إياها المستشفى وفريق التخدير. قد تختلف التعليمات حسب العمر ونوع العملية وخطة التخدير والسكري والأدوية وبروتوكول المستشفى. إذا لم تكن التعليمات واضحة، تواصل مع المستشفى ولا تخمّن.",
      ],
      [
        "هل أستطيع الصيام في رمضان قبل العملية أو بعدها؟",
        "اسأل فريق الجراحة والفريق الطبي قبل الصيام. قد تحتاج الجراحة والتخدير والسكري والسوائل وتوقيت الأدوية إلى خطة فردية. لا تصم ولا تغيّر مواعيد الأدوية خلافاً لتعليمات فريقك المعالج.",
      ],
      [
        "كم سأبقى في المستشفى؟",
        "تعتمد مدة الإقامة على نوع العملية وحالتك والسيطرة على الألم والغثيان والقدرة على الحركة وتناول الطعام والشراب وحالة الجرح ومعايير الخروج التي يضعها الفريق. اسأل ما الذي يجب تحقيقه قبل العودة إلى المنزل ومن سيساعدك بعدها.",
      ],
      [
        "كم أتوقع من الألم، وما الذي يساعد؟",
        "قد يحدث بعض الألم أو الانزعاج، لكن يجب أن يعطيك الفريق خطة للسيطرة على الألم ويوضح متى تطلب المساعدة. أخبر الفريق إذا كان الألم شديداً أو ازداد فجأة أو منعك من التنفس العميق أو الحركة أو لم يتحسن كما هو متوقع.",
      ],
      [
        "متى أستطيع الاستحمام أو القيادة أو الصلاة أو السفر أو العودة إلى العمل؟",
        "لا يوجد موعد واحد يناسب كل المرضى والعمليات. اتبع تعليمات الجرح والنشاط الخاصة بعمليتك. تتطلب القيادة القدرة على التحكم الآمن بالسيارة والقيام بتوقف طارئ دون ألم مهم؛ اسأل فريقك قبل القيادة أو السفر.",
      ],
      [
        "ما العلامات التي تستدعي الاتصال؟ ومن يجيب في الليل؟",
        "قبل الخروج، اسأل عن وسيلة التواصل أثناء النهار وبعد ساعات العمل. يساعدك الدليل على التمييز بين التعافي المتوقع والمشكلات التي تحتاج إلى تقييم في اليوم نفسه والاحتمالات الطارئة. اطلب المساعدة العاجلة عند الأعراض الشديدة أو المتفاقمة سريعاً أو صعوبة التنفس أو ألم الصدر أو النزيف الغزير.",
      ],
      [
        "متى وكيف سأحصل على نتائجي؟",
        "اسأل كيف ستصل إليك نتائج مثل تقرير العينة أو الأشعة، ومتى يُتوقع صدورها، ومن تتصل به إذا لم تسمع النتيجة في الموعد المتفق عليه. احضر موعد المتابعة حتى إذا كنت تشعر بتحسن.",
      ],
    ],
    note: "محتوى تثقيفي عام فقط. لا يقدم تشخيصاً أو وصفة علاجية ولا يحل محل التعليمات الفردية لفريقك الطبي المعالج.",
  },
} as const;

type FaqLanguage = keyof typeof faq;

export function PatientFAQ() {
  const { language } = useSiteLanguage();
  const [open, setOpen] = useState<number | null>(0);
  if (language !== "ar" && language !== "en") return null;
  const content = faq[language as FaqLanguage];

  return (
    <section
      id="faq"
      aria-labelledby="patient-faq-title"
      className="border-y border-patient-mist bg-card py-16"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <HelpCircle className="mx-auto size-9 text-patient-blue" aria-hidden />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-patient-blue">
            {content.label}
          </p>
          <h2
            id="patient-faq-title"
            className="mt-3 text-3xl font-bold text-patient-deep md:text-4xl"
          >
            {content.title}
          </h2>
          <p className="mt-4 leading-8 text-patient-ink/75">{content.intro}</p>
        </div>
        <div className="mx-auto mt-8 max-w-4xl divide-y divide-patient-mist overflow-hidden rounded-[1.5rem] border-2 border-patient-mist bg-patient-canvas">
          {content.questions.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <div key={question} className="px-5 md:px-7">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`patient-faq-answer-${index}`}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-start font-bold text-patient-deep"
                >
                  <span>{question}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <div
                    id={`patient-faq-answer-${index}`}
                    className="pb-5 pe-8 text-sm leading-7 text-patient-ink/80"
                  >
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <p className="mx-auto mt-6 max-w-4xl rounded-2xl bg-patient-mist/60 p-4 text-center text-sm leading-7 text-patient-deep">
          {content.note}
        </p>
      </div>
    </section>
  );
}

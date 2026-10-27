import { useState } from "react";
import {
  AlertTriangle,
  BookOpenCheck,
  CheckCircle2,
  ClipboardList,
  MessageSquareText,
} from "lucide-react";

import { useSiteLanguage } from "@/components/SiteLanguageProvider";

const framework = {
  en: {
    eyebrow: "From Clinic to Recovery",
    title: "A clearer way to use every operation guide",
    intro:
      "This patient-facing structure is adapted from the counseling framework in From Clinic to Recovery. It helps you find the information you need without replacing the instructions of your treating team.",
    tabs: [
      { title: "Five steps", icon: BookOpenCheck },
      { title: "Seven recovery areas", icon: CheckCircle2 },
      { title: "Warning levels", icon: AlertTriangle },
      { title: "Questions for your surgeon", icon: MessageSquareText },
    ],
    panels: [
      {
        heading: "Every guide follows five practical steps",
        items: [
          [
            "01",
            "Understand",
            "What the condition and operation mean, why surgery may be discussed, and what alternatives may exist.",
          ],
          [
            "02",
            "Prepare",
            "What to confirm before admission, including the instructions your own team gives you about medicines, fasting and transport.",
          ],
          [
            "03",
            "Ask",
            "Short answers to common questions, written to help you have a better conversation with your clinical team.",
          ],
          [
            "04",
            "Recognize",
            "Risks, warning signs and the situations in which you should contact your team or seek urgent help.",
          ],
          [
            "05",
            "Take home",
            "A plain-language guide and printable material that you can review with family and keep after discharge.",
          ],
        ],
      },
      {
        heading: "Recovery is more than the wound",
        items: [
          [
            "01",
            "Pain and medicines",
            "Use medicines only as prescribed and ask the team what to do if pain is not improving.",
          ],
          [
            "02",
            "Wound and drain care",
            "Follow the specific dressing, drain and shower instructions given for your operation.",
          ],
          [
            "03",
            "Food and bowel care",
            "Review fluids, diet, constipation and gas with your team, especially after abdominal or anorectal surgery.",
          ],
          [
            "04",
            "Sleep and comfort",
            "Plan clothing, bathing and sleep in a way that protects your comfort and the operation site.",
          ],
          [
            "05",
            "Daily life",
            "Ask before driving, travelling, exercising, swimming, returning to work or resuming intimacy.",
          ],
          [
            "06",
            "Follow-up",
            "Keep the appointment and ask how results, pathology or further treatment will be communicated.",
          ],
          [
            "07",
            "Warning signs",
            "Know which changes are expected and which need a same-day call or urgent assessment.",
          ],
        ],
      },
      {
        heading: "A simple three-level language for warning signs",
        items: [
          [
            "GREEN",
            "Expected",
            "Some symptoms can be part of normal recovery. Follow your discharge instructions and monitor the change.",
          ],
          [
            "AMBER",
            "Needs advice today",
            "Contact your clinic or the number provided by your team on the same day for assessment.",
          ],
          [
            "RED",
            "Possible emergency",
            "Seek urgent emergency care for severe or rapidly worsening symptoms, especially breathing difficulty, chest pain or heavy bleeding.",
          ],
        ],
      },
      {
        heading: "Take these questions to your appointment",
        items: [
          [
            "01",
            "Why is this operation being considered in my case?",
            "Ask what the team is trying to treat and what the alternatives are.",
          ],
          [
            "02",
            "What should I expect on the day?",
            "Ask about anesthesia, admission, discharge and who will give you instructions.",
          ],
          [
            "03",
            "What could recovery look like for me?",
            "Ask about pain, food, activity, work, driving and follow-up.",
          ],
          [
            "04",
            "Which warning signs matter after I go home?",
            "Ask who to call during the day and what to do outside clinic hours.",
          ],
          [
            "05",
            "What should I bring or arrange?",
            "Ask about medicines, transport, family support and documents.",
          ],
        ],
      },
    ],
    sourceNote:
      "Source note: adapted from the uploaded From Clinic to Recovery revised manuscript. Procedure-specific instructions, medicines, timelines and emergency pathways must follow the treating team's plan and local hospital protocol.",
  },
  ar: {
    eyebrow: "من العيادة إلى التعافي",
    title: "طريقة أوضح لاستخدام كل دليل من أدلة العمليات",
    intro:
      "يعتمد هذا التنظيم الموجّه للمرضى على إطار التثقيف والاستشارة الوارد في كتاب «من العيادة إلى التعافي». يساعدك على الوصول إلى المعلومة المناسبة، لكنه لا يحل محل تعليمات فريقك الطبي المعالج.",
    tabs: [
      { title: "خمس خطوات", icon: BookOpenCheck },
      { title: "سبعة مجالات للتعافي", icon: CheckCircle2 },
      { title: "مستويات علامات الخطر", icon: AlertTriangle },
      { title: "أسئلة للجراح", icon: MessageSquareText },
    ],
    panels: [
      {
        heading: "يتبع كل دليل خمس خطوات عملية",
        items: [
          [
            "٠١",
            "افهم",
            "ما معنى الحالة والعملية، ولماذا قد تُناقش الجراحة، وما البدائل التي يمكن سؤال الفريق عنها.",
          ],
          [
            "٠٢",
            "استعد",
            "ما الذي يجب تأكيده قبل الحضور، مع الالتزام بتعليمات فريقك بشأن الأدوية والصيام ووسيلة العودة.",
          ],
          [
            "٠٣",
            "اسأل",
            "إجابات مختصرة عن الأسئلة الشائعة تساعدك على إجراء حوار أفضل مع فريقك الطبي.",
          ],
          ["٠٤", "انتبه", "المخاطر وعلامات الخطر ومتى تتواصل مع الفريق أو تطلب مساعدة عاجلة."],
          [
            "٠٥",
            "خذ المعلومة معك",
            "دليل بلغة واضحة ومواد قابلة للطباعة يمكنك مراجعتها مع الأسرة والاحتفاظ بها بعد الخروج.",
          ],
        ],
      },
      {
        heading: "التعافي يتجاوز العناية بالجرح",
        items: [
          [
            "٠١",
            "الألم والأدوية",
            "استخدم الأدوية حسب الوصفة فقط، واسأل الفريق عما تفعله إذا لم يتحسن الألم.",
          ],
          ["٠٢", "الجرح والدرنقة", "اتبع تعليمات تغيير الضماد والدرنقة والاستحمام الخاصة بعمليتك."],
          [
            "٠٣",
            "الطعام ووظيفة الأمعاء",
            "ناقش السوائل والطعام والإمساك والغازات مع فريقك، خصوصاً بعد جراحات البطن أو الشرج والمستقيم.",
          ],
          [
            "٠٤",
            "النوم والراحة",
            "خطط للملابس والاستحمام والنوم بما يحافظ على راحتك ويحمي موضع العملية.",
          ],
          [
            "٠٥",
            "الحياة اليومية",
            "اسأل قبل القيادة والسفر والرياضة والسباحة والعودة إلى العمل واستئناف العلاقة الحميمة.",
          ],
          [
            "٠٦",
            "المتابعة",
            "احضر الموعد واسأل كيف ستُبلّغ بالنتائج أو تقرير العينة أو أي علاج إضافي.",
          ],
          [
            "٠٧",
            "علامات الخطر",
            "اعرف ما قد يكون متوقعاً وما يحتاج إلى اتصال في اليوم نفسه أو تقييماً عاجلاً.",
          ],
        ],
      },
      {
        heading: "لغة بسيطة من ثلاثة مستويات لعلامات الخطر",
        items: [
          [
            "أخضر",
            "متوقع",
            "قد تكون بعض الأعراض جزءاً من التعافي الطبيعي. اتبع تعليمات الخروج وراقب التغير.",
          ],
          [
            "كهرماني",
            "يحتاج إلى مشورة اليوم",
            "تواصل مع العيادة أو الرقم الذي أعطاك إياه الفريق في اليوم نفسه للتقييم.",
          ],
          [
            "أحمر",
            "احتمال طارئ",
            "اطلب رعاية طارئة عند الأعراض الشديدة أو المتفاقمة سريعاً، خصوصاً صعوبة التنفس أو ألم الصدر أو النزيف الغزير.",
          ],
        ],
      },
      {
        heading: "خذ هذه الأسئلة معك إلى الموعد",
        items: [
          [
            "٠١",
            "لماذا تُناقش هذه العملية في حالتي؟",
            "اسأل عما يحاول الفريق علاجه وما البدائل التي يمكن مناقشتها.",
          ],
          [
            "٠٢",
            "ماذا أتوقع في يوم العملية؟",
            "اسأل عن التخدير والإقامة والخروج ومن سيعطيك التعليمات.",
          ],
          [
            "٠٣",
            "كيف قد يكون التعافي بالنسبة إليّ؟",
            "اسأل عن الألم والطعام والنشاط والعمل والقيادة والمتابعة.",
          ],
          [
            "٠٤",
            "ما علامات الخطر بعد عودتي إلى المنزل؟",
            "اسأل بمن تتصل أثناء ساعات العمل وماذا تفعل خارج أوقات العيادة.",
          ],
          [
            "٠٥",
            "ماذا أحضر أو أرتب؟",
            "اسأل عن الأدوية ووسيلة النقل ومساعدة الأسرة والأوراق المطلوبة.",
          ],
        ],
      },
    ],
    sourceNote:
      "ملاحظة المصدر: أُعدّ هذا القسم بالاستناد إلى مخطوط كتاب «من العيادة إلى التعافي» المرفوع والمنقح. يجب أن تتبع تعليمات كل عملية والأدوية والمدد الزمنية ومسارات الطوارئ خطة الفريق المعالج وبروتوكول المستشفى المحلي.",
  },
} as const;

type FrameworkLanguage = keyof typeof framework;

export function SurgicalJourneyFramework() {
  const { language } = useSiteLanguage();
  const [active, setActive] = useState(0);
  if (language !== "ar" && language !== "en") return null;
  const content = framework[language as FrameworkLanguage];
  const panel = content.panels[active];
  const PanelIcon = content.tabs[active].icon;

  return (
    <section
      aria-labelledby="source-framework-title"
      className="border-y border-patient-mist bg-patient-canvas py-16"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-patient-blue">
            {content.eyebrow}
          </p>
          <h2
            id="source-framework-title"
            className="mt-3 text-3xl font-bold text-patient-deep md:text-4xl"
          >
            {content.title}
          </h2>
          <p className="mt-4 leading-8 text-patient-ink/75">{content.intro}</p>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
          <div
            className="grid gap-2"
            role="tablist"
            aria-label={
              language === "ar"
                ? "أقسام إطار الرحلة الجراحية"
                : "Surgical journey framework sections"
            }
          >
            {content.tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.title}
                  type="button"
                  role="tab"
                  aria-selected={active === index}
                  onClick={() => setActive(index)}
                  className={`flex items-center gap-3 rounded-2xl p-4 text-start transition ${active === index ? "bg-patient-deep text-primary-foreground shadow-[var(--shadow-patient)]" : "border border-patient-mist bg-card text-patient-deep hover:border-patient-blue"}`}
                >
                  <Icon className="size-5 shrink-0" aria-hidden />
                  <span className="font-semibold">{tab.title}</span>
                </button>
              );
            })}
          </div>
          <div
            role="tabpanel"
            className="rounded-[2rem] border-2 border-patient-mist bg-card p-6 shadow-[var(--shadow-patient)] md:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-patient-mist text-patient-deep">
                <PanelIcon aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold text-patient-blue">
                  {content.tabs[active].title}
                </p>
                <h3 className="mt-1 text-2xl font-bold text-patient-deep">{panel.heading}</h3>
              </div>
            </div>
            <div className="mt-7 grid gap-3">
              {panel.items.map(([number, title, text]) => (
                <article
                  key={`${number}-${title}`}
                  className="rounded-2xl border border-patient-mist bg-patient-canvas p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="min-w-12 rounded-full bg-patient-apricot px-3 py-1 text-center text-xs font-bold text-patient-deep">
                      {number}
                    </span>
                    <div>
                      <h4 className="font-bold text-patient-deep">{title}</h4>
                      <p className="mt-1 leading-7 text-patient-ink/75">{text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 flex gap-3 rounded-2xl border border-patient-apricot/60 bg-patient-apricot/10 p-4 text-sm leading-7 text-patient-deep">
              <ClipboardList className="mt-1 size-5 shrink-0" aria-hidden />
              <p>{content.sourceNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

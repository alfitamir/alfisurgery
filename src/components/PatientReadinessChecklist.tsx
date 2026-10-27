import { useEffect, useMemo, useState } from "react";
import { Check, ClipboardCheck, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/SiteLanguageProvider";

const checklist = {
  en: {
    label: "Before you arrive",
    title: "Build your personal surgery checklist",
    intro:
      "Tick the reminders that apply to you. This list stays in this browser only and does not collect medical details.",
    items: [
      "I confirmed the date, arrival time and location.",
      "I asked which medicines, injections and supplements to discuss with my team.",
      "I know the fasting and drinking instructions given by my hospital.",
      "I arranged transport and an adult to support me if needed.",
      "I prepared my medicine and allergy list, ID and key documents.",
      "I know who to contact during the day and outside clinic hours.",
      "I arranged help with food, movement and daily tasks at home.",
    ],
    complete: "completed",
    reset: "Reset checklist",
    done: "Great — review the list with your own clinical team.",
    note: "General preparation support only. Your hospital's instructions always take priority.",
  },
  ar: {
    label: "قبل الحضور",
    title: "أنشئ قائمة استعدادك للعملية",
    intro:
      "ضع علامة أمام التذكيرات المناسبة لك. تبقى القائمة في هذا المتصفح فقط ولا تجمع تفاصيل طبية.",
    items: [
      "أكدت التاريخ ووقت الحضور ومكانه.",
      "سألت عن الأدوية والحقن والمكملات التي يجب مناقشتها مع فريقي.",
      "أعرف تعليمات الصيام والشرب التي أعطاني إياها المستشفى.",
      "رتبت وسيلة النقل ومن يرافقني أو يساعدني عند الحاجة.",
      "جهزت قائمة الأدوية والحساسيات والهوية والأوراق المهمة.",
      "أعرف بمن أتصل أثناء النهار وخارج ساعات العيادة.",
      "رتبت من يساعدني في الطعام والحركة والمهام اليومية في المنزل.",
    ],
    complete: "مكتمل",
    reset: "إعادة القائمة",
    done: "ممتاز — راجع القائمة مع فريقك الطبي المعالج.",
    note: "هذه مساعدة عامة للاستعداد. تعليمات مستشفاك هي المرجع الأول دائماً.",
  },
} as const;

type ChecklistLanguage = keyof typeof checklist;

export function PatientReadinessChecklist() {
  const { language } = useSiteLanguage();
  const supported = language === "ar" || language === "en";
  const content = checklist[(supported ? language : "en") as ChecklistLanguage];
  const storageKey = `alfisurgery-readiness-${supported ? language : "en"}`;
  const [checked, setChecked] = useState<boolean[]>(() => content.items.map(() => false));
  useEffect(() => {
    try {
      const stored = JSON.parse(window.localStorage.getItem(storageKey) ?? "null");
      if (Array.isArray(stored) && stored.length === content.items.length)
        setChecked(stored.map(Boolean));
    } catch {
      // Local storage is optional; the checklist remains usable without it.
    }
  }, [content.items.length, storageKey]);
  const completed = useMemo(() => checked.filter(Boolean).length, [checked]);
  if (!supported) return null;

  const update = (index: number) => {
    const next = checked.map((value, itemIndex) => (itemIndex === index ? !value : value));
    setChecked(next);
    window.localStorage.setItem(storageKey, JSON.stringify(next));
  };

  const reset = () => {
    const next = content.items.map(() => false);
    setChecked(next);
    window.localStorage.removeItem(storageKey);
  };

  return (
    <section
      aria-labelledby="readiness-checklist-title"
      className="mx-auto max-w-7xl px-5 py-10 md:px-8"
    >
      <div className="rounded-[2rem] border-2 border-patient-mist bg-card p-6 shadow-[var(--shadow-patient)] md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-patient-deep text-primary-foreground">
                <ClipboardCheck aria-hidden />
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-patient-blue">
                {content.label}
              </p>
            </div>
            <h2
              id="readiness-checklist-title"
              className="mt-4 text-2xl font-bold text-patient-deep md:text-3xl"
            >
              {content.title}
            </h2>
            <p className="mt-3 leading-7 text-patient-ink/75">{content.intro}</p>
          </div>
          <div className="flex items-center gap-3 text-sm font-semibold text-patient-deep">
            <span className="rounded-full bg-patient-apricot px-3 py-1">
              {completed}/{content.items.length} {content.complete}
            </span>
            <Button type="button" variant="ghost" size="sm" onClick={reset}>
              <RotateCcw aria-hidden />
              {content.reset}
            </Button>
          </div>
        </div>
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {content.items.map((item, index) => (
            <label
              key={item}
              className={`flex cursor-pointer gap-3 rounded-2xl border p-4 transition ${checked[index] ? "border-patient-blue bg-patient-mist/60" : "border-patient-mist bg-patient-canvas hover:border-patient-blue"}`}
            >
              <input
                type="checkbox"
                checked={checked[index]}
                onChange={() => update(index)}
                className="mt-1 size-5 accent-patient-deep"
              />
              <span
                className={
                  checked[index] ? "text-patient-ink/60 line-through" : "text-patient-deep"
                }
              >
                {item}
              </span>
              <Check
                className={`ms-auto mt-1 size-5 shrink-0 ${checked[index] ? "text-patient-blue" : "text-transparent"}`}
                aria-hidden
              />
            </label>
          ))}
        </div>
        {completed === content.items.length && (
          <p className="mt-6 rounded-2xl bg-patient-apricot/20 p-4 text-sm font-semibold leading-7 text-patient-deep">
            {content.done}
          </p>
        )}
        <p className="mt-5 text-xs leading-6 text-patient-ink/60">{content.note}</p>
      </div>
    </section>
  );
}

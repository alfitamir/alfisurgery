import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, FileText, HelpCircle } from "lucide-react";
import { patientEducation } from "@/data/patient-education";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const entry = patientEducation.find((e) => e.id === "hidradenitis-suppurativa");

export const Route = createFileRoute("/patient-education/hidradenitis-suppurativa")({
  component: HSArticle,
  head: () => ({
    meta: [
      { title: "Hidradenitis Suppurativa (HS) — Patient Guide & FAQ | Dr. Elalfy" },
      {
        name: "description",
        content:
          "Comprehensive bilingual patient guide and FAQ for Hidradenitis Suppurativa (HS): symptoms, triggers, medical and surgical options, self-care, and myths.",
      },
      { property: "og:title", content: "Hidradenitis Suppurativa (HS) — Patient Guide & FAQ" },
      {
        property: "og:description",
        content:
          "Understand HS: what it is, common triggers, treatment options, and answers to the questions patients ask most.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const faqs: { q: string; a: string; qAr: string; aAr: string }[] = [
  {
    q: "Is Hidradenitis Suppurativa (HS) contagious?",
    a: "No. HS is a chronic inflammatory disease of the hair follicles and apocrine glands. It cannot be transmitted from one person to another by contact, sharing clothes, or intimacy.",
    qAr: "هل التهاب الغدد العرقية القيحي (HS) معدٍ؟",
    aAr: "لا. HS مرض التهابي مزمن يصيب بصيلات الشعر والغدد العرقية، ولا ينتقل من شخص لآخر عن طريق اللمس أو مشاركة الملابس أو المعاشرة.",
  },
  {
    q: "Is HS caused by poor hygiene?",
    a: "No. HS has nothing to do with cleanliness. It is driven by genetic predisposition, hormonal changes, smoking, obesity, and mechanical friction — not dirt.",
    qAr: "هل سبب HS قلة النظافة؟",
    aAr: "لا. المرض ليس له علاقة بالنظافة. الأسباب الرئيسية هي الاستعداد الوراثي، التغيرات الهرمونية، التدخين، السمنة، والاحتكاك الميكانيكي.",
  },
  {
    q: "Where does HS typically appear?",
    a: "In areas rich in apocrine glands and prone to friction: armpits, groin, inner thighs, under the breasts, and buttocks.",
    qAr: "أين تظهر عقيدات وخراريج HS عادةً؟",
    aAr: "في المناطق الغنية بالغدد العرقية والمعرضة للاحتكاك: تحت الإبطين، منطقة العانة، الفخذين من الداخل، تحت الثديين، والأرداف.",
  },
  {
    q: "What triggers make HS worse?",
    a: "Smoking, weight gain, tight clothing that causes friction, hormonal shifts (menstrual cycle), stress, sweating, and — in some patients — dairy and high-glycemic foods.",
    qAr: "ما المحفزات التي تزيد المرض سوءاً؟",
    aAr: "التدخين، زيادة الوزن، الملابس الضيقة المسببة للاحتكاك، التغيرات الهرمونية (الدورة الشهرية)، التوتر، التعرق، وأحياناً منتجات الألبان والأطعمة عالية المؤشر الجلايسيمي.",
  },
  {
    q: "Do antibiotics cure HS?",
    a: "Antibiotics (topical clindamycin, oral tetracyclines, or clindamycin + rifampicin) control flares and reduce inflammation, but they do not cure the disease. Long-term control needs lifestyle changes and, in moderate-to-severe cases, biologic therapy (e.g. adalimumab) or surgery.",
    qAr: "هل المضادات الحيوية تعالج HS نهائياً؟",
    aAr: "المضادات الحيوية (كليندامايسين موضعي، تتراسيكلين فموي، أو كليندامايسين مع ريفامبيسين) تسيطر على النوبات وتقلل الالتهاب، لكنها لا تشفي المرض. السيطرة طويلة الأمد تحتاج تعديل نمط الحياة، وفي الحالات المتوسطة والشديدة العلاج البيولوجي (مثل أداليموماب) أو الجراحة.",
  },
  {
    q: "When is surgery needed?",
    a: "Surgery is considered for recurrent abscesses, sinus tracts, or scarring that don't respond to medical therapy. Options range from simple deroofing to wide local excision with reconstruction, tailored to the disease stage.",
    qAr: "متى نحتاج للجراحة؟",
    aAr: "تُعتبر الجراحة خياراً عند تكرار الخراريج، وجود قنوات ناسورية، أو تندبات لا تستجيب للعلاج الدوائي. الخيارات تتراوح بين كشط بسيط للسقف (Deroofing) واستئصال واسع مع ترميم، حسب مرحلة المرض.",
  },
  {
    q: "Can diet help control HS?",
    a: "For some patients, reducing dairy, refined sugar, and high-glycemic foods lowers flare frequency. A Mediterranean-style diet and weight loss consistently improve symptoms.",
    qAr: "هل النظام الغذائي يساعد في السيطرة على HS؟",
    aAr: "عند بعض المرضى، تقليل منتجات الألبان والسكريات المكررة والأطعمة عالية المؤشر الجلايسيمي يقلل تكرار النوبات. النظام المتوسطي وخفض الوزن يحسّنان الأعراض بشكل ثابت.",
  },
  {
    q: "Is there a safe home wash I can use?",
    a: "Yes. A diluted white vinegar rinse (one tablespoon in a cup of lukewarm water) applied to affected areas can reduce bacterial load and odor. Avoid harsh scrubs, deodorants with alcohol, and hair removal by waxing in active areas.",
    qAr: "هل توجد وصفة آمنة للغسول المنزلي؟",
    aAr: "نعم. غسول الخل الأبيض المخفف (ملعقة كبيرة في كوب ماء فاتر) يوضع على المناطق المصابة يقلل البكتيريا والرائحة. تجنّب المقشرات القوية، مزيلات العرق التي تحتوي كحول، وإزالة الشعر بالشمع في المناطق النشطة.",
  },
  {
    q: "When should I contact the surgeon urgently?",
    a: "If you develop high fever, rapidly spreading redness, severe pain out of proportion, or a large abscess that prevents walking — you need urgent drainage and antibiotics.",
    qAr: "متى أتواصل مع الطبيب بشكل عاجل؟",
    aAr: "عند ارتفاع الحرارة، انتشار الاحمرار بسرعة، ألم شديد غير متناسب، أو خراج كبير يمنع المشي — تحتاج تصريفاً عاجلاً ومضاداً حيوياً.",
  },
];

function HSArticle() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          to="/"
          hash="patient-education"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to patient education
        </Link>

        <header className="mt-8">
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            Patient Guide
          </div>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
            Hidradenitis Suppurativa (HS)
          </h1>
          <p className="mt-3 text-muted-foreground" dir="rtl">
            دليلك الشامل للفهم والتعايش مع التهاب الغدد العرقية القيحي
          </p>
        </header>

        <section className="mt-10 space-y-4 text-[15px] leading-relaxed text-foreground/90">
          <p>
            Hidradenitis Suppurativa is a chronic inflammatory skin disease of the hair follicles
            and apocrine sweat glands. It causes painful nodules, abscesses, and sinus tracts, most
            often in the armpits, groin, inner thighs, under the breasts, and buttocks. HS is{" "}
            <strong>not contagious</strong> and is <strong>not caused by poor hygiene</strong>. It
            is driven by a mix of genetic predisposition, hormones, smoking, obesity, and friction.
          </p>
          <p dir="rtl" className="leading-loose">
            التهاب الغدد العرقية القيحي مرض جلدي التهابي مزمن يصيب بصيلات الشعر والغدد العرقية،
            ويسبب عقيدات مؤلمة وخراريج وقنوات ناسورية، غالباً تحت الإبطين ومنطقة العانة والفخذين
            وتحت الثديين والأرداف. المرض <strong>غير معدٍ</strong> و
            <strong>ليس سببه قلة النظافة</strong>، بل مزيج من الاستعداد الوراثي والهرمونات والتدخين
            والسمنة والاحتكاك.
          </p>
        </section>

        {entry && (
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={entry.pdfUrl}
              download={entry.pdfName}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download full guide (PDF)
            </a>
            <a
              href={entry.fileUrl}
              download={entry.fileName}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-secondary transition-colors"
            >
              <FileText className="h-4 w-4" />
              DOCX
            </a>
          </div>
        )}

        <section className="mt-14">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-secondary p-2.5 text-accent">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                FAQ
              </div>
              <h2 className="font-serif text-2xl md:text-3xl mt-1">
                Frequently asked questions
                <span className="block text-base text-muted-foreground mt-1" dir="rtl">
                  الأسئلة الشائعة عن HS
                </span>
              </h2>
            </div>
          </div>

          <Accordion
            type="single"
            collapsible
            className="mt-6 rounded-2xl border border-border bg-card"
          >
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="px-5">
                <AccordionTrigger className="text-left">
                  <div>
                    <div className="font-medium">{f.q}</div>
                    <div className="text-xs text-muted-foreground mt-1" dir="rtl">
                      {f.qAr}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-foreground/90">{f.a}</p>
                  <p className="mt-3 text-sm leading-loose text-muted-foreground" dir="rtl">
                    {f.aAr}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-6 text-xs text-muted-foreground">
            This FAQ is educational and does not replace an in-person medical consultation.
            <span className="block mt-1" dir="rtl">
              هذه الإجابات للتوعية فقط ولا تغني عن الاستشارة الطبية الشخصية.
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}

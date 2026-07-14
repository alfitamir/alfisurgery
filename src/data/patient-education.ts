import abscess from "@/assets/patient-education/abscess_drainaige_under_local_anathesia.docx.asset.json";
import appendectomy from "@/assets/patient-education/appendectomy.docx.asset.json";
import breastLump from "@/assets/patient-education/breast_lump.docx.asset.json";
import cholecystectomy from "@/assets/patient-education/cholecystectomy.docx.asset.json";
import wristGanglion from "@/assets/patient-education/dorsal_wrist_ganglion.docx.asset.json";
import fibroadenosis from "@/assets/patient-education/fibroadenosis_breast_education.docx.asset.json";
import haemorrhoids from "@/assets/patient-education/haemorrohoids.docx.asset.json";
import ingrowingNail from "@/assets/patient-education/ingrowing_nail_wedge_excision_under_local_anathesia.docx.asset.json";
import inguinalHernia from "@/assets/patient-education/laparoscopic_inguinal_hernia.docx.asset.json";
import ventralHernia from "@/assets/patient-education/laparoscopic_umbilical_or_ventral_hernia.docx.asset.json";
import stomaReversal from "@/assets/patient-education/stoma_reversal_pelvic_floor.docx.asset.json";
import stomaReversalChecklist from "@/assets/patient-education/stoma_reversal_checklist.docx.asset.json";
import stomaReversalChecklistPdf from "@/assets/patient-education/stoma_reversal_checklist.pdf.asset.json";

import lipoma from "@/assets/patient-education/lipoma_local_anathesia.docx.asset.json";
import openVentral from "@/assets/patient-education/Open_Paraumbilical_Ventral_Hernia_Repair.docx.asset.json";
import pediatricHernia from "@/assets/patient-education/pediatric_hernia.docx.asset.json";
import perianalAbscess from "@/assets/patient-education/perianal_abscess.docx.asset.json";
import perianalFistula from "@/assets/patient-education/perianal_fistula.docx.asset.json";
import pilonidalAbscess from "@/assets/patient-education/pilonidal_abscess.docx.asset.json";
import pilonidalSinus from "@/assets/patient-education/pilonidal_sinus.docx.asset.json";
import plastibell from "@/assets/patient-education/plastibell_circumcision.docx.asset.json";
import openInguinal from "@/assets/patient-education/Surgical_Inguinal_Hernia_Repair_Open_Technique.docx.asset.json";
import thyroidectomy from "@/assets/patient-education/thyroidectomy.docx.asset.json";
import hidradenitis from "@/assets/patient-education/hidradenitis_suppurativa.docx.asset.json";
import hidradenitisPdf from "@/assets/patient-education/hidradenitis_suppurativa.pdf.asset.json";

import abscessPdf from "@/assets/patient-education/abscess_drainaige_under_local_anathesia.pdf.asset.json";
import appendectomyPdf from "@/assets/patient-education/appendectomy.pdf.asset.json";
import breastLumpPdf from "@/assets/patient-education/breast_lump.pdf.asset.json";
import cholecystectomyPdf from "@/assets/patient-education/cholecystectomy.pdf.asset.json";
import wristGanglionPdf from "@/assets/patient-education/dorsal_wrist_ganglion.pdf.asset.json";
import fibroadenosisPdf from "@/assets/patient-education/fibroadenosis_breast_education.pdf.asset.json";
import haemorrhoidsPdf from "@/assets/patient-education/haemorrohoids.pdf.asset.json";
import ingrowingNailPdf from "@/assets/patient-education/ingrowing_nail_wedge_excision_under_local_anathesia.pdf.asset.json";
import inguinalHerniaPdf from "@/assets/patient-education/laparoscopic_inguinal_hernia.pdf.asset.json";
import ventralHerniaPdf from "@/assets/patient-education/laparoscopic_umbilical_or_ventral_hernia.pdf.asset.json";
import stomaReversalPdf from "@/assets/patient-education/stoma_reversal_pelvic_floor.pdf.asset.json";

import lipomaPdf from "@/assets/patient-education/lipoma_local_anathesia.pdf.asset.json";
import openVentralPdf from "@/assets/patient-education/Open_Paraumbilical_Ventral_Hernia_Repair.pdf.asset.json";
import pediatricHerniaPdf from "@/assets/patient-education/pediatric_hernia.pdf.asset.json";
import perianalAbscessPdf from "@/assets/patient-education/perianal_abscess.pdf.asset.json";
import perianalFistulaPdf from "@/assets/patient-education/perianal_fistula.pdf.asset.json";
import pilonidalAbscessPdf from "@/assets/patient-education/pilonidal_abscess.pdf.asset.json";
import pilonidalSinusPdf from "@/assets/patient-education/pilonidal_sinus.pdf.asset.json";
import plastibellPdf from "@/assets/patient-education/plastibell_circumcision.pdf.asset.json";
import openInguinalPdf from "@/assets/patient-education/Surgical_Inguinal_Hernia_Repair_Open_Technique.pdf.asset.json";
import thyroidectomyPdf from "@/assets/patient-education/thyroidectomy.pdf.asset.json";

export type EducationCategory = "Abdominal" | "Breast" | "Anorectal" | "Hernia" | "Minor Procedures" | "Endocrine" | "Pediatric";
export type EducationCategoryAr = "البطن" | "الثدي" | "الشرج والمستقيم" | "الفتق" | "إجراءات صغرى" | "الغدد الصماء" | "الأطفال";

export interface PatientEducationEntry {
  id: string;
  category: EducationCategory;
  categoryAr: EducationCategoryAr;
  title: string;
  titleAr: string;
  summary: string;
  summaryAr: string;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  pdfUrl: string;
  pdfName: string;
  pdfSize: number;
  checklistPdfUrl?: string;
  checklistPdfName?: string;
  checklistPdfSize?: number;
  checklistDocxUrl?: string;
  checklistDocxName?: string;
  checklistDocxSize?: number;
  articleRoute?: string;
}

const mb = (bytes: number) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
export const formatSize = (bytes: number) => mb(bytes);

export const patientEducation: PatientEducationEntry[] = [
  {
    id: "appendectomy",
    category: "Abdominal",
    categoryAr: "البطن",
    title: "Appendectomy",
    titleAr: "استئصال الزائدة الدودية",
    summary:
      "Removal of the appendix for acute or complicated appendicitis — laparoscopic or open, with preparation, recovery, and red flags after discharge.",
    summaryAr:
      "استئصال الزائدة الدودية في حالات الالتهاب الحاد أو المعقّد — بالمنظار أو الجراحة المفتوحة، مع التحضير قبل العملية ومرحلة التعافي وعلامات التحذير بعد الخروج.",
    fileUrl: appendectomy.url,
    fileName: appendectomy.original_filename,
    fileSize: appendectomy.size,
    pdfUrl: appendectomyPdf.url,
    pdfName: appendectomyPdf.original_filename,
    pdfSize: appendectomyPdf.size,
  },
  {
    id: "cholecystectomy",
    category: "Abdominal",
    categoryAr: "البطن",
    title: "Laparoscopic Cholecystectomy",
    titleAr: "استئصال المرارة بالمنظار",
    summary:
      "Keyhole removal of the gallbladder for stones or chronic disease — what to expect before, during, and after, including diet and recovery milestones.",
    summaryAr:
      "استئصال المرارة بالمنظار لعلاج الحصوات والالتهاب المزمن — التحضير، خطوات العملية، التغذية، ومراحل التعافي بعد الخروج.",
    fileUrl: cholecystectomy.url,
    fileName: cholecystectomy.original_filename,
    fileSize: cholecystectomy.size,
    pdfUrl: cholecystectomyPdf.url,
    pdfName: cholecystectomyPdf.original_filename,
    pdfSize: cholecystectomyPdf.size,
  },
  {
    id: "inguinal-hernia",
    category: "Hernia",
    categoryAr: "الفتق",
    title: "Laparoscopic Inguinal Hernia Repair",
    titleAr: "إصلاح الفتق الإربي بالمنظار",
    summary:
      "Tension-free mesh repair of groin hernias through keyhole surgery — risks of delay, anesthesia, recovery, and return-to-activity guidance.",
    summaryAr:
      "إصلاح الفتق الإربي بالمنظار باستخدام شبكة دون شدّ — مخاطر التأخير، التخدير، التعافي، والعودة إلى النشاط الطبيعي.",
    fileUrl: inguinalHernia.url,
    fileName: inguinalHernia.original_filename,
    fileSize: inguinalHernia.size,
    pdfUrl: inguinalHerniaPdf.url,
    pdfName: inguinalHerniaPdf.original_filename,
    pdfSize: inguinalHerniaPdf.size,
  },
  {
    id: "ventral-hernia",
    category: "Hernia",
    categoryAr: "الفتق",
    title: "Laparoscopic Paraumbilical / Ventral Hernia Repair",
    titleAr: "إصلاح فتق السرة أو الفتق البطني بالمنظار",
    summary:
      "Minimally invasive mesh repair of belly-button and midline hernias — preparation, hospital stay, wound care, and long-term precautions.",
    summaryAr:
      "إصلاح فتق السرة والفتق البطني بالمنظار باستخدام شبكة — التحضير، الإقامة في المستشفى، العناية بالجرح، والاحتياطات على المدى البعيد.",
    fileUrl: ventralHernia.url,
    fileName: ventralHernia.original_filename,
    fileSize: ventralHernia.size,
    pdfUrl: ventralHerniaPdf.url,
    pdfName: ventralHerniaPdf.original_filename,
    pdfSize: ventralHerniaPdf.size,
  },
  {
    id: "haemorrhoidectomy",
    category: "Anorectal",
    categoryAr: "الشرج والمستقيم",
    title: "Hemorrhoidectomy",
    titleAr: "استئصال البواسير",
    summary:
      "Surgical treatment of advanced hemorrhoids — indications, pain control, bowel care, sitz baths, and when to call the surgeon.",
    summaryAr:
      "العلاج الجراحي للبواسير المتقدمة — دواعي الجراحة، السيطرة على الألم، العناية بالأمعاء، المغاطس الدافئة، ومتى تتصل بالطبيب.",
    fileUrl: haemorrhoids.url,
    fileName: haemorrhoids.original_filename,
    fileSize: haemorrhoids.size,
    pdfUrl: haemorrhoidsPdf.url,
    pdfName: haemorrhoidsPdf.original_filename,
    pdfSize: haemorrhoidsPdf.size,
  },
  {
    id: "breast-lump",
    category: "Breast",
    categoryAr: "الثدي",
    title: "Breast Lump — Evaluation & Surgery",
    titleAr: "تكتلات الثدي — التقييم والجراحة",
    summary:
      "How a breast lump is investigated (triple assessment), benign vs malignant causes, biopsy options, and what to expect from excision.",
    summaryAr:
      "كيف يتم تقييم تكتلات الثدي (التقييم الثلاثي)، الفروق بين الأسباب الحميدة والخبيثة، خيارات الخزعة، وما يحدث أثناء استئصال الكتلة.",
    fileUrl: breastLump.url,
    fileName: breastLump.original_filename,
    fileSize: breastLump.size,
    pdfUrl: breastLumpPdf.url,
    pdfName: breastLumpPdf.original_filename,
    pdfSize: breastLumpPdf.size,
  },
  {
    id: "fibroadenosis",
    category: "Breast",
    categoryAr: "الثدي",
    title: "Fibrocystic Breast Changes (Fibroadenosis)",
    titleAr: "التليّف الكيسي في الثدي",
    summary:
      "Bilingual education on benign fibrocystic breast changes — symptoms, reassurance about cancer risk, lifestyle measures, and follow-up.",
    summaryAr:
      "تثقيف ثنائي اللغة عن التغيرات الليفية الكيسية الحميدة — الأعراض، طمأنة المريضة بشأن خطر السرطان، تعديلات نمط الحياة، والمتابعة.",
    fileUrl: fibroadenosis.url,
    fileName: fibroadenosis.original_filename,
    fileSize: fibroadenosis.size,
    pdfUrl: fibroadenosisPdf.url,
    pdfName: fibroadenosisPdf.original_filename,
    pdfSize: fibroadenosisPdf.size,
  },
  {
    id: "abscess-drainage",
    category: "Minor Procedures",
    categoryAr: "إجراءات صغرى",
    title: "Incision & Drainage of Abscess (Local Anesthesia)",
    titleAr: "فتح وتصريف الخراج تحت التخدير الموضعي",
    summary:
      "Office-based drainage of a skin abscess under local anesthesia — purpose, wound packing, dressing changes, and antibiotic guidance.",
    summaryAr:
      "تصريف الخراج الجلدي في العيادة تحت التخدير الموضعي — الغرض، حشو الجرح، تغيير الضمادات، وإرشادات المضادات الحيوية.",
    fileUrl: abscess.url,
    fileName: abscess.original_filename,
    fileSize: abscess.size,
    pdfUrl: abscessPdf.url,
    pdfName: abscessPdf.original_filename,
    pdfSize: abscessPdf.size,
  },
  {
    id: "ingrowing-nail",
    category: "Minor Procedures",
    categoryAr: "إجراءات صغرى",
    title: "Wedge Excision of Ingrowing Toenail (Local Anesthesia)",
    titleAr: "استئصال إسفيني للظفر الغائر تحت التخدير الموضعي",
    summary:
      "Definitive treatment for a chronic ingrowing toenail — procedure steps, post-op foot care, dressings, and prevention of recurrence.",
    summaryAr:
      "العلاج الجذري للظفر الغائر المزمن — خطوات الإجراء، العناية بالقدم بعد العملية، الضمادات، والوقاية من تكرار الحالة.",
    fileUrl: ingrowingNail.url,
    fileName: ingrowingNail.original_filename,
    fileSize: ingrowingNail.size,
    pdfUrl: ingrowingNailPdf.url,
    pdfName: ingrowingNailPdf.original_filename,
    pdfSize: ingrowingNailPdf.size,
  },
  {
    id: "wrist-ganglion",
    category: "Minor Procedures",
    categoryAr: "إجراءات صغرى",
    title: "Dorsal Wrist Ganglion Excision",
    titleAr: "استئصال الكيس العصبي في الرسغ",
    summary:
      "Surgical removal of a dorsal wrist ganglion cyst — indications, anesthesia, wound care, splinting, and recurrence risk.",
    summaryAr:
      "استئصال الكيس العصبي على ظهر الرسغ — دواعي الجراحة، التخدير، العناية بالجرح، التجبير، واحتمالية عودة الكيس.",
    fileUrl: wristGanglion.url,
    fileName: wristGanglion.original_filename,
    fileSize: wristGanglion.size,
    pdfUrl: wristGanglionPdf.url,
    pdfName: wristGanglionPdf.original_filename,
    pdfSize: wristGanglionPdf.size,
  },
  {
    id: "stoma-reversal-pelvic-floor",
    category: "Anorectal",
    categoryAr: "الشرج والمستقيم",
    title: "Stoma Reversal — Pelvic Floor Preparation",
    titleAr: "تعليمات طبية: تأهيل عضلات الحوض قبل إغلاق الستوما",
    summary:
      "Bilingual guide to prepare for stoma (colostomy/ileostomy) reversal: Kegel-style anal sphincter and pelvic floor exercises, daily schedule, post-op expectations, and curated Arabic/English educational resources.",
    summaryAr:
      "دليل ثنائي اللغة للتحضير لعملية إغلاق الستوما (إعادة توصيل القولون): تمارين كيجل لعضلات الشرج وقاع الحوض، الجدول اليومي، ما يحدث بعد العملية، ومصادر تثقيفية عربية وإنجليزية موثوقة.",
    fileUrl: stomaReversal.url,
    fileName: stomaReversal.original_filename,
    fileSize: stomaReversal.size,
    pdfUrl: stomaReversalPdf.url,
    pdfName: stomaReversalPdf.original_filename,
    pdfSize: stomaReversalPdf.size,
    checklistPdfUrl: stomaReversalChecklistPdf.url,
    checklistPdfName: stomaReversalChecklistPdf.original_filename,
    checklistPdfSize: stomaReversalChecklistPdf.size,
    checklistDocxUrl: stomaReversalChecklist.url,
    checklistDocxName: stomaReversalChecklist.original_filename,
    checklistDocxSize: stomaReversalChecklist.size,
  },
  {
    id: "open-inguinal-hernia",
    category: "Hernia",
    categoryAr: "الفتق",
    title: "Open Inguinal Hernia Repair (Lichtenstein)",
    titleAr: "إصلاح الفتق الإربي بالجراحة المفتوحة (ليختنشتاين)",
    summary:
      "Open tension-free mesh repair of a groin hernia — indications, anesthesia options, recovery, wound care, and return to activity.",
    summaryAr:
      "إصلاح الفتق الإربي بالجراحة المفتوحة باستخدام شبكة دون شدّ — الدواعي، خيارات التخدير، التعافي، العناية بالجرح، والعودة للنشاط.",
    fileUrl: openInguinal.url,
    fileName: openInguinal.original_filename,
    fileSize: openInguinal.size,
    pdfUrl: openInguinalPdf.url,
    pdfName: openInguinalPdf.original_filename,
    pdfSize: openInguinalPdf.size,
  },
  {
    id: "open-ventral-hernia",
    category: "Hernia",
    categoryAr: "الفتق",
    title: "Open Paraumbilical / Ventral Hernia Repair",
    titleAr: "إصلاح فتق السرة أو الفتق البطني بالجراحة المفتوحة",
    summary:
      "Open mesh repair of umbilical and midline ventral hernias — preparation, surgery, hospital stay, wound care, and long-term precautions.",
    summaryAr:
      "إصلاح فتق السرة والفتق البطني بالجراحة المفتوحة باستخدام شبكة — التحضير، الجراحة، الإقامة بالمستشفى، العناية بالجرح، والاحتياطات طويلة المدى.",
    fileUrl: openVentral.url,
    fileName: openVentral.original_filename,
    fileSize: openVentral.size,
    pdfUrl: openVentralPdf.url,
    pdfName: openVentralPdf.original_filename,
    pdfSize: openVentralPdf.size,
  },
  {
    id: "pediatric-hernia",
    category: "Pediatric",
    categoryAr: "الأطفال",
    title: "Pediatric Inguinal Hernia Repair",
    titleAr: "إصلاح الفتق الإربي عند الأطفال",
    summary:
      "Day-case herniotomy for infants and children — why early repair matters, anesthesia safety, post-op care, and red flags for parents.",
    summaryAr:
      "إصلاح الفتق الإربي عند الرضع والأطفال في يوم واحد — أهمية الإصلاح المبكر، أمان التخدير، العناية بعد العملية، وعلامات الخطر للأهل.",
    fileUrl: pediatricHernia.url,
    fileName: pediatricHernia.original_filename,
    fileSize: pediatricHernia.size,
    pdfUrl: pediatricHerniaPdf.url,
    pdfName: pediatricHerniaPdf.original_filename,
    pdfSize: pediatricHerniaPdf.size,
  },
  {
    id: "plastibell-circumcision",
    category: "Pediatric",
    categoryAr: "الأطفال",
    title: "Plastibell Circumcision",
    titleAr: "الختان بطريقة البلاستيبل",
    summary:
      "Bloodless circumcision using the Plastibell device — how it works, healing timeline, ring separation, and home care for parents.",
    summaryAr:
      "الختان بدون نزيف باستخدام جهاز البلاستيبل — طريقة العمل، مراحل الالتئام، سقوط الحلقة، والعناية المنزلية للأهل.",
    fileUrl: plastibell.url,
    fileName: plastibell.original_filename,
    fileSize: plastibell.size,
    pdfUrl: plastibellPdf.url,
    pdfName: plastibellPdf.original_filename,
    pdfSize: plastibellPdf.size,
  },
  {
    id: "perianal-abscess",
    category: "Anorectal",
    categoryAr: "الشرج والمستقيم",
    title: "Perianal Abscess — Incision & Drainage",
    titleAr: "خراج حول الشرج — الشق والتصريف",
    summary:
      "Urgent drainage of a painful perianal abscess — why antibiotics alone are not enough, wound care, sitz baths, and fistula risk.",
    summaryAr:
      "تصريج عاجل للخراج المؤلم حول الشرج — لماذا لا تكفي المضادات الحيوية وحدها، العناية بالجرح، المغاطس الدافئة، وخطر تكوّن الناسور.",
    fileUrl: perianalAbscess.url,
    fileName: perianalAbscess.original_filename,
    fileSize: perianalAbscess.size,
    pdfUrl: perianalAbscessPdf.url,
    pdfName: perianalAbscessPdf.original_filename,
    pdfSize: perianalAbscessPdf.size,
  },
  {
    id: "perianal-fistula",
    category: "Anorectal",
    categoryAr: "الشرج والمستقيم",
    title: "Perianal Fistula — Surgical Treatment",
    titleAr: "ناسور حول الشرج — العلاج الجراحي",
    summary:
      "Surgical options for anal fistula (fistulotomy, seton, LIFT) — preserving continence, healing time, and follow-up.",
    summaryAr:
      "خيارات جراحية للناسور الشرجي (فتح الناسور، السيتون، تقنية LIFT) — الحفاظ على التحكم، فترة الالتئام، والمتابعة.",
    fileUrl: perianalFistula.url,
    fileName: perianalFistula.original_filename,
    fileSize: perianalFistula.size,
    pdfUrl: perianalFistulaPdf.url,
    pdfName: perianalFistulaPdf.original_filename,
    pdfSize: perianalFistulaPdf.size,
  },
  {
    id: "pilonidal-abscess",
    category: "Anorectal",
    categoryAr: "الشرج والمستقيم",
    title: "Pilonidal Abscess — Incision & Drainage",
    titleAr: "خراج الناسور الشعري — الشق والتصريف",
    summary:
      "Emergency drainage of an infected pilonidal abscess — pain control, dressings, and the plan for definitive surgery later.",
    summaryAr:
      "تصريف طارئ لخراج الناسور الشعري الملتهب — السيطرة على الألم، الضمادات، وخطة الجراحة النهائية لاحقًا.",
    fileUrl: pilonidalAbscess.url,
    fileName: pilonidalAbscess.original_filename,
    fileSize: pilonidalAbscess.size,
    pdfUrl: pilonidalAbscessPdf.url,
    pdfName: pilonidalAbscessPdf.original_filename,
    pdfSize: pilonidalAbscessPdf.size,
  },
  {
    id: "pilonidal-sinus",
    category: "Anorectal",
    categoryAr: "الشرج والمستقيم",
    title: "Pilonidal Sinus — Definitive Surgery",
    titleAr: "الناسور الشعري — الجراحة النهائية",
    summary:
      "Excision and flap repair of chronic pilonidal sinus — surgical options, wound care, hair removal, and prevention of recurrence.",
    summaryAr:
      "استئصال الناسور الشعري المزمن وإصلاحه بالشريحة — الخيارات الجراحية، العناية بالجرح، إزالة الشعر، والوقاية من التكرار.",
    fileUrl: pilonidalSinus.url,
    fileName: pilonidalSinus.original_filename,
    fileSize: pilonidalSinus.size,
    pdfUrl: pilonidalSinusPdf.url,
    pdfName: pilonidalSinusPdf.original_filename,
    pdfSize: pilonidalSinusPdf.size,
  },
  {
    id: "lipoma-excision",
    category: "Minor Procedures",
    categoryAr: "إجراءات صغرى",
    title: "Lipoma Excision (Local Anesthesia)",
    titleAr: "استئصال الورم الشحمي تحت التخدير الموضعي",
    summary:
      "Office-based removal of a benign lipoma under local anesthesia — what to expect, scar care, and when to seek further evaluation.",
    summaryAr:
      "استئصال الورم الشحمي الحميد في العيادة تحت التخدير الموضعي — ما يحدث أثناء العملية، العناية بالندبة، ومتى تطلب تقييمًا إضافيًا.",
    fileUrl: lipoma.url,
    fileName: lipoma.original_filename,
    fileSize: lipoma.size,
    pdfUrl: lipomaPdf.url,
    pdfName: lipomaPdf.original_filename,
    pdfSize: lipomaPdf.size,
  },
  {
    id: "thyroidectomy",
    category: "Endocrine",
    categoryAr: "الغدد الصماء",
    title: "Thyroidectomy",
    titleAr: "استئصال الغدة الدرقية",
    summary:
      "Partial or total removal of the thyroid gland — indications, voice and calcium considerations, scar care, and long-term hormone replacement.",
    summaryAr:
      "استئصال جزئي أو كامل للغدة الدرقية — الدواعي، اعتبارات الصوت والكالسيوم، العناية بالندبة، والعلاج الهرموني طويل المدى.",
    fileUrl: thyroidectomy.url,
    fileName: thyroidectomy.original_filename,
    fileSize: thyroidectomy.size,
    pdfUrl: thyroidectomyPdf.url,
    pdfName: thyroidectomyPdf.original_filename,
    pdfSize: thyroidectomyPdf.size,
  },
  {
    id: "hidradenitis-suppurativa",
    category: "Minor Procedures",
    categoryAr: "إجراءات صغرى",
    title: "Hidradenitis Suppurativa (HS) — Patient Guide",
    titleAr: "دليلك الشامل للفهم والتعايش مع التهاب الغدد العرقية القيحي (HS)",
    summary:
      "Comprehensive Arabic guide to living with hidradenitis suppurativa: what the disease is, triggers to avoid (smoking, weight, friction, hormones), medical and surgical options, diet, personal-care routine, and a safe home antiseptic recipe. Not contagious, not caused by poor hygiene.",
    summaryAr:
      "دليل عربي شامل للتعايش مع التهاب الغدد العرقية القيحي: ما هو المرض وأين يظهر، الأعراض، المحفزات الواجب تجنبها (التدخين، الوزن، الاحتكاك، الهرمونات)، الخيارات الدوائية والجراحية، النظام الغذائي، روتين العناية الشخصية، ووصفة آمنة للغسول المنزلي بالخل. غير معدي ولا علاقة له بالنظافة.",
    fileUrl: hidradenitis.url,
    fileName: hidradenitis.original_filename,
    fileSize: hidradenitis.size,
    pdfUrl: hidradenitisPdf.url,
    pdfName: hidradenitisPdf.original_filename,
    pdfSize: hidradenitisPdf.size,
    articleRoute: "/patient-education/hidradenitis-suppurativa",
  },
];

export const educationCategories: EducationCategory[] = [
  "Abdominal",
  "Hernia",
  "Anorectal",
  "Breast",
  "Endocrine",
  "Pediatric",
  "Minor Procedures",
];

export const educationCategoriesAr: Record<EducationCategory, EducationCategoryAr> = {
  Abdominal: "البطن",
  Hernia: "الفتق",
  Anorectal: "الشرج والمستقيم",
  Breast: "الثدي",
  Endocrine: "الغدد الصماء",
  Pediatric: "الأطفال",
  "Minor Procedures": "إجراءات صغرى",
};

import categoryAbdominal from "@/assets/patient-education/category-abdominal.jpg";
import categoryHernia from "@/assets/patient-education/category-hernia.jpg";
import categoryAnorectal from "@/assets/patient-education/category-anorectal.jpg";
import categoryBreast from "@/assets/patient-education/category-breast.jpg";
import categoryEndocrine from "@/assets/patient-education/category-endocrine.jpg";
import categoryPediatric from "@/assets/patient-education/category-pediatric.jpg";
import categoryMinor from "@/assets/patient-education/category-minor.jpg";

export const educationCategoryImages: Record<EducationCategory, string> = {
  Abdominal: categoryAbdominal,
  Hernia: categoryHernia,
  Anorectal: categoryAnorectal,
  Breast: categoryBreast,
  Endocrine: categoryEndocrine,
  Pediatric: categoryPediatric,
  "Minor Procedures": categoryMinor,
};

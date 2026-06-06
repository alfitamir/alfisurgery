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

export type EducationCategory = "Abdominal" | "Breast" | "Anorectal" | "Hernia" | "Minor Procedures";
export type EducationCategoryAr = "البطن" | "الثدي" | "الشرج والمستقيم" | "الفتق" | "إجراءات صغرى";

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
];

export const educationCategories: EducationCategory[] = [
  "Abdominal",
  "Hernia",
  "Anorectal",
  "Breast",
  "Minor Procedures",
];

export const educationCategoriesAr: Record<EducationCategory, EducationCategoryAr> = {
  Abdominal: "البطن",
  Hernia: "الفتق",
  Anorectal: "الشرج والمستقيم",
  Breast: "الثدي",
  "Minor Procedures": "إجراءات صغرى",
};

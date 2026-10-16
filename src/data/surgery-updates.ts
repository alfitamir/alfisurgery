export type Audience = "doctors" | "patients";

export interface SurgeryUpdate {
  audience: Audience;
  tag: { en: string; ar: string };
  date: string; // e.g. "2024"
  title: { en: string; ar: string };
  summary: { en: string; ar: string };
  source: { en: string; ar: string };
  url: string;
}

export const surgeryUpdates: SurgeryUpdate[] = [
  // ===== FOR DOCTORS =====
  {
    audience: "doctors",
    tag: { en: "Bariatric", ar: "جراحة السمنة" },
    date: "2025",
    title: {
      en: "GLP-1 agonists reshape bariatric practice",
      ar: "أدوية GLP-1 تُعيد رسم ممارسة جراحة السمنة",
    },
    summary: {
      en: "Guidelines now integrate semaglutide/tirzepatide before and after metabolic surgery to optimise weight loss, treat weight regain, and manage high-risk candidates. Surgical volumes are shifting toward combined pharmaco-surgical pathways.",
      ar: "تُدمج الإرشادات الحديثة سيماغلوتيد وتيرزيباتيد قبل وبعد جراحات السمنة لتحسين فقدان الوزن، وعلاج استعادة الوزن، وإدارة المرضى عاليي الخطورة. حجم العمليات يتحوّل نحو مسارات دوائية-جراحية مشتركة.",
    },
    source: { en: "ASMBS/IFSO consensus 2024–2025", ar: "توافق ASMBS/IFSO 2024–2025" },
    url: "https://asmbs.org/",
  },
  {
    audience: "doctors",
    tag: { en: "Colorectal", ar: "القولون والمستقيم" },
    date: "2024",
    title: {
      en: "Watch-and-wait after total neoadjuvant therapy for rectal cancer",
      ar: "المراقبة بدل الجراحة بعد العلاج الكامل قبل الجراحي لسرطان المستقيم",
    },
    summary: {
      en: "OPRA and updated NCCN data support organ-preservation in complete clinical responders after TNT, with 3-year TME-free survival around 50%. Strict MRI + endoscopic surveillance is mandatory.",
      ar: "تدعم بيانات دراسة OPRA وتحديثات NCCN الحفاظ على العضو لدى المستجيبين الكاملين إكلينيكيًا بعد TNT، مع بقاء نحو 50% بدون استئصال في 3 سنوات، بشرط متابعة صارمة بالرنين والمنظار.",
    },
    source: { en: "NCCN Rectal Cancer v3.2024", ar: "إرشادات NCCN لسرطان المستقيم 2024" },
    url: "https://www.nccn.org/guidelines/category_1",
  },
  {
    audience: "doctors",
    tag: { en: "HPB / Gallstones", ar: "الكبد والمرارة" },
    date: "2024",
    title: {
      en: "Subtotal cholecystectomy is now a recognised bailout, not a failure",
      ar: "الاستئصال الجزئي للمرارة أصبح خيار إنقاذ معتمدًا وليس فشلاً",
    },
    summary: {
      en: "SAGES and WSES safe-cholecystectomy updates endorse fenestrating/reconstituting subtotal cholecystectomy for difficult Calot's triangle, with clear documentation and drain use, to prevent bile-duct injury.",
      ar: "تحديثات SAGES وWSES تدعم الاستئصال الجزئي (fenestrating/reconstituting) للمرارة الصعبة لتجنّب إصابة القناة المرارية، مع توثيق واضح واستخدام الدرين عند اللزوم.",
    },
    source: { en: "SAGES Safe Cholecystectomy Program", ar: "برنامج SAGES للاستئصال الآمن" },
    url: "https://www.sages.org/safe-cholecystectomy-program/",
  },
  {
    audience: "doctors",
    tag: { en: "Hernia", ar: "الفتق" },
    date: "2024",
    title: {
      en: "Robotic TAPP/eTEP overtakes open repair for complex ventral hernias",
      ar: "الإصلاح الروبوتي TAPP/eTEP يتقدّم على المفتوح في الفتوق البطنية المعقّدة",
    },
    summary: {
      en: "AHSQC and EHS 2024 data show reduced surgical-site occurrences, shorter LOS, and comparable recurrence vs open Rives–Stoppa for W2 midline defects, favouring robotic retromuscular repair.",
      ar: "بيانات AHSQC وEHS 2024 تُظهر انخفاض مضاعفات الجرح وقصر مدة الإقامة وتكرار مماثل مقارنة بعملية Rives–Stoppa المفتوحة في الفتوق المتوسطة، لصالح الإصلاح الروبوتي خلف العضلة.",
    },
    source: { en: "European Hernia Society 2024", ar: "الجمعية الأوروبية للفتق 2024" },
    url: "https://www.europeanherniasociety.eu/",
  },
  {
    audience: "doctors",
    tag: { en: "Emergency Surgery", ar: "جراحة الطوارئ" },
    date: "2024",
    title: {
      en: "Non-operative management of uncomplicated appendicitis: durable at 5 years",
      ar: "العلاج غير الجراحي للزائدة غير المعقّدة: نتائج مستقرة عند 5 سنوات",
    },
    summary: {
      en: "CODA trial 5-year follow-up: ~40% of antibiotic-treated patients eventually needed appendectomy, but overall quality-of-life outcomes were equivalent — shared decision-making is now standard for uncomplicated cases without appendicolith.",
      ar: "متابعة 5 سنوات لدراسة CODA: نحو 40% من مرضى المضادات احتاجوا لاحقًا لاستئصال، لكن جودة الحياة متماثلة — أصبح القرار المشترك مع المريض هو المعيار في الحالات غير المعقّدة بدون حصوة زائدية.",
    },
    source: { en: "NEJM CODA trial update, 2024", ar: "تحديث دراسة CODA — NEJM 2024" },
    url: "https://www.nejm.org/",
  },
  {
    audience: "doctors",
    tag: { en: "Endocrine", ar: "الغدد الصماء" },
    date: "2024",
    title: {
      en: "Thermal ablation (RFA/MWA) enters mainstream thyroid nodule guidelines",
      ar: "الاستئصال الحراري (RFA/MWA) يدخل الإرشادات الرئيسية لعقيدات الغدة الدرقية",
    },
    summary: {
      en: "AACE/ETA 2024 endorse RFA as first-line for symptomatic benign nodules and select low-risk PTMCs in non-surgical candidates, with 60–80% volume reduction at 12 months.",
      ar: "إرشادات AACE/ETA 2024 تعتمد التردد الحراري كخط أول للعقيدات الحميدة المصحوبة بأعراض ولحالات مختارة من سرطان الدرقية الحليمي الصغير في المرضى غير المرشحين للجراحة، بتقليل حجم 60–80% خلال سنة.",
    },
    source: { en: "European Thyroid Association 2024", ar: "الجمعية الأوروبية للغدة الدرقية 2024" },
    url: "https://www.eurothyroid.com/",
  },
  {
    audience: "doctors",
    tag: { en: "AI in Surgery", ar: "الذكاء الاصطناعي" },
    date: "2025",
    title: {
      en: "AI-guided intraoperative Critical View of Safety",
      ar: "الذكاء الاصطناعي لتوجيه رؤية السلامة أثناء العملية",
    },
    summary: {
      en: "Real-time computer-vision systems (e.g. GoNoGoNet, EndoSight) now annotate the Calot's triangle live and flag risky dissection during laparoscopic cholecystectomy — early trials show reduced bile-duct injury risk.",
      ar: "أنظمة الرؤية الحاسوبية اللحظية (مثل GoNoGoNet وEndoSight) تُحدّد مثلث Calot أثناء العملية وتنبّه للتشريح الخطير في استئصال المرارة بالمنظار، مع إشارات مبكرة لتقليل إصابة القناة المرارية.",
    },
    source: { en: "SAGES/EAES joint statement, 2024", ar: "بيان مشترك SAGES/EAES 2024" },
    url: "https://www.sages.org/",
  },
  {
    audience: "doctors",
    tag: { en: "Perioperative", ar: "الرعاية المحيطة بالعملية" },
    date: "2024",
    title: {
      en: "GLP-1 agonists and preoperative fasting: ASA guidance",
      ar: "أدوية GLP-1 والصيام قبل التخدير: إرشادات ASA",
    },
    summary: {
      en: "Current multi-society guidance allows most patients to continue GLP-1 agonists before elective surgery, with individualised aspiration precautions such as a 24-hour liquid diet. The surgeon and anaesthetist must know beforehand, as fasting instructions vary and may be adjusted.",
      ar: "تسمح الإرشادات الحالية لمعظم المرضى بالاستمرار على أدوية GLP-1 قبل الجراحة المخططة، مع احتياطات فردية لتقليل خطر الشفط مثل الاكتفاء بالسوائل 24 ساعة. ويجب إبلاغ الجرّاح وطبيب التخدير مسبقًا، لأن تعليمات الصيام تختلف وقد تُعدَّل.",
    },
    source: { en: "American Society of Anesthesiologists, 2024", ar: "الجمعية الأمريكية للتخدير 2024" },
    url: "https://www.asahq.org/",
  },
  {
    audience: "doctors",
    tag: { en: "Anorectal", ar: "الشرج والقولون" },
    date: "2024",
    title: {
      en: "Pit-picking & sinusectomy overtake wide excision for pilonidal disease",
      ar: "تقنيات pit-picking وسحب الجيب تتفوّق على الاستئصال الواسع في الجيب الشعري",
    },
    summary: {
      en: "European and North-American guidelines now recommend minimally-invasive pit-picking, EPSiT and laser sinus ablation as first-line, with faster return to work and equivalent recurrence to flap procedures.",
      ar: "توصي الإرشادات الأوروبية والأمريكية بالتقنيات قليلة التوغّل (pit-picking، EPSiT، والليزر) كخط أول، مع عودة أسرع للعمل ونسبة تكرار مماثلة للسدائل الجراحية.",
    },
    source: { en: "ESCP Pilonidal Guideline 2024", ar: "إرشادات ESCP للجيب الشعري 2024" },
    url: "https://www.escp.eu.com/",
  },
  {
    audience: "doctors",
    tag: { en: "Trauma / Acute Care", ar: "الطوارئ الحادة" },
    date: "2024",
    title: {
      en: "Water-soluble contrast challenge shortens adhesive SBO admissions",
      ar: "اختبار الجاستروجرافين يُقصّر مدة إقامة انسداد الأمعاء اللاصق",
    },
    summary: {
      en: "Updated WSES 2024 guidelines endorse gastrografin within 48h of admission for adhesive small-bowel obstruction — both diagnostic and therapeutic, with clear operative triggers if contrast fails to reach the colon by 24h.",
      ar: "إرشادات WSES 2024 تعتمد الجاستروجرافين خلال 48 ساعة من الحجز في انسداد الأمعاء اللاصق، لأغراض تشخيصية وعلاجية، مع مؤشرات جراحية واضحة إذا لم يصل التباين للقولون خلال 24 ساعة.",
    },
    source: { en: "WSES Bologna Guidelines 2024", ar: "إرشادات WSES بولونيا 2024" },
    url: "https://wjes.biomedcentral.com/",
  },

  // ===== FOR PATIENTS =====
  {
    audience: "patients",
    tag: { en: "Weight-loss surgery", ar: "جراحة إنقاص الوزن" },
    date: "2025",
    title: {
      en: "New weight-loss injections change how we plan bariatric surgery",
      ar: "حقن إنقاص الوزن الجديدة غيّرت طريقة التخطيط لجراحة السمنة",
    },
    summary: {
      en: "Medicines like Ozempic, Wegovy and Mounjaro can now be combined with surgery — sometimes to make surgery safer beforehand, sometimes to keep weight down afterwards. Discuss with your surgeon before stopping or starting them.",
      ar: "أدوية مثل أوزمبيك، ويجوفي، وماونجارو أصبحت تُستخدم مع الجراحة — أحيانًا قبلها لتقليل المخاطر، وأحيانًا بعدها للحفاظ على الوزن. تحدّث مع طبيبك قبل بدء أو إيقاف أي منها.",
    },
    source: { en: "International bariatric societies, 2024", ar: "الجمعيات الدولية لجراحة السمنة 2024" },
    url: "https://asmbs.org/patients/",
  },
  {
    audience: "patients",
    tag: { en: "Anaesthesia safety", ar: "سلامة التخدير" },
    date: "2024",
    title: {
      en: "If you take Ozempic or Wegovy, tell your surgical team early",
      ar: "إذا كنت تأخذ أوزمبيك أو ويجوفي، أخبر فريقك الجراحي مبكرًا",
    },
    summary: {
      en: "These medicines slow stomach emptying. Do not stop them on your own: most people can continue them. Tell your surgeon and anaesthetist before surgery, because your fasting instructions differ and may be adjusted, for example liquids only the day before.",
      ar: "هذه الأدوية تُبطئ إفراغ المعدة. لا توقفها من تلقاء نفسك، فمعظم المرضى يمكنهم الاستمرار عليها. أخبر طبيبك وطبيب التخدير قبل العملية، لأن تعليمات الصيام تختلف في حالتك وقد تُعدَّل، مثل الاكتفاء بالسوائل في اليوم السابق.",
    },
    source: { en: "American Society of Anesthesiologists, 2024", ar: "الجمعية الأمريكية للتخدير 2024" },
    url: "https://www.asahq.org/madeforthismoment/preparing-for-surgery/prep/patients-taking-glp-1-medications",
  },
  {
    audience: "patients",
    tag: { en: "Gallbladder surgery", ar: "جراحة المرارة" },
    date: "2024",
    title: {
      en: "Same-day home discharge after gallbladder removal is now routine",
      ar: "الخروج في نفس يوم استئصال المرارة أصبح روتينًا",
    },
    summary: {
      en: "Most patients having laparoscopic gallbladder removal go home the same day, walk within a few hours, and return to light activity within a week. Fatty and fried foods should be limited for the first 2–3 weeks.",
      ar: "معظم المرضى بعد استئصال المرارة بالمنظار يخرجون في نفس اليوم، ويمشون خلال ساعات، ويعودون للنشاط الخفيف خلال أسبوع. يُنصح بتجنّب الدهون والقلي لأول 2–3 أسابيع.",
    },
    source: { en: "SAGES patient information, 2024", ar: "معلومات مرضى SAGES 2024" },
    url: "https://www.sages.org/patient-information-for-laparoscopic-gallbladder-removal-cholecystectomy-from-sages/",
  },
  {
    audience: "patients",
    tag: { en: "Colon cancer", ar: "سرطان القولون" },
    date: "2024",
    title: {
      en: "Some rectal cancers may no longer need surgery",
      ar: "بعض حالات سرطان المستقيم قد لا تحتاج للجراحة",
    },
    summary: {
      en: "If your rectal cancer completely disappears after chemotherapy and radiation, your team may offer a 'watch and wait' plan — very close scans instead of removing the rectum. It is only safe with strict follow-up.",
      ar: "إذا اختفى ورم المستقيم تمامًا بعد العلاج الكيماوي والإشعاعي، قد يعرض عليك الفريق خطة \"المراقبة\" بدلًا من الاستئصال، مع فحوصات متقاربة جدًا. آمنة فقط بمتابعة صارمة.",
    },
    source: { en: "American Cancer Society update, 2024", ar: "تحديث الجمعية الأمريكية للسرطان 2024" },
    url: "https://www.cancer.org/cancer/types/colon-rectal-cancer.html",
  },
  {
    audience: "patients",
    tag: { en: "Thyroid nodules", ar: "عقيدات الغدة الدرقية" },
    date: "2024",
    title: {
      en: "Radiofrequency ablation: a scarless option for some thyroid lumps",
      ar: "التردد الحراري: خيار بدون ندبة لبعض عقيدات الغدة الدرقية",
    },
    summary: {
      en: "For benign thyroid nodules causing pressure or a visible swelling, radiofrequency ablation (RFA) shrinks the lump through a small needle in the clinic — no cut, no thyroid removal, and no lifelong hormone tablets.",
      ar: "للعقيدات الحميدة التي تسبّب ضغطًا أو تورّمًا ظاهرًا، يمكن تصغيرها بالتردد الحراري (RFA) عبر إبرة رفيعة في العيادة — بدون شقّ، وبدون استئصال الغدة، وبدون هرمون مدى الحياة.",
    },
    source: { en: "European Thyroid Association, 2024", ar: "الجمعية الأوروبية للغدة الدرقية 2024" },
    url: "https://www.eurothyroid.com/patients.html",
  },
  {
    audience: "patients",
    tag: { en: "Hernia repair", ar: "إصلاح الفتق" },
    date: "2024",
    title: {
      en: "Keyhole and robotic hernia repair: less pain, faster recovery",
      ar: "إصلاح الفتق بالمنظار والروبوت: ألم أقل وتعافٍ أسرع",
    },
    summary: {
      en: "For most ventral, umbilical and inguinal hernias, minimally-invasive repair means smaller cuts, less wound infection, and return to office work in about 1–2 weeks. Heavy lifting still waits 4–6 weeks.",
      ar: "لمعظم فتوق البطن والسرّة والفخذ، الإصلاح قليل التوغّل يعني شقوقًا أصغر، والتهابات جرح أقل، وعودة للعمل المكتبي خلال 1–2 أسبوع. رفع الأثقال ينتظر 4–6 أسابيع.",
    },
    source: { en: "European Hernia Society patients, 2024", ar: "الجمعية الأوروبية للفتق للمرضى 2024" },
    url: "https://www.europeanherniasociety.eu/patients",
  },
  {
    audience: "patients",
    tag: { en: "Appendicitis", ar: "التهاب الزائدة" },
    date: "2024",
    title: {
      en: "Antibiotics instead of surgery for some cases of appendicitis",
      ar: "المضادات الحيوية بدلًا من الجراحة في بعض حالات الزائدة",
    },
    summary: {
      en: "For mild appendicitis without a stone inside the appendix, IV antibiotics can be tried first. About 4 out of 10 patients will still need surgery within 5 years, but many avoid it. Not suitable for complicated cases.",
      ar: "في التهاب الزائدة البسيط دون حصوة داخلها، يمكن تجربة المضادات أولًا. حوالي 4 من كل 10 مرضى سيحتاجون الجراحة خلال 5 سنوات، لكن كثيرين يتجنبونها. غير مناسبة للحالات المعقّدة.",
    },
    source: { en: "CODA trial 5-year data, NEJM 2024", ar: "بيانات دراسة CODA 5 سنوات — NEJM 2024" },
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2116018",
  },
  {
    audience: "patients",
    tag: { en: "Pilonidal disease", ar: "الجيب الشعري" },
    date: "2024",
    title: {
      en: "Small-hole pilonidal surgery: back to work in days, not weeks",
      ar: "جراحة الجيب الشعري بالثقب الصغير: أيام لا أسابيع للعودة للعمل",
    },
    summary: {
      en: "Modern pit-picking and endoscopic (EPSiT) or laser techniques close the sinus through tiny openings. Most patients walk out the same day, shower after 48 hours, and go back to school or work within 3–7 days.",
      ar: "التقنيات الحديثة (pit-picking وEPSiT والليزر) تعالج الجيب عبر ثقوب صغيرة. معظم المرضى يخرجون في نفس اليوم، يستحمّون بعد 48 ساعة، ويعودون للدراسة أو العمل خلال 3–7 أيام.",
    },
    source: { en: "European coloproctology guidelines, 2024", ar: "الإرشادات الأوروبية لجراحة القولون 2024" },
    url: "https://www.escp.eu.com/education/patient-information",
  },
  {
    audience: "patients",
    tag: { en: "Recovery (ERAS)", ar: "التعافي السريع" },
    date: "2024",
    title: {
      en: "Eat, drink, and walk sooner — Enhanced Recovery is now standard",
      ar: "الأكل والشرب والمشي مبكرًا — بروتوكولات التعافي السريع أصبحت المعيار",
    },
    summary: {
      en: "For gallbladder, hernia, colon and bariatric surgery you'll be encouraged to sip fluids within hours, eat light meals the same day, and walk short distances that evening. This lowers clots, chest infections and time in hospital.",
      ar: "في جراحات المرارة والفتق والقولون والسمنة يُشجَّع المريض على شرب السوائل خلال ساعات، وأكل وجبة خفيفة في نفس اليوم، والمشي مساءً. هذا يقلّل الجلطات والتهابات الصدر ومدة الإقامة.",
    },
    source: { en: "ERAS® Society patient guidance, 2024", ar: "إرشادات مرضى جمعية ERAS® 2024" },
    url: "https://erassociety.org/",
  },
  {
    audience: "patients",
    tag: { en: "Smart operating room", ar: "غرفة العمليات الذكية" },
    date: "2025",
    title: {
      en: "Artificial intelligence is quietly helping keep your surgery safer",
      ar: "الذكاء الاصطناعي يساعد بهدوء على جعل عمليتك أكثر أمانًا",
    },
    summary: {
      en: "New AI camera systems watch the operative field in real time during keyhole surgery and warn the surgeon if the dissection gets close to important ducts or vessels — an extra safety layer, not a replacement for the surgeon.",
      ar: "أنظمة كاميرات الذكاء الاصطناعي تراقب الحقل الجراحي أثناء عمليات المنظار وتنبّه الجرّاح عند الاقتراب من قنوات أو أوعية مهمة — طبقة أمان إضافية، وليست بديلًا عن الجرّاح.",
    },
    source: { en: "SAGES safety updates, 2024–2025", ar: "تحديثات السلامة من SAGES 2024–2025" },
    url: "https://www.sages.org/safe-cholecystectomy-program/",
  },
];

export interface SummaryPoint {
  label: string;
  labelAr: string;
  text: string;
  textAr: string;
}

const L = {
  what: ["What it is", "ما هي الحالة"],
  op: ["The operation", "العملية"],
  anes: ["Anesthesia & stay", "التخدير والإقامة"],
  rec: ["Recovery", "التعافي"],
  care: ["Home care", "العناية بالمنزل"],
  red: ["Warning signs", "علامات تستدعي الاتصال"],
} as const;

const p = (
  k: keyof typeof L,
  text: string,
  textAr: string,
): SummaryPoint => ({ label: L[k][0], labelAr: L[k][1], text, textAr });

const RED_GENERIC = p(
  "red",
  "Fever above 38°C, spreading redness, pus, heavy bleeding, or pain that keeps getting worse.",
  "حرارة أعلى من 38° مئوية، احمرار متزايد، صديد، نزيف غزير، أو ألم يزداد سوءًا.",
);

export const educationSummaries: Record<string, SummaryPoint[]> = {
  appendectomy: [
    p("what", "The appendix is inflamed (appendicitis) and must be removed before it perforates.", "التهاب الزائدة الدودية الذي يجب استئصاله قبل حدوث انثقاب."),
    p("op", "Keyhole (laparoscopic) removal through 3 small cuts; open surgery if complicated.", "استئصال بالمنظار عبر ٣ فتحات صغيرة، أو جراحة مفتوحة في الحالات المعقّدة."),
    p("anes", "General anesthesia; usually 1–2 nights in hospital.", "تخدير كلي، والإقامة عادة ليلة إلى ليلتين."),
    p("rec", "Light diet within 24 hours, walking the same day, back to work in 1–2 weeks.", "أكل خفيف خلال ٢٤ ساعة، المشي في نفس اليوم، والعودة للعمل خلال أسبوع إلى أسبوعين."),
    p("red", "Fever, worsening abdominal pain, vomiting, or a discharging wound.", "حرارة، ألم بطني متزايد، قيء، أو إفرازات من الجرح."),
  ],
  cholecystectomy: [
    p("what", "Gallstones or chronic gallbladder inflammation causing pain after fatty meals.", "حصوات المرارة أو التهابها المزمن المسبب للألم بعد الوجبات الدسمة."),
    p("op", "Laparoscopic removal of the whole gallbladder through 4 small ports.", "استئصال المرارة بالكامل بالمنظار عبر ٤ فتحات صغيرة."),
    p("anes", "General anesthesia; often same-day or one-night stay.", "تخدير كلي، والخروج في نفس اليوم أو بعد ليلة واحدة."),
    p("rec", "Normal light food from day one; avoid heavy fatty meals for 2–3 weeks.", "طعام خفيف من اليوم الأول، مع تجنب الوجبات الدسمة لمدة ٢-٣ أسابيع."),
    p("red", "Yellow eyes, dark urine, fever, or severe persistent abdominal pain.", "اصفرار العين، بول داكن، حرارة، أو ألم بطني شديد مستمر."),
  ],
  "inguinal-hernia": [
    p("what", "A groin bulge from a weak abdominal wall; it will not heal on its own.", "انتفاخ في المنطقة الإربية بسبب ضعف جدار البطن، ولا يُشفى تلقائيًا."),
    p("op", "Tension-free mesh repair placed behind the defect using keyhole surgery.", "إصلاح بشبكة دون شدّ توضع خلف الفتق باستخدام المنظار."),
    p("anes", "General anesthesia; usually discharged the same or next day.", "تخدير كلي، والخروج في نفس اليوم أو اليوم التالي."),
    p("rec", "Walking immediately, desk work in about a week, no heavy lifting for 4 weeks.", "المشي فورًا، العمل المكتبي بعد أسبوع، وتجنب رفع الأثقال ٤ أسابيع."),
    p("red", "Sudden severe pain, a hard irreducible lump, or vomiting — go to emergency.", "ألم مفاجئ شديد، كتلة صلبة لا ترتد، أو قيء — توجّه للطوارئ."),
  ],
  "ventral-hernia": [
    p("what", "A bulge at the umbilicus or midline through a weak point in the abdominal wall.", "انتفاخ عند السرة أو منتصف البطن عبر نقطة ضعف في جدار البطن."),
    p("op", "Laparoscopic mesh repair that reinforces the whole weak area.", "إصلاح بالمنظار بشبكة تقوّي المنطقة الضعيفة بالكامل."),
    p("anes", "General anesthesia; 1 night stay is typical.", "تخدير كلي، والإقامة عادة ليلة واحدة."),
    p("rec", "Abdominal binder as advised, no straining or lifting for 4–6 weeks.", "استخدام حزام البطن حسب التعليمات، وتجنب الشدّ والرفع ٤-٦ أسابيع."),
    p("care", "Keep weight, cough and constipation controlled to protect the repair.", "التحكم في الوزن والسعال والإمساك للحفاظ على نتيجة الإصلاح."),
  ],
  haemorrhoidectomy: [
    p("what", "Advanced (grade III–IV) or bleeding piles not controlled by diet and creams.", "بواسير متقدمة (الدرجة الثالثة والرابعة) أو نازفة لم تستجب للعلاج التحفظي."),
    p("op", "Surgical excision of the piles, sometimes with stapling or laser techniques.", "استئصال جراحي للبواسير، وأحيانًا بتقنيات الدباسة أو الليزر."),
    p("rec", "Pain is worst in the first week; expect small amounts of bleeding with motions.", "الألم أشدّ في الأسبوع الأول مع نزيف بسيط أثناء التبرز."),
    p("care", "Warm sitz baths 3× daily, high-fibre diet, plenty of water, stool softeners.", "مغاطس دافئة ٣ مرات يوميًا، غذاء غني بالألياف، ماء كثير، وملينات."),
    p("red", "Heavy bleeding, inability to pass urine, or fever with severe pain.", "نزيف غزير، عدم القدرة على التبول، أو حرارة مع ألم شديد."),
  ],
  "breast-lump": [
    p("what", "Any new breast lump needs assessment — most are benign, but cancer must be excluded.", "أي كتلة جديدة في الثدي تحتاج تقييمًا — معظمها حميد لكن يجب استبعاد السرطان."),
    p("op", "Triple assessment: clinical exam + ultrasound/mammogram + needle biopsy.", "التقييم الثلاثي: فحص سريري + أشعة/سونار + خزعة بالإبرة."),
    p("rec", "Benign lumps may be watched or excised through a small cosmetic incision.", "الكتل الحميدة يمكن متابعتها أو استئصالها عبر شق تجميلي صغير."),
    p("care", "Results are discussed in clinic and a treatment plan agreed with you.", "تُناقش النتائج في العيادة ويُتفق على خطة العلاج معك."),
    p("red", "Hard fixed lump, skin dimpling, nipple retraction, or bloody discharge.", "كتلة صلبة ثابتة، انسحاب الجلد أو الحلمة، أو إفراز دموي."),
  ],
  fibroadenosis: [
    p("what", "Benign hormone-related lumpiness and breast pain, common between 20 and 50.", "تكتلات وآلام حميدة مرتبطة بالهرمونات، شائعة بين عمر ٢٠ و٥٠."),
    p("op", "Diagnosed by examination and ultrasound; surgery is rarely needed.", "يُشخّص بالفحص والسونار، ونادرًا ما تحتاج جراحة."),
    p("care", "Supportive bra, less caffeine, warm compresses, and simple painkillers.", "حمالة صدر داعمة، تقليل الكافيين، كمادات دافئة، ومسكنات بسيطة."),
    p("rec", "Symptoms fluctuate with the cycle and settle after menopause.", "تتغير الأعراض مع الدورة الشهرية وتهدأ بعد سن اليأس."),
    p("red", "A new hard lump, skin change, or bloody nipple discharge needs review.", "كتلة صلبة جديدة أو تغير في الجلد أو إفراز دموي يستدعي المراجعة."),
  ],
  "abscess-drainage": [
    p("what", "A collection of pus under the skin that antibiotics alone cannot cure.", "تجمع صديدي تحت الجلد لا تكفي المضادات الحيوية وحدها لعلاجه."),
    p("op", "Small incision under local anesthesia to release pus and wash the cavity.", "شق صغير تحت التخدير الموضعي لتصريف الصديد وغسل التجويف."),
    p("care", "The wound is left open with a pack; dressings are changed every 1–2 days.", "يُترك الجرح مفتوحًا مع حشوة، وتُغيّر الضمادات كل يوم إلى يومين."),
    p("rec", "Healing from the base takes 1–3 weeks depending on size.", "يلتئم الجرح من القاع خلال ١-٣ أسابيع حسب الحجم."),
    RED_GENERIC,
  ],
  "ingrowing-nail": [
    p("what", "The nail edge cuts into the skin causing repeated pain and infection.", "حافة الظفر تخترق الجلد مسببة ألمًا والتهابًا متكررًا."),
    p("op", "Wedge excision of the nail edge with destruction of that part of the nail bed.", "استئصال إسفيني لحافة الظفر مع إتلاف الجزء المقابل من فراش الظفر."),
    p("anes", "Local (ring block) anesthesia in the clinic; takes about 20 minutes.", "تخدير موضعي في العيادة خلال حوالي ٢٠ دقيقة."),
    p("care", "Keep the foot elevated and dry for 48 hours, then daily dressing.", "رفع القدم وإبقاؤها جافة ٤٨ ساعة، ثم تغيير الضماد يوميًا."),
    p("rec", "Wear open or wide shoes for 2 weeks; cut nails straight across afterwards.", "ارتداء حذاء واسع لأسبوعين، وقص الأظافر بشكل مستقيم لاحقًا."),
  ],
  "wrist-ganglion": [
    p("what", "A jelly-filled cyst arising from the wrist joint; harmless but can ache.", "كيس مملوء بسائل هلامي ينشأ من مفصل الرسغ، غير خطير لكنه قد يؤلم."),
    p("op", "Excision of the cyst together with its stalk down to the joint capsule.", "استئصال الكيس مع عنقه حتى محفظة المفصل."),
    p("anes", "Local or regional anesthesia as a day case.", "تخدير موضعي أو ناحي، والخروج في نفس اليوم."),
    p("care", "Light splint and elevation for a few days, stitches out at 10–14 days.", "جبيرة خفيفة ورفع اليد لأيام، وإزالة الغرز بعد ١٠-١٤ يومًا."),
    p("rec", "Recurrence is possible (about 1 in 10) even after complete excision.", "احتمال عودة الكيس نحو ١٠٪ حتى بعد الاستئصال الكامل."),
  ],
  "stoma-reversal-pelvic-floor": [
    p("what", "Preparation before closing a colostomy/ileostomy so continence returns faster.", "التحضير قبل إغلاق فتحة القولون لعودة التحكم في الإخراج بشكل أسرع."),
    p("op", "Daily Kegel-style sphincter and pelvic floor exercises for several weeks before surgery.", "تمارين كيجل لعضلات الشرج وقاع الحوض يوميًا لعدة أسابيع قبل العملية."),
    p("care", "Fibre-balanced diet, good hydration, and skin protection around the stoma.", "غذاء متوازن بالألياف، شرب سوائل كافية، وحماية الجلد حول الستوما."),
    p("rec", "After reversal expect frequent loose motions that improve over weeks.", "بعد الإغلاق يتوقع تكرار البراز اللين مع تحسن تدريجي خلال أسابيع."),
    p("red", "No motion with abdominal distension and vomiting after reversal.", "توقف الإخراج مع انتفاخ البطن والقيء بعد العملية."),
  ],
  "open-inguinal-hernia": [
    p("what", "Groin hernia repaired through a single small groin incision.", "فتق إربي يُصلح عبر شق واحد صغير في المنطقة الإربية."),
    p("op", "Lichtenstein tension-free mesh placed over the defect.", "طريقة ليختنشتاين بوضع شبكة دون شدّ فوق الفتق."),
    p("anes", "Spinal or general anesthesia; usually a day-case or one night.", "تخدير نصفي أو كلي، والخروج في نفس اليوم أو بعد ليلة."),
    p("rec", "Walk the same day; avoid lifting more than 5 kg for 4 weeks.", "المشي في نفس اليوم، وتجنب رفع أكثر من ٥ كجم لمدة ٤ أسابيع."),
    p("red", "Growing swelling, wound discharge, or fever.", "تورم متزايد، إفرازات من الجرح، أو حرارة."),
  ],
  "open-ventral-hernia": [
    p("what", "Umbilical or midline hernia repaired through a direct incision.", "فتق سُري أو بطني يُصلح عبر شق مباشر."),
    p("op", "Defect closed and reinforced with a mesh in most adults.", "إغلاق الفتق وتقويته بشبكة في معظم البالغين."),
    p("anes", "General or spinal anesthesia; short hospital stay.", "تخدير كلي أو نصفي مع إقامة قصيرة."),
    p("rec", "Abdominal support garment, no straining or lifting for 4–6 weeks.", "حزام دعم للبطن، وتجنب الشدّ والرفع ٤-٦ أسابيع."),
    p("care", "Treat cough and constipation early to prevent recurrence.", "علاج السعال والإمساك مبكرًا لمنع تكرار الفتق."),
  ],
  "pediatric-hernia": [
    p("what", "A congenital sac in the groin that stays open; it never closes by itself.", "كيس خلقي في المنطقة الإربية يبقى مفتوحًا ولا يُغلق تلقائيًا."),
    p("op", "Simple high ligation of the sac — no mesh is used in children.", "ربط عالٍ بسيط للكيس دون استخدام شبكة عند الأطفال."),
    p("anes", "Short general anesthesia; children usually go home the same day.", "تخدير كلي قصير، ويعود الطفل للمنزل غالبًا في نفس اليوم."),
    p("rec", "Back to normal play in a few days; keep the wound dry for 48 hours.", "العودة للعب الطبيعي خلال أيام، مع إبقاء الجرح جافًا ٤٨ ساعة."),
    p("red", "A tense painful groin lump with vomiting is an emergency.", "كتلة إربية متوترة مؤلمة مع قيء تُعد حالة طارئة."),
  ],
  "plastibell-circumcision": [
    p("what", "Newborn circumcision using a plastic ring that controls bleeding.", "ختان حديثي الولادة باستخدام حلقة بلاستيكية تمنع النزيف."),
    p("op", "The ring is applied over the glans and the foreskin tied over it.", "توضع الحلقة فوق الحشفة وتُربط القلفة عليها."),
    p("care", "Keep the area clean with vaseline gauze; nappy changes as usual.", "الحفاظ على النظافة بشاش وفازلين، وتغيير الحفاض كالمعتاد."),
    p("rec", "The ring falls off on its own within 5–10 days.", "تسقط الحلقة تلقائيًا خلال ٥-١٠ أيام."),
    p("red", "Ring not fallen after 10 days, bleeding, swelling, or poor urination.", "عدم سقوط الحلقة بعد ١٠ أيام، نزيف، تورم، أو صعوبة في التبول."),
  ],
  "perianal-abscess": [
    p("what", "A painful pus collection beside the anus, usually from an infected gland.", "تجمع صديدي مؤلم بجوار الشرج، غالبًا من غدة ملتهبة."),
    p("op", "Urgent incision and drainage — antibiotics alone are not enough.", "فتح وتصريف عاجل — المضادات الحيوية وحدها غير كافية."),
    p("anes", "Usually short general or spinal anesthesia.", "غالبًا تخدير كلي قصير أو نصفي."),
    p("care", "Sitz baths, daily dressings, soft stools with fibre and fluids.", "مغاطس دافئة، ضمادات يومية، وتليين البراز بالألياف والسوائل."),
    p("rec", "About 1 in 3 later develop a fistula needing a second procedure.", "نحو ثلث الحالات يتكون لديها ناسور يحتاج عملية ثانية."),
  ],
  "perianal-fistula": [
    p("what", "A tunnel between the anal canal and the skin causing recurrent discharge.", "قناة بين القناة الشرجية والجلد تسبب إفرازات متكررة."),
    p("op", "Fistulotomy, seton placement, or sphincter-sparing techniques (LIFT/laser).", "شق الناسور، وضع خيط (سيتون)، أو تقنيات تحافظ على العضلة."),
    p("anes", "General or spinal anesthesia; often a day-case.", "تخدير كلي أو نصفي، وغالبًا الخروج في نفس اليوم."),
    p("care", "Sitz baths after each motion, dressings, and clinic follow-up.", "مغاطس دافئة بعد كل تبرز، ضمادات، ومتابعة في العيادة."),
    p("rec", "Healing takes 4–8 weeks; protecting continence is the priority.", "يستغرق الشفاء ٤-٨ أسابيع، والأولوية للحفاظ على التحكم."),
  ],
  "pilonidal-abscess": [
    p("what", "An infected hair-containing cavity at the top of the buttock cleft.", "تجويف ملتهب يحتوي على شعر أعلى الشق بين الأليتين."),
    p("op", "Incision and drainage to relieve pain and release pus.", "فتح وتصريف لتخفيف الألم وتصريف الصديد."),
    p("care", "Daily dressings and keeping the area shaved and dry.", "ضمادات يومية مع إزالة الشعر وإبقاء المنطقة جافة."),
    p("rec", "Definitive surgery for the sinus is usually planned later.", "الجراحة الجذرية للناسور الشعري تُخطط لاحقًا عادة."),
    RED_GENERIC,
  ],
  "pilonidal-sinus": [
    p("what", "Chronic hair-driven sinus tracts in the natal cleft with recurrent discharge.", "نواسير مزمنة بسبب الشعر في الشق العجزي مع إفرازات متكررة."),
    p("op", "Excision with flap closure (Limberg/Karydakis), or minimally invasive pit-picking/laser.", "استئصال مع إغلاق برفرفة (ليمبرغ/كاريداكيس) أو تقنيات محدودة التدخل بالليزر."),
    p("anes", "General or spinal anesthesia; 1 day stay typical.", "تخدير كلي أو نصفي مع إقامة يوم واحد عادة."),
    p("care", "Avoid sitting directly on the wound; keep the area hair-free.", "تجنب الجلوس المباشر على الجرح مع إزالة الشعر باستمرار."),
    p("rec", "Return to work in 1–3 weeks depending on technique.", "العودة للعمل خلال ١-٣ أسابيع حسب التقنية."),
  ],
  "lipoma-excision": [
    p("what", "A soft benign fatty lump under the skin; removed for size, pain, or cosmetic reasons.", "كتلة دهنية حميدة لينة تحت الجلد تُزال لحجمها أو ألمها أو لأسباب تجميلية."),
    p("op", "Complete excision of the lump with its capsule through a small incision.", "استئصال كامل للكتلة مع محفظتها عبر شق صغير."),
    p("anes", "Local anesthesia in the clinic, usually 20–30 minutes.", "تخدير موضعي في العيادة خلال ٢٠-٣٠ دقيقة."),
    p("care", "Dry dressing for 48 hours; stitches removed after 7–10 days.", "ضماد جاف ٤٨ ساعة، وإزالة الغرز بعد ٧-١٠ أيام."),
    p("rec", "The specimen is sent for histology; recurrence is uncommon.", "تُرسل العينة للتحليل النسيجي، والعودة نادرة."),
  ],
  thyroidectomy: [
    p("what", "Removal of part or all of the thyroid for nodules, goitre, or cancer.", "استئصال جزء أو كامل الغدة الدرقية بسبب عقيدات أو تضخم أو ورم."),
    p("op", "Neck incision with careful protection of the voice nerves and parathyroids.", "شق في الرقبة مع حماية دقيقة لأعصاب الصوت والغدد جار الدرقية."),
    p("anes", "General anesthesia; 1–2 nights with a small drain sometimes.", "تخدير كلي، وإقامة ليلة إلى ليلتين مع أنبوب تصريف أحيانًا."),
    p("rec", "Mild throat discomfort and voice tiredness settle within weeks.", "ألم بسيط بالحلق وتعب في الصوت يتحسنان خلال أسابيع."),
    p("care", "Thyroid hormone and calcium levels are checked and replaced as needed.", "متابعة هرمون الدرقية والكالسيوم وتعويضهما عند الحاجة."),
    p("red", "Tingling around the mouth or hands, breathing difficulty, or neck swelling.", "تنميل حول الفم أو اليدين، صعوبة تنفس، أو تورم بالرقبة."),
  ],
  "hidradenitis-suppurativa": [
    p("what", "A chronic inflammatory skin disease of hair follicles in armpits, groin, and under breasts.", "مرض جلدي التهابي مزمن يصيب بصيلات الشعر بالإبط والفخذ وتحت الثدي."),
    p("op", "Treatment is staged: topical/antibiotic therapy, biologics, then surgery for scarred areas.", "العلاج متدرج: موضعي ومضادات حيوية، ثم العلاج البيولوجي، ثم الجراحة للمناطق المتليفة."),
    p("care", "Antiseptic washes, loose clothing, weight control, and stopping smoking help a lot.", "غسولات مطهرة، ملابس فضفاضة، ضبط الوزن، والإقلاع عن التدخين."),
    p("rec", "It is not an infection and not contagious — flares come and go.", "ليس عدوى وغير معدٍ، وتأتي النوبات وتذهب."),
    p("red", "Rapidly spreading pain, fever, or a non-healing ulcer needs urgent review.", "ألم منتشر سريعًا، حرارة، أو قرحة لا تلتئم تستدعي المراجعة العاجلة."),
  ],
};

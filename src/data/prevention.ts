import type { SiteLanguage } from "@/lib/site-language";

type Copy = {
  title: string;
  intro: string;
  safety: string;
  search: string;
  empty: string;
  advice: string;
  limits: string;
  urgent: string;
  sources: string;
  review: string;
  read: string;
  back: string;
};
export const preventionCopy: Record<SiteLanguage, Copy> = {
  en: {
    title: "Reduce your risk of surgical problems",
    intro:
      "Food and daily habits can lower the risk of some conditions. Explore practical advice disease by disease.",
    safety:
      "Risk reduction is not a guarantee. These are general tips, not a treatment plan. Follow your treating team's advice, especially during pregnancy, after surgery, or with heart, kidney or bowel disease. Do not stop prescribed medicines.",
    search: "Search a disease…",
    empty: "No matching condition.",
    advice: "Diet and daily habits",
    limits: "What this cannot prevent",
    urgent:
      "Seek urgent care for severe or worsening abdominal pain, persistent vomiting, a painful hernia that will not go back in, heavy bleeding, or fever with worsening swelling. Chest pain or difficulty breathing needs emergency help. Do not wait for diet changes to work.",
    sources: "Medical sources (original English)",
    review:
      "Translated guidance requires review by a qualified native-speaking medical reviewer. Confirm medical instructions with your clinical team.",
    read: "Read risk-reduction advice",
    back: "Patient education",
  },
  ar: {
    title: "قلّل خطر المشكلات الجراحية",
    intro:
      "قد يساعد الغذاء والعادات اليومية على تقليل خطر بعض الحالات. تعرّف على النصائح العملية حسب كل مرض.",
    safety:
      "تقليل الخطر لا يضمن الوقاية. هذه نصائح عامة وليست خطة علاج. اتبع تعليمات فريقك المعالج، خصوصًا أثناء الحمل أو بعد الجراحة أو مع أمراض القلب والكلى والأمعاء. لا توقف الأدوية الموصوفة.",
    search: "ابحث عن مرض…",
    empty: "لا توجد حالة مطابقة.",
    advice: "الغذاء والعادات اليومية",
    limits: "حدود الوقاية",
    urgent:
      "اطلب تقييمًا عاجلًا عند ألم بطني شديد أو متزايد، قيء مستمر، فتق مؤلم لا يعود إلى الداخل، نزيف غزير، أو حرارة مع تورم متفاقم. ألم الصدر أو صعوبة التنفس يستدعيان الطوارئ. لا تنتظر تأثير تغيير الغذاء.",
    sources: "المصادر الطبية (بالإنجليزية الأصلية)",
    review:
      "تحتاج الإرشادات المترجمة إلى مراجعة طبيب مؤهل يتحدث اللغة بطلاقة. أكّد التعليمات الطبية مع فريقك المعالج.",
    read: "اقرأ نصائح تقليل الخطر",
    back: "تثقيف المرضى",
  },
  ur: {
    title: "جراحی مسائل کا خطرہ کم کریں",
    intro:
      "خوراک اور روزمرہ عادات بعض بیماریوں کا خطرہ کم کر سکتی ہیں۔ ہر بیماری کے لیے عملی مشورے پڑھیں۔",
    safety:
      "خطرہ کم کرنا بچاؤ کی ضمانت نہیں۔ یہ عمومی مشورے ہیں، علاج کا منصوبہ نہیں۔ خاص طور پر حمل، آپریشن کے بعد یا دل، گردے اور آنت کی بیماری میں اپنی طبی ٹیم کی ہدایات مانیں۔ تجویز کردہ دوائیں بند نہ کریں۔",
    search: "بیماری تلاش کریں…",
    empty: "کوئی متعلقہ بیماری نہیں ملی۔",
    advice: "خوراک اور روزمرہ عادات",
    limits: "بچاؤ کی حدود",
    urgent:
      "شدید یا بڑھتے پیٹ درد، مسلسل قے، دردناک ہرنیا جو اندر واپس نہ جائے، زیادہ خون بہنے یا بڑھتی سوجن کے ساتھ بخار پر فوری طبی مدد لیں۔ سینے میں درد یا سانس کی مشکل ہنگامی حالت ہے۔ خوراک بدلنے کے اثر کا انتظار نہ کریں۔",
    sources: "طبی ماخذ (اصل انگریزی)",
    review:
      "ترجمہ شدہ رہنمائی کی جانچ متعلقہ زبان بولنے والے اہل طبی ماہر سے ضروری ہے۔ طبی ہدایات اپنی ٹیم سے تصدیق کریں۔",
    read: "خطرہ کم کرنے کے مشورے پڑھیں",
    back: "مریضوں کی تعلیم",
  },
  hi: {
    title: "सर्जरी से जुड़ी समस्याओं का जोखिम घटाएँ",
    intro:
      "भोजन और रोज़मर्रा की आदतें कुछ बीमारियों का जोखिम कम कर सकती हैं। हर बीमारी के लिए व्यावहारिक सलाह पढ़ें।",
    safety:
      "जोखिम घटाना बचाव की गारंटी नहीं है। यह सामान्य सलाह है, उपचार योजना नहीं। गर्भावस्था, ऑपरेशन के बाद या हृदय, गुर्दे और आंत की बीमारी में अपनी चिकित्सा टीम की सलाह मानें। निर्धारित दवाएँ बंद न करें।",
    search: "बीमारी खोजें…",
    empty: "कोई संबंधित बीमारी नहीं मिली।",
    advice: "भोजन और दैनिक आदतें",
    limits: "बचाव की सीमाएँ",
    urgent:
      "तेज़ या बढ़ते पेट दर्द, लगातार उल्टी, दर्दनाक हर्निया जो अंदर न जाए, बहुत रक्तस्राव या बढ़ती सूजन के साथ बुखार में तुरंत चिकित्सा लें। सीने में दर्द या साँस लेने में कठिनाई आपात स्थिति है। भोजन बदलने के असर का इंतज़ार न करें।",
    sources: "चिकित्सा स्रोत (मूल अंग्रेज़ी)",
    review:
      "अनुवादित मार्गदर्शन की समीक्षा उस भाषा में दक्ष योग्य चिकित्सा विशेषज्ञ से आवश्यक है। अपनी चिकित्सा टीम से निर्देशों की पुष्टि करें।",
    read: "जोखिम घटाने की सलाह पढ़ें",
    back: "रोगी शिक्षा",
  },
  bn: {
    title: "অস্ত্রোপচার-সম্পর্কিত সমস্যার ঝুঁকি কমান",
    intro:
      "খাবার ও দৈনন্দিন অভ্যাস কিছু রোগের ঝুঁকি কমাতে পারে। রোগ অনুযায়ী ব্যবহারিক পরামর্শ পড়ুন।",
    safety:
      "ঝুঁকি কমানো প্রতিরোধের নিশ্চয়তা নয়। এটি সাধারণ পরামর্শ, চিকিৎসার পরিকল্পনা নয়। গর্ভাবস্থা, অস্ত্রোপচারের পরে বা হৃদ্‌যন্ত্র, কিডনি ও অন্ত্রের রোগে চিকিৎসক দলের নির্দেশ মেনে চলুন। নির্ধারিত ওষুধ বন্ধ করবেন না।",
    search: "রোগ খুঁজুন…",
    empty: "মিলছে এমন রোগ পাওয়া যায়নি।",
    advice: "খাবার ও দৈনন্দিন অভ্যাস",
    limits: "প্রতিরোধের সীমা",
    urgent:
      "তীব্র বা বাড়তে থাকা পেটব্যথা, বারবার বমি, ব্যথাযুক্ত হার্নিয়া যা ভিতরে ঢোকে না, প্রচুর রক্তপাত বা বাড়তে থাকা ফোলার সঙ্গে জ্বর হলে দ্রুত চিকিৎসা নিন। বুকে ব্যথা বা শ্বাসকষ্ট হলে জরুরি সহায়তা নিন। খাবার পরিবর্তনের ফলের জন্য অপেক্ষা করবেন না।",
    sources: "চিকিৎসা সূত্র (মূল ইংরেজি)",
    review:
      "অনূদিত নির্দেশনা সংশ্লিষ্ট ভাষায় দক্ষ যোগ্য চিকিৎসা বিশেষজ্ঞের পর্যালোচনা প্রয়োজন। চিকিৎসক দলের সঙ্গে নির্দেশ যাচাই করুন।",
    read: "ঝুঁকি কমানোর পরামর্শ পড়ুন",
    back: "রোগী শিক্ষা",
  },
  tl: {
    title: "Bawasan ang panganib ng mga problemang kirurhiko",
    intro:
      "Maaaring mabawasan ng pagkain at pang-araw-araw na gawi ang panganib ng ilang sakit. Basahin ang payo ayon sa bawat kondisyon.",
    safety:
      "Hindi garantiya ng pag-iwas ang pagbawas ng panganib. Pangkalahatang payo ito, hindi plano ng paggamot. Sundin ang inyong pangkat medikal, lalo na kapag buntis, pagkatapos ng operasyon, o may sakit sa puso, bato o bituka. Huwag ihinto ang iniresetang gamot.",
    search: "Maghanap ng sakit…",
    empty: "Walang katugmang kondisyon.",
    advice: "Pagkain at pang-araw-araw na gawi",
    limits: "Mga limitasyon ng pag-iwas",
    urgent:
      "Magpatingin agad para sa matindi o lumalalang sakit ng tiyan, tuloy-tuloy na pagsusuka, masakit na luslos na hindi bumabalik sa loob, matinding pagdurugo, o lagnat na may lumalalang pamamaga. Emergency ang pananakit ng dibdib o hirap sa paghinga. Huwag hintayin ang epekto ng pagbabago ng pagkain.",
    sources: "Mga sangguniang medikal (orihinal na Ingles)",
    review:
      "Kailangang suriin ang salin ng kwalipikadong medikal na tagasuri na bihasa sa wika. Kumpirmahin ang mga tagubilin sa inyong pangkat medikal.",
    read: "Basahin ang payo sa pagbawas ng panganib",
    back: "Edukasyon para sa pasyente",
  },
  ta: {
    title: "அறுவைச் சிகிச்சை தொடர்பான பிரச்சினைகளின் அபாயத்தைக் குறையுங்கள்",
    intro:
      "உணவும் அன்றாட பழக்கங்களும் சில நோய்களின் அபாயத்தைக் குறைக்கலாம். ஒவ்வொரு நோய்க்கும் நடைமுறை ஆலோசனைகளைப் படியுங்கள்.",
    safety:
      "அபாயத்தைக் குறைப்பது தடுப்புக்கான உத்தரவாதம் அல்ல. இவை பொதுவான ஆலோசனைகள்; சிகிச்சைத் திட்டம் அல்ல. கர்ப்ப காலத்தில், அறுவைச் சிகிச்சைக்குப் பிறகு அல்லது இதயம், சிறுநீரகம், குடல் நோய் இருந்தால் உங்கள் மருத்துவக் குழுவின் ஆலோசனையைப் பின்பற்றுங்கள். பரிந்துரைக்கப்பட்ட மருந்துகளை நிறுத்த வேண்டாம்.",
    search: "நோயைத் தேடுங்கள்…",
    empty: "பொருத்தமான நோய் இல்லை.",
    advice: "உணவும் அன்றாட பழக்கங்களும்",
    limits: "தடுப்பின் வரம்புகள்",
    urgent:
      "கடுமையான அல்லது அதிகரிக்கும் வயிற்று வலி, தொடர்ச்சியான வாந்தி, உள்ளே செல்லாத வலியுள்ள குடலிறக்கம், அதிக இரத்தப்போக்கு அல்லது அதிகரிக்கும் வீக்கத்துடன் காய்ச்சல் இருந்தால் உடனே மருத்துவ உதவி பெறுங்கள். நெஞ்சு வலி அல்லது மூச்சுத் திணறலுக்கு அவசர உதவி தேவை. உணவு மாற்றத்தின் பலனுக்காகக் காத்திருக்க வேண்டாம்.",
    sources: "மருத்துவ ஆதாரங்கள் (அசல் ஆங்கிலம்)",
    review:
      "மொழிபெயர்க்கப்பட்ட வழிகாட்டலை அந்த மொழியில் தேர்ச்சி பெற்ற தகுதியான மருத்துவ நிபுணர் மதிப்பாய்வு செய்ய வேண்டும். மருத்துவக் குழுவிடம் அறிவுறுத்தல்களை உறுதிப்படுத்துங்கள்.",
    read: "அபாயத்தைக் குறைக்கும் ஆலோசனைகளைப் படியுங்கள்",
    back: "நோயாளர் கல்வி",
  },
};

// Each edition has the same disease order and full content, without DOM translation.
type DiseaseText = readonly [title: string, advice: string, limits: string];
export const preventionDiseases: Record<SiteLanguage, readonly DiseaseText[]> = {
  en: [
    [
      "Gallstones",
      "Keep a healthy weight with gradual, sustainable changes rather than crash diets or rapid weight loss. Eat regular balanced meals with vegetables, fruit, whole grains and suitable portions of healthy fats; stay physically active.",
      "Diet cannot reliably dissolve existing stones or prevent every case. After weight-loss surgery, follow the team's plan; ask whether prescribed gallstone prevention is appropriate. Pain with fever or jaundice needs urgent assessment.",
    ],
    [
      "Groin and abdominal-wall hernias",
      "Avoid constipation with fibre and fluids as allowed by your team. Stop smoking, seek treatment for persistent cough, and work towards a healthy weight. Use safe lifting techniques and ask for help with heavy loads.",
      "Some hernias reflect congenital or tissue weakness and cannot be prevented by lifestyle. Exercise or a belt does not repair a hernia. Lifting limits after repair depend on your surgeon; a painful trapped lump with vomiting is an emergency.",
    ],
    [
      "Haemorrhoids and anal fissures",
      "Aim for soft, formed stools: increase fibre gradually, drink appropriate fluids and stay active. Do not strain, ignore the urge to pass stool, or sit on the toilet for long periods. Ask for help if constipation or diarrhoea persists.",
      "These habits may reduce symptoms or recurrence, not every case. Do not assume rectal bleeding is piles; new or persistent bleeding needs assessment. Heavy bleeding, dizziness or severe pain needs urgent care.",
    ],
    [
      "Diverticular disease",
      "Outside an acute attack, gradually include whole grains, fruit, vegetables and other fibre-rich foods as tolerated. Stay active, avoid smoking and maintain a healthy weight. Nuts and seeds do not routinely need to be excluded.",
      "An acute attack needs medical assessment and may require temporary diet changes. Do not increase fibre during a suspected blockage or severe flare without advice. Healthy habits cannot guarantee prevention of diverticulitis.",
    ],
    [
      "Colorectal cancer",
      "Eat more whole grains, vegetables and fruit; limit processed meat and excess red meat. Stay active, keep a healthy weight, avoid smoking and limit or avoid alcohol. Ask about screening based on your age, family history and local recommendations.",
      "Screening and healthy habits reduce risk but do not eliminate it. Family history may require earlier testing. Blood in stool, persistent bowel changes, iron-deficiency anaemia or unexplained weight loss need assessment, even after a normal screening test.",
    ],
    [
      "Obesity and related surgical risk",
      "Choose sustainable balanced meals, suitable portions, fewer sugary drinks, regular activity within your ability and adequate sleep. Seek support from your clinician or dietitian rather than using extreme diets or unregulated weight-loss products.",
      "Obesity has biological and social causes; it is not a failure of willpower. Some people need medicine or surgery. After bariatric surgery, follow the specific nutrition and supplement plan, not a generic diet.",
    ],
    [
      "Pilonidal disease",
      "Keep the cleft between the buttocks clean and gently dry; reduce prolonged pressure with regular movement. If disease is recurrent or after surgery, ask your clinician whether professional hair removal is useful.",
      "These steps do not guarantee prevention or cure an abscess. Do not shave inflamed skin or squeeze a painful swelling. A tender lump, pus or fever needs assessment; an abscess may require drainage.",
    ],
    [
      "Hidradenitis suppurativa",
      "If you smoke, seek help to quit. If appropriate, supported weight management may help. Wear comfortable clothing, reduce friction and use gentle skin care; keep follow-up with your dermatologist.",
      "This is an inflammatory disease, not poor hygiene, and it is not contagious. No specific diet is proven to cure it; avoid restrictive diets without guidance. Lifestyle measures do not replace prescribed treatment.",
    ],
    [
      "Ingrown toenails and skin infections",
      "Cut toenails straight across, not too short; wear well-fitting shoes and keep feet clean and dry. Wash hands, clean small cuts and cover them with a clean dressing. Do not share razors or squeeze boils.",
      "These habits reduce some risks, not all infections. Do not dig into an ingrown nail or drain an abscess yourself. Diabetes, poor circulation, spreading redness or fever warrants prompt medical care.",
    ],
    [
      "Appendicitis and other conditions without reliable lifestyle prevention",
      "Eat a balanced diet and stay active for overall health, but no food, supplement or exercise is proven to prevent appendicitis. Seek timely assessment of new symptoms instead of using a cleanse or home remedy.",
      "Breast lumps, thyroid nodules and many other surgical conditions also cannot reliably be prevented by diet. New lumps or persistent changes need assessment. Worsening abdominal pain, especially with vomiting or fever, needs urgent medical care.",
    ],
  ],
  ar: [
    [
      "حصوات المرارة",
      "حافظ على وزن صحي بتغييرات تدريجية ومستدامة بدل الحميات القاسية أو النزول السريع. تناول وجبات منتظمة ومتوازنة تشمل الخضار والفاكهة والحبوب الكاملة وكميات مناسبة من الدهون الصحية، ومارس النشاط البدني.",
      "الغذاء لا يذيب الحصوات الموجودة بشكل موثوق ولا يمنع كل الحالات. بعد جراحة السمنة اتبع خطة الفريق واسأل عن ملاءمة دواء وقائي موصوف للحصوات. الألم مع حرارة أو اصفرار يستدعي تقييمًا عاجلًا.",
    ],
    [
      "الفتق الإربي وفتق جدار البطن",
      "تجنب الإمساك بالألياف والسوائل وفق تعليمات الفريق. أقلع عن التدخين، وعالج السعال المستمر، واسعَ لوزن صحي. استخدم طرق رفع آمنة واطلب المساعدة مع الأحمال الثقيلة.",
      "بعض أنواع الفتق بسبب ضعف خلقي أو ضعف الأنسجة ولا يمنعها نمط الحياة. التمارين أو الحزام لا يصلحان الفتق. قيود الرفع بعد الإصلاح يحددها الجراح؛ كتلة مؤلمة محتجزة مع قيء حالة طارئة.",
    ],
    [
      "البواسير والشرخ الشرجي",
      "استهدف برازًا لينًا متماسكًا: زد الألياف تدريجيًا واشرب السوائل المناسبة وتحرك بانتظام. تجنب الحزق وتأجيل التبرز والجلوس طويلًا على المرحاض. اطلب المساعدة عند استمرار الإمساك أو الإسهال.",
      "قد تقلل هذه العادات الأعراض أو تكرارها، لكنها لا تمنع كل الحالات. لا تفترض أن نزيف الشرج بواسير؛ النزيف الجديد أو المستمر يحتاج تقييمًا. النزيف الغزير أو الدوخة أو الألم الشديد يحتاج مساعدة عاجلة.",
    ],
    [
      "مرض الرتوج",
      "خارج النوبة الحادة، أدخل الحبوب الكاملة والفاكهة والخضار والأطعمة الغنية بالألياف تدريجيًا حسب التحمل. تحرك بانتظام، وتجنب التدخين، وحافظ على وزن صحي. لا يلزم عادة منع المكسرات والبذور.",
      "النوبة الحادة تحتاج تقييمًا طبيًا وقد تتطلب تعديل الغذاء مؤقتًا. لا تزد الألياف عند الاشتباه بانسداد أو نوبة شديدة دون مشورة. العادات الصحية لا تضمن منع التهاب الرتوج.",
    ],
    [
      "سرطان القولون والمستقيم",
      "تناول مزيدًا من الحبوب الكاملة والخضار والفاكهة وقلل اللحوم المصنعة والإفراط في اللحوم الحمراء. تحرك، وحافظ على وزن صحي، وتجنب التدخين وقلل الكحول أو امتنع عنه. اسأل عن الفحص المبكر حسب العمر والتاريخ العائلي والتوصيات المحلية.",
      "الفحص والعادات الصحية يقللان الخطر ولا يلغيانِه. التاريخ العائلي قد يستدعي فحصًا أبكر. الدم في البراز أو تغير الإخراج المستمر أو فقر الدم بنقص الحديد أو فقدان الوزن غير المفسر يحتاج تقييمًا حتى بعد فحص طبيعي.",
    ],
    [
      "السمنة والمخاطر الجراحية المرتبطة بها",
      "اختر وجبات متوازنة مستدامة وحصصًا مناسبة ومشروبات سكرية أقل ونشاطًا يناسب قدرتك ونومًا كافيًا. اطلب دعم الطبيب أو اختصاصي التغذية بدل الحميات المتطرفة أو منتجات التخسيس غير المنظمة.",
      "للسمنة أسباب بيولوجية واجتماعية وليست ضعف إرادة. يحتاج بعض الأشخاص أدوية أو جراحة. بعد جراحة السمنة اتبع خطة التغذية والمكملات الخاصة بك، لا حمية عامة.",
    ],
    [
      "الناسور الشعري",
      "حافظ على نظافة الشق بين الأليتين وجففه بلطف، وقلل الضغط الطويل بالحركة المنتظمة. عند التكرار أو بعد الجراحة، اسأل الطبيب عن فائدة إزالة الشعر بطريقة مهنية.",
      "هذه الخطوات لا تضمن الوقاية ولا تعالج الخراج. لا تحلق الجلد الملتهب ولا تعصر تورمًا مؤلمًا. كتلة مؤلمة أو صديد أو حرارة تحتاج تقييمًا؛ قد يحتاج الخراج تصريفًا.",
    ],
    [
      "التهاب الغدد العرقية القيحي",
      "اطلب المساعدة للإقلاع عن التدخين إن كنت مدخنًا. قد يساعد ضبط الوزن بدعم طبي إن كان مناسبًا. ارتدِ ملابس مريحة وقلل الاحتكاك واعتنِ بالجلد بلطف وتابع مع طبيب الجلدية.",
      "هذا مرض التهابي وليس بسبب قلة النظافة وغير معدٍ. لا توجد حمية محددة مثبتة لشفائه؛ تجنب الحميات المقيدة دون إرشاد. تغيير نمط الحياة لا يغني عن العلاج الموصوف.",
    ],
    [
      "الظفر المنغرس والتهابات الجلد",
      "قص أظافر القدم مستقيمة ودون تقصير مفرط، وارتدِ حذاءً مناسبًا وحافظ على القدم نظيفة وجافة. اغسل يديك ونظف الجروح الصغيرة وغطها بضماد نظيف. لا تشارك شفرات الحلاقة ولا تعصر الدمامل.",
      "تقلل هذه العادات بعض المخاطر، لا كل الالتهابات. لا تحفر حول الظفر ولا تفتح الخراج بنفسك. السكري أو ضعف الدورة الدموية أو الاحمرار المنتشر أو الحرارة تستدعي رعاية سريعة.",
    ],
    [
      "التهاب الزائدة وحالات بلا وقاية سلوكية موثوقة",
      "تناول غذاءً متوازنًا وتحرك لصحتك العامة، لكن لا يوجد طعام أو مكمل أو تمرين ثبت أنه يمنع التهاب الزائدة. قيّم الأعراض الجديدة في الوقت المناسب بدل وصفات التنظيف أو العلاج المنزلي.",
      "كتل الثدي وعقيدات الغدة الدرقية وكثير من الحالات الجراحية أيضًا لا يمكن منعها بشكل موثوق بالغذاء. الكتل الجديدة والتغيرات المستمرة تحتاج تقييمًا. الألم البطني المتزايد خاصة مع قيء أو حرارة يحتاج رعاية عاجلة.",
    ],
  ],
  ur: [
    [
      "پتے کی پتھری",
      "سخت ڈائٹ یا تیزی سے وزن گھٹانے کے بجائے بتدریج مستقل تبدیلیوں سے صحت مند وزن رکھیں۔ باقاعدہ متوازن کھانے میں سبزیاں، پھل، سالم اناج اور مناسب صحت مند چکنائی شامل کریں؛ جسمانی سرگرمی جاری رکھیں۔",
      "خوراک موجودہ پتھری کو قابل اعتماد طریقے سے نہیں گھلاتی اور ہر کیس نہیں روکتی۔ وزن کم کرنے کی سرجری کے بعد ٹیم کا منصوبہ مانیں؛ پوچھیں کہ تجویز کردہ بچاؤ کی دوا مناسب ہے یا نہیں۔ درد کے ساتھ بخار یا یرقان پر فوری معائنہ ضروری ہے۔",
    ],
    [
      "گروئن اور پیٹ کی دیوار کا ہرنیا",
      "ٹیم کی اجازت کے مطابق فائبر اور پانی سے قبض سے بچیں۔ تمباکو نوشی چھوڑیں، مسلسل کھانسی کا علاج کرائیں اور صحت مند وزن کی کوشش کریں۔ محفوظ انداز سے وزن اٹھائیں اور بھاری بوجھ کے لیے مدد لیں۔",
      "بعض ہرنیا پیدائشی یا بافتوں کی کمزوری سے ہوتے ہیں؛ عادات انہیں نہیں روک سکتیں۔ ورزش یا بیلٹ ہرنیا درست نہیں کرتی۔ آپریشن کے بعد وزن اٹھانے کی حد سرجن بتائے گا؛ پھنسی ہوئی دردناک گلٹی اور قے ہنگامی حالت ہے۔",
    ],
    [
      "بواسیر اور مقعد کی دراڑ",
      "نرم مگر شکل والا پاخانہ ہدف بنائیں: فائبر آہستہ بڑھائیں، مناسب پانی پئیں اور متحرک رہیں۔ زور نہ لگائیں، حاجت نہ روکیں اور بیت الخلا میں دیر تک نہ بیٹھیں۔ مستقل قبض یا اسہال پر مدد لیں۔",
      "عادات علامات یا دوبارہ ہونے کا خطرہ کم کر سکتی ہیں، ہر کیس نہیں۔ مقعد سے خون کو خود بواسیر نہ سمجھیں؛ نیا یا مسلسل خون معائنے کا تقاضا کرتا ہے۔ زیادہ خون، چکر یا شدید درد پر فوری مدد لیں۔",
    ],
    [
      "آنتوں کی ڈائیورٹیکولر بیماری",
      "شدید حملے کے علاوہ، برداشت کے مطابق سالم اناج، پھل، سبزیاں اور فائبر والی خوراک آہستہ شامل کریں۔ متحرک رہیں، تمباکو سے بچیں اور صحت مند وزن رکھیں۔ عام طور پر گریاں اور بیج چھوڑنا ضروری نہیں۔",
      "شدید حملے میں طبی معائنہ اور عارضی خوراک کی تبدیلی ضروری ہو سکتی ہے۔ آنت بند ہونے کے شبہے یا شدید سوزش میں مشورے کے بغیر فائبر نہ بڑھائیں۔ صحت مند عادات سوزش روکنے کی ضمانت نہیں۔",
    ],
    [
      "بڑی آنت اور مقعد کا سرطان",
      "سالم اناج، سبزیاں اور پھل زیادہ لیں؛ پراسیس شدہ گوشت اور ضرورت سے زیادہ سرخ گوشت کم کریں۔ متحرک رہیں، صحت مند وزن رکھیں، تمباکو سے بچیں اور شراب کم کریں یا چھوڑ دیں۔ عمر، خاندانی تاریخ اور مقامی سفارشات کے مطابق اسکریننگ پوچھیں۔",
      "اسکریننگ اور عادات خطرہ کم کرتی ہیں، ختم نہیں۔ خاندانی تاریخ میں پہلے ٹیسٹ کی ضرورت ہو سکتی ہے۔ پاخانے میں خون، مستقل تبدیلی، آئرن کی کمی کا انیمیا یا بے وجہ وزن کم ہونا نارمل اسکریننگ کے بعد بھی معائنہ چاہتا ہے۔",
    ],
    [
      "موٹاپا اور متعلقہ جراحی خطرات",
      "پائیدار متوازن کھانا، مناسب مقدار، کم میٹھے مشروبات، استطاعت کے مطابق سرگرمی اور پوری نیند اختیار کریں۔ سخت ڈائٹ یا غیر منظور شدہ وزن گھٹانے کی مصنوعات کے بجائے ڈاکٹر یا ماہر غذائیت سے مدد لیں۔",
      "موٹاپے کی حیاتیاتی اور سماجی وجوہات ہیں؛ یہ قوتِ ارادی کی ناکامی نہیں۔ کچھ لوگوں کو دوا یا سرجری چاہیے۔ موٹاپے کی سرجری کے بعد اپنی مخصوص غذائی اور سپلیمنٹ ہدایات مانیں، عام ڈائٹ نہیں۔",
    ],
    [
      "پائلونائیڈل بیماری",
      "کولہوں کے درمیان شگاف صاف اور نرمی سے خشک رکھیں؛ باقاعدہ حرکت سے لمبے دباؤ کو کم کریں۔ بار بار بیماری یا آپریشن کے بعد ڈاکٹر سے پوچھیں کہ ماہر کے ذریعے بال ہٹانا مفید ہے یا نہیں۔",
      "یہ اقدامات بچاؤ کی ضمانت نہیں اور پھوڑا ٹھیک نہیں کرتے۔ سوجی جلد پر شیو نہ کریں اور دردناک سوجن نہ دبائیں۔ دردناک گلٹی، پیپ یا بخار پر معائنہ ضروری ہے؛ پھوڑے کی نکاسی درکار ہو سکتی ہے۔",
    ],
    [
      "ہائڈراڈینائٹس سپوریٹیوا",
      "تمباکو نوشی کرتے ہیں تو چھوڑنے میں مدد لیں۔ مناسب صورت میں مدد کے ساتھ وزن سنبھالنا فائدہ دے سکتا ہے۔ آرام دہ لباس پہنیں، رگڑ کم کریں، جلد کی نرم دیکھ بھال کریں اور ماہر جلد سے رابطہ رکھیں۔",
      "یہ سوزش کی بیماری ہے، گندگی کی وجہ سے نہیں اور متعدی نہیں۔ کوئی مخصوص ڈائٹ اسے ٹھیک کرنے کے لیے ثابت نہیں؛ مشورے کے بغیر پابندی والی خوراک سے بچیں۔ عادات تجویز کردہ علاج کی جگہ نہیں لیتیں۔",
    ],
    [
      "اندر بڑھتا ناخن اور جلد کے انفیکشن",
      "پاؤں کے ناخن سیدھے کاٹیں، بہت چھوٹے نہیں؛ مناسب جوتے پہنیں، پاؤں صاف اور خشک رکھیں۔ ہاتھ دھوئیں، چھوٹے زخم صاف کرکے صاف پٹی لگائیں۔ ریزر مشترک نہ استعمال کریں اور پھوڑے نہ دبائیں۔",
      "یہ عادات کچھ خطرات کم کرتی ہیں، سب انفیکشن نہیں۔ ناخن کے کنارے کو نہ کھودیں اور خود پھوڑا نہ کھولیں۔ ذیابیطس، کمزور خون کی گردش، پھیلتی سرخی یا بخار پر جلد طبی مدد لیں۔",
    ],
    [
      "اپینڈیسائٹس اور وہ حالات جن کا قابل اعتماد طرزِ زندگی بچاؤ نہیں",
      "عمومی صحت کے لیے متوازن خوراک اور سرگرمی رکھیں، لیکن کوئی خوراک، سپلیمنٹ یا ورزش اپینڈیسائٹس روکنے کے لیے ثابت نہیں۔ صفائی کے نسخے یا گھریلو علاج کے بجائے نئی علامات کا بروقت معائنہ کرائیں۔",
      "چھاتی کی گلٹی، تھائرائڈ کی گانٹھ اور کئی جراحی حالات بھی خوراک سے قابل اعتماد طور پر نہیں روکے جا سکتے۔ نئی گلٹی یا مستقل تبدیلی کا معائنہ ضروری ہے۔ بڑھتے پیٹ درد، خصوصاً قے یا بخار کے ساتھ، فوری طبی مدد لیں۔",
    ],
  ],
  hi: [
    [
      "पित्ताशय की पथरी",
      "कठोर डाइट या तेज़ वजन घटाने के बजाय धीरे और टिकाऊ बदलावों से स्वस्थ वजन रखें। नियमित संतुलित भोजन में सब्ज़ियाँ, फल, साबुत अनाज और उचित मात्रा में स्वस्थ वसा लें; सक्रिय रहें।",
      "भोजन मौजूदा पथरी को भरोसेमंद रूप से नहीं घोलता और सभी मामलों को नहीं रोकता। वजन घटाने की सर्जरी के बाद टीम की योजना मानें; पूछें कि पथरी रोकने की निर्धारित दवा उचित है या नहीं। दर्द के साथ बुखार या पीलिया में तुरंत जाँच चाहिए।",
    ],
    [
      "जांघ के जोड़ और पेट की दीवार का हर्निया",
      "टीम की अनुमति के अनुसार फाइबर और तरल से कब्ज़ से बचें। धूम्रपान छोड़ें, लगातार खाँसी का इलाज लें और स्वस्थ वजन का प्रयास करें। सुरक्षित तरीके से वजन उठाएँ और भारी सामान के लिए मदद लें।",
      "कुछ हर्निया जन्मजात या ऊतक की कमजोरी से होते हैं; जीवनशैली उन्हें नहीं रोक सकती। व्यायाम या बेल्ट हर्निया ठीक नहीं करते। ऑपरेशन के बाद वजन उठाने की सीमा सर्जन बताएँगे; फँसी दर्दनाक गाँठ और उल्टी आपात स्थिति है।",
    ],
    [
      "बवासीर और गुदा में दरार",
      "नरम लेकिन आकार वाला मल लक्ष्य रखें: फाइबर धीरे बढ़ाएँ, उचित तरल लें और सक्रिय रहें। ज़ोर न लगाएँ, मल की इच्छा न रोकें और शौचालय पर लंबे समय न बैठें। लगातार कब्ज़ या दस्त में मदद लें।",
      "ये आदतें लक्षण या दोबारा होने का जोखिम घटा सकती हैं, हर मामला नहीं रोकतीं। गुदा से खून को बवासीर न मान लें; नया या लगातार रक्तस्राव जाँच चाहता है। अधिक खून, चक्कर या तेज़ दर्द में तुरंत मदद लें।",
    ],
    [
      "डायवर्टिकुलर रोग",
      "तीव्र बीमारी के दौर के बाहर, सहनशीलता के अनुसार साबुत अनाज, फल, सब्ज़ियाँ और फाइबर वाले भोजन धीरे जोड़ें। सक्रिय रहें, धूम्रपान से बचें और स्वस्थ वजन रखें। आम तौर पर मेवे और बीज छोड़ना ज़रूरी नहीं।",
      "तीव्र दौर में चिकित्सा जाँच और अस्थायी आहार बदलाव की ज़रूरत हो सकती है। रुकावट के संदेह या तेज़ सूजन में बिना सलाह फाइबर न बढ़ाएँ। स्वस्थ आदतें डायवर्टिकुलाइटिस रोकने की गारंटी नहीं।",
    ],
    [
      "बड़ी आंत और मलाशय का कैंसर",
      "साबुत अनाज, सब्ज़ियाँ और फल अधिक लें; प्रसंस्कृत मांस और अधिक लाल मांस सीमित करें। सक्रिय रहें, स्वस्थ वजन रखें, धूम्रपान न करें और शराब सीमित करें या न लें। उम्र, पारिवारिक इतिहास और स्थानीय नियमों के अनुसार स्क्रीनिंग पूछें।",
      "स्क्रीनिंग और आदतें जोखिम घटाती हैं, खत्म नहीं करतीं। पारिवारिक इतिहास में पहले जाँच चाहिए हो सकती है। मल में खून, लगातार बदलाव, आयरन की कमी का एनीमिया या बिना वजह वजन घटना सामान्य स्क्रीनिंग के बाद भी जाँच चाहता है।",
    ],
    [
      "मोटापा और संबंधित सर्जरी जोखिम",
      "टिकाऊ संतुलित भोजन, उचित मात्रा, कम मीठे पेय, क्षमता के अनुसार गतिविधि और पर्याप्त नींद चुनें। अत्यधिक डाइट या अनियंत्रित वजन घटाने वाले उत्पादों के बजाय डॉक्टर या आहार विशेषज्ञ से मदद लें।",
      "मोटापे के जैविक और सामाजिक कारण हैं; यह इच्छाशक्ति की विफलता नहीं। कुछ लोगों को दवा या सर्जरी चाहिए। बेरियाट्रिक सर्जरी के बाद अपनी विशेष पोषण और सप्लीमेंट योजना मानें, सामान्य डाइट नहीं।",
    ],
    [
      "पाइलोनाइडल रोग",
      "नितंबों के बीच की दरार साफ रखें और हल्के से सुखाएँ; नियमित चलने से लंबे दबाव को कम करें। बार-बार रोग होने या ऑपरेशन के बाद डॉक्टर से पूछें कि विशेषज्ञ द्वारा बाल हटाना उपयोगी है या नहीं।",
      "ये उपाय बचाव की गारंटी नहीं और फोड़ा ठीक नहीं करते। सूजी त्वचा पर शेव न करें और दर्दनाक सूजन न दबाएँ। दर्दनाक गाँठ, मवाद या बुखार में जाँच चाहिए; फोड़े की निकासी ज़रूरी हो सकती है।",
    ],
    [
      "हाइड्राडेनाइटिस सप्युरेटिवा",
      "धूम्रपान करते हैं तो छोड़ने में मदद लें। उपयुक्त होने पर सहयोग से वजन सँभालना मदद कर सकता है। आरामदायक कपड़े पहनें, रगड़ कम करें, त्वचा की कोमल देखभाल करें और त्वचा विशेषज्ञ से संपर्क रखें।",
      "यह सूजन का रोग है, खराब स्वच्छता का परिणाम नहीं और संक्रामक नहीं। कोई विशेष आहार इसे ठीक करने के लिए सिद्ध नहीं; बिना सलाह प्रतिबंधित डाइट से बचें। जीवनशैली निर्धारित उपचार का विकल्प नहीं।",
    ],
    [
      "अंदर बढ़ता नाखून और त्वचा संक्रमण",
      "पैर के नाखून सीधे काटें, बहुत छोटे नहीं; सही जूते पहनें, पैर साफ और सूखे रखें। हाथ धोएँ, छोटे घाव साफ कर साफ पट्टी लगाएँ। रेज़र साझा न करें और फोड़े न दबाएँ।",
      "ये आदतें कुछ जोखिम घटाती हैं, सभी संक्रमण नहीं। नाखून के किनारे न खोदें और खुद फोड़ा न खोलें। मधुमेह, खराब रक्तसंचार, फैलती लालिमा या बुखार में शीघ्र चिकित्सा लें।",
    ],
    [
      "अपेंडिसाइटिस और बिना विश्वसनीय जीवनशैली बचाव वाली स्थितियाँ",
      "सामान्य स्वास्थ्य के लिए संतुलित भोजन और गतिविधि रखें, लेकिन कोई भोजन, सप्लीमेंट या व्यायाम अपेंडिसाइटिस रोकने के लिए सिद्ध नहीं। सफाई नुस्खों या घरेलू इलाज के बजाय नए लक्षणों की समय पर जाँच कराएँ।",
      "स्तन की गाँठ, थायरॉइड की गाँठ और कई सर्जरी संबंधी स्थितियाँ भी भोजन से भरोसेमंद तरीके से नहीं रोकी जा सकतीं। नई गाँठ या लगातार बदलाव जाँच चाहते हैं। बढ़ते पेट दर्द, खासकर उल्टी या बुखार के साथ, तुरंत चिकित्सा लें।",
    ],
  ],
  bn: [
    [
      "পিত্তথলির পাথর",
      "কঠোর ডায়েট বা দ্রুত ওজন কমানোর বদলে ধীরে টেকসই পরিবর্তনে স্বাস্থ্যকর ওজন রাখুন। নিয়মিত সুষম খাবারে শাকসবজি, ফল, গোটা শস্য ও উপযুক্ত স্বাস্থ্যকর চর্বি রাখুন; সক্রিয় থাকুন।",
      "খাবার নির্ভরযোগ্যভাবে বর্তমান পাথর গলায় না এবং সব ঘটনা ঠেকায় না। ওজন কমানোর অস্ত্রোপচারের পরে দলের পরিকল্পনা মানুন; পাথর প্রতিরোধের নির্ধারিত ওষুধ উপযুক্ত কি না জিজ্ঞাসা করুন। ব্যথার সঙ্গে জ্বর বা জন্ডিস হলে দ্রুত পরীক্ষা দরকার।",
    ],
    [
      "কুঁচকি ও পেটের দেয়ালের হার্নিয়া",
      "দলের অনুমতি অনুযায়ী আঁশ ও তরল দিয়ে কোষ্ঠকাঠিন্য এড়ান। ধূমপান ছাড়ুন, দীর্ঘস্থায়ী কাশির চিকিৎসা নিন এবং স্বাস্থ্যকর ওজনের চেষ্টা করুন। নিরাপদভাবে ভার তুলুন এবং ভারী বোঝায় সাহায্য নিন।",
      "কিছু হার্নিয়া জন্মগত বা টিস্যুর দুর্বলতা থেকে হয়; জীবনযাপন দিয়ে ঠেকানো যায় না। ব্যায়াম বা বেল্ট হার্নিয়া সারায় না। অস্ত্রোপচারের পরে ভার তোলার সীমা সার্জন বলবেন; আটকে থাকা ব্যথাযুক্ত গুটি ও বমি জরুরি অবস্থা।",
    ],
    [
      "অর্শ ও পায়ুপথের ফিশার",
      "নরম কিন্তু গঠিত মল লক্ষ্য রাখুন: ধীরে আঁশ বাড়ান, উপযুক্ত তরল পান করুন এবং সক্রিয় থাকুন। চাপ দেবেন না, মলত্যাগের বেগ চেপে রাখবেন না বা টয়লেটে বেশি সময় বসবেন না। স্থায়ী কোষ্ঠকাঠিন্য বা ডায়রিয়ায় সাহায্য নিন।",
      "অভ্যাস উপসর্গ বা পুনরাবৃত্তি কমাতে পারে, সব ঘটনা নয়। পায়ুপথের রক্তকে অর্শ ধরে নেবেন না; নতুন বা স্থায়ী রক্তপাত পরীক্ষা দরকার। প্রচুর রক্ত, মাথা ঘোরা বা তীব্র ব্যথায় দ্রুত সাহায্য নিন।",
    ],
    [
      "ডাইভার্টিকুলার রোগ",
      "তীব্র আক্রমণের বাইরে সহ্য অনুযায়ী গোটা শস্য, ফল, শাকসবজি ও আঁশযুক্ত খাবার ধীরে যোগ করুন। সক্রিয় থাকুন, ধূমপান এড়ান ও স্বাস্থ্যকর ওজন রাখুন। সাধারণত বাদাম ও বীজ বাদ দেওয়া দরকার নেই।",
      "তীব্র আক্রমণে চিকিৎসা মূল্যায়ন ও সাময়িক খাবার বদল লাগতে পারে। অন্ত্র বন্ধের সন্দেহ বা তীব্র প্রদাহে পরামর্শ ছাড়া আঁশ বাড়াবেন না। স্বাস্থ্যকর অভ্যাস ডাইভার্টিকুলাইটিস প্রতিরোধের নিশ্চয়তা নয়।",
    ],
    [
      "কোলন ও মলাশয়ের ক্যানসার",
      "গোটা শস্য, শাকসবজি ও ফল বেশি খান; প্রক্রিয়াজাত মাংস ও অতিরিক্ত লাল মাংস কমান। সক্রিয় থাকুন, স্বাস্থ্যকর ওজন রাখুন, ধূমপান এড়ান এবং মদ কমান বা এড়ান। বয়স, পারিবারিক ইতিহাস ও স্থানীয় পরামর্শ অনুযায়ী স্ক্রিনিং সম্পর্কে জিজ্ঞাসা করুন।",
      "স্ক্রিনিং ও অভ্যাস ঝুঁকি কমায়, দূর করে না। পারিবারিক ইতিহাসে আগে পরীক্ষা লাগতে পারে। মলে রক্ত, স্থায়ী মলত্যাগের পরিবর্তন, আয়রনের অভাবে রক্তশূন্যতা বা অকারণ ওজন কমলে স্বাভাবিক স্ক্রিনিংয়ের পরেও পরীক্ষা দরকার।",
    ],
    [
      "স্থূলতা ও সংশ্লিষ্ট অস্ত্রোপচারের ঝুঁকি",
      "টেকসই সুষম খাবার, উপযুক্ত পরিমাণ, কম মিষ্টি পানীয়, সামর্থ্য অনুযায়ী শরীরচর্চা ও যথেষ্ট ঘুম বেছে নিন। চরম ডায়েট বা অনিয়ন্ত্রিত ওজন কমানোর পণ্যের বদলে চিকিৎসক বা পুষ্টিবিদের সাহায্য নিন।",
      "স্থূলতার জৈবিক ও সামাজিক কারণ আছে; এটি ইচ্ছাশক্তির ব্যর্থতা নয়। কারও ওষুধ বা অস্ত্রোপচার লাগে। স্থূলতার অস্ত্রোপচারের পরে নিজের বিশেষ পুষ্টি ও সাপ্লিমেন্ট পরিকল্পনা মানুন, সাধারণ ডায়েট নয়।",
    ],
    [
      "পাইলোনাইডাল রোগ",
      "নিতম্বের মাঝের খাঁজ পরিষ্কার রাখুন ও আলতো করে শুকান; নিয়মিত নড়াচড়ায় দীর্ঘ চাপ কমান। রোগ বারবার হলে বা অস্ত্রোপচারের পরে পেশাদারভাবে লোম সরানো উপকারী কি না চিকিৎসককে জিজ্ঞাসা করুন।",
      "এই ব্যবস্থা প্রতিরোধের নিশ্চয়তা দেয় না বা ফোড়া সারায় না। প্রদাহযুক্ত ত্বক শেভ করবেন না বা ব্যথাযুক্ত ফোলা চাপবেন না। ব্যথার গুটি, পুঁজ বা জ্বর হলে পরীক্ষা দরকার; ফোড়ার পুঁজ বের করতে হতে পারে।",
    ],
    [
      "হাইড্রাডেনাইটিস সাপুরাটিভা",
      "ধূমপান করলে ছাড়তে সাহায্য নিন। উপযুক্ত হলে সহায়তা নিয়ে ওজন নিয়ন্ত্রণ কাজে দিতে পারে। আরামদায়ক পোশাক পরুন, ঘর্ষণ কমান, ত্বকের কোমল যত্ন নিন ও চর্মরোগ বিশেষজ্ঞের ফলোআপ রাখুন।",
      "এটি প্রদাহের রোগ, অপরিচ্ছন্নতার জন্য নয় এবং ছোঁয়াচে নয়। কোনো নির্দিষ্ট খাবার এটি সারায় বলে প্রমাণ নেই; পরামর্শ ছাড়া সীমাবদ্ধ ডায়েট এড়ান। জীবনযাপন নির্ধারিত চিকিৎসার বিকল্প নয়।",
    ],
    [
      "ভেতরে বাড়া নখ ও ত্বকের সংক্রমণ",
      "পায়ের নখ সোজা কাটুন, খুব ছোট নয়; উপযুক্ত জুতা পরুন ও পা পরিষ্কার শুকনো রাখুন। হাত ধুয়ে ছোট ক্ষত পরিষ্কার করে পরিষ্কার ড্রেসিং দিন। রেজর ভাগ করবেন না বা ফোড়া চাপবেন না।",
      "অভ্যাস কিছু ঝুঁকি কমায়, সব সংক্রমণ নয়। নখের পাশে খুঁড়বেন না বা নিজে ফোড়া খুলবেন না। ডায়াবেটিস, দুর্বল রক্তসঞ্চালন, ছড়ানো লালভাব বা জ্বর হলে দ্রুত চিকিৎসা নিন।",
    ],
    [
      "অ্যাপেন্ডিসাইটিস ও নির্ভরযোগ্য জীবনযাপন-ভিত্তিক প্রতিরোধহীন রোগ",
      "সামগ্রিক স্বাস্থ্যের জন্য সুষম খাবার ও সক্রিয়তা রাখুন, কিন্তু কোনো খাবার, সাপ্লিমেন্ট বা ব্যায়াম অ্যাপেন্ডিসাইটিস ঠেকায় বলে প্রমাণ নেই। পরিষ্কার করার টোটকা বা ঘরোয়া চিকিৎসার বদলে নতুন উপসর্গের সময়মতো পরীক্ষা করান।",
      "স্তনের গুটি, থাইরয়েডের গুটি ও অনেক অস্ত্রোপচার-সম্পর্কিত রোগও নির্ভরযোগ্যভাবে খাবার দিয়ে ঠেকানো যায় না। নতুন গুটি বা স্থায়ী পরিবর্তন পরীক্ষা দরকার। বাড়তে থাকা পেটব্যথা, বিশেষ করে বমি বা জ্বরসহ, জরুরি চিকিৎসা চায়।",
    ],
  ],
  tl: [
    [
      "Mga bato sa apdo",
      "Panatilihin ang malusog na timbang sa unti-unti at pangmatagalang pagbabago, hindi matinding diyeta o mabilis na pagpapapayat. Kumain nang regular at balanse ng gulay, prutas, buong butil at angkop na dami ng malusog na taba; manatiling aktibo.",
      "Hindi maaasahang matutunaw ng pagkain ang kasalukuyang mga bato o maiiwasan ang lahat ng kaso. Pagkatapos ng operasyon para sa timbang, sundin ang plano ng pangkat; itanong kung angkop ang iniresetang gamot na pang-iwas sa bato. Agarang pagsusuri ang kailangan sa sakit na may lagnat o paninilaw.",
    ],
    [
      "Luslos sa singit at dingding ng tiyan",
      "Iwasan ang pagtitibi sa hibla at likidong pinahihintulutan ng pangkat. Tumigil sa paninigarilyo, ipagamot ang tuloy-tuloy na ubo at sikaping magkaroon ng malusog na timbang. Gumamit ng ligtas na pagbubuhat at humingi ng tulong sa mabigat na bagay.",
      "May luslos na dahil sa likas o mahinang tisyu at hindi maiiwasan ng pamumuhay. Hindi naaayos ng ehersisyo o sinturon ang luslos. Ang siruhano ang magtatakda ng limitasyon sa pagbubuhat pagkatapos ng operasyon; emergency ang masakit na nakulong na bukol na may pagsusuka.",
    ],
    [
      "Almoranas at bitak sa puwit",
      "Layuning malambot ngunit may hugis ang dumi: unti-unting dagdagan ang hibla, uminom ng angkop na likido at manatiling aktibo. Huwag umire, pigilan ang pagdumi o magtagal sa inidoro. Humingi ng tulong sa patuloy na pagtitibi o pagtatae.",
      "Maaaring mabawasan ang sintomas o pagbalik, hindi lahat ng kaso. Huwag ipalagay na almoranas ang pagdurugo; kailangan ng pagsusuri sa bago o patuloy na pagdurugo. Magpatingin agad sa maraming dugo, pagkahilo o matinding sakit.",
    ],
    [
      "Sakit na diverticular",
      "Kapag walang matinding atake, unti-unting isama ang buong butil, prutas, gulay at pagkaing may hibla ayon sa kaya ng katawan. Manatiling aktibo, iwasan ang paninigarilyo at panatilihin ang malusog na timbang. Hindi karaniwang kailangang alisin ang mga mani at buto.",
      "Kailangan ng medikal na pagsusuri sa matinding atake at maaaring pansamantalang baguhin ang pagkain. Huwag dagdagan ang hibla kung pinaghihinalaang bara o matinding pamamaga nang walang payo. Hindi garantiya ang malusog na gawi laban sa diverticulitis.",
    ],
    [
      "Kanser sa colon at tumbong",
      "Kumain ng mas maraming buong butil, gulay at prutas; limitahan ang naprosesong karne at sobrang pulang karne. Maging aktibo, panatilihin ang malusog na timbang, huwag manigarilyo at limitahan o iwasan ang alak. Magtanong tungkol sa screening ayon sa edad, kasaysayan ng pamilya at lokal na rekomendasyon.",
      "Binabawasan ngunit hindi inaalis ng screening at gawi ang panganib. Maaaring kailangan ang mas maagang pagsusuri dahil sa kasaysayan ng pamilya. Dugo sa dumi, patuloy na pagbabago sa pagdumi, anemia dahil sa kulang na iron o hindi maipaliwanag na pagbagsak ng timbang ay dapat suriin kahit normal ang screening.",
    ],
    [
      "Obesity at kaugnay na panganib sa operasyon",
      "Pumili ng pangmatagalang balanseng pagkain, angkop na dami, mas kaunting matatamis na inumin, aktibidad ayon sa kakayahan at sapat na tulog. Humingi ng suporta sa doktor o dietitian sa halip na matinding diyeta o hindi kontroladong produktong pampapayat.",
      "May biyolohikal at panlipunang sanhi ang obesity; hindi ito kakulangan ng disiplina. May nangangailangan ng gamot o operasyon. Pagkatapos ng bariatric surgery, sundin ang sariling plano sa nutrisyon at suplemento, hindi pangkalahatang diyeta.",
    ],
    [
      "Sakit na pilonidal",
      "Panatilihing malinis at marahang patuyuin ang pagitan ng puwitan; bawasan ang matagal na pressure sa regular na paggalaw. Kung pabalik-balik o pagkatapos ng operasyon, itanong sa doktor kung makatutulong ang propesyonal na pagtanggal ng buhok.",
      "Hindi garantisadong pag-iwas o lunas sa abscess ang mga hakbang. Huwag ahitin ang namamagang balat o pisilin ang masakit na bukol. Kailangan ng pagsusuri sa masakit na bukol, nana o lagnat; maaaring kailangang ilabas ang nana.",
    ],
    [
      "Hidradenitis suppurativa",
      "Humingi ng tulong na tumigil kung naninigarilyo. Maaaring makatulong ang suportadong pamamahala ng timbang kung angkop. Magsuot ng komportableng damit, bawasan ang pagkikiskisan, alagaan nang banayad ang balat at mag-follow-up sa dermatologist.",
      "Sakit ito ng pamamaga, hindi ng kakulangan sa kalinisan, at hindi nakahahawa. Walang tiyak na diyeta na napatunayang lunas; iwasan ang mahigpit na pagbabawal sa pagkain nang walang gabay. Hindi kapalit ng iniresetang paggamot ang pamumuhay.",
    ],
    [
      "Ingrown na kuko at impeksiyon sa balat",
      "Gupitin nang tuwid at hindi napakaikli ang kuko sa paa; magsuot ng kasya na sapatos at panatilihing malinis at tuyo ang paa. Maghugas ng kamay, linisin ang maliliit na sugat at takpan ng malinis na dressing. Huwag maghiraman ng pang-ahit o pisilin ang pigsa.",
      "Binabawasan nito ang ilang panganib, hindi lahat ng impeksiyon. Huwag hukayin ang kuko o buksan ang abscess sa sarili. Magpatingin agad kung may diabetes, mahinang sirkulasyon, lumalawak na pamumula o lagnat.",
    ],
    [
      "Appendicitis at ibang kondisyong walang maaasahang pag-iwas sa pamumuhay",
      "Kumain nang balanse at maging aktibo para sa pangkalahatang kalusugan, ngunit walang pagkain, suplemento o ehersisyong napatunayang pumipigil sa appendicitis. Ipasuri agad ang bagong sintomas sa halip na gumamit ng cleanse o lunas sa bahay.",
      "Hindi rin maaasahang mapipigilan ng pagkain ang mga bukol sa suso, thyroid at marami pang kondisyong kirurhiko. Kailangang suriin ang bagong bukol o patuloy na pagbabago. Lumalalang sakit ng tiyan, lalo na may pagsusuka o lagnat, ay nangangailangan ng agarang tulong.",
    ],
  ],
  ta: [
    [
      "பித்தப்பைக் கற்கள்",
      "கடுமையான உணவுக் கட்டுப்பாடு அல்லது வேகமான எடை இழப்புக்குப் பதிலாக மெதுவான, நிலையான மாற்றங்களால் ஆரோக்கியமான எடையைப் பேணுங்கள். காய்கறி, பழம், முழுத் தானியம் மற்றும் ஏற்ற அளவு ஆரோக்கியமான கொழுப்புடன் சீரான உணவை நேரம்தவறாமல் உண்ணுங்கள்; உடல் இயக்கத்துடன் இருங்கள்.",
      "உணவு ஏற்கனவே உள்ள கற்களை நம்பகமாகக் கரைக்காது; எல்லா நிகழ்வுகளையும் தடுக்காது. எடை குறைப்பு அறுவைச் சிகிச்சைக்குப் பின் குழுவின் திட்டத்தைப் பின்பற்றி, கற்கள் தடுப்பு மருந்து உங்களுக்குப் பொருத்தமா எனக் கேளுங்கள். வலியுடன் காய்ச்சல் அல்லது மஞ்சள் காமாலை இருந்தால் உடனடி பரிசோதனை தேவை.",
    ],
    [
      "இடுப்பு மற்றும் வயிற்றுச் சுவர் குடலிறக்கம்",
      "மருத்துவக் குழு அனுமதிக்கும் நார்ச்சத்து மற்றும் திரவங்களால் மலச்சிக்கலைத் தவிருங்கள். புகைப்பதை நிறுத்துங்கள், தொடரும் இருமலுக்குச் சிகிச்சை பெறுங்கள், ஆரோக்கியமான எடையை நோக்கி முயலுங்கள். பாதுகாப்பாக எடைகளைத் தூக்கி, கனமான பொருட்களுக்கு உதவி கேளுங்கள்.",
      "சில குடலிறக்கங்கள் பிறவியிலிருந்தோ திசு பலவீனத்தாலோ ஏற்படும்; வாழ்க்கை முறையால் தடுக்க முடியாது. உடற்பயிற்சி அல்லது பட்டை குடலிறக்கத்தைச் சரிசெய்யாது. அறுவைச் சிகிச்சைக்குப் பின் தூக்கும் எடையின் வரம்பை மருத்துவர் கூறுவார்; சிக்கிய வலியுள்ள கட்டியுடன் வாந்தி இருந்தால் அவசர நிலை.",
    ],
    [
      "மூலநோய் மற்றும் ஆசனவாய்ப் பிளவு",
      "மென்மையான, வடிவமுள்ள மலத்தை நோக்கமாகக் கொள்ளுங்கள்: நார்ச்சத்தை மெதுவாக அதிகரித்து, பொருத்தமான திரவங்கள் அருந்தி, இயங்குங்கள். முக்க வேண்டாம்; மலம் கழிக்கும் உணர்வை அடக்காதீர்கள்; கழிப்பறையில் நீண்ட நேரம் அமராதீர்கள். தொடரும் மலச்சிக்கல் அல்லது வயிற்றுப்போக்குக்கு உதவி பெறுங்கள்.",
      "இப்பழக்கங்கள் அறிகுறிகள் அல்லது மீண்டும் வருவதை குறைக்கலாம்; எல்லா நிகழ்வுகளையும் தடுக்காது. இரத்தப்போக்கை மூலநோய் எனக் கருத வேண்டாம்; புதிய அல்லது தொடரும் இரத்தப்போக்குக்கு பரிசோதனை தேவை. அதிக இரத்தப்போக்கு, தலைச்சுற்றல் அல்லது கடுமையான வலிக்கு உடனடி உதவி பெறுங்கள்.",
    ],
    [
      "குடல் பை நோய் (டைவெர்டிகுலர் நோய்)",
      "தீவிர பாதிப்பு இல்லாத நேரத்தில் சகிப்புத்தன்மைக்கேற்ப முழுத் தானியம், பழம், காய்கறி, நார்ச்சத்து உணவுகளை மெதுவாகச் சேருங்கள். இயங்குங்கள், புகைப்பதைத் தவிர்த்து ஆரோக்கியமான எடையைப் பேணுங்கள். பொதுவாகக் கொட்டைகள் மற்றும் விதைகளைத் தவிர்க்க வேண்டியதில்லை.",
      "தீவிர பாதிப்புக்கு மருத்துவ மதிப்பீடும் தற்காலிக உணவு மாற்றமும் தேவைப்படலாம். அடைப்பு சந்தேகம் அல்லது கடுமையான அழற்சி இருந்தால் ஆலோசனையின்றி நார்ச்சத்தை அதிகரிக்காதீர்கள். ஆரோக்கியப் பழக்கங்கள் டைவெர்டிகுலைட்டிஸைத் தடுக்கும் உத்தரவாதம் அல்ல.",
    ],
    [
      "பெருங்குடல் மற்றும் மலக்குடல் புற்றுநோய்",
      "முழுத் தானியம், காய்கறி, பழங்களை அதிகமாகச் சாப்பிடுங்கள்; பதப்படுத்தப்பட்ட இறைச்சி மற்றும் அதிக சிவப்பு இறைச்சியைக் குறையுங்கள். இயங்குங்கள், ஆரோக்கியமான எடையைப் பேணுங்கள், புகைப்பதைத் தவிர்த்து மதுவைக் குறையுங்கள் அல்லது தவிருங்கள். வயது, குடும்ப வரலாறு, உள்ளூர் பரிந்துரைகளுக்கு ஏற்ப பரிசோதனை பற்றி கேளுங்கள்.",
      "பரிசோதனையும் பழக்கங்களும் அபாயத்தைக் குறைக்கும்; முற்றிலும் நீக்காது. குடும்ப வரலாறு இருந்தால் முன்னதாகப் பரிசோதனை தேவைப்படலாம். மலத்தில் இரத்தம், தொடரும் மலம் கழிக்கும் மாற்றம், இரும்புச்சத்து குறைவு இரத்தசோகை அல்லது காரணமற்ற எடை இழப்புக்கு, பரிசோதனை இயல்பாக இருந்த பின்னரும் மதிப்பீடு தேவை.",
    ],
    [
      "உடல் பருமனும் தொடர்புடைய அறுவைச் சிகிச்சை அபாயமும்",
      "நிலையான சமச்சீர் உணவு, பொருத்தமான அளவு, குறைந்த சர்க்கரைப் பானங்கள், திறனுக்கேற்ற உடல் இயக்கம் மற்றும் போதுமான தூக்கத்தைத் தேர்ந்தெடுங்கள். கடுமையான உணவுக் கட்டுப்பாடு அல்லது கட்டுப்பாடற்ற எடை குறைப்பு பொருட்களுக்குப் பதிலாக மருத்துவர் அல்லது உணவியல் நிபுணரிடம் உதவி பெறுங்கள்.",
      "உடல் பருமனுக்கு உயிரியல் மற்றும் சமூகக் காரணங்கள் உள்ளன; மன உறுதியின்மை அல்ல. சிலருக்கு மருந்து அல்லது அறுவைச் சிகிச்சை தேவை. எடை குறைப்பு அறுவைச் சிகிச்சைக்குப் பின் உங்கள் தனிப்பட்ட ஊட்டச்சத்து மற்றும் துணைச்சத்து திட்டத்தைப் பின்பற்றுங்கள்; பொதுவான உணவுத் திட்டத்தை அல்ல.",
    ],
    [
      "பைலோனைடல் நோய்",
      "பிட்டங்களுக்கு இடையிலுள்ள பிளவைச் சுத்தமாக வைத்து மெதுவாக உலர்த்துங்கள்; அடிக்கடி இயங்குவதால் நீண்ட அழுத்தத்தைக் குறையுங்கள். மீண்டும் வரும் நோய் அல்லது அறுவைச் சிகிச்சைக்குப் பின் நிபுணர் மூலம் முடி அகற்றுதல் உதவுமா என மருத்துவரிடம் கேளுங்கள்.",
      "இவை தடுப்புக்கான உத்தரவாதம் அல்ல; சீழ்க்கட்டியைக் குணப்படுத்தாது. அழற்சியுள்ள தோலைச் சவரம் செய்யாதீர்கள் அல்லது வலியுள்ள வீக்கத்தைப் பிழியாதீர்கள். வலியுள்ள கட்டி, சீழ் அல்லது காய்ச்சலுக்குப் பரிசோதனை தேவை; சீழ் வடிக்க வேண்டியிருக்கலாம்.",
    ],
    [
      "ஹைட்ராடெனிடிஸ் சப்புரட்டிவா",
      "புகைப்பவராக இருந்தால் நிறுத்த உதவி பெறுங்கள். பொருத்தமானால் ஆதரவுடன் எடையைக் கட்டுப்படுத்துவது உதவலாம். வசதியான ஆடைகளை அணிந்து உராய்வைக் குறைத்து, மென்மையாகத் தோலைப் பராமரித்து தோல் மருத்துவரின் தொடர்ச்சிப் பரிசோதனைகளைப் பேணுங்கள்.",
      "இது அழற்சி நோய்; சுகாதாரமின்மையால் ஏற்படுவதல்ல, தொற்றும் அல்ல. குறிப்பிட்ட உணவு இதைக் குணப்படுத்தும் ஆதாரம் இல்லை; ஆலோசனையின்றி கட்டுப்பாடான உணவுகளைத் தவிருங்கள். வாழ்க்கை முறை மாற்றங்கள் பரிந்துரைக்கப்பட்ட சிகிச்சைக்கு மாற்றல்ல.",
    ],
    [
      "உள்வளரும் நகம் மற்றும் தோல் தொற்றுகள்",
      "கால் நகங்களை நேராக வெட்டுங்கள்; மிகக் குறுகியதாக வேண்டாம். பொருத்தமான காலணிகளை அணிந்து பாதங்களைச் சுத்தமாகவும் உலர்ந்தும் வைத்திருங்கள். கைகளை கழுவி, சிறிய காயங்களைச் சுத்தம் செய்து சுத்தமான கட்டால் மூடுங்கள். சவரக் கத்தியைப் பகிராதீர்கள்; சீழ்க்கட்டிகளைப் பிழியாதீர்கள்.",
      "இவை சில அபாயங்களைக் குறைக்கும்; எல்லா தொற்றுகளையும் தடுக்காது. நக ஓரங்களைத் தோண்டாதீர்கள்; சீழ்க்கட்டியை நீங்களே திறக்காதீர்கள். நீரிழிவு, குறைந்த இரத்த ஓட்டம், பரவும் சிவப்பு அல்லது காய்ச்சல் இருந்தால் விரைவாக மருத்துவ உதவி பெறுங்கள்.",
    ],
    [
      "குடல்வால் அழற்சி மற்றும் நம்பகமான வாழ்க்கை முறைத் தடுப்பு இல்லாத நிலைகள்",
      "பொது ஆரோக்கியத்திற்குச் சீரான உணவும் இயக்கமும் உதவும்; ஆனால் எந்த உணவு, துணைச்சத்து அல்லது உடற்பயிற்சியும் குடல்வால் அழற்சியைத் தடுக்கும் என நிரூபிக்கப்படவில்லை. உடல் சுத்திகரிப்பு அல்லது வீட்டுச் சிகிச்சைக்குப் பதிலாக புதிய அறிகுறிகளுக்கு உரிய நேரத்தில் பரிசோதனை பெறுங்கள்.",
      "மார்பகக் கட்டிகள், தைராய்டு முடிச்சுகள் மற்றும் பல அறுவைச் சிகிச்சை நிலைகளையும் உணவால் நம்பகமாகத் தடுக்க முடியாது. புதிய கட்டிகள் அல்லது தொடரும் மாற்றங்களுக்குப் பரிசோதனை தேவை. அதிகரிக்கும் வயிற்று வலி, குறிப்பாக வாந்தி அல்லது காய்ச்சலுடன் இருந்தால், அவசர மருத்துவ உதவி தேவை.",
    ],
  ],
};

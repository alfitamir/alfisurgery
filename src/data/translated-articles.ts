// Human-written translations of the English edition of article 228 (laparoscopic cholecystectomy).
// Figures and instructions mirror the source exactly; each edition defers to the treating team.
type Lang = "ur" | "hi" | "bn" | "tl";

interface Copy {
  title: string; note: string;
  h: [string, string, string, string, string, string, string, string, string];
  what: string; procedure: string; why: string[]; before: string[]; after: string[];
  complications: string[]; activity: string[]; emergency: string[]; closing: string;
}

const c: Record<Lang, Copy> = {
  ur: {
    title: "لیپروسکوپک پتّہ نکالنے کا آپریشن: سرجری سے پہلے اور بعد",
    note: "یہ ڈاکٹر تامر الألفی کے انگریزی تعلیمی مضمون کا ترجمہ ہے۔ آپ کی معالج ٹیم کی ہدایات ہمیشہ مقدم ہیں۔",
    h: ["پتّہ کیا ہے؟", "آپریشن کیا ہے؟", "آپریشن کیوں کیا جاتا ہے؟", "آپریشن سے پہلے کی تیاری", "آپریشن کے بعد کیا توقع کریں", "ممکنہ پیچیدگیاں", "روزمرہ سرگرمیوں کی واپسی", "فوراً ڈاکٹر سے رابطہ کریں یا ایمرجنسی جائیں اگر", "اطمینان"],
    what: "پتّہ جگر کے نیچے دائیں جانب ایک چھوٹا عضو ہے جو صفرا (بائل) کو جمع کرتا ہے، جو چکنائی ہضم کرنے میں مدد دیتا ہے۔ پتّہ نکالنے کے بعد بھی جگر صفرا بناتا رہتا ہے اور وہ براہِ راست آنت میں جاتا ہے۔ زیادہ تر لوگ معمول کے مطابق کھانا ہضم کرتے ہیں؛ کچھ کو چکنائی والے کھانے کے بعد عارضی ڈھیلے پاخانے یا اپھارہ ہو سکتا ہے جو عموماً ہفتوں سے مہینوں میں بہتر ہو جاتا ہے۔",
    procedure: "یہ کم سے کم چیر پھاڑ والا آپریشن ہے جو پیٹ میں چھوٹے سوراخوں سے کیمرے اور خاص آلات کے ذریعے مکمل بے ہوشی میں کیا جاتا ہے، اور عموماً 45 سے 90 منٹ لیتا ہے۔ سرجری پتّے کی پتھری اور سوزش کا واحد مستقل علاج ہے۔",
    why: ["دائیں اوپری پیٹ میں یا کھانے کے بعد بار بار درد", "پتّے کی شدید یا دائمی سوزش", "پتھری جو صفرا کی نالیوں کو بند کرے", "یرقان یا لبلبے کی سوزش جیسی پیچیدگیاں", "پتّے میں پولیپ یا رسولی"],
    before: ["خون کے ٹیسٹ، الٹراساؤنڈ اور کبھی اضافی امیجنگ", "خون پتلا کرنے والی دوائیں صرف ڈاکٹر کی ہدایت پر بند کریں", "ذیابیطس اور بلڈ پریشر کو قابو میں رکھیں", "آپریشن سے 8 گھنٹے پہلے کچھ نہ کھائیں نہ پئیں", "صابن سے نہائیں اور ناف اچھی طرح صاف کریں", "اپنی باقاعدہ دوائیں ساتھ لائیں؛ داخلہ عموماً آپریشن سے 8 گھنٹے پہلے ہوتا ہے"],
    after: ["ہلکا سے درمیانہ درد جو دوا سے قابو میں رہتا ہے", "4 سے 6 گھنٹے میں چلنے کی ترغیب؛ چند گھنٹوں میں صاف مشروبات", "ڈرین لگایا جائے تو 1 سے 2 دن میں نکالا جاتا ہے؛ ہسپتال میں عموماً 1 دن", "آہستہ آہستہ معمول کی خوراک؛ 4 ہفتے تک بھاری وزن نہ اٹھائیں", "پہلا معائنہ آپریشن کے 5 سے 7 دن بعد"],
    complications: ["خون بہنا: 1–2٪", "زخم میں انفیکشن: 1–3٪", "صفرا کا رساؤ: 0.5–1٪", "صفرا کی بڑی نالی کو نقصان: 0.2–0.5٪", "آپریشن کے بعد مسلسل علامات: 5–10٪"],
    activity: ["چلنا اور ہلکا کام: 24 گھنٹے میں", "گاڑی چلانا: 24 گھنٹے بعد اگر تیز درد کش دوا نہ لی ہو", "دفتری کام: 1 ہفتے بعد", "بھاری وزن یا ورزش: 4 ہفتے بعد"],
    emergency: ["38°C سے زیادہ بخار", "پیٹ میں شدید درد یا سوجن", "جلد یا آنکھوں کا پیلا ہونا", "مسلسل قے یا کھانے پینے سے قاصر ہونا", "زخم سے خون یا پیپ، یا بڑھتی سرخی اور درد", "سانس لینے میں دشواری یا سینے میں درد"],
    closing: "پتّہ نکالنا جدید سرجری کے سب سے عام اور محفوظ آپریشنز میں سے ہے۔ زیادہ تر مریض جلد صحت یاب ہو کر چند دنوں میں معمول کی زندگی میں لوٹ آتے ہیں۔",
  },
  hi: {
    title: "लैप्रोस्कोपिक पित्ताशय निकालने की सर्जरी: ऑपरेशन से पहले और बाद",
    note: "यह डॉ. तामेर अल-अल्फ़ी के अंग्रेज़ी शैक्षिक लेख का अनुवाद है। आपकी उपचार टीम के निर्देश हमेशा प्राथमिक हैं।",
    h: ["पित्ताशय क्या है?", "ऑपरेशन क्या है?", "सर्जरी क्यों की जाती है?", "ऑपरेशन से पहले की तैयारी", "ऑपरेशन के बाद क्या उम्मीद करें", "संभावित जटिलताएँ", "रोज़मर्रा के कामों पर लौटना", "तुरंत डॉक्टर से संपर्क करें या आपातकालीन विभाग जाएँ यदि", "भरोसा"],
    what: "पित्ताशय लिवर के नीचे दाईं ओर एक छोटा अंग है जो पित्त (बाइल) जमा करता है, जो वसा पचाने में मदद करता है। पित्ताशय निकालने के बाद भी लिवर पित्त बनाता रहता है और वह सीधे आँत में जाता है। अधिकतर लोग सामान्य रूप से भोजन पचाते हैं; कुछ लोगों को वसायुक्त भोजन के बाद अस्थायी पतला मल या पेट फूलना हो सकता है, जो आमतौर पर हफ़्तों से महीनों में ठीक हो जाता है।",
    procedure: "यह कम चीर-फाड़ वाला ऑपरेशन है, जो पेट में छोटे चीरों से कैमरा और विशेष उपकरणों द्वारा पूर्ण बेहोशी में किया जाता है और आमतौर पर 45 से 90 मिनट लेता है। पथरी और पित्ताशय की सूजन का स्थायी इलाज केवल सर्जरी है।",
    why: ["दाएँ ऊपरी पेट में या भोजन के बाद बार-बार दर्द", "पित्ताशय की तीव्र या पुरानी सूजन", "पथरी जो पित्त नलियों को रोक दे", "पीलिया या अग्नाशय की सूजन जैसी जटिलताएँ", "पित्ताशय में पॉलिप या गाँठ"],
    before: ["रक्त जाँच, अल्ट्रासाउंड और कभी-कभी अतिरिक्त इमेजिंग", "खून पतला करने वाली दवाएँ केवल डॉक्टर के निर्देश पर बंद करें", "मधुमेह और रक्तचाप नियंत्रित रखें", "ऑपरेशन से 8 घंटे पहले कुछ न खाएँ न पिएँ", "साबुन से नहाएँ और नाभि अच्छी तरह साफ़ करें", "अपनी नियमित दवाएँ साथ लाएँ; भर्ती आमतौर पर ऑपरेशन से 8 घंटे पहले होती है"],
    after: ["हल्का से मध्यम दर्द, जो दवा से नियंत्रित होता है", "4 से 6 घंटे में चलने की सलाह; कुछ घंटों में साफ़ तरल", "ड्रेन लगाया गया हो तो 1 से 2 दिन में निकाला जाता है; अस्पताल में आमतौर पर 1 दिन", "धीरे-धीरे सामान्य भोजन; 4 सप्ताह तक भारी वज़न न उठाएँ", "पहली जाँच ऑपरेशन के 5 से 7 दिन बाद"],
    complications: ["रक्तस्राव: 1–2%", "घाव का संक्रमण: 1–3%", "पित्त का रिसाव: 0.5–1%", "मुख्य पित्त नली को चोट: 0.2–0.5%", "सर्जरी के बाद लगातार लक्षण: 5–10%"],
    activity: ["चलना और हल्का काम: 24 घंटे में", "गाड़ी चलाना: 24 घंटे बाद, यदि तेज़ दर्द-निवारक न ली हो", "दफ़्तर का काम: 1 सप्ताह बाद", "भारी वज़न या व्यायाम: 4 सप्ताह बाद"],
    emergency: ["38°C से अधिक बुखार", "पेट में तेज़ दर्द या सूजन", "त्वचा या आँखों का पीला होना", "लगातार उल्टी या खाने-पीने में असमर्थता", "घाव से खून या मवाद, या बढ़ती लालिमा और दर्द", "साँस लेने में कठिनाई या सीने में दर्द"],
    closing: "पित्ताशय निकालना आधुनिक सर्जरी के सबसे आम और सुरक्षित ऑपरेशनों में से एक है। अधिकतर मरीज़ जल्दी ठीक होकर कुछ ही दिनों में सामान्य जीवन में लौट आते हैं।",
  },
  bn: {
    title: "ল্যাপারোস্কোপিক পিত্তথলি অপসারণ: অস্ত্রোপচারের আগে ও পরে",
    note: "এটি ডা. তামের আল-আলফির ইংরেজি শিক্ষামূলক নিবন্ধের অনুবাদ। আপনার চিকিৎসক দলের নির্দেশনাই সর্বদা অগ্রাধিকার পাবে।",
    h: ["পিত্তথলি কী?", "অস্ত্রোপচারটি কী?", "কেন অস্ত্রোপচার করা হয়?", "অস্ত্রোপচারের আগের প্রস্তুতি", "অস্ত্রোপচারের পরে কী আশা করবেন", "সম্ভাব্য জটিলতা", "দৈনন্দিন কাজে ফেরা", "অবিলম্বে ডাক্তারকে জানান বা জরুরি বিভাগে যান যদি", "আশ্বাস"],
    what: "পিত্তথলি লিভারের নিচে ডান দিকে একটি ছোট অঙ্গ, যা পিত্তরস জমা রাখে; এটি চর্বি হজমে সাহায্য করে। পিত্তথলি অপসারণের পরও লিভার পিত্তরস তৈরি করে এবং তা সরাসরি অন্ত্রে যায়। বেশিরভাগ মানুষ স্বাভাবিকভাবে খাবার হজম করেন; কারও কারও চর্বিযুক্ত খাবারের পরে সাময়িক পাতলা পায়খানা বা পেট ফাঁপা হতে পারে, যা সাধারণত কয়েক সপ্তাহ থেকে কয়েক মাসে ভালো হয়ে যায়।",
    procedure: "এটি ন্যূনতম কাটাছেঁড়ার অস্ত্রোপচার, যা পেটে ছোট ছিদ্র দিয়ে ক্যামেরা ও বিশেষ যন্ত্রের সাহায্যে সম্পূর্ণ অজ্ঞান করে করা হয় এবং সাধারণত ৪৫ থেকে ৯০ মিনিট লাগে। পিত্তপাথর ও পিত্তথলির প্রদাহের একমাত্র স্থায়ী চিকিৎসা অস্ত্রোপচার।",
    why: ["পেটের ডান উপরের অংশে বা খাবারের পরে বারবার ব্যথা", "পিত্তথলির তীব্র বা দীর্ঘমেয়াদি প্রদাহ", "পাথর যা পিত্তনালি আটকে দেয়", "জন্ডিস বা অগ্ন্যাশয়ের প্রদাহের মতো জটিলতা", "পিত্তথলিতে পলিপ বা টিউমার"],
    before: ["রক্ত পরীক্ষা, আল্ট্রাসাউন্ড এবং কখনো অতিরিক্ত ইমেজিং", "রক্ত পাতলা করার ওষুধ কেবল ডাক্তারের নির্দেশে বন্ধ করুন", "ডায়াবেটিস ও উচ্চ রক্তচাপ নিয়ন্ত্রণে রাখুন", "অস্ত্রোপচারের ৮ ঘণ্টা আগে কিছু খাবেন না বা পান করবেন না", "সাবান দিয়ে গোসল করুন এবং নাভি ভালোভাবে পরিষ্কার করুন", "নিয়মিত ওষুধ সঙ্গে আনুন; ভর্তি সাধারণত অস্ত্রোপচারের ৮ ঘণ্টা আগে"],
    after: ["হালকা থেকে মাঝারি ব্যথা, যা ওষুধে নিয়ন্ত্রিত থাকে", "৪ থেকে ৬ ঘণ্টার মধ্যে হাঁটতে উৎসাহ; কয়েক ঘণ্টায় স্বচ্ছ তরল", "ড্রেন থাকলে ১ থেকে ২ দিনে খোলা হয়; হাসপাতালে সাধারণত ১ দিন", "ধীরে ধীরে স্বাভাবিক খাবার; ৪ সপ্তাহ ভারী জিনিস তুলবেন না", "প্রথম ফলো-আপ অস্ত্রোপচারের ৫ থেকে ৭ দিন পরে"],
    complications: ["রক্তক্ষরণ: ১–২%", "ক্ষতে সংক্রমণ: ১–৩%", "পিত্তরস লিক: ০.৫–১%", "প্রধান পিত্তনালিতে আঘাত: ০.২–০.৫%", "অস্ত্রোপচারের পরে স্থায়ী উপসর্গ: ৫–১০%"],
    activity: ["হাঁটা ও হালকা কাজ: ২৪ ঘণ্টার মধ্যে", "গাড়ি চালানো: ২৪ ঘণ্টা পরে, যদি কড়া ব্যথানাশক না নেন", "অফিসের কাজ: ১ সপ্তাহ পরে", "ভারী জিনিস তোলা বা ব্যায়াম: ৪ সপ্তাহ পরে"],
    emergency: ["৩৮°C-এর বেশি জ্বর", "পেটে তীব্র ব্যথা বা ফোলা", "ত্বক বা চোখ হলুদ হওয়া", "ক্রমাগত বমি বা খেতে-পান করতে না পারা", "ক্ষত থেকে রক্ত বা পুঁজ, বা বাড়তে থাকা লালভাব ও ব্যথা", "শ্বাসকষ্ট বা বুকে ব্যথা"],
    closing: "পিত্তথলি অপসারণ আধুনিক অস্ত্রোপচারের সবচেয়ে প্রচলিত ও নিরাপদ অপারেশনগুলোর একটি। বেশিরভাগ রোগী দ্রুত সুস্থ হয়ে কয়েক দিনের মধ্যে স্বাভাবিক জীবনে ফেরেন।",
  },
  tl: {
    title: "Laparoscopic na pagtanggal ng apdo: bago at pagkatapos ng operasyon",
    note: "Ito ay salin ng artikulong pang-edukasyon sa Ingles ni Dr. Tamer Elalfy. Laging sundin muna ang payo ng inyong gumagamot na pangkat.",
    h: ["Ano ang apdo (gallbladder)?", "Ano ang operasyon?", "Bakit ginagawa ang operasyon?", "Paghahanda bago ang operasyon", "Ano ang aasahan pagkatapos ng operasyon", "Mga posibleng komplikasyon", "Pagbalik sa pang-araw-araw na gawain", "Tumawag agad sa doktor o pumunta sa emergency kung may", "Pampalubag-loob"],
    what: "Ang apdo ay maliit na organ sa ilalim ng atay sa kanang bahagi ng itaas na tiyan na nag-iimbak ng bile, na tumutulong tunawin ang taba. Kapag tinanggal ang apdo, patuloy pa ring gumagawa ng bile ang atay at dumadaloy ito diretso sa bituka. Karamihan ay normal na natutunaw ang pagkain; ang ilan ay maaaring makaranas ng pansamantalang malambot na dumi o kabag pagkatapos kumain ng mamantika, na kadalasang gumagaling sa loob ng ilang linggo hanggang buwan.",
    procedure: "Ito ay minimally invasive na operasyon sa pamamagitan ng maliliit na hiwa sa tiyan gamit ang kamera at espesyal na kagamitan, sa ilalim ng general anesthesia, at karaniwang tumatagal ng 45 hanggang 90 minuto. Ang operasyon ang tanging permanenteng lunas sa gallstones at pamamaga ng apdo.",
    why: ["Paulit-ulit na pananakit sa kanang itaas na tiyan o pagkatapos kumain", "Biglaan o pangmatagalang pamamaga ng apdo", "Batong bumabara sa daluyan ng bile", "Komplikasyon gaya ng paninilaw (jaundice) o pancreatitis", "Polyp o bukol sa apdo"],
    before: ["Pagsusuri ng dugo, ultrasound at kung minsan ay dagdag na imaging", "Itigil lamang ang pampalabnaw ng dugo kung ipinag-utos ng doktor", "Panatilihing kontrolado ang diabetes at altapresyon", "Huwag kumain o uminom 8 oras bago ang operasyon", "Maligo gamit ang sabon at linising mabuti ang pusod", "Dalhin ang mga regular na gamot; karaniwang 8 oras bago ang operasyon ang admission"],
    after: ["Banayad hanggang katamtamang sakit na kontrolado ng gamot", "Hinihikayat maglakad sa loob ng 4–6 na oras; malinaw na inumin sa loob ng ilang oras", "Kung may drain, tinatanggal ito sa loob ng 1–2 araw; karaniwang 1 araw sa ospital", "Unti-unting bumalik sa normal na pagkain; huwag magbuhat ng mabigat sa loob ng 4 na linggo", "Unang follow-up 5–7 araw pagkatapos ng operasyon"],
    complications: ["Pagdurugo: 1–2%", "Impeksiyon ng sugat: 1–3%", "Pagtagas ng bile: 0.5–1%", "Malubhang pinsala sa daluyan ng bile: 0.2–0.5%", "Patuloy na sintomas pagkatapos ng operasyon: 5–10%"],
    activity: ["Paglalakad at magaang gawain: sa loob ng 24 oras", "Pagmamaneho: pagkatapos ng 24 oras kung walang malakas na pain reliever", "Trabaho sa opisina: pagkatapos ng 1 linggo", "Pagbubuhat ng mabigat o ehersisyo: pagkatapos ng 4 na linggo"],
    emergency: ["Lagnat na higit sa 38°C", "Matinding pananakit o pamamaga ng tiyan", "Paninilaw ng balat o mata", "Tuloy-tuloy na pagsusuka o hindi makakain/makainom", "Dugo o nana mula sa sugat, o lumalalang pamumula at sakit", "Hirap sa paghinga o pananakit ng dibdib"],
    closing: "Ang pagtanggal ng apdo ay isa sa pinakakaraniwan at pinakaligtas na operasyon sa modernong siruhiya. Karamihan sa mga pasyente ay mabilis gumaling at bumabalik sa normal na buhay sa loob ng ilang araw.",
  },
};

const list = (items: string[]) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

export const translatedArticleEditions: Record<Lang, { title: string; content: string }> = Object.fromEntries(
  (Object.keys(c) as Lang[]).map((lang) => {
    const x = c[lang];
    const content = [
      `<p><em>${x.note}</em></p>`,
      `<h2>${x.h[0]}</h2><p>${x.what}</p>`,
      `<h2>${x.h[1]}</h2><p>${x.procedure}</p>`,
      `<h2>${x.h[2]}</h2>${list(x.why)}`,
      `<h2>${x.h[3]}</h2>${list(x.before)}`,
      `<h2>${x.h[4]}</h2>${list(x.after)}`,
      `<h2>${x.h[5]}</h2>${list(x.complications)}`,
      `<h2>${x.h[6]}</h2>${list(x.activity)}`,
      `<h2>${x.h[7]}</h2>${list(x.emergency)}`,
      `<h2>${x.h[8]}</h2><p>${x.closing}</p>`,
    ].join("\n");
    return [lang, { title: x.title, content }];
  }),
) as Record<Lang, { title: string; content: string }>;

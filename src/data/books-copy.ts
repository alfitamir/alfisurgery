import type { SiteLanguage } from "@/lib/site-language";

/** Interface labels for the "My books" section. Book text itself stays in its original language. */
export type BooksCopy = {
  title: string;
  intro: string;
  audience: string;
  originalLanguage: string;
  notice: string;
  openAccess: string;
  read: string;
  contents: string;
  allBooks: string;
  front: string;
  chapters: string;
  back: string;
  previous: string;
  next: string;
  print: string;
  licence: string;
  inThisChapter: string;
  minutes: (n: number) => string;
  counts: (chapters: number, appendices: number) => string;
  descriptions: Record<string, string>;
};

export const booksCopy: Record<SiteLanguage, BooksCopy> = {
  ar: {
    title: "كتبي",
    intro: "كتب سريرية مفتوحة الوصول للأطباء وطاقم التمريض، تُقرأ مجانًا على هذا الموقع.",
    audience: "للمختصين في الرعاية الصحية",
    originalLanguage: "الكتاب باللغة الإنجليزية",
    notice: "هذا الكتاب متاح حاليًا بنسخته الإنجليزية الأصلية فقط. وهو موجّه للمختصين في الرعاية الصحية؛ وعلى المرضى اتباع تعليمات الفريق المعالج.",
    openAccess: "مفتوح الوصول · مجاني",
    read: "اقرأ الكتاب",
    contents: "المحتويات",
    allBooks: "كل الكتب",
    front: "مقدمات الكتاب",
    chapters: "الفصول",
    back: "الملاحق والمراجع",
    previous: "السابق",
    next: "التالي",
    print: "طباعة",
    licence: "الترخيص",
    inThisChapter: "في هذا الفصل",
    minutes: (n) => `${n} دقيقة قراءة`,
    counts: (c, a) => `${c} فصلًا · ${a} ملاحق`,
    descriptions: {
      "common-anal-conditions": "دليل عملي قائم على خوارزميات القرار حول البواسير والشرخ والخراج والناسور ونزيف المستقيم وعلامات الخطر والإحالة الآمنة، موجّه لأطباء الطوارئ وطب الأسرة والتخصصات غير الجراحية وطاقم التمريض.",
    },
  },
  en: {
    title: "My books",
    intro: "Open-access clinical handbooks for doctors and nurses — free to read on this site.",
    audience: "For healthcare professionals",
    originalLanguage: "Written in English",
    notice: "Written for healthcare professionals. Patients should follow the advice of their treating team.",
    openAccess: "Open access · Free",
    read: "Read the book",
    contents: "Contents",
    allBooks: "All books",
    front: "Front matter",
    chapters: "Chapters",
    back: "Appendices & references",
    previous: "Previous",
    next: "Next",
    print: "Print",
    licence: "Licence",
    inThisChapter: "In this chapter",
    minutes: (n) => `${n} min read`,
    counts: (c, a) => `${c} chapters · ${a} appendices`,
    descriptions: {
      "common-anal-conditions": "A practical, algorithm-based handbook on haemorrhoids, fissures, abscesses and fistulas, rectal bleeding, red flags and safe referral — written for emergency physicians, GPs, medical specialists and nurses.",
    },
  },
  ur: {
    title: "میری کتابیں",
    intro: "ڈاکٹروں اور نرسوں کے لیے کھلی رسائی والی طبی رہنما کتابیں — اس سائٹ پر مفت پڑھیں۔",
    audience: "طبی ماہرین کے لیے",
    originalLanguage: "یہ کتاب انگریزی میں ہے",
    notice: "یہ کتاب فی الحال صرف اپنے اصل انگریزی ایڈیشن میں دستیاب ہے۔ یہ طبی ماہرین کے لیے لکھی گئی ہے؛ مریض اپنی علاج کرنے والی ٹیم کی ہدایات پر عمل کریں۔",
    openAccess: "کھلی رسائی · مفت",
    read: "کتاب پڑھیں",
    contents: "فہرست",
    allBooks: "تمام کتابیں",
    front: "ابتدائی صفحات",
    chapters: "ابواب",
    back: "ضمیمے اور حوالہ جات",
    previous: "پچھلا",
    next: "اگلا",
    print: "پرنٹ",
    licence: "لائسنس",
    inThisChapter: "اس باب میں",
    minutes: (n) => `${n} منٹ مطالعہ`,
    counts: (c, a) => `${c} ابواب · ${a} ضمیمے`,
    descriptions: {
      "common-anal-conditions": "بواسیر، فشر، پھوڑے اور بھگندر، مقعد سے خون آنا، خطرے کی علامات اور محفوظ ریفرل پر الگورتھم پر مبنی عملی رہنما کتاب — ایمرجنسی ڈاکٹروں، فیملی ڈاکٹروں، غیر جراحی ماہرین اور نرسوں کے لیے۔",
    },
  },
  hi: {
    title: "मेरी पुस्तकें",
    intro: "डॉक्टरों और नर्सों के लिए ओपन-एक्सेस क्लिनिकल पुस्तिकाएँ — इस साइट पर निःशुल्क पढ़ें।",
    audience: "स्वास्थ्य पेशेवरों के लिए",
    originalLanguage: "यह पुस्तक अंग्रेज़ी में है",
    notice: "यह पुस्तक अभी केवल अपने मूल अंग्रेज़ी संस्करण में उपलब्ध है। यह स्वास्थ्य पेशेवरों के लिए लिखी गई है; मरीज़ अपनी उपचार टीम की सलाह का पालन करें।",
    openAccess: "ओपन एक्सेस · निःशुल्क",
    read: "पुस्तक पढ़ें",
    contents: "विषय-सूची",
    allBooks: "सभी पुस्तकें",
    front: "प्रारंभिक भाग",
    chapters: "अध्याय",
    back: "परिशिष्ट और संदर्भ",
    previous: "पिछला",
    next: "अगला",
    print: "प्रिंट करें",
    licence: "लाइसेंस",
    inThisChapter: "इस अध्याय में",
    minutes: (n) => `${n} मिनट का पाठ`,
    counts: (c, a) => `${c} अध्याय · ${a} परिशिष्ट`,
    descriptions: {
      "common-anal-conditions": "बवासीर, फ़िशर, फोड़ा और भगंदर, मलाशय से रक्तस्राव, ख़तरे के संकेत और सुरक्षित रेफ़रल पर एल्गोरिदम-आधारित व्यावहारिक पुस्तिका — आपातकालीन चिकित्सकों, पारिवारिक चिकित्सकों, गैर-शल्य विशेषज्ञों और नर्सों के लिए।",
    },
  },
  bn: {
    title: "আমার বইসমূহ",
    intro: "চিকিৎসক ও নার্সদের জন্য উন্মুক্ত-প্রবেশাধিকার ক্লিনিক্যাল হ্যান্ডবুক — এই সাইটে বিনামূল্যে পড়ুন।",
    audience: "স্বাস্থ্যসেবা পেশাজীবীদের জন্য",
    originalLanguage: "বইটি ইংরেজিতে লেখা",
    notice: "বইটি বর্তমানে কেবল মূল ইংরেজি সংস্করণে পাওয়া যায়। এটি স্বাস্থ্যসেবা পেশাজীবীদের জন্য লেখা; রোগীরা তাঁদের চিকিৎসক দলের পরামর্শ মেনে চলবেন।",
    openAccess: "উন্মুক্ত প্রবেশাধিকার · বিনামূল্যে",
    read: "বইটি পড়ুন",
    contents: "সূচিপত্র",
    allBooks: "সব বই",
    front: "প্রারম্ভিক অংশ",
    chapters: "অধ্যায়সমূহ",
    back: "পরিশিষ্ট ও তথ্যসূত্র",
    previous: "পূর্ববর্তী",
    next: "পরবর্তী",
    print: "প্রিন্ট",
    licence: "লাইসেন্স",
    inThisChapter: "এই অধ্যায়ে",
    minutes: (n) => `${n} মিনিটের পাঠ`,
    counts: (c, a) => `${c}টি অধ্যায় · ${a}টি পরিশিষ্ট`,
    descriptions: {
      "common-anal-conditions": "অর্শ, ফিশার, ফোড়া ও ভগন্দর, মলদ্বার দিয়ে রক্তপাত, বিপদসংকেত ও নিরাপদ রেফারাল নিয়ে অ্যালগরিদমভিত্তিক ব্যবহারিক হ্যান্ডবুক — জরুরি বিভাগের চিকিৎসক, পারিবারিক চিকিৎসক, অ-শল্য বিশেষজ্ঞ ও নার্সদের জন্য।",
    },
  },
  tl: {
    title: "Aking mga aklat",
    intro: "Mga open-access na klinikal na handbook para sa mga doktor at nars — libreng basahin sa site na ito.",
    audience: "Para sa mga propesyonal sa kalusugan",
    originalLanguage: "Nakasulat sa Ingles",
    notice: "Sa ngayon, ang aklat na ito ay makukuha lamang sa orihinal nitong edisyong Ingles. Isinulat ito para sa mga propesyonal sa kalusugan; dapat sundin ng mga pasyente ang payo ng kanilang gumagamot na koponan.",
    openAccess: "Open access · Libre",
    read: "Basahin ang aklat",
    contents: "Nilalaman",
    allBooks: "Lahat ng aklat",
    front: "Panimulang bahagi",
    chapters: "Mga kabanata",
    back: "Mga apendiks at sanggunian",
    previous: "Nakaraan",
    next: "Susunod",
    print: "I-print",
    licence: "Lisensya",
    inThisChapter: "Sa kabanatang ito",
    minutes: (n) => `${n} minutong pagbasa`,
    counts: (c, a) => `${c} kabanata · ${a} apendiks`,
    descriptions: {
      "common-anal-conditions": "Isang praktikal na handbook na batay sa algorithm tungkol sa almoranas, fissure, abscess at fistula, pagdurugo mula sa tumbong, mga babalang palatandaan at ligtas na pag-refer — para sa mga doktor sa emergency, GP, medical specialist at nars.",
    },
  },
  ta: {
    title: "எனது நூல்கள்",
    intro: "மருத்துவர்கள் மற்றும் செவிலியர்களுக்கான திறந்த அணுகல் மருத்துவக் கையேடுகள் — இந்தத் தளத்தில் இலவசமாகப் படிக்கலாம்.",
    audience: "சுகாதாரத் தொழில் வல்லுநர்களுக்கு",
    originalLanguage: "இந்நூல் ஆங்கிலத்தில் உள்ளது",
    notice: "இந்நூல் தற்போது அதன் மூல ஆங்கிலப் பதிப்பில் மட்டுமே கிடைக்கிறது. இது சுகாதாரத் தொழில் வல்லுநர்களுக்காக எழுதப்பட்டது; நோயாளிகள் தங்களுக்குச் சிகிச்சை அளிக்கும் மருத்துவக் குழுவின் அறிவுரையைப் பின்பற்ற வேண்டும்.",
    openAccess: "திறந்த அணுகல் · இலவசம்",
    read: "நூலைப் படிக்கவும்",
    contents: "உள்ளடக்கம்",
    allBooks: "அனைத்து நூல்களும்",
    front: "முன்பகுதி",
    chapters: "அத்தியாயங்கள்",
    back: "பின்னிணைப்புகள் மற்றும் மேற்கோள்கள்",
    previous: "முந்தையது",
    next: "அடுத்தது",
    print: "அச்சிடு",
    licence: "உரிமம்",
    inThisChapter: "இந்த அத்தியாயத்தில்",
    minutes: (n) => `${n} நிமிட வாசிப்பு`,
    counts: (c, a) => `${c} அத்தியாயங்கள் · ${a} பின்னிணைப்புகள்`,
    descriptions: {
      "common-anal-conditions": "மூலம், குதப் பிளவு, சீழ்க்கட்டி மற்றும் பவுத்திரம், மலக்குடல் இரத்தப்போக்கு, அபாய அறிகுறிகள் மற்றும் பாதுகாப்பான பரிந்துரை குறித்த அல்காரிதம் அடிப்படையிலான நடைமுறைக் கையேடு — அவசர சிகிச்சை மருத்துவர்கள், குடும்ப மருத்துவர்கள், அறுவை அல்லாத சிறப்பு மருத்துவர்கள் மற்றும் செவிலியர்களுக்கு.",
    },
  },
};

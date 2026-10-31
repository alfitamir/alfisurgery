import type { SiteLanguage } from "@/lib/site-language";

type HeritageCopy = {
  title: string;
  intro: string;
  saudiTitle: string;
  saudiText: string;
  saudiAlt: string;
  egyptTitle: string;
  egyptText: string;
  egyptAlt: string;
  legendTitle: string;
  surgery: string;
  recovery: string;
  disease: string;
  alert: string;
};

export const heritageCopy: Record<SiteLanguage, HeritageCopy> = {
  ar: {
    title: "بلدان، ومعيار جراحي واحد",
    intro: "يمارس د. تامر الألفي الجراحة في المنطقة الشرقية بالسعودية، ويدرّسها في جامعة الزقازيق بمصر.",
    saudiTitle: "السعودية — الخبر، المنطقة الشرقية",
    saudiText: "رعاية جراحية حديثة تضع المريض في المركز.",
    saudiAlt: "كورنيش الخبر على الخليج العربي وقت الغروب",
    egyptTitle: "مصر — جامعة الزقازيق",
    egyptText: "تدريب جامعي عريق وتعليم الأجيال الجديدة من الجراحين.",
    egyptAlt: "مبنى جامعي تاريخي بجوار النيل في دلتا مصر",
    legendTitle: "دليل الألوان",
    surgery: "الجراحة والحالات المعقدة",
    recovery: "التغذية والتعافي",
    disease: "الأمراض وأدلة العمليات",
    alert: "الأسئلة وعلامات الخطر",
  },
  en: {
    title: "Two nations, one standard of surgical care",
    intro: "Dr. Tamer Elalfy operates in Saudi Arabia's Eastern Province and teaches surgery at Zagazig University, Egypt.",
    saudiTitle: "Saudi Arabia — Al Khobar, Eastern Province",
    saudiText: "Modern, patient-centred surgical care.",
    saudiAlt: "Al Khobar Corniche on the Arabian Gulf at sunset",
    egyptTitle: "Egypt — Zagazig University",
    egyptText: "Long-standing university training and teaching new surgeons.",
    egyptAlt: "Historic university building beside the Nile in the Egyptian delta",
    legendTitle: "Colour guide",
    surgery: "Surgery & complex care",
    recovery: "Diet & recovery",
    disease: "Diseases & operation guides",
    alert: "Questions & warning signs",
  },
  ur: {
    title: "دو ممالک، جراحی نگہداشت کا ایک معیار",
    intro: "ڈاکٹر تامر الالفی سعودی عرب کے مشرقی صوبے میں آپریشن کرتے ہیں اور مصر کی زقازیق یونیورسٹی میں سرجری پڑھاتے ہیں۔",
    saudiTitle: "سعودی عرب — الخبر، مشرقی صوبہ",
    saudiText: "جدید جراحی نگہداشت جس میں مریض مرکز میں ہے۔",
    saudiAlt: "غروبِ آفتاب کے وقت خلیج عرب پر الخبر کورنیش",
    egyptTitle: "مصر — زقازیق یونیورسٹی",
    egyptText: "دیرینہ یونیورسٹی تربیت اور نئے سرجنوں کی تعلیم۔",
    egyptAlt: "مصری ڈیلٹا میں دریائے نیل کے کنارے تاریخی یونیورسٹی عمارت",
    legendTitle: "رنگوں کی رہنمائی",
    surgery: "سرجری اور پیچیدہ نگہداشت",
    recovery: "غذا اور صحت یابی",
    disease: "بیماریاں اور آپریشن رہنما",
    alert: "سوالات اور خطرے کی علامات",
  },
  hi: {
    title: "दो देश, शल्य देखभाल का एक मानक",
    intro: "डॉ. तामेर अल्फी सऊदी अरब के पूर्वी प्रांत में ऑपरेशन करते हैं और मिस्र के ज़गाज़िग विश्वविद्यालय में सर्जरी पढ़ाते हैं।",
    saudiTitle: "सऊदी अरब — अल खोबर, पूर्वी प्रांत",
    saudiText: "आधुनिक, रोगी-केंद्रित शल्य देखभाल।",
    saudiAlt: "सूर्यास्त के समय अरब की खाड़ी पर अल खोबर कॉर्निश",
    egyptTitle: "मिस्र — ज़गाज़िग विश्वविद्यालय",
    egyptText: "पुराना विश्वविद्यालय प्रशिक्षण और नए सर्जनों को शिक्षा।",
    egyptAlt: "मिस्र के डेल्टा में नील नदी के किनारे ऐतिहासिक विश्वविद्यालय भवन",
    legendTitle: "रंग मार्गदर्शिका",
    surgery: "सर्जरी और जटिल देखभाल",
    recovery: "आहार और स्वास्थ्य-लाभ",
    disease: "बीमारियाँ और ऑपरेशन गाइड",
    alert: "प्रश्न और चेतावनी संकेत",
  },
  bn: {
    title: "দুই দেশ, অস্ত্রোপচার সেবার এক মান",
    intro: "ডা. তামের আলফি সৌদি আরবের পূর্বাঞ্চলীয় প্রদেশে অস্ত্রোপচার করেন এবং মিশরের জাগাজিগ বিশ্ববিদ্যালয়ে সার্জারি পড়ান।",
    saudiTitle: "সৌদি আরব — আল খোবার, পূর্বাঞ্চলীয় প্রদেশ",
    saudiText: "আধুনিক, রোগী-কেন্দ্রিক অস্ত্রোপচার সেবা।",
    saudiAlt: "সূর্যাস্তের সময় আরব উপসাগরের তীরে আল খোবার কর্নিশ",
    egyptTitle: "মিশর — জাগাজিগ বিশ্ববিদ্যালয়",
    egyptText: "দীর্ঘদিনের বিশ্ববিদ্যালয় প্রশিক্ষণ ও নতুন সার্জনদের শিক্ষা।",
    egyptAlt: "মিশরের ব-দ্বীপে নীল নদের পাশে ঐতিহাসিক বিশ্ববিদ্যালয় ভবন",
    legendTitle: "রঙের নির্দেশিকা",
    surgery: "সার্জারি ও জটিল সেবা",
    recovery: "খাদ্য ও সুস্থতা",
    disease: "রোগ ও অপারেশন নির্দেশিকা",
    alert: "প্রশ্ন ও সতর্ক সংকেত",
  },
  tl: {
    title: "Dalawang bansa, iisang pamantayan ng pangangalagang pang-opera",
    intro: "Nag-oopera si Dr. Tamer Elalfy sa Eastern Province ng Saudi Arabia at nagtuturo ng surgery sa Zagazig University, Egypt.",
    saudiTitle: "Saudi Arabia — Al Khobar, Eastern Province",
    saudiText: "Moderno at nakasentro sa pasyenteng pangangalagang pang-opera.",
    saudiAlt: "Al Khobar Corniche sa Arabian Gulf sa paglubog ng araw",
    egyptTitle: "Egypt — Zagazig University",
    egyptText: "Matagal nang pagsasanay sa unibersidad at pagtuturo sa mga bagong siruhano.",
    egyptAlt: "Makasaysayang gusali ng unibersidad sa tabi ng Nile sa delta ng Egypt",
    legendTitle: "Gabay sa kulay",
    surgery: "Operasyon at masalimuot na pangangalaga",
    recovery: "Pagkain at paggaling",
    disease: "Mga sakit at gabay sa operasyon",
    alert: "Mga tanong at babalang palatandaan",
  },
  ta: {
    title: "இரு நாடுகள், அறுவை சிகிச்சையில் ஒரே தரம்",
    intro: "டாக்டர் தாமர் அல்ஃபி சவுதி அரேபியாவின் கிழக்கு மாகாணத்தில் அறுவை சிகிச்சை செய்கிறார்; எகிப்தின் சகாசிக் பல்கலைக்கழகத்தில் அறுவை சிகிச்சை கற்பிக்கிறார்.",
    saudiTitle: "சவுதி அரேபியா — அல் கோபார், கிழக்கு மாகாணம்",
    saudiText: "நோயாளியை மையமாகக் கொண்ட நவீன அறுவை சிகிச்சை பராமரிப்பு.",
    saudiAlt: "சூரியன் மறையும் நேரத்தில் அரேபிய வளைகுடாவில் அல் கோபார் கார்னிஷ்",
    egyptTitle: "எகிப்து — சகாசிக் பல்கலைக்கழகம்",
    egyptText: "நீண்டகால பல்கலைக்கழகப் பயிற்சியும் புதிய அறுவை மருத்துவர்களுக்குக் கற்பித்தலும்.",
    egyptAlt: "எகிப்திய டெல்டாவில் நைல் நதிக்கரையில் உள்ள வரலாற்றுப் பல்கலைக்கழகக் கட்டடம்",
    legendTitle: "வண்ண வழிகாட்டி",
    surgery: "அறுவை சிகிச்சை மற்றும் சிக்கலான பராமரிப்பு",
    recovery: "உணவு மற்றும் குணமடைதல்",
    disease: "நோய்கள் மற்றும் அறுவை வழிகாட்டிகள்",
    alert: "கேள்விகள் மற்றும் எச்சரிக்கை அறிகுறிகள்",
  },
};

import type { SiteLanguage } from "@/lib/site-language";

type Copy = {
  postsTitle: string;
  postsIntro: string;
  weekly: string;
  read: string;
  empty: string;
  original: string;
  translated: string;
  showOriginal: string;
  showTranslation: string;
  note: string;
  commentsTitle: string;
  commentsIntro: string;
  nickname: string;
  comment: string;
  send: string;
  privacy: string;
  thanks: string;
  error: string;
  noComments: string;
};

const en: Copy = {
  postsTitle: "Dr. Tamer's posts on the latest surgical updates",
  postsIntro: "Full posts with images, newest first.",
  weekly: "Updated weekly",
  read: "Read the posts",
  empty: "Posts are being added soon.",
  original: "Original post",
  translated: "Automatic translation",
  showOriginal: "Show original",
  showTranslation: "Show translation",
  note: "Educational content. Your treating team's instructions always come first.",
  commentsTitle: "Patient impressions",
  commentsIntro: "Share your experience. Your comment appears to everyone with your nickname.",
  nickname: "Nickname",
  comment: "Your comment",
  send: "Post comment",
  privacy: "Please do not write your phone, email, or private medical details.",
  thanks: "Thank you — your comment is posted.",
  error: "Could not post. Check the length and try again.",
  noComments: "Be the first to share your impression.",
};
const ar: Copy = {
  postsTitle: "منشورات د. تامر عن أحدث المستجدات الجراحية",
  postsIntro: "المنشورات كاملة مع صورها، الأحدث أولًا.",
  weekly: "يُحدَّث أسبوعيًا",
  read: "اقرأ المنشورات",
  empty: "ستُضاف المنشورات قريبًا.",
  original: "المنشور الأصلي",
  translated: "ترجمة آلية",
  showOriginal: "عرض الأصل",
  showTranslation: "عرض الترجمة",
  note: "محتوى تثقيفي، وتعليمات الفريق المعالج لحالتك لها الأولوية دائمًا.",
  commentsTitle: "انطباعات المرضى",
  commentsIntro: "شاركنا تجربتك، يظهر تعليقك للجميع باسمك المستعار.",
  nickname: "الاسم المستعار",
  comment: "تعليقك",
  send: "نشر التعليق",
  privacy: "من فضلك لا تكتب رقم هاتفك أو بريدك أو تفاصيل طبية خاصة.",
  thanks: "شكرًا لك — نُشر تعليقك.",
  error: "تعذّر النشر. تأكد من طول النص وحاول مجددًا.",
  noComments: "كن أول من يشارك انطباعه.",
};
const ur: Copy = {
  ...en,
  postsTitle: "سرجری کی تازہ ترین معلومات پر ڈاکٹر تامر کی پوسٹس",
  weekly: "ہفتہ وار اپ ڈیٹ",
  read: "پوسٹس پڑھیں",
  translated: "خودکار ترجمہ",
  commentsTitle: "مریضوں کے تاثرات",
  nickname: "فرضی نام",
  comment: "آپ کا تبصرہ",
  send: "تبصرہ شائع کریں",
};
const hi: Copy = {
  ...en,
  postsTitle: "सर्जरी की नवीनतम जानकारी पर डॉ. तामेर की पोस्ट",
  weekly: "साप्ताहिक अपडेट",
  read: "पोस्ट पढ़ें",
  translated: "स्वचालित अनुवाद",
  commentsTitle: "मरीज़ों के अनुभव",
  nickname: "उपनाम",
  comment: "आपकी टिप्पणी",
  send: "टिप्पणी भेजें",
};
const bn: Copy = {
  ...en,
  postsTitle: "সার্জারির সর্বশেষ আপডেট নিয়ে ডা. তামেরের পোস্ট",
  weekly: "সাপ্তাহিক হালনাগাদ",
  read: "পোস্ট পড়ুন",
  translated: "স্বয়ংক্রিয় অনুবাদ",
  commentsTitle: "রোগীদের মতামত",
  nickname: "ছদ্মনাম",
  comment: "আপনার মন্তব্য",
  send: "মন্তব্য পাঠান",
};
const tl: Copy = {
  ...en,
  postsTitle: "Mga post ni Dr. Tamer tungkol sa pinakabagong balita sa operasyon",
  weekly: "Ina-update linggo-linggo",
  read: "Basahin ang mga post",
  translated: "Awtomatikong salin",
  commentsTitle: "Mga impresyon ng pasyente",
  nickname: "Palayaw",
  comment: "Iyong komento",
  send: "I-post ang komento",
};
const ta: Copy = {
  ...en,
  postsTitle: "அறுவை சிகிச்சை புதுப்பிப்புகள் குறித்த டாக்டர் தாமரின் பதிவுகள்",
  weekly: "வாரந்தோறும் புதுப்பிக்கப்படும்",
  read: "பதிவுகளைப் படிக்கவும்",
  translated: "தானியங்கி மொழிபெயர்ப்பு",
  commentsTitle: "நோயாளிகளின் கருத்துகள்",
  nickname: "புனைப்பெயர்",
  comment: "உங்கள் கருத்து",
  send: "கருத்தை வெளியிடு",
};

export const postsCommentsCopy: Record<SiteLanguage, Copy> = {
  en,
  ar,
  ur,
  hi,
  bn,
  tl,
  ta,
} as Record<SiteLanguage, Copy>;

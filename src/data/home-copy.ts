import type { SiteLanguage } from "@/lib/site-language";

export const homeCopy: Record<SiteLanguage, { title: string; intro: string; journey: string; urgent: string }> = {
  ar: { title: "افهم مرضك وعمليتك", intro: "شرح مبسّط للعمليات الجراحية، يساعدك على فهم حالتك والاستعداد للجراحة والتعافي بعدها.", journey: "رحلتك مع العملية", urgent: "علامات الخطر" },
  en: { title: "Understand your disease & operation", intro: "Clear surgical guides to help you understand your condition, prepare for surgery and recover afterwards.", journey: "Your surgical journey", urgent: "Warning signs" },
  ur: { title: "اپنی بیماری اور آپریشن کو سمجھیں", intro: "آسان جراحی رہنما جو آپ کو اپنی حالت سمجھنے، آپریشن کی تیاری اور بعد میں صحت یابی میں مدد دیں۔", journey: "آپ کے آپریشن کا سفر", urgent: "خطرے کی علامات" },
  hi: { title: "अपनी बीमारी और ऑपरेशन समझें", intro: "सरल शल्य चिकित्सा मार्गदर्शिकाएँ जो आपकी स्थिति समझने, ऑपरेशन की तैयारी और उसके बाद स्वस्थ होने में मदद करती हैं।", journey: "आपकी ऑपरेशन की यात्रा", urgent: "चेतावनी संकेत" },
  bn: { title: "আপনার রোগ ও অপারেশন বুঝুন", intro: "সহজ অস্ত্রোপচারের নির্দেশিকা, যা আপনার অবস্থা বুঝতে, অপারেশনের প্রস্তুতি নিতে এবং পরে সুস্থ হতে সাহায্য করে।", journey: "আপনার অস্ত্রোপচারের যাত্রা", urgent: "বিপদের লক্ষণ" },
  tl: { title: "Unawain ang sakit at operasyon", intro: "Malinaw na mga gabay upang maunawaan ang iyong kondisyon, maghanda sa operasyon at gumaling pagkatapos nito.", journey: "Ang iyong paglalakbay sa operasyon", urgent: "Mga babalang senyales" },
  ta: { title: "உங்கள் நோய் மற்றும் அறுவைச் சிகிச்சையைப் புரிந்துகொள்ளுங்கள்", intro: "உங்கள் நிலையைப் புரிந்துகொள்ளவும், அறுவைச் சிகிச்சைக்குத் தயாராகவும், அதன் பிறகு குணமடையவும் உதவும் எளிய வழிகாட்டிகள்.", journey: "உங்கள் அறுவைச் சிகிச்சைப் பயணம்", urgent: "அபாய அறிகுறிகள்" },
};
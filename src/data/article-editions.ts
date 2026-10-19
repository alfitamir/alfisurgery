import type { SiteLanguage } from "@/lib/site-language";

// Curated editions of the site-authored articles for the site languages.
// Arabic remains the original. Availability is explicit per article and language;
// a stored translation is not evidence of qualified native-speaking medical review.

export interface ArticleEdition {
  title: string;
  content: string;
}

export const articleEditions: Record<number, Partial<Record<SiteLanguage, ArticleEdition>>> = {
  9005: {
    en: {
      title: "Treating gallstones without surgery: the alternatives, their success rates and their limits",
      content: `
<p><strong>Can gallstones be treated without an operation?</strong> Sometimes observation alone is enough, or a medicine to dissolve certain types of stones may be considered — but there is no single non-surgical alternative that suits everyone. Stones that cause no symptoms are different from stones causing repeated colic, and different again from stones in the bile duct or situations with inflammation or jaundice. Laparoscopic removal of the gallbladder is the usual treatment for stones that cause symptoms, with structured observation possible in selected, uncomplicated cases.</p>
<p><em>This article is general education, not a prescription or a decision to postpone surgery. Your doctor's and treating team's instructions always come first. The information was checked against the cited sources; this check is not a personal clinical endorsement by Dr. Tamer Elalfy.</em></p>

<h2>First: where is the stone, and is it really the cause of the pain?</h2>
<p>The gallbladder stores the bile the liver produces. Stones may sit inside it without any problem, block its outlet and cause colic, or travel into the bile duct and cause blockage, infection or pancreatitis. A stone on ultrasound does not by itself prove that every bloating, heartburn or abdominal pain comes from the gallbladder; that is why the pattern of the pain, the ultrasound and the liver tests are reviewed, and an MRI of the ducts or an endoscopic ultrasound may be needed. <a href="https://www.nice.org.uk/guidance/cg188/chapter/recommendations" target="_blank" rel="noopener noreferrer">[1]</a></p>

<h2>1. Observation without surgery: who does it suit?</h2>
<p><strong>Stones without symptoms:</strong> NICE advises against treating gallstones found incidentally when the gallbladder and bile ducts are normal, unless symptoms appear. There are special circumstances a doctor will identify, and those exceptions should not be turned into a general recommendation to operate on every silent stone. <a href="https://www.nice.org.uk/guidance/cg188/chapter/recommendations" target="_blank" rel="noopener noreferrer">[1]</a></p>
<p><strong>Uncomplicated symptoms:</strong> some patients can discuss structured observation with their surgeon after complications have been ruled out, with a plan for pain, follow-up and urgent warning signs. This is a shared choice, not simply ignoring the stones. NICE still recommends offering laparoscopic cholecystectomy for stones that cause symptoms. <a href="https://www.nice.org.uk/guidance/cg188/chapter/recommendations" target="_blank" rel="noopener noreferrer">[1]</a></p>
<p>In the <strong>C-GALL</strong> randomised trial, which included <strong>434 adults</strong> with uncomplicated symptomatic gallstones, there was no difference in the primary measure of bodily pain and general quality of life over <strong>18 months</strong> between the observation strategy and the surgery strategy. About <strong>25% of the observation group</strong> had an operation during that period — meaning roughly three quarters did not have surgery at that point. But this is <strong>not a stone-dissolution rate and not a guarantee of cure or lifelong safety</strong>, and some gallbladder-specific symptom measures favoured the surgery group. Nor did every member of the surgery group actually have the operation during follow-up, so the result should not be read as a comparison of a completed operation against no operation in everyone. <a href="https://doi.org/10.1136/bmj-2023-075383" target="_blank" rel="noopener noreferrer">[2]</a></p>
<p>These results do not justify postponing treatment of duct blockage, inflammation, pancreatitis or an acute situation needing intervention; the decision to observe changes if attacks become repeated or more severe, or if complications appear.</p>
<p>The five-year follow-up of the <strong>SECURE</strong> trial, published in <strong>JAMA Surgery in 2024</strong>, adds that patient selection for surgery matters: it compared a more restrictive strategy for selecting surgery with usual care and <strong>did not compare surgery directly against no surgery</strong>. Operations were performed in 73.2% versus 81.5%, and freedom from pain was about 61.2% versus 62.8% among those who answered the pain questionnaire; the study did not statistically prove non-inferiority of the restrictive strategy, and pain responses were available for 716 of 1067 participants. These results support discussing the source of the pain and expectations — not a promise that postponing surgery is safe for everyone. <a href="https://pure.amsterdamumc.nl/ws/portalfiles/portal/156172927/Restrictive-strategy-vs-usual-care-for-cholecystectomy-in-patients-with-abdominal-pain-and-gallstones.pdf" target="_blank" rel="noopener noreferrer">[7]</a></p>

<h2>2. Ursodeoxycholic acid: dissolving only some stones</h2>
<p>Also called <strong>UDCA or ursodiol</strong>. It can dissolve some cholesterol-rich, non-calcified stones, especially small ones, in people a doctor selects carefully — for example those who are not suitable for surgery or who decline it after understanding the options. It does not dissolve pigment or calcified stones, and it is not a quick treatment or a suitable alternative in ongoing acute inflammation, duct blockage or cholangitis, or gallstone pancreatitis. <a href="https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=e47b49ca-bde9-448a-bf61-f943c2aa5b8e&amp;type=display" target="_blank" rel="noopener noreferrer">[3]</a></p>
<h3>What is the success rate of the medicine?</h3>
<ul>
<li><strong>About 30% complete dissolution:</strong> in the medicine's official label data, in patients with non-calcified stones smaller than 20 mm, after treatment that may last up to two years.</li>
<li><strong>81% in a very small stone category, up to 5 mm:</strong> a figure observed in the label data for a specific category — not an expected rate for every patient, and not evidence that the medicine is better than surgery. The label does not state the size of that category or a separate follow-up period for it.</li>
<li><strong>Stones may return in up to 50% within five years</strong> in those whose stones were successfully dissolved with bile-acid treatment; successful dissolution does not mean the tendency to form new stones has ended.</li>
</ul>
<p>These numbers come from the medicine's label studies and not from a recent trial comparing all the alternatives, and they cannot be transferred to large or calcified stones. Treatment takes months with imaging follow-up, and the dose or duration cannot be determined from this article. <a href="https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=e47b49ca-bde9-448a-bf61-f943c2aa5b8e&amp;type=display" target="_blank" rel="noopener noreferrer">[3]</a></p>
<p><strong>Why is the medicine not given to everyone?</strong> Guidelines separate the possibility of dissolving a stone in a selected patient from the value of using the medicine routinely to improve symptoms and prevent complications. EASL guidance does not recommend dissolving gallbladder stones with bile acids, alone or with lithotripsy, routinely, and the BNF notes that the evidence does not support ursodeoxycholic acid for treating gallstone disease in general. The dissolution figures in the label do not change these limits. <a href="https://doi.org/10.1016/j.jhep.2016.03.005" target="_blank" rel="noopener noreferrer">[4]</a> <a href="https://bnf.nice.org.uk/treatment-summaries/gallstones/" target="_blank" rel="noopener noreferrer">[5]</a></p>

<h2>3. Shockwave lithotripsy for gallbladder stones</h2>
<p>Breaking gallbladder stones with shockwaves from outside the body, <strong>ESWL</strong>, is not the usual treatment the way it can be for some kidney stones. It breaks the stone but does not remove the gallbladder or the reason the stones form, and fragments may remain or the stones may return. EASL does not recommend using it routinely with dissolution medicines for gallbladder stones. There is no single modern success rate that can be generalised; historical figures are affected by stone size and number and by patient selection, and breaking a stone does not equal its complete disappearance or the prevention of complications. <a href="https://doi.org/10.1016/j.jhep.2016.03.005" target="_blank" rel="noopener noreferrer">[4]</a></p>

<h2>4. ERCP: not a general alternative to gallbladder removal</h2>
<p>ERCP is used mainly to remove <strong>bile duct</strong> stones or treat duct blockage, not to remove the usual stones from inside the gallbladder. Specialised fragmentation tools may be used for difficult duct stones, and that is different from breaking gallbladder stones outside the body. NICE recommends clearing the duct and removing the gallbladder in people with duct stones, with the method and timing chosen according to the situation. The plan may be modified when a patient's surgical risk is very high. <a href="https://www.nice.org.uk/guidance/cg188/chapter/recommendations" target="_blank" rel="noopener noreferrer">[1]</a></p>
<p>Successfully removing a duct stone does not mean the gallbladder stones have been removed, and ERCP carries risks including pancreatitis, bleeding and infection; it is not performed just because stones are present in the gallbladder without a specific reason.</p>

<h2>5. Gallbladder drainage: for inflammation in selected high-risk patients</h2>
<p>A tube may be used to drain the gallbladder through the skin when a patient's health prevents surgery and conservative treatment fails to control a collection of pus in the gallbladder. The aim is to treat the inflammation and drain it — <strong>not to dissolve stones or to offer an optional alternative to every patient</strong>. NICE recommends re-evaluating gallbladder removal once the patient's condition allows. A specialist team may discuss endoscopic drainage options in suitable cases; the decision depends on the risks and the available expertise. <a href="https://www.nice.org.uk/guidance/cg188/chapter/recommendations" target="_blank" rel="noopener noreferrer">[1]</a></p>

<h2>6. Food, herbs and the "gallbladder cleanse"</h2>
<p>Avoiding foods that trigger your symptoms may reduce attacks, but it does not prove that stones dissolve. There is no need to eliminate fat completely or follow a harsh diet; choose a balanced diet and discuss a suitable plan with your doctor, and avoid rapid, unplanned weight loss. There is no reliable evidence that olive oil and lemon, mixtures and herbs, or a "gallbladder cleanse" remove stones safely. The clumps seen in the stool after these recipes are not evidence that stones came out; they may be products of the mixture itself. These recipes may cause vomiting, diarrhoea or pain and delay the evaluation you need. <a href="https://www.mayoclinic.org/diseases-conditions/gallstones/expert-answers/gallbladder-cleanse/faq-20058134" target="_blank" rel="noopener noreferrer">[6]</a></p>

<h2>How to compare success rates fairly</h2>
<p>Ask first: does the number mean the stone dissolved on imaging, or less pain, or avoiding an operation during a defined period, or preventing stones from returning? These are different outcomes. Comparing "81% dissolution for very small stones" with "75% had no operation within 18 months" as if they described the same cure is not valid. Equally, removing the gallbladder does not guarantee that every abdominal pain will disappear, nor does it completely prevent every future bile duct problem; retained stones may exist or duct stones may form, and pain may have another cause. That is why there is no honest general "gallstone treatment success rate" that applies to everyone.</p>

<h2>When surgery or urgent intervention matters more</h2>
<p>Intervention becomes more important when the colic repeats and affects your life, or when cholecystitis occurs, or the duct becomes blocked or infected, or gallstone-related pancreatitis develops. NICE recommends early surgery for acute cholecystitis when medically suitable; the type and timing of intervention in complex cases are decided by the treating team. <a href="https://www.nice.org.uk/guidance/cg188/chapter/recommendations" target="_blank" rel="noopener noreferrer">[1]</a></p>
<h3>Seek urgent assessment — and do not wait for a medicine or a recipe to work — if you have:</h3>
<ul><li>Severe or continuous pain in the upper abdomen lasting several hours, especially if it is getting worse.</li><li>Fever or shivering, or yellowing of the eyes or skin, or very dark urine.</li><li>Repeated vomiting or inability to drink fluids.</li><li>Severe pain spreading to the back, or severe dizziness, fainting or general deterioration.</li></ul>
<p>For chest pain or shortness of breath, seek emergency care as well; do not assume it is gallbladder pain.</p>

<h2>Useful questions to ask your doctor</h2>
<ul><li>Does the pain match biliary colic, or should another cause be looked for?</li><li>Are there stones in the duct, or signs of inflammation or blockage?</li><li>Is structured observation suitable for me, and what are the signs that the plan must change?</li><li>If dissolution medicine is discussed: are the type and size of my stones suitable, what is the follow-up plan, and how likely are the stones to return?</li><li>What are the risks of surgery and anaesthesia for my particular case, and what symptom improvement can be expected?</li></ul>
<p><strong>In summary:</strong> observation may be enough for silent stones and can suit some uncomplicated cases after discussion with the surgeon. Medical dissolution is a limited option, not routine treatment, and lithotripsy and popular recipes are not reliable equivalent alternatives. Duct endoscopy and drainage treat different problems in specific situations. The right decision balances your symptoms, your imaging and the risks of intervention — not a success rate taken out of context.</p>
<p>More reading: <a href="/guides/cholecystectomy?lang=en">Laparoscopic cholecystectomy guide: preparation and recovery</a>, <a href="/articles/9004?lang=en">What should you eat after gallbladder surgery?</a>, and <a href="/contact?lang=en">contact the clinic</a>.</p>

<h2>Medical sources and the limits of this review</h2>
<p>The review relied on the available guidance and the following sources, together with the C-GALL and SECURE trials, which are more recent than the cited NICE and EASL guidance. No newer comprehensive guidance replacing these two was found in the search; that does not guarantee every new medical publication has been captured. The age of a guideline does not automatically make all of its recommendations outdated, and a new study alone does not mean a guideline recommendation has changed. The figures are not a personal prediction, and the article needs the doctor's approval before wide publication.</p>
<ol>
<li><a href="https://www.nice.org.uk/guidance/cg188/chapter/recommendations" target="_blank" rel="noopener noreferrer">NICE CG188: Diagnosis and management of gallstone disease — recommendations.</a></li>
<li><a href="https://doi.org/10.1136/bmj-2023-075383" target="_blank" rel="noopener noreferrer">C-GALL, BMJ, 2023: randomised trial of observation versus surgery in uncomplicated symptomatic stones.</a></li>
<li><a href="https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=e47b49ca-bde9-448a-bf61-f943c2aa5b8e&amp;type=display" target="_blank" rel="noopener noreferrer">DailyMed: official ursodiol label — patient selection, dissolution, recurrence and contraindications.</a></li>
<li><a href="https://doi.org/10.1016/j.jhep.2016.03.005" target="_blank" rel="noopener noreferrer">EASL, 2016: prevention, diagnosis and treatment of gallstones.</a></li>
<li><a href="https://bnf.nice.org.uk/treatment-summaries/gallstones/" target="_blank" rel="noopener noreferrer">BNF: gallstone disease treatment summary.</a></li>
<li><a href="https://www.mayoclinic.org/diseases-conditions/gallstones/expert-answers/gallbladder-cleanse/faq-20058134" target="_blank" rel="noopener noreferrer">Mayo Clinic: is a "gallbladder cleanse" effective for gallstones?</a></li>
<li><a href="https://pure.amsterdamumc.nl/ws/portalfiles/portal/156172927/Restrictive-strategy-vs-usual-care-for-cholecystectomy-in-patients-with-abdominal-pain-and-gallstones.pdf" target="_blank" rel="noopener noreferrer">SECURE, JAMA Surgery, 2024: five-year follow-up of patient selection for cholecystectomy.</a></li>
</ol>`,
    },
  },
  9004: {
    en: {
      title: "What should you eat after gallbladder surgery? An eating guide for the first weeks",
      content: `
<p><em>General educational information, not a substitute for medical assessment. Your doctor's and treating team's instructions always come first.</em></p>
<h2>Do I need a special diet for life?</h2><p>No. After the gallbladder is removed, the liver still produces bile — but it flows directly into the intestine. Most patients return to normal eating within a few weeks, and the purpose of a gradual approach is to reduce temporary bloating and diarrhoea.</p>
<h2>Day one</h2><ul><li>Light fluids first, then light food as instructed by your treating team.</li><li>If you feel nauseous, take small repeated sips.</li></ul>
<h2>The first and second week</h2><ul><li>Small frequent meals instead of two large ones.</li><li>Choose: rice, bread, oats, grilled or boiled chicken and fish, boiled eggs, low-fat yoghurt, cooked vegetables, bananas and apples.</li><li>Reduce: fried foods, fast food, fatty meats, sauces and cream, heavy sweets, and very spicy food.</li><li>Drink enough water.</li></ul>
<h2>After that</h2><p>Add foods gradually, one at a time, and notice what causes you discomfort. Increasing fibre gradually helps if you have diarrhoea after fatty meals. If diarrhoea persists for more than a few weeks, see your doctor — there are treatments that help.</p>
<h2>Seek urgent care immediately if you have:</h2><ul><li>Yellowing of the eyes or skin, or very dark urine.</li><li>Severe, worsening abdominal pain, or fever with shivering.</li><li>Persistent vomiting that stops you from drinking fluids.</li></ul>
<p>More reading: <a href="/guides/cholecystectomy?lang=en">Laparoscopic cholecystectomy guide</a>.</p>`,
    },
    ur: {
      title: "پتّہ نکالنے کے آپریشن کے بعد کیا کھائیں؟ پہلے ہفتوں کے لیے خوراک کی رہنمائی",
      content: `
<p><em>عام معلوماتی تحریر، طبی معائنے کا متبادل نہیں۔ آپ کے ڈاکٹر اور معالج ٹیم کی ہدایات ہمیشہ مقدم ہیں۔</em></p>
<h2>کیا مجھے عمر بھر خاص خوراک کی ضرورت ہے؟</h2><p>نہیں۔ پتّہ نکالنے کے بعد بھی جگر صفرا بناتا رہتا ہے، مگر وہ سیدھا آنت میں جاتا ہے۔ زیادہ تر مریض چند ہفتوں میں معمول کی خوراک پر واپس آ جاتے ہیں، اور بتدریج خوراک کا مقصد عارضی اپھارہ اور دست کو کم کرنا ہے۔</p>
<h2>پہلا دن</h2><ul><li>معالج ٹیم کی ہدایت پر پہلے ہلکے مشروبات، پھر ہلکی خوراک۔</li><li>اگر متلی محسوس ہو تو تھوڑے تھوڑے گھونٹ بار بار لیں۔</li></ul>
<h2>پہلا اور دوسرا ہفتہ</h2><ul><li>دو بڑے کھانوں کی بجائے تھوڑے مگر بار بار کھائیں۔</li><li>چنیں: چاول، روٹی، جئی، گرل یا اُبلی مرغی اور مچھلی، اُبلے انڈے، کم چکنائی والا دہی، پکی سبزیاں، کیلا اور سیب۔</li><li>کم کریں: تلے ہوئے کھانے، فاسٹ فوڈ، چکنائی والا گوشت، چٹنیاں اور کریم، بھاری میٹھے، اور بہت تیز مصالحہ۔</li><li>کافی پانی پییں۔</li></ul>
<h2>اس کے بعد</h2><p>کھانے بتدریج ایک ایک کر کے شامل کریں اور نوٹ کریں کہ کس چیز سے تکلیف ہوتی ہے۔ چکنائی والے کھانے کے بعد دست ہو تو فائبر بتدریج بڑھانا مددگار ہے۔ اگر دست چند ہفتوں سے زیادہ رہے تو ڈاکٹر سے ملیں — کچھ علاج مدد کرتے ہیں۔</p>
<h2>فوراً ہنگامی طبی مدد کب لیں؟</h2><ul><li>آنکھوں یا جلد کا پیلا ہونا، یا بہت گہرا پیشاب۔</li><li>پیٹ میں شدید بڑھتا درد، یا بخار کے ساتھ کپکپی۔</li><li>مسلسل قے جس سے آپ سیال نہ پی سکیں۔</li></ul>
<p>مزید پڑھیں: <a href="/guides/cholecystectomy?lang=ur">لیپروسکوپک پتّہ نکالنے کی رہنمائی</a>۔</p>`,
    },
    hi: {
      title: "पित्ताशय की सर्जरी के बाद क्या खाएँ? पहले हफ़्तों के लिए खान-पान की मार्गदर्शिका",
      content: `
<p><em>सामान्य शैक्षिक जानकारी, चिकित्सकीय जाँच का विकल्प नहीं। आपके डॉक्टर और उपचार टीम के निर्देश हमेशा पहले।</em></p>
<h2>क्या मुझे जीवनभर विशेष आहार की ज़रूरत है?</h2><p>नहीं। पित्ताशय निकलने के बाद भी लिवर पित्त बनाता रहता है, पर वह सीधे आँत में जाता है। अधिकतर मरीज़ कुछ हफ़्तों में सामान्य भोजन पर लौट आते हैं, और धीरे-धीरे बदलाव का उद्देश्य अस्थायी पेट फूलना और दस्त कम करना है।</p>
<h2>पहला दिन</h2><ul><li>उपचार टीम के निर्देश पर पहले हल्के तरल, फिर हल्का भोजन।</li><li>उल्टी जैसा लगे तो छोटे-छोटे घूँट बार-बार लें।</li></ul>
<h2>पहला और दूसरा सप्ताह</h2><ul><li>दो बड़े भोजन की जगह छोटे-छोटे भोजन बार-बार।</li><li>चुनें: चावल, रोटी, जई, ग्रिल या उबली चिकन और मछली, उबले अंडे, कम वसा वाला दही, पकी सब्जियाँ, केला और सेब।</li><li>कम करें: तला भोजन, फ़ास्ट फ़ूड, वसायुक्त मांस, सॉस और क्रीम, भारी मिठाइयाँ, बहुत तेज़ मसालेदार खाना।</li><li>पर्याप्त पानी पिएँ।</li></ul>
<h2>इसके बाद</h2><p>भोजन धीरे-धीरे एक-एक कर जोड़ें और देखें किस चीज़ से तकलीफ़ होती है। वसायुक्त भोजन के बाद दस्त हो तो फ़ाइबर धीरे-धीरे बढ़ाना मदद करता है। दस्त कुछ हफ़्तों से अधिक रहे तो डॉक्टर से मिलें — कुछ उपचार मदद करते हैं।</p>
<h2>तुरंत आपातकालीन सहायता लें यदि आपको हो:</h2><ul><li>आँखों या त्वचा का पीला होना, या बहुत गाढ़ा पेशाब।</li><li>पेट में तेज़ बढ़ता दर्द, या ठंड लगकर बुखार।</li><li>लगातार उल्टी जिससे आप तरल न पी सकें।</li></ul>
<p>और पढ़ें: <a href="/guides/cholecystectomy?lang=hi">लैप्रोस्कोपिक पित्ताशय ऑपरेशन की मार्गदर्शिका</a>।</p>`,
    },
    bn: {
      title: "পিত্তথলির অস্ত্রোপচারের পরে কী খাবেন? প্রথম কয়েক সপ্তাহের খাদ্যনির্দেশিকা",
      content: `
<p><em>সাধারণ শিক্ষামূলক তথ্য, চিকিৎসা পরীক্ষার বিকল্প নয়। আপনার ডাক্তার ও চিকিৎসা দলের নির্দেশই সর্বদা অগ্রাধিকার।</em></p>
<h2>সারা জীবনের জন্য কি বিশেষ খাদ্য দরকার?</h2><p>না। পিত্তথলি অপসারণের পরও লিভার পিত্তরস তৈরি করে, তবে তা সরাসরি অন্ত্রে যায়। বেশিরভাগ রোগী কয়েক সপ্তাহে স্বাভাবিক খাবারে ফেরেন; ধীরে ধীরে অভ্যস্ত হওয়ার লক্ষ্য সাময়িক পেট ফাঁপা ও ডায়রিয়া কমানো।</p>
<h2>প্রথম দিন</h2><ul><li>চিকিৎসা দলের নির্দেশে প্রথমে হালকা তরল, তারপর হালকা খাবার।</li><li>বমি ভাব হলে অল্প অল্প চুমুক বারবার নিন।</li></ul>
<h2>প্রথম ও দ্বিতীয় সপ্তাহ</h2><ul><li>দুটি বড় খাবারের বদলে অল্প অল্প করে বারবার খান।</li><li>বেছে নিন: ভাত, রুটি, ওটস, গ্রিল বা সেদ্ধ মুরগি ও মাছ, সেদ্ধ ডিম, কম চর্বির দই, রান্না সবজি, কলা ও আপেল।</li><li>কমান: ভাজাপোড়া, ফাস্ট ফুড, চর্বিযুক্ত মাংস, সস ও ক্রিম, ভারী মিষ্টি, এবং খুব ঝাল খাবার।</li><li>পর্যাপ্ত পানি পান করুন।</li></ul>
<h2>এরপর</h2><p>খাবার ধীরে ধীরে এক এক করে যোগ করুন এবং দেখুন কোনটি অস্বস্তি দেয়। চর্বিযুক্ত খাবারের পরে ডায়রিয়া থাকলে আঁশ ধীরে ধীরে বাড়ানো সাহায্য করে। ডায়রিয়া কয়েক সপ্তাহের বেশি চললে ডাক্তারকে দেখান — কিছু চিকিৎসা সাহায্য করে।</p>
<h2>অবিলম্বে জরুরি চিকিৎসা নিন যদি থাকে:</h2><ul><li>চোখ বা ত্বক হলুদ হয়ে যাওয়া, বা প্রস্রাব খুব গাঢ় হওয়া।</li><li>পেটে তীব্র বাড়তে থাকা ব্যথা, বা কাঁপুনিসহ জ্বর।</li><li>ক্রমাগত বমি যাতে তরল পান করতে পারেন না।</li></ul>
<p>আরও পড়ুন: <a href="/guides/cholecystectomy?lang=bn">ল্যাপারোস্কোপিক পিত্তথলি অপারেশনের নির্দেশিকা</a>।</p>`,
    },
    tl: {
      title: "Ano ang dapat kainin pagkatapos ng operasyon sa apdo? Gabay sa pagkain sa unang mga linggo",
      content: `
<p><em>Pangkalahatang impormasyong pang-edukasyon, hindi kapalit ng medikal na pagsusuri. Ang payo ng doktor at pangkat medikal ang laging una.</em></p>
<h2>Kailangan ko ba ng espesyal na diyeta habang buhay?</h2><p>Hindi. Pagkatapos tanggalin ang apdo, patuloy pa ring gumagawa ng bile ang atay, ngunit dumadaloy ito nang diretso sa bituka. Karamihan ng pasyente ay bumabalik sa normal na pagkain sa loob ng ilang linggo, at ang unti-unting pagbabago ay para mabawasan ang pansamantalang kabag at pagtatae.</p>
<h2>Unang araw</h2><ul><li>Magaan na likido muna, pagkatapos magaan na pagkain ayon sa tagubilin ng pangkat.</li><li>Kung nasusuka, uminom ng maliliit na sips nang paulit-ulit.</li></ul>
<h2>Unang at ikalawang linggo</h2><ul><li>Maliliit ngunit madalas na pagkain sa halip na dalawang malaking kain.</li><li>Piliin: kanin, tinapay, oats, inihaw o nilagang manok at isda, nilagang itlog, low-fat yogurt, lutong gulay, saging at mansanas.</li><li>Bawasan: pritong pagkain, fast food, matabang karne, sarsa at cream, mabibigat na matamis, at sobrang maanghang.</li><li>Uminom ng sapat na tubig.</li></ul>
<h2>Pagkatapos</h2><p>Idagdag ang mga pagkain nang paisa-isa at pansinin kung ano ang sumasama ang loob mo. Nakakatulong ang unti-unting pagdagdag ng fiber kung may pagtatae pagkatapos ng matabang pagkain. Kung lumampas sa ilang linggo ang pagtatae, magpatingin sa doktor — may mga gamot na nakakatulong.</p>
<h2>Humingi agad ng emerhensiyang pangangalaga kung may:</h2><ul><li>Paninilaw ng mata o balat, o sobrang dilim na ihi.</li><li>Matinding lumalalang sakit ng tiyan, o lagnat na may panginginig.</li><li>Tuloy-tuloy na pagsusuka na hindi ka makainom ng likido.</li></ul>
<p>Basahin din: <a href="/guides/cholecystectomy?lang=tl">Gabay sa laparoscopic cholecystectomy</a>.</p>`,
    },
    ta: {
      title: "பித்தப்பை அறுவைச் சிகிச்சைக்குப் பிறகு எதைச் சாப்பிட வேண்டும்? முதல் வாரங்களுக்கான உணவு வழிகாட்டி",
      content: `
<p><em>இது பொது தகவல்; மருத்துவ பரிசோதனைக்கு மாற்று அல்ல. உங்கள் மருத்துவர் மற்றும் சிகிச்சைக் குழுவின் அறிவுரையே எப்போதும் முன்னுரிமை.</em></p>
<h2>வாழ்நாள் முழுவதும் சிறப்பு உணவு தேவையா?</h2><p>இல்லை. பித்தப்பை நீக்கப்பட்ட பிறகும் கல்லீரல் பித்தநீரைத் தயாரிக்கிறது, ஆனால் அது நேரடியாகக் குடலுக்குச் செல்கிறது. பெரும்பாலானோர் சில வாரங்களில் இயல்பான உணவுக்குத் திரும்புகிறார்கள்; படிப்படியான மாற்றத்தின் நோக்கம் தற்காலிக வயிற்று உப்புசம் மற்றும் வயிற்றுப்போக்கைக் குறைப்பது.</p>
<h2>முதல் நாள்</h2><ul><li>சிகிச்சைக் குழுவின் அறிவுரைப்படி முதலில் இலகுவான திரவங்கள், பிறகு இலகுவான உணவு.</li><li>குமட்டல் இருந்தால் சிறிய மிடறுகளாக அடிக்கடி குடியுங்கள்.</li></ul>
<h2>முதல் மற்றும் இரண்டாம் வாரம்</h2><ul><li>இரண்டு பெரிய உணவுகளுக்குப் பதிலாக சிறிய உணவுகளை அடிக்கடி எடுத்துக் கொள்ளுங்கள்.</li><li>தேர்வு செய்யுங்கள்: சாதம், ரொட்டி, ஓட்ஸ், கிரில் அல்லது வேகவைத்த கோழி மற்றும் மீன், வேகவைத்த முட்டை, குறைந்த கொழுப்பு தயிர், சமைத்த காய்கறிகள், வாழைப்பழம் மற்றும் ஆப்பிள்.</li><li>குறையுங்கள்: பொரித்த உணவு, துரித உணவு, கொழுப்புள்ள இறைச்சி, சாஸ் மற்றும் கிரீம், கனமான இனிப்புகள், மிகக் காரமான உணவு.</li><li>போதுமான தண்ணீர் குடியுங்கள்.</li></ul>
<h2>அதன் பிறகு</h2><p>உணவுகளை படிப்படியாக ஒவ்வொன்றாகச் சேர்த்து, எது அசௌகரியம் தருகிறது என்பதைக் கவனியுங்கள். கொழுப்பு உணவுக்குப் பின் வயிற்றுப்போக்கு இருந்தால் நார்ச்சத்தை படிப்படியாக அதிகரிப்பது உதவும். வயிற்றுப்போக்கு சில வாரங்களுக்கு மேல் நீடித்தால் மருத்துவரைப் பாருங்கள் — சில சிகிச்சைகள் உதவுகின்றன.</p>
<h2>உடனடியாக அவசர சிகிச்சை பெறுங்கள்:</h2><ul><li>கண் அல்லது தோல் மஞ்சளாதல், அல்லது மிகக் கருத்த சிறுநீர்.</li><li>வயிற்றில் கடுமையான அதிகரிக்கும் வலி, அல்லது குளிருடன் காய்ச்சல்.</li><li>திரவம் குடிக்க முடியாத தொடர் வாந்தி.</li></ul>
<p>மேலும் படிக்க: <a href="/guides/cholecystectomy?lang=ta">லேபரோஸ்கோப்பிக் பித்தப்பை அறுவைச் சிகிச்சை வழிகாட்டி</a>.</p>`,
    },
  },
};

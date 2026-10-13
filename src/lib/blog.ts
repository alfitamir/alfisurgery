import { blogArticles } from "@/data/blog-articles";
import image0 from "@/assets/blog/image-0.jpg.asset.json";
import image1 from "@/assets/blog/image-1.jpg.asset.json";
import image2 from "@/assets/blog/image-2.jpg.asset.json";
import image3 from "@/assets/blog/image-3.gif.asset.json";

const importedImages: Record<string, string> = {
  "https://tkmem.wordpress.com/wp-content/uploads/2019/01/download-6.jpg": image0.url,
  "https://tkmem.wordpress.com/wp-content/uploads/2019/08/dr_tamer_elalfy_social_media_links.png": image1.url,
  "https://tkmem.wordpress.com/wp-content/uploads/2019/08/snapchat-901284407.jpg": image2.url,
  "https://tkmem.wordpress.com/wp-content/uploads/2020/07/8b44541a-e898-4738-91ef-2e3639771048-5079-0000025939033df2.gif?w=685": image3.url,
};

export function articleText(html: string) {
  return html.replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#8217;/g, "’").replace(/\s+/g, " ").trim();
}

export function articleBody(html: string) {
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    const src = tag.match(/\bsrc="([^"]+)"/)?.[1];
    const local = src ? importedImages[src] : undefined;
    if (!local) return tag;
    return tag.replace(/\s(?:srcset|sizes|style|data-[\w-]+)="[^"]*"/g, "").replace(/\bsrc="[^"]*"/, `src="${local}"`);
  });
}

export function articleCategory(title: string) {
  if (/مرار/.test(title)) return "المرارة والجراحة";
  if (/وزن|ثبات|الثبات|بروتين|غذائي|تأكل|السمنه|السمنة/.test(title)) return "التغذية والوزن";
  return "التكميم والمتابعة";
}

export const articlePreviews = blogArticles.map((article) => ({
  ...article,
  language: "ar" as const,
  excerpt: articleText(article.content).slice(0, 160),
  category: articleCategory(article.title),
}));

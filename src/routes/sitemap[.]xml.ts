import { createFileRoute } from "@tanstack/react-router";
import { patientEducation } from "@/data/patient-education";
import { articlesForLanguage } from "@/lib/blog";
import { siteLanguages } from "@/lib/site-language";

const BASE_URL = "https://alfisurgery.com";
const pages = ["/", "/profile", "/patients", "/prevention", "/posts", "/articles", "/research", "/publications", "/teaching", "/updates", "/contact", "/patient-education/hidradenitis-suppurativa", "/patient-education/weight-plateau-after-sleeve"];
const arabicOnly = ["/ar", "/ar/patients", "/ar/medical-questions"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = new Set<string>(arabicOnly);
        const guides = patientEducation.map((g) => `/guides/${g.id}`);
        for (const lang of siteLanguages) {
          const q = lang.code === "en" ? "" : `?lang=${lang.code}`;
          for (const p of [...pages, ...guides]) urls.add(p + q);
          for (const a of articlesForLanguage(lang.code)) urls.add(`/articles/${a.id}${q}`);
        }
        const esc = (s: string) => s.replace(/&/g, "&amp;");
        const body = [...urls].map((u) => `<url><loc>${esc(BASE_URL + u)}</loc></url>`).join("");
        return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});

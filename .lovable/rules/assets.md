---
description: "Brand assets shipped by the Alfi Surgery design system (logos, icons, illustrations, photography, fonts, videos) with exact import paths. Read before adding any logo, icon, illustration, image, video, or font to the app: use these real assets instead of placeholders, stock photos, or generated images."
---

# Alfi Surgery — Assets

These files are copied into `src/design-system/{slug}/assets/` in this project — never generate, placeholder, or substitute an asset that exists here.

Raw files import directly, e.g. `import logo from "@/design-system/{slug}/assets/logos/logo.svg"`.
R2 pointer files (`.asset.json`) are imported as JSON — use the `url` property, e.g. `import hero from "@/design-system/{slug}/assets/hero.png.asset.json"` then `<img src={hero.url} />`.
The full machine-readable catalog lives in this library's `design-system.json` (`assets` array).

## Images

- `@/design-system/{slug}/assets/blog/image-0.jpg.asset.json` (jpg, R2 pointer)
- `@/design-system/{slug}/assets/blog/image-1.jpg.asset.json` (jpg, R2 pointer)
- `@/design-system/{slug}/assets/blog/image-2.jpg.asset.json` (jpg, R2 pointer)
- `@/design-system/{slug}/assets/blog/image-3.gif.asset.json` (gif, R2 pointer)
- `@/design-system/{slug}/assets/dr-elalfy-hero.jpg` (jpg)
- `@/design-system/{slug}/assets/dr-elalfy-hero.webp` (webp)
- `@/design-system/{slug}/assets/dr-elalfy-main.jpg.asset.json` (jpg, R2 pointer)
- `@/design-system/{slug}/assets/dr-elalfy-main.webp` (webp)
- `@/design-system/{slug}/assets/dr-elalfy.jpg` (jpg)
- `@/design-system/{slug}/assets/patient-education/category-abdominal.jpg` (jpg)
- `@/design-system/{slug}/assets/patient-education/category-anorectal.jpg` (jpg)
- `@/design-system/{slug}/assets/patient-education/category-breast.jpg` (jpg)
- `@/design-system/{slug}/assets/patient-education/category-endocrine.jpg` (jpg)
- `@/design-system/{slug}/assets/patient-education/category-hernia.jpg` (jpg)
- `@/design-system/{slug}/assets/patient-education/category-minor.jpg` (jpg)
- `@/design-system/{slug}/assets/patient-education/category-pediatric.jpg` (jpg)
- `@/design-system/{slug}/assets/patient-journey-hero.jpg` (jpg)
- `@/design-system/{slug}/assets/patient-journey-hero.webp` (webp)
- `@/design-system/{slug}/assets/patient-journey-prepare.jpg` (jpg)
- `@/design-system/{slug}/assets/patient-journey-prepare.webp` (webp)
- `@/design-system/{slug}/assets/patient-journey-recover.jpg` (jpg)
- `@/design-system/{slug}/assets/patient-journey-recover.webp` (webp)
- `@/design-system/{slug}/assets/sections/beyond.jpg` (jpg)
- `@/design-system/{slug}/assets/sections/contact.jpg` (jpg)
- `@/design-system/{slug}/assets/sections/education.jpg` (jpg)
- `@/design-system/{slug}/assets/sections/education.webp` (webp)
- `@/design-system/{slug}/assets/sections/experience.jpg` (jpg)
- `@/design-system/{slug}/assets/sections/expertise.jpg` (jpg)
- `@/design-system/{slug}/assets/sections/orcid.jpg` (jpg)
- `@/design-system/{slug}/assets/sections/presentations.jpg` (jpg)
- `@/design-system/{slug}/assets/sections/research.jpg` (jpg)
- `@/design-system/{slug}/assets/sections/services.jpg` (jpg)
- `@/design-system/{slug}/assets/sections/services.webp` (webp)
- `@/design-system/{slug}/assets/sections/teaching.jpg` (jpg)
- `@/design-system/{slug}/assets/sections/updates.jpg` (jpg)
- `@/design-system/{slug}/assets/sections/videos.jpg` (jpg)
- `@/design-system/{slug}/assets/sections/videos.webp` (webp)
- `@/design-system/{slug}/assets/sections/web.jpg` (jpg)
- `@/design-system/{slug}/assets/sleeve-plateau-guide.jpg` (jpg)
- `@/design-system/{slug}/assets/sleeve-plateau-guide.webp` (webp)
- `@/design-system/{slug}/assets/sleeve-plateau-habits.jpg` (jpg)
- `@/design-system/{slug}/assets/sleeve-plateau-habits.webp` (webp)


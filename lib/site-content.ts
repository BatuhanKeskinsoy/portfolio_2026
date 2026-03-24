export type ProjectItem = {
  title: string;
  summary: string;
  stack: string[];
  href: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export const profile = {
  name: "Batuhan Keskinsoy",
  title: "Senior Frontend Developer",
  location: "Türkiye",
  email: "hello@batuhankeskinsoy.com",
  website: "https://batuhankeskinsoy.com",
  shortBio:
    "Performans, tasarım sistemi ve ölçeklenebilir mimari odaklı, modern web ürünleri geliştiren frontend mühendisi.",
};

export const expertise = [
  "Next.js App Router",
  "React ve TypeScript",
  "SSR/SSG ve SEO",
  "Design systems",
  "Web performansı (Core Web Vitals)",
  "Clean architecture",
];

export const projects: ProjectItem[] = [
  {
    title: "Portfolio 2026",
    summary:
      "Server-first yaklaşımla geliştirilmiş, sade ve premium hissiyatlı kişisel portfolio deneyimi.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://batuhankeskinsoy.com",
  },
  {
    title: "Commerce Frontend Platform",
    summary:
      "Yüksek trafikli vitrin ve checkout akışlarını performans odaklı optimize eden frontend altyapı çalışmaları.",
    stack: ["Next.js", "React", "SSR", "Performance"],
    href: "https://batuhankeskinsoy.com",
  },
  {
    title: "Component System",
    summary:
      "Ürün ekiplerinin hızlı teslimat yapabilmesi için yeniden kullanılabilir UI ve token tabanlı stil sistemi.",
    stack: ["TypeScript", "UI Architecture", "Accessibility"],
    href: "https://batuhankeskinsoy.com",
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Senior Frontend Developer",
    company: "Freelance / Product Teams",
    period: "2022 - Present",
    summary:
      "Kurumsal ve ürün odaklı projelerde performans, SEO ve ölçeklenebilir frontend mimarisi geliştirme.",
  },
  {
    role: "Frontend Developer",
    company: "Digital Agencies",
    period: "2019 - 2022",
    summary:
      "Tasarımdan geliştirmeye uzanan süreçte modern arayüzler, responsive deneyimler ve reusable component yapıları.",
  },
];

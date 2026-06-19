export interface WorkItem {
  name: string;
  href: string;
  description?: string;
  tags: string[];
  year?: string;
}

export const landingPages: WorkItem[] = [
  {
    name: "Novaidea",
    href: "https://novaidea.it/",
    year: "2023",
    description:
      "The first site I ever shipped to production. Built it with PHP and a custom MySQL CMS so the team could update their own content. I remember being terrified when it went live, but it's still running today.",
    tags: [],
  },
  {
    name: "New Art Vanguard",
    href: "https://newartvanguard.com/",
    year: "2023",
    description:
      "Pure HTML, CSS, and vanilla JS: no React, no framework, just the basics. I made this before I really understood what React was for. Looking back, it's kinda cool what you can do with just the fundamentals.",
    tags: [],
  },
  {
    name: "Abert Pop",
    href: "https://abert.it/pop/?lang=eng",
    year: "2024",
    description:
      "A product showcase for Abert's Pop collection. I built a JSON-based CMS that handles translations, so the marketing team can switch between Italian and English without asking me to change any code.",
    tags: [],
  },
];

export const configurators: WorkItem[] = [
  {
    name: "Abert Lighting",
    href: "https://tool.abert.it/lighting/?lang=eng",
    year: "2024",
    tags: [],
  },
  {
    name: "Abert Logo",
    href: "https://tool.abert.it/logo/?lang=eng",
    year: "2024",
    tags: [],
  },
  {
    name: "Abert Industrial",
    href: "https://tool.abert.it/industrial/?lang=eng",
    year: "2025",
    tags: [],
  },
  {
    name: "Broggi Foscari",
    href: "https://tool.broggi.it/foscari/?lang=eng",
    year: "2025",
    tags: [],
  },
  {
    name: "Broggi Living",
    href: "https://tool.broggi.it/living/?lang=eng",
    year: "2025",
    tags: [],
  },
];

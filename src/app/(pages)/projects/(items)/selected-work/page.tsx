import VerticalReveal from "@/components/animations/vertical-reveal";
import P from "@/components/ui/typography/p";
import {CustomLink} from "@/components/ui/typography/link";
import ProjectHeader from "@/components/projects/project-header";
import {getProjectById} from "@/data/projects";
import WorkItemCard, {IWorkItem} from "@/components/ui/work-item-card";
import H3 from "@/components/ui/typography/h3";

export const metadata = {
  title: "Selected Work | Mattia Cerutti",
  description: "Landing pages and product configurators I've built for clients. Real stuff that's actually live and being used.",
  openGraph: {
    title: "Selected Work | Mattia Cerutti",
    description: "Landing pages and product configurators I've built for clients. Real stuff that's actually live and being used.",
    url: "https://mattiacerutti.com/projects/selected-work/",
    siteName: "Mattia Cerutti Portfolio",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work | Mattia Cerutti",
    description: "Landing pages and product configurators I've built for clients. Real stuff that's actually live and being used.",
  },
};

const landingPages: IWorkItem[] = [
  {
    name: "Novaidea",
    href: "https://novaidea.it/",
    client: "Novaidea",
    year: "2023",
    description:
      "The first site I ever shipped to production. Built it with PHP and a custom MySQL CMS so the team could update their own content. I remember being terrified when it went live, but it's still running today.",
    tags: [],
  },
  {
    name: "New Art Vanguard",
    href: "https://newartvanguard.com/",
    client: "Novaidea",
    year: "2023",
    description:
      "Pure HTML, CSS, and vanilla JS — no React, no framework, just the basics. I made this before I really understood what React was for. Looking back, it's kinda cool what you can do with just the fundamentals.",
    tags: [],
  },
  {
    name: "Abert Pop",
    href: "https://abert.it/pop/?lang=eng",
    client: "Abert",
    year: "2024",
    description:
      "A product showcase for Abert's Pop collection. I built a JSON-based CMS that handles translations, so the marketing team can switch between Italian and English without asking me to change any code.",
    tags: [],
  },
];

const configurators: IWorkItem[] = [
  {
    name: "Abert Lighting",
    href: "https://tool.abert.it/lighting/?lang=eng",
    client: "Abert",
    year: "2024",
    description: "",
    tags: [],
  },
  {
    name: "Abert Logo",
    href: "https://tool.abert.it/logo/?lang=eng",
    client: "Abert",
    year: "2024",
    description: "",
    tags: [],
  },
  {
    name: "Abert Industrial",
    href: "https://tool.abert.it/industrial/?lang=eng",
    client: "Abert",
    year: "2025",
    description: "",
    tags: [],
  },
  {
    name: "Broggi Foscari",
    href: "https://tool.broggi.it/foscari/?lang=eng",
    client: "Broggi",
    year: "2025",
    description: "",
    tags: [],
  },
  {
    name: "Broggi Living",
    href: "https://tool.broggi.it/living/?lang=eng",
    client: "Broggi",
    year: "2025",
    description: "",
    tags: [],
  },
];

function Page() {
  const baseDelay = 0.15;
  const project = getProjectById("selected-work");

  return (
    <div className="flex flex-col gap-10">
      <ProjectHeader project={project} />

      <VerticalReveal delay={baseDelay}>
        <div className="flex flex-col gap-4">
          <P>
            I started working with{" "}
            <CustomLink href="https://novaidea.it/" target="_blank" underline>
              Novaidea
            </CustomLink>{" "}
            when I was 18, during high school. Since then I've built everything from simple landing pages to complex product configurators for clients like <i>Abert</i> and{" "}
            <i>Broggi</i> — both big names in the Italian tableware world.
          </P>
          <P>
            Everything uses <b>GSAP</b> and <b>LocomotiveScroll</b> for animations, <b>Tailwind</b> for styling, and a custom JSON-based <b>multi-language CMS</b> I built so
            clients can manage their own content without bothering me every time they need a text change.
          </P>
        </div>
      </VerticalReveal>

      <VerticalReveal delay={baseDelay * 2}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <H3>Landing Pages</H3>
            <P className="text-sm text-(--muted-foreground)">Simple sites that showcase brands and actually convert visitors into customers.</P>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {landingPages.map((item) => (
              <WorkItemCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </VerticalReveal>

      <VerticalReveal delay={baseDelay * 3}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <H3>Product Configurators</H3>
            <P className="text-sm text-(--muted-foreground)">
              Interactive tools where customers mix and match products in real-time. The CMS manages hundreds of combinations behind the scenes, way more complex than it looks on
              the surface.
            </P>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {configurators.map((item) => (
              <WorkItemCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </VerticalReveal>
    </div>
  );
}

export default Page;

import VerticalReveal from "@/components/animations/vertical-reveal";
import H3 from "@/components/typography/h3";
import P from "@/components/typography/p";
import WorkExperience from "@/components/work/work-experience";
import {WORK_EXPERIENCES} from "@/data/work";
import Hero from "@/sections/hero";
import {CustomLink} from "@/components/typography/link";
import {PROJECTS} from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";

export const metadata = {
  title: "Mattia Cerutti - Software Engineer",
  description: "Software Engineer with 4+ years of experience, building cool stuff and sharing my work.",
  keywords: ["Mattia Cerutti", "Web Developer", "Portfolio", "Fullstack Developer"],
  openGraph: {
    title: "Mattia Cerutti - Software Engineer",
    description: "Software Engineer with 4+ years of experience, building cool stuff and sharing my work.",
    url: "https://mattiacerutti.com/",
    siteName: "Mattia Cerutti Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mattia Cerutti - Software Engineer",
    description: "Software Engineer with 4+ years of experience, building cool stuff and sharing my work.",
  },
};

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <div className="mt-8 flex w-full justify-center px-6">
        <div className="flex w-4xl flex-col gap-20">
          <div className="flex flex-col gap-8">
            <VerticalReveal trigger="scroll" startY={50} duration={2}>
              <H3>Projects</H3>
              <P className="text-[var(--muted-foreground)]">
                Stuff i&apos;ve been doing lately.&nbsp;
                <CustomLink href="/projects" className="underline decoration-[var(--muted-foreground)]/30">
                  Click here
                </CustomLink>
                &nbsp;for the full list.
              </P>
            </VerticalReveal>
            <div className="grid [grid-auto-rows:1fr] grid-cols-1 gap-10 sm:grid-cols-2">
              {PROJECTS.map(
                (project, index) =>
                  project.relevant && (
                    <VerticalReveal key={index} trigger="scroll" className="h-full w-full" startY={50} duration={2}>
                      <ProjectCard project={project} hideTechStack />
                    </VerticalReveal>
                  )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <VerticalReveal trigger="scroll" startY={50} duration={2}>
              <H3>Work</H3>
              <P className="text-[var(--muted-foreground)]">
                My most relevant work experiences.&nbsp;
                <CustomLink href="/work" className="underline decoration-[var(--muted-foreground)]/30">
                  Click here
                </CustomLink>
                &nbsp;for the full list.
              </P>
            </VerticalReveal>
            <div className="flex flex-col gap-10">
              {WORK_EXPERIENCES.map(
                (experience, index) =>
                  experience.relevant && (
                    <VerticalReveal key={index} trigger="scroll" className="w-full" startY={50} duration={2}>
                      <WorkExperience experience={experience} />
                    </VerticalReveal>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

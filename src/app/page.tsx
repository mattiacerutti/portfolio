import VerticalReveal from "@/components/animations/vertical-reveal";
import H3 from "@/components/ui/typography/h3";
import P from "@/components/ui/typography/p";
import WorkTimeline from "@/components/work/work-timeline";
import {WORK_EXPERIENCES} from "@/data/work";
import Hero from "@/sections/hero";
import {CustomLink} from "@/components/ui/typography/link";
import {PROJECTS} from "@/data/projects";
import ProjectCard from "@/components/projects/project-card";
import {HiOutlineArrowRight} from "react-icons/hi";

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
  const relevantExperiences = WORK_EXPERIENCES.filter((experience) => experience.relevant);

  return (
    <div className="flex w-full flex-col">
      <Hero />
      <div className="mt-8 flex w-full justify-center px-6">
        <div className="flex w-4xl flex-col gap-20">
          <div className="flex flex-col gap-8">
            <VerticalReveal trigger="scroll" startY={50} duration={2}>
              <div className="flex flex-row items-center justify-between">
                <H3>Projects</H3>
                <CustomLink href="/projects/" className="group relative flex items-center underline decoration-[var(--muted-foreground)]/30">
                  <P className="transition-transform duration-300 group-hover:-translate-x-6">All projects</P>
                  <HiOutlineArrowRight className="absolute -right-6 h-4 w-4 opacity-0 transition-all duration-300 group-hover:right-0 group-hover:opacity-100" />
                </CustomLink>
              </div>
              <P className="text-[var(--muted-foreground)]">Stuff i&apos;ve been doing lately.&nbsp;</P>
            </VerticalReveal>
            <div className="grid [grid-auto-rows:1fr] grid-cols-1 gap-4 sm:grid-cols-2">
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
              <div className="flex flex-row items-center justify-between">
                <H3>Work</H3>
                <CustomLink href="/work/" className="group relative flex items-center underline decoration-[var(--muted-foreground)]/30">
                  <P className="transition-transform duration-300 group-hover:-translate-x-6">All experiences</P>
                  <HiOutlineArrowRight className="absolute -right-6 h-4 w-4 opacity-0 transition-all duration-300 group-hover:right-0 group-hover:opacity-100" />
                </CustomLink>
              </div>
              <P className="text-[var(--muted-foreground)]">My most relevant work experiences.&nbsp;</P>
            </VerticalReveal>
            <WorkTimeline experiences={relevantExperiences} trigger="scroll" startY={50} duration={2} />
          </div>
        </div>
      </div>
    </div>
  );
}

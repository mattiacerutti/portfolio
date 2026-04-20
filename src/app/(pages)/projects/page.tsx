import React from "react";
import H3 from "@/components/ui/typography/h3";
import VerticalReveal from "@/components/animations/vertical-reveal";
import P from "@/components/ui/typography/p";
import ProjectCard from "@/components/projects/project-card";
import {PROJECTS} from "@/data/projects";
import {createPageMetadata} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projects",
  description: "Things I've been working on lately.",
  pathname: "/projects",
});

export default function Projects() {
  const baseDelay = 0.15;

  return (
    <div className="flex flex-col gap-8">
      <VerticalReveal>
        <H3>Projects</H3>
        <P className="text-[var(--muted-foreground)]">All my projects.</P>
      </VerticalReveal>
      <div className="flex flex-col gap-15">
        <div className="flex flex-col gap-4">
          {PROJECTS.filter((project) => project.relevant).map((project, idx) => (
            <VerticalReveal key={project.id} delay={baseDelay * (idx + 1)} className="w-full">
              <ProjectCard project={project} relevant />
            </VerticalReveal>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {PROJECTS.filter((project) => !project.relevant).map((project, idx) => (
            <VerticalReveal key={project.id} delay={baseDelay * (idx + 1)} className="w-full">
              <ProjectCard project={project} />
            </VerticalReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import H3 from "@/components/typography/h3";
import VerticalReveal from "@/components/animations/vertical-reveal";
import P from "@/components/typography/p";
import ProjectCard from "@/components/projects/project-card";

export default function Projects() {
  const baseDelay = 0.15;

  return (
    <div className="flex flex-col gap-15">
      <VerticalReveal>
        <H3>Projects</H3>
        <P className="text-[var(--muted-foreground)]">All my projects.</P>
      </VerticalReveal>
      <div className="flex flex-col gap-10">
        <VerticalReveal delay={baseDelay * 1} className="w-full">
          <ProjectCard id={"code-typer"} title={"Code Typer"} description={"A typing game to improve your coding skills."} technologies={["TypeScript", "React"]} />
        </VerticalReveal>
      </div>
    </div>
  );
}

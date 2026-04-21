import H3 from "@/components/ui/typography/h3";
import VerticalReveal from "@/components/animations/vertical-reveal";
import P from "@/components/ui/typography/p";
import ProjectCard from "@/features/projects/components/project-card";
import AnimatedBorder from "@/components/animations/animated-border";
import {PROJECTS} from "@/features/projects/data/projects";

export default function ProjectsPage() {
  const baseDelay = 0.15;

  return (
    <div className="flex flex-col gap-12">
      <div>
        <H3>Projects</H3>
        <P className="text-(--muted-foreground)">A collection of things I&apos;ve shipped.</P>
      </div>

      <AnimatedBorder className="ml-0 flex flex-col gap-10 sm:ml-4" lineClassName="bg-(--button-border)">
        {PROJECTS.map((project, idx) => (
          <VerticalReveal key={project.id} trigger="instant" delay={baseDelay * idx} duration={1.5} className="block pl-6 sm:pl-8">
            <ProjectCard project={project} />
          </VerticalReveal>
        ))}
      </AnimatedBorder>
    </div>
  );
}

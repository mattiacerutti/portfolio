import { CustomLink } from "@/components/typography/link";
import React from "react";
import H4 from "../typography/h4";
import P from "../typography/p";
import TechCard from "../tech-card";
import {IProject} from "@/data/projects";

interface IProjectCardProps {
  project: IProject;
}

function ProjectCard(props: IProjectCardProps) {
  const {project} = props;
  const {id, title, description, technologies} = project;

  return (
  <CustomLink href={`/projects/${id}`} className="cursor-pointer">
      <div className="p-4 rounded-xl border-[0.08rem] border-[var(--foreground)]/10 bg-[var(--foreground)]/1 hover:bg-[var(--foreground)]/4 transition-colors duration-400">
        <H4 className="text-[var(--foreground)]">{title}</H4>
        <P className="text-[var(--muted-foreground)] font-extralight">{description}</P>
        {technologies && (
          <div className="flex flex-wrap mt-5 gap-2">
            {technologies.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        )}
      </div>
  </CustomLink>
  );
}

export default ProjectCard;

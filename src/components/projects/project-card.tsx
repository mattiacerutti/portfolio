import {CustomLink} from "@/components/typography/link";
import React from "react";
import H4 from "../typography/h4";
import P from "../typography/p";
import TechCard from "../ui/tech-card";
import {IProject} from "@/data/projects";
import Button from "../ui/button";
import {LuPin} from "react-icons/lu";

interface IProjectCardProps {
  project: IProject;
  hideTechStack?: boolean;
  relevant?: boolean;
}

function ProjectCard(props: IProjectCardProps) {
  const {project, hideTechStack = false, relevant = false} = props;
  const {id, title, description, technologies} = project;

  return (
    <CustomLink href={`/projects/${id}`} className="cursor-pointer">
      <Button className="relative flex h-full flex-col items-start gap-1 !rounded-xl p-4">
        {relevant && <LuPin className="absolute top-4 right-4 h-4 w-4 text-[var(--muted-foreground)]" title="This project has been pinned" />}
        <H4 className="text-[var(--foreground)]">{title}</H4>
        <P className="!text-sm text-[var(--muted-foreground)] sm:!text-base">{description}</P>
        {!hideTechStack && technologies && (
          <div className="mt-5 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <TechCard key={index} name={tech} />
            ))}
          </div>
        )}
      </Button>
    </CustomLink>
  );
}

export default ProjectCard;

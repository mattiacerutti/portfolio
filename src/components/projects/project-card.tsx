import {CustomLink} from "@/components/typography/link";
import React from "react";
import H4 from "../typography/h4";
import P from "../typography/p";
import TechCard from "../ui/tech-card";
import {IProject} from "@/data/projects";
import Button from "../ui/button";

interface IProjectCardProps {
  project: IProject;
}

function ProjectCard(props: IProjectCardProps) {
  const {project} = props;
  const {id, title, description, technologies} = project;

  return (
    <CustomLink href={`/projects/${id}`} className="cursor-pointer">
      <Button className="flex flex-col items-start !rounded-xl p-4">
        <H4 className="text-[var(--foreground)]">{title}</H4>
        <P className="font-extralight text-[var(--muted-foreground)]">{description}</P>
        {technologies && (
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

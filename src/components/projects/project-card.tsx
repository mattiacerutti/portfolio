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
      <Button className="flex flex-col items-start p-4 !rounded-xl">
        <H4 className="text-[var(--foreground)]">{title}</H4>
        <P className="text-[var(--muted-foreground)] font-extralight">{description}</P>
        {technologies && (
          <div className="flex flex-wrap mt-5 gap-2">
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

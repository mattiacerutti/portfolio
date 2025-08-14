import Link from "next/link";
import React from "react";
import H4 from "../typography/h4";
import P from "../typography/p";

interface IProjectCardProps {
  id: string;
  title: string;
  description: string;
  technologies: string[];
}

function ProjectCard(props: IProjectCardProps) {
  const {id, title, description, technologies} = props;

  return (
    <Link href={`/projects/${id}`} className="cursor-pointer">
      <div className="p-4 rounded-xl border-[0.08rem] border-[var(--foreground)]/10 bg-[var(--foreground)]/1 hover:bg-[var(--foreground)]/4 transition-colors duration-400">
        <H4>{title}</H4>
        <P className="text-[var(--muted-foreground)] font-extralight">{description}</P>
        {technologies && (
          <div className="flex flex-wrap gap-2 mt-5">
            {technologies.map((tech, index) => (
              <div key={index} className="rounded-md bg-[var(--foreground)]/4 border border-[var(--foreground)]/20 px-2 py-1">
                {tech}
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default ProjectCard;

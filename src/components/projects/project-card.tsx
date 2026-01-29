import {CustomLink} from "@/components/typography/link";
import React from "react";
import H4 from "../typography/h4";
import P from "../typography/p";
import TechCard from "../ui/tech-card";
import {IProject} from "@/data/projects";
import Button from "../ui/button";
import {LuPin} from "react-icons/lu";
import {HiOutlineArrowRight} from "react-icons/hi";

interface IProjectCardProps {
  project: IProject;
  hideTechStack?: boolean;
  relevant?: boolean;
}

function ProjectCard(props: IProjectCardProps) {
  const {project, hideTechStack = false, relevant = false} = props;
  const {id, title, description, technologies} = project;

  return (
    <CustomLink href={`/projects/${id}/`} className="group cursor-pointer">
      <Button className="relative flex h-full flex-col items-start gap-4 overflow-hidden !rounded-2xl p-5 transition-transform duration-300 group-hover:-translate-y-0.5">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-[var(--button-hover-bg)] opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-30" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--button-border)] to-transparent opacity-70" />
        </div>
        {relevant && <LuPin className="absolute top-5 right-5 h-4 w-4 text-[var(--muted-foreground)]" title="This project has been pinned" />}
        <div className="flex flex-col gap-2">
          <H4 className="text-[var(--foreground)]">{title}</H4>

          <div className="relative z-10 h-px w-10 bg-[var(--button-border)] transition-all duration-300 group-hover:w-16" />
          {!hideTechStack && technologies && (
            <div className="relative z-10 mt-1 w-full rounded-xl">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <TechCard key={index} name={tech} />
                ))}
              </div>
            </div>
          )}
        </div>
        <P className="relative z-10 !text-sm text-[var(--muted-foreground)] sm:!text-base">{description}</P>

        <div className="tracking-[0.16e relative z-10 mt-3 flex items-center gap-2 text-xs font-semibold tracking-widest text-[var(--muted-foreground)] uppercase transition-colors duration-300 group-hover:text-[var(--foreground)]">
          <span>View project</span>
          <HiOutlineArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Button>
    </CustomLink>
  );
}

export default ProjectCard;

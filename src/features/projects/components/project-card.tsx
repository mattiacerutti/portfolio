"use client";

import {IProject} from "@/features/projects/data/projects";
import TechCard from "@/features/shared/components/tech-card";
import {CustomLink} from "@/components/ui/typography/link";
import {ViewTransition} from "react";
import {PROJECT_DETAIL_SHARE, PROJECT_DETAIL_TRANSITION_TYPE} from "@/lib/view-transition";

interface IProjectCardProps {
  project: IProject;
  hideTechStack?: boolean;
  relevant?: boolean;
}

function ProjectCard(props: IProjectCardProps) {
  const {project, hideTechStack = false} = props;
  const {id, title, description, technologies, readTime} = project;

  return (
    <CustomLink href={`/projects/${id}`} transitionTypes={[PROJECT_DETAIL_TRANSITION_TYPE]} className="group block">
      <article className="py-2 transition-opacity duration-200 hover:opacity-80">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-(--foreground) underline decoration-transparent underline-offset-4 transition-all duration-200 group-hover:decoration-(--muted-foreground)/40 sm:text-xl">
            <ViewTransition name={`project-title-${id}`} default="none" share={PROJECT_DETAIL_SHARE}>
              <span className="inline-block">{title}</span>
            </ViewTransition>
          </h3>

          <p className="text-base leading-relaxed text-(--muted-foreground)">
            <ViewTransition name={`project-description-${id}`} default="none" share={PROJECT_DETAIL_SHARE}>
              <span className="inline-block">{description}</span>
            </ViewTransition>
          </p>

          <div className="mt-2 flex items-center gap-2">
            {!hideTechStack && technologies && technologies.length > 0 && (
              <>
                <div className="flex flex-row flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <ViewTransition key={index} name={`project-tech-${id}-${tech}`} default="none" share={PROJECT_DETAIL_SHARE}>
                      <TechCard name={tech} />
                    </ViewTransition>
                  ))}
                </div>
                <span className="text-(--muted-foreground)">·</span>
              </>
            )}
            <span className="shrink-0 text-sm whitespace-nowrap text-(--muted-foreground)">{readTime}</span>
          </div>
        </div>
      </article>
    </CustomLink>
  );
}

export default ProjectCard;

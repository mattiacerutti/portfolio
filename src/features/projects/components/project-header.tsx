import P from "@/components/ui/typography/p";
import H2 from "@/components/ui/typography/h2";
import TechCard from "@/features/shared/components/tech-card";
import {CustomLink} from "@/components/ui/typography/link";
import {HiOutlineExternalLink} from "react-icons/hi";
import {TbBrandGithub} from "react-icons/tb";
import type {Project} from "@/features/projects/data/projects";
import {ViewTransition} from "react";
import {PROJECT_DETAIL_SHARE} from "@/lib/view-transition";

// This component is needed instead of using a generic layout.tsx because we do not have access to the project name in the layout
// and we do need project's data to render the header.

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader(props: ProjectHeaderProps) {
  const {project} = props;
  const {id, title, description, technologies, github, preview} = project;

  return (
    <div>
      <div className="flex items-center gap-4">
        <H2 className="inline-block">
          <ViewTransition name={`project-title-${id}`} default="none" share={PROJECT_DETAIL_SHARE}>
            <span className="inline-block">{title}</span>
          </ViewTransition>
        </H2>

        <div className="mt-1 flex flex-row gap-3">
          {preview && (
            <CustomLink href={preview} target="_blank" aria-label="View live preview (opens in new tab)">
              <HiOutlineExternalLink className="h-5 w-5" />
            </CustomLink>
          )}
          {github && (
            <CustomLink href={github} target="_blank" aria-label="View source code on GitHub (opens in new tab)">
              <TbBrandGithub className="h-5 w-5" />
            </CustomLink>
          )}
        </div>
      </div>
      {/* Match the list description width so the view transition keeps the same line wraps and avoids a visual glitch. */}
      <P className="mt-0.5 max-w-[calc(100%-1.5rem)] text-(--muted-foreground) sm:max-w-[calc(100%-3rem)]">
        <ViewTransition name={`project-description-${id}`} default="none" share={PROJECT_DETAIL_SHARE}>
          <span className="inline-block">{description}</span>
        </ViewTransition>
      </P>
      <div className="mt-3 inline-flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <ViewTransition key={tech} name={`project-tech-${id}-${tech}`} default="none" share={PROJECT_DETAIL_SHARE}>
            <TechCard name={tech} />
          </ViewTransition>
        ))}
      </div>
    </div>
  );
}

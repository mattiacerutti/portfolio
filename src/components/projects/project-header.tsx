import P from "@/components/ui/typography/p";
import H2 from "@/components/ui/typography/h2";
import TechCard from "@/components/ui/tech-card";
import Button from "@/components/ui/button";
import {CustomLink} from "@/components/ui/typography/link";
import {ViewTransition} from "react";
import {HiOutlineExternalLink} from "react-icons/hi";
import {TbBrandGithub} from "react-icons/tb";
import {IProject} from "@/data/projects";

// This component is needed instead of using a generic layout.tsx because we do not have access to the project name in the layout
// and we do need project's data to render the header.

interface IProjectHeaderProps {
  project: IProject;
}

export default function ProjectHeader(props: IProjectHeaderProps) {
  const {project} = props;
  const {id, title, description, technologies, github, preview, readTime} = project;

  return (
    <div>
      <P className="!text-base text-[var(--muted-foreground)]">{readTime} read</P>
      <div className="flex items-center gap-4">
        <div className="will-change-transform">
          <ViewTransition name={`project-title-${id}`}>
            <H2 className="inline-block">{title}</H2>
          </ViewTransition>
        </div>

        <div className="flex flex-row gap-1.5">
          {preview && (
            <CustomLink href={preview} target="_blank" aria-label="View live preview (opens in new tab)">
              <Button className="h-7 w-7 p-1.5 transition-transform duration-300 hover:-translate-y-0.5">
                <HiOutlineExternalLink className="h-full w-full" />
              </Button>
            </CustomLink>
          )}
          {github && (
            <CustomLink href={github} target="_blank" aria-label="View source code on GitHub (opens in new tab)">
              <Button className="h-7 w-7 p-1.5 transition-transform duration-300 hover:-translate-y-0.5">
                <TbBrandGithub className="h-full w-full" />
              </Button>
            </CustomLink>
          )}
        </div>
      </div>
      <div className="will-change-transform">
        <ViewTransition name={`project-description-${id}`}>
          <P className="inline-block text-[var(--muted-foreground)]">{description}</P>
        </ViewTransition>
      </div>
      <div className="mt-3 inline-flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechCard key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
}

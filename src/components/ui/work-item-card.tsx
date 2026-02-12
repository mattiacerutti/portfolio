import React from "react";
import {CustomLink} from "@/components/ui/typography/link";
import H4 from "@/components/ui/typography/h4";
import P from "@/components/ui/typography/p";
import TechCard from "@/components/ui/tech-card";
import {HiOutlineArrowUpRight} from "react-icons/hi2";
import GlassPane from "./glass-pane";

export interface IWorkItem {
  name: string;
  href: string;
  client: string;
  description: string;
  tags: string[];
  year?: string;
}

interface IWorkItemCardProps {
  item: IWorkItem;
}

function WorkItemCard({item}: IWorkItemCardProps) {
  const {name, href, client, description, tags, year} = item;

  return (
    <CustomLink href={href} target="_blank" className="group block">
      <GlassPane className="relative flex h-full flex-col gap-4 overflow-hidden p-5 transition-all duration-300 hover:bg-[var(--button-hover-bg)]">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-[var(--button-hover-bg)] opacity-30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--button-border)] to-transparent opacity-70" />
        </div>

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="flex-1">
            {year && <div className="mb-1 text-xs text-[var(--muted-foreground)]">{year}</div>}
            <H4 className="text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--button-hover-text)]">{name}</H4>
          </div>
          <HiOutlineArrowUpRight className="h-5 w-5 shrink-0 text-[var(--muted-foreground)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--button-hover-text)]" />
        </div>

        {description && (
          <div className="relative z-10">
            <P className="!text-sm text-[var(--muted-foreground)]">{description}</P>
          </div>
        )}

        {tags.length > 0 && (
          <div className="relative z-10 mt-auto flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <TechCard key={tag} name={tag} />
            ))}
          </div>
        )}
      </GlassPane>
    </CustomLink>
  );
}

export default WorkItemCard;

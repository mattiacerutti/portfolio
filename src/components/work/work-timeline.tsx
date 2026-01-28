import React from "react";
import {IWorkExperience} from "@/data/work";
import VerticalReveal from "@/components/animations/vertical-reveal";
import WorkExperience from "@/components/work/work-experience";

interface WorkTimelineProps {
  experiences: IWorkExperience[];
  trigger?: "instant" | "scroll";
  startY?: number;
  duration?: number;
  baseDelay?: number;
}

export default function WorkTimeline({experiences, trigger = "scroll", startY = 50, duration = 2, baseDelay = 0}: WorkTimelineProps) {
  return (
    <div className="flex flex-col gap-10">
      {experiences.map((experience, index) => {
        const isFirst = index === 0;
        const isLast = index === experiences.length - 1;
        const delay = baseDelay ? (index + 1) * baseDelay : 0;

        return (
          <VerticalReveal key={index} trigger={trigger} delay={delay} className="relative block w-full pl-8" startY={startY} duration={duration}>
            {!isFirst && <span className="absolute -top-5 left-3 h-11 w-px -translate-x-1/2 bg-[var(--muted-foreground)]/25" aria-hidden="true" />}
            {!isLast && <span className="absolute top-6 -bottom-5 left-3 w-px -translate-x-1/2 bg-[var(--muted-foreground)]/25" aria-hidden="true" />}
            {isLast && (
              <span
                className="absolute top-6 -bottom-5 left-3 w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.25)_0%,rgba(148,163,184,0.2)_55%,rgba(148,163,184,0)_100%)]"
                aria-hidden="true"
              />
            )}
            <span className="absolute top-6 left-3 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--muted-foreground)]" aria-hidden="true" />
            <WorkExperience experience={experience} />
          </VerticalReveal>
        );
      })}
    </div>
  );
}

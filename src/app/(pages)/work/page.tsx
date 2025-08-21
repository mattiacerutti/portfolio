import React from "react";
import H3 from "@/components/typography/h3";
import WorkExperience from "@/components/work-experience";
import {WORK_EXPERIENCES} from "@/data/work";
import VerticalReveal from "@/components/animations/vertical-reveal";
import P from "@/components/typography/p";

export default function Work() {
  const baseDelay = 0.15;

  return (
    <div className="flex flex-col gap-8">
      <VerticalReveal>
        <H3>Work</H3>
        <P className="text-[var(--muted-foreground)]">My work experiences.</P>
      </VerticalReveal>
      <div className="flex flex-col gap-10">
        {WORK_EXPERIENCES.map((experience, index) => (
          <VerticalReveal key={index} delay={(index + 1) * baseDelay} className="w-full">
            <WorkExperience experience={experience} />
          </VerticalReveal>
        ))}
      </div>
    </div>
  );
}

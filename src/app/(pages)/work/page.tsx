import React from "react";
import H3 from "@/components/ui/typography/h3";
import WorkTimeline from "@/components/work/work-timeline";
import {WORK_EXPERIENCES} from "@/data/work";
import VerticalReveal from "@/components/animations/vertical-reveal";
import P from "@/components/ui/typography/p";
import {createPageMetadata} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Work",
  description: "My work experience and career so far.",
  pathname: "/work/",
});

export default function Work() {
  const baseDelay = 0.15;

  return (
    <div className="flex flex-col gap-8">
      <VerticalReveal>
        <H3>Work</H3>
        <P className="text-[var(--muted-foreground)]">All my work experiences.</P>
      </VerticalReveal>
      <WorkTimeline experiences={WORK_EXPERIENCES} baseDelay={baseDelay} />
    </div>
  );
}

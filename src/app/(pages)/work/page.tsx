import React from "react";
import H3 from "@/components/ui/typography/h3";
import WorkTimeline from "@/components/work/work-timeline";
import {WORK_EXPERIENCES} from "@/data/work";
import P from "@/components/ui/typography/p";
import {createPageMetadata} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Work",
  description: "My work experience and career so far.",
  pathname: "/work",
});

export default function Work() {
  const baseDelay = 0.15;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <H3>Work</H3>
        <P className="text-(--muted-foreground)">My career path so far.</P>
      </div>
      <WorkTimeline experiences={WORK_EXPERIENCES} trigger="instant" baseDelay={baseDelay} duration={1.5} />
    </div>
  );
}

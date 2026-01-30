import React from "react";
import H3 from "@/components/ui/typography/h3";
import WorkTimeline from "@/components/work/work-timeline";
import {WORK_EXPERIENCES} from "@/data/work";
import VerticalReveal from "@/components/animations/vertical-reveal";
import P from "@/components/ui/typography/p";

export const metadata = {
  title: "Work | Mattia Cerutti",
  description: "My work experience and career so far.",
  openGraph: {
    title: "Work | Mattia Cerutti",
    description: "My work experience and career so far.",
    url: "https://mattiacerutti.com/work/",
    siteName: "Mattia Cerutti Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Mattia Cerutti",
    description: "My work experience and career so far.",
  },
};

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

import type {PropsWithChildren} from "react";
import {twMerge} from "tailwind-merge";

import VerticalReveal from "@/components/animations/vertical-reveal";

interface IProjectMdxSectionProps {
  delay: number;
  className?: string;
  contentClassName?: string;
}

export default function ProjectMdxSection(props: PropsWithChildren<IProjectMdxSectionProps>) {
  const {children, delay, className, contentClassName} = props;

  return (
    <VerticalReveal delay={delay} className={className}>
      <div className={twMerge("flex flex-col gap-2", contentClassName)}>{children}</div>
    </VerticalReveal>
  );
}

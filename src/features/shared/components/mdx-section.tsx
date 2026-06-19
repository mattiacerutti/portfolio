import type {PropsWithChildren} from "react";
import {twMerge} from "tailwind-merge";

import VerticalReveal from "@/components/animations/vertical-reveal";

interface MdxSectionProps {
  delay: number;
  className?: string;
  contentClassName?: string;
}

export default function MdxSection(props: PropsWithChildren<MdxSectionProps>) {
  const {children, delay, className, contentClassName} = props;

  return (
    <VerticalReveal delay={delay} className={className}>
      <div className={twMerge("flex flex-col gap-6 [&_p]:leading-relaxed", contentClassName)}>{children}</div>
    </VerticalReveal>
  );
}

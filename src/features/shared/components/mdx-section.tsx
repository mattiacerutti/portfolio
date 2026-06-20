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
      <div className={twMerge("flex flex-col gap-1.5 [&_p]:leading-relaxed [&>p+p]:mt-5", contentClassName)}>{children}</div>
    </VerticalReveal>
  );
}

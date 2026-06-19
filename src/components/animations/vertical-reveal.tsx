"use client";

import type {PropsWithChildren} from "react";
import {m} from "framer-motion";

interface VerticalRevealProps {
  delay?: number;
  startY?: number;
  duration?: number;
  className?: string;
  trigger?: "instant" | "scroll";
}

export default function VerticalReveal(props: PropsWithChildren<VerticalRevealProps>) {
  const {children, delay = 0, className = "", trigger = "instant", startY = 32, duration = 1} = props;
  const revealTransition = {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <m.span
      className={className}
      initial={{y: startY, opacity: 0}}
      transition={revealTransition}
      {...(trigger === "scroll"
        ? {
            whileInView: {y: 0, opacity: 1},
            viewport: {once: true, amount: 0.1},
          }
        : {
            animate: {y: 0, opacity: 1},
          })}
    >
      {children}
    </m.span>
  );
}

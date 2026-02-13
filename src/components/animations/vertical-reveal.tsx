"use client";

import {PropsWithChildren} from "react";
import {motion} from "framer-motion";

interface IVerticalRevealProps {
  delay?: number;
  startY?: number;
  duration?: number;
  className?: string;
  trigger?: "instant" | "scroll";
}

export default function VerticalReveal({children, delay = 0, className = "", trigger = "instant", startY = 32, duration = 1}: PropsWithChildren<IVerticalRevealProps>) {
  const revealTransition = {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <motion.span
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
    </motion.span>
  );
}

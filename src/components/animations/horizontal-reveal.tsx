"use client";

import {Children} from "react";
import type {PropsWithChildren} from "react";
import {m} from "framer-motion";

interface IHorizontalRevealProps {
  delay?: number;
  stagger?: number;
  className?: string;
}

const itemVariants = {
  hidden: {opacity: 0, scale: 0.6},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HorizontalReveal(props: PropsWithChildren<IHorizontalRevealProps>) {
  const {children, delay = 0, stagger = 0.15, className = ""} = props;
  const childrenArray = Children.toArray(children);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  return (
    <m.div className={className} variants={containerVariants} initial="hidden" animate="visible">
      {childrenArray.map((child, i) => (
        <m.span key={i} variants={itemVariants}>
          {child}
        </m.span>
      ))}
    </m.div>
  );
}

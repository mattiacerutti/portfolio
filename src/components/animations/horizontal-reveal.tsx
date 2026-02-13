"use client";

import {Children, PropsWithChildren} from "react";
import {motion} from "framer-motion";

interface IHorizontalRevealProps {
  delay?: number;
  stagger?: number;
  className?: string;
}

export default function HorizontalReveal({children, delay = 0, stagger = 0.15, className = ""}: PropsWithChildren<IHorizontalRevealProps>) {
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

  return (
    <motion.div className={className} variants={containerVariants} initial="hidden" animate="visible">
      {childrenArray.map((child, i) => (
        <motion.span key={i} variants={itemVariants}>
          {child}
        </motion.span>
      ))}
    </motion.div>
  );
}

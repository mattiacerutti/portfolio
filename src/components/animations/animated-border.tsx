"use client";

import {motion} from "framer-motion";
import {PropsWithChildren} from "react";

interface IAnimatedBorderProps {
  className?: string;
  lineClassName?: string;
  duration?: number;
}

export default function AnimatedBorder({children, className = "", lineClassName = "", duration = 1.5}: PropsWithChildren<IAnimatedBorderProps>) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className={`absolute top-0 bottom-0 left-0 w-0.5 ${lineClassName}`}
        initial={{scaleY: 0}}
        animate={{scaleY: 1}}
        transition={{duration, ease: [0.22, 1, 0.36, 1]}}
        style={{transformOrigin: "top"}}
      />
      {children}
    </div>
  );
}

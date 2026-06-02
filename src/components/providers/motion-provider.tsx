"use client";

import {domAnimation, LazyMotion, MotionConfig} from "framer-motion";
import type {PropsWithChildren} from "react";

export default function MotionProvider(props: PropsWithChildren) {
  const {children} = props;

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

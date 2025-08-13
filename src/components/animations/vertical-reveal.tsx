"use client";

import {useLayoutEffect, useRef, PropsWithChildren} from "react";
import gsap from "gsap";

interface IVerticalRevealProps {
  delay?: number;
  className?: string;
}

export default function VerticalReveal({children, delay = 0, className = ""}: PropsWithChildren<IVerticalRevealProps>) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, {
        y: 32,
        opacity: 0,
        willChange: "transform, opacity",
      });
      gsap.to(contentRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: "power3.out",
        clearProps: "willChange",
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={wrapRef} className={className}>
      <span ref={contentRef} className="inline-block">
        {children}
      </span>
    </div>
  );
}

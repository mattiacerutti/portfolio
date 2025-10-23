"use client";

import {useLayoutEffect, useRef, PropsWithChildren} from "react";
import gsap from "gsap";

interface IHorizontalRevealProps {
  delay?: number;
  stagger?: number;
  className?: string;
}

export default function HorizontalReveal({children, delay = 0, stagger = 0.15, className = ""}: PropsWithChildren<IHorizontalRevealProps>) {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!wrapRef.current) return;
    const targets = wrapRef.current.querySelectorAll<HTMLElement>("[data-reveal-item]");
    const ctx = gsap.context(() => {
      gsap.set(targets, {
        opacity: 0,
        scale: 0.6,
        willChange: "scale, opacity",
      });
      gsap.to(targets, {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay,
        stagger,
        ease: "power3.out",
        clearProps: "willChange",
      });
    }, wrapRef);
    return () => ctx.revert();
  }, [delay, stagger]);

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div ref={wrapRef} className={className}>
      {childrenArray.map((child, i) => (
        <span key={i} data-reveal-item>
          {child}
        </span>
      ))}
    </div>
  );
}

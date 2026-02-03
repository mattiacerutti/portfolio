"use client";

import {useLayoutEffect, useRef, PropsWithChildren} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

interface IVerticalRevealProps {
  delay?: number;
  startY?: number;
  duration?: number;
  className?: string;
  trigger?: "instant" | "scroll";
}

export default function VerticalReveal({children, delay = 0, className = "", trigger = "instant", startY = 32, duration = 1}: PropsWithChildren<IVerticalRevealProps>) {
  const contentRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    if (!contentRef.current) return;
    if (trigger === "scroll") {
      gsap.registerPlugin(ScrollTrigger);
    }
    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, {
        y: startY,
        opacity: 0,
        willChange: "transform, opacity",
      });
      if (trigger === "instant") {
        gsap.to(contentRef.current, {
          y: 0,
          opacity: 1,
          duration: duration,
          delay,
          ease: "power3.out",
          clearProps: "willChange",
        });
      } else if (trigger === "scroll") {
        gsap.to(contentRef.current, {
          y: 0,
          opacity: 1,
          duration: duration,
          delay,
          ease: "power3.out",
          clearProps: "willChange",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
            markers: true,
          },
        });
      }
    }, contentRef);
    return () => ctx.revert();
  }, [delay, trigger, startY, duration]);

  return (
    <span ref={contentRef} className={className}>
      {children}
    </span>
  );
}

"use client";

import {motion} from "framer-motion";
import {IWorkExperience} from "@/data/work";
import VerticalReveal from "@/components/animations/vertical-reveal";
import WorkExperience from "@/components/work/work-experience";

interface WorkTimelineProps {
  experiences: IWorkExperience[];
  trigger?: "instant" | "scroll";
  startY?: number;
  duration?: number;
  baseDelay?: number;
}

export default function WorkTimeline({experiences, trigger = "scroll", startY = 50, duration = 2, baseDelay = 0}: WorkTimelineProps) {
  return (
    <div className="relative ml-0 flex flex-col gap-10 sm:ml-4">
      <motion.div
        className="absolute top-6 bottom-5 left-1 w-px bg-gradient-to-b from-(--muted-foreground)/25 via-(--muted-foreground)/20 to-transparent"
        initial={{scaleY: 0}}
        animate={{scaleY: 1}}
        transition={{duration: 1.5, ease: [0.22, 1, 0.36, 1]}}
        style={{transformOrigin: "top"}}
      />

      {experiences.map((experience, index) => (
        <div key={index} className="relative block w-full pl-7 sm:pl-9">
          <motion.span
            className="absolute top-6 left-1 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--muted-foreground)"
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{delay: index * baseDelay, duration: 0.4, ease: [0.22, 1, 0.36, 1]}}
          />
          <VerticalReveal trigger={trigger} delay={index * baseDelay} startY={startY} duration={duration} className="block">
            <WorkExperience experience={experience} />
          </VerticalReveal>
        </div>
      ))}
    </div>
  );
}

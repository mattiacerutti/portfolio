"use client";

import H3 from "@/components/ui/typography/h3";
import {WORK_EXPERIENCES} from "@/features/work/data/work";
import P from "@/components/ui/typography/p";
import VerticalReveal from "@/components/animations/vertical-reveal";
import WorkExperience from "../components/work-experience";
import {motion} from "framer-motion";

export default function WorkPage() {
  const baseDelay = 0.15;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <H3>Work</H3>
        <P className="text-(--muted-foreground)">My career path so far.</P>
      </div>
      <div className="relative ml-0 flex flex-col gap-10 sm:ml-4">
        <motion.div
          className="absolute top-6 bottom-5 left-1 w-px bg-linear-to-b from-(--muted-foreground)/25 via-(--muted-foreground)/20 to-transparent"
          initial={{scaleY: 0}}
          animate={{scaleY: 1}}
          transition={{duration: 1.5, ease: [0.22, 1, 0.36, 1]}}
          style={{transformOrigin: "top"}}
        />

        {WORK_EXPERIENCES.map((experience, index) => (
          <div key={index} className="relative block w-full pl-7 sm:pl-9">
            <motion.span
              className="absolute top-6 left-1 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--muted-foreground)"
              initial={{scale: 0}}
              animate={{scale: 1}}
              transition={{delay: index * baseDelay, duration: 0.4, ease: [0.22, 1, 0.36, 1]}}
            />
            <VerticalReveal delay={index * baseDelay} startY={50} duration={2} className="block">
              <WorkExperience experience={experience} />
            </VerticalReveal>
          </div>
        ))}
      </div>
    </div>
  );
}

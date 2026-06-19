"use client";

import {CustomLink} from "@/components/ui/typography/link";
import faceImage from "@/assets/images/face.png";
import Image from "next/image";
import {TbBrandGithub} from "react-icons/tb";
import {LiaLinkedinIn} from "react-icons/lia";
import {m} from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <header className="w-full px-6 pt-28 pb-16 sm:px-10 sm:pt-32 sm:pb-20">
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-start gap-y-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-12 md:gap-y-0">
        <m.div className="max-w-xl" initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} transition={{duration: 0.9, ease}}>
          <h1 className="text-4xl font-bold tracking-tight text-(--foreground) sm:text-5xl">Mattia Cerutti</h1>

          <p className="mt-4 text-lg leading-relaxed text-(--muted-foreground)">
            SWE @ AWS. I spend the rest of my time <CustomLink href="/projects" underline>making things</CustomLink> I wish existed already, plus whatever random idea feels worth shipping
            (while probably overthinking the details a bit).
          </p>
        </m.div>

        <m.div className="flex items-center gap-6 text-base font-semibold md:col-start-1 md:row-start-2 md:mt-6" initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} transition={{duration: 0.9, ease}}>
          <CustomLink
            href="https://github.com/mattiacerutti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="flex items-center gap-2 text-(--foreground) transition-opacity hover:opacity-60"
          >
            <TbBrandGithub className="h-5 w-5" />
            GitHub
          </CustomLink>
          <CustomLink
            href="https://www.linkedin.com/in/mattiacerutti/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="flex items-center gap-2 text-(--foreground) transition-opacity hover:opacity-60"
          >
            <LiaLinkedinIn className="h-5 w-5" />
            LinkedIn
          </CustomLink>
        </m.div>

        <m.div
          className="h-32 w-32 shrink-0 justify-self-start overflow-hidden rounded-full border-2 border-(--button-border) sm:h-36 sm:w-36 md:col-start-2 md:row-start-1 md:self-center"
          initial={{opacity: 0, x: 24, scale: 0.95}}
          animate={{opacity: 1, x: 0, scale: 1}}
          transition={{duration: 1, ease, delay: 0.1}}
        >
          <Image src={faceImage} alt="Mattia Cerutti" width={128} height={128} className="h-full w-full object-cover" priority />
        </m.div>
      </div>
    </header>
  );
}

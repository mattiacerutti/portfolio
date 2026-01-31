import React from "react";
import {CustomLink} from "@/components/ui/typography/link";
import {TbBrandGithub} from "react-icons/tb";
import {LiaLinkedinIn} from "react-icons/lia";
import {HiOutlineMail} from "react-icons/hi";

import CometBackground from "../components/home/comet-background";
import VerticalReveal from "../components/animations/vertical-reveal";
import HorizontalReveal from "../components/animations/horizontal-reveal";
import H1 from "../components/ui/typography/h1";
import H3 from "@/components/ui/typography/h3";
import P from "@/components/ui/typography/p";
import Button from "@/components/ui/button";
import Image from "next/image";
import Wave from "/public/wave.png";
import AgeDisplay from "@/components/home/age-display";

export default function Hero() {
  return (
    <CometBackground>
      <div className="flex h-screen w-fit flex-col items-start justify-center gap-3 p-5">
        <div className="flex flex-col gap-1">
          <VerticalReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:gap-3">
              <H1 className="!text-5xl text-nowrap">hey! i&apos;m</H1>
              <H1 className="!text-5xl text-nowrap">
                Mattia&nbsp;
                <span className="hover:animate-wave inline-block origin-[70%_70%] transition-transform duration-300">
                  <Image src={Wave} alt="Wave" className="h-12 w-12" draggable={false} />
                </span>
              </H1>
            </div>
          </VerticalReveal>
          <VerticalReveal delay={0.1}>
            <H3 className="!font-normal text-[var(--muted-foreground)]">
              <AgeDisplay birthDate={new Date("2004-10-27")} />
            </H3>
          </VerticalReveal>
          <VerticalReveal delay={0.2}>
            <P className="!font-semibold text-[var(--muted-foreground)]">📍 Italy</P>
          </VerticalReveal>
        </div>

        <HorizontalReveal className="flex items-center gap-3">
          <CustomLink href="https://github.com/mattiacerutti" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile (opens in new tab)">
            <Button className="h-9 w-9 p-1.5 transition-transform duration-300 hover:-translate-y-0.5">
              <TbBrandGithub className="h-full w-full" />
            </Button>
          </CustomLink>
          <CustomLink href="https://www.linkedin.com/in/mattiacerutti/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile (opens in new tab)">
            <Button className="h-9 w-9 p-1.5 transition-transform duration-300 hover:-translate-y-0.5">
              <LiaLinkedinIn className="h-full w-full" />
            </Button>
          </CustomLink>
          <CustomLink href="mailto:mattiacerutti04@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send me an email">
            <Button className="h-9 w-9 p-1.5 transition-transform duration-300 hover:-translate-y-0.5">
              <HiOutlineMail className="h-full w-full" />
            </Button>
          </CustomLink>
        </HorizontalReveal>
      </div>
    </CometBackground>
  );
}

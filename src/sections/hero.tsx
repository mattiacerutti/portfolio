import React from "react";
import {CustomLink} from "@/components/typography/link";
import {TbBrandGithub} from "react-icons/tb";
import {LiaLinkedinIn} from "react-icons/lia";
import {FaRegFileAlt} from "react-icons/fa";

import CometBackground from "../components/comet-background";
import VerticalReveal from "../components/animations/vertical-reveal";
import HorizontalReveal from "../components/animations/horizontal-reveal";
import H1 from "../components/typography/h1";
import H3 from "@/components/typography/h3";
import P from "@/components/typography/p";
import Button from "@/components/button";

export default function Hero() {
  return (
    <CometBackground>
      <div className="flex flex-col items-start justify-center h-screen gap-3 p-5 w-fit">
        <div className="flex flex-col gap-1">
          <VerticalReveal>
            <div className="flex flex-col items-start xs:flex-row xs:gap-3">
              <H1 className="text-nowrap">hey! i&apos;m</H1>
              <H1 className="text-nowrap">
                Mattia <span className="transition-transform duration-300 inline-block origin-[70%_70%] hover:animate-wave">👋</span>
              </H1>
            </div>
          </VerticalReveal>
          <VerticalReveal delay={0.1}>
            <H3 className="!font-normal text-[var(--muted-foreground)]">21yo software engineer</H3>
          </VerticalReveal>
          <VerticalReveal delay={0.2}>
            <P className="text-[var(--muted-foreground)] !font-semibold">📍 Italy</P>
          </VerticalReveal>
        </div>

        <HorizontalReveal className="flex items-center gap-3">
          <CustomLink href="https://github.com/mattiacerutti" target="_blank" rel="noopener noreferrer" className="">
            <Button className="w-9 h-9 p-1.5">
              <TbBrandGithub className="w-full h-full " />
            </Button>
          </CustomLink>
          <CustomLink href="https://www.linkedin.com/in/mattiacerutti/" target="_blank" rel="noopener noreferrer">
            <Button className="w-9 h-9 p-1.5">
              <LiaLinkedinIn className="w-full h-full " />
            </Button>
          </CustomLink>
          <CustomLink href="https://flowcv.com/resume/sfcv6r8csf" target="_blank" rel="noopener noreferrer">
            <Button className="w-9 h-9 p-2">
              <FaRegFileAlt className="w-full h-full" />
            </Button>
          </CustomLink>
        </HorizontalReveal>
      </div>
    </CometBackground>
  );
}

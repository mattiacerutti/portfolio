import React from "react";
import {CustomLink} from "@/components/typography/link";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaFileAlt} from "react-icons/fa";

import CometBackground from "../components/comet-background";
import VerticalReveal from "../components/animations/vertical-reveal";
import HorizontalReveal from "../components/animations/horizontal-reveal";
import H1 from "../components/typography/h1";
import H3 from "@/components/typography/h3";
import P from "@/components/typography/p";

export default function Hero() {
  return (
    <CometBackground>
      <div className="flex flex-col items-start justify-center h-screen gap-3 p-5 w-fit">
        <div className="flex flex-col">
          <VerticalReveal>
            <div className="flex flex-col items-start xs:flex-row xs:gap-3">
              <H1 className="text-nowrap">Hi, I&apos;m</H1>
              <H1 className="text-nowrap">
                Mattia <span className="transition-transform duration-300 inline-block origin-[70%_70%] hover:animate-wave">👋</span>
              </H1>
            </div>
          </VerticalReveal>
          <VerticalReveal delay={0.1}>
            <H3 className="!font-normal">Software Engineer</H3>
          </VerticalReveal>
          <VerticalReveal delay={0.2}>
            <P className="text-[var(--muted-foreground)]">📍 Venice, Italy</P>
          </VerticalReveal>
        </div>

        <HorizontalReveal className="flex items-center gap-3">
          <CustomLink
            href="https://github.com/mattiacerutti"
            target="_blank"
            rel="noopener noreferrer"
            className="!text-[var(--button-bg)] hover:!text-[var(--button-hover-bg)]"
          >
            <FaGithub className="w-auto h-7" />
          </CustomLink>
          <CustomLink
            href="https://www.linkedin.com/in/mattiacerutti/"
            target="_blank"
            rel="noopener noreferrer"
            className="!text-[var(--button-bg)] hover:!text-[var(--button-hover-bg)]"
          >
            <FaLinkedin className="w-auto h-7" />
          </CustomLink>
          <CustomLink
            href="https://flowcv.com/resume/sfcv6r8csf"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center transition-colors hover:!text-[var(--button-hover-text)] hover:!bg-[var(--button-hover-bg)] duration-400 flex gap-1 px-1.5 !text-[var(--button-text)] !bg-[var(--button-bg)] rounded-md h-7"
          >
            <FaFileAlt className="w-3.5 h-3.5" />
            Resume
          </CustomLink>
        </HorizontalReveal>
      </div>
    </CometBackground>
  );
}

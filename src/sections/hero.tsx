import React from "react";
import Link from "next/link";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaFileAlt} from "react-icons/fa";

import CometBackground from "../components/comet-background";
import VerticalReveal from "../components/animations/vertical-reveal";
import HorizontalReveal from "../components/animations/horizontal-reveal";
import H1 from "../components/typography/h1";
import H4 from "@/components/typography/h4";

export default function Hero() {
  return (
    <CometBackground>
      <div className="flex flex-col items-start justify-center h-screen gap-5 w-fit">
        <div className="flex flex-col gap-1">
          <H1>
            <VerticalReveal>hi, I&apos;m Mattia 👋</VerticalReveal>
          </H1>
          <H4 className="!font-normal">
            <VerticalReveal delay={0.1}>Full-stack developer</VerticalReveal>
          </H4>
        </div>

        <HorizontalReveal className="flex items-center gap-4">
          <Link
            href="https://github.com/mattiacerutti"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-[var(--link-text)] hover:text-[var(--link-hover)] duration-400"
          >
            <FaGithub className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mattiacerutti/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-[var(--link-text)] hover:text-[var(--link-hover)] duration-400"
          >
            <FaLinkedin className="w-6.5 h-6.5" />
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="items-center transition-colors hover:text-[var(--button-hover-text)] hover:bg-[var(--button-hover-bg)] duration-400 flex gap-1 px-2 py-1 text-[var(--button-text)] bg-[var(--button-bg)] rounded-lg"
          >
            <FaFileAlt className="w-4 h-4" />
            Resume
          </Link>
        </HorizontalReveal>
      </div>
    </CometBackground>
  );
}

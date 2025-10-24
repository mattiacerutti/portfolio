import VerticalReveal from "@/components/animations/vertical-reveal";
import Ul from "@/components/typography/ul";
import Li from "@/components/typography/li";
import H3 from "@/components/typography/h3";
import H4 from "@/components/typography/h4";
import P from "@/components/typography/p";
import {CustomLink} from "@/components/typography/link";
import React from "react";
import {HiOutlineExternalLink} from "react-icons/hi";
import {TbBrandGithub} from "react-icons/tb";
import TechCard from "@/components/ui/tech-card";
import {getProjectById} from "@/data/projects";
import Button from "@/components/ui/button";

export const metadata = {
  title: "Selected Work | Mattia Cerutti",
  description: "A collection of client projects I built. Thoughtful design, smooth interactions, and real products used by real people every day.",
  openGraph: {
    title: "Selected Work | Mattia Cerutti",
    description: "A collection of client projects I built. Thoughtful design, smooth interactions, and real products used by real people every day.",
    url: "https://mattiacerutti.com/projects/selected-work/",
    siteName: "Mattia Cerutti Portfolio",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work | Mattia Cerutti",
    description: "A collection of client projects I built. Thoughtful design, smooth interactions, and real products used by real people every day.",
  },
};

function Page() {
  const baseDelay = 0.15;
  const project = getProjectById("selected-work");

  return (
    <div className="flex flex-col gap-8">
      <VerticalReveal>
        <P className="!text-sm text-[var(--muted-foreground)]">1 min read</P>
        <div className="flex items-center gap-2">
          <H3>{project.title}</H3>

          {project.preview && (
            <CustomLink href={project.preview} target="_blank">
              <Button className="h-7 w-7 p-1.5">
                <HiOutlineExternalLink className="h-full w-full" />
              </Button>
            </CustomLink>
          )}
          {project.github && (
            <CustomLink href={project.github} target="_blank">
              <Button className="h-7 w-7 p-1.5">
                <TbBrandGithub className="h-full w-full" />
              </Button>
            </CustomLink>
          )}
        </div>
        <P className="text-[var(--muted-foreground)]">{project.description}</P>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechCard key={tech} name={tech} />
          ))}
        </div>
      </VerticalReveal>
      <div className="flex flex-col gap-8">
        <VerticalReveal delay={baseDelay}>
          <P>
            A mix of landing pages and configurators I built with <i>Novaidea</i> since I was 18. These were my first real production projects starting from plain HTML, moving
            through PHP, and eventually into modern React + Tailwind builds. Each site features custom animations with <b>GSAP</b> and <b>LocomotiveScroll</b>, and most include
            a&nbsp;
            <b>multi-language CMS</b> that lets clients manage translations and content completely on their own.
          </P>
        </VerticalReveal>

        <VerticalReveal delay={baseDelay * 1}>
          <div className="flex flex-col gap-2">
            <H4>Landings</H4>
            <Ul>
              <Li>
                <CustomLink href="https://novaidea.it/" target="_blank" underline>
                  Novaidea
                </CustomLink>
                &nbsp;— The first website I ever made. Built in PHP with server-side rendering and a custom CMS powered by MySQL. It still runs today and lets the brand update
                their content directly.
              </Li>
              <Li>
                <CustomLink href="https://newartvanguard.com/" target="_blank" underline>
                  New Art Vanguard
                </CustomLink>
                &nbsp;— A simple static landing made with just HTML, CSS, and JS (didn&apos;t even know React yet, lol). Has a clean layout and some more advanced animations.
              </Li>
              <Li>
                <CustomLink href="https://abert.it/pop/?lang=eng" target="_blank" underline>
                  Abert Pop
                </CustomLink>
                &nbsp;— Built with React and Tailwind. Includes a JSON-driven CMS and a custom multi-language system that lets the client manage translations and content entirely
                on their own.
              </Li>
            </Ul>
          </div>
        </VerticalReveal>

        <VerticalReveal delay={baseDelay * 2}>
          <div className="flex flex-col gap-2">
            <H4>Configurators</H4>
            <P>
              A set of five interactive product configurators built for <i>Abert</i> and <i>Broggi</i>. All share the same React + Tailwind architecture and use the same{" "}
              <b>json-driven CMS</b>
              &nbsp;and <b>multi-language system</b> from the landings. <br />
              Each tool lets users explore product variations directly in the browser, while giving the client&nbsp;
              <b>full control</b> over content and translations.
            </P>
            <Ul>
              <Li>
                <CustomLink href="https://tool.abert.it/lighting/?lang=eng" target="_blank" underline>
                  Abert Lighting
                </CustomLink>
              </Li>
              <Li>
                <CustomLink href="https://tool.abert.it/logo/?lang=eng" target="_blank" underline>
                  Abert Logo
                </CustomLink>
              </Li>
              <Li>
                <CustomLink href="https://tool.abert.it/industrial/?lang=eng" target="_blank" underline>
                  Abert Industrial
                </CustomLink>
              </Li>
              <Li>
                <CustomLink href="https://tool.broggi.it/foscari/?lang=eng" target="_blank" underline>
                  Broggi Foscari
                </CustomLink>
              </Li>
              <Li>
                <CustomLink href="https://tool.broggi.it/living/?lang=eng" target="_blank" underline>
                  Broggi Living
                </CustomLink>
              </Li>
            </Ul>
          </div>
        </VerticalReveal>
      </div>
    </div>
  );
}

export default Page;

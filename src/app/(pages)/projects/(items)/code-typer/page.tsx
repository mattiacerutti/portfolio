import VerticalReveal from "@/components/animations/vertical-reveal";
import Ul from "@/components/ui/typography/ul";
import Li from "@/components/ui/typography/li";
import Ol from "@/components/ui/typography/ol";
import H3 from "@/components/ui/typography/h3";
import H4 from "@/components/ui/typography/h4";
import P from "@/components/ui/typography/p";
import {CustomLink} from "@/components/ui/typography/link";
import React from "react";
import {HiOutlineExternalLink} from "react-icons/hi";
import {TbBrandGithub} from "react-icons/tb";
import Code from "@/components/ui/typography/code";
import TechCard from "@/components/ui/tech-card";
import {getProjectById} from "@/data/projects";
import Button from "@/components/ui/button";

export const metadata = {
  title: "Code Typer | Mattia Cerutti",
  description: "A closer look at Code Typer, what it does, how I built it.",
  openGraph: {
    title: "Code Typer | Mattia Cerutti",
    description: "A closer look at Code Typer, what it does, how I built it.",
    url: "https://mattiacerutti.com/projects/code-typer/",
    siteName: "Mattia Cerutti Portfolio",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Typer | Mattia Cerutti",
    description: "A closer look at Code Typer, what it does, how I built it.",
  },
};

function Page() {
  const baseDelay = 0.15;
  const project = getProjectById("code-typer");

  return (
    <div className="flex flex-col gap-8">
      <VerticalReveal>
        <P className="!text-sm text-[var(--muted-foreground)]">2 min read</P>
        <div className="flex items-center gap-2">
          <H3>{project.title}</H3>

          {project.preview && (
            <CustomLink href={project.preview} target="_blank">
              <Button className="h-7 w-7 p-1.5 transition-transform duration-300 hover:-translate-y-0.5">
                <HiOutlineExternalLink className="h-full w-full" />
              </Button>
            </CustomLink>
          )}
          {project.github && (
            <CustomLink href={project.github} target="_blank">
              <Button className="h-7 w-7 p-1.5 transition-transform duration-300 hover:-translate-y-0.5">
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
            Most typing games (eg.&nbsp;
            <CustomLink href="https://monkeytype.com/" target="_blank" underline>
              Monkey Type
            </CustomLink>
            ) test you on plain words, but that&apos;s not how developers type. Writing code involves braces, parentheses, indentation, and syntax rules.
          </P>
        </VerticalReveal>
        <VerticalReveal delay={baseDelay * 1}>
          <div className="flex flex-col gap-2">
            <H4>Why I Built It</H4>
            <P>
              I wanted a tool that felt closer to real programming than standard typing trainers: typing&nbsp;
              <Code language="ts" inline>
                function myFunc()
              </Code>
              &nbsp;has a very different rhythm than typing <i>the quick brown fox</i>!
              <br />
              <br />
              Code Typer makes you practice the symbols, spacing, and structures you encounter every day in code while also providing the help an IDE would.
            </P>
          </div>
        </VerticalReveal>
        <VerticalReveal delay={baseDelay * 2}>
          <div className="flex flex-col gap-2">
            <H4>Features</H4>
            <Ul>
              <Li>Code snippets from real open-source projects</Li>
              <Li>IDE-like behavior: auto-closing pairs, deletion shortcuts, and syntax highlighting</Li>
              <Li>
                Support for <b>JavaScript, TypeScript, C, C++, C#, Java, Lua, and Python</b> (with easy extension for more!)
              </Li>
            </Ul>
          </div>
        </VerticalReveal>
        <VerticalReveal delay={baseDelay * 3}>
          <div className="flex flex-col gap-2">
            <H4>Tech Stack</H4>
            <Ul>
              <Li>
                <b>Next.js</b>: Single framework for frontend and backend API routes. Simplified deployment and kept all logic in one place.
              </Li>
              <Li>
                <b>PostgreSQL + Prisma</b>: Postgres stores GitHub file links and language metadata. Naturally, I had to go with Prisma.
              </Li>
              <Li>
                <b>GitHub API</b>: Primary source of code snippets. Carefully optimized to avoid rate-limit headaches.
              </Li>
              <Li>
                <b>Tree-sitter</b>: Parsing engine for understanding code structure, validating snippets, and detecting autocomplete ranges.
              </Li>
            </Ul>
          </div>
        </VerticalReveal>
        <VerticalReveal delay={baseDelay * 4}>
          <div className="flex flex-col gap-2">
            <H4>How the Snippet Pipeline Works</H4>
            <P>The core of Code Typer is transforming raw GitHub files into valid game snippets. The flow looks like this:</P>
            <Ol>
              <Li>
                <b>Database Query</b>
                <br />
                Select a random file link for the chosen language.
              </Li>
              <Li>
                <b>File Fetching</b>
                <br />
                Download the raw content of the file.
              </Li>
              <Li>
                <b>Parsing</b>
                <br />
                Use <i>Tree-sitter</i> to parse the file and extract candidate snippets like functions or classes.
              </Li>
              <Li>
                <b>Validation &amp; Formatting</b>
                <br />
                Standardize whitespace and indentation, then validate the snippet with rules like minimum length or line count. If a file yields no valid snippets, it&apos;s marked
                invalid in the database to avoid future queries.
              </Li>
              <Li>
                <b>Autocomplete Marking</b>
                <br />
                Mark ranges where auto-closing characters should not trigger (e.g., strings, comments).
              </Li>
            </Ol>
            <P>On the frontend, snippets are highlighted, rendered, and typed in real time.</P>
          </div>
        </VerticalReveal>
        <VerticalReveal delay={baseDelay * 5}>
          <div className="flex flex-col gap-2">
            <H4>What&apos;s Next</H4>
            <P>The current version works, but here are some ways it could be improved:</P>
            <Ul>
              <Li>A cleaner (and better) UI.</Li>
              <Li>Progress tracking over time (with accounts).</Li>
              <Li>Richer performance metrics.</Li>
            </Ul>
          </div>
        </VerticalReveal>
      </div>
    </div>
  );
}

export default Page;

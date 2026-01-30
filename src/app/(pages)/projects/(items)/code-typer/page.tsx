import VerticalReveal from "@/components/animations/vertical-reveal";
import Ul from "@/components/ui/typography/ul";
import Li from "@/components/ui/typography/li";
import H2 from "@/components/ui/typography/h2";
import H3 from "@/components/ui/typography/h3";
import H4 from "@/components/ui/typography/h4";
import P from "@/components/ui/typography/p";
import {CustomLink} from "@/components/ui/typography/link";
import React from "react";
import {HiOutlineExternalLink} from "react-icons/hi";
import {TbBrandGithub} from "react-icons/tb";
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
        <P className="!text-base text-[var(--muted-foreground)]">5 min read</P>
        <div className="flex items-center gap-4">
          <H2>{project.title}</H2>

          <div className="flex flex-row gap-1.5">
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
        </div>
        <P className="text-[var(--muted-foreground)]">{project.description}</P>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechCard key={tech} name={tech} />
          ))}
        </div>
      </VerticalReveal>
      <div className="flex flex-col gap-8">
        <VerticalReveal delay={baseDelay * 1}>
          <div className="flex flex-col gap-2">
            <H3>Why I Built It</H3>
            <P>
              I recently switched from ISO to ANSI keyboard layout, and I needed to practice. I tried&nbsp;
              <CustomLink href="https://monkeytype.com/" target="_blank" underline>
                Monkey Type
              </CustomLink>
              , but typing &quot;the quick brown fox&quot; just doesn&apos;t feel like typing code. When I&apos;m actually programming, I&apos;m dealing with braces, parentheses,
              indentation, and trying not to mess up syntax. None of that comes up when you&apos;re just typing words.
            </P>
            <P>
              I also wanted it to feel like a real IDE. That means auto-closing brackets, smart backspace behavior (deleting entire indentation levels), and syntax highlighting. If
              I&apos;m going to practice typing code, I want it to feel like I&apos;m actually coding.
            </P>
          </div>
        </VerticalReveal>
        <VerticalReveal delay={baseDelay * 2}>
          <div className="flex flex-col gap-2">
            <H3>What It Does</H3>
            <Ul>
              <Li>Pulls actual code from real open-source projects on GitHub</Li>
              <Li>Behaves like an IDE: auto-closing pairs, smart deletion, syntax highlighting</Li>
              <Li>Currently supports JavaScript, TypeScript, C, C++, C#, Java, Lua, and Python</Li>
            </Ul>
          </div>
        </VerticalReveal>
        <VerticalReveal delay={baseDelay * 3}>
          <div className="flex flex-col gap-2">
            <H3>Tech Stack</H3>
            <P>
              I went with <b>Next.js</b> because I wanted a single codebase for everything. The frontend, the API routes, all in one place. It makes deployment simple and I
              don&apos;t have to context switch between different parts of the project.
            </P>
            <P>
              For storage, I&apos;m using <b>PostgreSQL</b> with <b>Prisma</b>. It stores the GitHub file references, language metadata, and the snippets themselves. I&apos;ve used
              Prisma on other projects and I just really like the developer experience.
            </P>
            <P>
              The heavy lifting for parsing is done by <b>Tree-sitter</b>. It&apos;s what lets me extract functions and classes from source files, figure out which parts are
              strings or comments (so I know where not to trigger auto-closing brackets), and validate that a snippet is actually good enough to use.
            </P>
            <P>
              And of course, everything comes from the <b>GitHub API</b>. Had to be careful with rate limits there, but it&apos;s been working well.
            </P>
          </div>
        </VerticalReveal>
        <VerticalReveal delay={baseDelay * 4}>
          <div className="flex flex-col gap-2">
            <H3>How the Snippet Pipeline Actually Works</H3>
            <P>
              My first approach was simpler: when a user requests a snippet, fetch a random file from GitHub, parse it, extract snippets, and return one. But that had problems. It
              was slow (users had to wait for the GitHub API call), and I couldn&apos;t track snippets snippets between users since everything was generated on-the-fly.
            </P>
            <P>
              So I changed the architecture, now everything is <b>pre-fetched</b> and <b>pre-parsed</b> at <b>seed time</b>. Here&apos;s how it actually works:
            </P>
            <H4 className="mt-2">The Data Model</H4>
            <Ul>
              <Li>For each language, I maintain a list of tracked GitHub files</Li>
              <Li>
                Each file can have multiple <i>versions</i> tied to specific git commits
              </Li>
              <Li>Each file version can produce multiple snippets</Li>
            </Ul>
            <P>
              This means snippets are <b>trackable</b> and <b>consistent</b>. If you get a snippet and share the link, someone else will get the exact same code. But it also means
              I have to deal with some interesting challenges.
            </P>
            <H4 className="mt-2">The Outdated Snippet Problem</H4>
            <P>
              Since I&apos;m pre-parsing everything, what happens when the source file changes on GitHub? I could end up serving old, outdated code forever. My solution is to
              <b>periodically re-fetch</b> tracked files. If the file&apos;s <b>SHA</b> has changed, I create a new <b>version</b>, re-parse it, and generate new snippets. The old
              snippets still exist (for those shared links to keep working), but new requests get the fresh ones.
            </P>
            <H4 className="mt-2">Deduplication</H4>
            <P>
              But here&apos;s a twist: if someone changes just one character in a 500-line file, the <b>SHA</b> changes, but 99% of the snippets are probably identical. I
              don&apos;t want to create a bunch of <b>duplicate snippets</b> every time someone fixes a typo, because it would increase the probability of serving that specific
              snippet.
            </P>
            <P>
              So I also calculate a <b>SHA</b> for each individual snippet (after stripping <b>whitespace</b>, so formatting changes don&apos;t matter). If a newly parsed snippet
              has the same SHA as an existing one, I skip it. This keeps the <b>database</b> clean while still allowing new snippets to be added when meaningful changes happen.
            </P>
            <H4 className="mt-2">The Filtering Tradeoff</H4>
            <P>
              I also have to think about snippet <b>filtering</b>. I can set rules like &quot;only snippets between 10-50 lines&quot; or &quot;lines not longer than 70
              characters&quot;. But if I change those filters later, existing snippets won&apos;t magically disappear. I have two options:
            </P>
            <Ul>
              <Li>Leave old snippets in place and accept that the database will have snippets from different filter &quot;eras&quot;</Li>
              <Li>
                Wipe the entire snippet database and regenerate everything. This would mean losing all data tied to a specific snippet, but right now that consists only in sharable
                links, which are meant to be short-lived anyway.
              </Li>
            </Ul>
          </div>
        </VerticalReveal>
        <VerticalReveal delay={baseDelay * 5}>
          <div className="flex flex-col gap-2">
            <H3>What I Might Add Next</H3>
            <P>It works pretty well right now, but there are a few things I&apos;d like to tackle when I have time:</P>
            <Ul>
              <Li>Better UI. I&apos;m not a designer, and it shows. The current interface is functional but pretty bare-bones.</Li>
              <Li>Progress tracking. I&apos;d like to store your typing history over time so you can see if you&apos;re actually improving.</Li>
              <Li>More detailed stats. Right now you just get WPM and accuracy. I&apos;d love to break that down by language, snippet complexity, etc.</Li>
            </Ul>
          </div>
        </VerticalReveal>
      </div>
    </div>
  );
}

export default Page;

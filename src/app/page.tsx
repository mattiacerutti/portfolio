import VerticalReveal from "@/components/animations/vertical-reveal";
import H3 from "@/components/typography/h3";
import P from "@/components/typography/p";
import WorkExperience from "@/components/work-experience";
import {WORK_EXPERIENCES} from "@/data/work";
import Hero from "@/sections/hero";
import Link from "next/link";

export const metadata = {
  title: "Mattia Cerutti",
  description: "Mattia Cerutti's personal portfolio",
  keywords: ["Mattia Cerutti", "Web Developer", "Portfolio", "Fullstack Developer"],
};
export default function Home() {
  return (
    <>
      <Hero />

      <div className="flex flex-col justify-center w-full max-w-4xl gap-16 py-8 pb-20 mx-auto">
        <main className="flex flex-col">
          <div className="flex flex-col gap-8">
            <VerticalReveal trigger="scroll" startY={50} duration={2}>
              <H3>Work</H3>
              <P className="text-[var(--muted-foreground)]">
                My most relevant work experiences.&nbsp;
                <Link href="/work" className="transition-colors duration-400 text-[var(--muted-foreground)] hover:text-[var(--foreground)] underline decoration-[var(--muted-foreground)]/30">
                  Click here
                </Link>{" "}
                for the full list.
              </P>
            </VerticalReveal>
            <div className="flex flex-col gap-10">
              {WORK_EXPERIENCES.map(
                (experience, index) =>
                  experience.relevant && (
                    <VerticalReveal key={index} trigger="scroll" className="w-full" startY={50} duration={2}>
                      <WorkExperience
                        title={experience.title}
                        role={experience.role}
                        location={experience.location}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        technologies={experience.technologies}
                        responsibilities={experience.responsibilities}
                      />
                    </VerticalReveal>
                  )
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

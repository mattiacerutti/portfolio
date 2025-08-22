import VerticalReveal from "@/components/animations/vertical-reveal";
import H3 from "@/components/typography/h3";
import P from "@/components/typography/p";
import WorkExperience from "@/components/work-experience";
import {WORK_EXPERIENCES} from "@/data/work";
import Hero from "@/sections/hero";
import {CustomLink} from "@/components/typography/link";

export const metadata = {
  title: "Home | Mattia Cerutti",
  description: "Portfolio of Mattia Cerutti. Discover projects, work experience, and more.",
  keywords: ["Mattia Cerutti", "Web Developer", "Portfolio", "Fullstack Developer"],
  openGraph: {
    title: "Home | Mattia Cerutti",
    description: "Portfolio of Mattia Cerutti. Discover projects, work experience, and more.",
    url: "https://mattiacerutti.com/",
    siteName: "Mattia Cerutti Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Mattia Cerutti",
    description: "Portfolio of Mattia Cerutti. Discover projects, work experience, and more.",
  },
};
export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <div className="flex justify-center w-full px-6 mt-8">
        <div className="flex flex-col max-w-4xl gap-30">
          <div className="flex flex-col gap-8">
            <VerticalReveal trigger="scroll" startY={50} duration={2}>
              <H3>Work</H3>
              <P className="text-[var(--muted-foreground)]">
                My most relevant work experiences.&nbsp;
                <CustomLink
                  href="/work"
                  className="transition-colors duration-400 text-[var(--muted-foreground)] hover:text-[var(--foreground)] underline decoration-[var(--muted-foreground)]/30"
                >
                  Click here
                </CustomLink>{" "}
                for the full list.
              </P>
            </VerticalReveal>
            <div className="flex flex-col gap-10">
              {WORK_EXPERIENCES.map(
                (experience, index) =>
                  experience.relevant && (
                    <VerticalReveal key={index} trigger="scroll" className="w-full" startY={50} duration={2}>
                      <WorkExperience experience={experience} />
                    </VerticalReveal>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

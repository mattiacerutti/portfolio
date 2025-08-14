import P from "@/components/typography/p";
import Hero from "@/sections/hero";

export const metadata = {
  title: "Mattia Cerutti",
  description: "Mattia Cerutti's personal portfolio",
  keywords: ["Mattia Cerutti", "Web Developer", "Portfolio", "Fullstack Developer"],
};

export default function Home() {
  return (
    <>
      <Hero />

      <div className="flex flex-col justify-center w-full max-w-4xl gap-16 p-8 pb-20 mx-auto sm:p-20">
        <main className="flex flex-col">
          <div className="h-[600px]">
            <P>Content here</P>
          </div>
        </main>
      </div>
    </>
  );
}

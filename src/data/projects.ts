export interface IProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  preview?: string;
  readTime: string;
}

export function getProjectById(id: string) {
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) throw new Error(`Project with id ${id} not found`);
  return project;
}

export const PROJECTS: (IProject & {relevant: boolean})[] = [
  {
    id: "code-typer",
    title: "Code Typer",
    description: "Code typing game for developers. Practice real syntax, not lorem ipsum. Braces, functions, indentation: the way you actually type.",
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/mattiacerutti/code-typer",
    preview: "https://codetyper.mattiacerutti.com/",
    relevant: true,
    readTime: "5 min",
  },
  {
    id: "selected-work",
    title: "Selected Client Work",
    description: "A collection of client projects I built. Thoughtful design, smooth interactions, and real products used by real people every day.",
    technologies: ["React", "TailwindCSS", "GSAP", "Locomotive Scroll", "PHP"],
    relevant: true,
    readTime: "1 min",
  },
];

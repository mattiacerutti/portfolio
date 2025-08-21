export interface IProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  preview: string;
}

export function getProjectById(id: string) {
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) throw new Error(`Project with id ${id} not found`);
  return project;
}

export const PROJECTS: IProject[] = [
  {
    id: "code-typer",
    title: "Code Typer",
    description: "A typing game to improve your coding skills.",
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/mattiacerutti/code-typer",
    preview: "https://code-typer.vercel.app/",
  },
];

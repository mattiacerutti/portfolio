export interface IWorkExperience {
  title: string;
  role: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  technologies: string[];
  responsibilities: string[];
}

export const WORK_EXPERIENCES: (IWorkExperience & {relevant: boolean})[] = [
  {
    title: "Novaidea Creative Resources",
    role: "Fullstack Developer, Contractor",
    location: "Remote",
    startDate: new Date("2023-05"),
    endDate: new Date("2025-01"),
    technologies: ["React", "TailwindCSS", "MySQL", "PHP", "CI/CD"],
    responsibilities: [
      "Built 4+ full-stack modular websites. Implemented SSR, multi-language support and JSON-driven dynamic content updates.",
      "Designed and implemented scalable MySQL databases, optimizing data management and website performance resulting in a 20% reduction in load times.",
      "Set up CI/CD pipelines to automate deployments of preview and production environments, reducing manual deployment time and improving release reliability",
      "Collaborated with a team of 5+ people through regular reviews and meetings.",
    ],
    relevant: true,
  },
  {
    title: "Estilos SRL",
    role: "Software Engineer, Internship",
    location: "Venice, Italy",
    startDate: new Date("2022-05"),
    endDate: new Date("2022-06"),
    technologies: ["Python", "MySQL"],
    responsibilities: [
      "Developed an automation tool for formatting and printing company documents from a database streamlining the process for 15+ employees, reducing error rates and improving output consistency across 4 departments.",
      "Collaborated within a team to diagnose and resolve existing bugs in the automation processes."
    ],
    relevant: false,
  },
];

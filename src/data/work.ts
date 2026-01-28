export interface IWorkExperience {
  title: string;
  role: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  technologies: string[];
  description: string;
  logo: string;
}

export const WORK_EXPERIENCES: (IWorkExperience & {relevant: boolean})[] = [
  {
    title: "Amazon Web Services (AWS)",
    role: "Software Engineer, Internship",
    location: "Dublin, Ireland",
    startDate: new Date("2025-06"),
    endDate: new Date("2025-09"),
    technologies: ["Java", "AWS S3", "AWS ECS", "AWS CloudWatch", "CI/CD"],
    description:
      "Built and improved an event-driven pipeline analysis service to accelerate a VP-visible JDK migration, delivering daily insights for ~100K CI/CD pipelines, cutting runtime 50%, and automating operations with AWS workflows and observability.",
    relevant: true,
    logo: "/aws.png",
  },
  {
    title: "Novaidea Creative Resources",
    role: "Fullstack Developer, Contractor",
    location: "Remote",
    startDate: new Date("2023-03"),
    endDate: new Date("2025-01"),
    technologies: ["React", "TailwindCSS", "MySQL", "PHP", "CI/CD"],
    description:
      "Delivered 8+ websites for multiple clients with SSR, multiple languages and 3D/AR features. Designed scalable MySQL schemas and automated CI/CD to cut deployments to under 2 minutes while leading code quality and mentoring teammates.",
    relevant: true,
    logo: "/novaidea.png",
  },
  {
    title: "Estilos SRL",
    role: "Software Engineer, Internship",
    location: "Venice, Italy",
    startDate: new Date("2022-05"),
    endDate: new Date("2022-06"),
    technologies: ["Python", "MySQL"],
    description:
      "Built a Python/MySQL document automation tool that standardized printing for 15+ staff across 4 departments, reduced errors, and improved output consistency while helping resolve legacy automation bugs.",
    relevant: false,
    logo: "/estilos.png",
  },
];

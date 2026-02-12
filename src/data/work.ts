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
      "Worked on a VP-visible JDK migration projected to save $10M+ across the company. Built an event-driven analysis service with EventBridge, Step Functions and ECS Fargate that processed ~100K CI/CD pipelines daily. Cut runtime by 50% and eliminated manual on-call work with automated workflows and CloudWatch dashboards.",
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
      "Built 8+ production websites with React, PHP and Tailwind: everything from landing pages to 3D product configurators with AR previews. Set up CI/CD that cut deployment time by 90%. Mentored 2 developers and designed database schemas that made multi-language support actually manageable.",
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
      "Built a Python/MySQL tool that automated document formatting and printing for 15+ people across 4 departments. Cut down errors and inconsistent output while fixing 10+ legacy bugs in the existing automation system.",
    relevant: false,
    logo: "/estilos.png",
  },
];

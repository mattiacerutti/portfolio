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
    title: "Amazon Web Services (AWS)",
    role: "Software Development Engineer, Internship",
    location: "Dublin, Ireland",
    startDate: new Date("2025-06"),
    endDate: new Date("2025-09"),
    technologies: ["Java", "AWS S3", "AWS ECS", "AWS CloudWatch", "CI/CD"],
    responsibilities: [
      "Contributed to a company-wide JDK migration campaign with VP-level visibility, projected to save $10M+ across 3K+ pipelines, by porting and automating an existing data aggregation and analysis tool.",
      "Enabled automated migration of ~100K CI/CD pipelines by delivering daily analysis, identifying migration needs and supplying data powering code-change automation, reducing manual effort for engineers across the whole company.",
      "Designed and deployed an event-driven AWS workflow (EventBridge, Step Functions, ECS Fargate, CloudWatch) with automated retries, alarms and dashboards tracking 10+ metrics, eliminating manual on-call execution and ensuring reliable, observable operation of the pipeline analysis service.",
      "Optimized the aggregation logic to cut runtime by 50% and resolved a critical API dependency by coordinating with the owning team, enabling a successful and cheaper integration of the automated workflow.",
    ],
    relevant: true,
  },
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
      "Collaborated within a team to diagnose and resolve existing bugs in the automation processes.",
    ],
    relevant: false,
  },
];

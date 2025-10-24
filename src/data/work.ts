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
      "Enabled the migration of ~100K CI/CD pipelines by delivering daily analysis, identifying migration needs and supplying data powering code-change automation, reducing manual effort for engineers across the whole company.",
      "Designed and deployed an event-driven AWS workflow (EventBridge, Step Functions, ECS Fargate, CloudWatch) with auto retries, alarms and dashboards tracking 10+ metrics, eliminating manual on-call execution and ensuring reliable, observable operation of the pipeline analysis service.",
      "Optimized the aggregation logic to cut runtime by 50% and resolved a critical API dependency by coordinating with the owning team, enabling a successful and cheaper integration of the automated workflow.",
    ],
    relevant: true,
  },
  {
    title: "Novaidea Creative Resources",
    role: "Fullstack Developer, Contractor",
    location: "Remote",
    startDate: new Date("2023-03"),
    endDate: new Date("2025-01"),
    technologies: ["React", "TailwindCSS", "MySQL", "PHP", "CI/CD"],
    responsibilities: [
      "Delivered 8+ front-end and full-stack websites using React, PHP, and Tailwind, featuring SSR, internationalization, and advanced functionality such as 3D rendering and AR product previews.",
      "Structured scalable MySQL databases that improved data consistency and enabled multi-language support, easing future CMS adoption.",
      "Set up CI/CD pipelines automating preview and production deployments, cutting manual deployment time by ~90% (from ~20 min to <2 min).",
      "Owned code architecture and quality, mentoring 2 developers and collaborating with 5+ cross-functional teammates to deliver solutions for 4+ clients.",
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

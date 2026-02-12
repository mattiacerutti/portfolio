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
      "Worked on a <b>VP-visible</b> JDK migration projected to save <b>$10M+</b> across the company. Built an event-driven analysis service with <b>EventBridge</b>, <b>Step Functions</b> and <b>ECS Fargate</b> that processed <b>~100K CI/CD pipelines</b> daily. Cut runtime by <b>50%</b> and eliminated manual on-call work with automated workflows and <b>CloudWatch</b> dashboards.",
    relevant: true,
    logo: "/aws.png",
  },
  {
    title: "Novaidea Creative Resources",
    role: "Fullstack Developer, Contractor",
    location: "Remote",
    startDate: new Date("2023-03"),
    endDate: new Date("2025-01"),
    technologies: ["React", "Tailwind", "MySQL", "PHP", "CI/CD"],
    description:
      "Built <b>8+</b> production websites with <b>React</b>, <b>PHP</b> and <b>Tailwind</b>: everything from landing pages to 3D product configurators with AR previews. Set up CI/CD that cut deployment time by <b>90%</b>. Mentored <b>2</b> developers and designed database schemas that made multi-language support actually manageable.",
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
      "Built a <b>Python/MySQL</b> tool that automated document formatting and printing for <b>15+</b> people across <b>4</b> departments. Cut down errors and inconsistent output while fixing legacy bugs in the existing automation system.",
    relevant: false,
    logo: "/estilos.png",
  },
];

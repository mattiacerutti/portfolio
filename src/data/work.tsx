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
    title: "AWS, Language & Library Foundations",
    role: "Software Engineer",
    location: "Dublin, Ireland",
    startDate: new Date("2025-06-01"),
    technologies: ["Java", "Spring", "AWS"],
    responsibilities: [
      "Architected a distributed caching solution using Amazon ElastiCache, reducing average API response time by 40% and cutting database load by 55%.",
      "Developed a cross-service authentication module enabling secure, low-latency communication between 15+ internal microservices.",
      "Implemented serverless ETL pipelines with AWS Lambda and Amazon S3, processing over 1.2TB of daily data with near-real-time availability.",
      "Optimized a mission-critical retail service handling 500MM+ requests/day, improving throughput by 18%, reducing CPU utilization by 22%, and cutting latency by 20%.",
      "Mentored 3 junior developers, leading weekly code reviews and pair-programming sessions to improve code quality and team productivity.",
    ],
    relevant: true,
  },
  {
    title: "Google, Cloud Platform",
    role: "Cloud Engineer",
    location: "Dublin, Ireland",
    startDate: new Date("2024-06-01"),
    endDate: new Date("2025-05-01"),
    technologies: ["Python", "GCP", "Kubernetes"],
    responsibilities: ["Managed cloud infrastructure", "Optimized costs"],
    relevant: false,
  },
  {
    title: "Microsoft, Azure",
    role: "DevOps Engineer",
    location: "Dublin, Ireland",
    startDate: new Date("2023-06-01"),
    endDate: new Date("2024-05-01"),
    technologies: ["TypeScript", "Azure", "Docker"],
    responsibilities: ["Automated deployments", "Monitored application performance"],
    relevant: true,
  },
];

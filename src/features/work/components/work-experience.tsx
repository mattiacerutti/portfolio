import H4 from "@/components/ui/typography/h4";
import P from "@/components/ui/typography/p";
import {IWorkExperience} from "@/features/work/data/work";
import TechCard from "@/features/shared/components/tech-card";
import Image from "next/image";

interface IWorkExperienceProps {
  experience: IWorkExperience;
}

export default function WorkExperience(props: IWorkExperienceProps) {
  const {experience} = props;
  const {title, role, location, startDate, endDate, technologies, description} = experience;

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
    }).format(date);
  };

  return (
    <div className="grid grid-cols-1 gap-1 md:grid-cols-[1fr_auto] md:gap-2">
      <div className="flex flex-row items-start gap-4 sm:items-center">
        <Image src={experience.logo} alt={`${title} logo`} width={60} height={60} className="h-12 w-12 rounded-md object-cover" draggable="false" />
        <div className="flex flex-col max-sm:gap-1">
          <H4 className="leading-[1.15] text-balance sm:leading-normal">{title}</H4>
          <span className="leading-[1.15] text-balance text-(--muted-foreground) sm:leading-normal">{role}</span>
        </div>
      </div>

      <div className="flex w-fit flex-col items-start gap-0.5 text-nowrap max-sm:mt-1 md:items-end">
        <P className="text-(--foreground)/90 max-md:text-sm! md:text-(--foreground)">
          {formatDate(startDate)} - {endDate ? formatDate(endDate) : "Present"}
        </P>
        <P className="text-(--foreground)/90 max-md:text-sm! md:text-(--muted-foreground)">{location}</P>
      </div>

      <div className="mt-1 flex flex-col gap-3.5 md:col-span-2 md:gap-5">
        <div className="flex flex-row flex-wrap gap-2 decoration-(--foreground)/20">
          {technologies.map((tech, index) => (
            <TechCard key={index} name={tech} />
          ))}
        </div>

        <P>{description}</P>
      </div>
    </div>
  );
}

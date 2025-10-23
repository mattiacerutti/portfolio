import React from "react";
import H4 from "../typography/h4";
import P from "../typography/p";
import {IWorkExperience} from "@/data/work";
import Ul from "../typography/ul";
import Li from "../typography/li";
import TechCard from "../ui/tech-card";

interface IWorkExperienceProps {
  experience: IWorkExperience;
}

export default function WorkExperience(props: IWorkExperienceProps) {
  const {experience} = props;
  const {title, role, location, startDate, endDate, technologies, responsibilities} = experience;

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
    }).format(date);
  };

  return (
    <div className="grid gap-0.5 md:gap-2 md:grid-cols-[1fr_auto] grid-cols-1">
      <div className="flex flex-col">
        <H4>{title}</H4>
        <span className="text-[var(--muted-foreground)]">{role}</span>
      </div>

      <div className="flex flex-wrap items-center max-md:italic max-md:gap-x-2 w-fit md:flex-col md:items-end text-nowrap">
        <P>
          {formatDate(startDate)} - {endDate ? formatDate(endDate) : "Present"}
        </P>
        <P className="visible md:hidden">•</P>
        <P className="md:!text-base  md:text-[var(--muted-foreground)]">{location}</P>
      </div>

      <div className="flex flex-col gap-5 mt-1 md:col-span-2">
        <div className="flex flex-row flex-wrap gap-2 decoration-[var(--foreground)]/20 max-md:mt-1">
          {technologies.map((tech, index) => (
            <TechCard key={index} name={tech} />
          ))}
        </div>

        <Ul>
          {responsibilities.map((responsibility, index) => (
            <Li key={index}>{responsibility}</Li>
          ))}
        </Ul>
      </div>
    </div>
  );
}

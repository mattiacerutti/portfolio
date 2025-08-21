import React from "react";
import H4 from "./typography/h4";
import P from "./typography/p";
import {IWorkExperience} from "@/data/work";
import Ul from "./typography/ul";
import Li from "./typography/li";

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
    <div className="flex flex-row justify-between gap-5">
      <div className="flex flex-col justify-between gap-4">
        <div className="flex flex-col">
          <H4>{title}</H4>
          <span className="text-[var(--muted-foreground)]">{role}</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="underline italic underline-offset-2 decoration-[var(--foreground)]/20">
            <P>Technologies: {technologies.join(", ")}</P>
          </div>

          <Ul>
            {responsibilities.map((responsibility, index) => (
              <Li key={index}>{responsibility}</Li>
            ))}
          </Ul>
        </div>
      </div>
      <div className="flex flex-col items-end text-nowrap">
        <P>
          {formatDate(startDate)} - {endDate ? formatDate(endDate) : "Present"}
        </P>
        <span className="text-[var(--muted-foreground)]">{location}</span>
      </div>
    </div>
  );
}

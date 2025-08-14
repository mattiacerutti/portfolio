import React from "react";
import H4 from "./typography/h4";
import P from "./typography/p";

interface IWorkExperienceProps {
  title: string;
  role: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  technologies: string[];
  responsibilities: string[];
}

export default function WorkExperience(props: IWorkExperienceProps) {
  const {title, role, location, startDate, endDate, technologies, responsibilities} = props;

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
          <span className="text-[var(--link-text)]">{role}</span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="underline italic underline-offset-2 decoration-[var(--foreground)]/20">
            <P>Technologies: {technologies.join(", ")}</P>
          </div>

          <ul className="pl-6 space-y-3 list-disc marker:text-[var(--foreground)]/40 marker:pl-10">
            {responsibilities.map((responsibility, index) => (
              <li className="pl-2" key={index}>
                <P>{responsibility}</P>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-end text-nowrap">
        <P>
          {formatDate(startDate)} - {endDate ? formatDate(endDate) : "Present"}
        </P>
        <span className="text-[var(--link-text)]">{location}</span>
      </div>
    </div>
  );
}

import React from "react";

interface ITechCardProps {
  tech: string;
}

function TechCard(props: ITechCardProps) {
  const {tech} = props;

  return <div className="rounded-md font-semibold text-xs text-[var(--foreground)]/80 bg-[var(--foreground)]/4 border border-[var(--foreground)]/20 px-2 py-1 w-fit">{tech}</div>;
}

export default TechCard;

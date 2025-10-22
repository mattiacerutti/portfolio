import React from "react";
import Button from "./button";

interface ITechCardProps {
  tech: string;
}

function TechCard(props: ITechCardProps) {
  const {tech} = props;

  return (
    <Button className="px-2 py-1.5 text-xs font-semibold" hover={false}>
      {tech}
    </Button>
  );
}

export default TechCard;

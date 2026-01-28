import React from "react";
import {twMerge} from "tailwind-merge";

type PProps = React.HTMLAttributes<HTMLParagraphElement>;

export default function P({children, className = "", ...props}: PProps) {
  return (
    <p className={twMerge("text-base sm:text-lg", className)} {...props}>
      {children}
    </p>
  );
}

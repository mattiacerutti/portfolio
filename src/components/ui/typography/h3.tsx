import React from "react";
import {twMerge} from "tailwind-merge";

type H3Props = React.HTMLAttributes<HTMLHeadingElement>;

export default function H3({children, className = "", ...props}: H3Props) {
  return (
    <h3 className={twMerge("scroll-m-20 text-xl font-semibold tracking-tight sm:text-2xl", className)} {...props}>
      {children}
    </h3>
  );
}

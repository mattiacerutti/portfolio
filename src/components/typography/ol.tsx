import React from "react";
import {twMerge} from "tailwind-merge";

export default function Ol({children, className = "", ...props}: React.HTMLAttributes<HTMLOListElement>) {
  return (
    <ol className={twMerge("list-decimal space-y-2 pl-6", className)} {...props}>
      {children}
    </ol>
  );
}

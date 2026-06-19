import React from "react";
import {twMerge} from "tailwind-merge";

export default function Blockquote({children, className = "", ...props}: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote className={twMerge("border-l-2 border-(--muted-foreground)/30 pl-4 text-(--muted-foreground) italic", className)} {...props}>
      {children}
    </blockquote>
  );
}

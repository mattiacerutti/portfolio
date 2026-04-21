import React from "react";
import {twMerge} from "tailwind-merge";

import P from "@/components/ui/typography/p";

export default function Li({children, className = "", ...props}: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className={twMerge("pl-2", className)} {...props}>
      <P>{children}</P>
    </li>
  );
}

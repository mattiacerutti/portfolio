import React from "react";
import P from "./p";

export default function Li({children, ...props}: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className="pl-2" {...props}>
      <P>{children}</P>
    </li>
  );
}

import React from "react";

type H4Props = React.HTMLAttributes<HTMLHeadingElement>;

export default function H4({children, className = "", ...props}: H4Props) {
  return (
    <h4 className={`scroll-m-20 text-lg font-semibold tracking-tight sm:text-xl ${className}`} {...props}>
      {children}
    </h4>
  );
}

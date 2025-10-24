import React from "react";

type H1Props = React.HTMLAttributes<HTMLHeadingElement>;

export default function H1({children, className = "", ...props}: H1Props) {
  return (
    <h1 className={`scroll-m-20 text-4xl font-bold tracking-tight text-balance sm:text-5xl ${className}`} {...props}>
      {children}
    </h1>
  );
}

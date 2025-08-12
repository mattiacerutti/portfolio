import React from "react";
import CometBackground from "./comet-background";

export default function Hero() {
  return (
    <CometBackground>
      <div className="flex items-center justify-center w-full h-screen">
        <h1>
          <span className="text-4xl font-bold text-foreground">hi, I&apos;m Mattia 👋</span>
        </h1>
      </div>
    </CometBackground>
  );
}
  
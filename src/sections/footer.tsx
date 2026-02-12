"use client";

import React from "react";
import {RiComputerLine} from "react-icons/ri";
import {FiMoon, FiSun} from "react-icons/fi";
import {useTheme} from "next-themes";
import {useSound} from "@/hooks/useSound";
import P from "@/components/ui/typography/p";

export default function Footer() {
  const {setTheme, resolvedTheme, theme} = useTheme();
  const {init, play} = useSound("/switch.mp3", 0.5);

  const toggleTheme = async () => {
    changeTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const changeTheme = async (newTheme: string) => {
    if (newTheme === theme) return;

    await init();
    play();
    setTheme(newTheme);
  };

  return (
    <footer className="mt-25 mb-5 flex w-full max-w-4xl items-center justify-between text-gray-500 max-lg:px-6 md:mt-35 md:mb-10">
      <P>&copy; {new Date().getFullYear()}</P>
      <div className="flex items-center justify-end gap-4">
        <button
          suppressHydrationWarning
          className={`transition duration-400 ${theme === "system" ? "cursor-default opacity-50" : "cursor-pointer hover:text-(--foreground)"}`}
          onClick={() => changeTheme("system")}
          aria-disabled={theme === "system"}
          aria-label="Use system theme preference"
          title="Use system theme"
        >
          <RiComputerLine className="h-5 w-5" />
        </button>
        <button
          className="inline-flex cursor-pointer items-center justify-center leading-none transition duration-400 hover:text-(--foreground)"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          <span className="relative block h-5 w-5 shrink-0">
            <FiSun className="pointer-events-none absolute inset-0 h-5 w-5 origin-center scale-100 rotate-0 opacity-100 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] in-data-[theme=dark]:scale-90 in-data-[theme=dark]:rotate-[-60deg] in-data-[theme=dark]:opacity-0" />
            <FiMoon className="pointer-events-none absolute inset-0 h-5 w-5 origin-center scale-90 rotate-[60deg] opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] in-data-[theme=dark]:scale-100 in-data-[theme=dark]:rotate-0 in-data-[theme=dark]:opacity-100" />
            <span className="sr-only">Toggle theme</span>
          </span>
        </button>
      </div>
    </footer>
  );
}

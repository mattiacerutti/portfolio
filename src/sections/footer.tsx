"use client";

import React, {useEffect, useState} from "react";
import {RiComputerLine} from "react-icons/ri";
import {FiMoon, FiSun} from "react-icons/fi";
import {useTheme} from "next-themes";
import {useSound} from "@/hooks/useSound";
import P from "@/components/ui/typography/p";

export default function Footer() {
  const {setTheme, resolvedTheme, theme} = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const {init, play} = useSound("/switch.mp3", 0.5);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = async () => {
    changeTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const changeTheme = async (newTheme: string) => {
    if (!isMounted) return;
    if (newTheme === theme) return;

    await init();
    play();
    setTheme(newTheme);
  };

  return (
    <footer className="mt-25 mb-5 flex w-full max-w-4xl items-center justify-between text-gray-500 max-lg:px-6 md:mt-35 md:mb-10">
      <P>&copy; {new Date().getFullYear()}</P>
      {isMounted && (
        <div className="flex items-center justify-end gap-4">
          <button
            className={`transition duration-400 ${theme === "system" ? "opacity-50" : "cursor-pointer hover:text-[var(--foreground)]"}`}
            onClick={() => changeTheme("system")}
            aria-label="Use system theme preference"
            title="Use system theme"
          >
            <RiComputerLine className="h-5 w-5" />
          </button>
          <button
            className="inline-flex cursor-pointer items-center justify-center leading-none transition duration-400 hover:text-[var(--foreground)]"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <span className="relative block h-5 w-5 shrink-0">
              <FiSun
                className={
                  "pointer-events-none absolute inset-0 h-5 w-5 origin-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                  (resolvedTheme === "dark" ? "scale-90 rotate-[-60deg] opacity-0" : "scale-100 rotate-0 opacity-100")
                }
              />
              <FiMoon
                className={
                  "pointer-events-none absolute inset-0 h-5 w-5 origin-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                  (resolvedTheme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-90 rotate-[60deg] opacity-0")
                }
              />
              <span className="sr-only">{resolvedTheme === "dark" ? "Switch to light" : "Switch to dark"}</span>
            </span>
          </button>
        </div>
      )}
    </footer>
  );
}

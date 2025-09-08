"use client";

import React, {useEffect, useState} from "react";
import {RiComputerLine} from "react-icons/ri";
import {FiMoon, FiSun} from "react-icons/fi";
import {useTheme} from "next-themes";
import {useSound} from "@/hooks/useSound";

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
    <footer className="flex items-center justify-between w-full max-w-4xl mb-5 md:mb-10 mt-25 md:mt-35 max-lg:px-6">
      <p className="text-base text-gray-500">&copy; {new Date().getFullYear()}</p>
      {isMounted && (
        <div className="flex items-center justify-end gap-4">
          <button className="text-gray-500 transition cursor-pointer hover:text-[var(--foreground)] duration-400" onClick={() => changeTheme("system")}>
            <RiComputerLine className="w-5 h-5" />
          </button>
          <button
            className="inline-flex items-center justify-center leading-none text-gray-500 transition cursor-pointer hover:text-[var(--foreground)] duration-400"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <span className="relative block w-5 h-5 shrink-0">
              <FiSun
                className={
                  "absolute inset-0 w-5 h-5 origin-center pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                  (resolvedTheme === "dark" ? "opacity-0 rotate-[-60deg] scale-90" : "opacity-100 rotate-0 scale-100")
                }
              />
              <FiMoon
                className={
                  "absolute inset-0 w-5 h-5 origin-center pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] " +
                  (resolvedTheme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-[60deg] scale-90")
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

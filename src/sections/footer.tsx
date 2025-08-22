"use client";

import React, {useEffect, useState} from "react";
import {FiMoon} from "react-icons/fi";
import {FiSun} from "react-icons/fi";
import {RiComputerLine} from "react-icons/ri";
import {useTheme} from "next-themes";

export default function Footer() {
  const {setTheme, resolvedTheme} = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");
  const setSystemTheme = () => setTheme("system");
  return (
    <footer className="flex items-center justify-between w-full max-w-4xl mb-5 md:mb-10 mt-25 md:mt-35 max-lg:px-6">
      <p className="text-base text-gray-500">&copy; {new Date().getFullYear()}</p>
      {isMounted && (
        <div className="flex items-center justify-end gap-4">
          <button className="text-gray-500 transition cursor-pointer hover:text-[var(--foreground)] duration-400" onClick={setSystemTheme}>
            <RiComputerLine className="w-5 h-5" />
          </button>
          <button className="text-gray-500 transition cursor-pointer hover:text-[var(--foreground)] duration-400" onClick={toggleTheme}>
            {resolvedTheme === "dark" ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
        </div>
      )}
    </footer>
  );
}

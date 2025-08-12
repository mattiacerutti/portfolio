"use client";

import React from "react";
import {FiMoon} from "react-icons/fi";
import {FiSun} from "react-icons/fi";
import {useTheme} from "next-themes";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  return (
    <footer className="flex items-center justify-between w-full">
      <p className="text-base text-gray-500">&copy; {new Date().getFullYear()}</p>
      {isMounted && (
        <button className="text-gray-500 transition cursor-pointer hover:text-[var(--link-hover)] duration-400" onClick={toggleTheme}>
          {theme === "dark" ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
        </button>
      )}
    </footer>
  );
}

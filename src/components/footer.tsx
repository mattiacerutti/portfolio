import React from "react";
import { FiMoon } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between w-full">
      <p className="text-base text-gray-500">
        &copy; {new Date().getFullYear()}
      </p>
      <button className="text-gray-500 transition cursor-pointer hover:text-white duration-400">
        <FiMoon className="w-5 h-5" />
      </button>
    </footer>
  );
}


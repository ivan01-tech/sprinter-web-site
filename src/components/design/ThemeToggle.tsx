// src/components/ThemeToggle.tsx
"use client";

import { useTheme } from "@/contexts/Themecontext";
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-yellow-500 dark:text-yellow-300 shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FaMoon className="text-lg" />
      ) : (
        <FaSun className="text-lg" />
      )}
    </button>
  );
};

export default ThemeToggle;

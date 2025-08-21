"use client";
import React, { useEffect, useState } from "react";
import { DayIcon, NightIcon } from "./icons";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  console.log("theme", theme);
  return (
    <React.Fragment>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer"
      >
        {theme === "dark" ? (
          <NightIcon className="stroke-black dark:stroke-white" />
        ) : (
          <DayIcon className="stroke-black dark:stroke-white" />
        )}
      </button>
    </React.Fragment>
  );
};

export default ThemeToggle;

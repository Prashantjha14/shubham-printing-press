"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const ThemeModeFooter = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const Mode = JSON.parse(localStorage.getItem("darkMode") || "false");

    setDarkMode(Mode);
    if (Mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };
  return (
    <div className="border-y-2">
      <Button variant="outline" onClick={toggleDarkMode} className="m-3">
        {darkMode ? "💡 Light Mode" : "🌙 Dark Mode"}
      </Button>
    </div>
  );
};

export default ThemeModeFooter;

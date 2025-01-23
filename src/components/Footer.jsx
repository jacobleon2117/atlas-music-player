import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Footer() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <footer className="flex flex-shrink-0 items-center justify-between p-8">
      <span className="text-primary-dark dark:text-white">
        &copy; {new Date().getFullYear()} Atlas School
      </span>
      <button
        onClick={() => setIsDark(!isDark)}
        className="flex items-center gap-2 rounded-full border border-primary-sage bg-white px-3 py-1 text-primary-dark transition-colors hover:bg-primary-light dark:border-white dark:bg-[#1F1F22] dark:text-white dark:hover:bg-primary-sage/20"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? (
          <>
            <Sun className="h-4 w-4" /> Light
          </>
        ) : (
          <>
            <Moon className="h-4 w-4" /> Dark
          </>
        )}
      </button>
    </footer>
  );
}

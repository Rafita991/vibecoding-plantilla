"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const STORAGE_KEY = "compulink-theme";

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "light") {
    root.classList.add("light");
  } else {
    root.classList.remove("light");
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const { labelLight, labelDark } = siteConfig.theme;

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const initial = stored === "light" ? "light" : "dark";
    applyTheme(initial);
    setTheme(initial);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    setTheme(next);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? labelLight : labelDark}
      title={isDark ? labelLight : labelDark}
      className="p-2 rounded-full border border-slate-700 text-slate-300 hover:text-green-300 hover:border-green-400/50 transition-colors light:border-slate-300 light:text-slate-600 light:hover:text-green-700 light:hover:border-green-500/50"
    >
      {isDark ? (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}

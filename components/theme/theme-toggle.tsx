"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";
type ThemeMode = Theme | "system";

const THEME_COOKIE_KEY = "theme";

const getSystemTheme = (): Theme => {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

const setThemeCookie = (theme: Theme) => {
  document.cookie = `${THEME_COOKIE_KEY}=${theme}; Max-Age=31536000; Path=/; SameSite=Lax`;
};

type ThemeToggleProps = {
  initialTheme?: Theme;
};

export function ThemeToggle({ initialTheme }: ThemeToggleProps) {
  const [mode, setMode] = useState<ThemeMode>(initialTheme ?? "system");

  const handleToggle = () => {
    const currentTheme = mode === "system" ? getSystemTheme() : mode;
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";
    setMode(nextTheme);
  };

  useEffect(() => {
    if (mode === "system") {
      document.documentElement.removeAttribute("data-theme");
      return;
    }

    document.documentElement.setAttribute("data-theme", mode);
    setThemeCookie(mode);
  }, [mode]);

  const buttonLabel =
    mode === "system" ? "Tema: Sistem" : mode === "dark" ? "Tema: Koyu" : "Tema: Açık";

  const resetToSystem = () => {
    setMode("system");
    document.cookie = `${THEME_COOKIE_KEY}=; Max-Age=0; Path=/; SameSite=Lax`;
  };

  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={handleToggle}
        className="inline-flex h-9 cursor-pointer items-center rounded-full border border-token px-3 text-xs font-semibold text-token-secondary transition hover:border-token-strong hover:text-token"
        aria-label="Temayı değiştir"
      >
        {buttonLabel}
      </button>
      <button
        type="button"
        onClick={resetToSystem}
        className="inline-flex h-9 cursor-pointer items-center rounded-full border border-token px-3 text-xs font-semibold text-token-secondary transition hover:border-token-strong hover:text-token"
        aria-label="Sistem temasına dön"
      >
        Sistem
      </button>
    </div>
  );
}

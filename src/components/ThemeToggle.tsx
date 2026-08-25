import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

type Theme = "dark" | "light";

const storageKey = "resume-theme";
const darkThemeColor = "#171717";
const lightThemeColor = "#ffffff";
const themeChangeEvent = "resume-theme-change";

const getSavedTheme = (): Theme | undefined => {
  try {
    const theme = window.localStorage.getItem(storageKey);

    return theme === "dark" || theme === "light" ? theme : undefined;
  } catch {
    return undefined;
  }
};

const getSystemTheme = (): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? darkThemeColor : lightThemeColor);
  window.dispatchEvent(new Event(themeChangeEvent));
};

const getThemeSnapshot = () => document.documentElement.classList.contains("dark");

const subscribeToTheme = (onStoreChange: () => void) => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const syncTheme = () => applyTheme(getSavedTheme() ?? getSystemTheme());
  const onSystemThemeChange = () => {
    if (!getSavedTheme()) {
      syncTheme();
    }
  };
  const onStorageChange = (event: StorageEvent) => {
    if (event.key === storageKey) {
      syncTheme();
    }
  };

  window.addEventListener(themeChangeEvent, onStoreChange);
  window.addEventListener("storage", onStorageChange);
  mediaQuery.addEventListener("change", onSystemThemeChange);

  return () => {
    window.removeEventListener(themeChangeEvent, onStoreChange);
    window.removeEventListener("storage", onStorageChange);
    mediaQuery.removeEventListener("change", onSystemThemeChange);
  };
};

export const ThemeToggle = ({ label }: { label: string }) => {
  const isDark = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, () => false);

  const toggleTheme = () => {
    const nextTheme: Theme = document.documentElement.classList.contains("dark") ? "light" : "dark";

    try {
      window.localStorage.setItem(storageKey, nextTheme);
    } catch {
      // The theme still works when storage is unavailable.
    }

    applyTheme(nextTheme);
  };

  return (
    <button
      aria-label={label}
      aria-pressed={isDark}
      className="fixed top-5 right-5 z-20 inline-flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground opacity-70 shadow-sm transition-[color,background-color,opacity] hover:bg-muted hover:text-foreground hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background print:hidden"
      onClick={toggleTheme}
      title={label}
      type="button"
    >
      {isDark ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />}
    </button>
  );
};

import { createContext, useContext, useEffect, useRef, useState } from "react";

const isNode = typeof window === "undefined";

export type Theme = "light" | "dark" | undefined;

interface ContextProps {
  theme: Theme;
  osTheme: Theme;
  localTheme: Theme;
  pickTheme: (t: Theme) => void;
}

const darkThemePrefers = "(prefers-color-scheme: dark)";
const getDarkThemeMatch = () =>
  !isNode ? window.matchMedia(darkThemePrefers) : null;

const getOSTheme = () => (getDarkThemeMatch()?.matches ? "dark" : "light");

const getTheme = (storage: Storage): Theme => {
  if (isNode || !storage) return undefined;
  return storage.getItem("theme") as Theme;
};

const saveThemeToStorage = (storage: Storage, theme: Theme): void => {
  if (theme) storage.setItem("theme", theme);
  else storage.removeItem("theme");
};

const applyThemeClass = (el: HTMLElement, theme: Theme): void => {
  const { classList } = el;

  if (theme === "dark") classList.add("dark");
  else classList.remove("dark");
};

export const ThemeContext = createContext<ContextProps>({} as any);

const useOsTheme = (): Theme => {
  const [osTheme, setOsTheme] = useState<Theme>(getOSTheme());
  const pickOsTheme = () => {
    setOsTheme(getOSTheme());
  };

  useEffect(() => {
    getDarkThemeMatch()?.addEventListener("change", pickOsTheme);
    return getDarkThemeMatch()?.removeEventListener("change", pickOsTheme);
  }, []);

  return osTheme;
};

export const useTheme = () => {
  const initialized = useRef<boolean>(false);
  const defaultTheme = isNode ? undefined : getTheme(window.localStorage);
  const [localTheme, setLocalTheme] = useState<Theme>(defaultTheme);
  const osTheme = useOsTheme();

  const pickTheme = (theme?: Theme) => {
    const newTheme = theme || getOSTheme();
    saveThemeToStorage(localStorage, theme);
    applyThemeClass(document.documentElement, newTheme);
    setLocalTheme(theme);
  };

  useEffect(() => {
    if (!localTheme) applyThemeClass(document.documentElement, osTheme);
  }, [osTheme, localTheme]);

  if (!initialized.current && !isNode) {
    applyThemeClass(document.documentElement, localTheme || osTheme);
    initialized.current = true;
  }

  return { theme: localTheme || osTheme, localTheme, osTheme, pickTheme };
};

export const useThemeContext = () => useContext(ThemeContext);

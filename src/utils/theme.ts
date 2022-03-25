import { createContext, useContext, useEffect, useRef, useState } from "react";

export const isNode = typeof window === "undefined";

export type Theme = "light" | "dark" | undefined | null;

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
  return (storage.getItem("theme") || undefined) as Theme;
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
  const defaultTheme = isNode ? null : getTheme(window.localStorage);
  const [localTheme, setLocalTheme] = useState<Theme>(defaultTheme);
  const osTheme = useOsTheme();
  const theme = !localTheme ? osTheme : localTheme;

  const pickTheme = (theme?: Theme) => {
    const newTheme = theme || getOSTheme();
    saveThemeToStorage(localStorage, theme);
    applyThemeClass(document.body, newTheme);
    setLocalTheme(theme);
  };

  if (!initialized.current && !isNode) {
    applyThemeClass(document.body, localTheme || osTheme);
    initialized.current = true;
  }

  useEffect(() => {
    if (!localTheme) applyThemeClass(document.body, osTheme);
  }, [osTheme, localTheme]);


  return { theme, localTheme, osTheme, pickTheme };
};

export const useThemeContext = () => useContext(ThemeContext);

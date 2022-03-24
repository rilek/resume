import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ButtonProps } from "src/components/Common/Common";
import { Theme } from "src/utils/theme";
import { SystemThemeIcon, LightThemeIcon, DarkThemeIcon } from "../Icons";

export interface ThemeButtonProps extends ButtonProps {
  theme: Theme;
  active?: boolean;
}

export const useGetThemeButtons = () => {
  const { t } = useTranslation("navigation");
  const themeButtons = useMemo(
    () => [
      {
        theme: undefined,
        children: <SystemThemeIcon />,
        title: t("systemTheme.title"),
      },
      {
        theme: "light",
        children: <LightThemeIcon />,
        title: t("lightTheme.title"),
      },
      {
        theme: "dark",
        children: <DarkThemeIcon />,
        title: t("darkTheme.title"),
      },
    ],
    [t]
  ) as ThemeButtonProps[];

  return themeButtons;
};
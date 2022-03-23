import { useBlendContext } from "../../Blend/blend";
import { Button, ButtonProps } from "../../Common/Common";
import { Theme, useThemeContext } from "../../../utils/theme";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ButtonGroup } from "./ButtonGroup";
import { SystemThemeIcon, LightThemeIcon, DarkThemeIcon } from "./Icons";

interface ThemeButtonProps extends ButtonProps {
  theme: Theme;
  active?: boolean;
}

const ThemeButton = ({ theme: targetTheme, ...rest }: ThemeButtonProps) => {
  const {
    theme: contextTheme,
    osTheme,
    localTheme,
    pickTheme,
  } = useThemeContext();
  const { trigger } = useBlendContext();

  const onPickTheme = (
    targetTheme ? contextTheme === targetTheme : osTheme === contextTheme
  )
    ? () => pickTheme(targetTheme)
    : () => trigger({ onMiddle: () => pickTheme(targetTheme) });
  const onClick = localTheme !== targetTheme ? () => onPickTheme() : undefined;

  return (
    <Button
      onClick={onClick}
      active={targetTheme ? targetTheme === localTheme : !localTheme}
      {...rest}
    />
  );
};

export const ThemeButtons = () => {
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
  return <ButtonGroup data={themeButtons} renderer={ThemeButton} />;
};

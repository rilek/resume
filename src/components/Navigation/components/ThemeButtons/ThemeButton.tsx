import { useBlendContext } from "./../../../Blend/blend";
import { Button } from "./../../../Common/Common";
import { useThemeContext } from "../../../../utils/theme";
import { ThemeButtonProps } from "./utils";

export const ThemeButton = ({
  theme: targetTheme,
  ...rest
}: ThemeButtonProps) => {
  const {
    theme: contextTheme,
    osTheme,
    localTheme,
    pickTheme,
  } = useThemeContext();

  const { trigger } = useBlendContext();
  const isActive = targetTheme === localTheme;
  const isSameAsActive = targetTheme
    ? contextTheme === targetTheme
    : osTheme === contextTheme;

  const onPickTheme = isSameAsActive
    ? () => pickTheme(targetTheme)
    : () => trigger({ onMiddle: () => pickTheme(targetTheme) });

  return <Button onClick={onPickTheme} active={isActive} {...rest} />;
};

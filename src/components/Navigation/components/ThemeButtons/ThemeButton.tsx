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

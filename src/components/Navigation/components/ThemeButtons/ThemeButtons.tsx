import { ButtonGroup } from "../ButtonGroup";
import { useGetThemeButtons } from "./utils";
import { ThemeButton } from "./ThemeButton";

export const ThemeButtons = () => {
  const themeButtons = useGetThemeButtons();
  return <ButtonGroup data={themeButtons} renderer={ThemeButton} />;
};

import { ButtonGroup } from "../ButtonGroup";
import { LanguageButton } from "./LanguageButton";
import { useGetLanguageButtons } from "./utils";

export const LanguageButtons = () => {
  const buttons = useGetLanguageButtons();

  return <ButtonGroup data={buttons} renderer={LanguageButton} />;
};

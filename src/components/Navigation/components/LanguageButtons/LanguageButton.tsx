import { useTranslation } from "react-i18next";
import { useBlendContext } from "../../../Blend/blend";
import { Button } from "../../../Common/Common";
import { LanguageButtonProps } from "./utils";

export const LanguageButton = ({
  language: targetLanguage,
  ...rest
}: LanguageButtonProps) => {
  const { trigger } = useBlendContext();
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();

  const onPickLanguage = () =>
    trigger({ onMiddle: () => changeLanguage(targetLanguage) });
  const onClick =
    language !== targetLanguage ? () => onPickLanguage() : undefined;

  return (
    <Button onClick={onClick} active={language === targetLanguage} {...rest} />
  );
};

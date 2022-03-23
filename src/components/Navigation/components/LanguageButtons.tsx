import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useBlendContext } from "../../Blend/blend";
import { Button, ButtonProps } from "../../Common/Common";
import { ButtonGroup } from "./ButtonGroup";

interface LanguageButtonProps extends ButtonProps {
  language: string;
  active?: boolean;
}

const LanguageButton = ({
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

export const LanguageButtons = () => {
  const { t } = useTranslation("navigation");

  const languageButtons = useMemo(
    () => [
      {
        language: "pl",
        children: "PL",
        title: t("languagePl.title"),
      },
      {
        language: "en",
        children: "EN",
        title: t("languageEn.title"),
      },
    ],
    [t]
  ) as LanguageButtonProps[];

  return <ButtonGroup data={languageButtons} renderer={LanguageButton} />;
};

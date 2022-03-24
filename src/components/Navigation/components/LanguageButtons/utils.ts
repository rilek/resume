import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ButtonProps } from "src/components/Common/Common";

export interface LanguageButtonProps extends ButtonProps {
  language: string;
  active?: boolean;
}

export const useGetLanguageButtons = () => {
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

  return languageButtons;
};
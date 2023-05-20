import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="font-serif ">
      <h1 className="font-black text-4xl">{t("title")}</h1>
      <h2 className="text-xl">{t("subtitle")}</h2>
    </header>
  );
};

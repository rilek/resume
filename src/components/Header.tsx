import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  return (<header>
    <h1 className="font-black text-4xl">
      {t("title")}
    </h1>
    <h2 className="text-xl text-slate-700">{t("subtitle")}</h2>
  </header>)
}
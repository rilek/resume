import { getTranslation } from "@/locales/i18n";

export const Header = async () => {
  const { t } = await getTranslation("common");

  return (
    <header className="font-serif ">
      <h1 className="font-black text-4xl">{t("title")}</h1>
      <h2 className="text-xl">{t("subtitle")}</h2>
    </header>
  );
};

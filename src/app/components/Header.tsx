import { getTranslation } from "@/locales/i18n";

export const Header = async () => {
  const { t } = await getTranslation("common");

  return (
    <header className="font-serif ">
      <h1 className="text-4xl font-black">{t("title")}</h1>
      <h2 className="text-xl print:hidden">{t("subtitle")}</h2>
    </header>
  );
};

import { getTranslation } from "@/locales/i18n";
import type { Language } from "@/utils/constants";

export const Header = ({ lng }: { lng: Language }) => {
  const { t } = getTranslation(lng, "common");

  return (
    <header className="font-serif ">
      <h1 className="text-4xl font-black">{t("title")}</h1>
      <h2 className="text-xl print:hidden">{t("subtitle")}</h2>
    </header>
  );
};

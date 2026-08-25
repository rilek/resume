import { getTranslation } from "@/locales/i18n";
import type { Language } from "@/utils/constants";

export const Header = ({ lng }: { lng: Language }) => {
  const { t } = getTranslation(lng, "common");

  return (
    <header>
      <h1 className="text-4xl font-bold text-gray-950">{t("title")}</h1>
      <h2 className="text-xl">{t("subtitle")}</h2>
    </header>
  );
};

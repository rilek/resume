import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export const SEO = () => {
  const { t } = useTranslation();
  return (
    <Helmet
      title={`${t("title")} - ${t("subtitle")}`}
      htmlAttributes={{
        lang: "pl",
      }}
    />
  );
};

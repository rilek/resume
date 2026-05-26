import { getTranslation } from "@/locales/i18n";
import { fallbackLng, languages, type Language } from "@/utils/constants";

export const isRouteLanguage = (value: string): value is Language =>
  languages.includes(value as Language);

export const getRouteLanguage = (value?: string): Language =>
  value && isRouteLanguage(value) ? value : fallbackLng;

const getDirection = (lng: Language) => (lng === "en" || lng === "pl" ? "ltr" : "ltr");

export const setDocumentLanguage = (lng: Language) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
    document.documentElement.dir = getDirection(lng);
  }
};

export const getDocumentHead = (lng: Language) => {
  const { t } = getTranslation(lng, "common");
  const title = t("title");
  const description = t("subtitle");

  return {
    meta: [
      { title: `${title} | ${description}` },
      { name: "twitter:title", content: title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@site" },
      { name: "twitter:creator", content: "@creator" },
      { property: "og:title", content: title },
      { property: "og:type", content: "website" },
    ],
  };
};

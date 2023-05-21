import i18n, { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import pl from "./pl.json";
import en from "./en.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: { pl, en },
    debug: process.env.NODE_ENV === "development",
    lng: "en",
    defaultNS: "common",
    returnObjects: true,

    interpolation: { escapeValue: false },
  });

const initI18next = async () => {
  const instance = createInstance();

  await instance
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources: { pl, en },
      debug: process.env.NODE_ENV === "development",
      lng: "en",
      defaultNS: "common",
      returnObjects: true,

      interpolation: { escapeValue: false },
    });

  return instance;
};

export async function useTranslation2() {
  const i18n = await initI18next();

  return i18n;
}

export default i18n;

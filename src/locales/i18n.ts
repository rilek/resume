import i18n from "i18next";
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

export default i18n;

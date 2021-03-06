import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pl from "./pl.json";
import en from "./en.json";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources: { pl, en },
    debug: false,
    lng: "en",
    defaultNS: "common",
    ns: Object.keys(pl),
    returnObjects: true,

    interpolation: { escapeValue: false },
  });

export default i18n;

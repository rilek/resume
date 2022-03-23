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
    debug: true,
    fallbackLng: "pl",
    defaultNS: "common",
    ns: ["common", "sidebar", "experience", "education", "skills"],
    returnObjects: true,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
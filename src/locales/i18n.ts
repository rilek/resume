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
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
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

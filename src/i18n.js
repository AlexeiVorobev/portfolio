import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en";
import ruTranslation from "./locales/ru";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    useSuspense: false,
    debug: true,
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
    backend: {
      // Use local storage as the backend
      backend: 'localStorage',
    },
  });

export default i18n;

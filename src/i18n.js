import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEn from "./locales/en/translation.json";
import translationSp from "./locales/sp/translation.json";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "sp"],
    resources: {
      en: {
        translation: translationEn,
      },
      sp: {
        translation: translationSp,
      },
    },

    fallbackLng: "en",
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    react: { useSuspense: false },
    backend: {
      loadPath: "./locales/{{lng}}/translation.json",
    },
  });

// i18next
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     supportedLngs: ["en", "sp"],
//     fallbackLng: "en",
//     debug: false,
//     // Options for language detector
//     detection: {
//       order: ["path", "cookie", "htmlTag"],
//       caches: ["cookie"],
//     },
//     react: { useSuspense: false },
//     backend: {
//       loadPath: "./locales/{{lng}}/translation.json",
//     },
//   });

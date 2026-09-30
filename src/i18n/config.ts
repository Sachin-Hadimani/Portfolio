import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import ja from "./locales/ja/translation.json";

export const LANGUAGE_STORAGE_KEY = "portfolio-lang";
export const SUPPORTED_LANGUAGES = ["en", "ja"];

const detectBrowserLanguage = () =>
  navigator.languages?.some((lang) => lang.toLowerCase().startsWith("ja")) ||
  navigator.language?.toLowerCase().startsWith("ja")
    ? "ja"
    : "en";

const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
const initialLanguage =
  storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage)
    ? storedLanguage
    : detectBrowserLanguage();

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ja: { translation: ja },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

document.documentElement.lang = i18n.language;

i18n.on("languageChanged", (lng) => {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
  document.documentElement.lang = lng;
});

export default i18n;

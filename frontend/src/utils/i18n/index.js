import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import all the translations
import enHome from "./locales/en/home.json";
import enCommon from "./locales/en/common.json";
import enAbout from "./locales/en/about.json";
import enContact from "./locales/en/contact.json";

import haHome from "./locales/ha/home.json";

import arHome from "./locales/ar/home.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
export const LANGUAGES = [
  { key: "en", value: "English" },
  { key: "ar", value: "العربية" },
  { key: "ha", value: "Hausa" },
];
const resources = {
  en: {
    // translation: {
    //   welcomeMessage: "Welcome",
    // },
    home: enHome,
    common: enCommon,
    about: enAbout,
    contact: enContact,
  },
  ha: {
    // translation: {
    //   welcomeMessage: "Barka da zuwa",
    // },
    home: haHome,
    common: enCommon,
    about: enAbout,
    contact: enContact,
  },
  ar: {
    home: arHome,
    common: enCommon,
    about: enAbout,
    contact: enContact,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    ns: ["common", "home", "about", "contact"], // All namespaces ("common", "home", "about")
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

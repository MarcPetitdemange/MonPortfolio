import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fr from "./languages/fr.json";
import de from "./languages/de.json";
import en from "./languages/en.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: en
    },
    fr: {
        translation: fr
    },
    de: {
        translation: de,
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "fr",
        fallbackLng: "en",
        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;

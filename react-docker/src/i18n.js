import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import francais from "./translations/francais.json";
import english from "./translations/english.json";

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng: 'fr',
    resources: {
        en: { translation: english },
        fr: { translation: francais },
    }
});

export default i18n;
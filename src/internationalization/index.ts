import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// import languages
import en from './en';
// import ns2 from './en/ns2.json';
import tr from './tr';

export const resources = {
  en,
  tr,
} as const;

console.log(resources);

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'en',
    resources,
    // fallbackLng: 'en',
    // debug: true,
    // ns: ['ns1', 'ns2'], // namespace
  });

export default i18n;

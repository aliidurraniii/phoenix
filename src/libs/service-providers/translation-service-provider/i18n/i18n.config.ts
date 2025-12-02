import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { DEFAULT_LANGUAGE } from '@shared/constants';

import en from './locales/en.translations.json';
import de from './locales/de.translations.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    lng: DEFAULT_LANGUAGE,
    debug: false,
    supportedLngs: ['en', 'de'],
    interpolation: {
      escapeValue: true,
    },
  });

export default i18n;

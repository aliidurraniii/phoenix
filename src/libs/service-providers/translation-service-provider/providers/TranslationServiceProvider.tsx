import { I18nextProvider, useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import i18n from '../i18n/i18n.config';

import {
  TranslationServiceContext,
  type TranslationServiceContextProps,
} from './translationServiceContext';

export type TranslationServiceProviderProps = {
  children: React.ReactNode;
};

export const TranslationServiceProvider = ({ children }: TranslationServiceProviderProps) => {
  const { i18n: i18nInstance } = useTranslation();
  const [language, setLanguage] = useState(i18nInstance.language);

  const changeLanguage = (lng: string) => {
    i18nInstance.changeLanguage(lng);
    setLanguage(lng);
  };

  useEffect(() => {
    setLanguage(i18nInstance.language);
  }, [i18nInstance.language]);

  const contextValue: TranslationServiceContextProps = {
    language: language,
    changeLanguage: changeLanguage,
  };

  return (
    <TranslationServiceContext.Provider value={contextValue}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </TranslationServiceContext.Provider>
  );
};

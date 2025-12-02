import { useContext } from 'react';

import { TranslationServiceContext } from './translationServiceContext';

export const useTranslationServiceContext = () => {
  const context = useContext(TranslationServiceContext);

  if (!context) {
    throw new Error(
      'useTranslationServiceContext must be used within a TranslationServiceProvider',
    );
  }
  return context;
};

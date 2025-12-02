import { createContext } from 'react';

export type TranslationServiceContextProps = {
  language: string;
  changeLanguage: (lng: string) => void;
};

const defaultContext: Partial<TranslationServiceContextProps> = {};

export const TranslationServiceContext = createContext<TranslationServiceContextProps>(
  defaultContext as TranslationServiceContextProps,
);

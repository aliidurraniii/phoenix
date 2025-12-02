import { useTranslation } from 'react-i18next';

export const useTranslationService = () => {
  const { t } = useTranslation();
  return { t };
};

import {
  useTranslationServiceContext,
  useTranslationService,
} from '@libs/translation-service-provider';
import { useNavigate, Outlet } from '@libs/router';

export const ExampleData = () => {
  const { t } = useTranslationService();
  const { language } = useTranslationServiceContext();
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div>Loading...</div>
      </div>
      <h1>Example Data</h1>
      <h1>
        {t('language')}: {language}
      </h1>
      <Outlet />
      <button onClick={() => navigate('../2')}>Click me</button>
    </>
  );
};

export default ExampleData;

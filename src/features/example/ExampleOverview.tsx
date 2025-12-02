import {
  useTranslationServiceContext,
  useTranslationService,
} from '@libs/translation-service-provider';
import { useNavigate, Outlet } from '@libs/router';

export const ExampleOverview = () => {
  const { t } = useTranslationService();
  const { language } = useTranslationServiceContext();
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div>Loading...</div>
      </div>
      <h1>Example Overview</h1>
      <h1>
        {t('language')}: {language}
      </h1>
      <Outlet />
      <button onClick={() => navigate('data')}>Click me</button>
    </>
  );
};

export default ExampleOverview;

import {
  useTranslationServiceContext,
  useTranslationService,
} from '@libs/translation-service-provider';
import { useParams } from '@libs/router';
import { CookieService } from '@libs/cookie-service';

import { useGetExamples } from '../api';

export const ExampleDetail = () => {
  const { t } = useTranslationService();
  const { language } = useTranslationServiceContext();
  const { isLoading, isFetching } = useGetExamples({ onSuccess: () => {}, onError: () => {} });
  const { id } = useParams();
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div>
          Loading...{isFetching} {isLoading}
        </div>
      </div>
      <h1>Example Detail</h1>
      <button onClick={CookieService.openWidget}>Click me</button>
      <h1>
        {t('language')}: {language}
        {id}
      </h1>
    </>
  );
};

export default ExampleDetail;

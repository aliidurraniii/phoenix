import { ApiServiceProvider } from '@libs/api-service-provider';
import { TranslationServiceProvider } from '@libs/translation-service-provider';
import { BASE_URL } from '@shared/constants';
import { CookieService } from '@libs/cookie-service';

import { AppRoutes } from './routes';
import { AppProvider } from './providers';

function App() {
  CookieService.loadScript();
  return (
    <AppProvider>
      <ApiServiceProvider baseUrl={BASE_URL}>
        <TranslationServiceProvider>
          <AppRoutes />
        </TranslationServiceProvider>
      </ApiServiceProvider>
    </AppProvider>
  );
}

export default App;

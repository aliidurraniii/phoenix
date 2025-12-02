const API_KEY = import.meta.env.VITE_COOKIE_API_KEY;
const DOMAIN_ID = import.meta.env.VITE_COOKIE_DOMAIN_ID;
const SCRIPT_URL = `https://cloud.ccm19.de/app.js?apiKey=${API_KEY}&domain=${DOMAIN_ID}`;

export const CookieService = {
  loadScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.CCM) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = SCRIPT_URL;
      script.async = true;

      script.onload = () => {
        resolve();
      };

      script.onerror = () => reject(new Error('Failed to load script'));

      document.head.appendChild(script);
    });
  },

  openWidget(): boolean {
    window.CCM.openWidget();
    return false;
  },
};

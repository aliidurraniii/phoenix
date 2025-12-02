const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

const SCRIPT_SRC = MEASUREMENT_ID
  ? `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`
  : '';

function scriptAlreadyInjected(): boolean {
  if (!MEASUREMENT_ID) return false;
  const selector = `script[src="https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}"]`;
  return !!document.querySelector<HTMLScriptElement>(selector);
}

export const GoogleTagService = {
  loadScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.__gtagLoaded || scriptAlreadyInjected()) {
        resolve();
        return;
      }

      if (!MEASUREMENT_ID || !SCRIPT_SRC) {
        reject(new Error('VITE_GA_MEASUREMENT_ID is not set'));
        return;
      }

      const script = document.createElement('script');
      script.async = true;
      script.src = SCRIPT_SRC;

      script.onload = () => {
        window.__gtagLoaded = true;
        resolve();
      };

      script.onerror = () => {
        reject(new Error('Failed to load gtag.js'));
      };

      document.head.appendChild(script);
    });
  },
};

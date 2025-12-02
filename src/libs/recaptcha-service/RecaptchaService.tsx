import { useRef, useState, useCallback } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const SITE_KEY = import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY;

export const useRecaptchaService = () => {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleCaptchaChange = useCallback((token: string | null) => {
    setCaptchaToken(token);
  }, []);

  const RecaptchaComponent = useCallback(() => {
    return <ReCAPTCHA ref={recaptchaRef} sitekey={SITE_KEY} onChange={handleCaptchaChange} />;
  }, [handleCaptchaChange]);

  const resetCaptcha = () => {
    recaptchaRef.current?.reset();
    setCaptchaToken(null);
  };

  return {
    captchaToken,
    RecaptchaComponent,
    setCaptchaToken,
    handleCaptchaChange,
    resetCaptcha,
  };
};

import { useState, useEffect } from 'react';
import { cookieConsent } from '../data/data';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary-dark/95 backdrop-blur-sm border-t border-secondary-green/20 p-4 z-50 slide-up">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-dark text-sm text-center sm:text-left">
          {cookieConsent.message}
        </p>
        <button
          onClick={handleAccept}
          className="px-6 py-2 bg-accent text-primary-dark font-semibold text-sm rounded-lg hover:bg-accent/90 transition-colors duration-200 whitespace-nowrap"
        >
          {cookieConsent.buttonText}
        </button>
      </div>
    </div>
  );
}
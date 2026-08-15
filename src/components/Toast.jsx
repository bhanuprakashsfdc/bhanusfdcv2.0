import { useState, useEffect } from 'react';

export default function Toast({ message, type = 'info', onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  const bgColor = type === 'success' ? 'bg-primary-green' : type === 'error' ? 'bg-red-900/90' : 'bg-primary-dark';

  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-background-light px-4 py-3 rounded-lg shadow-lg border border-secondary-green/30 flex items-center gap-3 z-50 slide-up`}>
      <span className="text-sm font-medium">{message}</span>
      <button onClick={() => { setIsVisible(false); setTimeout(onClose, 300); }} className="text-text-dark hover:text-background-light transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
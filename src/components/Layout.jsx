import { Outlet } from 'react-router-dom';
import ReadingProgress from './ReadingProgress';
import Toast from './Toast';
import CookieConsent from './CookieConsent';

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />
      <ReadingProgress />
      <Toast />
      <CookieConsent />
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}
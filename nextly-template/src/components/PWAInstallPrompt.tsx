'use client';

import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isInStandaloneMode = () =>
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true;

    if (isInStandaloneMode()) {
      setIsInstalled(true);
      return;
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      setIsInstallable(false);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setIsInstallable(false);
    } else {
      setIsDismissed(true);
    }
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setDeferredPrompt(null);
  };

  // Don't show if not installable, already installed, or dismissed
  if (!isInstallable || isInstalled || isDismissed) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-4 sm:px-6 sm:py-5 shadow-lg">
      <div className="max-w-8xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <svg
            className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <div className="flex-1">
            <h3 className="font-bold text-base sm:text-lg">
              Hey! Wir haben auch eine echte App!
            </h3>
            <p className="text-blue-100 text-sm sm:text-base mt-1">
              Installieren Sie Komfort Gebäudeservice24 als App und greifen Sie überall blitzschnell darauf zu.
            </p>
          </div>
        </div>

        <div className="flex gap-2 flex-shrink-0 w-full sm:w-auto">
          <button
            onClick={handleInstallClick}
            className="flex-1 sm:flex-none px-6 py-2.5 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors duration-200 text-center whitespace-nowrap"
          >
            Jetzt installieren
          </button>
          <button
            onClick={handleDismiss}
            className="flex-1 sm:flex-none px-4 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors duration-200 text-center"
          >
            Später
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;

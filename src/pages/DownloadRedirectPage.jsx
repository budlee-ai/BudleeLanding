import React, { useEffect, useState } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.budlee.ai.b2c";
const APP_STORE_URL = "https://apps.apple.com/in/app/budlee-ai/id6761577103";
const WEB_APP_URL = "https://app.budlee.ai/";

const DownloadRedirectPage = () => {
  const [redirectingTo, setRedirectingTo] = useState(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera || '';
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);

    let destination = null;
    let platform = 'desktop';

    if (isIOS) {
      destination = APP_STORE_URL;
      platform = 'ios';
    } else if (isAndroid) {
      destination = PLAY_STORE_URL;
      platform = 'android';
    } else {
      destination = WEB_APP_URL;
      platform = 'desktop_or_other';
    }

    try {
      mixpanel.track('QR Download Scanned', {
        platform,
        destination,
        userAgent
      });
    } catch (e) {
      // Ignore analytics failures
    }

    if (destination) {
      const destinationName = 
        platform === 'ios' 
          ? 'Apple App Store' 
          : platform === 'android' 
            ? 'Google Play Store' 
            : 'Budlee Web App';
      setRedirectingTo(destinationName);
      // Instant redirect
      window.location.replace(destination);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center bg-gradient-to-br from-white via-emerald-50/40 to-teal-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 rounded-3xl p-8 shadow-2xl">
          
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <img 
              src="/images/logo.png" 
              alt="Budlee AI" 
              className="w-full h-full object-contain animate-bounce-gentle"
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
            Get <span className="gradient-text">Budlee AI</span>
          </h1>

          {redirectingTo ? (
            <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm animate-pulse">
              Redirecting you to the {redirectingTo}...
            </p>
          ) : (
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              Choose your device to download the official Budlee AI app or continue on web.
            </p>
          )}

          <div className="flex flex-col gap-3.5 mt-6 items-center">
            <a
              href={PLAY_STORE_URL}
              className="transition-transform hover:scale-105 active:scale-95 shadow-md rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <img
                src="/images/play_button.png"
                alt="Get it on Google Play"
                className="h-12 w-auto"
              />
            </a>
            <a
              href={APP_STORE_URL}
              className="transition-transform hover:scale-105 active:scale-95 shadow-md rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <img
                src="/images/app_button.png"
                alt="Download on the App Store"
                className="h-12 w-auto"
              />
            </a>
            <a
              href={WEB_APP_URL}
              className="mt-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Or open the Web App →
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DownloadRedirectPage;
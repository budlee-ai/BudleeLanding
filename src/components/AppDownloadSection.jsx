import React from 'react';
import mixpanel from 'mixpanel-browser';
import { Sparkles, Star, Smartphone, QrCode, CheckCircle2 } from 'lucide-react';

const AppDownloadSection = () => {
  return (
    <section
      id="download-app"
      className="w-full py-10 md:py-14 px-4 md:px-12 lg:px-20 relative overflow-hidden transition-colors duration-200 bg-gradient-to-b from-transparent via-green-50/40 to-transparent dark:via-emerald-950/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl p-6 sm:p-8 md:p-12 overflow-hidden bg-gradient-to-br from-white via-emerald-50/50 to-teal-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 shadow-xl">

          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 dark:bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 dark:bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

            {/* Left Content Side */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-100/80 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/80 px-3.5 py-1.5 rounded-full mb-4 shadow-xs">
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 -ml-0.5" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 -ml-0.5" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 -ml-0.5" />
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 -ml-0.5" />
                </div>
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  4.8 Rating • Available for iOS & Android
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
                Download the <span className="gradient-text">Budlee AI</span> App
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-6 max-w-xl mx-auto lg:mx-0">
                Turn after-school doubt clearing into an engaging, voice-first learning adventure. Practice CBSE & State Board topics anytime, anywhere.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-7 text-xs sm:text-sm text-gray-700 dark:text-gray-200 font-medium max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Voice & Chat Tutor</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Personalized Quests</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Free to Get Started</span>
                </div>
              </div>

              {/* Store Buttons Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.budlee.ai.b2c"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    try { mixpanel.track('App Download Clicked', { store: 'Google Play', location: 'Showcase Section' }); } catch { }
                  }}
                  className="transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-xl rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  aria-label="Get Budlee AI on Google Play"
                >
                  <img
                    src="/images/play_button.png"
                    alt="Get it on Google Play"
                    className="h-11 md:h-12 w-auto"
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/budlee-ai/id6761577103"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    try { mixpanel.track('App Download Clicked', { store: 'App Store', location: 'Showcase Section' }); } catch { }
                  }}
                  className="transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-xl rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  aria-label="Download Budlee AI on the App Store"
                >
                  <img
                    src="/images/app_button.png"
                    alt="Download on the App Store"
                    className="h-11 md:h-12 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Right Side - QR Code & Device Card (Visible on desktop & tablet) */}
            <div className="w-full lg:w-2/5 flex items-center justify-center">
              <div className="relative bg-white dark:bg-gray-800/90 rounded-2xl p-5 md:p-6 shadow-xl border border-gray-100 dark:border-gray-700/80 flex flex-col sm:flex-row items-center gap-5 max-w-sm w-full">

                {/* QR Code Container */}
                <div className="relative p-2.5 bg-white rounded-xl shadow-inner border border-gray-200/80 shrink-0">
                  <img
                    src="/images/qr-code-app.png"
                    alt="Scan QR code to install Budlee AI"
                    className="w-28 h-28 md:w-32 md:h-32 object-contain rounded-lg"
                  />
                </div>

                {/* Scan Info */}
                <div className="text-center sm:text-left flex flex-col justify-center">
                  <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Scan with phone</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                    Instant App Install
                  </h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
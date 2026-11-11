import React from 'react';
import mixpanel from 'mixpanel-browser';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Linkedin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

// WhatsApp icon component
const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
);

const Footer = ({
  ctaText = "Explore Budlee AI",
  ctaLink = "https://app.budlee.ai/",
  ctaOnClick = null,
  headline = "Start learning in a way that actually makes sense.",
  subtext = "Learn with clarity, ask freely, and explore what interests you."
}) => {
  const showTopSection = headline && subtext && ctaText;
  return (
    <footer className="w-full">
      {/* Top Section - CTA with Green Gradient */}
      {showTopSection && (
        <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 dark:from-gray-900 dark:via-emerald-950/50 dark:to-gray-900 py-12 md:py-16 px-4 md:px-12 lg:px-20 border-t border-b border-transparent dark:border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
              {/* Budlee Character - increased size, no yellow circle */}
              <div className="relative">
                <img
                  src="/images/logo.png"
                  alt="Budlee"
                  className="w-20 h-20 md:w-28 md:h-28 object-contain animate-bounce-gentle"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>

              {/* CTA Content */}
              <div className="text-center md:text-left">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                  {headline}
                </h3>
                <p className="text-green-100 dark:text-gray-300 text-base md:text-lg mb-4">
                  {subtext}
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 justify-center md:justify-start">
                  {ctaOnClick ? (
                    <Button
                      onClick={ctaOnClick}
                      className="bg-white dark:bg-gradient-to-r dark:from-green-500 dark:via-emerald-500 dark:to-teal-400 text-green-600 dark:text-white hover:bg-green-50 dark:hover:from-green-600 dark:hover:via-emerald-600 dark:hover:to-teal-500 font-bold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                    >
                      {ctaText}
                    </Button>
                  ) : (
                    <a href={ctaLink} rel="noopener noreferrer" className="w-full sm:w-auto">
                      <Button
                        className="bg-white dark:bg-gradient-to-r dark:from-green-500 dark:via-emerald-500 dark:to-teal-400 text-green-600 dark:text-white hover:bg-green-50 dark:hover:from-green-600 dark:hover:via-emerald-600 dark:hover:to-teal-500 font-bold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                      >
                        {ctaText}
                      </Button>
                    </a>
                  )}

                  {/* App Store & Google Play Badges in Footer */}
                  <div className="flex items-center gap-3">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.budlee.ai.b2c"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        try { mixpanel.track('App Download Clicked', { store: 'Google Play', location: 'Footer' }); } catch { }
                      }}
                      className="transition-transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/50"
                      aria-label="Get Budlee AI on Google Play"
                    >
                      <img
                        src="/images/play_button.png"
                        alt="Get it on Google Play"
                        className="h-11 w-auto"
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/in/app/budlee-ai/id6761577103"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        try { mixpanel.track('App Download Clicked', { store: 'App Store', location: 'Footer' }); } catch { }
                      }}
                      className="transition-transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/50"
                      aria-label="Download Budlee AI on the App Store"
                    >
                      <img
                        src="/images/app_button.png"
                        alt="Download on the App Store"
                        className="h-11 w-auto"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Section - 3 Column Layout */}
      <div className="bg-white dark:bg-gray-950 py-6 px-4 md:px-12 lg:px-20 border-t border-gray-100 dark:border-gray-800 transition-colors duration-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Left - Logo with Tagline */}
            <div className="flex items-center md:items-start">
              <img
                src="/images/logo_tagline_black.png"
                alt="Budlee AI"
                className="w-40 md:w-52 h-auto object-contain dark:hidden"
                onContextMenu={(e) => e.preventDefault()}
              />
              <img
                src="/images/logo_tagline_white.png"
                alt="Budlee AI"
                className="w-40 md:w-52 h-auto object-contain hidden dark:block"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            {/* Center - Social Icons */}
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/company/budlee-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/BudleeAI" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/budlee.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://whatsapp.com/channel/0029VbCMKR8Bfxo8SgsXy93B" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@budleeai" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://x.com/Budlee_AI" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Right - Copyright + Contact/Terms/Privacy */}
            <div className="flex flex-col items-center md:items-end gap-1">
              <p className="text-gray-400 dark:text-gray-500 text-sm text-center md:text-right">
                © 2026 Budlee AI. All rights reserved.
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-xs text-center md:text-right">
                A product of Needoo AI Innovations LLP.
              </p>
              <div className="flex items-center gap-3">
                <Link to="/contact" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm font-medium transition-colors">
                  <span className="md:hidden">Contact</span>
                  <span className="hidden md:inline">Contact Us</span>
                </Link>
                <span className="text-gray-300 dark:text-gray-700">|</span>
                <Link to="/terms" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm font-medium transition-colors">
                  <span className="md:hidden">Terms</span>
                  <span className="hidden md:inline">Terms of Use</span>
                </Link>
                <span className="text-gray-300 dark:text-gray-700">|</span>
                <Link to="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm font-medium transition-colors">
                  <span className="md:hidden">Privacy</span>
                  <span className="hidden md:inline">Privacy Policy</span>
                </Link>
                <span className="text-gray-300 dark:text-gray-700">|</span>
                <Link to="/refund" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm font-medium transition-colors">
                  <span className="md:hidden">Refund</span>
                  <span className="hidden md:inline">Refund Policy</span>
                </Link>
                <span className="text-gray-300 dark:text-gray-700">|</span>
                <Link to="/cookies" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 text-sm font-medium transition-colors">
                  <span className="md:hidden">Cookies</span>
                  <span className="hidden md:inline">Cookies Policy</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

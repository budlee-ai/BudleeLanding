import React from 'react';
import mixpanel from 'mixpanel-browser';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Linkedin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

// Threads icon component (not available in lucide-react)
const ThreadsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.85-.704 2.005-1.108 3.344-1.167.93-.041 1.822.053 2.658.282.034-.763-.075-1.411-.329-1.928-.372-.755-1.07-1.138-2.074-1.138h-.089c-.749.022-1.39.252-1.9.683l-1.335-1.509c.808-.715 1.932-1.116 3.164-1.157h.136c1.72 0 3.063.607 3.88 1.756.706.992.958 2.293.755 3.885.752.334 1.39.756 1.903 1.263 1.3 1.286 1.527 2.9 1.4 4.115-.17 1.63-.85 3.067-2.018 4.27C18.558 23.2 15.91 23.98 12.186 24zm.563-7.26c.103 0 .208.003.313.01.893.048 1.559.311 1.98.781.378.422.521.955.425 1.587-.1.65-.478 1.143-1.126 1.464-.577.286-1.298.39-2.027.294-.64-.086-1.186-.299-1.578-.616-.34-.276-.522-.614-.542-1.006-.025-.496.2-.934.672-1.305.478-.376 1.12-.59 1.883-.59v-.619z" />
  </svg>
);

// Linktree icon component
const LinktreeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897h2.107v5.331c0 .58.47 1.057 1.053 1.057.583 0 1.054-.477 1.054-1.057v-5.331h2.107c.54 0 .988-.38 1.052-.897.016-.162 0-.323-.08-.486l-3.133-5.76 3.133-3.217c.14-.141.22-.33.22-.536a.749.749 0 0 0-.753-.748h-1.903L13.858 2.19A1.057 1.057 0 0 0 12.804 1c-.514 0-.955.37-1.053.897L10.787 4.805H8.884a.749.749 0 0 0-.752.748c0 .206.08.395.22.536l3.133 3.218-3.532 5.759z" />
  </svg>
);

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
                        try { mixpanel.track('App Download Clicked', { store: 'Google Play', location: 'Footer' }); } catch {}
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
                        try { mixpanel.track('App Download Clicked', { store: 'App Store', location: 'Footer' }); } catch {}
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
              <a href="https://www.threads.com/@budlee.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <ThreadsIcon className="w-5 h-5" />
              </a>
              <a href="https://linktr.ee/budlee.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                <LinktreeIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Right - Copyright + Contact/Terms/Privacy */}
            <div className="flex flex-col items-center md:items-end gap-1">
              <p className="text-gray-400 dark:text-gray-500 text-sm text-center md:text-right">
                © 2026 Budlee AI. All rights reserved.
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-xs text-center md:text-right">
                Budlee AI is a product of Needoo AI Innovations LLP.
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

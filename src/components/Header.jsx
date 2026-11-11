import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import axios from 'axios';
import ThemeToggle from './ThemeToggle';

const Header = ({
  ctaText = "Explore Budlee AI",
  ctaLink = "https://app.budlee.ai/",
  ctaOnClick = null,
  secondaryCtaText = null,
  secondaryCtaLink = null,
  secondaryCtaTarget = "_blank",
  ctaTarget = "_self"
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(65);
  const headerRef = useRef(null);
  const resourcesRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keep headerHeight in sync for the portal overlay offset
  useEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on resize to desktop width
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Handle clicks outside dropdowns to close them (only on wide screens)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth >= 768) { // md breakpoint
        if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
          if (activeDropdown === 'resources') {
            setActiveDropdown(null);
          }
        }
        if (aboutRef.current && !aboutRef.current.contains(event.target)) {
          if (activeDropdown === 'about') {
            setActiveDropdown(null);
          }
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const handlePrimaryClick = (e) => {
    if (ctaOnClick) {
      e.preventDefault();
      ctaOnClick();
    }
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close any open dropdowns
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`w-full py-3 md:py-4 px-4 md:px-12 lg:px-20 sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md border-b border-transparent dark:border-gray-800/80'
          : 'bg-gradient-to-r from-green-50/80 via-yellow-50/80 to-orange-50/80 dark:from-gray-950/90 dark:via-gray-900/90 dark:to-gray-950/90 border-b border-transparent dark:border-gray-800/40'
        }`}
      >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Clickable, links to home */}
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
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
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Resources Dropdown */}
          <div className="relative" ref={resourcesRef}>
            <button
              onClick={() => toggleDropdown('resources')}
              className="flex items-center text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200"
            >
              Resources
              <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'resources' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 py-2 z-50">
                <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeDropdown}>
                  Blog
                </Link>
                <Link to="/help" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeDropdown}>
                  Help Center
                </Link>
                <Link to="/tutorials" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeDropdown}>
                  Tutorials
                </Link>
                <Link to="/faqs" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeDropdown}>
                  FAQs
                </Link>
                <div className="border-t border-gray-100 dark:border-gray-700 mt-2 pt-2">
                  <Link to="/schools" className="block px-4 py-2 text-sm font-semibold text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-700 dark:hover:text-green-300 transition-colors" onClick={closeDropdown}>
                    For Schools
                  </Link>
                  <Link to="/contact#demo-form" className="block px-4 py-2 text-sm font-semibold text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-700 dark:hover:text-green-300 transition-colors" onClick={closeDropdown}>
                    Request a Demo
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* About Us Dropdown */}
          <div className="relative" ref={aboutRef}>
            <button
              onClick={() => toggleDropdown('about')}
              className="flex items-center text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200"
            >
              About Us
              <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 py-2 z-50">
                <Link to="/our-story" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeDropdown}>
                  Our Story
                </Link>
                <Link to="/mission-vision" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeDropdown}>
                  Mission and Vision
                </Link>
                <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeDropdown}>
                  Meet our Team
                </Link>
                <Link to="/core-values" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeDropdown}>
                  Core Values
                </Link>
                <Link to="/careers" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeDropdown}>
                  Careers
                </Link>
                <Link to="/partner-programs" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeDropdown}>
                  Referral/Affiliate/Partner Programs
                </Link>
                <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-50 dark:hover:bg-gray-700 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeDropdown}>
                  Contact Us
                </Link>
              </div>
            )}
          </div>
          {/* Pricing - No Dropdown */}
          <Link to="/pricing" className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200">
            Pricing
          </Link>
          {/* Download App Nav Link */}
          <a href="#download-app" className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200 flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Get App
          </a>
        </nav>

        {/* CTA Buttons, Theme Toggle, and Mobile Menu */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Mobile Auth Buttons - Top Header */}
          <div className="flex md:hidden items-center gap-1.5 mr-1">
            <a href="https://app.budlee.ai/#/login">
              <Button
                variant="outline"
                size="sm"
                className="border-green-500 text-green-600 dark:text-green-400 dark:border-green-500/80 font-bold px-2 py-1 h-8 text-[10px] rounded-lg transition-all duration-300"
              >
                Login
              </Button>
            </a>
            <a href="https://app.budlee.ai/#/signup">
              <Button
                size="sm"
                className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 text-white font-bold px-2 py-1 h-8 text-[10px] rounded-lg shadow-sm transition-all duration-300"
              >
                Sign Up
              </Button>
            </a>
          </div>

          {/* Desktop CTA Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* School Login Button */}
            <a href="https://dash.budlee.ai">
              <Button
                variant="outline"
                className="border-2 border-green-500 bg-transparent text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/40 font-bold px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm rounded-xl transition-all duration-300"
              >
                School Login
              </Button>
            </a>

            {/* Auth Buttons or Custom CTA */}
            {ctaText === "Explore Budlee AI" ? (
              <>
                <a href="https://app.budlee.ai/#/login">
                  <Button
                    variant="outline"
                    className="border-2 border-emerald-500 bg-transparent text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 font-bold px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm rounded-xl transition-all duration-300"
                  >
                    Login
                  </Button>
                </a>
                <a href="https://app.budlee.ai/#/signup">
                  <Button
                    className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Sign Up
                  </Button>
                </a>
              </>
            ) : (
              <>
                {secondaryCtaText && (
                  <a href={secondaryCtaLink} target={secondaryCtaTarget} rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="border-2 border-emerald-500 bg-transparent text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 font-bold px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm rounded-xl transition-all duration-300"
                    >
                      {secondaryCtaText}
                    </Button>
                  </a>
                )}
                {ctaOnClick ? (
                  <Button
                    onClick={handlePrimaryClick}
                    className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {ctaText}
                  </Button>
                ) : (
                  <a href={ctaLink} target={ctaTarget} rel="noopener noreferrer">
                    <Button
                      className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {ctaText}
                    </Button>
                  </a>
                )}
              </>
            )}

            {/* Dark Mode Toggle on Header Bar */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay — rendered in a portal so it escapes the sticky/backdrop-filter
        stacking context that would otherwise clip fixed children on scroll */}
    {isMobileMenuOpen && createPortal(
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998]"
          style={{ top: `${headerHeight}px` }}
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
        {/* Drawer */}
        <div
          className="fixed inset-x-0 bottom-0 z-[999] overflow-y-auto overscroll-contain"
          style={{ top: `${headerHeight}px` }}
        >
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg min-h-full border-t border-gray-100 dark:border-gray-800">
            <div className="px-4 py-6 space-y-4">
                  {/* Mobile Navigation Menu */}
                  <div className="space-y-4">
                    {/* Resources Dropdown */}
                    <div>
                      <button
                        onClick={() => toggleDropdown('resources')}
                        className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 font-medium py-2 transition-colors duration-200"
                      >
                        Resources
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === 'resources' && (
                        <div className="mt-2 ml-4 space-y-2">
                          <Link to="/blog" className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeMobileMenu}>
                            Blog
                          </Link>
                          <Link to="/tutorials" className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeMobileMenu}>
                            Tutorials
                          </Link>
                          <Link to="/help" className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeMobileMenu}>
                            Help Center
                          </Link>
                          <Link to="/faqs" className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeMobileMenu}>
                            FAQs
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Direct High-Priority Links for Mobile */}
                    <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                      <Link to="/schools" className="flex items-center gap-2 py-3 text-base font-bold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors" onClick={closeMobileMenu}>
                        <div className="p-2 bg-green-50 dark:bg-green-950/60 rounded-lg">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        For Schools
                      </Link>
                      <Link to="/contact#demo-form" className="flex items-center gap-2 py-3 text-base font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors" onClick={closeMobileMenu}>
                        <div className="p-2 bg-emerald-50 dark:bg-emerald-950/60 rounded-lg">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                        Request a Demo
                      </Link>
                    </div>

                    {/* About Us Dropdown */}
                    <div>
                      <button
                        onClick={() => toggleDropdown('about')}
                        className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 font-medium py-2 transition-colors duration-200"
                      >
                        About Us
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === 'about' && (
                        <div className="mt-2 ml-4 space-y-2">
                          <Link to="/our-story" className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeMobileMenu}>
                            Our Story
                          </Link>
                          <Link to="/team" className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeMobileMenu}>
                            Meet our Team
                          </Link>
                          <Link to="/careers" className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeMobileMenu}>
                            Careers
                          </Link>
                          <Link to="/contact" className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeMobileMenu}>
                            Contact Us
                          </Link>
                          <Link to="/mission-vision" className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeMobileMenu}>
                            Mission and Vision
                          </Link>
                          <Link to="/core-values" className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeMobileMenu}>
                            Core Values
                          </Link>
                          <Link to="/partner-programs" className="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors" onClick={closeMobileMenu}>
                            Referral/Affiliate/Partner Programs
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Pricing - No Dropdown */}
                    <Link to="/pricing" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200" onClick={closeMobileMenu}>
                      Pricing
                    </Link>

                    {/* Download App Link in Mobile Menu */}
                    <a 
                      href="#download-app" 
                      className="flex items-center justify-between py-2 text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      <span className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Get Mobile App
                      </span>
                      <span className="text-xs bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-bold px-2 py-0.5 rounded-full">
                        iOS & Android
                      </span>
                    </a>

                    {/* Theme Mode Switcher in Mobile Drawer */}
                    <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between py-2">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Theme
                      </span>
                      <ThemeToggle showLabel={true} />
                    </div>
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-4">
                    <div className="flex flex-row justify-center gap-3">
                      <a href="https://dash.budlee.ai" className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-2 border-green-500 bg-transparent text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/40 font-bold py-3 rounded-xl transition-all duration-300"
                        >
                          School Login
                        </Button>
                      </a>
                    </div>
                    
                    <div className="flex flex-row justify-center gap-3">
                      <a href="https://app.budlee.ai/#/login" className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-2 border-emerald-500 bg-transparent text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 font-bold py-3 rounded-xl transition-all duration-300"
                        >
                          Login
                        </Button>
                      </a>
                      <a href="https://app.budlee.ai/#/signup" className="flex-1">
                        <Button
                          className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 text-white font-bold py-3 rounded-xl shadow-md transition-all duration-300"
                        >
                          Sign Up
                        </Button>
                      </a>
                    </div>

                    {/* Mobile App Store Badges in Drawer */}
                    <div className="pt-2 flex flex-col items-center gap-2">
                      <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Download Mobile App
                      </span>
                      <div className="flex items-center justify-center gap-2.5 w-full">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.budlee.ai.b2c"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="transition-transform active:scale-95 shadow-sm rounded-lg overflow-hidden flex-1 flex justify-center"
                          aria-label="Get Budlee AI on Google Play"
                        >
                          <img
                            src="/images/play_button.png"
                            alt="Get it on Google Play"
                            className="h-9 w-auto"
                          />
                        </a>
                        <a
                          href="https://apps.apple.com/in/app/budlee-ai/id6761577103"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="transition-transform active:scale-95 shadow-sm rounded-lg overflow-hidden flex-1 flex justify-center"
                          aria-label="Download Budlee AI on the App Store"
                        >
                          <img
                            src="/images/app_button.png"
                            alt="Download on the App Store"
                            className="h-9 w-auto"
                          />
                        </a>
                      </div>
                    </div>

                    {ctaText !== "Explore Budlee AI" && (
                      <div className="flex flex-col gap-3">
                        {secondaryCtaText && (
                          <a href={secondaryCtaLink} target={secondaryCtaTarget} rel="noopener noreferrer" onClick={closeMobileMenu}>
                            <Button
                              variant="outline"
                              className="w-full border-2 border-emerald-500 bg-transparent text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 font-bold py-3 rounded-xl transition-all duration-300"
                            >
                              {secondaryCtaText}
                            </Button>
                          </a>
                        )}
                        {ctaOnClick ? (
                          <Button
                            onClick={() => { handlePrimaryClick(); closeMobileMenu(); }}
                            className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 text-white font-bold py-3 rounded-xl shadow-md transition-all duration-300"
                          >
                            {ctaText}
                          </Button>
                        ) : (
                          <a href={ctaLink} target={ctaTarget} rel="noopener noreferrer" onClick={closeMobileMenu}>
                            <Button
                              className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 text-white font-bold py-3 rounded-xl shadow-md transition-all duration-300"
                            >
                              {ctaText}
                            </Button>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
};

export default Header;

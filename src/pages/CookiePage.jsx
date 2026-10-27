import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePage = () => {
  useEffect(() => {
    mixpanel.track('Cookie Page Viewed');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-16 md:py-5 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="hero-tagline text-3xl md:text-4xl lg:text-5xl mb-6 whitespace-nowrap gradient-text">
              Cookie Policy
            </h1>
            <p className="text-gray-700 text-base md:text-lg font-medium">
              Effective Date: October 27, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              At Budlee AI (a product of Needoo AI Innovations LLP, hereinafter "we," "us," or "our"), we use cookies and similar technologies to enhance your experience across our Service, including our AI-powered learning tools, community features, interactive quests, and 1-on-1 live tuition virtual classroom. This Cookie Policy explains what cookies are, how we use them, and your options for managing them. By accessing or using our Service, you consent to our use of cookies as described herein.
            </p>
            <p className="mb-6">
              This policy complies with applicable Indian laws, including the Information Technology Act, 2000, and standard data protection regulations.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">1. What Are Cookies?</h2>
            <p className="mb-6">
              Cookies are small text files placed on your device when you visit our website or use our application. They enable our platform to recognize your browser, maintain secure login sessions, and remember your personalized preferences across sessions.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">2. How We Use Cookies</h2>
            <p className="mb-4">
              We use cookies to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Authenticate users, keep you securely signed in, and protect your account.</li>
              <li>Remember your tuition booking selections, local timezone, and calendar display settings.</li>
              <li>Store your preferred audio and video hardware device preferences for the virtual classroom.</li>
              <li>Analyze platform traffic and feature usage to optimize AI responses and educational content.</li>
              <li>Maintain platform security and prevent fraudulent access.</li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">3. Types of Cookies We Use</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Strictly Essential Cookies:</strong> Required for the fundamental operation of the Service, such as authentication, secure session tokens, and CSRF protection. The platform cannot function without these cookies.
              </li>
              <li>
                <strong>Functional & Preference Cookies:</strong> Remember your settings, such as language, theme, selected grade/board, and virtual classroom microphone/camera choices.
              </li>
              <li>
                <strong>Analytics & Performance Cookies:</strong> Help us understand how visitors interact with our pages, identify error events, and measure page loading speeds so we can continuously improve user experience.
              </li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">4. Third-Party Services</h2>
            <p className="mb-6">
              Some cookies may be placed by verified third-party partners (such as analytics providers and secure payment gateways like Stripe and Razorpay) to facilitate secure transactions and monitor platform health. We do not permit third parties to collect sensitive personal information through cookies on our platform.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">5. Managing Your Cookie Preferences</h2>
            <p className="mb-6">
              Most web browsers automatically accept cookies, but you can modify your browser settings to decline or delete cookies at any time. Please note that if you choose to block essential cookies, parts of our Service (such as keeping you logged in or entering the virtual classroom) may not function properly.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">6. Updates to This Policy</h2>
            <p className="mb-6">
              We may update this Cookie Policy from time to time to reflect changes in operational practices or legal requirements. Updated policies will be posted on this page with the revised "Effective Date."
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">7. Contact Us</h2>
            <div className="mb-6">
              <p className="mb-2">If you have any questions regarding our use of cookies:</p>
              <p className="font-semibold">Budlee AI Data Privacy Team</p>
              <p><a href="mailto:privacy@budlee.ai" className="text-green-600 hover:text-green-700 underline">privacy@budlee.ai</a></p>
              <p className="mt-2">
                Needoo AI Innovations LLP<br />
                Budlee AI Corporate Office,<br />
                BUILDING NO 18 214 C KODUR PO NEAR BHARATH PETROLEUM,<br />
                MALAPPURAM, KODUR-MALABAR,<br />
                KERALA - 676504,<br />
                INDIA
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePage;

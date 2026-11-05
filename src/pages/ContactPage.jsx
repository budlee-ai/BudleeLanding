import React, { useEffect, useState } from 'react';
import mixpanel from 'mixpanel-browser';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { Mail, MapPin, Building, CheckCircle, AlertCircle, Loader2, Atom, FlaskConical, Lightbulb, Star, Sparkles } from 'lucide-react';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState(null); // null, 'loading', 'success', 'error'
  const [formMessage, setFormMessage] = useState('');

  useEffect(() => {
    mixpanel.track('Contact Page Viewed');

    // Handle scrolling to demo form when page loads with #demo-form hash
    if (window.location.hash === '#demo-form') {
      // Small delay to ensure the DOM is fully rendered
      setTimeout(() => {
        const demoFormElement = document.getElementById('demo-form');
        if (demoFormElement) {
          demoFormElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleDemoRequest = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormMessage('');

    try {
      const templateParams = {
        from_name: e.target.fullName.value,
        from_email: e.target.email.value,
        phone: e.target.phone.value,
        organization: e.target.organization.value,
        role: e.target.role.value,
        demo_type: e.target.demoType.value,
        message: e.target.message.value,
        to_email: 'hello@budlee.ai'
      };

      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.DEMO_TEMPLATE_ID, templateParams, EMAILJS_CONFIG.PUBLIC_KEY);

      setFormStatus('success');
      setFormMessage('Thank you for your demo request! We\'ll be in touch within 24 hours to schedule your personalized demo.');
      e.target.reset();

      // Track successful demo request
      mixpanel.track('Demo Request Submitted', {
        role: templateParams.role,
        demoType: templateParams.demo_type
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus('error');
      setFormMessage('There was an error sending your demo request. Please try again or contact us directly at hello@budlee.ai');

      // Track demo request error
      mixpanel.track('Demo Request Error', {
        error: error.text || error.message
      });
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Reach out to our founding team for partnerships, collaborations, or general inquiries.",
      color: "from-green-400 to-emerald-500",
      details: [
        "Partnership opportunities",
        "Business collaborations",
        "General inquiries",
        "Technical questions"
      ],
      contact: "founders@budlee.ai",
      link: "mailto:founders@budlee.ai"
    },
    {
      icon: Building,
      title: "Request a Demo",
      description: "Experience Budlee AI firsthand with a personalized demo tailored to your educational needs.",
      color: "from-blue-400 to-indigo-500",
      details: [
        "See Budlee AI in action",
        "Learn about implementation",
        "Get pricing information"
      ],
      contact: "Request a Demo",
      link: "#demo-form"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-16 md:py-5 px-4 md:px-12 lg:px-20 relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"></div>
          
          {/* Floating Doodles - Hidden on mobile, visible on md+ */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
            {/* Top Left - Atom */}
            <div className="absolute top-8 left-[8%] text-green-300 animate-float-slow">
              <Atom className="w-10 h-10 opacity-60" />
            </div>
            
            {/* Top Right - Flask */}
            <div className="absolute top-12 right-[12%] text-yellow-400 animate-float-medium">
              <FlaskConical className="w-8 h-8 opacity-50" />
            </div>
            
            {/* Middle Left - Lightbulb */}
            <div className="absolute top-1/3 left-[4%] text-orange-300 animate-float-fast">
              <Lightbulb className="w-7 h-7 opacity-50" />
            </div>
            
            {/* Bottom Right - Stars */}
            <div className="absolute bottom-28 right-[6%] text-green-400 animate-float-slow">
              <Star className="w-8 h-8 opacity-40 fill-current" />
            </div>
            
            {/* Top Center - Sparkles */}
            <div className="absolute top-6 left-[35%] text-yellow-400 animate-float-medium">
              <Sparkles className="w-6 h-6 opacity-50" />
            </div>
            
            {/* Bottom Left - Star */}
            <div className="absolute bottom-24 left-[10%] text-orange-400 animate-float-fast">
              <Star className="w-5 h-5 opacity-40 fill-current" />
            </div>

            {/* Decorative circles */}
            <div className="absolute top-20 right-[22%] w-16 h-16 rounded-full bg-green-200 opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-40 left-[18%] w-12 h-12 rounded-full bg-yellow-200 opacity-20 animate-pulse-slow"></div>
          </div>

          {/* Mobile Floating Doodles - Smaller, fewer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden md:hidden">
            <div className="absolute top-4 right-[8%] text-green-300 animate-float-slow">
              <Atom className="w-6 h-6 opacity-40" />
            </div>
            <div className="absolute top-20 left-[5%] text-yellow-400 animate-float-medium">
              <Star className="w-5 h-5 opacity-40 fill-current" />
            </div>
            <div className="absolute bottom-32 right-[10%] text-orange-300 animate-float-fast">
              <Sparkles className="w-5 h-5 opacity-40" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="hero-tagline text-3xl sm:text-4xl md:text-5xl mb-0">
              Get <span className="gradient-text">in Touch</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Have questions about Budlee AI? We'd love to hear from you. Reach out to our team and we'll get back to you soon.
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-100 dark:border-gray-800 group">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {method.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {method.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2 mb-6">
                    {method.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Contact Link */}
                  <a
                    href={method.link}
                    className="inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {method.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Request Form */}
        <section id="demo-form" className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/60">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">
                Request a Demo
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-xl font-medium">
                Fill out the form below and we'll get back to you within 24 hours to schedule your personalized demo.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-800">
              {/* Status Message */}
              {formStatus && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  formStatus === 'success'
                    ? 'bg-green-100 dark:bg-green-950/50 border border-green-300 dark:border-green-800 text-green-800 dark:text-green-200'
                    : formStatus === 'error'
                    ? 'bg-red-100 dark:bg-red-950/50 border border-red-300 dark:border-red-800 text-red-800 dark:text-red-200'
                    : 'bg-blue-100 dark:bg-blue-950/50 border border-blue-300 dark:border-blue-800 text-blue-800 dark:text-blue-200'
                }`}>
                  {formStatus === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                  {formStatus === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                  {formStatus === 'loading' && <Loader2 className="w-5 h-5 flex-shrink-0 animate-spin" />}
                  <span>{formMessage}</span>
                </div>
              )}

              <form onSubmit={handleDemoRequest} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Organization/School *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Enter your organization or school name"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Your Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="teacher">Teacher/Educator</option>
                    <option value="administrator">School Administrator</option>
                    <option value="parent">Parent</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="demoType" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Demo Type
                  </label>
                  <select
                    id="demoType"
                    name="demoType"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <option value="general">General Overview</option>
                    <option value="teacher">Teacher-Focused Demo</option>
                    <option value="administrator">Administrator Demo</option>
                    <option value="technical">Technical Implementation Demo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Tell us about your specific needs or questions..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                  >
                    {formStatus === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                    {formStatus === 'loading' ? 'Sending Request...' : 'Request Demo'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="w-full py-8 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                For support-related inquiries, please visit our{' '}
                <a href="/terms" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline underline-offset-2">
                  Terms of Service
                </a>{' '}
                or{' '}
                <a href="/privacy" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline underline-offset-2">
                  Privacy Policy
                </a>{' '}
                pages.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
import React, { useEffect, useState } from 'react';
import mixpanel from 'mixpanel-browser';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { Users, DollarSign, TrendingUp, Award, Handshake, Target, CheckCircle, Star, Zap, AlertCircle, Loader2, Atom, FlaskConical, Lightbulb, Sparkles } from 'lucide-react';

/*
EmailJS Setup Instructions:
1. Go to https://www.emailjs.com/ and create an account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - {{from_name}} - Applicant's full name
   - {{from_email}} - Applicant's email
   - {{partner_type}} - Selected partnership type
   - {{message}} - Applicant's message
   - {{to_email}} - Should be set to hello@budlee.ai
4. Replace the serviceId, templateId, and publicKey in handleFormSubmit with your actual IDs
*/

const PartnerProgramsPage = () => {
  const [formStatus, setFormStatus] = useState(null); // null, 'loading', 'success', 'error'
  const [formMessage, setFormMessage] = useState('');
  const [selectedPartnershipType, setSelectedPartnershipType] = useState('');

  useEffect(() => {
    mixpanel.track('Partner Programs Page Viewed');
  }, []);

  // Handle hash changes to pre-select partnership type
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#referral-form')) {
        setSelectedPartnershipType('referral');
      } else if (hash.startsWith('#affiliate-form')) {
        setSelectedPartnershipType('affiliate');
      } else if (hash.startsWith('#reseller-form')) {
        setSelectedPartnershipType('reseller');
      } else if (hash.startsWith('#integration-form')) {
        setSelectedPartnershipType('integration');
      }
    };

    // Check hash on component mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormMessage('');

    try {
      const templateParams = {
        from_name: e.target.fullName.value,
        from_email: e.target.email.value,
        phone: e.target.phone.value,
        partner_type: e.target.partnerType.value,
        message: e.target.message.value,
        to_email: 'hello@budlee.ai'
      };

      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.PARTNER_TEMPLATE_ID, templateParams, EMAILJS_CONFIG.PUBLIC_KEY);

      setFormStatus('success');
      setFormMessage('Thank you for your interest! We\'ll be in touch soon.');
      e.target.reset();

      // Track successful form submission
      mixpanel.track('Partner Application Submitted', {
        partnerType: templateParams.partner_type
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus('error');
      setFormMessage('There was an error sending your application. Please try again or contact us directly at hello@budlee.ai');

      // Track form submission error
      mixpanel.track('Partner Application Error', {
        error: error.text || error.message
      });
    }
  };

  const partnerPrograms = [
    {
      icon: Users,
      title: "Referral Program",
      description: "Earn commissions by referring schools, educators, and institutions to Budlee AI.",
      color: "from-blue-400 to-indigo-500",
      benefits: [
        "Industry best commission",
        "Monthly payouts",
        "Dedicated partner support"
      ],
      cta: "Join Referral Program",
      link: "#referral-form",
      type: "referral"
    },
    {
      icon: Handshake,
      title: "Affiliate Program",
      description: "Promote Budlee AI through your website, blog, or social media channels.",
      color: "from-green-400 to-emerald-500",
      benefits: [
        "Custom affiliate links",
        "Marketing materials provided",
        "Flexible commission structure"
      ],
      cta: "Become an Affiliate",
      link: "#referral-form",
      type: "affiliate"
    },
    {
      icon: Target,
      title: "Reseller Partnership",
      description: "Become an authorized reseller and offer Budlee AI as part of your educational solutions.",
      color: "from-purple-400 to-violet-500",
      benefits: [
        "Wholesale pricing",
        "Co-marketing opportunities",
        "Priority technical support"
      ],
      cta: "Apply for Reseller",
      link: "#referral-form",
      type: "reseller"
    },
    {
      icon: Award,
      title: "Integration Partnership",
      description: "Integrate Budlee AI into your existing educational platforms and tools.",
      color: "from-orange-400 to-red-500",
      benefits: [
        "Joint development opportunities",
        "Revenue sharing model",
        "Technical integration support"
      ],
      cta: "Explore Integration",
      link: "#referral-form",
      type: "integration"
    }
  ];

  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Educational Consultant",
      earnings: "$12,500",
      period: "Last 6 months",
      testimonial: "The referral program has been a game-changer for my consulting business. The commissions are generous and the support team is fantastic.",
      avatar: "SJ"
    },
    {
      name: "TechEdu Solutions",
      role: "EdTech Reseller",
      earnings: "$45,000",
      period: "This year",
      testimonial: "Partnering with Budlee AI has significantly boosted our revenue. Their platform integrates perfectly with our existing solutions.",
      avatar: "TS"
    },
    {
      name: "EduBlog Network",
      role: "Content Creator",
      earnings: "$8,200",
      period: "Last quarter",
      testimonial: "The affiliate program materials are excellent, and the conversion rates are impressive. It's been a great addition to our content monetization.",
      avatar: "EN"
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
              Partner <span className="gradient-text">Programs</span>
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Join our partner ecosystem and earn commissions while helping schools transform education with Budlee AI
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-2 md:mb-5">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Choose Your Partnership</h2>
              <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-medium">
                Multiple ways to partner with Budlee AI and grow your income
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerPrograms.map((program, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-100 dark:border-gray-800 group">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2 mb-6">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={program.link}
                    className="inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full text-center"
                    onClick={() => setSelectedPartnershipType(program.type)}
                  >
                    {program.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/40">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-2 md:mb-5">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Why Partner With Budlee AI?</h2>
              <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-medium">
                Join a growing ecosystem of education innovators
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Growing Market</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Education technology is expanding rapidly with increasing demand for AI-powered learning solutions.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Proven Product</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Budlee AI has helped thousands of students improve their learning outcomes with our innovative platform.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-red-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">High Conversions</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Our platform converts leads effectively, ensuring you earn commissions on successful partnerships.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Dedicated Support</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Our partner success team provides ongoing support, marketing materials, and strategic guidance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Application Form */}
        <section id="referral-form" className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 dark:from-gray-900 dark:via-emerald-950/50 dark:to-gray-900 border-t border-b border-transparent dark:border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap text-white">Start Earning Today</h2>
            <p className="text-green-100 dark:text-gray-300 text-lg mb-8">
              Join other partners who are already earning with Budlee AI
            </p>

            <div className="bg-white/10 dark:bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-white/10 dark:border-gray-700/60">
              {/* Status Message */}
              {formStatus && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  formStatus === 'success'
                    ? 'bg-green-100/20 border border-green-300/30 text-green-100'
                    : formStatus === 'error'
                    ? 'bg-red-100/20 border border-red-300/30 text-red-100'
                    : 'bg-blue-100/20 border border-blue-300/30 text-blue-100'
                }`}>
                  {formStatus === 'success' && <CheckCircle className="w-5 h-5 flex-shrink-0" />}
                  {formStatus === 'error' && <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                  {formStatus === 'loading' && <Loader2 className="w-5 h-5 flex-shrink-0 animate-spin" />}
                  <span>{formMessage}</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="partnerFullName" className="block text-sm font-medium text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="partnerFullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 bg-white/20 dark:bg-gray-900/60 border border-white/30 dark:border-gray-700 rounded-lg text-white placeholder-white/70 dark:placeholder-gray-400 focus:ring-2 focus:ring-white dark:focus:ring-emerald-400 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="partnerEmail" className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="partnerEmail"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/20 dark:bg-gray-900/60 border border-white/30 dark:border-gray-700 rounded-lg text-white placeholder-white/70 dark:placeholder-gray-400 focus:ring-2 focus:ring-white dark:focus:ring-emerald-400 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="partnerPhone" className="block text-sm font-medium text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="partnerPhone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-white/20 dark:bg-gray-900/60 border border-white/30 dark:border-gray-700 rounded-lg text-white placeholder-white/70 dark:placeholder-gray-400 focus:ring-2 focus:ring-white dark:focus:ring-emerald-400 focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="partnerType" className="block text-sm font-medium text-white mb-2">
                    Partnership Type *
                  </label>
                  <select
                    id="partnerType"
                    name="partnerType"
                    required
                    value={selectedPartnershipType}
                    onChange={(e) => setSelectedPartnershipType(e.target.value)}
                    className="w-full px-4 py-3 bg-white/20 dark:bg-gray-900/60 border border-white/30 dark:border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-white dark:focus:ring-emerald-400 focus:border-transparent transition-colors [&>option]:text-gray-900 dark:[&>option]:text-white dark:[&>option]:bg-gray-900"
                  >
                    <option value="" className="text-gray-800">Select partnership type</option>
                    <option value="referral" className="text-gray-800">Referral Program</option>
                    <option value="affiliate" className="text-gray-800">Affiliate Program</option>
                    <option value="reseller" className="text-gray-800">Reseller Partnership</option>
                    <option value="integration" className="text-gray-800">Integration Partnership</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="partnerMessage" className="block text-sm font-medium text-white mb-2">
                    Tell us about yourself
                  </label>
                  <textarea
                    id="partnerMessage"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-white/20 dark:bg-gray-900/60 border border-white/30 dark:border-gray-700 rounded-lg text-white placeholder-white/70 dark:placeholder-gray-400 focus:ring-2 focus:ring-white dark:focus:ring-emerald-400 focus:border-transparent transition-colors"
                    placeholder="Describe your experience, audience, or how you plan to promote Budlee AI..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="bg-white dark:bg-gradient-to-r dark:from-green-500 dark:via-emerald-500 dark:to-teal-400 text-green-600 dark:text-white hover:bg-green-50 dark:hover:from-green-600 dark:hover:via-emerald-600 dark:hover:to-teal-500 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                  >
                    {formStatus === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
                    {formStatus === 'loading' ? 'Sending Application...' : 'Apply for Partnership'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer
        headline=""
        subtext=""
        ctaText=""
      />
    </div>
  );
};

export default PartnerProgramsPage;
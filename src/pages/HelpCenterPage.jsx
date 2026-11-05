import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { HelpCircle, Search, MessageCircle, FileText, Phone, Mail, MapPin, Clock, Atom, FlaskConical, Lightbulb, Star, Sparkles } from 'lucide-react';

const HelpCenterPage = () => {
  useEffect(() => {
    mixpanel.track('Help Center Page Viewed');
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  // Helper function to create URL slugs
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();
  };

  const helpCategories = [
    {
      icon: MessageCircle,
      title: "Getting Started",
      description: "New to Budlee AI? Start here with basic setup and account creation.",
      color: "from-blue-400 to-indigo-500",
      articles: [
        "How to create your account",
        "Setting up your profile",
        "Navigating the platform",
        "Understanding your dashboard"
      ]
    },
    {
      icon: HelpCircle,
      title: "AI Chat & Features",
      description: "Learn how to use our AI chat, community features, and learning tools.",
      color: "from-green-400 to-emerald-500",
      articles: [
        "Using AI Chat effectively",
        "Community guidelines",
        "Completing quests",
        "Exploring Curiosity Centre"
      ]
    },
    {
      icon: FileText,
      title: "Account & Billing",
      description: "Manage your account settings, subscriptions, and billing information.",
      color: "from-purple-400 to-violet-500",
      articles: [
        "Managing subscriptions",
        "Payment methods",
        "Account settings",
        "Privacy controls"
      ]
    },
    {
      icon: Phone,
      title: "Troubleshooting",
      description: "Common issues and how to resolve them quickly.",
      color: "from-orange-400 to-red-500",
      articles: [
        "App not loading",
        "Login problems",
        "Payment errors",
        "Performance issues"
      ]
    }
  ];

  const contactOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "help@budlee.ai",
      availability: "Mon-Fri, 9 AM - 6 PM IST"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team for immediate assistance",
      contact: "Available 24/7",
      availability: "Round the clock support"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical support team",
      contact: "+91-XXXX-XXXXXX",
      availability: "Mon-Fri, 10 AM - 5 PM IST"
    }
  ];

  const popularArticles = [
    "How to reset your password",
    "Understanding subscription plans",
    "Using AI Chat for homework help",
    "Managing your privacy settings",
    "Troubleshooting login issues",
    "Completing your first quest"
  ];

  const filteredArticles = popularArticles.filter(article =>
    article.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              Help <span className="gradient-text">Center</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Find answers, get support, and make the most of your Budlee AI experience.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text text-center">Browse by Category</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-800 group">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-1">
                    {category.articles.slice(0, 3).map((article, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 text-xs flex items-center gap-2">
                        <span className="text-green-500">•</span>
                        <Link to={`/help/${createSlug(article)}`} className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-sm transition-colors">
                    View all articles →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/40">
          <div className="max-w-4xl mx-auto">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text text-center">Popular Articles</h2>

            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">
                {filteredArticles.map((article, index) => (
                  <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer">
                          <Link to={`/help/${createSlug(article)}`} className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                            {article}
                          </Link>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                          Quick guide to help you get started
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <HelpCircle className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-3" />
                <p className="text-gray-500 dark:text-gray-400">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">Contact Support</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Can't find what you're looking for? Our support team is here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactOptions.map((option, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-800 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {option.description}
                  </p>
                  <p className="font-medium text-gray-800 dark:text-white mb-1">
                    {option.contact}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    {option.availability}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Information */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 dark:from-gray-900 dark:via-emerald-950/50 dark:to-gray-900 border-t border-b border-transparent dark:border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Visit Our Office</h2>
            <p className="text-green-100 dark:text-gray-300 text-lg mb-8">
              Located in Malappuram, Kerala
            </p>

            <div className="bg-white/10 dark:bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto border border-white/10 dark:border-gray-700/60">
              <div className="flex items-start gap-4 text-left">
                <MapPin className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                <div className="text-white">
                  <h3 className="font-bold mb-2">Budlee AI Corporate Office</h3>
                  <p className="mb-1 text-white/90">BUILDING NO 18 214 C KODUR PO NEAR BHARATH PETROLEUM,</p>
                  <p className="mb-1 text-white/90">MALAPPURAM, KODUR-MALABAR,</p>
                  <p className="mb-1 text-white/90">KERALA - 676504</p>
                  <p className="font-medium">INDIA</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-6 text-white">
                <Clock className="w-5 h-5 text-emerald-300" />
                <span className="text-white/90">Monday - Friday: 9:00 AM - 6:00 PM IST</span>
              </div>
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

export default HelpCenterPage;
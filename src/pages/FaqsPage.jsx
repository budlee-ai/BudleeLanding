import React, { useEffect, useState } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChevronDown, ChevronUp, Search, HelpCircle, Atom, FlaskConical, Lightbulb, Star, Sparkles } from 'lucide-react';

const FaqsPage = () => {
  useEffect(() => {
    mixpanel.track('FAQs Page Viewed');
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState(new Set());

  const faqCategories = [
    {
      title: "General",
      icon: HelpCircle,
      color: "from-blue-400 to-indigo-500",
      questions: [
        {
          question: "What is Budlee AI?",
          answer: "Budlee AI is an AI-powered platform offering chat, community features, quests, and a curiosity centre for learning and interaction."
        },
        {
          question: "Is Budlee AI free?",
          answer: "Yes, with a free usage limit. Unlimited features require a subscription."
        },
        {
          question: "Who can use Budlee AI?",
          answer: "Users below 18 years need parental supervision. School users access via school plans."
        }
      ]
    },
    {
      title: "Account and Registration",
      icon: HelpCircle,
      color: "from-green-400 to-emerald-500",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Sign up on our website or app with your email and details."
        },
        {
          question: "Can I change my account information?",
          answer: "Yes, in your account settings."
        },
        {
          question: "What if I forget my password?",
          answer: "Use the \"Forgot Password\" link to reset it."
        }
      ]
    },
    {
      title: "Features",
      icon: HelpCircle,
      color: "from-purple-400 to-violet-500",
      questions: [
        {
          question: "How does AI Chat work?",
          answer: "Ask questions, and our AI provides responses based on your input."
        },
        {
          question: "What is the Community feature?",
          answer: "A space to connect, share, and discuss with other users."
        },
        {
          question: "How do Quests work?",
          answer: "Complete gamified tasks to earn rewards and learn."
        },
        {
          question: "What is the Curiosity Centre?",
          answer: "A hub for exploring topics in depth with AI assistance."
        }
      ]
    },
    {
      title: "Subscriptions and Payments",
      icon: HelpCircle,
      color: "from-orange-400 to-red-500",
      questions: [
        {
          question: "What are the subscription plans?",
          answer: "Monthly or yearly for unlimited access."
        },
        {
          question: "How do I pay?",
          answer: "Via Stripe or RazorPay."
        },
        {
          question: "Is there a refund?",
          answer: "No refunds. Cancel anytime; access until period ends."
        },
        {
          question: "For school users?",
          answer: "Subscriptions are handled by schools; contact your administrator."
        }
      ]
    },
    {
      title: "Privacy and Security",
      icon: HelpCircle,
      color: "from-teal-400 to-cyan-500",
      questions: [
        {
          question: "How is my data protected?",
          answer: "We use encryption and comply with Indian laws. See our Privacy Policy."
        },
        {
          question: "Do you share my data?",
          answer: "Only as described in our Privacy Policy."
        },
        {
          question: "What about cookies?",
          answer: "We use cookies for functionality; manage in your settings."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: HelpCircle,
      color: "from-pink-400 to-rose-500",
      questions: [
        {
          question: "The app isn't working. What do I do?",
          answer: "Clear cache, update app, or contact support."
        },
        {
          question: "Can I use Budlee AI on mobile?",
          answer: "Yes, via our app."
        },
        {
          question: "How do I report a bug?",
          answer: "Email us at help@budlee.ai with details."
        }
      ]
    },
    {
      title: "Legal",
      icon: HelpCircle,
      color: "from-yellow-400 to-orange-500",
      questions: [
        {
          question: "What are the Terms of Service?",
          answer: "Governed by Indian law; see our Terms page."
        },
        {
          question: "How do I contact you?",
          answer: "Email legal@budlee.ai or visit our office."
        }
      ]
    }
  ];

  const toggleExpanded = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedItems(newExpanded);
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/30 py-16 md:py-5 px-4 md:px-12 lg:px-20 relative overflow-hidden transition-colors duration-200">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/30"></div>
          
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
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about Budlee AI. If you don't find what you're looking for, contact us at help@budlee.ai.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] whitespace-nowrap gradient-text">
                    {category.title}
                  </h2>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const isExpanded = expandedItems.has(`${categoryIndex}-${questionIndex}`);
                    return (
                      <div key={questionIndex} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
                        <button
                          onClick={() => toggleExpanded(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 pr-4">
                            {faq.question}
                          </h3>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        {isExpanded && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {filteredCategories.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">No results found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try adjusting your search terms or browse all categories above.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-200">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Still Need Help?</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium mb-8 max-w-2xl mx-auto">
              If these FAQs don't help, reach out to our support team. We're here to assist you!
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-transparent dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Email Support</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Get in touch with our support team</p>
                <a
                  href="mailto:help@budlee.ai"
                  className="inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  help@budlee.ai
                </a>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-transparent dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Visit Our Office</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Located in Malappuram, Kerala</p>
                <div className="text-sm text-gray-600 dark:text-gray-400 text-left">
                  <p className="font-medium text-gray-800 dark:text-gray-200">Budlee AI Corporate Office</p>
                  <p>BUILDING NO 18 214 C KODUR PO NEAR BHARATH PETROLEUM,</p>
                  <p>MALAPPURAM, KODUR-MALABAR,</p>
                  <p>KERALA - 676504</p>
                  <p className="font-medium mt-1 text-gray-800 dark:text-gray-200">INDIA</p>
                </div>
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

export default FaqsPage;
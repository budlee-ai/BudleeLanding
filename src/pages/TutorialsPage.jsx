import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookOpen, MessageCircle, Trophy, Lightbulb, Settings, AlertCircle, Zap, Atom, FlaskConical, Star, Sparkles } from 'lucide-react';

const TutorialsPage = () => {
  useEffect(() => {
    mixpanel.track('Tutorials Page Viewed');
  }, []);

  const tutorialSections = [
    {
      title: "Getting Started",
      icon: BookOpen,
      color: "from-blue-400 to-indigo-500",
      content: [
        {
          title: "Sign Up",
          description: "Visit our website or download the app. Create an account with your email.",
          steps: [
            "Go to budlee.ai or download our mobile app",
            "Click 'Sign Up' and enter your email address",
            "Verify your email and complete your profile",
            "Choose your preferred learning path"
          ]
        },
        {
          title: "Explore Free Tier",
          description: "Access basic features without payment to get familiar with the platform.",
          steps: [
            "Log in to your account",
            "Try the AI Chat with basic queries",
            "Join a community discussion",
            "Complete a sample quest"
          ]
        },
        {
          title: "Upgrade Your Account",
          description: "Subscribe for unlimited use via Stripe or RazorPay.",
          steps: [
            "Go to Settings > Subscription",
            "Choose monthly or yearly plan",
            "Enter payment details",
            "Confirm subscription"
          ]
        }
      ]
    },
    {
      title: "AI Chat Tutorial",
      icon: MessageCircle,
      color: "from-green-400 to-emerald-500",
      content: [
        {
          title: "What It Is",
          description: "Intelligent conversations powered by AI for learning and assistance.",
          steps: []
        },
        {
          title: "How to Use",
          description: "",
          steps: [
            "Log in and navigate to the Chat section",
            "Type your query (e.g., \"Explain quantum physics\")",
            "Receive AI-generated responses",
            "Save or share important chats for later reference"
          ]
        },
        {
          title: "Tips for Better Results",
          description: "",
          steps: [
            "Use clear, specific language for better answers",
            "Break complex questions into smaller parts",
            "Avoid sensitive or inappropriate topics",
            "Follow up with related questions to deepen understanding"
          ]
        }
      ]
    },
    {
      title: "Community Tutorial",
      icon: BookOpen,
      color: "from-purple-400 to-violet-500",
      content: [
        {
          title: "What It Is",
          description: "Connect and discuss with other learners and educators.",
          steps: []
        },
        {
          title: "How to Use",
          description: "",
          steps: [
            "Go to the Community tab from the main menu",
            "Browse existing groups or create your own",
            "Post questions, share ideas, or start discussions",
            "Interact via comments, likes, and direct messages"
          ]
        },
        {
          title: "Best Practices",
          description: "",
          steps: [
            "Follow community guidelines and be respectful",
            "Report inappropriate content using the report button",
            "Engage actively to build meaningful connections",
            "Share your knowledge and help others learn"
          ]
        }
      ]
    },
    {
      title: "Quests Tutorial",
      icon: Trophy,
      color: "from-orange-400 to-red-500",
      content: [
        {
          title: "What It Is",
          description: "Gamified learning challenges that make education fun and engaging.",
          steps: []
        },
        {
          title: "How to Use",
          description: "",
          steps: [
            "Access Quests from the main menu",
            "Select a quest that matches your interests or goals",
            "Complete tasks, answer questions, and earn points",
            "Track your progress and achievements in your profile"
          ]
        },
        {
          title: "Maximizing Learning",
          description: "",
          steps: [
            "Quests adapt to your skill level automatically",
            "Repeat quests to reinforce learning and earn more points",
            "Combine different quest types for comprehensive learning",
            "Share your achievements with the community"
          ]
        }
      ]
    },
    {
      title: "Curiosity Centre Tutorial",
      icon: Lightbulb,
      color: "from-teal-400 to-cyan-500",
      content: [
        {
          title: "What It Is",
          description: "Deep-dive exploration hub for in-depth learning on any topic.",
          steps: []
        },
        {
          title: "How to Use",
          description: "",
          steps: [
            "Enter the Curiosity Centre from the main menu",
            "Search for topics or browse curated collections",
            "Engage with AI-curated content and resources",
            "Save favorites and create personal learning paths"
          ]
        },
        {
          title: "Advanced Features",
          description: "",
          steps: [
            "Use filters to find content at your level",
            "Create custom collections of related topics",
            "Share discoveries with friends and study groups",
            "Track your exploration history and interests"
          ]
        }
      ]
    }
  ];

  const quickTips = [
    {
      icon: Settings,
      title: "Customize Your Experience",
      description: "Adjust notifications, themes, and learning preferences in settings."
    },
    {
      icon: AlertCircle,
      title: "Troubleshooting",
      description: "Clear cache, update app, or contact support if you encounter issues."
    },
    {
      icon: Zap,
      title: "Advanced Tips",
      description: "Use offline mode for saved content and explore API integrations."
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
              <span className="gradient-text">Tutorials</span>
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
              Master Budlee AI with our comprehensive tutorials. Learn how to make the most of our AI-powered learning platform.
            </p>
          </div>
        </section>

        {/* Tutorial Sections */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {tutorialSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-10">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] whitespace-nowrap gradient-text">
                    {section.title}
                  </h2>
                </div>

                {/* Content Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-800">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      {item.description && (
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                      {item.steps.length > 0 && (
                        <ol className="space-y-2">
                          {item.steps.map((step, stepIndex) => (
                            <li key={stepIndex} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                              <span className="text-green-500 font-bold mt-1">{stepIndex + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Tips */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/40">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Quick Tips & Tricks</h2>
              <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-medium">
                Make the most of your Budlee AI experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {quickTips.map((tip, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{tip.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Need More Help?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Check out our FAQs or reach out to our support team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/faqs"
                className="inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-lg transition-all duration-300"
              >
                Browse FAQs
              </a>
              <a
                href="/contact"
                className="inline-block border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 font-bold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Contact Support
              </a>
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

export default TutorialsPage;
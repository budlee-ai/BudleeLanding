import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Target, Eye, Heart, Lightbulb, Users, Globe, Atom, FlaskConical, Star, Sparkles } from 'lucide-react';

const MissionVisionPage = () => {
  useEffect(() => {
    mixpanel.track('Mission & Vision Page Viewed');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-16 md:py-5 px-4 md:px-12 lg:px-20 relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50"></div>
          
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
              Our <span className="gradient-text">Mission</span> & Vision
            </h1>
            <p className="text-gray-700 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
              Building the future of education through AI-powered learning that connects understanding with curiosity
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Our Mission</h2>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 md:p-12 rounded-2xl">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center mb-8">
                To empower every student to understand concepts deeply, explore their interests freely, and build real expertise during their school years.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Deep Understanding</h3>
                  <p className="text-gray-600 text-sm">Move beyond memorization to true comprehension</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Interest Discovery</h3>
                  <p className="text-gray-600 text-sm">Guide students toward subjects they love</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Real Expertise</h3>
                  <p className="text-gray-600 text-sm">Build lasting knowledge and skills</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-full mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Our Vision</h2>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center mb-8">
                A world where every student graduates with both academic excellence and a clear understanding of their passions and potential.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">The Problem Today</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      Students memorize without understanding core concepts
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      Interest exploration happens too late in education
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      Learning and upskilling are treated as separate experiences
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">•</span>
                      Parents lack visibility into their child's learning journey
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Vision for Tomorrow</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">•</span>
                      Students understand concepts deeply and intuitively
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">•</span>
                      Interests are discovered and nurtured during school years
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">•</span>
                      Learning creates a foundation for lifelong expertise
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">•</span>
                      Parents actively participate in their child's growth
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Achieve Our Mission */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">How We Achieve Our Mission</h2>
              <p className="text-gray-700 text-xl md:text-2xl font-medium">
                Budlee AI bridges the gap between school learning and interest-driven growth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Connected Learning</h3>
                <p className="text-gray-600">
                  Understanding concepts, practicing, testing, and exploring interests are tightly linked in a single journey.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">AI-Powered Guidance</h3>
                <p className="text-gray-600">
                  Continuous observation of learning patterns helps guide students toward subjects and topics they enjoy.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-red-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Family Involvement</h3>
                <p className="text-gray-600">
                  Parents gain clear visibility into what their child understands, struggles with, and is becoming interested in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact Goals */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap text-white">Our Impact Goals</h2>
            <p className="text-green-100 text-lg mb-8">
              Supporting CBSE and 7 State Syllabuses across Grades 6–10 Science, with our vision extending globally
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">2025</div>
                <div className="text-green-100">Launch Year</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">1K+</div>
                <div className="text-green-100">Students</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">8</div>
                <div className="text-green-100">Curricula & Boards</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-white mb-2">Global</div>
                <div className="text-green-100">Expansion</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Join Our Mission</h2>
            <p className="text-gray-700 text-xl md:text-2xl font-medium mb-8 max-w-2xl mx-auto">
              Help us build the learning companion that empowers every student to reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/schools"
                className="inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn About Budlee AI for Schools
              </a>
              <a
                href="/team"
                className="inline-block border-2 border-green-500 text-green-600 hover:bg-green-50 font-bold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MissionVisionPage;
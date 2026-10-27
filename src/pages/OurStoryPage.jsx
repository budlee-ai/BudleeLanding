import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Atom, FlaskConical, Lightbulb, Star, Sparkles } from 'lucide-react';

const OurStoryPage = () => {
  useEffect(() => {
    mixpanel.track('Our Story Page Viewed');
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
              Our <span className="gradient-text">Story</span>
            </h1>
            <p className="text-gray-700 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
              How four passionate founders came together to revolutionize learning through AI
            </p>
          </div>
        </section>

        {/* Story Content */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {/* The Beginning */}
            <div className="mb-10">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">The Beginning</h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Budlee AI was born from a shared frustration with traditional education. Our founders, who have known each other for several years through startup events and founder communities in Chennai and Bangalore, recognized a fundamental problem: students were memorizing information without truly understanding concepts, and there was no structured way to explore interests during school years.
                </p>
                <p className="mb-4">
                  The team consists of second-time founders with deep experience in technology, AI, and education. Saleej, Abdul, and Irfan connected through early founder networks, while Suhail joined through learning circles and founder communities. This diverse background gave us unique insights into both the technical possibilities and the real-world challenges of education.
                </p>
              </div>
            </div>

            {/* The Problem */}
            <div className="mb-10">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">The Problem We Saw</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Students Memorizing, Not Understanding</h3>
                  <p className="text-gray-600">
                    Even academically strong students often move forward without deep understanding or clarity about what they truly want to pursue, creating a gap between school learning and interest-driven growth.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">No Structured Interest Exploration</h3>
                  <p className="text-gray-600">
                    Students rely heavily on tuition to clear doubts and have no structured way to explore their interests during school, missing opportunities to build real expertise early.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="mb-10">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Our Solution</h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  We started working on Budlee AI in mid-2025, initially as a part-time project while validating our learning flow with real students. Our approach is unique: we connect everyday school learning with guided exploration, creating a single connected journey where understanding concepts, practicing, testing, and exploring interests are tightly linked.
                </p>
                <p className="mb-4">
                  Unlike other learning apps that treat school learning, interest discovery, and skill development as separate experiences, Budlee AI bridges this gap. Students learn each chapter through guided learning packs with short explanations, videos, examples, and quick practice. While studying, they can ask questions in context, and Budlee explains concepts in simple language using visuals and syllabus-aligned examples.
                </p>
                <p className="mb-4">
                  Most importantly, Budlee continuously observes what students study, ask questions about, and spend time on, using this data to actively guide them toward subjects and topics they enjoy, helping them build real expertise from school itself.
                </p>
              </div>
            </div>

            {/* Our Progress */}
            <div className="mb-10">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Where We Are Today</h2>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">2025</div>
                    <div className="text-gray-600">Founded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">CBSE + 7 States</div>
                    <div className="text-gray-600">Curricula Focus</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">6–10</div>
                    <div className="text-gray-600">Grades (Science)</div>
                  </div>
                </div>
                <p className="text-center text-gray-600 mt-6">
                  Based in Bangalore with access to top talent and the education ecosystem, we're building the future of learning with CBSE and State Boards across Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, Maharashtra, and Gujarat.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Join Our Mission</h2>
              <p className="text-gray-700 text-xl md:text-2xl font-medium mb-8 max-w-2xl mx-auto">
                We're just getting started. Help us build the learning companion that every student deserves.
              </p>
              <a
                href="/schools"
                className="inline-block bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn More About Budlee for Schools
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurStoryPage;
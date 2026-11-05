import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Users, Lightbulb, Target, Zap, Shield, Atom, FlaskConical, Star, Sparkles } from 'lucide-react';

const CoreValuesPage = () => {
  useEffect(() => {
    mixpanel.track('Core Values Page Viewed');
  }, []);

  const coreValues = [
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every decision we make starts with the student. We believe in creating learning experiences that adapt to how students actually learn, not how we think they should learn.",
      color: "from-pink-400 to-rose-500",
      details: [
        "Direct feedback from students shapes our product",
        "Learning flows designed around real student behavior",
        "Accessibility and inclusivity at our core"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovation Through Curiosity",
      description: "We embrace curiosity as the foundation of learning. Our AI doesn't just answer questions—it sparks interest and guides students toward deeper exploration.",
      color: "from-yellow-400 to-orange-500",
      details: [
        "Continuous observation of learning patterns",
        "Personalized guidance toward interests",
        "Building expertise from school itself"
      ]
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Learning is not solitary. We believe in connecting students, teachers, and parents in a shared journey of discovery and growth.",
      color: "from-blue-400 to-indigo-500",
      details: [
        "Teachers get clear visibility into class progress",
        "Parents actively participate in learning journeys",
        "Community-driven improvement"
      ]
    },
    {
      icon: Target,
      title: "Practical Problem Solving",
      description: "We identify real problems and build practical solutions. No feature exists just because it's technically impressive—it must serve a genuine learning need.",
      color: "from-green-400 to-emerald-500",
      details: [
        "Real classroom challenges drive our roadmap",
        "Data-driven decision making",
        "Iterating based on actual usage patterns"
      ]
    },
    {
      icon: Zap,
      title: "Fast, Fearless Execution",
      description: "We move quickly, experiment boldly, and learn from every iteration. Building the future of education requires both speed and courage.",
      color: "from-purple-400 to-violet-500",
      details: [
        "Rapid prototyping and testing",
        "Embracing calculated risks",
        "Learning from failures, not avoiding them"
      ]
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We build trust through transparency. Students, parents, and educators should always understand how our AI works and why it makes certain recommendations.",
      color: "from-teal-400 to-cyan-500",
      details: [
        "Clear explanation of AI recommendations",
        "Privacy-first approach to student data",
        "Open communication about our methods"
      ]
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
              Our <span className="gradient-text">Core Values</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do at Budlee AI, from product development to how we work as a team
            </p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-100 dark:border-gray-800 group">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-4">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {value.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Values Matter */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/40">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Why Our Values Matter</h2>
              <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-medium">
                In education technology, values aren't just nice-to-have—they're essential for building trust and creating real impact
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-transparent dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">For Students</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our student-centric approach ensures that Budlee AI adapts to how students actually learn, not how adults think they should learn. This creates more effective, engaging, and personalized learning experiences.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  When students trust their learning companion, they're more likely to engage deeply and build lasting understanding.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-transparent dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">For Educators & Parents</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Transparency and collaboration mean that teachers and parents are active participants in the learning journey, not passive observers. They understand how our AI works and can provide meaningful input.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  This collaborative approach leads to better outcomes for everyone involved in a student's education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Live Our Values */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">How We Live Our Values</h2>
              <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-medium">
                Our values guide our daily work and long-term decisions
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-transparent dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">In Product Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every feature starts with real student needs. We conduct extensive user research, test with actual students, and iterate based on feedback. Our AI recommendations are transparent and explainable, building trust through understanding.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-transparent dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">In Our Team Culture</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We embrace fast execution and fearless experimentation. Team members are encouraged to take calculated risks, learn from failures, and share knowledge openly. Our collaborative approach extends beyond the team to include educators, students, and parents.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-2xl border border-transparent dark:border-gray-800">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">In Our Partnerships</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We work with schools, educators, and parents as true partners. We share data transparently, involve them in decision-making, and ensure our technology serves their needs, not just our business goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 dark:from-gray-900 dark:via-emerald-950/50 dark:to-gray-900 border-t border-b border-transparent dark:border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Experience Our Values in Action</h2>
            <p className="text-green-100 dark:text-gray-300 text-lg mb-8">
              See how our commitment to student-centric, innovative learning is transforming education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.budlee.ai/"
                className="inline-block bg-white dark:bg-gradient-to-r dark:from-green-500 dark:via-emerald-500 dark:to-teal-400 text-green-600 dark:text-white hover:bg-green-50 dark:hover:from-green-600 dark:hover:via-emerald-600 dark:hover:to-teal-500 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Try Budlee AI
              </a>
              <a
                href="/schools"
                className="inline-block border-2 border-white dark:border-gray-700 text-white dark:text-gray-200 hover:bg-white hover:text-green-600 dark:hover:bg-gray-800 dark:hover:text-white font-bold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Learn for Schools
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

export default CoreValuesPage;
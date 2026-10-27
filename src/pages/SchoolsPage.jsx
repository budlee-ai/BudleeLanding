import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { FlaskConical, GraduationCap, Users, School, ArrowRight, Calendar, Beaker, BarChart3, Rocket, Globe, Atom, Lightbulb, Star, Sparkles } from 'lucide-react';

const SchoolsPage = () => {
  useEffect(() => {
    mixpanel.track('Schools Page Viewed');
  }, []);

  const benefits = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Clear understanding of concepts, practice with feedback, and learning that encourages curiosity",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Users,
      title: "Teachers",
      description: "Clear view of how the class is learning, student progress tracking, and chapter-aligned teacher notes",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: School,
      title: "School & Parents",
      description: "Visibility into learning progress and academic growth over time",
      color: "from-teal-400 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header 
        ctaText="Request a School Demo" 
        ctaLink="/contact#demo-form"
      />
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

          <div className="max-w-6xl mx-auto w-full relative z-10">

              {/* Headline with Budlee */}
              <div className="flex items-center justify-center gap-4 md:gap-6 mb-3 md:mb-5">
                <h1 className="hero-tagline text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-center">
                  Budlee for <span className="gradient-text">Schools</span>
                </h1>
                
                {/* Budlee Character - No speech bubble */}
                <img 
                  src="/images/logo.png" 
                  alt="Budlee" 
                  className="w-14 h-14 md:w-20 md:h-20 object-contain animate-bounce-gentle flex-shrink-0"
                />
              </div>
              
              {/* Subtext */}
              <p className="text-gray-600 text-base md:text-lg lg:text-xl text-center max-w-3xl mx-auto mb-6 md:mb-8">
                Budlee supports schools by improving learning clarity, helping teachers guide students better, and keeping parents informed without adding pressure.
              </p>

              {/* Benefit Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    {/* Icon + Title in same row */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                        {benefit.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Prominent CTA Button - Below Cards */}
              <div className="flex justify-center mt-8 md:mt-10">
                <Link to="/contact#demo-form">
                  <Button 
                    className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-8 py-5 md:px-10 md:py-6 text-base md:text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 uppercase tracking-wide"
                  >
                    Request a School Demo
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                  </Button>
                </Link>
              </div>
            </div>
        </section>

        {/* Curriculum Support Section */}
        <section className="w-full bg-white/80 backdrop-blur-sm py-4 md:py-5 px-4 md:px-12 lg:px-20 border-t border-gray-100 relative z-10">
          <div className="max-w-6xl mx-auto flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {/* Curriculum Text */}
              <span className="text-gray-500 font-medium text-sm md:text-base">
                Supporting <span className="gradient-text font-bold">CBSE & 7 State Syllabuses</span>
              </span>
              
              <span className="text-gray-300">·</span>
              
              {/* Science with Icon */}
              <div className="flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-green-500" />
                <span className="text-gray-600 font-medium text-sm md:text-base">Science (Physics, Chemistry, Biology)</span>
              </div>
              
              <span className="text-gray-300">·</span>
              
              {/* Grades Pill */}
              <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 text-white font-bold text-xs md:text-sm px-3 py-1 rounded-full">
                Grades 6–10
              </span>
            </div>
          </div>
        </section>

        {/* Section 2 - How Schools Get Started */}
        <section className="w-full bg-gray-50 py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-2 md:mb-16">
              <h2 className="hero-tagline text-2xl sm:text-3xl md:text-4xl mb-4">
                How <span className="gradient-text">Schools</span> Get Started
              </h2>
              <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                Budlee is introduced through a simple, low-pressure pilot approach.
              </p>
            </div>

            {/* Timeline Steps - Desktop */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-8 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300"></div>
                
                {/* Steps */}
                <div className="grid grid-cols-4 gap-6">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 flex items-center justify-center mb-4 shadow-lg relative z-10">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Step 1</span>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Request a School Demo</h3>
                    <p className="text-gray-500 text-sm">See how Budlee fits your grades and classrooms</p>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 flex items-center justify-center mb-4 shadow-lg relative z-10">
                      <Beaker className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Step 2</span>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Start with a Pilot</h3>
                    <p className="text-gray-500 text-sm">Use Budlee with selected classes</p>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 flex items-center justify-center mb-4 shadow-lg relative z-10">
                      <BarChart3 className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Step 3</span>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Review Progress</h3>
                    <p className="text-gray-500 text-sm">Teachers and school leaders review learning outcomes</p>
                  </div>

                  {/* Step 4 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 flex items-center justify-center mb-4 shadow-lg relative z-10">
                      <Rocket className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Step 4</span>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Expand Gradually</h3>
                    <p className="text-gray-500 text-sm">Scale across grades when ready</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Steps - Mobile (Vertical) */}
            <div className="md:hidden space-y-8">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 flex items-center justify-center shadow-lg">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-0.5 h-full bg-gradient-to-b from-emerald-300 to-emerald-100 mt-2"></div>
                </div>
                <div className="pb-6">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 1</span>
                  <h3 className="text-lg font-bold text-gray-800 mt-1">Request a School Demo</h3>
                  <p className="text-gray-500 text-sm mt-1">See how Budlee fits your grades and classrooms</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 flex items-center justify-center shadow-lg">
                    <Beaker className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-0.5 h-full bg-gradient-to-b from-emerald-300 to-emerald-100 mt-2"></div>
                </div>
                <div className="pb-6">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 2</span>
                  <h3 className="text-lg font-bold text-gray-800 mt-1">Start with a Pilot</h3>
                  <p className="text-gray-500 text-sm mt-1">Use Budlee with selected classes</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-0.5 h-full bg-gradient-to-b from-emerald-300 to-emerald-100 mt-2"></div>
                </div>
                <div className="pb-6">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 3</span>
                  <h3 className="text-lg font-bold text-gray-800 mt-1">Review Progress</h3>
                  <p className="text-gray-500 text-sm mt-1">Teachers and school leaders review learning outcomes</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 flex items-center justify-center shadow-lg">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 4</span>
                  <h3 className="text-lg font-bold text-gray-800 mt-1">Expand Gradually</h3>
                  <p className="text-gray-500 text-sm mt-1">Scale across grades when ready</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - Middle East Presence */}
        <section className="w-full bg-gradient-to-br from-green-50/50 via-white to-emerald-50/30 py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10 md:mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Globe className="w-6 h-6 md:w-7 md:h-7 text-emerald-500" />
                <h2 className="hero-tagline text-2xl sm:text-3xl md:text-4xl">
                  Middle East <span className="gradient-text">Presence</span>
                </h2>
              </div>
              <p className="text-gray-700 text-lg md:text-xl font-medium">
                Budlee AI is live in the Middle East.
              </p>
            </div>

            {/* Partner Card */}
            <div className="flex justify-center">
              <a 
                href="https://kedu.ae/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-lg w-full hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                {/* Gradient Top Border */}
                <div className="h-1.5 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400"></div>
                
                <div className="p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
                  {/* Logo Container */}
                  <div className="flex-shrink-0 w-28 h-28 md:w-32 md:h-32 bg-gray-50 rounded-2xl flex items-center justify-center p-4 border border-gray-100">
                    <img 
                      src="/images/partners/kedu.png" 
                      alt="KEDU Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Partner Info */}
                  <div className="text-center sm:text-left">
                    {/* UAE Badge */}
                    <span className="inline-block bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 text-white font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                      UAE
                    </span>
                    
                    {/* Partner Name */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      KEDU
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      Regional partner supporting school onboarding and implementation.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer 
        ctaText="Talk to Our School Team"
        ctaLink="/contact#demo-form"
        headline="Ready to see Budlee in your classrooms?"
        subtext="Get a guided demo tailored to your grades, subjects, and teaching approach."
      />
    </div>
  );
};

export default SchoolsPage;

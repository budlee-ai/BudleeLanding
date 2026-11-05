import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Briefcase, Code, Smartphone, Palette, Megaphone, MapPin, Clock, DollarSign, Atom, FlaskConical, Lightbulb, Star, Sparkles } from 'lucide-react';

const CareersPage = () => {
  useEffect(() => {
    mixpanel.track('Careers Page Viewed');
  }, []);

  const openPositions = [
    {
      title: "Full Stack Developer - Intern",
      type: "Internship",
      location: "Remote",
      compensation: "Unpaid",
      skills: ["Django", "React", "Backend Development", "Frontend Development"],
      description: "Join our engineering team to build scalable web applications. You'll work on both backend APIs using Django and modern frontend interfaces with React.",
      icon: Code,
      color: "from-blue-400 to-indigo-500",
      formUrl: "https://forms.gle/Cs4bXzwRV111dAvi7"
    },
    {
      title: "Mobile Application Developer - Intern",
      type: "Internship",
      location: "Remote",
      compensation: "Unpaid",
      skills: ["React Native", "Capacitor", "Mobile Development", "Cross-platform"],
      description: "Develop mobile applications using React Native and Capacitor. Help us bring Budlee AI to students' fingertips across iOS and Android platforms.",
      icon: Smartphone,
      color: "from-green-400 to-emerald-500",
      formUrl: "https://forms.gle/YHAEkDf886XmNjYM9"
    },
    {
      title: "UI/UX Frontend Developer - Intern",
      type: "Internship",
      location: "Remote",
      compensation: "Unpaid",
      skills: ["Mobile Responsiveness", "Figma", "HTML", "Tailwind CSS"],
      description: "Create beautiful, responsive user interfaces that work perfectly on all devices. Use Figma for design and Tailwind CSS for implementation.",
      icon: Palette,
      color: "from-purple-400 to-pink-500",
      formUrl: "https://forms.gle/T3Lzy2QqJ7soi7aC8"
    },
    {
      title: "Digital Marketing - Intern",
      type: "Internship",
      location: "Remote",
      compensation: "Unpaid",
      skills: ["Content Marketing", "Social Media", "SEO", "Analytics"],
      description: "Help us reach more students and educators through strategic digital marketing campaigns, content creation, and community building.",
      icon: Megaphone,
      color: "from-orange-400 to-red-500",
      formUrl: "https://forms.gle/eZxZ7ziT4J5ef9JC7"
    },
    {
      title: "Graphics Designer - Intern",
      type: "Internship",
      location: "Remote",
      compensation: "Unpaid",
      skills: ["Graphic Design", "Branding", "Visual Content", "Creative Tools"],
      description: "Create engaging visual content for our platform, marketing materials, and educational resources that inspire learning and creativity.",
      icon: Palette,
      color: "from-yellow-400 to-orange-500",
      formUrl: "https://forms.gle/GYhk5QTRCERUgwAJ8"
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Remote Work",
      description: "Work from anywhere with flexible hours"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Balance your learning and work commitments"
    },
    {
      icon: Briefcase,
      title: "Real Impact",
      description: "Contribute to revolutionizing education"
    },
    {
      icon: DollarSign,
      title: "Competitive Stipend",
      description: "Fair compensation for your valuable contributions"
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
            <h1 className="hero-tagline text-3xl sm:text-4xl md:text-5xl mb-6">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Help us build the future of education. We're looking for passionate individuals who want to make learning more effective, engaging, and accessible for every student.
            </p>
          </div>
        </section>

        {/* Why Join Budlee */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Why Join Budlee AI?</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                We're not just building a product—we're solving real problems in education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Open Positions</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                We're growing our team and looking for talented individuals to join our mission
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 border border-gray-100 dark:border-gray-800">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${position.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <position.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-green-100 dark:bg-green-950/60 text-green-700 dark:text-green-300 text-xs font-medium px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-medium px-3 py-1 rounded-full">
                          {position.location}
                        </span>
                        <span className="bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-xs font-medium px-3 py-1 rounded-full">
                          {position.compensation}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {position.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, idx) => (
                        <span key={idx} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <a
                    href={position.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Culture */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Our Culture</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                We believe in learning through doing, embracing challenges, and building technology that makes a real difference
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Fast-Paced Growth</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're building something meaningful and moving quickly. You'll have the opportunity to learn, grow, and make an immediate impact.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Collaborative Environment</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Work with a diverse team of educators, engineers, and designers who are all passionate about improving education.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 via-red-500 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Innovation Focus</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We encourage creative problem-solving and give you the freedom to experiment with new ideas and technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 dark:from-gray-900 dark:via-emerald-950/50 dark:to-gray-900 border-t border-b border-transparent dark:border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to Apply</h2>
            <p className="text-green-100 dark:text-gray-300 text-lg mb-8">
              We're excited to hear from you! Here's how our application process works
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white/10 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 dark:border-gray-700/60">
                <div className="text-3xl font-bold text-white mb-2">1</div>
                <div className="text-green-100 dark:text-emerald-300">Submit Application</div>
              </div>
              <div className="bg-white/10 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 dark:border-gray-700/60">
                <div className="text-3xl font-bold text-white mb-2">2</div>
                <div className="text-green-100 dark:text-emerald-300">Initial Review</div>
              </div>
              <div className="bg-white/10 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 dark:border-gray-700/60">
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-green-100 dark:text-emerald-300">Technical Interview</div>
              </div>
              <div className="bg-white/10 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 dark:border-gray-700/60">
                <div className="text-3xl font-bold text-white mb-2">4</div>
                <div className="text-green-100 dark:text-emerald-300">Join the Team</div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-green-100 dark:text-gray-300 mb-6">
                Ready to start your journey with Budlee AI?
              </p>
              <a
                href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white dark:bg-gradient-to-r dark:from-green-500 dark:via-emerald-500 dark:to-teal-400 text-green-600 dark:text-white hover:bg-green-50 dark:hover:from-green-600 dark:hover:via-emerald-600 dark:hover:to-teal-500 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply for a Position
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">Questions About Joining Us?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always happy to chat about opportunities at Budlee AI. Reach out to us with any questions.
            </p>
            <a
              href="/contact"
              className="inline-block border-2 border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/40 font-bold px-8 py-4 rounded-xl transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
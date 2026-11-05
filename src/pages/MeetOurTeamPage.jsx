import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Linkedin, Github, Award, MapPin, Calendar, Atom, FlaskConical, Lightbulb, Star, Sparkles } from 'lucide-react';

const MeetOurTeamPage = () => {
  useEffect(() => {
    mixpanel.track('Meet Our Team Page Viewed');
  }, []);

  const teamMembers = [
    {
      name: "Saleej Kuruniyan",
      role: "Co-founder & Head of Technology",
      image: "/images/founders/saleej.jpg",
      bio: "Saleej spearheads our technology vision, bringing over 15 years of experience in building scalable systems at industry leaders like Amazon, Intel, and Samsung. As a seasoned founder, he ensures our platform delivers reliable, high-performance solutions that scale with our growing user base.",
      linkedin: "https://www.linkedin.com/in/saleejkuruniyan/",
      experience: "CTO of Needoo AI Innovations, Senior Software Engineer at Wakeb Data Communications, Ex-Software Engineer at Amazon, Intel and Samsung"
    },
    {
      name: "Abdul Rahim",
      role: "Co-founder & Head of AI",
      image: "/images/founders/abdul.jpg",
      bio: "Abdul drives our AI innovation, leveraging his deep expertise in data architecture and machine learning from his time at Accenture and Proofpoint. He focuses on creating intelligent systems that understand and adapt to educational needs.",
      linkedin: "https://www.linkedin.com/in/abdul-rahim-kamaludeen/",
      experience: "Data Architect at Accenture, Big Data Specialist at Proofpoint"
    },
    {
      name: "Mohammed Irfan",
      role: "Co-founder & Head of Growth",
      image: "/images/founders/irfan.jpg",
      bio: "Irfan leads our growth initiatives, combining his engineering background with a passion for education. Having successfully transitioned from telecom to edtech, he brings valuable insights from real user interactions and market validation.",
      linkedin: "https://www.linkedin.com/in/mohammed--irfan/",
      experience: "Growth & Partnerships at Budlee AI, AI Product Manager at Needoo AI Innovations"
    },
    {
      name: "Suhail Mohammed",
      role: "Co-founder & Head of Product",
      image: "/images/founders/suhail.jpg",
      bio: "Suhail shapes our product experience, drawing from his entrepreneurial journey building AI agents, procurement platforms, and EV solutions. He ensures every feature serves our mission of making learning more effective and engaging.",
      linkedin: "https://www.linkedin.com/in/suhail-in/",
      experience: "Product Head at Kadel Labs, Co-founder of Procuremart.ai"
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
              Meet Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
              Four passionate founders bringing together expertise in AI, engineering, product, and education to revolutionize learning
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
                  {/* Header with Image and Basic Info */}
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
                      {/* Profile Image */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover flex-shrink-0 border-4 border-white dark:border-gray-800 shadow-lg"
                        onContextMenu={(e) => e.preventDefault()}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback Initials */}
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white dark:border-gray-800 shadow-lg" style={{display: 'none'}}>
                        <span className="text-white text-2xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>

                      {/* Name and Role */}
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-1">
                          {member.name}
                        </h3>
                        <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
                          {member.role}
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center sm:justify-start gap-3">
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-600 transition-colors"
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                          {member.github && (
                            <a
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                            >
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Key Experience */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-green-500" />
                        Key Experience
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Culture Section */}
        <section className="w-full bg-gray-50 dark:bg-gray-900/40 py-16 md:py-5 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">
              Our Culture & Values
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-medium mb-8 leading-relaxed">
              We believe in learning through doing, embracing challenges, and building technology that makes a real difference in education.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-transparent dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Problem Solvers</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We identify real problems and build practical solutions, not just chase trends.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-transparent dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">User-Centric</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Every decision is guided by direct feedback from students, teachers, and parents.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-transparent dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Continuous Learners</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We stay curious, experiment boldly, and learn from every iteration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="w-full py-16 md:py-5 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 dark:from-gray-900 dark:via-emerald-950/50 dark:to-gray-900 border-t border-b border-transparent dark:border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap text-white">
              Want to Join Our Team?
            </h2>
            <p className="text-green-100 dark:text-gray-300 text-lg mb-8">
              We're always looking for passionate individuals who want to revolutionize education.
            </p>
            <a
              href="/careers"
              className="inline-block bg-white dark:bg-gradient-to-r dark:from-green-500 dark:via-emerald-500 dark:to-teal-400 text-green-600 dark:text-white hover:bg-green-50 dark:hover:from-green-600 dark:hover:via-emerald-600 dark:hover:to-teal-500 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Open Positions
            </a>
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

export default MeetOurTeamPage;
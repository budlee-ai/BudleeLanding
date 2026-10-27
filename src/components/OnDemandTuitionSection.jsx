import React from 'react';
import { 
  GraduationCap, 
  Video, 
  Calendar, 
  CheckCircle2, 
  Star, 
  BookOpen, 
  Clock, 
  ShieldCheck, 
  Users, 
  Sparkles 
} from 'lucide-react';

const OnDemandTuitionSection = () => {
  return (
    <section 
      aria-label="Budlee AI On-Demand Tuition"
      className="w-full bg-gradient-to-br from-emerald-50/20 via-white to-amber-50/25 py-16 md:py-20 px-4 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Background ambient decorative shapes */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl translate-y-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Right Column on Desktop / Top on Mobile - Storytelling Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            
            {/* Feature Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 mb-5 shadow-2xs">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span className="text-xs md:text-sm font-bold text-emerald-800 tracking-wide uppercase">
                Budlee AI On-Demand Tuition
              </span>
            </div>

            {/* Headline */}
            <h2 className="hero-tagline text-3xl md:text-4xl lg:text-[40px] mb-6 gradient-text leading-tight">
              1-on-1 Live Tuition with Expert Teachers
            </h2>
            
            {/* Story Paragraphs */}
            <div className="space-y-3.5 mb-8 text-gray-700">
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                Some concepts need a <span className="gradient-text font-bold">dedicated human mentor</span>.
              </p>
              <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed">
                Connect with verified, top-tier teachers for 1-on-1 personalized live coaching tailored directly to your CBSE or State Syllabus curriculum.
              </p>
            </div>

            {/* 4 Feature Points Grid */}
            <div className="grid sm:grid-cols-2 gap-3.5 text-left">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-emerald-100 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100/80 flex items-center justify-center text-emerald-600">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm">Verified Subject Experts</h4>
                </div>
                <p className="text-xs text-gray-600 leading-normal">
                  Experienced, screened educators specializing in Grade 6–10 Physics, Chemistry, and Biology.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-emerald-100 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-teal-100/80 flex items-center justify-center text-teal-600">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm">Chapter-Focused</h4>
                </div>
                <p className="text-xs text-gray-600 leading-normal">
                  Target specific lessons—like Force, Cells, or Chemical Equations—ahead of unit tests.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-emerald-100 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-100/80 flex items-center justify-center text-amber-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm">Flexible Scheduling</h4>
                </div>
                <p className="text-xs text-gray-600 leading-normal">
                  Book from 24 hours to 7 days ahead with options for in-session 30m or 60m extensions.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-emerald-100 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100/80 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm">10-Min Punctuality Guarantee</h4>
                </div>
                <p className="text-xs text-gray-600 leading-normal">
                  100% session credit returned if tutor does not arrive within 10 minutes.
                </p>
              </div>
            </div>

          </div>

          {/* Left Column on Desktop / Bottom on Mobile - Live Virtual Classroom Mockup Card */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[380px] md:max-w-[440px]">
              
              {/* Back ambient rotated card border */}
              <div className="absolute -inset-3 bg-gradient-to-br from-green-200/50 via-emerald-100/40 to-teal-100/30 rounded-3xl transform -rotate-1.5 blur-xs" />

              {/* Main Virtual Classroom Preview Card */}
              <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-5 md:p-6 shadow-xl border border-emerald-100 overflow-hidden">
                
                {/* Classroom Status Top Bar */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-bold text-gray-800">
                      Live Classroom • 1-on-1 Session
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    Grade 9 Science
                  </span>
                </div>

                {/* Teacher Profile Info Strip */}
                <div className="bg-gradient-to-r from-emerald-50/70 to-teal-50/50 p-3 rounded-2xl border border-emerald-100/80 mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-green-500 to-teal-500 p-0.5 shadow-sm">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold text-emerald-700 text-sm">
                          DS
                        </div>
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h5 className="font-bold text-gray-900 text-xs md:text-sm">
                        Dr. Ananya Sharma
                      </h5>
                      <p className="text-[11px] text-gray-600 font-medium">
                        M.Sc. Chemistry • CBSE & State Syllabus
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-amber-200/80 shadow-2xs">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                    <span className="text-xs font-bold text-gray-800">4.95</span>
                  </div>
                </div>

                {/* Split Classroom Interaction Window */}
                <div className="bg-gray-900 rounded-2xl p-3 text-white mb-4 shadow-inner relative overflow-hidden">
                  
                  {/* Whiteboard / Document View Top Area */}
                  <div className="bg-slate-800/90 rounded-xl p-3 mb-3 border border-slate-700/60 text-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                        <BookOpen className="w-3 h-3" /> Interactive Lesson Board
                      </span>
                      <span className="text-[10px] text-slate-400">Chapter 1 • Chemical Equations</span>
                    </div>
                    {/* Simulated Board Drawing / Diagram */}
                    <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800 font-mono text-[11px] text-emerald-300 flex items-center justify-between">
                      <span>2H₂ + O₂ ➔ 2H₂O</span>
                      <span className="text-[10px] text-amber-400 font-sans bg-amber-950/50 px-1.5 py-0.5 rounded border border-amber-500/20">
                        Balanced
                      </span>
                    </div>
                  </div>

                  {/* Dual Participant Camera Feeds */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Teacher Camera Feed Box */}
                    <div className="bg-slate-800 rounded-lg p-2.5 flex flex-col justify-between h-20 border border-emerald-500/30 relative">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-emerald-400 truncate">Dr. Ananya (Teacher)</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <div className="flex items-center justify-center">
                        <Video className="w-5 h-5 text-slate-400" />
                      </div>
                      <span className="text-[9px] text-slate-400 text-left">Speaking • Explaining Law</span>
                    </div>

                    {/* Student Camera Feed Box */}
                    <div className="bg-slate-800 rounded-lg p-2.5 flex flex-col justify-between h-20 border border-slate-700 relative">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-slate-200 truncate">Ria (Student)</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      </div>
                      <div className="flex items-center justify-center">
                        <Video className="w-5 h-5 text-slate-400" />
                      </div>
                      <span className="text-[9px] text-slate-400 text-left">Connected • Camera Active</span>
                    </div>
                  </div>

                  {/* Bottom Mini Toolbar */}
                  <div className="flex items-center justify-between pt-3 mt-1 border-t border-slate-800 text-[11px]">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>38:15 / 60:00</span>
                    </div>
                    <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                      Document Co-Browse On
                    </span>
                  </div>

                </div>

                {/* Trust Guarantee Footnote */}
                <div className="flex items-center justify-between text-left text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Protected 1-on-1 Learning</span>
                  </span>
                  <span className="font-semibold text-emerald-700">
                    Book Tomorrow &rsaquo;
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OnDemandTuitionSection;

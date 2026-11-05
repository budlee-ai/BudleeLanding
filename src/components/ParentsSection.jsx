import React from 'react';
import { TrendingUp, Sparkles, BookOpen, Target } from 'lucide-react';

const ParentsSection = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-950 py-16 md:py-5 px-4 md:px-12 lg:px-20 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Headline - Same font as hero tagline with green color */}
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">
              Clarity for parents
            </h2>
            
            {/* Story Lines - First Group */}
            <div className="space-y-3 md:space-y-4 mb-8">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium">
                <span className="gradient-text font-bold">Understanding</span> becomes visible.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium">
                <span className="gradient-text font-bold">Interests</span> appear early.
              </p>
            </div>
            
            {/* Story Lines - Second Group */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium">
                No <span className="text-gray-600 dark:text-gray-300 font-semibold">pressure</span>.
              </p>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium">
                No <span className="text-gray-600 dark:text-gray-300 font-semibold">forced paths</span>.
              </p>
            </div>
          </div>

          {/* Right Side - Parent Dashboard Preview */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-green-100 to-yellow-50 dark:from-emerald-950/60 dark:to-yellow-950/30 rounded-3xl transform rotate-1"></div>
              
              {/* Dashboard Container */}
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 w-[300px] md:w-[400px] overflow-hidden">
                
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">R</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm md:text-base">Ria's Progress</h4>
                      <p className="text-green-100 text-xs">Grade 8 • Science and Math</p>
                    </div>
                  </div>
                  <img 
                    src="/images/logo.png" 
                    alt="Budlee" 
                    className="w-8 h-8 object-contain"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>

                {/* Dashboard Content */}
                <div className="p-5 space-y-5">
                  
                  {/* Understanding Level */}
                  <div className="bg-gray-50 dark:bg-gray-800/90 rounded-xl p-4 border border-transparent dark:border-gray-700/60">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-green-600 dark:text-emerald-400" />
                        <span className="text-gray-700 dark:text-gray-200 font-semibold text-sm">Understanding</span>
                      </div>
                      <span className="text-green-600 dark:text-emerald-400 font-bold text-sm">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">Chapter 5: Light & Reflection</p>
                  </div>

                  {/* Discovered Interests */}
                  <div className="bg-gray-50 dark:bg-gray-800/90 rounded-xl p-4 border border-transparent dark:border-gray-700/60">
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-700 dark:text-gray-200 font-semibold text-sm">Discovered Interests</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 dark:bg-emerald-950/80 text-green-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-medium border border-transparent dark:border-emerald-800/50">Space</span>
                      <span className="bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-transparent dark:border-blue-800/50">AI</span>
                      <span className="bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-transparent dark:border-purple-800/50">Robotics</span>
                      <span className="bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full text-xs font-medium border border-transparent dark:border-orange-800/50">Astronomy</span>
                    </div>
                  </div>

                  {/* Curiosity Score & Learning Pace */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-emerald-950/40 dark:to-emerald-900/40 rounded-xl p-3 text-center border border-transparent dark:border-emerald-800/40">
                      <Target className="w-5 h-5 text-green-600 dark:text-emerald-400 mx-auto mb-1" />
                      <p className="text-green-700 dark:text-emerald-300 font-bold text-lg">92</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">Curiosity Score</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-amber-950/40 dark:to-amber-900/40 rounded-xl p-3 text-center border border-transparent dark:border-amber-800/40">
                      <TrendingUp className="w-5 h-5 text-yellow-600 dark:text-amber-400 mx-auto mb-1" />
                      <p className="text-yellow-700 dark:text-amber-300 font-bold text-lg">Steady</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">Learning Pace</p>
                    </div>
                  </div>

                </div>

                {/* Dashboard Footer */}
                <div className="bg-gray-50 dark:bg-gray-800/90 px-5 py-3 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-gray-500 dark:text-gray-400 text-xs text-center">Updated daily by Budlee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;

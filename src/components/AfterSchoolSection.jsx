import React from 'react';

const AfterSchoolSection = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-950 py-16 md:py-5 px-4 md:px-12 lg:px-20 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Headline - Same font as hero tagline with green color */}
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">
              What happens after school?
            </h2>
            
            {/* Story Lines - First Group */}
            <div className="space-y-3 md:space-y-4 mb-8">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium">
                Homework is done.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium">
                But <span className="gradient-text font-bold">doubts</span> remain.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-medium">
                <span className="gradient-text font-bold">Curiosity</span> <em className="text-gray-500 dark:text-gray-400">quietly fades.</em>
              </p>
            </div>
            
            {/* Story Lines - Second Group */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium">
                Marks don't show <span className="text-gray-700 dark:text-gray-200 font-semibold">understanding</span>.
              </p>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-semibold">
                They never show <span className="gradient-text font-bold">curiosity</span>.
              </p>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-green-100 to-yellow-50 dark:from-emerald-950/60 dark:to-yellow-950/30 rounded-3xl transform rotate-2"></div>
              
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800/90 rounded-3xl p-8 md:p-12 border border-transparent dark:border-gray-800">
                {/* Illustration - Student thinking */}
                <div className="relative">
                  {/* Student figure - SVG illustration */}
                  <svg viewBox="0 0 320 300" className="w-64 md:w-80 h-auto mx-auto">
                    {/* Desk */}
                    <rect x="40" y="210" width="220" height="12" rx="4" fill="#D4A574" />
                    <rect x="50" y="222" width="10" height="50" fill="#C4956A" />
                    <rect x="240" y="222" width="10" height="50" fill="#C4956A" />
                    
                    {/* Book on desk */}
                    <rect x="80" y="190" width="60" height="20" rx="2" fill="#4CAF50" />
                    <rect x="85" y="193" width="50" height="2" fill="#fff" opacity="0.5" />
                    <rect x="85" y="198" width="40" height="2" fill="#fff" opacity="0.5" />
                    <rect x="85" y="203" width="45" height="2" fill="#fff" opacity="0.5" />
                    
                    {/* Another book */}
                    <rect x="145" y="193" width="50" height="17" rx="2" fill="#66BB6A" />
                    
                    {/* Pencil */}
                    <rect x="200" y="195" width="35" height="5" rx="1" fill="#FFB74D" transform="rotate(-10 200 195)" />
                    <polygon points="195,198 200,195 200,200" fill="#F8BBD9" />
                    
                    {/* Student body */}
                    <ellipse cx="150" cy="165" rx="35" ry="25" fill="#64B5F6" />
                    
                    {/* Student head */}
                    <circle cx="150" cy="105" r="40" fill="#FFCC80" />
                    
                    {/* Hair */}
                    <ellipse cx="150" cy="75" rx="38" ry="20" fill="#5D4037" />
                    <ellipse cx="120" cy="90" rx="10" ry="15" fill="#5D4037" />
                    <ellipse cx="180" cy="90" rx="10" ry="15" fill="#5D4037" />
                    
                    {/* Eyes - looking down/tired */}
                    <ellipse cx="135" cy="105" rx="8" ry="6" fill="white" />
                    <ellipse cx="165" cy="105" rx="8" ry="6" fill="white" />
                    <circle cx="135" cy="107" r="4" fill="#333" />
                    <circle cx="165" cy="107" r="4" fill="#333" />
                    
                    {/* Eyebrows - worried */}
                    <path d="M 125 95 Q 135 92 145 95" stroke="#5D4037" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M 155 95 Q 165 92 175 95" stroke="#5D4037" strokeWidth="3" fill="none" strokeLinecap="round" />
                    
                    {/* Mouth - slight frown */}
                    <path d="M 140 123 Q 150 120 160 123" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
                    
                    {/* Hand on chin - thinking pose */}
                    <ellipse cx="170" cy="130" rx="12" ry="10" fill="#FFCC80" />
                    
                    {/* Question marks floating */}
                    <text x="200" y="55" fontSize="28" fill="#4CAF50" fontWeight="bold" opacity="0.7">?</text>
                    <text x="225" y="90" fontSize="22" fill="#FFA726" fontWeight="bold" opacity="0.6">?</text>
                    <text x="85" y="50" fontSize="24" fill="#66BB6A" fontWeight="bold" opacity="0.6">?</text>
                    
                    {/* Thought bubble dots */}
                    <circle cx="195" cy="70" r="4" fill="#E0E0E0" />
                    <circle cx="208" cy="55" r="6" fill="#E0E0E0" />
                    <circle cx="225" cy="40" r="8" fill="#E0E0E0" />
                  </svg>
                </div>
                
                {/* Budlee Character - Peeking from bottom right corner */}
                <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8">
                  <div className="relative">
                    {/* Thought bubble from Budlee */}
                    <div className="absolute -top-10 -left-16 bg-white rounded-full px-3 py-1 shadow-md animate-bounce-gentle">
                      <span className="text-xs text-gray-600 font-medium">🤔</span>
                    </div>
                    {/* Budlee peeking with animation */}
                    <img 
                      src="/images/logo.png" 
                      alt="Budlee" 
                      className="w-20 h-20 md:w-24 md:h-24 object-contain animate-peek-a-boo cursor-pointer hover:scale-110 transition-transform duration-300"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterSchoolSection;

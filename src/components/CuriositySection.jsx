import React from 'react';

const CuriositySection = () => {
  const interestTopics = [
    { name: "Space", angle: 0, size: "large", delay: "0s" },
    { name: "AI", angle: 45, size: "large", delay: "0.5s" },
    { name: "Robotics", angle: 90, size: "medium", delay: "1s" },
    { name: "Quantum", angle: 135, size: "small", delay: "0.3s" },
    { name: "Mars", angle: 180, size: "medium", delay: "0.8s" },
    { name: "Coding", angle: 225, size: "small", delay: "1.2s" },
    { name: "Astronomy", angle: 270, size: "medium", delay: "0.6s" },
    { name: "Neurons", angle: 315, size: "small", delay: "0.2s" },
  ];

  const getSizeClasses = (size) => {
    switch(size) {
      case 'large':
        return 'px-4 py-2 text-sm md:text-base font-bold';
      case 'medium':
        return 'px-3 py-1.5 text-xs md:text-sm font-semibold';
      case 'small':
        return 'px-2.5 py-1 text-xs font-medium';
      default:
        return 'px-3 py-1.5 text-sm font-semibold';
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-green-50/50 via-white to-yellow-50/30 py-16 md:py-5 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Right Side on Desktop / Bottom on Mobile - Circular Orbital Design */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-2">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-gradient-to-br from-green-200/30 to-yellow-200/30 rounded-full blur-xl -m-4"></div>
              
              {/* Main Circular Container */}
              <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full bg-gradient-to-br from-white to-green-50/80 shadow-2xl border-4 border-white">
                
                {/* Orbital rings */}
                <div className="absolute inset-4 md:inset-6 rounded-full border border-green-200/40"></div>
                <div className="absolute inset-12 md:inset-16 rounded-full border border-green-200/30"></div>
                <div className="absolute inset-20 md:inset-24 rounded-full border border-green-200/20"></div>

                {/* Floating Interest Bubbles - Evenly distributed at 45° intervals */}
                {interestTopics.map((topic, index) => {
                  // Calculate position based on angle (0° = right, 90° = bottom, 180° = left, 270° = top)
                  const radius = 105; // distance from center in px for desktop (reduced from 120)
                  const mobileRadius = 85; // distance from center for mobile (reduced from 95)
                  const angleInRadians = (topic.angle * Math.PI) / 180;
                  
                  return (
                    <div
                      key={index}
                      className="absolute animate-float-slow z-10 hidden md:block"
                      style={{
                        left: `calc(50% + ${Math.cos(angleInRadians) * radius}px)`,
                        top: `calc(50% + ${Math.sin(angleInRadians) * radius}px)`,
                        transform: 'translate(-50%, -50%)',
                        animationDelay: topic.delay
                      }}
                    >
                      <div className={`bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap ${getSizeClasses(topic.size)}`}>
                        {topic.name}
                      </div>
                    </div>
                  );
                })}

                {/* Mobile version of bubbles */}
                {interestTopics.map((topic, index) => {
                  const mobileRadius = 85;
                  const angleInRadians = (topic.angle * Math.PI) / 180;
                  
                  return (
                    <div
                      key={`mobile-${index}`}
                      className="absolute animate-float-slow z-10 md:hidden"
                      style={{
                        left: `calc(50% + ${Math.cos(angleInRadians) * mobileRadius}px)`,
                        top: `calc(50% + ${Math.sin(angleInRadians) * mobileRadius}px)`,
                        transform: 'translate(-50%, -50%)',
                        animationDelay: topic.delay
                      }}
                    >
                      <div className={`bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer whitespace-nowrap ${getSizeClasses(topic.size)}`}>
                        {topic.name}
                      </div>
                    </div>
                  );
                })}

                {/* Budlee Character - Center, like a sun */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative">
                    {/* Budlee with observing animation - increased size */}
                    <img 
                      src="/images/logo.png" 
                      alt="Budlee" 
                      className="w-20 h-20 md:w-24 md:h-24 object-contain animate-nod cursor-pointer hover:scale-110 transition-transform duration-300"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side on Desktop / Top on Mobile - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-1">
            {/* Headline - Same font as hero tagline with green color */}
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">
              When curiosity shows up
            </h2>
            
            {/* Story Lines */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                Some students return to <span className="gradient-text font-bold">space</span>.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                Some explore <span className="gradient-text font-bold">physics</span> deeper.
              </p>
              <p className="text-xl md:text-2xl text-gray-500 font-medium mt-6">
                Budlee <span className="gradient-text font-semibold italic">notices</span> ~ and <span className="gradient-text font-bold">follows</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuriositySection;

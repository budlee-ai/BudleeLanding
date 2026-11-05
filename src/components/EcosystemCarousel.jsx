import React, { useRef, useEffect } from 'react';

const basePartners = [
  {
    name: 'Mohammed Bin Rashid Innovation Fund',
    logo: '/images/ecosystem/activate.png',
    heightClass: 'h-8 md:h-10',
  },
  {
    name: 'NVIDIA Inception Program',
    logo: '/images/ecosystem/nvidia.png',
    heightClass: 'h-10 md:h-12',
  },
  {
    name: 'Startup India',
    logo: '/images/ecosystem/startup_india.png',
    heightClass: 'h-8 md:h-10',
  },
  {
    name: 'Startup Kerala',
    logo: '/images/ecosystem/startup_kerala.png',
    heightClass: 'h-14 md:h-16',
  },
  {
    name: 'Microsoft for Startups',
    logo: '/images/ecosystem/startup_microsoft.png',
    heightClass: 'h-14 md:h-16',
  },
];

// Duplicate for seamless infinite loop
const partners = [...basePartners, ...basePartners];

const EcosystemCarousel = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const speedRef = useRef(0.6); // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      positionRef.current += speedRef.current;
      const halfWidth = track.scrollWidth / 2;
      if (positionRef.current >= halfWidth) {
        positionRef.current = 0;
      }
      track.style.transform = `translateX(-${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleMouseEnter = () => { speedRef.current = 0; };
  const handleMouseLeave = () => { speedRef.current = 0.6; };

  return (
    <section className="w-full bg-white dark:bg-gray-950 py-12 md:py-16 overflow-hidden transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-20 text-center mb-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full px-4 py-1.5 mb-5 shadow-sm">
          <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Backed by the Best</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
          Supported by leading ecosystem partners
        </h2>
      </div>

      {/* Scrolling track container — constrained to content width */}
      <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-20">
        <div
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left fade gradient */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-white dark:from-gray-950 to-transparent"
          />
          {/* Right fade gradient */}
          <div
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-white dark:from-gray-950 to-transparent"
          />

          <div
            ref={trackRef}
            className="flex items-center"
            style={{ willChange: 'transform', width: 'max-content' }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center px-10 py-4"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`${partner.heightClass} w-auto object-contain grayscale dark:brightness-125 dark:invert hover:grayscale-0 dark:hover:invert-0 transition-all duration-300 hover:scale-105`}
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemCarousel;

import React, { useState } from 'react';
import { Mic, Headphones, Sparkles, Volume2, Globe, Play } from 'lucide-react';

const VoiceTutorSection = () => {
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);

  const toggleDemo = () => {
    setIsPlayingDemo(!isPlayingDemo);
  };

  return (
    <section 
      aria-label="AI Voice Tutor Feature"
      className="w-full bg-gradient-to-br from-white via-emerald-50/20 to-teal-50/15 py-16 md:py-20 px-4 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* Background ambient decorative shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl translate-y-1/3 translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column on Desktop / Top on Mobile - Storytelling Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-1">
            
            {/* Feature Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-2xs">
                <Headphones className="w-4 h-4 text-emerald-600 animate-pulse" />
                <span className="text-xs md:text-sm font-bold text-emerald-800 tracking-wide uppercase">
                  AI Voice Tutor
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                <span className="text-xs md:text-sm font-bold text-teal-800 tracking-wide uppercase">
                  Teach Me
                </span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="hero-tagline text-3xl md:text-4xl lg:text-[40px] mb-6 gradient-text leading-tight">
              Talk naturally. Learn aloud.
            </h2>
            
            {/* Story Paragraphs */}
            <div className="space-y-3.5 mb-8 text-gray-700">
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                No typing required. Just ask your doubts <span className="gradient-text font-bold">out loud</span>.
              </p>
              <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed">
                Budlee listens patiently, breaks down complex Science concepts, and responds in friendly, real-time voice conversations.
              </p>
            </div>

            {/* Highlighted Micro-Cards */}
            <div className="grid sm:grid-cols-2 gap-3.5 text-left">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-emerald-100 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100/80 flex items-center justify-center text-emerald-600">
                    <Mic className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm">Hands-Free Learning</h4>
                </div>
                <p className="text-xs text-gray-600 leading-normal">
                  Speak doubts while studying or solving homework without stopping to type.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-emerald-100 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-teal-100/80 flex items-center justify-center text-teal-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm">Adaptive Explanations</h4>
                </div>
                <p className="text-xs text-gray-600 leading-normal">
                  Simplifies challenging Physics, Chemistry, and Biology terms into friendly analogies.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column on Desktop / Bottom on Mobile - Interactive Voice Mockup Card */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-2">
            <div className="relative w-full max-w-[360px] md:max-w-[420px]">
              
              {/* Decorative back rotated aura card */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-emerald-200/50 via-teal-100/40 to-yellow-100/30 rounded-3xl transform rotate-1.5 blur-xs" />

              {/* Main Simulated Phone / Voice Call Container */}
              <div className="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-emerald-100 overflow-hidden">
                
                {/* Voice Status Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                      Budlee Voice • Live Call
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                    Grade 6–10 Science
                  </span>
                </div>

                {/* Central Voice Pulsing Circle with Budlee Avatar */}
                <div className="flex flex-col items-center justify-center my-4 py-2">
                  <div className="relative flex items-center justify-center">
                    
                    {/* Concentric Ambient Waves */}
                    <div className="absolute w-36 h-36 rounded-full bg-emerald-400/10 animate-ping" style={{ animationDuration: '3s' }} />
                    <div className="absolute w-28 h-28 rounded-full bg-teal-400/20 animate-pulse" style={{ animationDuration: '2s' }} />
                    
                    {/* Avatar Circle */}
                    <div className="relative w-20 h-20 md:w-22 md:h-22 rounded-full bg-gradient-to-tr from-green-400 via-emerald-400 to-teal-400 p-1 shadow-lg shadow-emerald-500/20">
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-2.5">
                        <img
                          src="/images/logo.png"
                          alt="Budlee AI Voice Assistant"
                          className="w-full h-full object-contain animate-bounce-gentle select-none"
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sound Wave Equalizer Bars */}
                  <div className="flex items-center gap-1.5 mt-5 h-6">
                    <span className="w-1 bg-emerald-500 rounded-full animate-sound-bar" style={{ animationDuration: '0.8s' }} />
                    <span className="w-1 bg-emerald-400 rounded-full animate-sound-bar" style={{ animationDuration: '1.2s' }} />
                    <span className="w-1 bg-teal-500 rounded-full animate-sound-bar" style={{ animationDuration: '0.6s' }} />
                    <span className="w-1 bg-emerald-600 rounded-full animate-sound-bar" style={{ animationDuration: '1.4s' }} />
                    <span className="w-1 bg-teal-400 rounded-full animate-sound-bar" style={{ animationDuration: '0.9s' }} />
                    <span className="w-1 bg-emerald-500 rounded-full animate-sound-bar" style={{ animationDuration: '1.1s' }} />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 tracking-wide mt-1.5">
                    Budlee is explaining...
                  </span>
                </div>

                {/* Simulated Dialogue Conversation Snippet */}
                <div className="space-y-3 pt-2">
                  {/* Student Question Bubble */}
                  <div className="flex justify-end">
                    <div className="bg-emerald-500 text-white rounded-2xl rounded-tr-xs px-4 py-2.5 max-w-[85%] shadow-xs">
                      <p className="text-xs md:text-sm font-medium leading-snug">
                        "Budlee, why do leaves change color in autumn?"
                      </p>
                    </div>
                  </div>

                  {/* Budlee Answer Bubble */}
                  <div className="flex items-start gap-2 justify-start">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="bg-gray-50 border border-gray-100 text-gray-800 rounded-2xl rounded-tl-xs px-4 py-2.5 max-w-[85%] shadow-xs">
                      <p className="text-xs md:text-sm leading-snug">
                        "When daylight decreases, chlorophyll breaks down, letting warm yellow & orange carotenoids shine through!"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Call Controls Bar */}
                <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                      <Mic className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-gray-600 font-medium">Microphone On</span>
                  </div>
                  
                  <span className="text-[11px] font-bold text-gray-500 bg-gray-100/80 px-2.5 py-1 rounded-md">
                    Instant Voice AI
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Embedded CSS for equalizer animations */}
      <style>{`
        @keyframes soundBar {
          0%, 100% { height: 6px; }
          50% { height: 22px; }
        }
        .animate-sound-bar {
          animation: soundBar 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default VoiceTutorSection;

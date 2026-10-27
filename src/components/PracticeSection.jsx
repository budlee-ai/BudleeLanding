import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";

const PracticeSection = ({ videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-white py-16 md:py-5 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Right Side on Desktop / Top on Mobile - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            {/* Headline - Same font as hero tagline with green color */}
            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text">
              Practice that actually helps
            </h2>
            
            {/* Story Lines */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                <span className="gradient-text font-bold">Section-wise</span> questions.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                <span className="gradient-text font-bold">Instant</span> feedback.
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium">
                Mistakes become <span className="gradient-text font-bold">learning signals</span>.
              </p>
            </div>
          </div>

          {/* Left Side on Desktop / Bottom on Mobile - Video Placeholder/Trigger */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <div className="relative cursor-pointer group/hero">
                  {/* Decorative background shape */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-yellow-100 to-green-50 rounded-3xl transform rotate-2 group-hover/hero:rotate-1 transition-transform duration-500"></div>
                  
                  {/* Video Frame Container */}
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl w-[300px] h-[220px] md:w-[420px] md:h-[280px] border-4 border-white">
                    {/* Video Placeholder Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-green-50">
                      {/* Decorative elements inside video frame */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-yellow-200 rounded-full opacity-40"></div>
                      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-green-200 rounded-full opacity-30"></div>
                      
                      {/* Question/Answer hint bubbles */}
                      <div className="absolute top-8 left-8 bg-white/70 rounded-xl px-3 py-1.5 shadow-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-green-500 text-sm font-bold">Q1</span>
                          <div className="w-16 h-1.5 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      <div className="absolute top-20 left-12 bg-green-100/80 rounded-xl px-3 py-1.5 shadow-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-green-600 text-xs">✓</span>
                          <div className="w-12 h-1.5 bg-green-300 rounded"></div>
                        </div>
                      </div>
                      <div className="absolute top-32 right-8 bg-white/70 rounded-xl px-3 py-1.5 shadow-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-green-500 text-sm font-bold">Q2</span>
                          <div className="w-14 h-1.5 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Play Button */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group z-10">
                      <div className="relative">
                        {/* Outer pulsing ring */}
                        <div className="absolute inset-0 w-20 h-20 -m-2 rounded-full bg-teal-400/30 animate-ping"></div>
                        {/* Main button */}
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 flex items-center justify-center shadow-lg">
                            <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Budlee Character - Bottom left with encouraging message */}
                    <div className="absolute bottom-12 left-8 md:bottom-14 md:left-12 z-20">
                      <div className="relative">
                        {/* Speech bubble - Encouraging message */}
                        <div className="absolute -top-10 md:-top-11 left-1/2 -translate-x-1/2 bg-white rounded-xl px-3 py-1.5 shadow-lg whitespace-nowrap">
                          <span className="text-gray-700 text-xs md:text-sm font-semibold">Keep learning!</span>
                          {/* Bubble tail */}
                          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white transform rotate-45"></div>
                        </div>
                        {/* Budlee with nod animation - increased size */}
                        <img 
                          src="/images/logo.png" 
                          alt="Budlee" 
                          className="w-16 h-16 md:w-20 md:h-20 object-contain animate-nod cursor-pointer hover:scale-110 transition-transform duration-300"
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-5xl p-0 bg-black border-none overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.4)] sm:rounded-2xl border-white/10 [&>button]:hidden">
                <div className="relative aspect-video w-full group/video">
                  <video 
                    className="w-full h-full"
                    controls
                    autoPlay
                    playsInline
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                    key={videoUrl}
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Custom Close Button for video player */}
                  <DialogClose className="absolute top-4 right-4 text-white/70 hover:text-white transition-all z-50 p-2 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md opacity-0 group-hover/video:opacity-100 focus:opacity-100">
                    <X size={24} />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;

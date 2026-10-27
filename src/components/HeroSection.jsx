import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Play, Atom, FlaskConical, Lightbulb, Star, Sparkles, X, ChevronLeft, ChevronRight, Film } from 'lucide-react';
import { Button } from './ui/button';
import { heroData } from '../data/mock.js';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";

const HeroSection = ({ videoUrl, videos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Normalize inputs: support either array of video objects, array of strings, or single videoUrl
  const videoList = useMemo(() => {
    if (Array.isArray(videos) && videos.length > 0) {
      return videos.map((v, idx) => (
        typeof v === 'string'
          ? { url: v, title: `Video ${idx + 1}`, index: idx }
          : { ...v, title: v.title || `Video ${idx + 1}`, index: idx }
      ));
    }
    if (videoUrl) {
      return [{ url: videoUrl, title: 'Overview', index: 0 }];
    }
    return [];
  }, [videos, videoUrl]);

  // Reset to first video when dialog opens
  useEffect(() => {
    if (isOpen) {
      setActiveVideoIndex(0);
    }
  }, [isOpen]);

  const currentVideo = videoList[activeVideoIndex] || videoList[0];

  const handlePrevVideo = useCallback((e) => {
    if (e) e.stopPropagation();
    if (videoList.length <= 1) return;
    setActiveVideoIndex((prev) => (prev - 1 + videoList.length) % videoList.length);
  }, [videoList.length]);

  const handleNextVideo = useCallback((e) => {
    if (e) e.stopPropagation();
    if (videoList.length <= 1) return;
    setActiveVideoIndex((prev) => (prev + 1) % videoList.length);
  }, [videoList.length]);

  // Keyboard navigation when dialog is open
  useEffect(() => {
    if (!isOpen || videoList.length <= 1) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevVideo();
      } else if (e.key === 'ArrowRight') {
        handleNextVideo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, videoList.length, handlePrevVideo, handleNextVideo]);

  return (
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

      {/* Main Hero Content */}
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Mobile: Column-reverse (text first, then video), Desktop: Row */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
          
          {/* Left Side - Tilted Image with Play Button */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <div className="relative transform rotate-2 hover:rotate-0 transition-all duration-500 cursor-pointer group/hero">
                  {/* Shadow underneath */}
                  <div className="absolute inset-0 bg-green-200/50 rounded-2xl md:rounded-3xl transform translate-x-3 translate-y-3 -rotate-1 group-hover/hero:translate-x-4 group-hover/hero:translate-y-4 transition-transform"></div>
                  
                  {/* Main Image Container - Smaller on mobile */}
                  <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-white border-2 md:border-4 border-white w-[300px] h-[230px] md:w-[420px] md:h-[320px]">
                    <img
                      src={heroData.heroImage}
                      alt="Student learning with Budlee AI"
                      className="w-full h-full object-cover object-center group-hover/hero:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Play Button - Prominent and Clickable */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group">
                      <div className="relative">
                        {/* Outer pulsing ring */}
                        <div className="absolute inset-0 w-14 h-14 md:w-20 md:h-20 -m-1 md:-m-2 rounded-full bg-white/30 animate-ping"></div>
                        {/* Main button */}
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                          <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-teal-400 flex items-center justify-center shadow-lg">
                            <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-white ml-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Badge if Multiple Videos Exist */}
                    {videoList.length > 1 && (
                      <div className="absolute top-3 right-3 z-20 bg-black/65 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                        <Film className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{videoList.length} Videos</span>
                      </div>
                    )}
                  </div>

                  {/* Decorative curved line - Hidden on mobile */}
                  <svg className="absolute -left-6 bottom-1/4 w-16 h-16 text-green-400 opacity-60 hidden md:block" viewBox="0 0 100 100">
                    <path d="M 10 50 Q 50 10 90 50" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-5xl p-0 bg-black border-none overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.4)] sm:rounded-2xl border-white/10 [&>button]:hidden">
                <div className="relative aspect-video w-full group/video bg-black select-none">
                  
                  {/* Active Video Player */}
                  <video 
                    className="w-full h-full"
                    controls
                    autoPlay
                    playsInline
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                    key={currentVideo?.url}
                  >
                    {currentVideo?.url && <source src={currentVideo.url} type="video/mp4" />}
                    Your browser does not support the video tag.
                  </video>

                  {/* Carousel Controls when more than 1 video */}
                  {videoList.length > 1 && (
                    <>
                      {/* Previous Video Button */}
                      <button 
                        type="button"
                        onClick={handlePrevVideo}
                        className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl opacity-80 hover:opacity-100 hover:scale-110 active:scale-95 transition-all z-50 cursor-pointer"
                        aria-label="Previous Video"
                      >
                        <ChevronLeft className="w-6 h-6 -ml-0.5" />
                      </button>

                      {/* Next Video Button */}
                      <button 
                        type="button"
                        onClick={handleNextVideo}
                        className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl opacity-80 hover:opacity-100 hover:scale-110 active:scale-95 transition-all z-50 cursor-pointer"
                        aria-label="Next Video"
                      >
                        <ChevronRight className="w-6 h-6 -mr-0.5" />
                      </button>

                      {/* Bottom Center Indicator Dots */}
                      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                        {videoList.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setActiveVideoIndex(idx)}
                            className={`transition-all rounded-full cursor-pointer ${
                              idx === activeVideoIndex
                                ? 'w-6 h-2 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]'
                                : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                            }`}
                            aria-label={`Jump to video ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                  
                  {/* Custom Close Button for video player */}
                  <DialogClose className="absolute top-4 right-4 text-white/70 hover:text-white transition-all z-50 p-2 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md opacity-0 group-hover/video:opacity-100 focus:opacity-100 cursor-pointer">
                    <X size={24} />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
            
            {/* Budlee Character with Speech Bubble */}
            <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-6 z-20">
              {/* Speech Bubble */}
              <div className="absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 bg-white rounded-xl md:rounded-2xl px-3 py-1.5 md:px-4 md:py-2 shadow-lg whitespace-nowrap">
                <span className="text-gray-700 font-semibold text-xs md:text-sm">Talk to Budlee</span>
                {/* Bubble tail */}
                <div className="absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-white transform rotate-45"></div>
              </div>
              {/* Budlee Character - Smaller on mobile */}
              <img 
                src="/images/logo.png" 
                alt="Budlee" 
                className="w-14 h-14 md:w-20 md:h-20 object-contain animate-bounce-gentle cursor-pointer hover:scale-110 transition-transform"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="text-center mb-6 md:mb-8">
              {/* Tag - Small, uppercase, letter-spaced with pill background */}
              <span className="inline-block text-xs md:text-sm text-emerald-700 font-medium uppercase tracking-[0.2em] mb-4 md:mb-5 bg-emerald-100/80 px-4 py-1.5 rounded-full">
                AI Learning Companion
              </span>
              {/* Tagline - Smaller on mobile, allows wrapping */}
              <h1 className="hero-tagline text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                Understands how students learn
              </h1>
              <h1 className="hero-tagline text-xl sm:text-2xl md:text-3xl lg:text-[32px] mt-1">
                and helps <span className="gradient-text">curiosity</span> grow early.
              </h1>
            </div>

            {/* CTA Buttons - Centered */}
            <div className="flex flex-col items-center gap-3 md:gap-4 w-full max-w-sm px-4 md:px-0">
              <a href="https://app.budlee.ai/" rel="noopener noreferrer" className="w-full">
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold px-6 py-5 md:px-8 md:py-7 text-sm md:text-base rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  Start Learning with Budlee
                  <span className="text-lg">→</span>
                </Button>
              </a>
              
              {/* School Link */}
              <p className="text-gray-500 text-sm md:text-base mt-1 md:mt-2 text-center">
                Are you a school?{' '}
                <a 
                  href="/schools" 
                  className="gradient-text font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  Get Budlee for Your School
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

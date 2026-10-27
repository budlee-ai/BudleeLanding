import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Loader2 } from 'lucide-react';

// ==========================================
// CONFIGURATION
// Set this to true after the event is over to directly redirect users to the homepage.
const IS_AFTER_EVENT = false;
// ==========================================

class ConfettiParticle {
  constructor(canvasWidth, canvasHeight, startFromSide) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    // Brand colors matching Budlee AI palette (greens, oranges, yellows) plus festive colors
    const colors = [
      '#22c55e', // green-500
      '#f97316', // orange-500
      '#eab308', // yellow-500
      '#3b82f6', // blue-500
      '#ec4899', // pink-500
      '#a855f7', // purple-500
      '#10b981', // emerald-500
      '#f43f5e', // rose-500
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.size = Math.random() * 8 + 6; // 6px to 14px

    if (startFromSide === 'left') {
      // Cannon blast from bottom-left corner
      this.x = 0;
      this.y = canvasHeight;
      const angle = (Math.random() * 45 + 15) * (Math.PI / 180); // 15 to 60 degrees
      const velocity = Math.random() * 25 + 15;
      this.vx = Math.cos(angle) * velocity;
      this.vy = -Math.sin(angle) * velocity;
    } else if (startFromSide === 'right') {
      // Cannon blast from bottom-right corner
      this.x = canvasWidth;
      this.y = canvasHeight;
      const angle = (Math.random() * 45 + 120) * (Math.PI / 180); // 120 to 165 degrees
      const velocity = Math.random() * 25 + 15;
      this.vx = Math.cos(angle) * velocity;
      this.vy = -Math.sin(angle) * velocity;
    } else {
      // General ceiling rain
      this.x = Math.random() * canvasWidth;
      this.y = -20 - Math.random() * 20;
      this.vx = Math.random() * 4 - 2;
      this.vy = Math.random() * 3 + 2;
    }

    this.gravity = 0.45;
    this.drag = 0.97;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 6 - 3;
    this.opacity = 1.0;
    this.fadeOutSpeed = 0.006 + Math.random() * 0.006;
    this.shapeType = Math.floor(Math.random() * 3); // 0 = rect, 1 = circle, 2 = triangle
  }

  update() {
    this.vx *= this.drag;
    this.vy = (this.vy * this.drag) + this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotationSpeed;

    // Fade out when falling
    if (this.vy > 1) {
      this.opacity -= this.fadeOutSpeed;
    }
  }

  draw(ctx) {
    if (this.opacity <= 0) return;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;

    ctx.beginPath();
    if (this.shapeType === 0) {
      // Rectangle
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 1.5);
    } else if (this.shapeType === 1) {
      // Circle
      ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Triangle
      ctx.moveTo(0, -this.size / 2);
      ctx.lineTo(this.size / 2, this.size / 2);
      ctx.lineTo(-this.size / 2, this.size / 2);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }
}

const TuitionLaunchPage = () => {
  const navigate = useNavigate();

  // States: 'ready' | 'launching' | 'live'
  const [state, setState] = useState('ready');
  const [countdown, setCountdown] = useState(5);
  const [redirectCountdown, setRedirectCountdown] = useState(5);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameIdRef = useRef(null);
  const stateRef = useRef(state);

  // Set document title
  useEffect(() => {
    document.title = 'Budlee AI - Tuition Launch';
  }, []);

  // Keep stateRef synced for access in requestAnimationFrame loops
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  // Immediate redirect check if the event is over
  useEffect(() => {
    if (IS_AFTER_EVENT) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  // Canvas resize and animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);

        // Remove dead particles
        if (p.opacity <= 0 || p.y > canvas.height + 20 || p.x < -20 || p.x > canvas.width + 20) {
          particles.splice(i, 1);
        }
      }

      // If we are in 'launching' state, spawn continuous falling confetti rain
      if (stateRef.current === 'launching' && Math.random() < 0.4) {
        for (let j = 0; j < 3; j++) {
          particles.push(new ConfettiParticle(canvas.width, canvas.height));
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  const triggerCannonBurst = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const particles = particlesRef.current;

    // Shoot 120 particles from the bottom left corner
    for (let i = 0; i < 120; i++) {
      particles.push(new ConfettiParticle(canvas.width, canvas.height, 'left'));
    }

    // Shoot 120 particles from the bottom right corner
    for (let i = 0; i < 120; i++) {
      particles.push(new ConfettiParticle(canvas.width, canvas.height, 'right'));
    }
  };

  const handleLaunchClick = () => {
    // 1. Remove the button immediately and set state to launching
    setState('launching');
    setCountdown(5);

    // 2. Play celebration (cannon bursts)
    setTimeout(() => {
      triggerCannonBurst();
    }, 100);

    // Keep shooting mini-bursts every 1.2s for celebration dynamic effect
    const burstInterval = setInterval(() => {
      triggerCannonBurst();
    }, 1200);

    // 3. Countdown timer interval ticking every second
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          clearInterval(burstInterval);

          // Transition to live state
          setState('live');

          // Trigger final grand burst
          setTimeout(() => {
            triggerCannonBurst();
          }, 100);

          // Keep the final screen visible for 5 seconds then redirect to home
          setRedirectCountdown(5);
          const redirectInterval = setInterval(() => {
            setRedirectCountdown((rPrev) => {
              if (rPrev <= 1) {
                clearInterval(redirectInterval);
                window.location.href = 'https://budlee.ai';
                return 0;
              }
              return rPrev - 1;
            });
          }, 1000);

          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // If redirected, render nothing
  if (IS_AFTER_EVENT) {
    return null;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#030712] text-white overflow-hidden font-sans">
      {/* Background ambient glowing spheres */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px] animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-yellow-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Confetti canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-50 w-full h-full"
      />

      {/* Main card container */}
      <div className="relative z-10 w-full max-w-4xl px-6 text-center flex flex-col items-center">

        {/* Top Logo Badge - floating and glowing */}
        <div className="flex flex-col items-center mb-6 animate-fade-in-down select-none">
          <img src="/images/logo_tagline_white.png" alt="Budlee AI" className="h-14 md:h-16 object-contain" />
          <span className="text-sm md:text-base font-bold text-green-400 bg-green-950/50 px-5 py-2 rounded-full uppercase tracking-widest border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.15)] mt-3">
            Tuition Launch
          </span>
        </div>

        {/* Dynamic content states */}
        {state === 'ready' && (
          <div className="flex flex-col items-center animate-fade-in">
            {/* VIP/Honorable Guest info */}
            <div className="space-y-1.5 mb-5 w-full flex flex-col items-center">
              {/* Avatar Container */}
              <div className="relative mb-3 select-none">
                {/* Glow ring behind the photo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 opacity-20 blur-md scale-105" />

                {/* Gold gradient border wrapper */}
                <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-200 to-orange-500 shadow-2xl">
                  <img
                    src="/images/sahid.png"
                    alt="Dr. Sahid Cholayil"
                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border border-black/10"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              </div>
              <h2 className="text-[5.5vw] sm:text-[4vw] md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent whitespace-nowrap">
                Dr. Sahid Cholayil
              </h2>
              <p className="text-base md:text-xl text-slate-300 font-medium tracking-wide max-w-2xl mx-auto leading-relaxed">
                AI-Scientist, Entrepreneur, Humanitarian, and Futurist
              </p>
            </div>

            {/* Event title */}
            <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.25em] text-green-400/90 mb-6 drop-shadow-[0_0_12px_rgba(34,197,94,0.2)]">
              Launching Budlee AI Tuition
            </h1>

            {/* Launch Button */}
            <button
              id="launch-button"
              onClick={handleLaunchClick}
              className="relative group px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-lg md:text-xl font-bold tracking-wide shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_55px_rgba(16,185,129,0.55)] transition-all duration-300 hover:scale-[1.05] active:scale-[0.98] cursor-pointer overflow-hidden border border-green-400/30"
            >
              {/* Inner ambient shine animation */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />

              <span className="relative flex items-center justify-center gap-3">
                <span>Launch Budlee AI Tuition</span>
                <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
              </span>
            </button>
          </div>
        )}

        {state === 'launching' && (
          <div className="flex flex-col items-center justify-center min-h-[350px] animate-fade-in">
            {/* Glowing circular progress indicator with Countdown */}
            <div className="relative flex items-center justify-center w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.15)] mb-8">
              {/* Spinning loading indicator on the circular border */}
              <div
                className="absolute inset-0 rounded-full border-t-4 border-l-4 border-green-500 animate-spin"
                style={{ animationDuration: '2s' }}
              />

              {/* Massive countdown display with custom transition on ticks */}
              <span
                key={countdown}
                className="text-6xl md:text-8xl font-black font-mono bg-gradient-to-br from-white via-green-100 to-green-400 bg-clip-text text-transparent animate-count-pop"
              >
                {countdown}
              </span>
            </div>

            {/* Pulse loading text */}
            <div className="flex items-center gap-3">
              <Loader2 className="w-6 h-6 text-green-400 animate-spin" />
              <span className="text-xl md:text-2xl font-bold uppercase tracking-widest text-slate-300 animate-pulse">
                Launching...
              </span>
            </div>
          </div>
        )}

        {state === 'live' && (
          <div className="flex flex-col items-center justify-center min-h-[350px] animate-scale-up">
            <div className="flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-green-500/10 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.15)] mb-8">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
              <span className="text-sm font-bold text-green-400 uppercase tracking-widest">Platform is now Live</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-green-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.25)]">
              Budlee AI Tuition is Now Live
            </h1>

            <p className="text-xl md:text-3xl text-slate-200 font-medium tracking-wide max-w-2xl mx-auto">
              Learn Better. Grow Curiosity.
            </p>

            {/* Glowing progress line indicating redirect timer */}
            <div className="w-64 h-1 bg-white/10 rounded-full mt-16 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-green-500 to-orange-500 rounded-full animate-redirect-progress" />
            </div>
            <p className="text-xs text-slate-500 mt-3 uppercase tracking-widest font-mono">
              Redirecting to budlee.ai in {redirectCountdown}s
            </p>
          </div>
        )}
      </div>

      {/* Global CSS Inject for custom animations */}
      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .group-hover\\:animate-shine {
          animation: shine 1.6s infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1) translate(-50%, -50%); }
          50% { opacity: 0.6; transform: scale(1.15) translate(-48%, -52%); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; transform: scale(1) translate(50%, 50%); }
          50% { opacity: 0.5; transform: scale(1.1) translate(48%, 48%); }
        }
        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes scale-up {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scale-up {
          animation: scale-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        @keyframes count-pop {
          0% { transform: scale(0.6); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-count-pop {
          animation: count-pop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes redirect-progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-redirect-progress {
          animation: redirect-progress 5s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default TuitionLaunchPage;

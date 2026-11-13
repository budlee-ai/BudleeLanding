import React, { useState, useEffect, useMemo, useRef } from 'react';
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import axios from 'axios';

const BACKEND_URL = "https://apis.budlee.ai/api";

const isVideoMedia = (url) => {
  if (!url || typeof url !== 'string') return false;
  const cleanUrl = url.split('?')[0].toLowerCase();
  return ['.mp4', '.webm', '.mov', '.m4v', '.ogg'].some(ext => cleanUrl.endsWith(ext));
};

const PromoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [allPromotions, setAllPromotions] = useState([]);
  const [dismissedPromoIds, setDismissedPromoIds] = useState(() => {
    try {
      const stored = sessionStorage.getItem('dismissed_promo_modal_ids');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // All active promotions available on LandingPage
  const promotions = useMemo(() => {
    return allPromotions.filter(p => p.is_active !== false);
  }, [allPromotions]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Fetch promotions once on mount
  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BACKEND_URL}/superadmin/promotions/?platform=LandingPage&is_active=true`);
        const data = response.data;
        const promoList = (Array.isArray(data) ? data : (data.results || []))
          .sort((a, b) => (a.order_number || a.order || 0) - (b.order_number || b.order || 0));

        setAllPromotions(promoList);
        window.dispatchEvent(new CustomEvent('promos-updated', { detail: { count: promoList.length } }));
      } catch (error) {
        console.error("Error fetching promotions:", error);
        window.dispatchEvent(new CustomEvent('promos-updated', { detail: { count: 0 } }));
      } finally {
        setLoading(false);
      }
    };

    fetchPromotions();
  }, []);

  // Auto-open logic on load: only auto-open if there are undismissed promotions
  const hasAutoOpenedRef = useRef(false);
  useEffect(() => {
    if (hasAutoOpenedRef.current || loading) return;

    if (promotions.length > 0) {
      const activeUndismissed = promotions.filter(p => !dismissedPromoIds.includes(p.id));
      if (activeUndismissed.length > 0) {
        hasAutoOpenedRef.current = true;
        const firstIdx = promotions.findIndex(p => p.id === activeUndismissed[0].id);
        if (firstIdx !== -1) setCurrentIndex(firstIdx);
        setIsOpen(true);
      } else {
        hasAutoOpenedRef.current = true;
      }
    }
  }, [promotions, loading, dismissedPromoIds]);

  // Handle external events to open modal
  useEffect(() => {
    const handleOpenExternal = (event) => {
      if (event.detail && event.detail.promotionId) {
        const index = promotions.findIndex(p => p.id === event.detail.promotionId);
        if (index !== -1) {
          setCurrentIndex(index);
        }
      }
      setIsOpen(true);
    };

    const handleQueryStatus = () => {
      window.dispatchEvent(new CustomEvent('promos-updated', {
        detail: { count: promotions.length }
      }));
    };

    window.addEventListener('open-promo-modal', handleOpenExternal);
    window.addEventListener('query-promo-status', handleQueryStatus);

    return () => {
      window.removeEventListener('open-promo-modal', handleOpenExternal);
      window.removeEventListener('query-promo-status', handleQueryStatus);
    };
  }, [promotions]);

  // Current promo and media attributes
  const currentPromo = promotions[currentIndex] || promotions[0];
  const rawPoster = currentPromo ? (currentPromo.poster_image_url || currentPromo.poster_image) : null;
  let posterUrl = rawPoster;
  if (posterUrl && !posterUrl.startsWith('http://') && !posterUrl.startsWith('https://')) {
    const cleanPath = posterUrl.startsWith('/') ? posterUrl.slice(1) : posterUrl;
    posterUrl = `${BACKEND_URL.replace(/\/api$/, '')}/${cleanPath}`;
  }
  const isVideo = isVideoMedia(posterUrl);

  const videoRefs = useRef({});
  // Start muted so browser autoplay policy always allows playback immediately
  const [isMuted, setIsMuted] = useState(true);
  // Tracks if the user has ever interacted — persists across slide changes
  const userHasInteractedRef = useRef(false);

  // Helper to get currently active video DOM element
  const getActiveVideo = () => {
    if (!currentPromo) return null;
    return videoRefs.current[currentPromo.id] || null;
  };

  const lastInteractionTimeRef = useRef(0);

  // Clicking/tapping anywhere on the video frame unmutes and starts/continues playing with audio
  const handleFrameClick = (e) => {
    if (e) e.stopPropagation();
    const now = Date.now();
    if (now - lastInteractionTimeRef.current < 400) return;
    lastInteractionTimeRef.current = now;

    const video = getActiveVideo();
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      setIsMuted(false);
      userHasInteractedRef.current = true;
      video.play().catch(() => {});
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  // Auto-scrolling: images advance after 5s. Videos advance on onEnded.
  useEffect(() => {
    if (!isOpen || promotions.length <= 1) return;
    if (isVideo) return;
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen, currentIndex, isVideo, promotions.length]);

  // When active slide changes:
  // Pause any inactive videos. Play the active video.
  // Because video elements remain mounted in the DOM, user activation and buffer are preserved across loops!
  useEffect(() => {
    if (!isOpen) return;

    // Pause all other videos
    Object.entries(videoRefs.current).forEach(([id, el]) => {
      if (el && String(id) !== String(currentPromo?.id)) {
        el.pause();
      }
    });

    if (!isVideo) return;
    const video = getActiveVideo();
    if (!video) return;

    // If user has unmuted earlier in this session, keep playing unmuted!
    if (userHasInteractedRef.current && !isMuted) {
      video.muted = false;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }

    // Only reset currentTime if playback had already progressed
    if (video.currentTime > 0) {
      video.currentTime = 0;
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback to muted only if browser strictly blocks
        video.muted = true;
        setIsMuted(true);
        video.play().catch((err) => {
          console.error('[PromoModal] Playback failed:', err);
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentIndex, isVideo, currentPromo?.id]);

  // Whenever video is muted, ANY tap or click on the modal / video card un-mutes it and ensures playback with audio.
  useEffect(() => {
    if (!isOpen || !isVideo || !isMuted) return;

    const handleInteraction = (e) => {
      // Don't intercept close or navigation buttons or links
      if (e.target && (e.target.closest('button') || e.target.closest('a'))) return;
      const now = Date.now();
      if (now - lastInteractionTimeRef.current < 400) return;
      lastInteractionTimeRef.current = now;

      const video = getActiveVideo();
      if (video) {
        video.muted = false;
        setIsMuted(false);
        userHasInteractedRef.current = true;
        video.play().catch(() => {});
      }
    };

    window.addEventListener('click', handleInteraction, { capture: true });
    window.addEventListener('touchend', handleInteraction, { capture: true });

    return () => {
      window.removeEventListener('click', handleInteraction, { capture: true });
      window.removeEventListener('touchend', handleInteraction, { capture: true });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isVideo, isMuted, currentPromo?.id]);

  // Pause all videos cleanly when modal closes
  useEffect(() => {
    if (!isOpen) {
      Object.values(videoRefs.current).forEach((el) => {
        if (el) {
          el.pause();
          el.currentTime = 0;
        }
      });
    }
  }, [isOpen]);

  const handleManualClose = () => {
    setIsOpen(false);
    const visibleIds = promotions.map(p => p.id);
    const updatedDismissed = Array.from(new Set([...dismissedPromoIds, ...visibleIds]));
    setDismissedPromoIds(updatedDismissed);
    try {
      sessionStorage.setItem('dismissed_promo_modal_ids', JSON.stringify(updatedDismissed));
    } catch (error) {
      console.error('[PromoModal] Failed to store dismissed IDs:', error);
    }
  };

  const nextPromo = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % promotions.length);
  };

  const prevPromo = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  const handleImageLoad = (id) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  if (promotions.length === 0 || !currentPromo) return null;

  const isCurrentImageLoaded = imagesLoaded[currentPromo.id];

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => { if (!open) handleManualClose(); }}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        />

        <DialogPrimitive.Content
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          className="fixed inset-0 z-[60] overflow-y-auto focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 duration-300"
        >
          {/* This inner wrapper is the standard pattern for a centered+scrollable modal:
              min-h-full ensures the flex container is at least viewport height so
              items-center centres the card when it's short, and overflow-y-auto on
              the parent lets it scroll when the card is taller than the viewport. */}
          <div className="flex min-h-full items-center justify-center p-3 sm:p-4">
          <div className="relative flex flex-col items-center w-full sm:w-auto">

            <DialogPrimitive.Title className="sr-only">Promotions</DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">View current promotions.</DialogPrimitive.Description>

            {/* Core Interaction Area */}
            <div className="relative flex items-center justify-center w-full sm:w-auto">
              {/* External Arrows - Desktop Only */}
              {promotions.length > 1 && isCurrentImageLoaded && (
                <>
                  <button
                    onClick={prevPromo}
                    className="absolute left-[-3.5rem] top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all duration-300 active:scale-90 backdrop-blur-md z-[70] hidden sm:flex border border-white/30 shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                  <button
                    onClick={nextPromo}
                    className="absolute right-[-3.5rem] top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all duration-300 active:scale-90 backdrop-blur-md z-[70] hidden sm:flex border border-white/30 shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                </>
              )}

              {/* The Poster Area */}
              <div className="relative w-full sm:w-auto overflow-visible group">

                {/* Close Button — only visible once current promo media has loaded */}
                {isCurrentImageLoaded && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[90]">
                    <button
                      onClick={handleManualClose}
                      className="flex items-center justify-center p-2 sm:p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all duration-300 hover:rotate-90 active:scale-90 focus:outline-none border border-white/40 backdrop-blur-md shadow-xl"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </div>
                )}

                {/* Mobile overlay arrows — always visible on mobile */}
                {promotions.length > 1 && isCurrentImageLoaded && (
                  <>
                    <button
                      onClick={prevPromo}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all backdrop-blur-sm z-[80] flex sm:hidden border border-white/25 active:scale-90 shadow-lg"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextPromo}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all backdrop-blur-sm z-[80] flex sm:hidden border border-white/25 active:scale-90 shadow-lg"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Media card — tapping anywhere on the frame unmutes and starts/continues playing with audio */}
                <div
                  onClick={isVideo ? handleFrameClick : undefined}
                  onTouchEnd={isVideo ? handleFrameClick : undefined}
                  className={`relative overflow-hidden promo-media-container shadow-[0_40px_80px_rgba(0,0,0,0.9)] flex items-center justify-center [transform:translateZ(0)] min-h-[350px] min-w-[200px] sm:min-h-[500px] sm:min-w-[300px] ${isVideo ? 'cursor-pointer select-none' : ''}`}
                >

                  {/* Shimmer Placeholder — visible while loading */}
                  {!isCurrentImageLoaded && (
                    <div className="absolute inset-0 z-10 overflow-hidden bg-white/5 flex items-center justify-center promo-media-element">
                      <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                    </div>
                  )}

                  {promotions.map((promo, idx) => {
                    const rawP = promo.poster_image_url || promo.poster_image;
                    let pUrl = rawP;
                    if (pUrl && !pUrl.startsWith('http://') && !pUrl.startsWith('https://')) {
                      const cleanP = pUrl.startsWith('/') ? pUrl.slice(1) : pUrl;
                      pUrl = `${BACKEND_URL.replace(/\/api$/, '')}/${cleanP}`;
                    }
                    const isVid = isVideoMedia(pUrl);
                    const isActive = idx === currentIndex;
                    const isLoaded = !!imagesLoaded[promo.id];
                    const nextIdx = promotions.length > 1 ? (currentIndex + 1) % promotions.length : null;
                    const isNextToPreload = nextIdx !== null && idx === nextIdx && isCurrentImageLoaded;

                    // Serial loading:
                    // 1. First/active slide downloads first (100% bandwidth).
                    // 2. Next slide only downloads AFTER the active slide has finished loading.
                    // 3. Slides that have already loaded stay in DOM so they loop without re-downloading.
                    const shouldRender = isActive || isLoaded || isNextToPreload;
                    if (!shouldRender) return null;

                    if (isVid) {
                      return (
                        <video
                          key={promo.id}
                          ref={(el) => { if (el) videoRefs.current[promo.id] = el; }}
                          src={pUrl}
                          autoPlay={isActive}
                          playsInline
                          webkit-playsinline="true"
                          loop={promotions.length === 1}
                          muted={isMuted}
                          defaultMuted
                          controls={false}
                          preload="auto"
                          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                          disablePictureInPicture
                          disableRemotePlayback
                          onLoadedMetadata={() => handleImageLoad(promo.id)}
                          onLoadedData={() => handleImageLoad(promo.id)}
                          onCanPlay={() => handleImageLoad(promo.id)}
                          onPlay={() => handleImageLoad(promo.id)}
                          onPlaying={() => handleImageLoad(promo.id)}
                          onError={() => handleImageLoad(promo.id)}
                          onEnded={() => {
                            if (promotions.length > 1) {
                              setCurrentIndex((prev) => (prev + 1) % promotions.length);
                            }
                          }}
                          onContextMenu={(e) => e.preventDefault()}
                          className={`w-auto h-auto max-w-[92vw] sm:max-w-full max-h-[74vh] sm:max-h-[80vh] md:max-h-[85vh] object-contain select-none align-middle block transition-opacity duration-500 pointer-events-none promo-media-element ${
                            isActive ? (isLoaded ? 'opacity-100 relative' : 'opacity-0 relative') : 'opacity-0 pointer-events-none absolute inset-0 m-auto'
                          }`}
                        />
                      );
                    }

                    return (
                      <img
                        key={promo.id}
                        src={pUrl}
                        alt={`Promotion ${idx + 1}`}
                        onLoad={() => handleImageLoad(promo.id)}
                        onError={() => handleImageLoad(promo.id)}
                        className={`w-auto h-auto max-w-[92vw] sm:max-w-full max-h-[74vh] sm:max-h-[80vh] md:max-h-[85vh] object-contain select-none align-middle block transition-opacity duration-500 promo-media-element ${
                          isActive ? (isLoaded ? 'opacity-100 relative' : 'opacity-0 relative') : 'opacity-0 pointer-events-none absolute inset-0 m-auto'
                        }`}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    );
                  })}

                  {isCurrentImageLoaded && (
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-tr from-white/5 to-transparent animate-in fade-in duration-1000"></div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Actions Area */}
            {isCurrentImageLoaded && (
              <div className="flex flex-col items-center gap-3 mt-4 sm:mt-6 w-full max-w-[280px] sm:max-w-[320px] animate-in fade-in slide-in-from-bottom-2 duration-700">

                {/* Mobile dot indicators (arrows overlaid on card) */}
                {promotions.length > 1 && (
                  <div className="flex sm:hidden items-center gap-3 mb-1">
                    <div className="flex gap-1.5">
                      {promotions.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-emerald-400 w-5' : 'bg-white/30 w-1.5'}`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Subtly Sized Action Button */}
                {currentPromo.button_name && currentPromo.url && (
                  <div className="w-full">
                    <a
                      href={currentPromo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                      onClick={() => handleManualClose()}
                    >
                      <Button
                        className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 hover:from-green-600 hover:via-emerald-600 hover:to-teal-500 text-white font-bold py-3.5 sm:py-4 text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-[0_15px_30px_rgba(16,185,129,0.3)] transform transition-all duration-300 group-hover:scale-[1.02] active:scale-[0.98] border border-white/20 uppercase tracking-widest flex items-center justify-center gap-2"
                      >
                        {currentPromo.button_name}
                        <span className="text-lg sm:text-xl group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </Button>
                    </a>
                  </div>
                )}

                {/* Subtle desktop dots */}
                {promotions.length > 1 && (
                  <div className="hidden sm:flex gap-2.5">
                    {promotions.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-emerald-400 w-6' : 'bg-white/20 hover:bg-white/40'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          </div>{/* end min-h-full centering wrapper */}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
        .promo-media-container {
          border-radius: 16px;
          -webkit-border-radius: 16px;
          overflow: hidden;
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          mask-image: radial-gradient(white, black);
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          isolation: isolate;
        }
        @media (min-width: 640px) {
          .promo-media-container {
            border-radius: 24px;
            -webkit-border-radius: 24px;
          }
        }
        .promo-media-element {
          border-radius: 16px;
          -webkit-border-radius: 16px;
          overflow: hidden;
          -webkit-mask-image: -webkit-radial-gradient(white, black);
          mask-image: radial-gradient(white, black);
          -webkit-clip-path: inset(0 round 16px);
          clip-path: inset(0 round 16px);
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
        @media (min-width: 640px) {
          .promo-media-element {
            border-radius: 24px;
            -webkit-border-radius: 24px;
            -webkit-clip-path: inset(0 round 24px);
            clip-path: inset(0 round 24px);
          }
        }
      `}</style>
    </DialogPrimitive.Root>
  );
};

export default PromoModal;

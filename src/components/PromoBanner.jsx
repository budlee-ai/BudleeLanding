import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, X } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = "https://apis.budlee.ai/api";

const PromoBanner = () => {
    const [promotions, setPromotions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dismissedPromoIds, setDismissedPromoIds] = useState(() => {
        try {
            const stored = sessionStorage.getItem('dismissed_promotions');
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPromotions = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${BACKEND_URL}/superadmin/promotions/?platform=LandingPage&is_active=true`);
                const rawData = response.data;
                const promoList = Array.isArray(rawData) ? rawData : (rawData.results || []);

                const bannerPromos = promoList
                    .filter(p => p.program_name && p.program_name.trim() !== '' && !dismissedPromoIds.includes(p.id))
                    .sort((a, b) => (a.order_number || a.order || 0) - (b.order_number || b.order || 0));

                setPromotions(bannerPromos);
            } catch (error) {
                console.error("Error fetching banner promotions:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPromotions();
    }, [dismissedPromoIds]);

    // Auto-scrolling logic
    useEffect(() => {
        if (promotions.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % promotions.length);
        }, 5000); // 5 seconds interval

        return () => clearInterval(interval);
    }, [promotions.length]);

    const nextPromo = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % promotions.length);
    };

    const prevPromo = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + promotions.length) % promotions.length);
    };

    const openPromoModal = () => {
        if (!currentPromo) return;
        window.dispatchEvent(new CustomEvent('open-promo-modal', {
            detail: { promotionId: currentPromo.id }
        }));
    };

    const handleDismiss = (e) => {
        if (e) e.stopPropagation();
        if (!currentPromo) return;
        const updatedDismissed = [...dismissedPromoIds, currentPromo.id];
        setDismissedPromoIds(updatedDismissed);
        try {
            sessionStorage.setItem('dismissed_promotions', JSON.stringify(updatedDismissed));
        } catch (err) {
            console.error("Error setting dismissed promotions:", err);
        }
        if (currentIndex >= promotions.length - 1) {
            setCurrentIndex(Math.max(0, promotions.length - 2));
        }
    };

    if (loading || promotions.length === 0) return null;

    const currentPromo = promotions[currentIndex];
    if (!currentPromo || !currentPromo.program_name) return null;

    // Parsing Logic
    const fullText = (currentPromo.program_name || "").trim();
    const hasLive = fullText.toLowerCase().startsWith("live |");
    const contentText = hasLive ? fullText.slice(6).trim() : fullText;

    // Split on '|' delimiter
    const parts = contentText.split('|').map(p => p.trim()).filter(Boolean);
    const displayTitle = parts[0] || '';
    const displaySecondary = parts[1] || '';
    const extraLines = parts.slice(2);

    const renderFormattedSecondary = (text) => {
        if (!text) return null;
        const regex = /["“]([^"”]+)["”]/g;
        if (!regex.test(text)) {
            return text;
        }
        regex.lastIndex = 0;
        const elements = [];
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                elements.push(text.slice(lastIndex, match.index));
            }
            elements.push(
                <span key={match.index} className="font-extrabold text-sm md:text-[16px] text-white underline decoration-amber-300 underline-offset-2 mx-0.5">
                    {match[1]}
                </span>
            );
            lastIndex = regex.lastIndex;
        }

        if (lastIndex < text.length) {
            elements.push(text.slice(lastIndex));
        }

        return elements;
    };

    return (
        <div className="w-full py-3 md:py-5 px-4 flex justify-center items-center">
            <div
                onClick={openPromoModal}
                className="promo-banner-card group relative flex flex-col items-center justify-center gap-1.5 px-6 py-3.5 md:px-10 md:py-4 rounded-2xl md:rounded-[26px] border border-white/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer max-w-full md:max-w-fit overflow-hidden text-center select-none"
            >
                {/* Close Button */}
                <button
                    onClick={handleDismiss}
                    className="absolute top-2.5 right-2.5 md:top-3 md:right-3.5 p-1 bg-black/20 hover:bg-black/35 rounded-full text-white/80 hover:text-white transition-all z-20 hover:scale-110 active:scale-95 border border-white/20 flex items-center justify-center cursor-pointer"
                    title="Dismiss announcement"
                >
                    <X className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </button>

                {/* Noticeable Sweeping Light Beam Animation */}
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                    <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] animate-banner-shimmer"></div>
                </div>

                {/* Row 1: Action Button or Announcement Badge & Navigation */}
                <div className="flex items-center justify-center gap-2 md:gap-3 relative z-10">
                    {currentPromo.button_name ? (
                        <div className="flex items-center gap-1.5 md:gap-2 px-3 py-1 bg-white text-emerald-800 rounded-full group-hover:bg-amber-100 transition-all duration-300 shadow-md">
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-wider whitespace-nowrap">
                                {currentPromo.button_name}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 stroke-[3px] text-emerald-800 group-hover:translate-x-1 transition-transform" />
                        </div>
                    ) : (
                        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/15 backdrop-blur-md border border-white/25 text-white shadow-xs">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                            </span>
                            <span className="text-[10px] md:text-xs font-black uppercase tracking-wider text-amber-200">
                                Announcement
                            </span>
                        </div>
                    )}

                    {promotions.length > 1 && (
                        <div className="flex items-center gap-1 bg-black/20 backdrop-blur-md rounded-full p-0.5 border border-white/15">
                            <button
                                onClick={prevPromo}
                                className="p-0.5 hover:bg-white/20 rounded-full text-white transition-all flex-shrink-0 cursor-pointer"
                                aria-label="Previous promotion"
                            >
                                <ChevronLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            </button>
                            <span className="text-[8px] md:text-[9px] font-bold text-white/80 px-1">
                                {currentIndex + 1}/{promotions.length}
                            </span>
                            <button
                                onClick={nextPromo}
                                className="p-0.5 hover:bg-white/20 rounded-full text-white transition-all flex-shrink-0 cursor-pointer"
                                aria-label="Next promotion"
                            >
                                <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Row 2: Program Name Lines (Centered with crisp white and gold contrast) */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center gap-0.5 px-2">
                    {/* Line 1: Title */}
                    <div className="flex items-center justify-center gap-1.5 md:gap-2">
                        {hasLive && (
                            <div className="px-1.5 py-0.5 rounded bg-red-500 text-[8px] md:text-[9px] font-black text-white leading-none shadow-sm flex-shrink-0 animate-pulse">
                                LIVE
                            </div>
                        )}
                        <h3 className="font-black text-white text-sm md:text-lg tracking-tight leading-tight drop-shadow-xs">
                            {displayTitle}
                        </h3>
                    </div>

                    {/* Line 2: Subtitle with Quote Emphasis */}
                    {displaySecondary && (
                        <p className="font-semibold text-emerald-100 text-xs md:text-sm tracking-tight leading-snug drop-shadow-xs">
                            {renderFormattedSecondary(displaySecondary)}
                        </p>
                    )}

                    {/* Line 3+: Small Under-Text */}
                    {extraLines.length > 0 && extraLines.map((line, idx) => (
                        <p key={idx} className="text-[9px] md:text-[10.5px] text-white/80 font-normal tracking-normal leading-tight mt-0.5">
                            {line}
                        </p>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes promo-gradient-flow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes promo-glow-pulse {
                    0%, 100% {
                        box-shadow: 0 4px 20px -2px rgba(16, 185, 129, 0.45), 0 0 15px rgba(13, 148, 136, 0.35);
                    }
                    50% {
                        box-shadow: 0 8px 30px 2px rgba(16, 185, 129, 0.75), 0 0 28px rgba(52, 211, 153, 0.55);
                    }
                }
                @keyframes banner-shimmer {
                    0% { left: -120%; }
                    35%, 100% { left: 220%; }
                }
                .promo-banner-card {
                    background: linear-gradient(135deg, #047857 0%, #0d9488 35%, #059669 70%, #10b981 100%);
                    background-size: 250% 250%;
                    animation: promo-gradient-flow 7s ease infinite, promo-glow-pulse 2.5s ease-in-out infinite;
                }
                .animate-banner-shimmer {
                    animation: banner-shimmer 3.2s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default PromoBanner;

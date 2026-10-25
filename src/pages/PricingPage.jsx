import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, Star, CreditCard, Shield, Users, Zap, HelpCircle, Mail, MapPin, Sparkles, Loader2, Atom, FlaskConical, Lightbulb, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

// Hardcoded API Base URL as requested
const API_BASE_URL = "https://apis.budlee.ai/api";

const formatPrice = (price, currency, fractionDigits = 0) => {
  const symbols = {
    'SAR': 'SR',
    'QAR': 'QR',
    'AED': 'AED',
    'KWD': 'KD',
    'BHD': 'BD',
    'OMR': 'RO',
    'GBP': '£',
    'USD': '$'
  };

  try {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    const symbol = symbols[currency];
    const decimals = ['KWD', 'BHD', 'OMR'].includes(currency) ? 3 : fractionDigits;

    if (symbol) {
      const formattedNum = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals === 0 ? 2 : decimals,
      }).format(numPrice || 0);
      return `${symbol} ${formattedNum}`;
    }

    return new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
      style: 'currency',
      currency: currency || 'USD',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals === 0 ? 2 : decimals,
    }).format(numPrice || 0);
  } catch (e) {
    const symbol = symbols[currency] || currency || '$';
    return `${symbol} ${price || 0}`;
  }
};

const buildPlanBenefits = (plan) => {
  const description = plan.description || plan.plan_description || '';
  const parts = description.split(':');
  const preTitle = parts[0]?.trim() || '';
  const listHeading = parts[1]?.trim() || '';
  const pointsRaw = parts.slice(2).join(':').trim() || '';
  const points = pointsRaw.split(/[·•\n]|\s+\.\s+/).map(s => s.trim()).filter(Boolean);
  return { preTitle, listHeading, points };
};

const PlanCard = ({ plan, cycle, currency, isPopular }) => {
  const benefitData = useMemo(() => buildPlanBenefits(plan), [plan]);
  const isFree = plan.is_free;
  const isComingSoon = plan.is_coming_soon;

  const price = useMemo(() => {
    if (cycle === 'weekly') return plan.weekly_price || 0;
    if (cycle === 'yearly') return plan.yearly_price || 0;
    if (cycle === 'half_yearly') return plan.six_month_price || 0;
    if (cycle === 'quarterly') return plan.three_month_price || 0;
    return plan.monthly_price || 0;
  }, [plan, cycle]);

  const originalPrice = useMemo(() => {
    if (cycle === 'weekly') return plan.original_price_weekly;
    if (cycle === 'yearly') return plan.original_price_yearly;
    if (cycle === 'half_yearly') return plan.original_price_six_month;
    if (cycle === 'quarterly') return plan.original_price_three_month;
    return plan.original_price_monthly;
  }, [plan, cycle]);

  // Billing cycle calculations
  const cycleMultiplier = cycle === 'yearly' ? 12 : cycle === 'half_yearly' ? 6 : cycle === 'quarterly' ? 3 : 1;
  const cycleDays = cycle === 'yearly' ? 365 : cycle === 'half_yearly' ? 180 : cycle === 'quarterly' ? 90 : cycle === 'weekly' ? 7 : 30;
  const isMultiMonth = ['quarterly', 'half_yearly', 'yearly'].includes(cycle);

  // Normalized monthly equivalent
  const monthlyEquivalent = isFree ? 0 : isMultiMonth ? (price / cycleMultiplier) : price;
  const originalMonthlyEquivalent = (originalPrice && isMultiMonth) ? (parseFloat(originalPrice) / cycleMultiplier) : originalPrice;

  // Monthly base price for comparison
  const monthlyBasePrice = plan.monthly_price ? parseFloat(plan.monthly_price) : 0;

  // Auto-calculated savings badge vs monthly price (or original price)
  let savingsPercent = null;
  if (!isFree && !isComingSoon) {
    if (isMultiMonth && monthlyBasePrice > 0 && monthlyEquivalent < monthlyBasePrice) {
      savingsPercent = Math.round(((monthlyBasePrice - monthlyEquivalent) / monthlyBasePrice) * 100);
    } else if (originalMonthlyEquivalent && parseFloat(originalMonthlyEquivalent) > monthlyEquivalent) {
      savingsPercent = Math.round(((parseFloat(originalMonthlyEquivalent) - monthlyEquivalent) / parseFloat(originalMonthlyEquivalent)) * 100);
    }
  }

  // Taxes (18% for INR)
  const monthlyTaxAmount = (currency === 'INR' && price > 0) ? ((price * 0.18) / cycleMultiplier) : 0;

  // Billing Cadence caption
  const billingCadenceText = useMemo(() => {
    if (isFree || isComingSoon || cycle === 'weekly') return null;
    if (cycle === 'yearly') {
      return `Billed ${formatPrice(price, currency)} annually`;
    }
    if (cycle === 'half_yearly') {
      return `Billed ${formatPrice(price, currency)} every 6 months`;
    }
    if (cycle === 'quarterly') {
      return `Billed ${formatPrice(price, currency)} every 3 months`;
    }
    return `Billed ${formatPrice(price, currency)} monthly`;
  }, [cycle, price, currency, isFree, isComingSoon]);

  // Button styles
  const buttonStyle = isFree 
    ? "bg-gray-100 hover:bg-gray-200 text-gray-800" 
    : (cycle === 'yearly' || cycle === 'half_yearly' || cycle === 'quarterly')
      ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
      : "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white";

  return (
    <div className={cn(
      "relative bg-white rounded-2xl transition-all duration-300 p-8 border flex flex-col w-full sm:max-w-[240px]",
      isComingSoon 
        ? "border-blue-400 shadow-[0_8px_30px_rgb(59,130,246,0.1)] opacity-80" 
        : isPopular 
          ? "border-orange-300 ring-2 ring-orange-200 shadow-lg" 
          : "border-gray-100 shadow-lg"
    )}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 whitespace-nowrap">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{plan.name}</h3>
        
        {benefitData.preTitle && (
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
            {benefitData.preTitle}
          </p>
        )}

        <div className="mb-2">
          {!isComingSoon ? (
            <div className="flex flex-col items-center">
              {originalMonthlyEquivalent && parseFloat(originalMonthlyEquivalent) > monthlyEquivalent && (
                <span className="text-xs font-semibold text-gray-400 line-through mb-0.5">
                  {formatPrice(originalMonthlyEquivalent, currency)}
                </span>
              )}

              <div className="flex items-baseline justify-center gap-1 sm:gap-1.5 flex-nowrap whitespace-nowrap">
                <span className="text-3xl font-black text-gray-800 tracking-tight">
                  {formatPrice(monthlyEquivalent, currency)}
                </span>
                {!isFree && (
                  <div className="inline-flex flex-col items-start justify-end ml-1 self-stretch pb-0.5">
                    {currency === 'INR' && monthlyTaxAmount > 0 && (
                      <span className="text-[8px] sm:text-[9px] font-semibold text-gray-500 leading-tight mb-0.5 whitespace-nowrap">
                        (+{formatPrice(monthlyTaxAmount, currency, 0)} Taxes / mo)
                      </span>
                    )}
                    <span className="text-gray-500 text-xs font-bold leading-none">
                      /{cycle === 'weekly' ? 'week' : 'mo'}
                    </span>
                  </div>
                )}
              </div>

              {billingCadenceText && (
                <span className="text-xs text-gray-500 font-medium mt-1">
                  {billingCadenceText}
                </span>
              )}

              {!isFree && (
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">
                  {`${formatPrice(price / cycleDays, currency, 2)} per day`}
                </span>
              )}
            </div>
          ) : (
            <span className="text-xl font-bold text-blue-500 uppercase tracking-tighter">Coming Soon</span>
          )}
        </div>
        
        {savingsPercent && (
          <div className="mt-2">
            <span className="inline-block bg-green-100 text-green-800 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wide">
              Save {savingsPercent}% vs Monthly
            </span>
          </div>
        )}
      </div>

      <div className="mb-8">
        <button 
          className={cn(
            "w-full py-4 px-6 rounded-xl font-black text-sm transition-all duration-300 shadow-md hover:shadow-lg active:scale-95",
            buttonStyle,
            isComingSoon && "opacity-50 cursor-not-allowed shadow-none"
          )}
          onClick={() => {
            if (isComingSoon) return;
            mixpanel.track('Pricing Plan Selected', { planName: plan.name });
            window.location.href = 'https://app.budlee.ai/signup';
          }}
          disabled={isComingSoon}
        >
          {isComingSoon ? 'Coming Soon' : (isFree ? `Get Started Free` : `Get ${plan.name}`)}
        </button>
      </div>

      <div className="flex-1">
        {benefitData.listHeading && (
          <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">
            {benefitData.listHeading}:
          </h4>
        )}
        <ul className="space-y-4">
          {benefitData.points.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-left group">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600 text-xs font-medium leading-relaxed">{feature.trim()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PricingPage = () => {
  const [plans, setPlans] = useState([]);
  const [planCurrency, setPlanCurrency] = useState('USD');
  const [activeCycle, setActiveCycle] = useState('monthly');
  const [isLoading, setIsLoading] = useState(true);

  const cycleLabels = {
    monthly: 'Monthly',
    quarterly: 'Quarterly',
    half_yearly: 'Half-Yearly',
    yearly: 'Yearly',
    weekly: 'Weekly'
  };

  useEffect(() => {
    mixpanel.track('Pricing Page Viewed');
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_BASE_URL}/superadmin/subscriptions/pricing/`);
      const data = response.data;
      if (data.plans) {
        setPlans(data.plans);
        if (data.detected_currency) {
          setPlanCurrency(data.detected_currency);
        }
        
        // Find first available cycle based on priority: monthly, quarterly, half_yearly, yearly, weekly
        const p = data.plans[0];
        if (p) {
          if (p.is_monthly_active && p.monthly_price > 0) setActiveCycle('monthly');
          else if (p.is_three_month_active && p.three_month_price > 0) setActiveCycle('quarterly');
          else if (p.is_six_month_active && p.six_month_price > 0) setActiveCycle('half_yearly');
          else if (p.is_yearly_active && p.yearly_price > 0) setActiveCycle('yearly');
          else if (p.is_weekly_active && p.weekly_price > 0) setActiveCycle('weekly');
        }
      }
    } catch (err) {
      console.error('Failed to fetch plans:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const availableCycles = useMemo(() => {
    const cycles = { monthly: false, quarterly: false, half_yearly: false, yearly: false, weekly: false };
    plans.forEach(p => {
      if (p.is_monthly_active && p.monthly_price > 0) cycles.monthly = true;
      if (p.is_three_month_active && p.three_month_price > 0) cycles.quarterly = true;
      if (p.is_six_month_active && p.six_month_price > 0) cycles.half_yearly = true;
      if (p.is_yearly_active && p.yearly_price > 0) cycles.yearly = true;
      if (p.is_weekly_active && p.weekly_price > 0) cycles.weekly = true;
    });
    const ordered = ['monthly', 'quarterly', 'half_yearly', 'yearly', 'weekly'];
    return ordered.filter(c => cycles[c]);
  }, [plans]);

  const sortedPlans = useMemo(() => {
    return [...plans]
      .filter(plan => {
        if (plan.is_coming_soon || plan.is_free) return true;
        if (activeCycle === 'weekly') return plan.is_weekly_active && plan.weekly_price > 0;
        if (activeCycle === 'quarterly') return plan.is_three_month_active && plan.three_month_price > 0;
        if (activeCycle === 'half_yearly') return plan.is_six_month_active && plan.six_month_price > 0;
        if (activeCycle === 'yearly') return plan.is_yearly_active && plan.yearly_price > 0;
        return plan.is_monthly_active && plan.monthly_price > 0;
      })
      .sort((a, b) => {
        // 1. Free first
        if (a.is_free && !b.is_free) return -1;
        if (!a.is_free && b.is_free) return 1;

        // 2. Coming soon last
        if (a.is_coming_soon && !b.is_coming_soon) return 1;
        if (!a.is_coming_soon && b.is_coming_soon) return -1;

        // 3. Both coming soon: Sort by ID incremental
        if (a.is_coming_soon && b.is_coming_soon) {
          return a.id - b.id;
        }

        // 4. Regular plans: Sort by price
        const getPrice = (p) => {
          if (activeCycle === 'yearly') return p.yearly_price;
          if (activeCycle === 'half_yearly') return p.six_month_price;
          if (activeCycle === 'quarterly') return p.three_month_price;
          if (activeCycle === 'weekly') return p.weekly_price;
          return p.monthly_price;
        };
        return (getPrice(a) || 0) - (getPrice(b) || 0);
      });
  }, [plans, activeCycle]);

  const faqs = [
    { question: "Can I switch plans?", answer: "Yes, you can upgrade or change your subscription at any time from your account settings." },
    { question: "Is there a free trial?", answer: "We offer a comprehensive Free plan that lets you explore all core features with daily limits." },
    { question: "Age Policy", answer: "Users below 18 years should be supervised by their parents while using Budlee AI." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section - Restored Old Theme */}
        <section className="w-full bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-16 md:py-5 px-4 md:px-12 lg:px-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50"></div>
          
          <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
            <div className="absolute top-8 left-[8%] text-green-300 animate-pulse">
              <Atom className="w-10 h-10 opacity-60" />
            </div>
            <div className="absolute top-12 right-[12%] text-yellow-400 animate-bounce">
              <FlaskConical className="w-8 h-8 opacity-50" />
            </div>
            <div className="absolute top-1/3 left-[4%] text-orange-300 animate-pulse">
              <Lightbulb className="w-7 h-7 opacity-50" />
            </div>
            <div className="absolute bottom-28 right-[6%] text-green-400">
              <Star className="w-8 h-8 opacity-40 fill-current" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="hero-tagline text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Budlee AI <span className="gradient-text">Pricing</span> Plans
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Localized pricing based on your region. Unlock the power of personalized learning.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full pt-8 pb-16 md:pt-2 md:pb-16 px-4 md:px-12 lg:px-20">
          <div className="max-w-[1650px] mx-auto">
            
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20 space-y-4">
                <Loader2 className="w-12 h-12 text-green-600 animate-spin" />
                <p className="text-gray-500 font-medium">Loading localized plans...</p>
              </div>
            ) : (
              <>
                {/* Cycle Toggle - Light Style */}
                {availableCycles.length > 1 && (
                  <div className="flex justify-center mb-12">
                    <div className="bg-gray-100 p-1.5 rounded-xl flex items-center gap-1">
                      {availableCycles.map((cycle) => (
                        <button
                          key={cycle}
                          onClick={() => setActiveCycle(cycle)}
                          className={cn(
                            "relative rounded-lg px-6 py-2 text-sm font-bold transition-all duration-300 tracking-wide",
                            activeCycle === cycle ? "bg-white text-green-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
                          )}
                        >
                          {cycleLabels[cycle] || cycle}
                          {cycle === 'yearly' && (
                            <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-extrabold bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full">
                              BEST
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap justify-center gap-6">
                  {sortedPlans.map((plan) => (
                    <PlanCard
                      key={plan.id}
                      plan={plan}
                      cycle={activeCycle}
                      currency={planCurrency}
                      isPopular={plan.is_most_popular}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* How to Subscribe - Restored */}
        <section className="w-full py-12 md:py-6 px-4 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="hero-tagline text-2xl md:text-3xl mb-8 gradient-text">How to Subscribe</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Sign up or log in</h3>
                <p className="text-gray-600 text-sm">Create your account to get started</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Select your plan</h3>
                <p className="text-gray-600 text-sm">Choose the best fit for your needs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Enjoy access</h3>
                <p className="text-gray-600 text-sm">Pay and start learning immediately</p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes - Restored */}
        <section className="w-full py-12 md:py-6 px-4 md:px-12 lg:px-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="hero-tagline text-2xl md:text-3xl mb-8 gradient-text text-center">Important Notes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4">
                <Shield className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Pricing Details</h3>
                  <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                    <li>Prices exclude applicable taxes</li>
                    <li>No refunds for active periods</li>
                    <li>Cancel anytime from settings</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">Need Help?</h3>
                  <p className="text-gray-600 text-sm">
                    Visit our <Link to="/faqs" className="text-green-600 font-medium hover:underline">FAQs</Link> or contact support via email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section - Restored Old Gradient */}
        <section className="w-full py-12 md:py-6 px-4 md:px-12 lg:px-20 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Budlee AI Support Team</h2>
            <p className="text-green-100 text-lg mb-8 font-medium">Have questions? We're here to help you choose the right plan.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex flex-col items-center">
                <Mail className="w-6 h-6 mb-2" />
                <span className="font-bold">help@budlee.ai</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 flex flex-col items-center">
                <MapPin className="w-6 h-6 mb-2" />
                <span className="font-bold">Global Learning Support</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        headline=""
        subtext=""
        ctaText=""
      />
    </div>
  );
};

export default PricingPage;

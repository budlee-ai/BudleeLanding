import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RefundPage = () => {
  useEffect(() => {
    mixpanel.track('Refund Page Viewed');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-16 md:py-5 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="hero-tagline text-3xl md:text-4xl lg:text-5xl mb-6 whitespace-nowrap gradient-text">
              Refund & Cancellation Policy
            </h1>
            <p className="text-gray-700 text-base md:text-lg font-medium">
              Effective Date: October 27, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              At Budlee AI (a product of Needoo AI Innovations LLP, hereinafter "we," "us," or "our"), we are committed to providing a reliable and transparent learning experience across our AI learning tools and 1-on-1 live tuition platform. This Refund & Cancellation Policy outlines the specific rules governing subscriptions, on-demand tuition bookings, cancellations, attendance outcomes, and platform credits. By using our Service, you agree to this policy.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">1. Payment & Booking Models</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Subscription Plans:</strong> Monthly or annual subscription plans may include bundled tuition hours alongside unlimited AI features.</li>
              <li><strong>On-Demand Tuition:</strong> Students can purchase standalone tuition sessions on a per-hour basis without an active recurring subscription.</li>
              <li><strong>Payment Processing:</strong> All transactions are processed securely through certified payment gateways (Stripe and Razorpay). We do not store credit or debit card numbers on our servers.</li>
              <li><strong>Institutional & School Accounts:</strong> Subscriptions provided through educational institutions are managed directly by school administrators.</li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">2. Subscription Plans — Refund & Cancellation Policy</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>No Cash Refunds on Subscriptions:</strong> All subscription payments are final. We do not provide cash or card refunds for recurring subscription fees, whether partial or full, regardless of usage or early cancellation.</li>
              <li><strong>Cancellation Anytime:</strong> You may cancel your subscription at any time through your account settings.</li>
              <li><strong>Active Until Period End:</strong> Upon cancellation, your subscription remains active until the conclusion of the current paid billing cycle. No further recurring charges will be incurred.</li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">3. Live Tuition — Cancellation & Rescheduling (The 24-Hour Rule)</h2>
            <p className="mb-4">
              When a tuition session is booked, the selected tutor reserves that specific time slot exclusively for you. Therefore, cancellations and rescheduling are subject to a strict 24-hour advance notice requirement:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <strong>Cancellations Made at Least 24 Hours in Advance:</strong>
                <ul className="list-circle pl-6 mt-2 space-y-2">
                  <li>
                    <strong>On-Demand Paid Sessions:</strong> 100% of the session hours are credited back as <strong>Tuition Wallet Credits</strong> to your in-app account wallet. These credits have no expiration date and can be used immediately to book any available tutor and subject. <em>Direct cash refunds back to your original bank account or card are not provided.</em>
                  </li>
                  <li>
                    <strong>Subscription Plan Sessions:</strong> The booked session hours are immediately released and returned to your active subscription balance for future booking within the current billing cycle.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cancellations Made Less Than 24 Hours in Advance:</strong>
                <p className="mt-1">
                  Cancellations, rescheduling, or failure to attend within 24 hours of the scheduled start time are <strong>strictly non-refundable</strong>. The session fee or subscription credit is forfeited because the tutor has committed that time exclusively to your booking.
                </p>
              </li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">4. Tuition Attendance Outcomes & No-Show Policy</h2>
            <p className="mb-4">
              To protect both students and educators, our platform automatically evaluates session attendance:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <strong>Teacher No-Show (10-Minute Protection Rule):</strong> If an assigned tutor fails to join the virtual classroom within <strong>10 minutes</strong> of the scheduled start time, the student is entitled to claim an immediate exit. The booking is cancelled, and <strong>100% of the session credit is restored</strong> to the student's tuition wallet or subscription balance immediately. The tutor receives no payout for that session.
              </li>
              <li>
                <strong>Student No-Show:</strong> If the tutor joins on time and waits in the virtual classroom, but the student fails to join, the session is marked as completed. <strong>No refund or wallet credit is issued</strong> to the student, and the tutor receives their standard compensation for reserving their time.
              </li>
              <li>
                <strong>Both No-Show:</strong> If neither the tutor nor the student joins the scheduled session, the booking is cancelled with no compensation issued.
              </li>
              <li>
                <strong>In-Session Extensions:</strong> Extra time added during an active class (30 or 60 minutes) is non-refundable once agreed upon by both parties and commenced.
              </li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">5. Technical Downtime & Exceptional Circumstances</h2>
            <p className="mb-6">
              In rare instances where a scheduled session cannot take place or is terminated prematurely due to verified platform technical failures on our servers, affected students will receive replacement tuition wallet credits upon administrative verification. Technical issues arising from the user's personal internet connectivity, camera/microphone hardware, or local device are not eligible for compensation.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">6. Contact Support</h2>
            <div className="mb-6">
              <p className="mb-2">If you have questions regarding a booking, cancellation, or tuition wallet balance:</p>
              <p className="font-semibold">Budlee AI Support Team</p>
              <p><a href="mailto:help@budlee.ai" className="text-green-600 hover:text-green-700 underline">help@budlee.ai</a></p>
              <p className="mt-2">
                Needoo AI Innovations LLP<br />
                Budlee AI Corporate Office,<br />
                BUILDING NO 18 214 C KODUR PO NEAR BHARATH PETROLEUM,<br />
                MALAPPURAM, KODUR-MALABAR,<br />
                KERALA - 676504,<br />
                INDIA
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPage;

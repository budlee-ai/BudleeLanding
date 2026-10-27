import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage = () => {
  useEffect(() => {
    mixpanel.track('Terms Page Viewed');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-16 md:py-5 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="hero-tagline text-3xl md:text-4xl lg:text-5xl mb-6 whitespace-nowrap gradient-text">
              Terms of Service
            </h1>
            <p className="text-gray-700 text-base md:text-lg font-medium">
              Effective Date: October 27, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Welcome to Budlee AI (the "Service"), an AI-powered educational and 1-on-1 live tutoring platform provided by Needoo AI Innovations LLP ("we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of the Service, including our website, mobile applications, AI features, and live tuition platform. By accessing or using the Service as a Student, Parent, or Teacher, you agree to be bound by these Terms. If you do not agree, please do not access or use the Service.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">1. Definitions</h2>
            <p className="mb-4">
              <strong>"Service"</strong> refers to the entire Budlee AI platform, including AI chat, quests, curriculum materials, interactive community features, and the Budlee Live Tuition marketplace and virtual classroom.
            </p>
            <p className="mb-4">
              <strong>"Live Classroom"</strong> refers to the proprietary, real-time interactive virtual classroom facilitating 1-on-1 audio, video, whiteboard, and document collaboration.
            </p>
            <p className="mb-4">
              <strong>"Tutor" or "Teacher"</strong> refers to an independent educator who registers, completes verification, and offers 1-on-1 live tuition sessions via the Service.
            </p>
            <p className="mb-4">
              <strong>"Student"</strong> refers to any individual learner enrolled in academic boards/grades who books or attends live tuition sessions or interacts with AI educational tools.
            </p>
            <p className="mb-4">
              <strong>"Parent or Guardian"</strong> refers to the legal parent or guardian responsible for a student user under 18 years of age.
            </p>
            <p className="mb-6">
              <strong>"Content"</strong> refers to any text, images, demo videos, curriculum materials, session topics, or messages shared or generated across the Service.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">2. Eligibility & Minor Guidance</h2>
            <p className="mb-4">
              You must be at least 18 years of age to register independently as a Teacher or an adult Student.
            </p>
            <p className="mb-6">
              If you are under 18 years old, you may only use the Service and participate in live tuition sessions with the direct consent, guidance, and supervision of your parent or legal guardian. Parents and guardians are legally responsible for all bookings, classroom conduct, and payments made by minors under their care.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">3. Account Registration & Verification</h2>
            <p className="mb-4">
              To book a tuition session or offer tutoring, you must create a verified account:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>You agree to provide true, current, and complete registration information.</li>
              <li>Students and parents booking tuition sessions must complete phone number verification (via WhatsApp OTP or SMS) to confirm bookings and receive session alerts.</li>
              <li>Guests and unauthenticated visitors cannot schedule live tuition sessions.</li>
              <li>You are solely responsible for safeguarding your credentials and for all actions taking place under your account.</li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">4. Live Tuition Platform — Student & Parent Terms</h2>
            <p className="mb-4">
              Budlee AI connects students with qualified, independent human tutors. When booking and participating in tuition sessions, Students and Parents agree to the following terms:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <strong>Advance Booking Window:</strong> Tuition sessions must be booked at least <strong>24 hours in advance</strong> and can be scheduled up to <strong>7 days ahead</strong> starting from the following day, subject to tutor schedule availability.
              </li>
              <li>
                <strong>Booking Models:</strong> Sessions may be booked utilizing included tuition hours from an active subscription plan, or through standalone on-demand session purchases (processed securely via Razorpay or Stripe).
              </li>
              <li>
                <strong>Classroom Access:</strong> The Live Classroom opens for entry exactly <strong>1 minute before</strong> the scheduled start time. Students must arrive promptly with functioning audio and video equipment.
              </li>
              <li>
                <strong>Teacher No-Show Protection (10-Minute Rule):</strong> If an assigned tutor fails to join the Live Classroom within <strong>10 minutes</strong> of the scheduled start time, the student is entitled to claim a Teacher No-Show exit. The session is cancelled immediately, and 100% of the session credit is returned to the student's tuition wallet or subscription quota.
              </li>
              <li>
                <strong>In-Session Extensions:</strong> During an active session, students may request a 30-minute or 60-minute extension. Extensions are subject to tutor acceptance and calendar availability, and are billed via subscription credits or on-demand payment.
              </li>
              <li>
                <strong>Student Reviews & Ratings:</strong> Following each completed session, students may submit a rating across four criteria: Teaching Style, Student Engagement, Concept Simplification, and Friendliness, along with optional private feedback for quality assurance.
              </li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">5. Live Tuition Platform — Teacher & Tutor Terms</h2>
            <p className="mb-4">
              Educators registered to provide live tutoring on Budlee AI agree to the following terms and operational standards:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <strong>Independent Contractor Relationship:</strong> Tutors operate as independent professionals and contractors. Nothing in these Terms creates an employment, agency, partnership, or joint venture relationship between Tutors and Needoo AI Innovations LLP.
              </li>
              <li>
                <strong>KYC & Statutory Verification:</strong> Tutors must submit accurate profile information, academic qualifications, subjects taught, and valid financial details (PAN and verified bank account or UPI ID) prior to receiving bookings and payouts.
              </li>
              <li>
                <strong>Schedule & Availability Commitments:</strong> Tutors define their weekly recurring availability. Once a student books a confirmed slot, the tutor is obligated to conduct the session unless the slot was paused or cancelled at least 24 hours in advance.
              </li>
              <li>
                <strong>Punctuality & Attendance:</strong> Tutors must enter the Live Classroom at or before the scheduled start time. Failure to enter within 10 minutes constitutes a Teacher No-Show, resulting in forfeiture of payout for that session.
              </li>
              <li>
                <strong>Three-Strike Disciplinary Policy:</strong> To ensure reliability for students, repeated unexcused teacher no-shows or cancellations within 24 hours (2–3 occurrences) will result in disciplinary action, including temporary profile suspension, removal from student search recommendations, or permanent termination of the tutor account.
              </li>
              <li>
                <strong>Biweekly Settlement Cycle:</strong> Verified earnings for completed sessions (and eligible student no-shows where the teacher waited on time) are settled on a <strong>biweekly cycle</strong> via direct bank transfer (NEFT/IMPS/RTGS) or UPI, subject to applicable statutory tax deductions (TDS under the Indian Income Tax Act).
              </li>
              <li>
                <strong>Teacher Introduction Videos:</strong> Tutors who choose to upload a brief profile introduction video grant Budlee AI permission to display it on their public tutor profile for students and parents to view.
              </li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">6. Classroom Code of Conduct & Safety</h2>
            <p className="mb-4">
              Maintaining a safe, professional, and trustworthy learning environment is paramount. All users agree to adhere strictly to the following standards:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Strict Non-Circumvention (Off-Platform Prohibition):</strong> Students, Parents, and Tutors strictly agree not to solicit, offer, arrange, or accept private tutoring lessons, direct payments, or off-platform communication outside of Budlee AI. Any attempt to circumvent the platform will result in immediate permanent account termination and forfeiture of pending balances.
              </li>
              <li>
                <strong>No Exchange of Personal Contact Details:</strong> Sharing personal phone numbers, physical addresses, external email addresses, or social media handles during live sessions or via platform chat is strictly prohibited.
              </li>
              <li>
                <strong>Professional Conduct:</strong> All parties must maintain appropriate attire, respectful communication, and professional decorum in the virtual classroom. Obscene language, discrimination, harassment, political proselytizing, or inappropriate background visuals are strictly prohibited.
              </li>
              <li>
                <strong>Unauthorized Recording Prohibited:</strong> Participants are strictly forbidden from capturing personal screen recordings, screenshots, or audio captures of sessions without express written consent from Budlee AI and all session participants.
              </li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">7. Intellectual Property</h2>
            <p className="mb-6">
              All rights, titles, and interests in the Service—including AI algorithms, proprietary classroom software, trademarks, logos, and platform curriculum—belong exclusively to Needoo AI Innovations LLP. Users retain ownership of their personal learning notes but grant us a license to use materials shared in-session solely as necessary to operate the Service.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">8. Privacy & Data Handling</h2>
            <p className="mb-6">
              Your use of the Service is also governed by our <a href="/privacy" className="text-green-600 hover:text-green-700 underline font-semibold">Privacy Policy</a>, which details our data handling, audio/video streaming, and teacher KYC storage policies under applicable Indian laws.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">9. Termination</h2>
            <p className="mb-6">
              We reserve the right to immediately suspend or terminate your account and access to the Service for violation of these Terms, non-circumvention breaches, safety violations, or fraudulent chargeback activities. Upon termination, your right to use the platform ceases immediately.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">10. Disclaimers and Limitations of Liability</h2>
            <p className="mb-6">
              The Service is provided on an "as is" and "as available" basis without warranties of any kind. While Budlee AI verifies teacher identity and qualifications, we do not guarantee specific academic grades, exam outcomes, or tutor availability. In no event shall Needoo AI Innovations LLP be liable for indirect, incidental, punitive, or consequential damages. Our aggregate liability arising out of or related to these Terms or the Service is strictly limited to the greater of INR ₹5,000 or the total fees paid by you to Budlee AI in the preceding 12 months.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">11. Governing Law and Dispute Resolution</h2>
            <p className="mb-6">
              These Terms shall be governed by and construed in accordance with the laws of India. Any dispute, controversy, or claim arising out of or relating to these Terms, including tuition disputes, shall be resolved through binding arbitration in Malappuram, Kerala, India, in accordance with the Arbitration and Conciliation Act, 1996. The courts of Malappuram, Kerala, shall have exclusive jurisdiction over any legal proceedings.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">12. Amendments</h2>
            <p className="mb-6">
              We may revise these Terms periodically to reflect platform enhancements or regulatory changes. Updated Terms will be posted on this page with a revised "Effective Date." Your continued use of the Service after any modification constitutes your acceptance of the revised Terms.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">13. Contact Us</h2>
            <div className="mb-6">
              <p className="mb-2">For inquiries, legal notices, or compliance concerns regarding these Terms:</p>
              <p className="font-semibold">Budlee AI Legal & Compliance Team</p>
              <p><a href="mailto:legal@budlee.ai" className="text-green-600 hover:text-green-700 underline">legal@budlee.ai</a></p>
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

export default TermsPage;

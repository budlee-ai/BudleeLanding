import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  useEffect(() => {
    mixpanel.track('Privacy Page Viewed');
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-16 md:py-5 px-4 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="hero-tagline text-3xl md:text-4xl lg:text-5xl mb-6 whitespace-nowrap gradient-text">
              Privacy Policy
            </h1>
            <p className="text-gray-700 text-base md:text-lg font-medium">
              Effective Date: October 27, 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              At Budlee AI (a product of Needoo AI Innovations LLP, hereinafter "we," "us," or "our"), we are deeply committed to protecting the privacy and personal data of our users, including students, parents, and teachers. This Privacy Policy explains how we collect, process, protect, and handle your information across our AI-powered learning platform and 1-on-1 live tuition virtual classroom. By accessing or using the Service, you consent to the practices described in this policy.
            </p>
            <p className="mb-6">
              This Privacy Policy complies with applicable Indian data protection and information technology laws, including the Information Technology Act, 2000, and the Digital Personal Data Protection standards.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information necessary to deliver educational services, facilitate live classes, and maintain platform security:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <strong>Student & Parent Information:</strong> Full name, email address, grade, educational board, phone number (verified via one-time password), and parent/guardian contact details.
              </li>
              <li>
                <strong>Teacher Professional & Financial KYC Data:</strong> For registered tutors, we collect educational qualifications, subjects taught, profile photo, introduction video, Permanent Account Number (PAN), and bank account payout details (account holder name, bank name, account number, IFSC code, and UPI ID). This information is collected solely to verify identity, fulfill statutory tax reporting (TDS), and disburse earnings.
              </li>
              <li>
                <strong>Live Classroom Audio & Video Data:</strong> During live 1-on-1 tutoring sessions, real-time video and audio streams are transmitted between student and teacher to enable face-to-face instruction. Camera and microphone access require your explicit system permission. Background blurring and virtual background features are processed locally on your device.
              </li>
              <li>
                <strong>Speech & Voice Search Queries:</strong> When using voice input to ask questions to Budlee AI, spoken audio is converted to text queries ephemerally. Raw speech clips are not retained on our servers.
              </li>
              <li>
                <strong>AI Interaction Data:</strong> Text queries, practice questions, and study material shared with the Budlee AI assistant.
              </li>
              <li>
                <strong>Payment Information:</strong> Processed through PCI-DSS compliant third-party payment gateways (Stripe and Razorpay). We do not store complete debit or credit card details on our servers.
              </li>
              <li>
                <strong>Device & Usage Data:</strong> IP address, device type, browser settings, login timestamps, and classroom attendance logs (join time, duration, and connection stability).
              </li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Provide, personalize, and operate the Budlee AI learning experience and live tutoring sessions.</li>
              <li>Schedule classes, sync Google Calendar notifications, and send session reminders via WhatsApp/SMS.</li>
              <li>Process student payments and disburse biweekly earnings settlements to teachers.</li>
              <li>Comply with statutory tax reporting obligations under Indian law.</li>
              <li>Verify teacher credentials, track classroom attendance, and investigate no-show claims.</li>
              <li>Ensure child safety, prevent harassment, and maintain a secure learning environment.</li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">3. Live Classroom Recordings & Compliance</h2>
            <p className="mb-4">
              To safeguard students and teachers and maintain the highest educational standards, live 1-on-1 tutoring sessions may be recorded:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <strong>Purpose of Recording:</strong> Recordings are captured strictly for internal quality control, child safety auditing, verifying attendance disputes, and administrative compliance review.
              </li>
              <li>
                <strong>Admin-Only Compliance Access:</strong> Recordings are strictly confidential and accessible solely to authorized Budlee safety and compliance administrators. To protect user privacy, direct video streaming, downloads, or playback access are not provided to students, parents, or teachers.
              </li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">4. Sharing and Disclosure of Information</h2>
            <p className="mb-4">
              We do not sell, rent, or trade your personal information. Data may be shared only under the following limited conditions:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Between Session Participants:</strong> Students and assigned teachers see first names, grades, and subjects to facilitate learning. Private contact details (phone number, physical address, financial data) are never shared between participants.</li>
              <li><strong>With Trusted Infrastructure Providers:</strong> Essential payment processors, communication gateways (WhatsApp/SMS), and encrypted cloud hosting partners who operate under strict non-disclosure obligations.</li>
              <li><strong>Legal & Safety Obligations:</strong> When required by court order, law enforcement, or government authority under applicable Indian law, or to protect the safety of minors.</li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">5. Data Security</h2>
            <p className="mb-6">
              We implement comprehensive technical, physical, and organizational security measures—including end-to-end data encryption in transit and encrypted storage at rest—to safeguard your information. Access to financial data and class recordings is strictly restricted through role-based access controls.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">6. Children's Privacy & Minor Protection</h2>
            <p className="mb-6">
              Budlee AI is designed for educational use by students, including minors. We require parental or guardian consent before any student under 18 years of age can book or attend 1-on-1 live tuition classes. Parents have the right to review their child's account activity and request the deletion of their child's personal information at any time.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">7. Your Rights & Self-Service Account Deletion</h2>
            <p className="mb-4">
              You maintain full control over your personal data:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Self-Service Account Deletion:</strong> You can permanently delete your account directly inside the Budlee AI app by navigating to <strong>Settings &gt; Danger Zone &gt; Delete Account</strong>. Your personal profile, contact information, and preferences will be permanently wiped from active databases.</li>
              <li><strong>Financial Records:</strong> Transactional billing invoices and statutory tax records (TDS records for teachers) are retained in anonymized format as required by Indian financial and tax laws.</li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">8. Cookies & Tracking Technologies</h2>
            <p className="mb-6">
              We use essential, functional, and analytics cookies to preserve your login session, remember your virtual classroom audio/video device preferences, and analyze platform performance. For complete details, please visit our <a href="/cookies" className="text-green-600 hover:text-green-700 underline font-semibold">Cookie Policy</a>.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">9. AI Interaction & Data Consent</h2>
            <p className="mb-4">
              Budlee AI provides interactive study assistance using artificial intelligence:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li>
                <strong>Model Training Consent:</strong> Anonymized educational queries may be used to enhance AI tutoring quality only if you grant explicit consent. You can toggle this setting at any time in <strong>Settings &gt; Privacy & AI Settings</strong>.
              </li>
              <li>
                <strong>Academic Verification:</strong> While Budlee AI provides accurate study assistance, students should cross-verify important exam facts with their official textbooks and live tutors.
              </li>
            </ul>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">10. Updates to This Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. When changes are made, we will update the "Effective Date" at the top of this document and notify active users through platform announcements.
            </p>

            <h2 className="hero-tagline text-2xl md:text-3xl lg:text-[32px] mb-8 md:mb-10 whitespace-nowrap gradient-text mt-8">11. Contact Our Privacy Officer</h2>
            <div className="mb-6">
              <p className="mb-2">If you have any questions or data privacy requests:</p>
              <p className="font-semibold">Budlee AI Data Protection Officer</p>
              <p><a href="mailto:privacy@budlee.ai" className="text-green-600 hover:text-green-700 underline">privacy@budlee.ai</a></p>
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

export default PrivacyPage;
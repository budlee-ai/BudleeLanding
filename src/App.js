import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SchoolsPage from "./pages/SchoolsPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import RefundPage from "./pages/RefundPage";
import CookiePage from "./pages/CookiePage";
import ContactPage from "./pages/ContactPage";
import OurStoryPage from "./pages/OurStoryPage";
import MeetOurTeamPage from "./pages/MeetOurTeamPage";
import MissionVisionPage from "./pages/MissionVisionPage";
import CoreValuesPage from "./pages/CoreValuesPage";
import CareersPage from "./pages/CareersPage";
import PartnerProgramsPage from "./pages/PartnerProgramsPage";
import BlogPage from "./pages/BlogPage";
import TutorialsPage from "./pages/TutorialsPage";
import FaqsPage from "./pages/FaqsPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import PricingPage from "./pages/PricingPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import HelpArticlePage from "./pages/HelpArticlePage";
import WhatsAppButton from "./components/WhatsAppButton";
import PromoModal from "./components/PromoModal";
import OfficialLaunchPage from "./pages/OfficialLaunchPage";
import TuitionLaunchPage from "./pages/TuitionLaunchPage";

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Global elements component to conditionally hide items on specific pages
function GlobalElements() {
  const { pathname } = useLocation();
  const isLaunchPage = pathname === "/official-launch" || pathname === "/tuition-launch";

  if (isLaunchPage) return null;

  return (
    <>
      <WhatsAppButton />
      <PromoModal />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <ScrollToTop />
        <GlobalElements />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/schools" element={<SchoolsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/cookies" element={<CookiePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/team" element={<MeetOurTeamPage />} />
          <Route path="/mission-vision" element={<MissionVisionPage />} />
          <Route path="/core-values" element={<CoreValuesPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/partner-programs" element={<PartnerProgramsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/help/:slug" element={<HelpArticlePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/book-demo" element={<LandingPage />} />
          <Route path="/partner-programs" element={<LandingPage />} />
          <Route path="/official-launch" element={<OfficialLaunchPage />} />
          <Route path="/tuition-launch" element={<TuitionLaunchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

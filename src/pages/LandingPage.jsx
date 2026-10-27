import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CBSECurriculumSection from '../components/CBSECurriculumSection';
import AfterSchoolSection from '../components/AfterSchoolSection';
import UnderstandingSection from '../components/UnderstandingSection';
import PracticeSection from '../components/PracticeSection';
import CuriositySection from '../components/CuriositySection';
import ParentsSection from '../components/ParentsSection';
import Footer from '../components/Footer';
import PromoBanner from '../components/PromoBanner';
import AppDownloadSection from '../components/AppDownloadSection';
import EcosystemCarousel from '../components/EcosystemCarousel';
import VoiceTutorSection from '../components/VoiceTutorSection';
import OnDemandTuitionSection from '../components/OnDemandTuitionSection';
import { useSignedVideo, useSignedVideos } from '../hooks/useSignedVideo';

const LandingPage = () => {
  useEffect(() => {
    mixpanel.track('Landing Page Viewed');
  }, []);

  const heroVideoPaths = [
    'settings/landing_videos/hero0.mp4',
    'settings/landing_videos/hero1.mp4',
    'settings/landing_videos/hero2.mp4',
  ];
  const { videos: heroVideos } = useSignedVideos(heroVideoPaths);
  const heroVideoFallback = useSignedVideo('settings/landing_videos/hero.mp4');

  const chatVideo = useSignedVideo('settings/landing_videos/chat.mp4');
  const questVideo = useSignedVideo('settings/landing_videos/quest.mp4');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection videos={heroVideos} videoUrl={heroVideoFallback} />
        <AppDownloadSection />
        <PromoBanner />
        <CBSECurriculumSection />
        <AfterSchoolSection />
        <UnderstandingSection videoUrl={chatVideo} />
        <VoiceTutorSection />
        <PracticeSection videoUrl={questVideo} />
        <CuriositySection />
        <OnDemandTuitionSection />
        <ParentsSection />
        <EcosystemCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;

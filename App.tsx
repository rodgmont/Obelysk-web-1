import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionSection from './components/MissionSection';
import ContextGapChart from './components/ContextGapChart';
import SectorGrid from './components/SectorGrid';
import VisionSection from './components/VisionSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import NeuralBackground from './components/NeuralBackground';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  // Smooth scroll behavior implementation
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-obelysk-base text-obelysk-text selection:bg-obelysk-accent selection:text-black">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <NeuralBackground />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          
          <MissionSection />
          
          <ContextGapChart />
          
          <SectorGrid />
          
          <VisionSection />
          
          <TeamSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
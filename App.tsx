import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Memo from './components/Memo';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import NeuralBackground from './components/NeuralBackground';
import ApplyModal from './components/ApplyModal';
import { LanguageProvider } from './contexts/LanguageContext';

type View = 'home' | 'about';

const AppContent: React.FC = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');

  // Smooth scroll behavior implementation
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NeuralBackground />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar 
          onOpenApplyModal={() => setIsApplyModalOpen(true)} 
          onNavigate={handleNavigate}
        />
        
        <main className="flex-grow">
          {currentView === 'home' && <Memo />}
          {currentView === 'about' && <AboutSection />}
        </main>

        <Footer />
      </div>

      {/* Modals */}
      <ApplyModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
      />
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
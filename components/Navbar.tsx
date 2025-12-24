import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  onOpenApplyModal: () => void;
  onNavigate: (view: 'home' | 'about') => void;
}

const ObelyskLogo = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-7 h-7 text-white fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 50 50)`}>
         {/* Elliptical petals rotated to create the aperture effect */}
         <ellipse 
            cx="50" 
            cy="20" 
            rx="7" 
            ry="15" 
            transform="rotate(-25 50 20)" 
         />
      </g>
    ))}
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ onOpenApplyModal, onNavigate }) => {
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-transparent">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo Area */}
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="transition-transform duration-700 ease-in-out group-hover:rotate-90">
            <ObelyskLogo />
          </div>
          <span className="text-lg font-medium tracking-tight text-white">
            Obelysk
          </span>
        </button>

        {/* Right Navigation */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
            <button 
              onClick={() => onNavigate('about')} 
              className="hover:text-white transition-colors focus:outline-none"
            >
              {t.navbar.about}
            </button>
            <a href="#" className="hover:text-white transition-colors">{t.navbar.blog}</a>
            <a href="#" className="hover:text-white transition-colors">{t.navbar.careers}</a>
          </nav>
          
          <button 
            onClick={onOpenApplyModal}
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            {t.navbar.apply}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
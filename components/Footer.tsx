import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ObelyskFooterLogo = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-8 h-8 text-white fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 50 50)`}>
         <path 
           d="M50 15 C 56 15, 62 20, 62 28 C 62 36, 56 40, 50 40 C 44 40, 38 36, 38 28 C 38 20, 44 15, 50 15 Z"
           transform="rotate(20 50 28)" 
         />
      </g>
    ))}
  </svg>
);

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Side */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <ObelyskFooterLogo />
            <span className="text-2xl font-medium tracking-wide">Obelysk</span>
          </div>
          
          <div className="space-y-1 text-sm text-zinc-400 font-light">
            <p>{t.footer.copyright}</p>
            <p>{t.footer.location}</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex gap-8 mt-12 md:mt-0 text-sm font-medium">
           <a href="#" className="text-zinc-400 hover:text-white transition-colors">Twitter</a>
           <a href="#" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
           <a href="mailto:hello@obelysk.ai" className="text-zinc-400 hover:text-white transition-colors">hello@obelysk.ai</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
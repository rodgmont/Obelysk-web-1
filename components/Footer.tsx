import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Linkedin } from 'lucide-react';

const ObelyskLogo = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-5 h-5 text-white fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 50 50)`}>
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

const XLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 px-6 bg-black text-white">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2 group cursor-default">
           <div className="transition-transform duration-700 ease-in-out group-hover:rotate-90">
             <ObelyskLogo />
           </div>
           <span className="text-sm font-medium">Obelysk</span>
        </div>

        <div className="text-zinc-500 text-xs">
            {t.footer.copyright}
        </div>

        <div className="flex gap-4">
            <a href="https://x.com/Obelysktch" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <XLogo />
            </a>
            <a href="https://www.linkedin.com/company/obelysktch/" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <Linkedin size={18} />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
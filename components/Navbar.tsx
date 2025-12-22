import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ObelyskLogo = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="w-10 h-10 text-white fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Creating 8 rotated petal shapes to match the logo */}
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

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t.navbar.about, href: '#mission' },
    { name: t.navbar.blog, href: '#' },
    { name: t.navbar.careers, href: '#' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo Area */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="transition-transform duration-700 ease-in-out group-hover:rotate-90">
            <ObelyskLogo />
          </div>
          <span className="text-xl font-bold tracking-wide text-white uppercase">
            Obelysk
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors lowercase"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <a 
            href="#apply" 
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors capitalize"
          >
            {t.navbar.apply}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black p-6 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg text-zinc-300 hover:text-white font-medium lowercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#apply" 
              className="inline-block text-center bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors w-full mt-4 capitalize"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.navbar.apply}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
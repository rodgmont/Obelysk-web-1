import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ContextGapChart from './ContextGapChart';
import { ArrowUpRight } from 'lucide-react';

const Memo: React.FC = () => {
  const { t } = useLanguage();

  // Clean Hero Branding Area - No Box, Horizontal Layout
  const LatAmHeroImage = () => (
    <div className="w-full py-20 mb-8 flex items-center justify-center">
       {/* Horizontal Logo and Name */}
       <div className="flex items-center gap-6 md:gap-8">
          <svg 
            viewBox="0 0 100 100" 
            className="w-16 h-16 md:w-20 md:h-20 text-white fill-current"
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
          <span className="text-5xl md:text-7xl font-semibold tracking-tighter text-white">
            Obelysk
          </span>
       </div>
    </div>
  );

  return (
    <article className="pt-24 pb-32 px-6 min-h-screen bg-black flex justify-center animate-fade-in-up">
      <div className="max-w-[720px] w-full">
        
        {/* Hero Image Area */}
        <LatAmHeroImage />

        {/* Title Section */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6 leading-[1.05]">
            {t.memo.title}
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-zinc-500 text-sm md:text-base">
             <div className="flex items-center gap-2">
               <span className="text-zinc-400 font-medium">2025 Obelysk Technologies, Inc.</span>
             </div>
             <span className="hidden md:block text-zinc-700">•</span>
             <p>{t.memo.subtitle}</p>
          </div>
        </header>

        {/* Content */}
        <div className="space-y-12">
          
          {/* Introduction */}
          <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-normal">
            {t.memo.intro}
          </p>

          <div className="h-px w-full bg-zinc-900" />

          {/* Section 1 */}
          <div>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              {t.memo.section1Body}
            </p>
            
            {/* Chart Component */}
            <div className="my-12">
                <h3 className="text-white font-medium text-lg mb-2">{t.memo.chartTitle}</h3>
                <p className="text-zinc-500 text-sm mb-6">{t.memo.chartCaption}</p>
                <ContextGapChart />
            </div>
          </div>

          {/* Pull Quote */}
          <div className="py-8">
             <h2 className="text-3xl md:text-4xl font-medium text-white leading-tight tracking-tight">
               "{t.memo.quote}"
             </h2>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              {t.memo.section2Title}
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
               {t.memo.section2Body}
            </p>
          </div>

          <div className="h-px w-full bg-zinc-900" />
          
          {/* CTA / Closing */}
          <div className="pt-4">
            <h3 className="text-2xl font-medium text-white mb-6">
                {t.memo.closing}
            </h3>
            
            <div className="flex flex-col md:flex-row gap-6 text-sm">
                <div className="space-y-2">
                    <span className="block text-zinc-500 uppercase tracking-wider text-xs font-bold">New Funding</span>
                    <p className="text-zinc-400 max-w-sm">
                        Backed by visionaries who understand that the next wave of AI will be defined by contextual depth, not just parameter count.
                    </p>
                </div>
                
                <div className="space-y-2">
                    <span className="block text-zinc-500 uppercase tracking-wider text-xs font-bold">Join Us</span>
                    <a href="#" className="inline-flex items-center gap-1 text-white hover:text-zinc-300 transition-colors border-b border-zinc-800 pb-0.5">
                        Open Positions <ArrowUpRight size={14} />
                    </a>
                </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
};

export default Memo;
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white pt-40 pb-32 animate-fade-in-up">
      
      {/* Autopoiesis / Mission */}
      <div className="max-w-[720px] mx-auto px-6 mb-40">
        <h3 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight mb-16">
            {t.about.autopoiesis}
        </h3>

        <div className="space-y-6">
            <h4 className="text-2xl md:text-3xl font-normal">{t.about.missionTitle}</h4>
            <p className="text-xl text-zinc-400 leading-relaxed font-light">
                {t.about.missionBody}
            </p>
        </div>
      </div>

      {/* Vision Split Section */}
      <div className="max-w-[1200px] mx-auto px-6">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 max-w-sm leading-[1.1]">
                    {t.about.visionTitle}
                </h3>
                <p className="text-lg text-zinc-300 leading-relaxed mb-8 max-w-md">
                    {t.about.visionBody}
                </p>
            </div>
            
            <div className="order-1 md:order-2">
                {/* Abstract Artistic Image Placeholder (DALL-E style from reference) */}
                <div className="aspect-square bg-zinc-900 rounded overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-purple-900/40 to-yellow-900/40 mix-blend-screen"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1000&auto=format&fit=crop" 
                        alt="Vision Art" 
                        className="w-full h-full object-cover opacity-80 mix-blend-overlay hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                    />
                    <div className="absolute bottom-4 left-4 text-[10px] text-zinc-500 font-mono">
                        Illustration: DALL·E
                    </div>
                </div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default AboutSection;
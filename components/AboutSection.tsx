import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white pt-40 pb-32 animate-fade-in-up">
      
      {/* Introduction Block */}
      <div className="max-w-[1200px] mx-auto px-6 mb-32">
        <div className="text-center mb-12">
            <span className="text-sm font-medium mb-4 block text-zinc-400">{t.about.header}</span>
        </div>
        <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-8">
                {t.about.subHeader}
             </h2>
        </div>
      </div>

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
      <div className="max-w-[1200px] mx-auto px-6 mb-40">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 max-w-sm leading-[1.1]">
                    {t.about.visionTitle}
                </h3>
                <p className="text-lg text-zinc-300 leading-relaxed mb-8 max-w-md">
                    {t.about.visionBody}
                </p>
                
                <div className="flex items-center gap-6">
                    <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-5 py-2.5 rounded text-sm font-medium transition-colors">
                        {t.about.visionBtn1}
                    </button>
                    <button className="flex items-center gap-1 text-white hover:text-zinc-300 transition-colors text-sm font-medium">
                        {t.about.visionBtn2} <ChevronRight size={14} />
                    </button>
                </div>
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

      {/* Founding Team */}
      <div className="max-w-[1200px] mx-auto px-6">
        <h3 className="text-3xl md:text-4xl font-normal tracking-tight mb-16">
            {t.about.teamTitle}
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
            {t.about.team.map((member, index) => (
                <div key={index} className="group">
                    {/* Portrait Placeholder */}
                    <div className="aspect-square bg-zinc-900 mb-6 overflow-hidden rounded-sm relative">
                         {/* Using random portraits from Unsplash for demo purposes */}
                         <img 
                            src={`https://images.unsplash.com/photo-${index === 0 ? '1506794778202-cad84cf45f1d' : index === 1 ? '1507003211169-0a1dd7228f2d' : '1472099645785-5658abf4ff4e'}?w=800&auto=format&fit=crop&q=60`}
                            alt={member.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                         />
                    </div>
                    <h4 className="text-xl font-medium text-white mb-1">{member.name}</h4>
                    <p className="text-zinc-400 text-sm font-light">{member.role}</p>
                </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default AboutSection;
import React from 'react';
import { BookOpen, HeartPulse, Building2, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SectorGrid: React.FC = () => {
  const { t } = useLanguage();
  
  const sectors = [
    {
      id: "Ed",
      name: t.sectors.items.ed.name,
      icon: <BookOpen className="w-8 h-8 text-obelysk-accent" />,
      desc: t.sectors.items.ed.desc
    },
    {
      id: "Hc",
      name: t.sectors.items.hc.name,
      icon: <HeartPulse className="w-8 h-8 text-obelysk-accent" />,
      desc: t.sectors.items.hc.desc
    },
    {
      id: "Ent",
      name: t.sectors.items.ent.name,
      icon: <Building2 className="w-8 h-8 text-obelysk-accent" />,
      desc: t.sectors.items.ent.desc
    },
    {
      id: "Auto",
      name: t.sectors.items.auto.name,
      icon: <Cpu className="w-8 h-8 text-obelysk-accent" />,
      desc: t.sectors.items.auto.desc
    }
  ];

  return (
    <section id="sectors" className="py-24 px-6 bg-obelysk-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-obelysk-text mb-6">{t.sectors.title}</h2>
        <p className="text-obelysk-muted max-w-2xl mx-auto">
          {t.sectors.subtitle}
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectors.map((sector) => (
          <div 
            key={sector.id} 
            className="group relative bg-obelysk-base p-8 transition-all duration-300 min-h-[300px] flex flex-col justify-between shadow-sm hover:shadow-md hover:bg-zinc-900/20"
          >
            <div className="absolute top-4 right-4 text-xs font-mono text-obelysk-muted group-hover:text-obelysk-accent">
              {sector.id}
            </div>
            
            <div className="mb-6">
              <div className="mb-4 p-3 bg-obelysk-surface inline-block rounded transition-colors">
                {sector.icon}
              </div>
              <h3 className="text-2xl font-bold text-obelysk-text mb-2">{sector.name}</h3>
            </div>
            
            <p className="text-sm text-obelysk-muted leading-relaxed group-hover:text-obelysk-text transition-colors">
              {sector.desc}
            </p>

            <div className="absolute bottom-0 left-0 w-0 h-1 bg-obelysk-accent group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectorGrid;
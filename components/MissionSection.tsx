import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const MissionSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="mission" className="py-24 px-6 bg-obelysk-base">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold text-obelysk-text">
            {t.mission.title} <br/>
            <span className="text-obelysk-accent">{t.mission.titleHighlight}</span>
          </h3>
          <p className="text-xl text-obelysk-muted leading-relaxed">
            {t.mission.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 pt-12">
          <div>
            <h4 className="text-obelysk-text text-xl font-bold mb-4">{t.mission.gapTitle}</h4>
            <p className="text-obelysk-muted">
              {t.mission.gapDesc}
            </p>
          </div>
          <div>
            <h4 className="text-obelysk-text text-xl font-bold mb-4">{t.mission.strategyTitle}</h4>
            <p className="text-obelysk-muted">
              {t.mission.strategyDesc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionSection;
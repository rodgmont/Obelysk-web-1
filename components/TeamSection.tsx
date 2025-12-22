import React from 'react';
import { MapPin, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const TeamSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="team" className="py-24 px-6 bg-obelysk-surface">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Who We Are */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-obelysk-text flex items-center gap-3">
            {t.team.whoWeAre} <MapPin className="text-obelysk-accent" />
          </h3>
          <p className="text-obelysk-muted leading-relaxed">
            {t.team.whoDesc1Part1} <span className="text-obelysk-text font-bold">{t.team.whoDesc1Strong}</span>{t.team.whoDesc1Part2}
          </p>
          <p className="text-obelysk-muted leading-relaxed">
            {t.team.whoDesc2}
          </p>
        </div>

        {/* Backers */}
        <div className="bg-obelysk-base p-8 rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold text-obelysk-text mb-6 flex items-center gap-3">
            {t.team.backedBy} <Award className="text-obelysk-accent" />
          </h3>
          <p className="text-obelysk-muted mb-8">
            {t.team.backedDesc} <strong>{t.team.backedStrong}</strong>{t.team.backedDesc2}
          </p>
          
          <div className="flex flex-wrap gap-4">
             <div className="px-6 py-3 bg-obelysk-surface rounded-full text-sm font-bold text-obelysk-text tracking-wide">
                CoreNest SV
             </div>
             <div className="px-6 py-3 bg-obelysk-surface rounded-full text-sm font-bold text-obelysk-text tracking-wide">
                LatAm Innovators
             </div>
             <div className="px-6 py-3 bg-obelysk-surface rounded-full text-sm font-bold text-obelysk-text tracking-wide">
                Global Advisors
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
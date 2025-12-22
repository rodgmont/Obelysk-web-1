import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const VisionSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="vision" className="py-32 px-6 bg-obelysk-base">
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-12">
          <h4 className="text-obelysk-accent uppercase tracking-widest text-sm font-bold mb-4">{t.vision.eyebrow}</h4>
          <h2 className="text-4xl md:text-6xl font-bold text-obelysk-text mb-8">
            {t.vision.title} <span className="text-obelysk-muted">{t.vision.titleSub}</span>
          </h2>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:text-obelysk-text prose-p:text-obelysk-muted prose-strong:text-obelysk-text">
          <p>
            {t.vision.p1}
          </p>
          <p>
            {t.vision.p2Part1} <strong className="text-obelysk-text">{t.vision.p2Strong}</strong>{t.vision.p2Part2}
          </p>
          <blockquote className="border-l-4 border-obelysk-accent pl-6 italic text-obelysk-text font-medium my-8 bg-obelysk-surface py-4 pr-4">
            {t.vision.quote}
          </blockquote>
          <p>
            {t.vision.closing}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
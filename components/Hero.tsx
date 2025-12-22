import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="max-w-5xl w-full text-center space-y-8 animate-fade-in-up">
        <h2 className="text-obelysk-accent font-semibold tracking-[0.2em] text-sm md:text-base uppercase mb-4">
          {t.hero.subtitle}
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter text-obelysk-text leading-none">
          {t.hero.title}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-obelysk-muted leading-relaxed font-medium">
          {t.hero.description}
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-obelysk-muted">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
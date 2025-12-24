import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-black border border-zinc-800 rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-12 space-y-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.modal.success}</h3>
                <p className="text-zinc-400">{t.modal.successMsg}</p>
              </div>
              <button 
                onClick={onClose}
                className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
              >
                {t.modal.close}
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">{t.modal.title}</h2>
                <p className="text-zinc-400">{t.modal.subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                    {t.modal.name}
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-zinc-800 py-2 text-white focus:outline-none focus:border-white transition-colors placeholder-zinc-700"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                    {t.modal.email}
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-zinc-800 py-2 text-white focus:outline-none focus:border-white transition-colors placeholder-zinc-700"
                    placeholder="juan@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                    {t.modal.linkedin}
                  </label>
                  <input 
                    type="url" 
                    id="linkedin"
                    className="w-full bg-transparent border-b border-zinc-800 py-2 text-white focus:outline-none focus:border-white transition-colors placeholder-zinc-700"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                    {t.modal.message}
                  </label>
                  <textarea 
                    id="message"
                    required
                    rows={3}
                    className="w-full bg-transparent border-b border-zinc-800 py-2 text-white focus:outline-none focus:border-white transition-colors resize-none placeholder-zinc-700"
                    placeholder="..."
                  />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-colors"
                  >
                    {t.modal.submit}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
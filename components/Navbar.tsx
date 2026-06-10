
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';

interface NavbarProps {
  onScrollToServices: () => void;
  onScrollToTimeline: () => void;
  onScrollToConsultant: () => void;
  onScrollToShowcase: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onScrollToServices, 
  onScrollToTimeline,
  onScrollToConsultant, 
  onScrollToShowcase
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('Expertise', 'Keahlian'), action: onScrollToServices, id: '01' },
    { label: t('Journey', 'Perjalanan'), action: onScrollToTimeline, id: '02' },
    { label: t('AI Agent', 'Asisten AI'), action: onScrollToConsultant, id: '03' },
    { label: t('Projects', 'Proyek'), action: onScrollToShowcase, id: '04' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'py-4 bg-black/40 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group relative z-[110] text-left">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:rotate-[15deg] transition-transform duration-500 shadow-xl shadow-white/5">
            <span className="text-black font-black text-xl">I</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tighter text-white">imron<span className="text-white/30 font-medium">rosadi</span></span>
        </button>
        
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.id} onClick={link.action} className="text-[10px] font-black text-white/40 hover:text-white transition-all uppercase tracking-[0.3em]">
                {link.label}
              </button>
            ))}
          </div>
          
          <a 
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] inline-block"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden relative z-[110]">
          <a 
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black text-[9px] font-black uppercase tracking-widest rounded-full"
          >
            HIRE ME
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white font-black text-[10px] tracking-widest uppercase px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Full-screen Mobile Menu */}
        {isMobileMenuOpen && (
           <div className="fixed inset-0 bg-black z-[105] flex flex-col items-center justify-center gap-8 md:hidden">
              {navLinks.map(link => (
                <button key={link.id} onClick={() => {link.action(); setIsMobileMenuOpen(false);}} className="text-4xl font-black italic uppercase text-white hover:text-blue-500 transition-colors">
                  {link.label}
                </button>
              ))}
              <a 
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-12 py-4 bg-white text-black text-xs font-black uppercase tracking-[0.3em] rounded-full"
              >
                HIRE ME
              </a>
           </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

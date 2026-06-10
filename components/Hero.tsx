
import React, { useState, useMemo } from 'react';
import { siteConfig } from '../data/siteConfig';
import { getYearsOfExperience } from '../utils/experience';

interface HeroProps {
  onConsultClick: () => void;
  onServicesClick: () => void;
}

const InteractiveGridPattern = () => {
  const [hoveredCell, setHoveredCell] = useState<{ r: number; c: number } | null>(null);
  
  // Grid dimensions
  const rows = 20;
  const cols = 40;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 grid pointer-events-auto"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
        onMouseLeave={() => setHoveredCell(null)}
      >
        {Array.from({ length: rows * cols }).map((_, i) => {
          const r = Math.floor(i / cols);
          const c = i % cols;
          const isHovered = hoveredCell?.r === r && hoveredCell?.c === c;
          
          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredCell({ r, c })}
              className={`relative border-[0.5px] border-white/10 transition-all duration-500 ease-out
                ${isHovered ? 'bg-blue-500/20 border-blue-500/30 z-10 scale-[1.02]' : 'bg-transparent'}
              `}
            >
              {/* Optional: Glow effect on hover */}
              {isHovered && (
                <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full"></div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Decorative Overlays to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none opacity-60"></div>
      
      {/* Dynamic Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ onConsultClick, onServicesClick }) => {
  const { hero } = siteConfig;
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
      {/* Interactive Grid Background */}
      <InteractiveGridPattern />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">{hero.tagline}</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-[0.95] text-white">
            {hero.title} <br />
            <span className="italic font-serif font-light text-gradient block mt-4">
              {hero.titleItalic}
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
            {hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onConsultClick} 
              className="group relative w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold overflow-hidden transition-all text-center"
            >
              <span className="relative z-10">{hero.ctaPrimary}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button 
              onClick={onServicesClick} 
              className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm text-center text-white"
            >
              {hero.ctaSecondary}
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-pointer" onClick={onServicesClick}>
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;

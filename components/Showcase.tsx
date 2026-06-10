
import React from 'react';
import { siteConfig } from '../data/siteConfig';

interface ShowcaseProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Showcase: React.FC<ShowcaseProps> = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} className="py-24 bg-[#050505] scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 text-blue-500 font-bold text-[14px] uppercase tracking-[0.4em] mb-4">
            <span className="w-8 h-[1px] bg-blue-500"></span>
            Our Portfolio
            <span className="w-8 h-[1px] bg-blue-500"></span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
            Selected <span className="text-white/20">Works.</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-xl leading-relaxed">
            High-impact digital transformations delivered with precision and speed.
          </p>
        </div>

        {/* Standard Grid - Enlarged by ~15% via container width increase */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {siteConfig.showcase.map((item) => (
              <div 
                key={item.id} 
                className="group cursor-pointer relative flex flex-col items-center text-center"
              >
                {/* Enlarged Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-[#080808] border border-white/5 transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase tracking-widest text-white/50 group-hover:text-blue-400 transition-colors">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Info Area */}
                <div className="mt-8 px-6">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-500 transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-lg text-white/30 leading-relaxed line-clamp-4 max-w-xs mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

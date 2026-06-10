
import React from 'react';
import { siteConfig } from '../data/siteConfig';

interface TimelineProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Timeline: React.FC<TimelineProps> = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} className="py-32 bg-[#050505] relative overflow-hidden scroll-mt-24">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-blue-600/5 blur-[150px] -z-10 rounded-full"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <div className="inline-flex items-center gap-3 text-blue-500 font-bold text-[12px] uppercase tracking-[0.4em] mb-6">
            <span className="w-10 h-[1px] bg-blue-500/30"></span>
            Professional Journey
            <span className="w-10 h-[1px] bg-blue-500/30"></span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
            Experience <span className="text-white/20">Timeline.</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

          <div className="space-y-20 md:space-y-32">
            {siteConfig.timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative opacity-0 reveal" style={{ animationDelay: `${index * 0.15}s` }}>
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-[#050505] border-2 border-blue-500 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                  
                  <div className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Date/Year Label - Refined Alignment */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${!isEven ? 'md:pl-16 md:text-left' : 'md:pr-16 md:text-right'}`}>
                       <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-blue-400 mb-6">
                        {item.year}
                      </span>
                    </div>

                    {/* Content Card Container */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${!isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2 uppercase">
                        {item.role}
                      </h3>
                      <p className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4">
                        {item.company}
                      </p>
                      <p className={`text-white/40 leading-relaxed font-medium mb-6 text-lg ${!isEven ? 'md:ml-auto' : ''}`}>
                        {item.description}
                      </p>
                      
                      <div className={`flex flex-wrap gap-2 ${!isEven ? 'md:justify-end' : 'justify-start'}`}>
                        {item.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[9px] font-bold text-white/30 uppercase tracking-tighter">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

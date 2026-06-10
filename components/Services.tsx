
import React from 'react';
import { siteConfig } from '../data/siteConfig';

const IconMap: Record<string, React.RefObject<React.ReactNode> | any> = {
  app: (
    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  ai: (
    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  data: (
    <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  automation: (
    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
};

const CardTags: Record<string, string[]> = {
  frontend: ['REACT', 'NEXT.JS', 'UI/UX'],
  fullstack: ['API', 'NODES', 'DBMS'],
  'ai-ml': ['RAG', 'LLM', 'MCP'],
  agile: ['SCRUM', 'JIRA', 'QUALITY']
};

interface ServicesProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Services: React.FC<ServicesProps> = ({ sectionRef }) => {
  return (
    <section ref={sectionRef} className="py-32 bg-[#050505] scroll-mt-24 relative overflow-hidden">
      {/* Background Ambient Beams */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] animate-beam opacity-20 pointer-events-none">
          <div className="w-full h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24 opacity-0 reveal" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center justify-center gap-3 text-blue-500 font-bold text-[12px] uppercase tracking-[0.4em] mb-8">
            <span className="w-10 h-[1px] bg-blue-500/30"></span>
            Technical Expertise
            <span className="w-10 h-[1px] bg-blue-500/30"></span>
          </div>
          <h2 className="text-6xl md:text-[6.5rem] font-black text-white tracking-tighter leading-[0.85] mb-10">
            9+ Years of <br />
            <span className="text-white/20">Experiences.</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {siteConfig.services.map((service, index) => {
            const isWide = index === 0 || index === 3;
            const delays = ['0.3s', '0.5s', '0.7s', '0.9s'];
            const tags = CardTags[service.id] || ['TECH', 'DEV'];
            
            return (
              <div 
                key={service.id} 
                className={`group relative p-10 md:p-12 rounded-[3.5rem] border border-white/5 bg-[#080808] hover:border-white/10 transition-all duration-700 flex flex-col justify-between overflow-hidden shadow-2xl opacity-0 reveal ${isWide ? 'md:col-span-2' : 'md:col-span-1'}`}
                style={{ animationDelay: delays[index] }}
              >
                {/* Orbital Background Animation */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-dashed border-white/10"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-white/10"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 animate-slow-orbit">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1/2 bg-gradient-to-t from-blue-500/50 to-transparent"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
                  </div>
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon Box */}
                  <div className="mb-14 w-16 h-16 rounded-3xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500">
                    {IconMap[service.iconName] || IconMap['app']}
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-3xl md:text-4xl font-black text-blue-500 tracking-tighter mb-5 leading-tight">
                      {service.title}
                    </h3>
                    <p className={`text-white/60 leading-relaxed font-medium mb-10 ${isWide ? 'max-w-md text-xl' : 'text-base'}`}>
                      {service.desc}
                    </p>

                    {/* Bottom Tags */}
                    <div className="flex flex-wrap gap-2">
                      {tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[9px] font-black tracking-widest text-white/40 group-hover:text-white/80 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-[4px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

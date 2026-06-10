
import React, { useRef } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import Showcase from './components/Showcase';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import { siteConfig } from './data/siteConfig';

const App: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  const aiConsultantRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen selection:bg-white selection:text-black bg-[#050505]">
        <Navbar 
          onScrollToServices={() => scrollToSection(servicesRef)}
          onScrollToTimeline={() => scrollToSection(timelineRef)}
          onScrollToConsultant={() => scrollToSection(aiConsultantRef)}
          onScrollToShowcase={() => scrollToSection(showcaseRef)}
        />
        
        <main>
          <div ref={heroRef}>
            <Hero 
              onConsultClick={() => scrollToSection(aiConsultantRef)} 
              onServicesClick={() => scrollToSection(servicesRef)} 
            />
          </div>
          
          <section className="py-20 md:py-24 bg-[#050505] border-b border-white/5">
            <div className="container mx-auto px-6">
              <p className="text-center text-[14px] md:text-[14px] uppercase tracking-[0.4em] text-white/20 mb-12 md:mb-16 font-bold">Technical Proficiency</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 lg:gap-24 opacity-30">
                {siteConfig.partners.map((logo, i) => (
                  <span 
                    key={i} 
                    className="text-xl md:text-3xl lg:text-4xl font-black tracking-tighter text-white hover:opacity-100 transition-opacity cursor-default select-none"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <Services sectionRef={servicesRef} />
          
          <Timeline sectionRef={timelineRef} />

          <AIConsultant sectionRef={aiConsultantRef} />
          
          <Showcase sectionRef={showcaseRef} />

          {/* Call to Action Final */}
          <section className="py-40 bg-[#050505]">
            <div className="container mx-auto px-6">
              <div className="relative group overflow-hidden rounded-[3rem] md:rounded-[4rem] bg-gradient-to-br from-white/10 to-transparent p-1 border border-white/10">
                <div className="bg-[#080808] rounded-[2.9rem] md:rounded-[3.9rem] p-12 md:p-32 text-center relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-5xl md:text-8xl font-black text-white mb-8 md:mb-10 tracking-tighter leading-[0.95]">
                      ELEVATING CODE.<br />
                      ENHANCING <br />
                      <span className="italic font-serif font-light text-gradient block mt-4">
                        EXPERIENCE.
                      </span>
                    </h2>
                    <p className="text-white/40 text-base md:text-xl mb-12 max-w-xl mx-auto leading-relaxed px-4 md:px-0">
                      I am currently available for new high-impact projects and technical leadership roles for {new Date().getFullYear() + 1}.
                    </p>
                    <a 
                      href={siteConfig.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-12 py-6 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl"
                    >
                      Consult with Me
                    </a>
                  </div>
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer 
          onScrollToServices={() => scrollToSection(servicesRef)}
          onScrollToTimeline={() => scrollToSection(timelineRef)}
          onScrollToConsultant={() => scrollToSection(aiConsultantRef)}
          onScrollToShowcase={() => scrollToSection(showcaseRef)}
        />
      </div>
    </LanguageProvider>
  );
};

export default App;

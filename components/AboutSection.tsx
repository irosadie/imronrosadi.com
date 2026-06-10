
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import { getYearsOfExperience } from '../utils/experience';

interface AboutSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const AboutSection: React.FC<AboutSectionProps> = ({ sectionRef }) => {
  const { t } = useLanguage();
  const { company } = siteConfig;

  return (
    <section ref={sectionRef} className="py-24 bg-[#050505] relative overflow-hidden scroll-mt-24">
      {/* Decorative Elements */}
      <div className="glow bg-blue-600/10 w-[600px] h-[600px] -top-20 -right-20 animate-float opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Core Content Grid - Now starts directly with Mission/Vision */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-24">
            <div className="glass-card p-10 md:p-14 rounded-[3rem]">
              <h3 className="text-xl font-black text-white mb-6 uppercase tracking-[0.3em]">{t('My Mission', 'Misi Saya')}</h3>
              <p className="text-white/40 leading-relaxed text-lg italic font-medium">
                "{company.mission}"
              </p>
            </div>
            <div className="glass-card p-10 md:p-14 rounded-[3rem]">
              <h3 className="text-xl font-black text-white mb-6 uppercase tracking-[0.3em]">{t('My Vision', 'Visi Saya')}</h3>
              <p className="text-white/40 leading-relaxed text-lg italic font-medium">
                "{company.vision}"
              </p>
            </div>
          </div>

          {/* Stats / Milestones */}
          <div className="p-12 md:p-20 rounded-[4rem] bg-white/[0.02] border border-white/5 flex flex-wrap gap-12 md:gap-24 justify-center items-center">
            <div className="text-center">
              <span className="block text-4xl md:text-6xl font-black text-white mb-2">{getYearsOfExperience()}+</span>
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Years Active</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-6xl font-black text-white mb-2">50+</span>
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Systems Built</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-6xl font-black text-white mb-2">100%</span>
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Clean Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';

const About: React.FC = () => {
  const { t } = useLanguage();
  const { company } = siteConfig;

  return (
    <div className="pt-40 pb-32 bg-[#050505] min-h-screen relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="glow bg-blue-600/10 w-[600px] h-[600px] -top-20 -right-20 animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
              {t('Our Story', 'Kisah Kami')}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.95] mb-12">
              Engineering <br />
              <span className="italic font-serif font-light text-gradient">the Future.</span>
            </h1>
            <p className="text-xl md:text-3xl text-white/50 leading-relaxed max-w-3xl">
              {t(
                'Founded with a mission to bridge Indonesian craftsmanship with global technological standards.',
                'Didirikan dengan misi untuk menghubungkan kerajinan Indonesia dengan standar teknologi global.'
              )}
            </p>
          </div>

          {/* Core Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 mb-32">
            <div className="glass-card p-10 rounded-[3rem]">
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest">{t('Our Mission', 'Misi Kami')}</h3>
              <p className="text-white/40 leading-relaxed text-lg italic">
                "{company.mission}"
              </p>
            </div>
            <div className="glass-card p-10 rounded-[3rem]">
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest">{t('Our Vision', 'Visi Kami')}</h3>
              <p className="text-white/40 leading-relaxed text-lg italic">
                "{company.vision}"
              </p>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="mb-32">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tight">
              {t('Precision Meets Passion.', 'Presisi Bertemu Passion.')}
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: 'Quality First', desc: 'Every line of code is reviewed and optimized for long-term scalability.' },
                { title: 'Innovation Driven', desc: 'We stay at the forefront of AI, IoT, and modern web architectures.' },
                { title: 'Human Centered', desc: 'Technology should serve people, not the other way around.' }
              ].map((item, i) => (
                <div key={i} className="border-l border-white/10 pl-8">
                  <h4 className="text-white font-bold text-xl mb-4">{t(item.title, item.title)}</h4>
                  <p className="text-white/40 leading-relaxed">{t(item.desc, item.desc)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats / Milestones */}
          <div className="p-12 md:p-20 rounded-[4rem] bg-white/[0.02] border border-white/5 flex flex-wrap gap-12 md:gap-24 justify-center items-center">
            <div className="text-center">
              <span className="block text-4xl md:text-6xl font-black text-white mb-2">4+</span>
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Years Active</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-6xl font-black text-white mb-2">50+</span>
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Projects Delivered</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-6xl font-black text-white mb-2">100%</span>
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Indonesian Heart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

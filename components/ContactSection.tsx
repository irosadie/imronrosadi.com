
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteConfig';

interface ContactSectionProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const ContactSection: React.FC<ContactSectionProps> = ({ sectionRef }) => {
  const { t } = useLanguage();
  const { contact } = siteConfig;

  return (
    <section ref={sectionRef} className="py-32 bg-[#050505] relative overflow-hidden scroll-mt-24">
      {/* Decorative Element */}
      <div className="glow bg-purple-600/10 w-[600px] h-[600px] bottom-0 -left-20 animate-float opacity-30" style={{ animationDelay: '-3s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-4xl mb-20">
            <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">
              {t('Get in Touch', 'Hubungi Kami')}
            </span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.95] mb-12">
              Let's build something <br />
              <span className="italic font-serif font-light text-gradient">extraordinary.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed">
              {t(
                'Ready to initiate a high-impact digital project? I am available for deep technical consultations and leadership roles.',
                'Siap untuk memulai proyek digital berdampak tinggi? Saya tersedia untuk konsultasi teknis yang mendalam dan peran kepemimpinan.'
              )}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* WhatsApp Card */}
            <a 
              href={contact.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-12 rounded-[3.5rem] group hover:bg-green-500/5 transition-all"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h4 className="text-white font-black text-xl mb-4 uppercase tracking-widest">WhatsApp</h4>
              <p className="text-white/40 mb-6">{t('Fastest response for quick discussions.', 'Respon tercepat untuk diskusi cepat.')}</p>
              <span className="text-white font-bold text-lg">{contact.phone}</span>
            </a>

            {/* Email Card */}
            <a 
              href={`mailto:${contact.email}`}
              className="glass-card p-12 rounded-[3.5rem] group hover:bg-blue-500/5 transition-all"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-white font-black text-xl mb-4 uppercase tracking-widest">Email</h4>
              <p className="text-white/40 mb-6">{t('Send us your detailed project brief.', 'Kirimkan brief proyek detail Anda.')}</p>
              <span className="text-white font-bold text-lg">{contact.email}</span>
            </a>

            {/* Address Card */}
            <div className="glass-card p-12 rounded-[3.5rem] group">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-white font-black text-xl mb-4 uppercase tracking-widest">Location</h4>
              <p className="text-white/40 mb-6">{t('Operating from Pekanbaru, Indonesia.', 'Berbasis di Pekanbaru, Indonesia.')}</p>
              <span className="text-white font-bold text-lg leading-tight">{contact.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

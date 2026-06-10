
import React, { useState, useEffect, useCallback } from 'react';
import { siteConfig } from '../data/siteConfig';

interface TestimonialsProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Testimonials: React.FC<TestimonialsProps> = ({ sectionRef }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { testimonials } = siteConfig;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, [testimonials.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section ref={sectionRef} className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Trusted by Leaders</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Voices <span className="text-white/40">of Success</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative group">
          <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col items-center justify-center text-center px-6 md:px-20 ${
                  i === activeIndex 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
              >
                <div className="mb-8 text-blue-500 opacity-20">
                  <svg className="w-16 h-16 mx-auto fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017V12V9C0.017 7.34315 1.36015 6 3.017 6H9.017C10.6739 6 12.017 7.34315 12.017 9V15C12.017 18.3137 9.33072 21 6.017 21H3.017Z" />
                  </svg>
                </div>
                
                <p className="text-xl md:text-2xl font-medium text-white/90 italic leading-relaxed mb-10">
                  "{t.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-blue-500">
                    {t.avatar}
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider">{t.name}</h4>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest">{t.role} — {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-8 mt-12">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-white/5 hover:border-white/20 hover:bg-white/5 text-white/40 hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-blue-500 w-8' : 'bg-white/10 hover:bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-white/5 hover:border-white/20 hover:bg-white/5 text-white/40 hover:text-white transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/5 blur-[120px] -z-10 rounded-full"></div>
    </section>
  );
};

export default Testimonials;

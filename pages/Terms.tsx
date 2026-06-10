
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Terms: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="pt-40 pb-32 bg-[#050505] min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="glow bg-purple-600/10 w-[600px] h-[600px] bottom-0 -right-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto prose-legal">
          <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
            {t('Guidelines', 'Panduan')}
          </span>
          <h1>{t('Terms & Conditions', 'Syarat & Ketentuan')}</h1>
          <p className="text-lg opacity-80 mb-12 italic">
            {t('Last updated:', 'Terakhir diperbarui:')} {new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <section>
            <h2>{t('1. Terms of Use', '1. Ketentuan Penggunaan')}</h2>
            <p>
              {t(
                'By accessing binarydev.co.id, you agree to be bound by these terms. If you disagree with any part of these terms, you are prohibited from using this site.',
                'Dengan mengakses binarydev.co.id, Anda setuju untuk terikat oleh ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, Anda dilarang menggunakan situs ini.'
              )}
            </p>
          </section>

          <section>
            <h2>{t('2. AI Consultation (ReVA)', '2. Layanan Konsultasi AI (ReVA)')}</h2>
            <p>
              {t('Our AI assistant is provided for initial technical insights. You understand that:', 'Asisten AI kami disediakan untuk memberikan gambaran teknis awal. Anda memahami bahwa:')}
            </p>
            <ul>
              <li>{t('AI output is generative and may contain inaccuracies.', 'Output AI adalah generatif dan mungkin mengandung ketidakakuratan.')}</li>
              <li>{t('AI discussions do not constitute a formal contract or final pricing.', 'Diskusi AI bukan merupakan kontrak resmi atau kesepakatan harga final.')}</li>
              <li>{t('BinaryDev is not liable for business decisions made solely on AI advice.', 'BinaryDev tidak bertanggung jawab atas keputusan bisnis yang dibuat hanya berdasarkan saran AI.')}</li>
            </ul>
          </section>

          <section>
            <h2>{t('3. Intellectual Property', '3. Hak Kekayaan Intelektual')}</h2>
            <p>
              {t(
                'All content, designs, logos, and code on this site are the intellectual property of PT BINER BANGUN INDONESIA unless otherwise stated. Unauthorized use is a violation of the laws of the Republic of Indonesia.',
                'Seluruh konten, desain, logo, dan kode di situs ini adalah milik intelektual PT BINER BANGUN INDONESIA kecuali dinyatakan lain. Penggunaan tanpa izin merupakan pelanggaran hukum Republik Indonesia.'
              )}
            </p>
          </section>

          <section>
            <h2>{t('4. Limitation of Liability', '4. Batasan Tanggung Jawab')}</h2>
            <p>
              {t(
                'In no event shall BinaryDev be liable for any indirect, consequential, or special damages arising out of your use of this website.',
                'Dalam hal apa pun BinaryDev tidak bertanggung jawab atas kerugian tidak langsung atau khusus yang timbul dari penggunaan situs web ini oleh Anda.'
              )}
            </p>
          </section>

          <section>
            <h2>{t('5. Governing Law', '5. Hukum yang Mengatur')}</h2>
            <p>
              {t(
                'These terms are governed by and construed in accordance with the laws of Indonesia.',
                'Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Negara Kesatuan Republik Indonesia.'
              )}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;

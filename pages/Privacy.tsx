
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Privacy: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="pt-40 pb-32 bg-[#050505] min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="glow bg-blue-600/10 w-[600px] h-[600px] -top-20 -left-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto prose-legal">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 border-b border-white/10 pb-12">
            <div>
              <span className="text-blue-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
                {t('Official Compliance Document', 'Dokumen Kepatuhan Resmi')}
              </span>
              <h1 className="mb-0">{t('Privacy Policy', 'Kebijakan Privasi')}</h1>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-60 m-0">Document Ref: BBI-PP-2024-V2.1</p>
              <p className="text-sm opacity-60 m-0">
                {t('Last updated:', 'Terakhir diperbarui:')} {new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
          
          <section>
            <h2>{t('1. Privacy Commitment & Entity', '1. Komitmen Privasi & Entitas')}</h2>
            <p>
              {t(
                'This Privacy Policy governs how PT Biner Bangun Indonesia (BinaryDev) collects, manages, and protects your personal data. As a premium digital solutions provider and Meta Business Partner integrator, we place data security as a fundamental priority in our system architecture.',
                'Kebijakan Privasi ini mengatur bagaimana PT Biner Bangun Indonesia (BinaryDev) mengumpulkan, mengelola, dan melindungi data pribadi Anda. Sebagai penyedia solusi digital premium dan integrator Meta Business Partner, kami menempatkan keamanan data sebagai prioritas fundamental dalam arsitektur sistem kami.'
              )}
            </p>
          </section>

          <section>
            <h2>{t('2. Information We Collect', '2. Informasi yang Kami Kumpulkan')}</h2>
            <p>{t('In our capacity as a Data Processor and API provider, we collect the following types of information:', 'Dalam kapasitas kami sebagai Pengolah Data dan penyedia API, kami mengumpulkan jenis informasi berikut:')}</p>
            <ul>
              <li><strong>{t('Communication Identity Data:', 'Data Identitas Komunikasi:')}</strong> {t('WhatsApp phone numbers, Meta public profile names, and technical metadata related to message delivery.', 'Nomor telepon WhatsApp, nama profil publik Meta, dan metadata teknis terkait pengiriman pesan.')}</li>
              <li><strong>{t('Communication Content:', 'Konten Komunikasi:')}</strong> {t('Interaction history with our AI assistant (ReVA) or through official WhatsApp channels integrated by us.', 'Riwayat interaksi dengan asisten AI kami (ReVA) atau melalui kanal WhatsApp resmi yang kami integrasikan.')}</li>
              <li><strong>{t('Infrastructure Data:', 'Data Infrastruktur:')}</strong> {t('IP addresses, server logs, and device IDs for high-level API security maintenance.', 'Alamat IP, log server, dan ID perangkat untuk pemeliharaan keamanan API tingkat tinggi.')}</li>
              <li><strong>{t('Business Information:', 'Informasi Bisnis:')}</strong> {t('Legal entity names, job titles, and digital architecture requirements provided through official consultation forms.', 'Nama entitas hukum, jabatan, dan kebutuhan arsitektur digital yang diberikan melalui formulir konsultasi resmi.')}</li>
            </ul>
          </section>

          <section>
            <h2>{t('3. WhatsApp Business API Processing (Meta Compliance)', '3. Pengolahan Data WhatsApp Business API (Kepatuhan Meta)')}</h2>
            <p>
              {t('BinaryDev acts as a technical intermediary with strict provisions:', 'BinaryDev bertindak sebagai perantara teknis dengan ketentuan ketat:')}
            </p>
            <ul>
              <li><strong>{t('End-to-End Encryption:', 'Enkripsi End-to-End:')}</strong> {t('We comply with Meta encryption protocols to ensure messages remain protected during transit.', 'Kami mematuhi protokol enkripsi Meta untuk memastikan pesan tetap terlindungi selama transit.')}</li>
              <li><strong>{t('Temporary Storage:', 'Penyimpanan Sementara:')}</strong> {t('Message data is stored only for the technical duration required for delivery assurance.', 'Data pesan hanya disimpan selama durasi teknis yang diperlukan untuk jaminan pengiriman.')}</li>
            </ul>
          </section>

          <section>
            <h2>{t('4. Legal Basis for Processing', '4. Dasar Hukum Pemrosesan')}</h2>
            <p>{t('We process your personal data based on the legal grounds of the Republic of Indonesia (PDP Law No. 27/2022):', 'Kami memproses data pribadi Anda berdasarkan landasan hukum Republik Indonesia (UU PDP No. 27/2022):')}</p>
            <ul>
              <li><strong>{t('Explicit Consent:', 'Persetujuan Eksplisit:')}</strong> {t('By initiating a conversation or clicking the consent button on our site.', 'Dengan memulai percakapan atau mengklik tombol persetujuan di situs kami.')}</li>
              <li><strong>{t('Contractual Necessity:', 'Pemenuhan Kontrak:')}</strong> {t('To provide the technical services you have requested.', 'Untuk memberikan layanan teknis yang Anda minta.')}</li>
            </ul>
          </section>

          <div className="mt-20 p-10 border border-white/10 rounded-[2.5rem] bg-white/[0.02]">
            <h3 className="text-white text-lg font-bold mb-4">{t('Official Compliance Officer', 'Petugas Kepatuhan Resmi')}</h3>
            <div className="grid md:grid-cols-2 gap-8 text-sm opacity-70">
              <div>
                <p className="font-bold text-white mb-1">PT Biner Bangun Indonesia</p>
                <p>Legal & Compliance Department</p>
                <p>Email: legal@binarydev.co.id</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">{t('Headquarters', 'Kantor Pusat')}</p>
                <p>Jl. Sukakarya, Pekanbaru, Riau 28293</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

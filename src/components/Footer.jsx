import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white flex flex-col font-serif mt-10">
      
      {/* Header "About Us" */}
      <div className="bg-[#8a9f6a] py-4 text-center border-y border-[#788c59] shadow-sm">
        <h2 className="text-2xl font-bold text-black uppercase tracking-widest">About Us</h2>
      </div>

      {/* Konten Utama Footer */}
      <div className="max-w-[1200px] mx-auto w-full px-4 py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
        
        {/* Kiri: Info Perusahaan */}
        <div className="text-center md:text-left flex-1 md:mt-4">
          <h3 className="text-3xl font-bold text-black mb-4">PT KickZone Maju</h3>
          <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0 text-sm mb-6">
            Platform penyedia layanan pemesanan *venue* olahraga terbaik dan termudah. Jadikan setiap pertandinganmu lebih berkesan bersama kami.
          </p>
          
          <div className="flex flex-col gap-3 text-gray-800 text-sm">
            {/* Alamat dengan Ikon */}
            <div className="flex items-start justify-center md:justify-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#8a9f6a] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Ruko WOW Sawojajar<br/>Kota Malang, Jawa Timur</span>
            </div>
            {/* Telepon dengan Ikon */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#8a9f6a] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>0821-3117-8182</span>
            </div>
          </div>
        </div>

        {/* Kanan: Lokasi & Map Terintegrasi */}
        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          <p className="text-lg font-bold text-black mb-4 font-sans">Temukan Kami</p>
          <div className="w-full max-w-md md:w-[400px] h-48 bg-gray-200 rounded-2xl overflow-hidden border border-gray-300 shadow-inner group">
            {/* Embed Peta Asli */}
            <iframe 
              title="Lokasi KickZone"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.2131920780287!2d112.6534241147775!3d-7.976824994254897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6285c5c1b44e3%3A0xf6c889ac7452dc3a!2sRuko%20Wow%20Sawojajar!5e0!3m2!1sid!2sid!4v1689745145890!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Ikon Sosial Media (Pakai SVG Ikon Asli) */}
      <div className="flex justify-center gap-6 pb-10">
        
        {/* WhatsApp */}
        <button className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-green-500 hover:border-green-500 transition-all shadow-sm transform hover:-translate-y-1">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>

        {/* Instagram */}
        <button className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all shadow-sm transform hover:-translate-y-1">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </button>

        {/* X (Twitter) */}
        <button className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-black hover:border-black transition-all shadow-sm transform hover:-translate-y-1">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </button>
        
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#8a9f6a] py-4 text-center border-t border-[#788c59]">
        <p className="text-black font-bold text-sm tracking-widest font-sans">
          © 2026 KICKZONE | ALL RIGHTS RESERVED
        </p>
      </div>

    </footer>
  );
};

export default Footer;
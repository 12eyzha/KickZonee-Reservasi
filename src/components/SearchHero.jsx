import React from 'react';

const SearchHero = () => {
  return (
    <div className="w-full">
      
      {/* 1. BAGIAN GAMBAR FULL WIDTH */}
      <div className="relative w-full h-[300px] md:h-[380px] lg:h-[480px] bg-[#677b4d] overflow-hidden">
        
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent z-10"></div>
        
        <img 
          src="/images/LapanganHero1.jpg" 
          alt="Banner Lapangan Futsal" 
          /* 
            REVISI: Mengubah object-[0%_35%] menjadi object-[0%_85%]
            Angka 85% akan menarik gambar ke atas sehingga bola di bagian bawah terlihat utuh.
            Jika bolanya masih kurang naik, jadikan 90% atau 100%.
          */
          className="w-full h-full object-cover object-[0%_85%] contrast-125 saturate-110 relative z-0" 
        />
      </div>

      {/* 2. BAGIAN FORM PENCARIAN */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-serif text-gray-800">
            Halo User, Ayo Berkeringat Hari ini !
          </h2>
          
          <div className="flex items-center gap-3">
            <input 
              type="text" 
              placeholder="Cari Nama Venue" 
              className="border border-gray-300 rounded-xl px-4 py-2 w-48 lg:w-56 focus:outline-none focus:ring-1 focus:ring-[#8a9f6a] text-sm font-serif shadow-sm"
            />
            <input 
              type="text" 
              placeholder="Lokasi" 
              className="border border-gray-300 rounded-xl px-4 py-2 w-32 lg:w-48 focus:outline-none focus:ring-1 focus:ring-[#8a9f6a] text-sm font-serif shadow-sm"
            />
            
            <button className="border border-gray-300 rounded-xl w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-sm">
            </button>
            
            <button className="bg-[#8a9f6a] text-black font-medium text-sm px-6 py-2 rounded-xl hover:bg-[#788c59] transition-colors font-serif shadow-sm">
              Cari Venue
            </button>
          </div>
        </div>

        <hr className="border-t-[3px] border-[#8a9f6a] mb-4" />

        <div className="flex justify-between items-center text-sm font-serif mb-10 text-gray-500">
          <p>Menampilkan <span className="font-bold text-black">112 Venue Tersedia</span></p>
          <p>Urutkan Bedasarkan : <span className="font-bold text-black">Popularitas</span></p>
        </div>
      </div>
      
    </div>
  );
};

export default SearchHero;
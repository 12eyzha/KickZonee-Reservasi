import React from 'react'; // <-- HANYA INI SAJA YANG DIBUTUHKAN DI ATAS

const VenueCard = ({ name, address, price, rating, image }) => {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
      
      {/* Area Gambar dengan Efek Zoom */}
      <div className="h-48 w-full overflow-hidden relative bg-gray-100 border-b border-gray-200">
        
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badge Status */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-bold text-green-700 shadow-sm flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          Tersedia
        </div>
      </div>

      {/* Area Detail Venue */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Kategori & Rating */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-bold text-[#677b4d] bg-[#677b4d]/10 px-2.5 py-1 rounded-full uppercase tracking-wider font-sans">
            Venue
          </span>
          
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-md border border-yellow-100">
            {/* Ikon Bintang */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-bold text-yellow-700 font-sans">{rating}</span>
          </div>
        </div>

        {/* Nama Venue */}
        <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {name}
        </h3>

        {/* Alamat dengan Ikon Pin */}
        <div className="flex items-start gap-1.5 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-xs text-gray-500 leading-relaxed font-serif line-clamp-2">
            {address}
          </p>
        </div>

        {/* Harga & Tombol Pesan */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-sans mb-0.5">Mulai dari</span>
            <div className="text-xs text-gray-600 font-serif">
              Rp <span className="font-bold text-lg text-black">{price}</span>/sesi
            </div>
          </div>
          
          <button className="bg-[#8a9f6a] text-black font-serif font-medium text-sm px-6 py-2 rounded-xl hover:bg-[#788c59] transition-all transform active:scale-95">
            Pesan
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default VenueCard;
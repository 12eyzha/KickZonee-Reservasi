import React from 'react';

const Pagination = () => {
  // Array angka dikurangi agar tidak kepanjangan dan aman di layar HP
  const pages = [2, 3, 4, 5];

  return (
    <div className="flex justify-center items-center gap-1.5 sm:gap-2 my-14 font-serif">
      
      {/* Tombol Previous (Panah Kiri) */}
      <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-[#8a9f6a] hover:border-[#8a9f6a] transition-all cursor-not-allowed opacity-50" disabled>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Halaman 1 (Aktif) */}
      <button className="w-10 h-10 rounded-xl bg-[#8a9f6a] text-black font-bold flex items-center justify-center shadow-sm">
        1
      </button>

      {/* Halaman 2 - 5 */}
      {pages.map((page) => (
        <button 
          key={page} 
          className="w-10 h-10 rounded-xl bg-white text-gray-600 font-medium flex items-center justify-center border border-gray-200 hover:bg-gray-50 hover:border-[#8a9f6a] hover:text-[#8a9f6a] transition-all"
        >
          {page}
        </button>
      ))}

      {/* Tanda Titik-Titik */}
      <span className="w-10 h-10 flex items-center justify-center text-gray-400 font-bold tracking-widest">
        ...
      </span>

      {/* Halaman Terakhir (20) */}
      <button className="w-10 h-10 rounded-xl bg-white text-gray-600 font-medium flex items-center justify-center border border-gray-200 hover:bg-gray-50 hover:border-[#8a9f6a] hover:text-[#8a9f6a] transition-all">
        20
      </button>

      {/* Tombol Next (Panah Kanan) */}
      <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-[#8a9f6a] hover:border-[#8a9f6a] transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>

    </div>
  );
};

export default Pagination;
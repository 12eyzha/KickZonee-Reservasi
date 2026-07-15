import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white py-6 px-8 flex justify-between items-center border-b border-transparent">
      
      {/* Area Logo (Kiri) */}
      <div className="cursor-pointer">
        {/* Tambahkan class 'mix-blend-multiply' untuk menghilangkan latar putih */}
        <img 
          src="/images/Logo.png" 
          alt="KickZone Logo" 
          className="h-16 w-auto object-contain mix-blend-multiply" 
        />
      </div>

      {/* Area Menu & Profil (Kanan) */}
      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-8 text-lg font-serif font-medium text-black">
          <li><a href="#" className="hover:text-gray-600 transition-colors">Dashboard</a></li>
          <li><a href="#" className="hover:text-gray-600 transition-colors">Events</a></li>
          <li><a href="#" className="hover:text-gray-600 transition-colors">Sparring Club</a></li>
          <li><a href="#" className="hover:text-gray-600 transition-colors">Contact Us</a></li>
        </ul>

        <div className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-11 h-11 text-black">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
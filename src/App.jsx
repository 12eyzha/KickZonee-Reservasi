import React from 'react';
import Navbar from './components/Navbar';
import SearchHero from './components/SearchHero';
import VenueCard from './components/VenueCard';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

// Import data dummy dari folder data
import { dummyVenues } from './data/Venues';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <SearchHero />
      
      <main className="flex-grow max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyVenues.map((venue, index) => (
            <VenueCard 
              key={index}
              name={venue.name}
              address={venue.address}
              price={venue.price}
              rating={venue.rating}
              image={venue.image}
            />
          ))}
        </div>
        <Pagination />
      </main>

      <Footer />
    </div>
  );
}

export default App;

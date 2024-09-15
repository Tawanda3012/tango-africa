import React from 'react';
import Hero from '../components/Hero';
import TrendingEvents from '../components/TrendingEvents';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Footerhome from '../components/Footerhome';



function Home() {
  return (
    <div className='overflow-x-auto bg-gray-100'>
      <main className='px-4 mt-10 lg:px-40 sm:px-20'>
        <div id="hero">
          <Hero />
        </div>
        <div id="trending-events" className="section-full">
          <TrendingEvents />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="faq" className="section-full">
          <FAQ />
        </div>
        <div id="footer">
          <Footerhome />
        </div>
      </main>
      
      <style jsx>{`
        .section-full {
          height: 100vh; /* Full viewport height on desktop */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .section-full {
            height: auto; /* Normal height on mobile */
            display: block; /* Stack elements normally */
          }
        }
      `}</style>
    </div>
  );
}

export default Home;

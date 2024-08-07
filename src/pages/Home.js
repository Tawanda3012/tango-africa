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
        <section id="hero">
          <Hero />
        </section>
        <section id="trending-events">
          <TrendingEvents />
        </section>
        <section id="features">
          <Features />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="footerhome">
          <Footerhome />
        </section>
      </main>
    </div>
  );
}

export default Home;
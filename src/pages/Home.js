import React from 'react'
import Hero from '../components/Hero'
import TrendingEvents from '../components/TrendingEvents'
import Features from '../components/Features'
import FAQ from '../components/FAQ'
import Footerhome from '../components/Footerhome'
// import ContactPage from '../components/ContactPage'



function Home() {
  return (
    <div className='overflow-x-auto bg-gray-100' >
      <main className='px-4 lg:px-40 sm:px-20'>
        <Hero/>
        <TrendingEvents/>
        <Features/>
        <FAQ/>
        <Footerhome/>
        {/* <ContactPage/> */}
        
      
      </main>
    </div>
  )
}

export default Home
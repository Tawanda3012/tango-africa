import React from 'react';
import { motion } from 'framer-motion'; 
import image1 from '../images/road.png'; 
import events from '../images/events.png';
// import trend from '../images/trend.png';
import search from '../images/search.png';
import mobi from '../images/matobo.png';
import scanner from '../images/scanner.png'

const Feature = ({ image, title, description, index }) => (
  <motion.div
    className={`feature animation flex flex-col md:flex-row items-center mb-8`} // Added margin-bottom for spacing
    initial={{ opacity: 0, y: 150 }} // Initial state for animation
    whileInView={{ opacity: 1, y: 0 }} // State when in view
    transition={{ duration: 0.5 }} // Transition duration
    viewport={{ once: false }} // Animation will trigger each time it comes into view
  >
    <div className={`feature__image w-full mb-4 md:mb-0 ${index % 2 === 0 ? 'md:w-1/3' : 'md:w-1/3 md:order-last'} group`}>
      <div className="relative w-full h-[300px] flex justify-center items-center">
        {/* Orange glow effect */}
        <div className="absolute inset-0 bg-[#dfe4b8] opacity-50 filter blur-3xl"></div>
        
        {/* Centered teal background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 bg-[#147481] opacity-75 group-hover:opacity-100 h-[190px] w-[190px] flex justify-center items-center rounded-3xl z-10"></div>
        
        {/* Image */}
        <img 
          src={image} 
          alt="" 
          className="absolute bottom-0 z-20 object-cover h-full transition-transform duration-300 transform -translate-x-1/2 left-1/2 group-hover:scale-105"
        />
      </div>
    </div>
    <div className="flex flex-col w-full text-center feature__content md:w-2/3 md:pl-8 md:text-left">
      <h3 className="mb-2 text-2xl font-bold feature__title">
        <span className="text-black">{title.split(' ')[0]} </span>
        {title.split(' ').slice(1, -2).join(' ')}
        <span className="text-[#147481]"> {title.split(' ').slice(-3).join(' ')}</span>
      </h3>
      <p className="text-black text-gray-600 feature__description">{description}</p>
    </div>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      image: mobi,
      title: "Your personal guide to thrilling events in your area",
      description: "Uncover events that match your passions and interests. From thrilling concerts to insightful talks. Let Tango be your compass to the vibrant world of entertainment and culture in your area"
    },
    {
      image:events,
      title: "Personalized experiences, just for you",
      description: "Handpick the events you want to see, from concerts and festivals to conferences and workshops. With the Tango mobile app, you get to create the perfect event experience tailored to your interests and preferences."
    },
    {
      image: search,
      title: "Seek and You Shall Find",
      description: "⁠Whether you're a music enthusiast, art lover, foodie, or adventure seeker, Tango will help you find the perfect event, be it just for you, your partner or the entire family. There’s always something to look forward to."
    },
    {
      image: scanner,
      title: "Your Phone, Your Ticket",
      description: "14. Transform your smartphone into an all-access pass for your favorite events. Effortless entry, paperless convenience. Experience the next generation of ticketing with the Tango mobile app."
    },
    {
      image: image1,
      title: "Notifications that keep you in the loop",
      description: "Receive timely updates and alerts so you're always informed about the latest events, changes, and opportunities. With notifications that keep you in the loop, you’ll never miss a beat."
    }
  ];

  return (
    <section className="py-16 text-black features section-features">
      <div className="container px-4 mx-auto lg:py features__list sm:py-20 lg:py-0">
        <div className="space-y-16">
          {features.map((feature, index) => (
            <Feature
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              index={index} // Pass index to the Feature component
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

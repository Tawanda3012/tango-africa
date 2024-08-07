import React from 'react';
import { motion } from 'framer-motion'; 
import image1 from '../images/removed.jpeg.png'; 
import events from '../images/events.png';
import trend from '../images/trend.png';
import search from '../images/search.png';
import mobi from '../images/mobi.png';

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
    <div className="flex flex-col items-start justify-center w-full text-left feature__content md:w-2/3 md:pl-8">
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
      title: "Don't miss out on any events that others also want to attend",
      description: "Stay updated on the events that others want to attend as well. We will show you all the hottest events that are coming up."
    },
    {
      image: trend,
      title: "Find out more about the event",
      description: "You have the luxury of checking whether this event is really for you or not. After that, it is anyone's guess."
    },
    {
      image: search,
      title: "Keep tickets with ease everywhere and anywhere",
      description: "Have as many tickets as you want, for however many events you want with you always. Digital tickets make it easy to go around. Bonus, they don't get misplaced."
    },
    {
      image: events,
      title: "Categorisation that makes it easy to find events",
      description: "Choose an event from the wide variety of categories. Don't waste time, just look through your event type."
    },
    {
      image: image1,
      title: "You are the master of your interests",
      description: "Tailor your event to you. Tell Tango what you're into and let us do all the work."
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

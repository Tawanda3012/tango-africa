import React from 'react';

import bhelo from '../images/p1-0iz3QxUF.jpg';
import nyamazi from '../images/p2-DAWBDPqz.jpg';
import rotary from '../images/p3-CVNskv2X.jpg';
import smea from '../images/p4-CtARK8Dl.jpg';

const Partners = () => {
  const partners = [
    { src: bhelo, alt: "Bhello Logo" },
    { src: nyamazi, alt: "Nyamazi Greens Logo" },
    { src: rotary, alt: "Rotary Logo" },
    { src: smea, alt: "SMEA Logo" },
  ];

  return (
    <section className="py-12 my-20 ">
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-3xl font-bold text-center animate-fade-in sm:text-left">
          Join Our Growing List of Partners
        </h2>
        <div className="partners__description"></div>
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap sm:justify-around animate-fade-in">
          {partners.map((partner, index) => (
            <img 
              key={index}
              src={partner.src}
              alt={partner.alt} 
              className="object-contain transition-transform duration-300 hover:scale-110"
              style={{
                height: '150px',
                maxWidth: '100%',
                display: 'block',
                verticalAlign: 'middle'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
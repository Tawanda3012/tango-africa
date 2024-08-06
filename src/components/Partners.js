// import React from 'react';
// import bhelo from '../images/p1-0iz3QxUF.jpg';
// import nyamazi from '../images/p2-DAWBDPqz.jpg';
// import rotary from '../images/p3-CVNskv2X.jpg';
// import smea from '../images/p4-CtARK8Dl.jpg';

// const Partners = () => {
//   const partners = [
//     { src: bhelo, alt: "Bhello Logo" },
//     { src: nyamazi, alt: "Nyamazi Greens Logo" },
//     { src: rotary, alt: "Rotary Logo" },
//     { src: smea, alt: "SMEA Logo" },
//   ];

//   return (
//     <section className="px-4 py-12 ">
//       <h2 className="mb-20 text-3xl font-bold text-center sm:text-left">
//         Join Our Growing List of Partners
//       </h2>
//       <div className="flex flex-wrap items-start justify-center gap-10 items-left ">
//         {partners.map((partner, index) => (
//           <img
//             key={index}
//             src={partner.src}
//             alt={partner.alt}
//             className="object-contain transition-transform duration-300 aspect-w-1 aspect-h-1 w-60 hover:scale-110"
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Partners;

import React from 'react';

import bhelo from '../images/p1-0iz3QxUF.jpg';
import nyamazi from '../images/p2-DAWBDPqz.jpg';
import rotary from '../images/p3-CVNskv2X.jpg';
import smea from '../images/p4-CtARK8Dl.jpg';

const Partners = () => {
  return (
    <section className="py-12 my-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-10 text-3xl font-bold text-center animate-fade-in sm:text-left">
          Join Our Growing List of Partners
        </h2>
        <div className="partners__description"></div>
        <div className="flex flex-wrap gap-40 animate-fade-in">
          <img 
            src={bhelo}
            alt="Bhello Logo" 
            className="object-contain w-24 h-24 transition-transform duration-300 md:w-32 md:h-32 hover:scale-110"
          />
          <img 
            src={nyamazi} 
            alt="Nyamazi Greens Logo" 
            className="object-contain w-24 h-24 transition-transform duration-300 md:w-32 md:h-32 hover:scale-110"
          />
          <img 
            src={rotary}
            alt="Rotary Logo" 
            className="object-contain w-24 h-24 transition-transform duration-300 md:w-32 md:h-32 hover:scale-110"
          />
          <img 
            src={smea}
            alt="SMEA Logo" 
            className="object-contain w-24 h-24 transition-transform duration-300 md:w-32 md:h-32 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
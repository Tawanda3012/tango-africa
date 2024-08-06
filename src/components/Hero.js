import React from "react";
import img from "../images/removed.jpeg.png";

const Hero = () => {
  return (
    <div className="my-20 lg:h-screen sm:h-auto ">
     <div class="flex flex-col sm:flex-row items-center justify-center w-full  pt-9 ]">
        <div className="w-full p-4 sm:w-1/2">
        <h1 className="text-4xl sm:text-center lg:text-5xl lg:text-left md:text-left p-2.5 mt-0 text-center">
            Discover events near you right now
          </h1>
          <div className="h-[30px]"></div>
          <div class="flex   flex-col items-center justify-center md:flex-row md:items-start md:justify-start">
            <figure className="mt-0 p-2.5 text-left">
              <a href="/" target="_blank" rel="noopener">
                <img
                  src="https://assets.seedprod.com/5259-a6LIQDbFhHmX72zG.png"
                  alt="App Store"
                  className="border-2 border-transparent rounded-full hover:border-gray-500"
                />
              </a>
            </figure>
            <figure className="mt-0 p-2.5 text-left">
              <a href="/" target="_blank" rel="noopener">
                <img
                  src="https://assets.seedprod.com/5259-OdGFBVlt6SpRu8an.png"
                  alt="Google Play"
                  className="border-2 border-transparent rounded-full hover:border-gray-500 "
                />
              </a>
            </figure>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full overflow-hidden sm:w-1/2">
            <figure className="mt-0 p-2.5 text-center h-{433px} ">
              <img
                src={img}
                alt="Event App Screenshot"
                className="object-cover max-w-full max-h-full"
              />
            </figure>
          </div>
          <div className="w-full overflow-hidden sm:w-1/2">
            <figure className="mt-0 p-2.5 text-center h-{433px} ">
              <img
                src={img}
                alt="Event App Screenshot"
                className="object-cover max-w-full max-h-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

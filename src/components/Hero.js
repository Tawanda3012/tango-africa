import React from "react";
import img from "../images/mobi.png";

const Hero = () => {
  return (
    <div className="flex flex-col h-screen">

      <div className="flex items-center justify-center flex-grow">
        <div className="flex flex-col items-center justify-between w-full px-4 mx-auto max-w-7xl lg:flex-row">
          <div className="w-full mb-8 lg:w-1/2 lg:mb-0">
            <h1 className="mt-20 mb-8 text-4xl font-bold text-center lg:text-8xl lg:text-left sm:mt-0">
            Find More Of The Events{" "}
              <span className="text-[#147481]">You Love</span>
            </h1>
            <p className="mb-3 text-2xl"> Your gatewayto amazing local events </p>
            
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row lg:justify-start sm:space-y-0 sm:space-x-4">
              <a href="https://play.google.com/store/apps/details?id=zw.co.tango.tango" target="_blank" rel="noopener">
                <img
                  src="https://assets.seedprod.com/5259-a6LIQDbFhHmX72zG.png"
                  alt="Play Store"
                  className="h-12 border-2 border-transparent hover:border-gray-500"
                />
              </a>
              <a href="https://apps.apple.com/app/tango-africa/id6499582097" target="_blank" rel="noopener">
                <img
                  src="https://assets.seedprod.com/5259-OdGFBVlt6SpRu8an.png"
                  alt="App store"
                  className="h-12 border-2 border-transparent hover:border-gray-500"
                />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <img
              src={img}
              alt="Event App Screenshot"
              className="object-contain w-full h-auto max-w-md max-h-[70vh]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
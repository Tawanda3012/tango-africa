import React from "react";
import img from "../images/buz1.jpeg";

function Orgpages() {
  return (
    <div className="px-4 py-8 bg-gray-100 orgpages sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="w-full mb-8 lg:w-1/2 lg:mb-0">
            <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Elevate Your event Management with
              <span className="block text-[#147481]">Tango Manager</span>
            </h1>
            <p className="mb-6 text-lg text-gray-600">
              Streamline your event management process and create unforgettable experiences.
            </p>
            <div className="button__app">
              <a
                href="https://app.tango.co.zw/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out bg-[#147481] rounded-lg hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
          </div>
          
          <div className="w-full mt-8 lg:w-1/2 lg:mt-0">
            <img
              src={img}
              alt="Tango Manager Interface"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orgpages;
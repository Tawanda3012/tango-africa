import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Footerhome = () => {
  return (
    <footer className="py-8 mt-10">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-col items-start justify-between md:flex-row-reverse">
          {/* Left Section */}
          <div className="flex flex-col items-end justify-center w-full p-4 mb-6 md:w-1/2">
            <button className="px-4 py-2 font-semibold text-white transition duration-200 border-2 border-transparent rounded-full hover:border-gray-500 bg-[#147481]">
              Get Tango
            </button>
            {/* <p className="mb-10 text-center">
      Don't miss a beat! Optimize your event management with our essential scanner app.
    </p> */}

    <h3 className="text-3xl "  >Get the App</h3>
            <div className="flex flex-col items-end my-10">
            <figure className="my-2 text-left">
  <a href="/" target="_blank" rel="noopener">
    <img
      src="https://assets.seedprod.com/5259-a6LIQDbFhHmX72zG.png"
      alt="App Store"
      className="w-32 h-auto border-2 border-transparent rounded-full hover:border-gray-500"
    />
  </a>
</figure>

<figure className="text-left">
  <a href="/" target="_blank" rel="noopener">
    <img
      src="https://assets.seedprod.com/5259-a6LIQDbFhHmX72zG.png"
      alt="App Store"
      className="w-32 h-auto border-2 border-transparent rounded-full hover:border-gray-500"
    />
  </a>
</figure>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 gap-8 p-4 mb-8 md:w-1/2 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faPhone}
                className="mt-1 mr-3 text-[#147481]"
              />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Phone</h3>
                <p>+263 773 018 727</p>
              </div>
            </div>
            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mt-1 mr-3 text-[#147481]"
              />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Email</h3>
                <p>support@tango.co.zw</p>
              </div>
            </div>
            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mt-1 mr-3 text-[#147481]"
              />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Address</h3>
                <p>
                  Fourth Floor, 3 Anchor House
                  <br />
                  Jason Moyo Avenue
                  <br />
                  Harare, Zimbabwe
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FontAwesomeIcon
                icon={faClock}
                className="mt-1 mr-3 text-[#147481]"
              />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Business Hours</h3>
                <p>
                  0900 - 1700
                  <br />
                  Monday - Saturday
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="items-center justify-between sm:flex">
            <div className="mb-4 sm:mb-0">
              <p className="text-sm text-center text-gray-600 ">
                © Tango All Rights Reserved
              </p>
            </div>
            <div className="mb-4 sm:mb-0">
              <img
                src="https://assets.seedprod.com/5259-VBYtGEaoyJRmqnLj.png"
                alt="Logo"
                className="h-6 mx-auto"
              />
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-xl text-blue-600 hover:text-blue-700"
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-xl text-blue-400 hover:text-blue-500"
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-xl text-pink-600 hover:text-pink-700"
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-xl text-red-600 hover:text-red-700"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerhome;

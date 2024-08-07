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
          <div className="flex flex-col items-center justify-center w-full p-4 mb-6 md:w-[57%]">
            <h3 className="text-3xl sm:text-3xl">Download the App</h3>
            <div className="flex items-center justify-center my-10 space-x-6">
              <figure className="text-left">
                <a href="https://play.google.com/store/apps/details?id=zw.co.tango.tango" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://assets.seedprod.com/5259-a6LIQDbFhHmX72zG.png"
                    alt="Play Store"
                    className="h-auto border-2 border-transparent w-28 hover:border-gray-500"
                  />
                </a>
              </figure>
              <figure className="text-left">
                <a href="https://apps.apple.com/app/tango-africa/id6499582097" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://assets.seedprod.com/5259-OdGFBVlt6SpRu8an.png"
                    alt="App Store"
                    className="h-auto border-2 border-transparent w-28 hover:border-gray-500"
                  />
                </a>
              </figure>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 gap-8 p-4 mb-8 md:w-1/2 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex items-start">
              <FontAwesomeIcon icon={faPhone} className="mt-1 mr-3 text-[#147481]" />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Phone</h3>
                <p>+263 773 018 727</p>
              </div>
            </div>
            <div className="flex items-start">
              <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-3 text-[#147481]" />
              <div>
                <h3 className="mb-1 text-lg font-semibold">Email</h3>
                <p>support@tango.co.zw</p>
              </div>
            </div>
            <div className="flex items-start">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 mr-3 text-[#147481]" />
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
              <FontAwesomeIcon icon={faClock} className="mt-1 mr-3 text-[#147481]" />
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
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <div className="order-2 mb-4 sm:mb-0 sm:order-1">
              <p className="text-sm text-center text-gray-600">© Tango All Rights Reserved</p>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
            <a href="docs.google.com/document/d/e/2PACX-1vTJGKgeHaKgtliZDbiQ3sSB0P4fllcmZYzZJhBmhTj5FI-eZiKtkPebu2gWp7BeNLPxAg6BmvqOX1q-/pub" className="text-sm text-gray-600 hover:text-[#147481] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="docs.google.com/document/d/e/2PACX-1vTJGKgeHaKgtliZDbiQ3sSB0P4fllcmZYzZJhBmhTj5FI-eZiKtkPebu2gWp7BeNLPxAg6BmvqOX1q-/pub" className="text-sm text-gray-600 hover:text-[#147481] transition-colors duration-300">
              Terms & Conditions
            </a>
          </div>
            <div className="flex justify-center order-3 mb-4 sm:mb-0">
              <a href="https://www.facebook.com/people/Tango-Africa/61561703523510/" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FontAwesomeIcon icon={faFacebookF} className="text-xl text-blue-600 hover:text-blue-700" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FontAwesomeIcon icon={faTwitter} className="text-xl text-blue-400 hover:text-blue-500" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FontAwesomeIcon icon={faInstagram} className="text-xl text-pink-600 hover:text-pink-700" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FontAwesomeIcon icon={faYoutube} className="text-xl text-red-600 hover:text-red-700" />
              </a>
            </div>
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footerhome;
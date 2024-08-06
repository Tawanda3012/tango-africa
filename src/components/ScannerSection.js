import React from 'react';

const ScannerSection = () => {
  return (
    <section className="scanner">
      <div className="title animation active">Ticket scanners</div>
      <div className="scanner__content animation active">
        <div className="text-left scanner__description">
          Don't miss a beat! Optimize your event management with our essential scanner app.
        </div>
        <div className="mobileAppBtns mt-[50px]">
        <figure className="mt-0 p-2.5 text-left">
              <a href="/" target="_blank" rel="noopener">
                <img
                  src="https://assets.seedprod.com/5259-a6LIQDbFhHmX72zG.png"
                  alt="App Store"
                  className="border-2 border-transparent rounded-full hover:border-gray-500"
                />
              </a>
            </figure>
        </div>
      </div>
    </section>
  );
};

export default ScannerSection;
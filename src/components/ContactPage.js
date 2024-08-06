import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:h-screen lg:py-80  sm:h-{300px} sm:py-40 ">
      <h1 className="mb-6 text-5xl text-black">Get in Touch</h1>
      <p className="mb-12 text-center text-balck">
        We would love to hear from you! Please fill out the form below
      </p>
      <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 font-bold text-white transition duration-200 bg-[#147481] rounded hover:bg-purple-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;

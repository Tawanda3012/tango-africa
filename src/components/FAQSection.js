import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track which FAQ is open

  const faqs = [
    // ...
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the FAQ open/close
  };

  return (
    <section className="py-10 faqs sm:px-5 section-faqs">
      <div className="mb-4 text-2xl font-bold text-center title animation active">
        Frequently Asked Questions
      </div>
      <div className="px-4 mb-8 text-center description animation active sm:px-10 lg:px-0">
        Find the answers to the most common questions about our product. Feel free to email us if you still couldn't find what you were looking for.
      </div>

      <div className="grid w-full gap-3 p-4 sm:px-20">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b active sm:mb-0">
            <h3 className="flex">
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between flex-1 py-4 font-medium text-left transition-all hover:underline"
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>
            <motion.div
              initial={{ height: 0, opacity: 0 }} // Initial state for animation
              animate={openIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} // Animate based on open state
              transition={{ duration: 0.3 }} // Transition duration
              className="overflow-hidden text-sm"
            >
              <div className="py-2">{faq.answer}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track which FAQ is open

  const faqs = [
    {
      question: "What is Tango?",
      answer: "Tango is a platform that allows you to manage and attend events seamlessly."
    },
    {
      question: "How do I buy a ticket?",
      answer: "You can buy tickets directly through our website or mobile app."
    },
    {
      question: "Can I get or use a physical ticket to enter into Events?",
      answer: "Yes, you can choose to receive a physical ticket or a digital ticket."
    },
    {
      question: "Can I return my ticket for a refund?",
      answer: "Yes, tickets can be returned for a refund under certain conditions."
    },
    {
      question: "Can I transfer my ticket to another user?",
      answer: "Yes, tickets can be transferred to another user before the event starts."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the FAQ open/close
  };

  return (
    <section className="my-20 faq sm:px-5">
      <div className="mb-4 text-2xl font-bold text-center title animation active">
        Frequently Asked Questions
      </div>
      <div className="mb-8 text-center description animation active">
        Find the answers to the most common questions about our product. Feel free to email us if you still couldn't find what you were looking for.
      </div>
      <div className="grid w-full gap-3">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b active">
            <h3 className="flex text-4l sm:text-[13px] lg:text-3l ">
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

export default FAQ;
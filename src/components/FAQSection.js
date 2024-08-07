import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track which FAQ is open

  const faqs = [
    {
      question: "What is Tango?",
      answer: "Tango is a platform that allows you to manage and attend events seamlessly."
    },
    {
      question: "How does Tango work",
      answer: "You can buy tickets directly through our website or mobile app."
    },
    {
      question: "How do I get started selling tickets?",
      answer: "Start by creating an organization account. Once that's done, you can create your events and start selling tickets."
    },
    {
      question: "What types of events can I create on Tango?",
      answer: "Tango supports a wide range of events, including concerts, festivals, conferences, workshops, classes, and more.."
    },
    {
      question: "How much does it cost?",
      answer: "Tango charges a flat 5% service fee on each ticket sold, unless the event is free, in which case no fee applies."
    },
    {
        question: "Can I pass fees on to attendees??",
        answer: "Yes, you have the option to pass fees on to attendees by adding them to the ticket price. Alternatively, you can choose to split the service fee with your attendees."
      },
    
      {
        question: "How do I scan tickets for my event?",
        answer: "Payments are automatically processed and sent to your local bank account within 48-72 hours."
      },
      {
        question: "Can I scan tickets offline?",
        answer: "Yes, it is possible to scan tickets offline. However, please note that this functionality is limited to a single scanner device. For multiple scanner devices, an active internet connection is required to ensure seamless operation."
      },
      {
        question: "Can I scan tickets offline??",
        answer: "Yes, it is possible to scan tickets offline. However, please note that this functionality is limited to a single scanner device. For multiple scanner devices, an active internet connection is required to ensure seamless operation."
      },
      {
        question: "Can I issue refunds for my event?",
        answer: "Yes, deleting an upcoming event will automatically refund all ticket holders."
      },
      {
        question: "Can I invite guests to my event through Tango Manager?",
        answer: "Yes, you can invite guests to your event. Simply create your event, add your guests to your contacts and invite them via Broadcasts."
      },
      {
        question: "What should I do if I encounter any technical issues or bugs?",
        answer: "For technical issues, bug reports, or feature requests, please use the 'Feedback' feature in the Tango Manager app."
      },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the FAQ open/close
  };

  return (
    <section className="py-10 faqs sm:px-5 section-faqs">
      <div className="mb-4 text-2xl font-bold text-center title animation active">
        Frequently Asked Questions
      </div>
      <div className="mb-8 text-center description animation active">
        Find the answers to the most common questions about our product. Feel free to email us if you still couldn't find what you were looking for.
      </div>
      <div className="grid w-full gap-3 p-4 sm:px-20">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b active">
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
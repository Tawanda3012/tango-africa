import React from 'react';

const ServiceCard = ({ icon, title, content }) => (
  <div className="p-4 bg-white rounded-lg shadow-md">
    <div className="flex items-center mb-2 ">
      {icon}
      <p className="ml-2 text-lg font-semibold">{title}</p>
    </div>
    <div className="text-sm">{content}</div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <svg className="w-6 h-6 "  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg>,
      title: "Analytics",
      content: "Gain deep insights into your event performance with our advanced analytics. Track attendee behavior, measure engagement, and optimize your events for maximum impact."
    },
    {
      icon: <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z"></path></svg>,
      title: "Announcements",
      content: "Make important announcements and updates instantly. Reach attendees directly with timely notifications, ensuring no one misses out on the action."
    },
    {
      icon: (
        <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1z"/>
          <path d="M8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
      ),
      title: "Contact Book",
      content: "Manage your contacts effortlessly. Store essential information and reach out to attendees with ease."
    },
    
  {
    icon: (
      <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1z"/>
        <path d="M11 8a1 1 0 0 0-1-1H6a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1z"/>
      </svg>
    ),
    title: "Payments",
    content: "Securely process payments with ease. Simplify transactions and ensure a smooth payment experience for your attendees."
  },
  {
    icon: (
      <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1z"/>
        <path d="M5.5 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-5z"/>
      </svg>
    ),
    title: "Ticket Management",
    content: "Easily manage tickets for your events. Track sales, check-ins, and ensure a seamless entry experience for attendees."
  },
  {
    icon: (
      <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1z"/>
        <path d="M10 4a1 1 0 0 0-1 1v1H7V5a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z"/>
      </svg>
    ),
    title: "Ticket Scanner Management",
    content: "Streamline your entry process with ticket scanning. Quickly verify attendees and enhance event security."
  }
  ];

  return (
    <section className="py-12 mt-20 ">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold ">What we offer</h2>
        <p className="mb-20 ">
          Organize, and promote events effortlessly with the Tango Manager app. Whether you're a professional event organizer or someone planning a small gathering, our user-friendly app provides all the tools you need to create, list, and promote your events with ease. From conferences and concerts to workshops and parties, our app empowers event organizers to reach a wider audience, manage registrations, and enhance attendee engagement. Seamlessly navigate through event schedules, access detailed analytics, and stay updated with real-time notifications. Creating memorable experiences has never been easier.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
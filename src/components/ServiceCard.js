import React from "react";

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
      icon: (
        <svg
          className="w-12 h-12 p-2.5  bg-[#CDE7ED] rounded-[10px]"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path>
        </svg>
      ),
      title: "Analytics",
      content:
        "Gain deep insights into your event performance with our advanced analytics. Track everything from ticket sales and revenue to event views and attendee demographics. Stay on top of the action as it happens.",
    },
    {
      icon: (
        <svg
           className="w-12 h-12 p-2.5  bg-[#CDE7ED] rounded-[10px]"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z"></path>
        </svg>
      ),
      title: "Announcements",
      content:
        "Promoting your event is a breeze with Tango Broadcasts. Effortlessly send invites to your contacts, followers, or attendees from previous events. Reach your audience quickly and efficiently, making event promotion simpler than ever.",
    },
    {
      icon: (
        <svg
           className="w-12 h-12 p-2.5  bg-[#CDE7ED] rounded-[10px]"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3z" />
          <path d="M4 3h8v1H4V3zm0 2h8v1H4V5zm0 2h8v1H4V7zm0 2h8v1H4V9zm0 2h8v1H4v-1z" />


        </svg>
      ),
      title: "Contact Book",
      content:
        "Effortlessly manage and organize your contacts for quick, efficient invitations. Whether you're hosting a small gathering or a large event, promoting your event has never been easier.",
    },

    {
      icon: (
        <svg
           className="w-12 h-12 p-2.5  bg-[#CDE7ED] rounded-[10px]"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3z" />
  <path d="M4 5h8v1H4V5zm0 2h8v1H4V7zm0 2h8v1H4V9zm0 2h5v1H4v-1z" />
        </svg>
      ),
      title: "Payments",
      content:
        "Your ticket earnings are automatically deposited into your bank account within 48 hours of your event's conclusion, ensuring quick and secure access to your funds.",
    },
    {
      icon: (
        <svg
           className="w-12 h-12 p-2.5  bg-[#CDE7ED] rounded-[10px]"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
         <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9z"></path>
        </svg>
      ),
      title: "Ticket Management",
      content:
        "Tango supports a variety of ticket types, from early bird, donations, members-only tickets, and multi-pass tickets. Whether you are having a special event, organizing a fundraiser, or hosting a series of workshops, Tango has flexible ticketing solutions to meet your needs. Choose the type that best fits your event's goals and audience, and let Tango handle the rest.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 p-2.5  bg-[#CDE7ED] rounded-[10px]"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
   <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2zm4-8h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-8h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" fill="currentColor"/>
        </svg>
      ),
      title: "Ticket Scanner Management",
      content:
        "Streamline check-ins with our mobile-friendly ticket scanner app. Enjoy faster processing, shorter wait times, and an improved experience for your attendees",
    },
  ];

  return (
    <section className="py-12 mt-20 ">
      <div className="container px-4 mx-auto">
        <h2 className="mb-4 text-3xl font-bold ">What we offer</h2>
        <p className="mb-20 ">
        Organize and promote events effortlessly with the Tango Manager app. Whether you're a professional event organizer or just planning a small gathering, our user-friendly web app offers everything you need to create, list, and promote your events with ease. From conferences and concerts to workshops and parties, Tango Manager helps you reach a broader audience, manage registrations, and boost attendee engagement. Creating memorable experiences has never been easier.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

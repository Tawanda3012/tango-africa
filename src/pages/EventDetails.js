import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import Footerhome from "../components/Footerhome";

const supabaseUrl = "https://hgrzzvftvlsdkmodujim.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhncnp6dmZ0dmxzZGttb2R1amltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNzgwODAsImV4cCI6MjAwMzk1NDA4MH0.L5mf5tgrwbQlpyjCVC9JZVagJTYG4IWKZTvZadXor0I";
const supabase = createClient(supabaseUrl, supabaseKey);

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [organization, setOrganization] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  const fetchEventDetails = async () => {
    try {
      setLoading(true);
      const { data: eventData, error: eventError } = await supabase
        .from("events")
        .select("*, organizations(name)")
        .eq("id", id)
        .single();

      if (eventError) throw eventError;

      const { data: ticketsData, error: ticketsError } = await supabase
        .from("tickets")
        .select("name, price")
        .eq("event_id", id);

      if (ticketsError) throw ticketsError;

      setEvent(eventData);
      setTickets(ticketsData);
      setOrganization(eventData.organizations);
    } catch (error) {
      console.error("Error fetching event details:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('event-footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
    </div>
  );
  
  if (error) return <div className="flex items-center justify-center min-h-screen text-red-500">Error: {error}</div>;
  if (!event) return <div className="flex items-center justify-center min-h-screen">No event found</div>;

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-center mt-20 text-center bg-white border-b border-gray-200">
        <div className="container px-4 py-4 mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">{event.name}</h1>
        </div>
      </header>

      <main className="container px-4 py-8 mx-auto">
        <div className="w-full max-w-[1200px] mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-lg">
          <div className="relative w-full pb-[33.33%] rounded-lg shadow-md overflow-hidden bg-white">
            <img
              src={event.poster_url || "/default-image-url.jpg"}
              alt={event.name}
              className="absolute top-0 left-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-blue-900 via-teal-800 to-teal-600"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-2/3">
            <div className="p-6 bg-gray-100 rounded-lg">
              <h2 className="mb-4 text-xl font-semibold">About this event</h2>
              <p className="mb-2"><strong>Date and time</strong></p>
              <p className="mb-4 text-sm text-gray-600">
                {new Date(event.start_time).toLocaleDateString()} at {new Date(event.start_time).toLocaleTimeString()}
              </p>
              <p className="mb-2"><strong>Location</strong></p>
              <p className="mb-4 text-sm text-gray-600">{event.venue}, {event.address}</p>
              <h3 className="mb-2 font-semibold">Description</h3>
              <p className="text-sm text-gray-700">{event.description}</p>
            </div>

            <div className="p-6 mt-8 bg-gray-100 rounded-lg">
              <h2 className="mb-4 text-xl font-semibold">Organization</h2>
              {organization && <p className="mb-2">{organization.name}</p>}
            </div>
          </div>

          <div className="mt-8 lg:mt-0 md:w-[340px]">
            <div className="sticky p-6 bg-white border border-gray-200 rounded-lg shadow-sm top-8">
              <h3 className="mb-4 text-xl font-semibold">Tickets</h3>
              {tickets.map((ticket, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold">{ticket.name}</p>
                  <p className="text-2xl font-bold">${ticket.price || 'Free'}</p>
                </div>
              ))}
              <button
                onClick={scrollToFooter}
                className="block w-full py-3 mt-4 text-center text-white bg-[#147481] rounded hover:bg-orange-600"
              >
                Get tickets on the application
              </button>
              <div className="p-4 mt-4 bg-gray-100 rounded">
                <h3 className="mb-2 font-semibold">Organizer contact</h3>
                <p className="text-sm text-gray-600">{event.organizer_email}</p>
                <p className="text-sm text-gray-600">{event.organizer_phone}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer id="event-footer" className="mt-12 border-t border-gray-200">
        <Footerhome />
      </footer>
    </div>
  );
};

export default EventDetails;
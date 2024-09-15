import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import Footerhome from "../components/Footerhome";

const supabaseUrl = "https://hgrzzvftvlsdkmodujim.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhncnp6dmZ0dmxzZGttb2R1amltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNzgwODAsImV4cCI6MjAwMzk1NDA4MH0.L5mf5tgrwbQlpyjCVC9JZVagJTYG4IWKZTvZadXor0I";
const supabase = createClient(supabaseUrl, supabaseKey);

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  const fetchEventDetails = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      setEvent(data);
    } catch (error) {
      console.error("Error fetching event details:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="items-center justify-center min-h-screen ">Loading...</div>;
  if (error) return <div className="flex items-center justify-center min-h-screen text-red-500">Error: {error}</div>;
  if (!event) return <div className="flex items-center justify-center min-h-screen">No event found</div>;

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-center mt-20 text-center bg-white border-b border-gray-200">
        <div className="container px-4 py-4 mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">{event.name}</h1>
          <p className="text-sm text-gray-600"> {event.organizer_name}</p>
        </div>
      </header>

      <main className="container px-4 py-8 mx-auto">
      <img
              src={event.poster_url || "/default-image-url.jpg"}
              alt={event.name}
              className="w-[1200px] mb-6 rounded-lg shadow-md h-[400px]"
            />
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-2/3">
           
            <div className="p-6 bg-gray-100 rounded-lg">
              <h2 className="mb-4 text-xl font-semibold">About this event</h2>
              <p className="mb-2"><strong>Date and time</strong></p>
              <p className="mb-4 text-sm text-gray-600">
                {new Date(event.date).toLocaleDateString()} at {event.start_time}
              </p>
              <p className="mb-4 text-sm text-gray-600">
                {new Date(event.date).toLocaleDateString()} at {event.time}
              </p>
              <p className="mb-2"><strong>Location</strong></p>
              <p className="mb-4 text-sm text-gray-600">{event.venue}, {event.address}</p>
              <h3 className="mb-2 font-semibold">Description</h3>
              <p className="text-sm text-gray-700">{event.description}</p>
            </div>
          </div>

          <div className="mt-8 lg:w-1/3 lg:mt-0">
            <div className="sticky p-6 bg-white border border-gray-200 rounded-lg shadow-sm top-8">
              <p className="mb-4 text-2xl font-bold">${event.price || 'Free'}</p>
              <a
                href={event.event_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 mb-4 text-center text-white bg-[#147481] rounded hover:bg-orange-600"
              >
                Get Tickets
              </a>
              <div className="p-4 bg-gray-100 rounded">
                <h3 className="mb-2 font-semibold">Organizer contact</h3>
                <p className="text-sm text-gray-600">{event.organizer_email}</p>
                <p className="text-sm text-gray-600">{event.organizer_phone}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 border-t border-gray-200">
        <Footerhome />
      </footer>
    </div>
  );
};

export default EventDetails;
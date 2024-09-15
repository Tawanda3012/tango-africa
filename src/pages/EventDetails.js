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

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error) return <div className="flex items-center justify-center min-h-screen text-red-500">Error: {error}</div>;
  if (!event) return <div className="flex items-center justify-center min-h-screen">No event found</div>;

  return (
    <div className="bg-gray-100 ">
      <main className="container px-4 py-8 mx-auto mt-8 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-center sm:text-4xl lg:text-5xl">{event.name}</h1>
        <div className="overflow-hidden bg-white rounded-lg shadow">
          <div className="sm:flex">
            <div className="sm:w-1/2">
              <img
                src={event.poster_url || "/default-image-url.jpg"}
                alt={event.name}
                className="object-cover w-full h-64 sm:h-full"
              />
            </div>
            <div className="p-6 sm:w-1/2 sm:p-8">
              <h2 className="mb-4 text-2xl font-semibold">Event Details</h2>
              <p className="mb-2"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p className="mb-2"><strong>Time:</strong> {event.time}</p>
              <p className="mb-2"><strong>Venue:</strong> {event.venue}</p>
              <p className="mb-2"><strong>Address:</strong> {event.address}</p>
              <p className="mb-4"><strong>Description:</strong> {event.description}</p>
              <a
                href={event.event_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600"
              >
                Get Tickets
              </a>
            </div>
          </div>
          <div className="p-6 bg-gray-50 sm:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Organizer</h2>
            <p className="mb-2"><strong>Name:</strong> {event.organizer_name}</p>
            <p className="mb-2"><strong>Email:</strong> {event.organizer_email}</p>
            <p className="mb-2"><strong>Phone:</strong> {event.organizer_phone}</p>
          </div>
        </div>
      </main>
      <footer>
        <Footerhome />
      </footer>
    </div>
  );
};

export default EventDetails;
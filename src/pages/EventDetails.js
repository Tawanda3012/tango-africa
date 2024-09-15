import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hgrzzvftvlsdkmodujim.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhncnp6dmZ0dmxzZGttb2R1amltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNzgwODAsImV4cCI6MjAwMzk1NDA4MH0.L5mf5tgrwbQlpyjCVC9JZVagJTYG4IWKZTvZadXor0I';
const supabase = createClient(supabaseUrl, supabaseKey);

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  const fetchEventDetails = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching event details:', error.message);
        return;
      }

      setEvent(data);
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container px-4 mx-auto mt-8">
      <h1 className="mb-4 text-3xl font-bold">{event.name}</h1>
      <img 
        src={event.poster_url || 'default-image-url.jpg'} 
        alt={event.name} 
        className="w-full max-w-2xl mb-6 rounded-lg"
      />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-2 text-xl font-semibold">Event Details</h2>
          <p className="mb-2"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
          <p className="mb-2"><strong>Time:</strong> {event.time}</p>
          <p className="mb-2"><strong>Venue:</strong> {event.venue}</p>
          <p className="mb-2"><strong>Address:</strong> {event.address}</p>
          <p className="mb-4"><strong>Description:</strong> {event.description}</p>
          <a 
            href={event.event_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Get Tickets
          </a>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-semibold">Organizer</h2>
          <p className="mb-2"><strong>Name:</strong> {event.organizer_name}</p>
          <p className="mb-2"><strong>Email:</strong> {event.organizer_email}</p>
          <p className="mb-2"><strong>Phone:</strong> {event.organizer_phone}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
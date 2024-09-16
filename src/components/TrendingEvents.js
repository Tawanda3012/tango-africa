import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Initialize Supabase client
const supabaseUrl = 'https://hgrzzvftvlsdkmodujim.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhncnp6dmZ0dmxzZGttb2R1amltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNzgwODAsImV4cCI6MjAwMzk1NDA4MH0.L5mf5tgrwbQlpyjCVC9JZVagJTYG4IWKZTvZadXor0I';
const supabase = createClient(supabaseUrl, supabaseKey);

const EventCard = ({ event }) => (
  <div className="px-2 card">
    <Link to={`/event/${event.id}`} className="block">
      <div className="card__thumb">
        <img 
          src={event.poster_url || 'default-image-url.jpg'} 
          alt={event.name || 'Event Image'} 
          className="object-cover w-full h-48 rounded-lg" 
        />
      </div>
      <div className="p-4 card__details">
        <p className="text-lg font-bold card__title">{event.name || 'Untitled Event'}</p>
        <div className="flex items-center mt-2 card__venue">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 384 512">
            <path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <p>{event.venue || 'Unknown Venue'}</p>
        </div>
        <div className="flex items-center mt-2 card__views">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 576 512">
            <path fill="currentColor" d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z" />
          </svg>
          <p>
            {event.address 
              ? event.address 
              : 'Address not available'}
          </p>
        </div>
      </div>
    </Link>
  </div>
);

const SkeletonLoader = () => (
  <div className="px-2 card animate-pulse">
    <div className="h-48 mb-4 bg-gray-300 rounded-lg"></div>
    <div className="w-3/4 h-4 mb-2 bg-gray-300 rounded"></div>
    <div className="w-1/2 h-4 mb-2 bg-gray-300 rounded"></div>
    <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
  </div>
);

const TrendingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('views', { ascending: false })
        .limit(10);

      if (error) {
        console.error('Error fetching events:', error.message);
        return;
      }

      console.log('Fetched events:', data);
      setEvents(data);
    } catch (error) {
      console.error('Unexpected error:', error);
    } finally {
      setLoading(false);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-8 mb-20 mt-60 trending lg:mt-5 lg:mb-3">
      <div className="container mx-auto">
        <h2 className="mb-6 text-2xl font-bold title">Events</h2>
        <div className="trending__slider">
          <Slider {...settings}>
            {loading
              ? Array(4).fill().map((_, index) => <SkeletonLoader key={index} />)
              : events.map((event) => <EventCard key={event.id} event={event} />)
            }
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TrendingEvents;
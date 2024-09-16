import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from "lottie-react";

// Initialize Supabase client
const supabaseUrl = 'https://hgrzzvftvlsdkmodujim.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_KEY'; // Replace with your actual key
const supabase = createClient(supabaseUrl, supabaseKey);

// Sample Lottie Animation Data (replace with your own)
const loadingAnimationData = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 200,
  h: 200,
  nm: "Loading Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 0,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [100, 100, 0], ix: 2 },
        a: { a: 0, k: [100, 100, 0], ix: 1 },
        s: { a: 1, k: [{ i: { x: [0.5], y: [1] }, o: { x: [0.5], y: [0] }, t: 0, s: [0, 0, 100] }, { t: 30, s: [200, 200, 100] }, { t: 60, s: [0, 0, 100] }], ix: 6 }
      },
      shapes: [
        {
          ty: "el",
          s: { a: 0, k: [200, 200], ix: 2 },
          p: { a: 0, k: [100, 100], ix: 3 },
          nm: "Ellipse Path",
          fillStyleId: "color_1",
          strokeStyleId: "color_2",
          transform:
            {
              mProps:
                {
                  a:
                    [{ i:
                      { x:
                        [0.5],
                        y:
                        [1] },
                      o:
                      { x:
                        [0.5],
                        y:
                        [0] },
                      t:
                      30,
                      s:
                      [200],
                      e:
                      [100] }]
                }
            }
        }
      ],
      styles:
        [{ id:
            "color_1",
            color:
            { r:
              .4,
              g:
              .6,
              b:
              .8,
              a:
              .8 } }]
    }
    // Add more layers as needed
    ]
};

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
                        <path fill="currentColor" d="M215.7 499.2C267...z" />
                    </svg>
                    <p>{event.venue || 'Unknown Venue'}</p>
                </div>
                <div className="flex items-center mt-2 card__views">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 576...">
                        <path fill="currentColor" d="M288...z" />
                    </svg>
                    <p>{event.address ? event.address : 'Address not available'}</p>
                </div>
            </div>
        </Link>
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
        responsive:[
            {
                breakpoint :1024,
                settings :{
                    slidesToShow :3,
                    slidesToScroll :1
                }
            },
            {
                breakpoint :600,
                settings :{
                    slidesToShow :2,
                    slidesToScroll :1
                }
            },
            {
                breakpoint :480,
                settings :{
                    slidesToShow :1,
                    slidesToScroll :1
                }
            }
        ]
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Lottie 
                    animationData={loadingAnimationData} 
                    loop={true}
                    style={{ width: '200px', height:'200px' }}
                />
            </div>
        );
    }

    return (
        <section className="py-8 mb-20 mt-60 trending lg:m-5 lg:m-3">
            <div className="container mx-auto">
                <h2 className="mb-6 text-2xl font-bold title">Events</h2>
                <div className="trending__slider">
                    <Slider {...settings}>
                        {events.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TrendingEvents;
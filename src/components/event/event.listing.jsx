import React, { useState, useEffect } from 'react';
import API from '../../helper/constants.helper';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

const EventListing = () => {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        console.log('Fetch is working : ', API.BASE_URL + API.GET_ALL_EVENTS);
        const token = localStorage.getItem('token');
        const response = await axios.get(API.BASE_URL + API.GET_ALL_EVENTS, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        });

        if (response.status === 200) {
          const data = response.data;
          console.log('data ', data.length);
          setEvents(data.events);
          setLoading(false);
        } else {
          console.error('Error fetching events:', response.statusText);
        }

      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    if (loading) {
      fetchEvents();
    }
  }, [loading]);

  
  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Upcoming Events</h2>
        <Link to="/create-event">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
            Create New Event
          </button>
        </Link>
      </div>
      {events.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white p-6 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={event.image}
              alt={`Event: ${event.title}`}
              className="mb-4 rounded-md h-32 w-full object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-2">{new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-700 mb-4">{event.description}</p>
            <p className="text-gray-600">{`Location: ${event.location}`}</p>
            <Link to={`/event/${event.id}`}>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
                View
              </button>
            </Link>
          </div>
        ))}
      </div>
       ) : (
        <div className="text-center text-gray-500">
          <p>No events available</p>
        </div>
      )}
    </div>
  );
};

export default EventListing;

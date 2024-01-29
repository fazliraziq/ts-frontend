import React, { useState, useEffect } from 'react';
import API from '../../helper/constants.helper';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Event() {
  const [eventData, setEventData] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(API.BASE_URL + API.GET_EVENT_BY_ID + id , {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
          });
          if (response.status === 200) {
            const data = response.data;
            console.log('data ', data.event  );
            setEventData(data.event);
          } else {
            console.error('Error fetching events:', response.statusText);
          }
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!eventData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="bg-white p-8 rounded-md shadow-md">
        <div className="container mx-auto text-center">
          <img src={eventData.imageUrl} alt="Event Image" className="mx-auto mb-6 rounded-md" />

          <h1 className="text-3xl font-semibold mb-2">{eventData.title}</h1>
          <h6 className="text-gray-600 mb-4"><span className="font-bold">Location:</span> {eventData.location}</h6>
          <h6 className="text-gray-600 mb-4"><span className="font-bold">Event Created By:</span> {eventData.organizer}</h6>
          <h6 className="text-gray-600 mb-4"><span className="font-bold">Tickets Available:</span> {eventData.ticketsAvailable}</h6>
          <h6 className="text-gray-600 mb-4"><span className="font-bold">Tickets Sold:</span> {eventData.ticketsSold}</h6>

          <div className="mb-6">
            <img src={eventData.qrCodeUrl} alt="QR Code" className="mx-auto" />
            <p className="mt-2 text-gray-500 text-sm">Scan the QR code to find out the exact location</p>
          </div>

        <Link to={`/cart/${eventData.id}`}>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none transition duration-300">Buy Tickets</button>
        </Link>
       </div>
      </section>
    </>
  );
}

export default Event;

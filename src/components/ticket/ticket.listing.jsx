import React, { useState, useEffect } from 'react';
import API from '../../helper/constants.helper';

// Placeholder Barcode Image URL
const placeholderBarcodeUrl = 'https://via.placeholder.com/100x100.png';

const TicketListing = () => {
  const [tickets, setTickets] = useState([]);

  // Placeholder JSON response
  const placeholderResponse = [
    {
      id: 1,
      unique: '1234-5678-ABCD',
      seatNo: 'A1',
      verificationCode: 'V123',
      isExpire: false,
      isActive: true,
      isResell: false,
      eventId: 1,
      userId: 1,
    },
    {
      id: 2,
      unique: '5678-ABCD-1234',
      seatNo: 'B2',
      verificationCode: 'V456',
      isExpire: false,
      isActive: true,
      isResell: false,
      eventId: 2,
      userId: 2,
    },
  ];

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(API.BASE_URL + API.GET_ALL_TICKETS);
        console.log("All Tickets Response ", response);
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Ticket Listings</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholderResponse.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white p-6 rounded-md shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2">{`Ticket: ${ticket.unique}`}</h3>
            <p className="text-gray-600 mb-2">{`Seat No: ${ticket.seatNo}`}</p>
            <img
              src={placeholderBarcodeUrl}
              alt={`Barcode: ${ticket.verificationCode}`}
              className="mb-4 rounded-md h-16 w-16 object-cover"
            />
            <p className="text-gray-600">{`Verification Code: ${ticket.verificationCode}`}</p>
            <p className="text-gray-600 mb-2">{`Event ID: ${ticket.eventId}`}</p>
            <p className="text-gray-600 mb-2">{`User ID: ${ticket.userId}`}</p>
            <p className="text-gray-600">{`Status: ${ticket.isActive ? 'Active' : 'Inactive'}`}</p>
            <div className="flex mt-4 space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
                Resell
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketListing;

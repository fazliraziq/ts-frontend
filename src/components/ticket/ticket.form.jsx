import React, { useState, useEffect } from 'react';
import API from '../../helper/constants.helper';

const TicketForm = () => {
  const [event, setEvent] = useState({});
  const [ticketDetails, setTicketDetails] = useState({
    seatNo: '',
    verificationCode: '',
  });

  // Placeholder event details
  const placeholderEvent = {
    id: 1,
    title: 'Event 1',
    date: '2024-02-15',
    location: '123 Main St, City',
    // ... other event details
  };

  // Fetch event details
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`${API.BASE_URL}${API.GET_EVENT}/${placeholderEvent.id}`);
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEvent();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddToCart = () => {
    // Add your logic to handle adding the ticket to the cart
    console.log('Ticket added to cart:', ticketDetails);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Ticket Details</h2>
      </div>

      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2">Event Details</h3>
        <p className="text-gray-600 mb-2">{`Event Title: ${event.title}`}</p>
        <p className="text-gray-600 mb-2">{`Event Date: ${new Date(event.date).toLocaleDateString()}`}</p>
        <p className="text-gray-600">{`Event Location: ${event.location}`}</p>
      </div>

      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2">Ticket Details</h3>
        <div className="mb-4">
          <label htmlFor="seatNo" className="block text-sm font-medium text-gray-700">
            Seat Number
          </label>
          <input
            type="text"
            id="seatNo"
            name="seatNo"
            value={ticketDetails.seatNo}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">
            Verification Code
          </label>
          <input
            type="text"
            id="verificationCode"
            name="verificationCode"
            value={ticketDetails.verificationCode}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2">Ticket Details</h3>

        <div className="mb-4">
            <label htmlFor="seatNo" className="block text-sm font-medium text-gray-700">
            Seat Number
            </label>
            <input
            type="text"
            id="seatNo"
            name="seatNo"
            value={ticketDetails.seatNo}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            />
        </div>

        <div className="mb-4">
            <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">
            Verification Code
            </label>
            <input
            type="text"
            id="verificationCode"
            name="verificationCode"
            value={ticketDetails.verificationCode}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
            />
        </div>
        <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
            onClick={handleAddToCart}
        >
            Add to Cart
        </button>
        </div>

        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default TicketForm;

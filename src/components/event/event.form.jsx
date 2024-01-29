import React, { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import Joi from 'joi';
import API from '../../helper/constants.helper';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const EventForm = () => {
  const { addToast } = useToasts();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [formData, setFormData] = useState({
    title: '',
    address: '',
    url: '',
    gps: '',
    totalTickets: '',
    eventDate: '',
    checkIn: '',
    checkout: '',
  });

  const schema = Joi.object({
    title: Joi.string().required().label('Event Title'),
    address: Joi.string().required().label('Event Address'),
    url: Joi.string().required().label('Event URL'),
    gps: Joi.string().required().label('GPS Location'),
    totalTickets: Joi.number().integer().min(1).required().label('Total Tickets'),
    eventDate: Joi.date().min('now').required().label('Event Date'),
    checkIn: Joi.string().required().label('Check-In Time'),
    checkout: Joi.string().required().label('Checkout Time'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = schema.validate(formData, { abortEarly: false });

    if (error) {
      const errors = {};
      error.details.forEach((detail) => {
        errors[detail.context.key] = detail.message;
      });
      displayErrors(errors);
    } else {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(API.BASE_URL + API.CREATE_EVENT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({...formData}),
        });
    
        if (response.ok) {
          addToast('Event created successfully!', { appearance: 'success', autoDismiss: true });
          history.push('/events');
        } else {
          const errorMessage = await response.text();
          addToast(`Error: ${errorMessage}`, { appearance: 'error', autoDismiss: true });
        }
      } catch (error) {
        console.error('Error creating event:', error);
        addToast('Error creating event. Please try again.', { appearance: 'error', autoDismiss: true });
      } finally {
        setLoading(false);
      }
    }
  };

  const displayErrors = (errors) => {
    Object.keys(errors).forEach((key) => {
      addToast(errors[key], { appearance: 'error', autoDismiss: true });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6">Create New Event</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Event Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

        <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Event Address
        </label>
        <input
            type="text"
            id="address"
            name="address"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none"
            value={formData.address}
            onChange={handleChange}
        />
        </div>

        <div className="mb-4">
        <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            Event URL
        </label>
        <input
            type="text"
            id="url"
            name="url"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none"
            value={formData.url}
            onChange={handleChange}
        />
        </div>

        <div className="mb-4">
        <label htmlFor="gps" className="block text-sm font-medium text-gray-700">
            GPS Location
        </label>
        <input
            type="text"
            id="gps"
            name="gps"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none"
            value={formData.gps}
            onChange={handleChange}
        />
        </div>

        <div className="mb-4">
        <label htmlFor="totalTickets" className="block text-sm font-medium text-gray-700">
            Total Tickets
        </label>
        <input
            type="number"
            id="totalTickets"
            name="totalTickets"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none"
            value={formData.totalTickets}
            onChange={handleChange}
        />
        </div>

        <div className="mb-4">
        <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">
            Event Date
        </label>
        <input
            type="date"
            id="eventDate"
            name="eventDate"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none"
            value={formData.eventDate}
            onChange={handleChange}
        />
        </div>

        <div className="mb-4">
        <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">
            Check-In Time
        </label>
        <input
            type="time"
            id="checkIn"
            name="checkIn"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none"
            value={formData.checkIn}
            onChange={handleChange}
        />
        </div>

        <div className="mb-4">
        <label htmlFor="checkout" className="block text-sm font-medium text-gray-700">
            Checkout Time
        </label>
        <input
            type="time"
            id="checkout"
            name="checkout"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none"
            value={formData.checkout}
            onChange={handleChange}
        />
        </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none"
      >
        Create Event
      </button>
    </form>
  );
};

export default EventForm;

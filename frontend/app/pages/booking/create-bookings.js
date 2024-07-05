import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CreateBooking = () => {
  const [formData, setFormData] = useState({
    service: '',
    doctor_name: '',
    start_time: '',
    end_time: '',
    date: '',
  });

  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong');
      }
    } catch (error) {
      setError('Network error');
    }
  };

  return (
    <div>
      <h1>Create Booking</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Service</label>
          <input type="text" name="service" value={formData.service} onChange={handleChange} required />
        </div>
        <div>
          <label>Doctor Name</label>
          <input type="text" name="doctor_name" value={formData.doctor_name} onChange={handleChange} required />
        </div>
        <div>
          <label>Start Time</label>
          <input type="text" name="start_time" value={formData.start_time} onChange={handleChange} required />
        </div>
        <div>
          <label>End Time</label>
          <input type="text" name="end_time" value={formData.end_time} onChange={handleChange} required />
        </div>
        <div>
          <label>Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <button type="submit">Create Booking</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default CreateBooking;

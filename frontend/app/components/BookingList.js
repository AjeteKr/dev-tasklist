import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from the API
    fetch('http://localhost:5000/api/bookings')
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error('Error fetching bookings:', error));
  }, []);

  return (
    <div>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            <Link href={`/booking/${booking.id}`}>
              A Booking on {new Date(booking.date).toLocaleDateString()} starting at {booking.start_time}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;

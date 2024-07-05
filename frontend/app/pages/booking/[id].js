
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import './styles.css';

const BookingDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/bookings/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setBooking(data);
        })
        .catch(error => console.error('Error fetching booking details:', error));
    }
  }, [id]);
  if (!booking) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <h1 className="title">Booking Details</h1>
      <p className="details">This Booking is with {booking.doctor_name} for {booking.service} and it ends on {booking.end_time}</p>
      <div className="link">
        <Link href="/bookings" className="link"> Back </Link>
      </div>
    </div>
  );
};
export default BookingDetails;

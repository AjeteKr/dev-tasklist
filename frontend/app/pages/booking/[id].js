
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
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
    <div>
      <h1>Booking Details</h1>
      <p>This Booking is with {booking.doctor_name} for {booking.service} and it ends on {booking.end_time}</p>
      <Link href="/bookings">
        Back
      </Link>
    </div>
  );
};
export default BookingDetails;

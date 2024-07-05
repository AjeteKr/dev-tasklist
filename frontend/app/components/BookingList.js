import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './BookingList.module.css';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/bookings')
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className={styles.cardContainer}>
      {bookings.map(booking => (
        <div key={booking.id} className={styles.card}>
          <h2 className={styles.cardTitle}>Booking with {booking.doctor_name}</h2>
          <p className={styles.cardDetails}>Service: {booking.service}</p>
          <p className={styles.cardDetails}>End Time: {booking.end_time}</p>
          <p className={styles.cardDetails}>Date: {booking.date}</p>
          <Link href={`/booking/${booking.id}`} className={styles.cardLink}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookingList;

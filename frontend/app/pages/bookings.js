import React from 'react';
import BookingList from '../components/BookingList';
import styles from './booking.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bookings</h1>
      <BookingList />
    </div>
  );
};

export default HomePage;

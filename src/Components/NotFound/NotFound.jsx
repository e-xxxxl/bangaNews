import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundTitle}>404</h1>
      <p className={styles.notFoundMessage}>The page you're looking for cannot be found.</p>
      <Link to="/" className={styles.notFoundLink}>
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
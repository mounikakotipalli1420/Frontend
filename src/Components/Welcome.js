import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Feedback App</h1>
      <p style={styles.description}>
        We value your feedback! Please login or sign up to get started.
      </p>
      <div style={styles.buttons}>
        <Link to="/login" style={styles.button}>
          Login
        </Link>
        <Link to="/register" style={styles.button}>
          Register
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  title: {
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2em',
    color: '#555',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '1em',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007bff',
    borderRadius: '5px',
    margin: '0 10px',
  },
};

export default Welcome;

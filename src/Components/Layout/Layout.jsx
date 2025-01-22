import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Firstsection from '../Herosection/Firstsection';
import Politicalsection from '../Herosection/Politicalsection';
import TechSection from '../Herosection/Techsection';
import Businesssection from '../Herosection/Businesssection';
import Sportsection from '../Herosection/Sportsection';
import EntertainmentSection from '../Herosection/Entertainmentsection';
import HealthSection from '../Herosection/Healthsection';
import Footer from '../Footer/Footer';

const CrazyLoader = () => {
  return (
    <div style={loaderStyles.container}>
      <div style={loaderStyles.spinner}></div>
      <p style={loaderStyles.text}>Loading the crazy stuff...</p>
    </div>
  );
};

const loaderStyles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 2000,
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '6px solid #007bff',
    borderTop: '6px solid transparent',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  text: {
    marginTop: '1rem',
    fontSize: '1.2rem',
    color: '#333',
  },
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: '#0047AB',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '3rem',
          height: '3rem',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
        }}
      >
        ↑
      </button>
    )
  );
};

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a 3-second loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <CrazyLoader />
      ) : (
        <>
          <Navbar />
          <Firstsection />
          <Politicalsection />
          <TechSection />
          <Businesssection />
          <Sportsection />
          <EntertainmentSection />
          <HealthSection />
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </>
  );
};

export default Layout;

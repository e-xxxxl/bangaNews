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
const LandingPage = () => {

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
  return (
    <>


          <Navbar />
          <Firstsection />
          <Politicalsection />
          <Businesssection />
          <TechSection />
          <Sportsection />
          <EntertainmentSection />
          <HealthSection />
          <Footer />
          <ScrollToTopButton />
    
    </>
  )
}

export default LandingPage
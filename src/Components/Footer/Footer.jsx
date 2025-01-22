import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 position-relative overflow-hidden">
      <div className="container">
        <div className="row">
          {/* About Us Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-warning pb-2">About Us</h5>
            <p className="text-muted">
              Your trusted source for the latest news in politics, business, technology, sports,
              entertainment, and health. Stay informed with in-depth articles and updates.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-warning pb-2">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { href: '#home', text: 'Home' },
                { href: '#politics', text: 'Politics' },
                { href: '#business', text: 'Business' },
                { href: '#technology', text: 'Technology' },
                { href: '#sports', text: 'Sports' },
                { href: '#entertainment', text: 'Entertainment' },
                { href: '#health', text: 'Health' },
              ].map((link) => (
                <li key={link.href} className="mb-2">
                  <a href={link.href} className="text-light text-decoration-none hover-effect">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-warning pb-2">Contact Us</h5>
            <p>
              Email:{' '}
              <a
                href="mailto:contact@newswebsite.com"
                className="text-warning text-decoration-underline"
              >
                contact@newswebsite.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+1234567890" className="text-warning text-decoration-underline">
                +123 456 789    
              </a>
            </p>
            <div className="d-flex align-items-center">
              <a href="#" className="text-light fs-4 me-3 hover-effect">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light fs-4 me-3 hover-effect">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light fs-4 hover-effect">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-4 border-top border-light pt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()}{' '}
            <span className="fw-bold text-warning">Banga News</span>. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Gradient Background */}
      <div
        className="position-absolute w-100 h-100 top-0 start-0 bg-gradient"
        style={{ opacity: 0.15, zIndex: -1 }}
      ></div>
    </footer>
  );
};

export default Footer;

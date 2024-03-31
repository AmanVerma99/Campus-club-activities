import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>We are a platform dedicated to connecting students with clubs and organizations on campus. Find your next adventure or community here!</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/clubs">Clubs</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h3>Contact Us</h3>
          <p>If you have any questions, please feel free to reach out to us.</p>
          <p>Email: info@clubconnect.com</p>
        </div>
        <div className="footer-section socials">
          <h3>Connect with Us</h3>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Club Connect | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

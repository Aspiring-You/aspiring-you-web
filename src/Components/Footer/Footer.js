import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col footer-logo">
          <h2>Brandname</h2>
          <p>
            Working to bring significant changes in online-based learning by
            doing extensive research for course curriculum preparation, student
            engagements, and looking forward to the flexible education!
          </p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>

        {/* Explore Links (center column) */}
        <div className="footer-col footer-links">
          <h4>Explore</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/courses">Courses</a>
          <a href="/events">Events</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Resources Links (center column) */}
        <div className="footer-col footer-links">
          <h4>Resources</h4>
          <a href="/success">Student Success</a>
          <a href="/scholarships">Scholarships</a>
          <a href="/business">For Business</a>
          <a href="/premium">Go Premium</a>
          <a href="/team-plans">Team Plans</a>
        </div>

        {/* Address & Contact Information (right column) */}
        <div className="footer-col footer-address">
          <h4>Address</h4>
          <p>2750 Quadra Street Golden Victoria Road, New York, USA</p>
          <p>+1 (123) 456 7890</p>
          <p>hello@odemy.com</p>
          <p>+55 785 4578964</p>
        </div>
      </div>

      {/* Footer Information */}
      <div className="footer-info">&copy; AY Academy created with Love</div>
    </footer>
  );
};

export default Footer;

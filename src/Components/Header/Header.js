import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobile(false); // Reset mobile view when the window is resized above 768px
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h3 className="logo">AY ACADEMY</h3>
        <ul className={isMobile ? "nav-links-mobile open" : "nav-links"}>
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/courses" className="nav-link">
              Courses
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
          <li>
            <a href="#signup" className="nav-link">
              Signup
            </a>
          </li>
          <li>
            <a href="#login" className="nav-link">
              Login
            </a>
          </li>
        </ul>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobile ? "active" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

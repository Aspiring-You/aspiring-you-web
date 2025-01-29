import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import "./Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation(); // Hook to get the current location

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

  // Handle the Blog link click
  const handleBlogClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // If on the Home page, scroll to the blog section
      document.getElementById("blog").scrollIntoView({ behavior: "smooth" });
    } else {
      // If on other pages, do nothing or redirect to the Home page
      window.location.href = "/"; // Or use `navigate("/")` to navigate to the Home page
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h3 className="logo">AY ACADEMY</h3>
        <ul className={isMobile ? "nav-links-mobile open" : "nav-links"}>
          <li>
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active-link"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <a
              href="#blog"
              className="nav-link"
              onClick={handleBlogClick} // Use the new click handler
            >
              Blog
            </a>
          </li>
          <li>
            <NavLink
              to="/courses"
              className="nav-link"
              activeClassName="active-link"
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className="nav-link"
              activeClassName="active-link"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active-link"
            >
              Contact
            </NavLink>
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

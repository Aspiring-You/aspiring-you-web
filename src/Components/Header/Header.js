import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as LogoSVG } from "../../Assets/Images/logo.svg";
import "./Header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobile(false);
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
    if (location.pathname === "/ay_academy") {
      document.getElementById("blog").scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/ay_academy";
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <LogoSVG />
        </div>

        <ul className={isMobile ? "nav-links-mobile open" : "nav-links"}>
          <li>
            <NavLink
              to="/ay_academy"
              className="nav-link"
              activeClassName="active-link"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <a href="#blog" className="nav-link" onClick={handleBlogClick}>
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

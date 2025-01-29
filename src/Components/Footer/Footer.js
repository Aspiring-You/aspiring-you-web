import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import footerData from "../../Assets/Footer/Footer.json"; // Import the JSON file

const Footer = () => {
  const iconMap = {
    faTwitter,
    faYoutube,
    faFacebook,
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-col footer-logo">
          <h2>{footerData.brand.name}</h2>
          <p>{footerData.brand.description}</p>

          {/* Social Media Icons */}
          <div className="social-icons">
            {footerData.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={iconMap[link.icon]} />
              </a>
            ))}
          </div>
        </div>

        {/* Explore Links */}
        <div className="footer-col footer-links">
          <h4>Explore</h4>
          {footerData.exploreLinks.map((link, index) => (
            <a key={index} href={link.url}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Resources Links */}
        <div className="footer-col footer-links">
          <h4>Resources</h4>
          {footerData.resourcesLinks.map((link, index) => (
            <a key={index} href={link.url}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Address Section */}
        <div className="footer-col footer-address">
          <h4>Address</h4>
          <p>{footerData.address.line1}</p>
          <p>{footerData.address.phone1}</p>
          <p>{footerData.address.email}</p>
          <p>{footerData.address.phone2}</p>
        </div>
      </div>

      {/* Footer Information */}
      <div
        className="footer-info"
        dangerouslySetInnerHTML={{ __html: footerData.footerInfo }}
      />
    </footer>
  );
};

export default Footer;

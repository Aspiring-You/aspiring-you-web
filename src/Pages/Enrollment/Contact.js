import React, { useState } from "react";
import "./Contact.css"; // Import the CSS file for custom styling
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match");
      return;
    }
    // Handle the form submission logic here
  };

  return (
    <>
      <Header />
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-card">
            <div className="form-container">
              <h1 className="form-title">Sign Up</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="repeatPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  <label htmlFor="agreeTerms">
                    I agree to all statements in{" "}
                    <a href="#!">Terms of Service</a>
                  </label>
                </div>

                <div className="form-submit">
                  <button type="submit" className="btn-submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

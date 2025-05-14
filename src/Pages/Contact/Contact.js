import React, { useState } from "react";
import "./Contact.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import contact from "../../Assets/Contact/Contact.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(contact.form.successMessage);
  };

  return (
    <>
      <Header />
      {/* <div className="contact">
        Explore our <span style={{ color: "#dd5c3f" }}>Locations</span>!
        <br></br>
      </div> */}
      <div className="container-contact">
        <div className="contact-container">
          <h1 className="contact-title">{contact.form.title}</h1>
          <div className="contact-content">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                {contact.form.fields.map((field) => (
                  <div className="form-group" key={field.id}>
                    <label htmlFor={field.id}>{field.label}</label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        name={field.name}
                        placeholder={field.placeholder}
                        rows="4"
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                      ></textarea>
                    ) : (
                      <input
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                      />
                    )}
                  </div>
                ))}
                <button type="submit" className="submit-btn">
                  {contact.form.submitButtonText}
                </button>
              </form>
            </div>

            <div className="contact-map">
              <iframe
                title="Google Map"
                src={contact.map.src}
                style={{ width: "100%", height: "100%", border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-icons-container">
        <div className="icon-row">
          {contact.icons.map((icon) => (
            <div className="icon-box" key={icon.type}>
              <div className="icon-circle">
                <i className={icon.iconClass}></i>
              </div>
              <p>{icon.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send data to server or email service)
    console.log(formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-us-section">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Feel free to reach out for any inquiries or support!</p>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>123 Travel Agency St., Casablanca, Morocco</p>
        </div>
        <div className="info-item">
          <i className="fas fa-phone"></i>
          <p>+212 600 123 456</p>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <p>info@travelagency.com</p>
        </div>
        <div className="social-icons">
          {/* Replace href="#" with actual links or use a button */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;

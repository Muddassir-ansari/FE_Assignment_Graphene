import React, { useState } from "react";
import "../footer/Footer.css";
import BottomFooter from "./BottomFooter";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form fields
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);

    // If there are no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      setIsFormSubmitted(true);
    }
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="left-content">
          <h2>Newsletter</h2>
          <p>Get news about articles and updates in your inbox.</p>
        </div>
        <div className="right-content">
          {isFormSubmitted ? (
            <p>Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubmit} className="form-container">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "error" : ""}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "error" : ""}
                />
                {errors.message && (
                  <p className="error-text">{errors.message}</p>
                )}
              </div>
              <button type="submit" className="submit-button">
                SEND
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="h1-title">
        <span>GET</span><br></br>
        <span>IN TOUCH</span>
      </div>
      <BottomFooter/>
    </div>
  );
}

export default Footer;

// Import necessary libraries and components
import React from "react";
import "./TopBanner.css";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaTruck,
} from "react-icons/fa";

// Define the TopBanner functional component
const TopBanner = () => {
  return (
    <div className="top-banner">
      {" "}
      {/* Top banner container */}
      <div className="top-banner-content">
        {" "}
        {/* Content within the top banner */}
        <div className="left-section">
          {" "}
          {/* Left section of the top banner */}
          <span className="free-delivery">
            <FaTruck className="social-icon" /> Free Delivery
          </span>{" "}
          {/* Free delivery text and truck icon */}
          <div className="vertical-border"></div>{" "}
          {/* Vertical border between elements */}
          <span className="return-policy">Return Policy</span>{" "}
          {/* Return policy text */}
        </div>
        <div className="right-section">
          {" "}
          {/* Right section of the top banner */}
          <span className="login">Login</span> {/* Login text */}
          <span className="follow-us">Follow us</span> {/* Follow us text */}
          <FaFacebook className="social-icon" /> {/* Facebook icon */}
          <FaLinkedin className="social-icon" /> {/* LinkedIn icon */}
          <FaTwitter className="social-icon" /> {/* Twitter icon */}
          <FaInstagram className="social-icon" /> {/* Instagram icon */}
        </div>
      </div>
    </div>
  );
};

export default TopBanner; // Export the TopBanner component as the default export

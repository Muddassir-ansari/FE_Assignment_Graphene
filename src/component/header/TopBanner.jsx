import React from 'react';
import './TopBanner.css'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaTruck } from 'react-icons/fa';

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="top-banner-content">
        <div className="left-section">
        <span className="free-delivery"><FaTruck className='social-icon'/> Free Delivery</span>
        <div className="vertical-border"></div>
          <span className="return-policy">Return Policy</span>
        </div>
        <div className="right-section">
          <span className="login">Login</span>
          <span className="follow-us">Follow us</span>
          <FaFacebook className="social-icon" />
          <FaLinkedin className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaInstagram className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;

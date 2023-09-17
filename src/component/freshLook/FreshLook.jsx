import React from "react";
import './FreshLook.css';
import { FaArrowRight } from "react-icons/fa";

const FreshLook = () => {
  return (
    <div className="fresh-look-section">
      <div className="section-content">
        <div className="text-container">
          <div className="fresh">Fresh</div>
            <div className="year-text">2022</div>
            <div className="look">Look</div>
        </div>
        <button className="see-more-button">See More <FaArrowRight/></button>
      </div>
    </div>
  );
};

export default FreshLook;

// Import React library and the CSS file for the FreshLook component
import React from "react";
import "./FreshLook.css";

// Import the FaArrowRight icon from the react-icons library

import { FaArrowRight } from "react-icons/fa";

// Define the FreshLook functional component
const FreshLook = () => {
  return (
    <div className="fresh-look-section">
      <div className="section-content">
        <div className="text-container">
          <div className="fresh">Fresh</div> {/* Fresh text */}
          <div className="year-text">2022</div> {/* Year text */}
          <div className="look">Look</div> {/* Look text */}
        </div>
        <button className="see-more-button">
          See More <FaArrowRight />
        </button>{" "}
        {/* See More button with the FaArrowRight icon */}
      </div>
    </div>
  );
};

// Export the FreshLook component as the default export
export default FreshLook;

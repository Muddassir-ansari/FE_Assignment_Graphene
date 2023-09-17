// Import React library and the CSS file for the Footer component
import React from "react";
import "./Footer.css";

// Define the BottomFooter functional component
const BottomFooter = () => {
  return (
    // Create a div with the 'bottom-footer' CSS class
    <div className="bottom-footer">
      {/* Display a copyright notice */}
      <p>Copyright 2022 All Right Reserved By SG</p>
    </div>
  );
};

// Export the BottomFooter component as the default export
export default BottomFooter;

// import React, { useState } from "react";
// import "./NavBar.css";
// import star from './../../assets/Star 1.svg'

// const NavBar = () => {
//   const [activeMenuItem, setActiveMenuItem] = useState(null);

//   const handleMenuItemClick = (itemId) => {
//     setActiveMenuItem(itemId === activeMenuItem ? null : itemId);
//   };

//   const isMenuItemActive = (itemId) => {
//     return itemId === activeMenuItem;
//   };

//   const navbar = [
//     { name: "Home", id: "home" },
//     { name: "About", id: "about" },
//     {
//       name: "Our Products",
//       id: "product",
//       child: [
//         { name: "Product 1", id: "p1" },
//         { name: "Product 2", id: "p2" },
//         { name: "Product 3", id: "p3" },
//         { name: "Product 4", id: "p4" },
//       ],
//     },
//     { name: "Contact Us", id: "contact" },
//   ];

//   return (
//     <>
//       <div className="section">
//         <div className="left-content">
//           <span className="shophar">Shopkart</span>
//         </div>
//         <div className="right-content">
//           <span className="wishlist">WISHLIST(0)</span>
//           <span className="bag">BAG(0)</span>
//         </div>
//       </div>
//       {/* Navbar Section */}
//       <div className="navbar">
//         {navbar.map((item) => (
//           <div
//             key={item.id}
//             className={`nav-item ${isMenuItemActive(item.id) ? "active" : ""}`}
//             onClick={() => handleMenuItemClick(item.id)}
//           >
//             {item.name}
//             {isMenuItemActive(item.id) && <img src={star}alt="star" className="star"/>}
//             {item.child && isMenuItemActive(item.id) && (
//               <div className="dropdown">
//                 {item.child.map((childItem) => (
//                   <div
//                     key={childItem.id}
//                     className="dropdown-item"
//                   >
//                     {childItem.name}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default NavBar;
import React, { useState } from "react";
import "./NavBar.css";
import star from './../../assets/Star 1.svg'

const NavBar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Added state for menu toggle

  const handleMenuItemClick = (itemId) => {
    setActiveMenuItem(itemId === activeMenuItem ? null : itemId);
  };

  const isMenuItemActive = (itemId) => {
    return itemId === activeMenuItem;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <>
      <div className="section">
        <div className="left-content">
          <span className="shophar">Shopkart</span>
        </div>
        <div className="right-content">
          <span className="wishlist">WISHLIST(0)</span>
          <span className="bag">BAG(0)</span>
          {/* Toggle button for mobile */}
          <div className="toggle-button" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
            <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          </div>
        </div>
      </div>
      {/* Navbar Section */}
      <div className={`navbar ${menuOpen ? "open" : ""}`}>
        {navbar.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${isMenuItemActive(item.id) ? "active" : ""}`}
            onClick={() => handleMenuItemClick(item.id)}
          >
            {item.name}
            {isMenuItemActive(item.id) && <img src={star} alt="star" className="star" />}
            {item.child && isMenuItemActive(item.id) && (
              <div className="dropdown">
                {item.child.map((childItem) => (
                  <div
                    key={childItem.id}
                    className="dropdown-item"
                  >
                    {childItem.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default NavBar;

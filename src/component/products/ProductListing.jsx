import React, { useEffect, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import "./ProductListing.css";
import rightArrow from "../../assets/right.png";
import leftArrow from "../../assets/left.png";

const ProductListing = () => {
  // State variables
  const [activeCategory, setActiveCategory] = useState("men's clothing");
  const [Product, setProduct] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(true);
  const [loader2, setLoader2] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState([]);

  // Fetching product data and categories on component mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
        setLoader2(false);
        setExpandedDescriptions(Array(res.length).fill(false));
      });
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
        setLoader(false);
      });
  }, []);

  // Function to navigate to the previous product
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : Product.length - 1
    );
  };

  // Function to navigate to the next product
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % Product.length);
  };

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveIndex(0);
  };

  // Function to toggle product description expansion
  const toggleDescription = (index) => {
    const updatedExpandedDescriptions = [...expandedDescriptions];
    updatedExpandedDescriptions[index] = !updatedExpandedDescriptions[index];
    setExpandedDescriptions(updatedExpandedDescriptions);
  };

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="listing__container">
      <div className="wrapper">
        <div className="wrapper__heading">
          <h2>New Products</h2>
        </div>
        <div className="carousel-buttons">
          <button className="carousel-button" onClick={handlePrev}>
            <img src={leftArrow} alt="Left Carousel Button" />
          </button>
          <button className="carousel-button" onClick={handleNext}>
            <img src={rightArrow} alt="Right Carousel Button" />
          </button>
        </div>
      </div>
      <div className="listing__wrapper">
        <div className="sidebar">
          {loader
            ? "Please Wait..."
            : Categories.map((category) => (
                <div
                  key={category}
                  className={`sidebar-item ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {capitalizeFirstLetter(category)}
                </div>
              ))}
        </div>
        <div className="product-carousel">
          {loader2 ? (
            "Please Wait"
          ) : (
            <>
              {Product.slice(activeIndex, activeIndex + 3).map(
                (product, index) => (
                  <div key={index} className="product-card">
                    <div className="product-image-container">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="product-image"
                      />
                      <button className="add-to-cart-button">
                        <LuArrowUpRight />
                      </button>
                    </div>
                    <h2 className="product-title">{product.title}</h2>
                    {expandedDescriptions[index] ? (
                      <>
                        <p className="product-desc">
                          {product.description}
                          <button
                            onClick={() => toggleDescription(index)}
                            className="see-button"
                          >
                            See Less
                          </button>
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="product-desc">
                          {product.description.slice(0, 100)}...
                          <button
                            onClick={() => toggleDescription(index)}
                            className="see-button"
                          >
                            See More
                          </button>
                        </p>
                      </>
                    )}
                    <p className="product-price">${product.price}</p>
                  </div>
                )
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [orderCount, setOrderCount] = useState(5); // Example count, replace with dynamic value if needed
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
    // Add search functionality here
  };

  return (
    <div className="header">
      <h1 className="header-title">Amir Chicken </h1>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
      <div className="header-icons">
        <FaUserCircle size={24} title="Profile" />
        <div className="cart-icon">
          <FaShoppingCart size={24} title="Orders" />
          <span className="order-count">{orderCount}</span>
        </div>
      </div>
      <div className="header-buttons">
        <Link to="/add-shop" className="btn btn-success">
          Add Shop
        </Link>
        <Link to="/add-delivery-boy" className="btn btn-primary ms-3">
          Add Delivery Boy
        </Link>
      </div>
    </div>
  );
};

export default Header;

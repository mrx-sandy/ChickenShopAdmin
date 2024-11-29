import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUserCircle, FaBars } from "react-icons/fa";

const Header = () => {
  const [orderCount, setOrderCount] = useState(5); // Example count, replace with dynamic value if needed
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
    // Add search functionality here
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="header-top">
        {/* <h1 className="header-title">Amir Chicken</h1> */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars size={24} />
        </button>
      </div>
      <div className={`header-content ${menuOpen ? "open" : ""}`}>
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
  <Link to="/profile" className="profile-link">
    <FaUserCircle size={28} title="Profile" />
  </Link>
  <div className="cart-icon">
    <Link to="/total-orders">
      <FaShoppingCart size={24} title="Orders" />
      <span className="order-count">{orderCount}</span>
    </Link>
  </div>
</div>

        <div className="header-buttons">
          <Link to="/add-shop" className="btn btn-success">
            Add Shop
          </Link>
          <Link to="/add-delivery-boy" className="btn btn-primary">
            Add Delivery Boy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

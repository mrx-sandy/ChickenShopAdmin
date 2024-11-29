import React, { useState } from "react";
import "./Sidebar.css";
import { FaTachometerAlt, FaShoppingCart, FaBox, FaClock, FaTimes, FaChartLine, FaPlus, FaStoreAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to toggle sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaTachometerAlt />}
      </button>
      <h2 className="sidebar-title">{isOpen && "Amir Chicken"}</h2>
      <ul className="sidebar-links">
        <li>
          <Link to="/dashboard">
            <FaTachometerAlt className="icon" /> {isOpen && "Dashboard"}
          </Link>
        </li>
        <li>
          <Link to="/new-order">
            <FaShoppingCart className="icon" /> {isOpen && "New Order"}
          </Link>
        </li>
        <li>
          <Link to="/total-product">
            <FaBox className="icon" /> {isOpen && "Total Product"}
          </Link>
        </li>
        <li>
          <Link to="/pending-order">
            <FaClock className="icon" /> {isOpen && "Pending Order"}
          </Link>
        </li>
        <li>
          <Link to="/rejected-order">
            <FaTimes className="icon" /> {isOpen && "Rejected Order"}
          </Link>
        </li>
        <li>
          <Link to="/daily-sale">
            <FaChartLine className="icon" /> {isOpen && "Daily Sale"}
          </Link>
        </li>
        <li>
          <Link to="/add-product">
            <FaPlus className="icon" /> {isOpen && "Add Product"}
          </Link>
        </li>
        <li>
          <Link to="/add-shop">
            <FaStoreAlt className="icon" /> {isOpen && "Add Shop"}
          </Link>
        </li>
        <li>
          <Link to="/total-shops">
            <FaStoreAlt className="icon" /> {isOpen && "Total Shops"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

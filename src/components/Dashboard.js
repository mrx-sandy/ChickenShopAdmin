import React from "react";
import Card from "./Card";
import { FaHome, FaBox, FaListAlt, FaClock, FaCalendarAlt, FaPlus, FaShopify, FaCogs } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const cards = [
    { title: "Dashboard", description: "View your stats and metrics.", icon: <FaHome /> },

    { title: "New Order", description: "Manage your account Orders.", icon: <FaBox /> },
    { title: "Total Product", description: "Customize your product.", icon: <FaCogs /> },
    { title: "Pending Orders", description: "Find helpful pending orders.", icon: <FaClock /> },
    { title: "Daily Sale", description: "Manage your daily sales.", icon: <FaCalendarAlt /> },
    { title: "Add Product", description: "Manage your add product.", icon: <FaPlus /> },
    { title: "Add Shop / Delivery Boy", description: "Manage your shop.", icon: <FaShopify /> },
    { title: "Total Shops", description: "Manage your total shops.", icon: <FaListAlt /> },
    { title: "Product Master", description: "Manage your product master.", icon: <FaCogs /> },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-cards">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} icon={card.icon} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

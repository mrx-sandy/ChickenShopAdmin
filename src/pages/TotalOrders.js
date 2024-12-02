import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import "./TotalOrders.css";

const TotalOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: "Omkar", pin: "3242", status: "Active" },
    { id: 2, name: "Rohit", pin: "6576", status: "Active" },
    { id: 3, name: "Adi", pin: "6555", status: "Active" },
    { id: 4, name: "Mohit", pin: "5332", status: "Active" },
    { id: 5, name: "DEMO", pin: "DEMO", status: "Deactive" },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const navigate = useNavigate();

  const toggleStatus = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id
          ? { ...order, status: order.status === "Active" ? "Deactive" : "Active" }
          : order
      )
    );
  };

  const handleView = (id) => {
    navigate(`/order-details/${id}`); // Navigate to OrderDetails page
  };

  const handleEdit = (id) => {
    const selectedOrder = orders.find((order) => order.id === id);
    navigate("/add-delivery-boy", { state: { orderData: selectedOrder } });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || order.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="total-orders-container">
      <div className="tablename">Total Delivery Boys</div>
      {/* Search and Filter */}
      <div className="header-row">
        <input
          type="text"
          placeholder="Search by name"
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="filter-dropdown"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Deactive">Deactive</option>
        </select>
      </div>
      {/* Table */}
      <table className="orders-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>PIN</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.name}</td>
              <td>{order.pin}</td>
              <td>
                <button
                  className={`status-btn ${order.status.toLowerCase()}`}
                  onClick={() => toggleStatus(order.id)}
                >
                  {order.status}
                </button>
              </td>
              <td className="actions">
                <button
                  className="icon-btn view-btn"
                  onClick={() => handleView(order.id)}
                  title="View"
                >
                  <FaEye />
                </button>
                <button
                  className="icon-btn edit-btn"
                  onClick={() => handleEdit(order.id)}
                  title="Edit"
                >
                  <FaEdit />
                </button>
                <button
                  className="icon-btn delete-btn"
                  onClick={() => handleDelete(order.id)}
                  title="Delete"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="pagination">
        <button>←</button>
        <span>1–150</span>
        <button>→</button>
      </div>
    </div>
  );
};

export default TotalOrders;

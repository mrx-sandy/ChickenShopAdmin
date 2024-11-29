import React, { useState } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import "./TotalOrders.css";

const TotalOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: "Chicken Biryani", quantity: 2, rate: 250, discount: 10 },
    { id: 2, name: "Grilled Chicken", quantity: 1, rate: 400, discount: 15 },
    { id: 3, name: "Butter Naan", quantity: 4, rate: 50, discount: 5 },
  ]);

  const handleRemove = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const handleQuantityChange = (id, increment) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id
          ? { ...order, quantity: Math.max(1, order.quantity + increment) }
          : order
      )
    );
  };

  const calculateDiscountedPrice = (rate, discount, quantity) => {
    const discountedRate = rate - (rate * discount) / 100;
    return (discountedRate * quantity).toFixed(2);
  };

  return (
    <div className="total-orders">
      <h1 className="table-title">Total Orders</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Discounted Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.name}</td>
              <td>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(order.id, -1)}
                    title="Decrease Quantity"
                  >
                    <FaMinus />
                  </button>
                  <span className="quantity-value">{order.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(order.id, 1)}
                    title="Increase Quantity"
                  >
                    <FaPlus />
                  </button>
                </div>
              </td>
              <td>₹{order.rate.toFixed(2)}</td>
              <td>
                ₹
                {calculateDiscountedPrice(
                  order.rate,
                  order.discount,
                  order.quantity
                )}
              </td>
              <td>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(order.id)}
                  title="Remove Product"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TotalOrders;

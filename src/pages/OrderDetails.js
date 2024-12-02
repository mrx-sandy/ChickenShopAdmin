import React from "react";
import PropTypes from "prop-types";
import "./OrderDetails.css";

const OrderDetails = ({ orderData }) => {
  if (!orderData) {
    return <div className="order-details-container">No order data available.</div>;
  }

  const {
    customerName = "N/A",
    date = "N/A",
    orderMenu = [],
    total = 0,
    shopName = "N/A",
    orderId = "N/A",
    status = "Unknown",
    deliveryBoy = {},
  } = orderData;

  const {
    name: deliveryBoyName = "N/A",
    pin = "N/A",
    orderId: deliveryOrderId = "N/A",
    shippingMethod = "N/A",
    paymentMethod = "N/A",
  } = deliveryBoy;

  return (
    <div className="order-details-container">
      {/* Customer Section */}
      <div className="section customer">
        <h2>Customer Details</h2>
        <p>
          <strong>Name:</strong> {customerName}
        </p>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <div className="order-menu">
          <h3>Order Menu</h3>
          {orderMenu.length > 0 ? (
            orderMenu.map((item, index) => (
              <p key={index}>
                {item.name} - Rs.{item.price}
              </p>
            ))
          ) : (
            <p>No items in the order menu.</p>
          )}
          <p className="total">
            <strong>Total:</strong> Rs.{total}
          </p>
        </div>
      </div>

      {/* Shop Section */}
      <div className="section shop">
        <h2>Shop Details</h2>
        <p>
          <strong>Name:</strong> {shopName}
        </p>
        <p>
          <strong>Order ID:</strong> {orderId}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={`status ${status.toLowerCase()}`}>{status}</span>
        </p>
      </div>

      {/* Delivery Boy Section */}
      <div className="section delivery">
        <h2>Delivery Boy Details</h2>
        <p>
          <strong>Name:</strong> {deliveryBoyName}
        </p>
        <p>
          <strong>Pin:</strong> {pin}
        </p>
        <p>
          <strong>Order ID:</strong> {deliveryOrderId}
        </p>
        <p>
          <strong>Shipping Method:</strong> {shippingMethod}
        </p>
        <p>
          <strong>Payment Method:</strong> {paymentMethod}
        </p>
      </div>
    </div>
  );
};

// PropTypes for type-checking
OrderDetails.propTypes = {
  orderData: PropTypes.shape({
    customerName: PropTypes.string,
    date: PropTypes.string,
    orderMenu: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
      })
    ),
    total: PropTypes.number,
    shopName: PropTypes.string,
    orderId: PropTypes.string,
    status: PropTypes.string,
    deliveryBoy: PropTypes.shape({
      name: PropTypes.string,
      pin: PropTypes.string,
      orderId: PropTypes.string,
      shippingMethod: PropTypes.string,
      paymentMethod: PropTypes.string,
    }),
  }),
};

export default OrderDetails;

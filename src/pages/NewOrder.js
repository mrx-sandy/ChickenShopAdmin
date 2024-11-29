import React from "react";
import "./NewOrder.css";

const products = [
  {
    id: 1,
    name: "Egg",
    price: "100 / 10 p",
    image: "https://via.placeholder.com/150/FFCC00", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Chicken",
    price: "144 / 500gm",
    image: "https://via.placeholder.com/150/FF6600", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Chicken Wing",
    price: "144 / 500gm",
    image: "https://via.placeholder.com/150/FF4500", // Replace with actual image URL
  },
  {
    id: 4,
    name: "1 Full Chicken Curry Cut",
    price: "144 / 500gm",
    image: "https://via.placeholder.com/150/FF3300", // Replace with actual image URL
  },
  {
    id: 5,
    name: "Boneless Chicken",
    price: "144 / 500gm",
    image: "https://via.placeholder.com/150/FF2200", // Replace with actual image URL
  },
];

const NewOrder = () => {
  return (
    <div className="new-order">
      <h1 className="new-order-title">New Order</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
            </div>
            <button className="edit-button">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewOrder;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AddDeliveryBoy.css";

const AddDeliveryBoy = () => {
  const location = useLocation();
  const { orderData } = location.state || {};

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    nationalID: "",
    vehicleNumber: "",
    vehicleType: "",
    emergencyContact: "",
    pinCode: "",
  });

  useEffect(() => {
    if (orderData) {
      setFormData({
        fullName: orderData.name,
        pinCode: orderData.pin,
        // Populate other fields as needed
        contactNumber: "",
        email: "",
        nationalID: "",
        vehicleNumber: "",
        vehicleType: "",
        emergencyContact: "",
      });
    }
  }, [orderData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.contactNumber ||
      !formData.email ||
      !formData.vehicleNumber ||
      !formData.vehicleType
    ) {
      alert("Please fill in all the required fields!");
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <div className="delivery-form-container">
      <h2>{orderData ? "Edit Delivery Boy" : "Add Delivery Boy"}</h2>
      <form className="delivery-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="nationalID"
            placeholder="National ID/ Passport Number"
            value={formData.nationalID}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="vehicleNumber"
            placeholder="Vehicle Number"
            value={formData.vehicleNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="vehicleType"
            placeholder="Vehicle Type"
            value={formData.vehicleType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="emergencyContact"
            placeholder="Emergency Contact"
            value={formData.emergencyContact}
            onChange={handleChange}
          />
          <input
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            value={formData.pinCode}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDeliveryBoy;

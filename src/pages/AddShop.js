import React, { useState } from "react";
import "./AddShop.css";

const AddShop = () => {
  const [shopDetails, setShopDetails] = useState({
    name: "",
    mobile: "",
    address: "",
    openingHours: "",
    shopType: "",
    facilities: [],
    image: null,
  });

  const [errors, setErrors] = useState({});

  const handleShopSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const validationErrors = {};
    if (!shopDetails.name) validationErrors.name = "Shop Name is required";
    if (!shopDetails.mobile) validationErrors.mobile = "Mobile number is required";
    if (!/^\d{10}$/.test(shopDetails.mobile)) validationErrors.mobile = "Enter a valid 10-digit number";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Shop details:", shopDetails);
    alert("Shop added successfully!");
    setErrors({});
  };

  const handleFileChange = (e) => {
    setShopDetails({ ...shopDetails, image: e.target.files[0] });
  };

  const handleCheckboxChange = (facility) => {
    setShopDetails((prev) => {
      const facilities = prev.facilities.includes(facility)
        ? prev.facilities.filter((f) => f !== facility)
        : [...prev.facilities, facility];
      return { ...prev, facilities };
    });
  };

  return (
    <div className="container mt-3">
      <h2>Add Chicken Shop</h2>
      <form onSubmit={handleShopSubmit}>
        {/* Shop Name */}
        <div className="form-group-row">
          <label className="form-label">Shop Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={shopDetails.name}
            onChange={(e) => setShopDetails({ ...shopDetails, name: e.target.value })}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        {/* Mobile Number */}
        <div className="form-group-row">
          <label className="form-label">Mobile Number</label>
          <input
            type="text"
            className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
            value={shopDetails.mobile}
            onChange={(e) => setShopDetails({ ...shopDetails, mobile: e.target.value })}
          />
          {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
        </div>

        {/* Address */}
        <div className="form-group-row">
          <label className="form-label">Shop Address</label>
          <textarea
            className="form-control"
            value={shopDetails.address}
            onChange={(e) => setShopDetails({ ...shopDetails, address: e.target.value })}
            rows="2"
          ></textarea>
        </div>

        {/* Opening Hours */}
        <div className="form-group-row">
          <label className="form-label">Opening Hours</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., 9:00 AM - 9:00 PM"
            value={shopDetails.openingHours}
            onChange={(e) => setShopDetails({ ...shopDetails, openingHours: e.target.value })}
          />
        </div>

        {/* Shop Type */}
        <div className="form-group-row">
          <label className="form-label">Shop Type</label>
          <select
            className="form-select"
            value={shopDetails.shopType}
            onChange={(e) => setShopDetails({ ...shopDetails, shopType: e.target.value })}
          >
            <option value="">Select Type</option>
            <option value="Retail">Retail</option>
            <option value="Wholesale">Wholesale</option>
          </select>
        </div>

        {/* Facilities */}
        <div className="form-group-row">
          <label className="form-label">Facilities</label>
          <div className="form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              value="Home Delivery"
              onChange={() => handleCheckboxChange("Home Delivery")}
            />
            <label className="form-check-label">Home Delivery</label>
          </div>
          <div className="form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              value="Parking"
              onChange={() => handleCheckboxChange("Parking")}
            />
            <label className="form-check-label">Parking</label>
          </div>
          <div className="form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              value="Card Payment"
              onChange={() => handleCheckboxChange("Card Payment")}
            />
            <label className="form-check-label">Card Payment</label>
          </div>
        </div>

        {/* Upload Shop Image */}
        <div className="form-group-row">
          <label className="form-label">Upload Shop Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
          />
        </div>

        <button className="btn btn-success" type="submit">
          Add Shop
        </button>
      </form>
    </div>
  );
};

export default AddShop;

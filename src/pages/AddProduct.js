import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({ name: '', price: '', category: '' });
  const [shopDetails, setShopDetails] = useState({ name: '', mobile: '' });
  const [deliveryBoyDetails, setDeliveryBoyDetails] = useState({
    name: '',
    mobile: '',
    bikeNumber: '',
    license: '',
    pinCode: '',
    address: '',
    otp: '',
    otpVerified: ''
  });

  const handleProductSubmit = (e) => {
    e.preventDefault();
    console.log('Product added:', product);
  };

  const handleShopSubmit = (e) => {
    e.preventDefault();
    console.log('Shop added:', shopDetails);
    // Send OTP to the delivery boy (You can simulate OTP logic here)
    const otp = Math.floor(100000 + Math.random() * 900000);  // Simulating OTP generation
    alert(`OTP sent to Delivery Boy: ${otp}`);
    setDeliveryBoyDetails({ ...deliveryBoyDetails, otp });
  };

  const handleDeliveryBoySubmit = (e) => {
    e.preventDefault();
    if (deliveryBoyDetails.otp === deliveryBoyDetails.otpVerified) {
      console.log('OTP verified, Delivery Boy can now start the map');
      // Add map display logic here
    } else {
      alert('OTP verification failed');
    }
  };

  return (
    <div className="container mt-3">
      <h1>Add Product</h1>
      <form onSubmit={handleProductSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setProduct({ ...product, category: e.target.value })}
          />
        </div>
        <button className="btn btn-primary">Add Product</button>
      </form>

      <h2 className="mt-5">Shop Details</h2>
      <form onSubmit={handleShopSubmit}>
        <div className="mb-3">
          <label className="form-label">Shop Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setShopDetails({ ...shopDetails, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Shop Mobile Number</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setShopDetails({ ...shopDetails, mobile: e.target.value })}
          />
        </div>
        <button className="btn btn-success">Add Shop</button>
      </form>

      <h2 className="mt-5">Delivery Boy Details</h2>
      <form onSubmit={handleDeliveryBoySubmit}>
        <div className="mb-3">
          <label className="form-label">Delivery Boy Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDeliveryBoyDetails({ ...deliveryBoyDetails, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Delivery Boy Mobile Number</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDeliveryBoyDetails({ ...deliveryBoyDetails, mobile: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Bike Number</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDeliveryBoyDetails({ ...deliveryBoyDetails, bikeNumber: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">License Number</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDeliveryBoyDetails({ ...deliveryBoyDetails, license: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Pin Code</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDeliveryBoyDetails({ ...deliveryBoyDetails, pinCode: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDeliveryBoyDetails({ ...deliveryBoyDetails, address: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter OTP</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDeliveryBoyDetails({ ...deliveryBoyDetails, otpVerified: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" type="submit">Verify OTP and Start Map</button>
      </form>
    </div>
  );
};

export default AddProduct;

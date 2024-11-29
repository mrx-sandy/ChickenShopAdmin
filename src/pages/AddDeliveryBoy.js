import React, { useState } from 'react';

const AddDeliveryBoy = () => {
  const [deliveryBoyDetails, setDeliveryBoyDetails] = useState({
    name: '',
    mobile: '',
    bikeNumber: '',
    license: '',
    pinCode: '',
    address: '',
    otp: '',
    otpVerified: '',
  });

  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);

  const validateForm = () => {
    const fieldErrors = {};
    if (!deliveryBoyDetails.name.trim()) fieldErrors.name = 'Name is required.';
    if (!deliveryBoyDetails.mobile.trim() || !/^\d{10}$/.test(deliveryBoyDetails.mobile))
      fieldErrors.mobile = 'Enter a valid 10-digit mobile number.';
    if (!deliveryBoyDetails.bikeNumber.trim()) fieldErrors.bikeNumber = 'Bike number is required.';
    if (!deliveryBoyDetails.license.trim()) fieldErrors.license = 'License is required.';
    if (!deliveryBoyDetails.pinCode.trim() || !/^\d{6}$/.test(deliveryBoyDetails.pinCode))
      fieldErrors.pinCode = 'Enter a valid 6-digit pin code.';
    if (!deliveryBoyDetails.address.trim()) fieldErrors.address = 'Address is required.';
    if (!otpSent) fieldErrors.otp = 'Send OTP before submitting.';
    return fieldErrors;
  };

  const handleDeliveryBoySubmit = (e) => {
    e.preventDefault();
    const fieldErrors = validateForm();
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
    } else if (deliveryBoyDetails.otp === deliveryBoyDetails.otpVerified) {
      alert('Delivery Boy added successfully!');
      setDeliveryBoyDetails({
        name: '',
        mobile: '',
        bikeNumber: '',
        license: '',
        pinCode: '',
        address: '',
        otp: '',
        otpVerified: '',
      });
      setErrors({});
      setOtpSent(false);
    } else {
      alert('OTP verification failed');
    }
  };

  const sendOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    alert(`OTP sent: ${otp}`);
    setDeliveryBoyDetails({ ...deliveryBoyDetails, otp });
    setOtpSent(true);
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: '30px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const formHeadingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '1.5rem',
    color: '#333',
  };

  const rowStyle = {
    display: 'flex',
    gap: '15px',
    marginBottom: '15px',
  };

  const inputStyle = {
    flex: '1',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '0.9rem',
    marginTop: '5px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const otpButtonStyle = {
    ...buttonStyle,
    backgroundColor: otpSent ? '#6c757d' : '#ffc107',
    cursor: otpSent ? 'not-allowed' : 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2 style={formHeadingStyle}>Add Delivery Boy</h2>
      <form onSubmit={handleDeliveryBoySubmit}>
        <div style={rowStyle}>
          <input
            type="text"
            style={inputStyle}
            placeholder="Delivery Boy Name"
            value={deliveryBoyDetails.name}
            onChange={(e) =>
              setDeliveryBoyDetails({ ...deliveryBoyDetails, name: e.target.value })
            }
          />
          <input
            type="text"
            style={inputStyle}
            placeholder="Mobile Number"
            value={deliveryBoyDetails.mobile}
            onChange={(e) =>
              setDeliveryBoyDetails({ ...deliveryBoyDetails, mobile: e.target.value })
            }
          />
        </div>
        <div style={rowStyle}>
          <input
            type="text"
            style={inputStyle}
            placeholder="Bike Number"
            value={deliveryBoyDetails.bikeNumber}
            onChange={(e) =>
              setDeliveryBoyDetails({ ...deliveryBoyDetails, bikeNumber: e.target.value })
            }
          />
          <input
            type="text"
            style={inputStyle}
            placeholder="License"
            value={deliveryBoyDetails.license}
            onChange={(e) =>
              setDeliveryBoyDetails({ ...deliveryBoyDetails, license: e.target.value })
            }
          />
        </div>
        <div style={rowStyle}>
          <input
            type="text"
            style={inputStyle}
            placeholder="Pin Code"
            value={deliveryBoyDetails.pinCode}
            onChange={(e) =>
              setDeliveryBoyDetails({ ...deliveryBoyDetails, pinCode: e.target.value })
            }
          />
          <input
            type="text"
            style={inputStyle}
            placeholder="Address"
            value={deliveryBoyDetails.address}
            onChange={(e) =>
              setDeliveryBoyDetails({ ...deliveryBoyDetails, address: e.target.value })
            }
          />
        </div>
        <div style={rowStyle}>
          <button
            type="button"
            style={otpButtonStyle}
            onClick={sendOTP}
            disabled={otpSent}
          >
            {otpSent ? 'OTP Sent' : 'Send OTP'}
          </button>
          <input
            type="text"
            style={inputStyle}
            placeholder="Enter OTP"
            value={deliveryBoyDetails.otpVerified}
            onChange={(e) =>
              setDeliveryBoyDetails({ ...deliveryBoyDetails, otpVerified: e.target.value })
            }
          />
        </div>
        <button style={buttonStyle} type="submit">
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default AddDeliveryBoy;

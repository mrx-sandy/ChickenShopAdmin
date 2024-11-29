import React, { useState } from "react";
import "./AdvancedLoginPage.css";

const AdvancedLoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [notification, setNotification] = useState("");

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", mobile: "", email: "", password: "", otp: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendOtp = () => {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000);
    alert(`Your OTP is: ${generatedOtp}`);
    setFormData({ ...formData, otp: generatedOtp });
    setOtpSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert("Logged in successfully!");
    } else {
      setNotification("Account created successfully!");
      setTimeout(() => setNotification(""), 3000);
    }
    setFormData({ name: "", mobile: "", email: "", password: "", otp: "" });
    setOtpSent(false);
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        {!isLogin && (
          <>
            <div className="otp-section">
              <input
                type="text"
                placeholder="Enter OTP"
                name="otp"
                value={formData.otp}
                onChange={handleInputChange}
                required
                disabled={!otpSent}
              />
              <button
                type="button"
                className="otp-btn"
                onClick={sendOtp}
                disabled={otpSent}
              >
                {otpSent ? "OTP Sent" : "Send OTP"}
              </button>
            </div>
          </>
        )}
        <button className="submit-btn" type="submit">
          {isLogin ? "Log In" : "Sign Up"}
        </button>
      </form>
      <p className="toggle-text" onClick={toggleMode}>
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
      </p>
      <p className="toggle-text" onClick={() => alert("Password recovery coming soon!")}>
        Forgot Password?
      </p>
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default AdvancedLoginPage;

import React, { useState } from "react";
import "../assets/css/LoginPage.css";

const LoginPage = () => {
  const [selectedLogin, setSelectedLogin] = useState("admin");

  const handleLoginSelection = (loginType) => {
    setSelectedLogin(loginType);
  };

  return (
    <div className="login-page-container">
      <div className="login-wrapper">
        <div className="login-header">
          <h1>Aaradhyadharma Web Solutions</h1>
          <p className="login-subtitle">Please select your login type</p>
        </div>

        {/* Login Tabs */}
        <div className="login-options">
          <button
            className={`login-option-btn ${selectedLogin === "admin" ? "active" : ""}`}
            onClick={() => handleLoginSelection("admin")}
          >
            Admin Login
          </button>
          <button
            className={`login-option-btn ${selectedLogin === "employee" ? "active" : ""}`}
            onClick={() => handleLoginSelection("employee")}
          >
            Employee Login
          </button>
          <button
            className={`login-option-btn ${selectedLogin === "customer" ? "active" : ""}`}
            onClick={() => handleLoginSelection("customer")}
          >
            Customer Login
          </button>
        </div>

        {/* Login Form */}
        <div className="login-form">
          <form>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Enter your password" />
            </div>

            <button type="submit" className="login-submit-btn">
              Login as {selectedLogin}
            </button>
          </form>

          <p className="forgot-password">
            Forgot your password? <a href="/reset-password">Reset it here</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

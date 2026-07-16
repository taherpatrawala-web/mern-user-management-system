import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary Login
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <div className="overlay">
            <h1>User Management</h1>
            <p>
              Secure User Management Dashboard built with React JS,
              Express, MongoDB and Node JS.
            </p>
          </div>
        </div>

        <div className="login-right">
          <h2>Welcome Back</h2>
          <p className="subtitle">
            Sign in to continue to your dashboard
          </p>

          <form onSubmit={handleLogin}>
            <div className="input-group-custom">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group-custom">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="remember-row">
              <label>
                <input type="checkbox" /> Remember Me
              </label>

              <span className="forgot-password">
                Forgot Password?
              </span>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="demo-credentials">
            <p>Email: admin@gmail.com</p>
            <p>Password: admin123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
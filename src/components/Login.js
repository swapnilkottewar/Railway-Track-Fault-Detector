// File: src/components/Login.js
import React, { useState } from "react";
import "../styles/login1.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      window.location.href = "/detector";
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div
      className="login-wrapper"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('/images/train6.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="login-container">
        <h1 className="login-h">Login Form</h1>

        <div className="login-input">
          <label htmlFor="username" className="login-label">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="login-input1"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="login-input">
          <label htmlFor="password" className="login-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="login-input1"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="login-button">
          <button
            onClick={handleLogin}
            className="btn btn-info"
            disabled={!username || !password}
          >
            Login
          </button>
        </div>

        <div className="create-account text-center">
          <p className="login-par">Don't have an account?</p>
          <a href="/" className="btn rounded-pill btn-success">
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

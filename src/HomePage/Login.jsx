import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your authentication logic goes here
    // For simplicity, I'm just redirecting to the player page
    navigate("/player"); // Use navigate instead of history.push
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Login to Your Account</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

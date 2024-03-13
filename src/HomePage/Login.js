import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login actions here if needed
    // For now, just navigate to the main page
    navigate("/"); // Assuming the main page route is "/"
  };

  return (
    <div className="login">
      {/* Spotify Logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-logo"
      />
      {/* Login with spotify */}
      <button onClick={handleLogin}>Login with SPOTIFY</button>
    </div>
  );
}

export default Login;

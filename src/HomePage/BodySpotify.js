import React from "react";
import "./BodySpotify.css";

const BodySpotify = () => {
  const handleLoginButtonClick = () => {
    alert("Login for Spotify account.");
  };
  return (
    <div className="navbar">
      <div className="navbar_objects">
        <button className="login-button" onClick={handleLoginButtonClick}>
          Account Login
        </button>
      </div>
    </div>
  );
};

export default BodySpotify;

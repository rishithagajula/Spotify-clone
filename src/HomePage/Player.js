import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Home({ spotify }) {
  const handleLoginButtonClick = () => {
    alert("Login for Spotify account.");
  };
  return (
    <div className="player">
      <div className="player_body">
        <div className="navbar">
          <div className="navbar_objects">
            <button className="login-button" onClick={handleLoginButtonClick}>
              Account Login
            </button>
          </div>
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default Home;

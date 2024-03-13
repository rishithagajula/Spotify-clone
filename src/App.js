import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Player from "./HomePage/Player";
import ParentComponent from "./HomePage/ParentComponent";
import Home from "./HomePage/Home";
import Playlist from "./HomePage/Playlist";
import Login from "./HomePage/Login";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
      </Routes>
      <Player/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<ParentComponent />} />
        <Route path="/yourLibrary" element={<Playlist />} />
      </Routes>
    </Router>
  );
}

export default App;


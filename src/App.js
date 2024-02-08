import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Player from "./HomePage/Player";
import ParentComponent from "./HomePage/ParentComponent";
import Home from "./HomePage/Home";
import YourLibrary from "./HomePage/YourLibrary";

function App() {
  return (
    <Router>
      <Player/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<ParentComponent />} />
        <Route path="/yourLibrary" element={<YourLibrary/>} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./js/login";
import Home from "./js/home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

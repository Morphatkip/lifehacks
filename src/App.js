import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Home from "./Pages/home";
import Discipline from "./Pages/discpline";
import Freelancing from "./Pages/Freelancing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discipline" element={<Discipline />} />
        <Route path="/Freelancing" element={<Freelancing />} />
      </Routes>
    </Router>
  );
}

export default App;

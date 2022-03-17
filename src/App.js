import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Home from "./Pages/home";
import Discipline from "./Pages/discpline";
import Freelancing from "./Pages/Freelancing";
import Privacy from "./Pages/Privacy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discipline" element={<Discipline />} />
        <Route path="/Freelancing" element={<Freelancing />} />
        <Route path="/Privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Home from "./Pages/home";
import Discipline from "./Pages/discpline";
import Freelancing from "./Pages/Freelancing";
import Privacy from "./Pages/Privacy";
import Account from "./Pages/Account";
import Login from "./trial/Signin";
import Signup from "./trial/Signup";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { UserContextProvider, useUserContext } from "./trial/userContext";
import Auth from "./trial/auth";
function App() {
  const { loading, error, user } = useUserContext;

  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discipline" element={<Discipline />} />
          <Route path="/Freelancing" element={<Freelancing />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;

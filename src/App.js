import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import Home from "./Pages/home";
import Discipline from "./Pages/discpline";
import Freelancing from "./Pages/Freelancing";
import Privacy from "./Pages/Privacy";
import Account from "./Pages/Account";
import Login from "./services/Signin";
import Signup from "./services/Signup";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transcription from "./Pages/Transcription";
import "react-toastify/dist/ReactToastify.css";

import { UserContextProvider, useUserContext } from "./services/userContext";
function App() {
  const { isValid } = useUserContext;

  return (
    <Router>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Freelancing" element={<Freelancing />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Account" element={<Account />} />

          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/discipline" element={<Discipline />} />

          <Route path="/Transcription" element={<Transcription />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;

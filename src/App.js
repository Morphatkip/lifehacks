import "bootstrap/dist/css/bootstrap.css";
import Home from "./Pages/home";
import Freelancing from "./Pages/Freelancing";
import Privacy from "./Pages/Privacy";
import Login from "./User/Login";
import Register from "./User/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transcription from "./Pages/Transcription";
import Admin from "./Pages/Admin.js";
import Dashboard from "./Pages/Dashboard";
import Order from "./User/Order";
import NewOrder from "./User/NewOrder";
import SipeedMaix from "./Pages/SipeedMaix";
import Programming from "./Pages/Programming";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Freelancing" element={<Freelancing />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Transcription" element={<Transcription />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/NewOrder" element={<NewOrder />} />
        <Route path="/programming" element={<Programming />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;

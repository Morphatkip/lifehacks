import "bootstrap/dist/css/bootstrap.css";
import Home from "./Pages/home";
import Freelancing from "./Pages/Freelancing";
import Privacy from "./Pages/Privacy";
import Login from "./User/Login";
import Register from "./User/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transcription from "./Pages/Transcription";
import Dashboard from "./Pages/Dashboard";
import Order from "./User/Order";
import NewOrder from "./User/NewOrder";
import Programming from "./Pages/Programming";
import Remo from "./Pages/Remo.jsx";
import ScreeningAnswers from "./Pages/ScreeningAnswers.jsx";
function App() {
  return (
    <Router>
      <Routes>
        {/*  <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Remo />} />
        <Route path="/Freelancing" element={<Freelancing />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Transcription" element={<Transcription />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/NewOrder" element={<NewOrder />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/screening-answers" element={<ScreeningAnswers />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;

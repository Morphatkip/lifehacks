import React, { useState } from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import Reorder from "../images/programming/reorder-option.png";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3></h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>

        <Link to="/Freelancing">Frelancing sites</Link>

        <Link to="/Transcription">Transcription</Link>

        <Link to="/programming">Programming</Link>
        <button onClick={showNavBar} className="nav-btn nav-close-btn">
          Close
        </button>
      </nav>

      <button onClick={showNavBar} className="nav-btn">
        Menu
      </button>
    </header>
  );
}
export default Navbar;

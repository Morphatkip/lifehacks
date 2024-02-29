import React, { useState } from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

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
    <div className="nav-container">
      <div className="d-flex justify-content-between">
        <div className="brand">
          <Link to="/">Firetipsedu</Link>
        </div>

        <header>
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
      </div>
    </div>
  );
}
export default Navbar;

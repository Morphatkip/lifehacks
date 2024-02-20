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
      <header>
        <h3></h3>
        <nav ref={navRef}>
          <Link to="/" className="home">
            Home
          </Link>

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
  );
}
export default Navbar;

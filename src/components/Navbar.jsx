import React, { useState, useRef } from "react";
import Logo from "../assets/images/Logo.png"; // Assuming Logo.png is the path to your logo image
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

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
      <div className="d-flex justify-content-between align-items-center">
        {" "}
        {/* Added align-items-center for vertical alignment */}
        <div className="brand">
          <img src={Logo} alt="Logo" className="logo" />{" "}
          {/* Added logo image */}
          <Link to="/">Firetipsedu</Link>
        </div>
        <header className="nav-list">
          <nav ref={navRef} className="nav-list">
            <Link to="/">Home</Link>
            <Link to="/categories">Categories</Link>
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

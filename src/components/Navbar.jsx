import React, { useState } from "react";
import Logo from "../images/Logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414147059446909"
        crossorigin="anonymous"
      ></script>
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="" />
        <div className="hiddenLinks">
          <Link className="nav-link active" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/Freelancing">
            Frelancing sites
          </Link>
          <Link className="nav-link" to="/Transcription">
            Transcription
          </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link className="nav-link active" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/Freelancing">
          Frelancing sites
        </Link>
        <Link className="nav-link" to="/Transcription">
            Transcription
          </Link>

        {" "}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}
export default Navbar;

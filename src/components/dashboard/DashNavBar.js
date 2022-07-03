import React from "react";
import { Link } from "react-router-dom";
import SignOut from "../SignOut";

const DashNavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand nav-link active" to="/Dashboard">
          Firetipsedu
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <SignOut />
            </li>
            <li className="nav-item">
              <label>
                {" "}
                signed in as <br />
                {props.value}
              </label>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashNavBar;

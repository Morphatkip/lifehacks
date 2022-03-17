import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    // This function will scroll the window to the top
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // for smoothly scrolling
      });
    };

    return (
      <div style={{ backgroundColor: "black" }}>
        <footer className="container bg-dark">
          <div className="pt-5"></div>
          <div className="pt-5"></div>
          <div className="pt-5"></div>
          <p className="float-end">
            <button onClick={scrollToTop}>Back to top</button>
          </p>
          <p>
            &copy; &middot; <Link to="/privacy">Privacy</Link> &middot;{" "}
            <Link to="/privacy">Terms</Link>
          </p>
          <div className="pt-5"></div>
          <div className="pt-5"></div>
          <div className="pt-5"></div>
        </footer>
      </div>
    );
  }
}

export default Footer;

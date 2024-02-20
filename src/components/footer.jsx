import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  // This function will scroll the window to the top
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "black" }}>
        <footer className="container bg-dark text-light py-5">
          <div className="row">
            <div className="col-12 col-md-4">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Firetipsedu
              </p>
            </div>
            <div className="col-12 col-md-4 text-center">
              <button className="btn btn-link" onClick={this.scrollToTop}>
                Back to Top
              </button>
            </div>
            <div className="col-12 col-md-4 text-end">
              <p className="mb-0">
                <Link to="/privacy" className="text-light">
                  Privacy
                </Link>{" "}
                &middot;{" "}
                <Link to="/privacy" className="text-light">
                  Terms
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

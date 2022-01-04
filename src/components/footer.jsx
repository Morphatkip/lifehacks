import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  render() {
    return (
      <footer className="container">
        <p className="float-end">
          <Link to="/">Back to top</Link>
        </p>
        <p>
          &copy; &middot; <Link to="/">Privacy</Link> &middot;{" "}
          <Link to="/">Terms</Link>
        </p>
      </footer>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <head>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414147059446909"
            crossorigin="anonymous"
          ></script>
          <title>Academic aid</title>
        </head>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Freelancing">
                  Frelancing Sites
                </Link>
              </li>
              <li>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    value="submit"
                    onSubmit={this.handleSubmit}
                  >
                    Search
                  </button>
                </form>
              </li>
              <li>
                <label>{this.state.value}</label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

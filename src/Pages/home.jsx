import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Body from "../components/body";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Home;

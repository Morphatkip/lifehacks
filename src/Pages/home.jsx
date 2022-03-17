import React, { Component } from "react";
import Footer from "../components/footer";
import Body from "../components/body";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default Home;

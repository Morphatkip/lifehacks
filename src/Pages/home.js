import React, { Component } from "react";
import Footer from "../components/footer";
import Body from "../components/body";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

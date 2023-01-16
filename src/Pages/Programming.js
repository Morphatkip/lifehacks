import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import ProgrammingBody from "../components/Programming/ProgrammingBody";

function Programming() {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <ProgrammingBody />
      <Footer />
    </div>
  );
}

export default Programming;

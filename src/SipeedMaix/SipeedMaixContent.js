import React from "react";
import Footer from "../components/footer";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import SipeedMaixBody from "./SipeedMaixBody";
import SipeedMaixSideBar from "./SipeedMaixSideBar";

function SipeedMaixContent() {
  return (
    <div>
      <Navbar />
      <SipeedMaixSideBar />
      <SipeedMaixBody />
      <Form />

      <Footer />
    </div>
  );
}

export default SipeedMaixContent;

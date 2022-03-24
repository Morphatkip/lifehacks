import React, { Component } from "react";
import Footer from "../components/footer";
import Body from "../components/body";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import SignIn from "../components/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import Chat from "../components/Chat";
function Home() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <div>
        <Navbar />

        {/*user ? <Chat /> : <SignIn />*/}
        <Body />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

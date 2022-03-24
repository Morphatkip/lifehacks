import React from "react";
import Navbar from "../components/Navbar";
import Rev from "../Transcriptionsites/Rev";
import Scribie from "../Transcriptionsites/Scribie";
import GoTranscribe from "../Transcriptionsites/GoTranscribe";
import TranscribeMe from "../Transcriptionsites/TranscribeMe";
import Allegis from "../Transcriptionsites/Allegis";
import CastingWords from "../Transcriptionsites/CastingWords";
import Speechpad from "../Transcriptionsites/Speechpad";
import SpeakWrite from "../Transcriptionsites/SpeakWrite";
import Form from "../components/Form";
import Footer from "../components/footer";
import transcription from "../images/Transcript/pc1.jpg";

function Transcription() {
  return (
    <div className="bg-dark">
      <Navbar />
      <div style={{ backgroundColor: "black" }}>
        <div className="container pt-5" />
        <div
          style={{
            backgroundImage: `url(${transcription})`,
            backgroundSize: "cover",
          }}
          className="container"
        >
          <div className="px-4 py-5 text-center text-dark">
            {" "}
            <div
              className="col-lg-6 mx-auto lead mb-4"
              style={{ color: "white" }}
            >
              <h1> Best Transcription Sites</h1>
              <p style={{ fontSize: 24 }} className="font-weight-normal">
                <b> Looking for a Transcription job today?</b> Worry no more we
                got you covered by providing you with the top Transcription
                companies that provide transcription jobs for beginners as well
                as those experienced. Have a look at the following companies and
                resolve to make use of the information provided to begin making
                some money by working comfortably at home.
                <hr />
                <p>
                  <b> Best Transcription Companies are Listed Below!!</b>
                </p>
                <p>
                  <b> Explore Now!!</b>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Rev />
      <hr />
      <Scribie />
      <hr />
      <GoTranscribe />
      <hr />
      <TranscribeMe />
      <hr />
      <Allegis />
      <hr />
      <CastingWords />
      <hr />
      <Speechpad />
      <hr />
      <SpeakWrite />
      <hr />
      <Form />
      <hr />
      <Footer />
    </div>
  );
}

export default Transcription;

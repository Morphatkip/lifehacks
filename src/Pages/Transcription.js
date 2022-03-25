import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Introduction from "../Transcriptionsites/Introduction";
import Rev from "../Transcriptionsites/Rev";
import Scribie from "../Transcriptionsites/Scribie";
import GoTranscript from "../Transcriptionsites/GoTranscribe";
import TranscribeMe from "../Transcriptionsites/TranscribeMe";
import Allegis from "../Transcriptionsites/Allegis";
import CastingWords from "../Transcriptionsites/CastingWords";
import Speechpad from "../Transcriptionsites/Speechpad";
import SpeakWrite from "../Transcriptionsites/SpeakWrite";
import Form from "../components/Form";
import Footer from "../components/footer";
import transcription from "../images/Transcript/pc1.jpg";

function Transcription() {
  const IntroductionSection = useRef(null);
  const RevSection = useRef(null);
  const ScribieSection = useRef(null);
  const GoTranscriptSection = useRef(null);
  const TranscribeMeSection = useRef(null);
  const AllegisSection = useRef(null);
  const CastingWordsSection = useRef(null);
  const SpeechpadSection = useRef(null);
  const SpeakWriteSection = useRef(null);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
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
      <div className="container">
        <div className="section section1 bg-light" style={{ width: 1000 }}>
          <ul style={{ color: "blue", fontSize: 17 }}>
            <br />
            <li
              className="link"
              style={{ cursor: "pointer" }}
              onClick={() => scrollDown(IntroductionSection)}
            >
              What is Transcription?
            </li>
            <li
              className="link"
              style={{ cursor: "pointer" }}
              onClick={() => scrollDown(RevSection)}
            >
              Rev
            </li>
            <li
              className="link"
              style={{ cursor: "pointer" }}
              onClick={() => scrollDown(ScribieSection)}
            >
              Scribie
            </li>
            <li
              className="link"
              style={{ cursor: "pointer" }}
              onClick={() => scrollDown(GoTranscriptSection)}
            >
              GoTranscript
            </li>
            <li
              className="link"
              style={{ cursor: "pointer" }}
              onClick={() => scrollDown(TranscribeMeSection)}
            >
              TranscribeMe
            </li>
            <li
              className="nav-item"
              style={{ cursor: "pointer" }}
              onClick={() => scrollDown(AllegisSection)}
            >
              Allegis
            </li>
            <li
              className="link"
              style={{ cursor: "pointer" }}
              onClick={() => scrollDown(CastingWordsSection)}
            >
              CastingWords
            </li>
            <li
              className="link"
              style={{ cursor: "pointer" }}
              onClick={() => scrollDown(SpeechpadSection)}
            >
              Speechpad
            </li>
            <li
              className="link"
              style={{ cursor: "pointer" }}
              onClick={() => scrollDown(SpeakWriteSection)}
            >
              SpeakWrite
            </li>
          </ul>
          <div
            className=" bg-transparent pt-5 section section2"
            ref={IntroductionSection}
          >
            <Introduction />
          </div>
        </div>
        <div className=" bg-transparent  section section2" ref={RevSection}>
          <Rev />
        </div>
        <div>
          <div
            className="bg-transparent pt-5 section section3"
            ref={ScribieSection}
          >
            <Scribie />
          </div>

          <div
            className="bg-transparent pt-5 section section4"
            ref={GoTranscriptSection}
          >
            {" "}
            <GoTranscript />
          </div>

          <div
            className="bg-transparent pt-5 section section5"
            ref={TranscribeMeSection}
          >
            <TranscribeMe />
          </div>

          <div
            className=" bg-transparent pt-5 section section6"
            ref={AllegisSection}
          >
            {" "}
            <Allegis />
          </div>

          <div
            className=" bg-transparent pt-5 section section7"
            ref={CastingWordsSection}
          >
            {" "}
            <CastingWords />
          </div>

          <div
            className=" bg-transparent pt-5 section section8"
            ref={SpeechpadSection}
          >
            {" "}
            <Speechpad />
          </div>

          <div
            className=" bg-transparent pt-5 section section9"
            ref={SpeakWriteSection}
          >
            {" "}
            <SpeakWrite />
          </div>
        </div>
        <br />
        <Form />
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default Transcription;

import speechpad from "../images/Transcript/Speechpad.PNG";
function Speechpad() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6">
          <img src={speechpad} alt="..." className="img-thumbnail"></img>
        </div>
        <div className="col-md-6">
          <h1>Speechpad</h1>
          <p>
            SpeechPad is a website that hires people all over the world to do
            audio transcription / video captioning. They either use Amazon's
            Mechanical Turk or their SpeechPad Work Board to complete their
            transcription assignments. The majority of their business entails
            conducting interviews with insurance companies. Speed's sign-up
            process is quick and easy, taking less than 5 minutes.
          </p>
          <p>
            They offer a number of qualification examinations that a person must
            complete in order to be hired for genuine transcribe work. They
            recently launched a Bonus Program, which allows eligible
            transcriptionists to make more money while working remotely. More
            information about transcribing style guides, transcriber
            requirements, and sample transcribing documents can be found at
            Speechpad.com.
          </p>
          <p>
            <br></br> Click here to apply at
            <a href=" https://www.speechpad.com/worker/jobs/transcribers">
              {" "}
              SpeechPad{" "}
            </a>
            for the best transcription jobs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Speechpad;

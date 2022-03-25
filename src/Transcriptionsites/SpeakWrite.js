import speakwrite from "../images/Transcript/SpeakWrite.PNG";
function SpeakWrite() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6" style={{ fontSize: 19 }}>
          <h1>SpeakWrite</h1>
          <p>
            SpeakWrite is a well-known transcription company that has been in
            business since 1997. People from the United States and Canada can
            use the site. Over 65000 clients from diverse industries, including
            legal, government, and private clients, are served by the
            organization. SpeakWrite has various job selection criteria.
            However, if you are chosen, you will be able to make more than $300
            every month
            <br />
            Apart from that, there are certain basic prerequisites for novices
            in SpeakWrite. To begin, they should be familiar with Microsoft Word
            and how to use advanced formatting capabilities. Also, with 90
            percent accuracy, their ideal writing speed is around 60 words per
            minute. Finally, potential SpeakWrite transcriptionists should be
            fluent in English & possess excellent grammar skills. If you fulfill
            the requirement and pass the test, you'll be accepted.
            <p>
              <br></br> Apply for an online transcription job at
              <a href="https://speakwrite.com/transcription-jobs">
                {" "}
                SpeakWrite{" "}
              </a>
              now!
            </p>
          </p>
        </div>
        <div className="col-md-6">
          <img src={speakwrite} alt="..." className="img-thumbnail"></img>
        </div>
      </div>
    </div>
  );
}

export default SpeakWrite;

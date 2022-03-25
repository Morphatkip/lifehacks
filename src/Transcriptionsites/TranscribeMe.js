import transcribeme from "../images/Transcript/TranscribeMe.PNG";
function TranscribeMe() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6" style={{ fontSize: 19 }}>
          <h1>TranscribeMe</h1>
          <p>
            If you're searching for online transcribing jobs for beginners,
            TranscribeMe is another wonderful alternative. It's one of the
            higher paying remote transcription job providing company The company
            simply pays 25 cents per audio minute, but they divide their labor
            into two- to four-minute segments. As a result, if you only have a
            limited amount of time to devote to transcribing or if you want to
            gain exposure to a wide range of audio materials, the company is a
            good fit.
            <br />
            The platform stands out since it pays significantly more than its
            competitors. You can earn somewhere between $15 and $25 per hour of
            audio work. According to the website, the top earners make around
            $2,500 per month. Furthermore, medical and legal transcribing
            professionals are paid more on TranscribeMe. <br />
            This website is for you if you're college student in need of some
            extra income. TranscribeMe is a free service which does not require
            registration or membership. You can also choose when you'll be
            eligible to work. You could transcribe in your spare time to
            supplement your income. You will, however, be required to complete a
            brief exam to demonstrate your suitability for the position. If you
            pass the exam, you can begin looking for work. You only need to pass
            there test and no cost is required in applying at TranscribeMe
            <br />
            <p>
              {" "}
              <a href=" https://www.transcribeme.com/jobs/"> TranscribeMe </a>
              got you covered with the latest transcription jobs in the market.
            </p>
          </p>
        </div>
        <div className="col-md-6">
          <img src={transcribeme} alt="..." className="img-thumbnail"></img>
        </div>
      </div>
    </div>
  );
}

export default TranscribeMe;

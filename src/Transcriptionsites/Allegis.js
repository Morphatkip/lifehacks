import allegis from "../images/Transcript/Allegis.PNG";
function Allegis() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6">
          <img src={allegis} alt="..." className="img-thumbnail"></img>
        </div>
        <div className="col-md-6" style={{ fontSize: 19 }}>
          <h1>Allegis</h1>
          <p></p>
          <p></p>
          <p>
            Allegis has experience in a variety of fields, including legal and
            insurance transcribing. The company occasionally offers positions
            for new recruits with no previous transcription expertise. All you
            have to do now is keep a watch on various job listings. Allegis does
            not publish wage levels on its website because they are related to
            the customer contract.
          </p>
          <p>
            Furthermore, the amount you receive from transcription assignments
            is determined by how quickly you can perform the task. However,
            according to Glassdoor, hourly pay for transcribing work ranges from
            $2 to $36 per hour, while one Reddit user claims that if you type
            100 or more words per minute, you can expect to reach $15 to $20 per
            hour. It's hard to distinguish the per-hour or per-page rate to a
            per-audio-minute percentage, but you have more options in general.
            <p> Apply today to get the best online transcription job.</p>
            <p>
              <br></br>{" "}
              <a href="https://www.allegistranscription.com/transcription-services/transcription-jobs/">
                {" "}
                Allegis{" "}
              </a>
              wants you to work in their transcription jobs available today.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Allegis;

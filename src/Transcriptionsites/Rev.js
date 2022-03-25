import rev from "../images/Transcript/Rev.PNG";
function Rev() {
  return (
    <div className="container bg-light ">
      <div className="row g-5">
        <div className="col-md-6">
          <img src={rev} alt="..." className="img-thumbnail"></img>
        </div>
        <div className="col-md-6" style={{ fontSize: 19 }}>
          <h1>Rev</h1>
          <p>
            Rev, one of the largest and best transcription companies, always
            appears to be on the search for new recruits.It requires you to pass
            a test prior to getting recruited. This includes the Rev
            transcribing test and a grammar quiz, but it appears to still have
            available jobs. In most cases, you have complete control over your
            schedule and can work as many or as few as you desire.
          </p>
          <p>
            When you sign up, you'll be asked to create a profile that includes
            your work experience. Your application will be reviewed by the
            curation team, and your designer level will be determined. The
            higher your level, the greater your visibility on the platform.
          </p>
          <p>
            If you're looking to get started and have complete flexibility while
            learning and honing your talents, this could be a fantastic option.
            It's also a method to earn some money while trying out online
            transcribing jobs to see whether you like it.
          </p>
          <p>
            <br></br> Visit <a href="https://www.rev.com/"> Rev </a>
            transcription website today to get transcription jobs today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Rev;

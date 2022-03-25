import castingwords from "../images/Transcript/CastingWords.PNG";
function CastingWords() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6" style={{ fontSize: 19 }}>
          <h1>CastingWords</h1>
          <p>
            Casting Words is one of the best transcription companies for people
            in the United States and around the world. You can browse available
            positions on their website's dashboard. You can embrace it once
            you've found one you You can embrace it once you've found one you
            like. Several states and countries are not backed by the United
            Nations. It is not necessary to pay a fee to work as a
            transcriptionist.
            <br />
            Their payment rate ranges from $0.08 to $1 per minute of audio. The
            only stipulation is that you pass the entrance examination. Casting
            Words pays every week via PayPal. If you don't live in the United
            States, this is really a good alternative. You can be working from
            practically anywhere in the globe and take the entrance exam as many
            times as you like.
            <p>
              <br></br> Start earning today by applying to get transcription
              jobs at <a href=" https://castingwords.com/"> CastingWords.</a>
            </p>
          </p>
        </div>
        <div className="col-md-6">
          <img src={castingwords} alt="..." className="img-thumbnail"></img>
        </div>
      </div>
    </div>
  );
}

export default CastingWords;

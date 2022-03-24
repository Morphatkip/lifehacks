import scribie from "../images/Transcript/Scribie.PNG";
function Scribie() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6">
          <h1>Scribie</h1>
          <p>
            Scribie is a renowned transcription company that hire s both
            professional and inexperienced transcriptionists all over the world.
            Scribie pays the least in the industry, but it's a terrific location
            for newbies to learn how to make 6-minute pieces that include phone
            conversations, interview, and speech.
            <br />
            Every file that is to be transcribed has a 2-hour turn - around time
            with Scribie which refers to the time taken to transcribe an audio
            file into a text. Jobs as a Scribie Transcriptionist are really
            convenient. You can work whenever you choose, and you have the
            option of selecting which files to handle. If you don't like a file
            you've chosen, you can move on to the next and claim it.
            <br />
            <br />
            <br />
          </p>
        </div>
        <div className="col-md-6">
          <img src={scribie} alt="..." className="img-thumbnail"></img>
        </div>
      </div>
    </div>
  );
}

export default Scribie;

import toptal from "../images/toptal.PNG";
function Toptal() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5 ">
        <div className="col-md-6 ">
          <img src={toptal} alt="toptal" className="img-thumbnail"></img>
        </div>
        <div className="col-md-6 ">
          <h1>Toptal</h1>
          <p>
            <a href="https://www.toptal.com/">Toptal</a> is a freelance platform
            that links organizations with highly skilled freelance industry
            specialists. Toptal's freelancers range from web developers and
            designers to financial consultants and product managers <br />.
            Applying to Toptal as a freelancer necessitates completing five
            phases of the screening procedure, ranging from a thorough English
            exam to a project review. This method guarantees that only the best
            3% make it to the platform.
            <br />
            After you've completed all of the procedures, you'll have access to
            a variety of job ads from top clients and organizations like
            Motorola and Airbnb. Failure to pass the test, on the other hand,
            will put your application on wait for several months.
            <br />
            TopTracker is a time tracking and invoicing service provided by
            Toptal. Freelancers will benefit from this service.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Toptal;

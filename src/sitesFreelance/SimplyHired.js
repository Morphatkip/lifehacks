import simply from "../images/SimplyHired.PNG";
function SimplyHired() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6">
          <h1>SimplyHired</h1>
          <p>
            SimplyHired is a free job board where businesses can post job
            openings. It also aggregates job postings from across the internet
            onto a single page. The site has a simple user interface that makes
            it simple to search for jobs by category.
          </p>
          <p>
            There are numerous freelance opportunities available in a variety of
            fields, including finance and marketing. To find a specific job,
            simply enter relevant keywords into the search box. Filter the
            results by entering your city, state, or ZIP code to get more
            relevant results.
          </p>
          <p>
            Job seekers can also access company pages to learn more information
            such as a company's salary overview, a list of benefits offered, and
            reviews submitted by real employees.
          </p>
          <p>
            People can browse SimplyHired without creating a profile. Signing up
            for an account, on the other hand, will give you access to a variety
            of job tools, such as a salary estimator and resume builder.{" "}
          </p>
        </div>
        <div className="col-md-6">
          <img src={simply} alt="..." className="img-thumbnail"></img>
        </div>
      </div>
    </div>
  );
}

export default SimplyHired;

import linkedin from "../images/Linkedin.PNG";
function LinkedIn() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6">
          <p>
            <h1>LinkedIn</h1>
            LinkedIn is one of the most prominent job search platforms, making
            it simple to locate opportunities in a variety of areas. It's also a
            social networking site where professionals can connect and
            communicate with one another.
            <br />
            To get started, simply sign up and establish a profile. Include as
            much information about your abilities, education, and job experience
            as feasible. A detailed LinkedIn profile might lead to more
            employment chances.
            <br />
            Adding a new post might help increase the visibility of your
            profile. Create a post outlining your expertise and connect your
            work portfolio, for example, if you're a freelance writer. Potential
            employers may come across your profile and make you an offer.
            <br />
            Searching through LinkedIn job advertisements is another excellent
            technique to uncover freelancing employment. To locate your ideal
            freelancing work, select relevant keywords and arrange the results
            by most recent. transfer.
          </p>
        </div>
        <div className="col-md-6">
          <img src={linkedin} alt="..." className="img-thumbnail"></img>
        </div>
      </div>
    </div>
  );
}

export default LinkedIn;

import behance from "../images/Behance.PNG";
function Behance() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6">
          <h1>Behance</h1>
          <p>
            Behance is a social network for creative talents, as opposed to the
            previous freelance sites on the list. People from all over the world
            use this website to create portfolios and share their creative work,
            which ranges from animations and illustrations to website and
            graphic design.
          </p>{" "}
          <p>
            Whether you are a freelance graphic designer, web designer, or
            animator, Behance is a great place to get discovered by potential
            employers. Begin by creating an account and completing your profile.
          </p>{" "}
          <p>
            Because it's a networking site, the more profiles you follow, the
            more posts will appear in your feed. It allows you to find more
            freelance work opportunities.
          </p>{" "}
          <p>
            Behance also has a job listing. Every freelancer will receive a
            personalized job recommendation based on their skill sets and
            category, making it easier to find freelance work.
          </p>
          <br />
          <a href=""> Visit Behance for great freelance opportunities</a>
        </div>
        <div className="col-md-6">
          <img src={behance} alt="..." className="img-thumbnail"></img>
        </div>
      </div>
    </div>
  );
}

export default Behance;

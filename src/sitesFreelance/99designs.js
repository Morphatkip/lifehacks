import designs from "../images/99designs.PNG";
function Designs() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6">
          <img src={designs} alt="..." className="img-thumbnail"></img>
        </div>
        <div className="col-md-6">
          <h1>99designs</h1>
          <p>
            99designs has a plethora of opportunities for freelance designers
            looking for work. It is a freelance website designed specifically
            for collaboration between designers and businesses. Various design
            projects are available, ranging from logo design and book covers to
            clothing and merchandise.
          </p>
          <p>
            When you sign up, you'll be asked to create a profile that includes
            your work experience. Your application will be reviewed by the
            curation team, and your designer level will be determined. The
            higher your level, the greater your visibility on the platform.
          </p>
          <p>
            99designs makes it simple to find freelance jobs in your area of
            expertise. You will have access to a list of jobs by selecting
            industries, styles, and design categories.
          </p>
          <p>
            When you work with a new client, 99designs will charge a $100
            introduction fee as well as a platform fee ranging from 5% to 15%.
            Freelancers are paid via PayPal or Payoneer within three business
            days, and those with higher profile levels are paid sooner.
          </p>
          <br />
          <a href="https://99designs.com/">
            Visit 99designs today for freelance jobs
          </a>
        </div>
      </div>
    </div>
  );
}

export default Designs;

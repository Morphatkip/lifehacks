import freelnce from "../images/Freelance.PNG";
function Freelance() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6">
          <img src={freelnce} className="img-thumbnail" />
        </div>
        <div className="col-md-6">
          <h1> Freelancer</h1>
          Another freelance website where professionals and businesses from all
          over the world collaborate on various projects is Freelancer.com.
          Clients can easily find an expert of any type due to the wide range of
          expertise. <br />
          You can register as a freelancer or as a business owner. To become a
          freelancer, you must first fill out a brief registration form. Give
          specifics about your skills, educational background, and work
          experience. <br />
          Aside from projects, there are numerous contests, such as visual or
          design work. These contests can benefit freelancers by earning money
          as well as reviews on their profiles.
          <br />
          After completing a job, every freelancer will be paid in full.
          However, for contests and fixed projects, the platform deducts 10% of
          your total earnings.
          <br />
          <a href="https://www.freelancer.com/jobs/">
            {" "}
            Follow the link to check freelance opportunities in freelancer
          </a>
        </div>
      </div>
    </div>
  );
}

export default Freelance;

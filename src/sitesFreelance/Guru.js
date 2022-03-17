import guru from "../images/Guru.PNG";
function Guru() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6">
          <img src={guru} alt="..." className="img-thumbnail"></img>
        </div>
        <div className="col-md-6">
          <h1>Guru</h1>
          <p>
            Guru is a platform where freelancers and businesses from all over
            the world can collaborate. Professionals with a variety of skills,
            such as programmers, graphic designers, and product managers, can be
            hired by businesses.
          </p>
          <p>
            This freelance website makes it simple to search for jobs and submit
            quotes to clients. Begin by registering and creating a freelancer
            profile. Based on your skill set and work experience, the system
            will make job recommendations.
          </p>
          <p>
            Freelancers can bid on long-term or short-term projects and provide
            a fixed price for each. You can withdraw your earnings using a
            variety of methods, including PayPal and wire transfer. More
            importantly, the site's SafePay protection ensures that freelancers
            are paid on time.
          </p>
          <p>
            Every freelancer who registers on this website receives a free basic
            membership. Paid membership plans, on the other hand, include more
            tools to help your profile stand out.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Guru;

import flexjobs from "../images/Flexjobs.PNG";
function Flexjobs() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6">
          <img src={flexjobs} alt="..." className="img-thumbnail"></img>
        </div>
        <div className="col-md-6">
          <h1>Flexjobs</h1>
          <p>
            Flexjobs is a website that specializes in remote and flexible job
            opportunities, such as freelance, part-time, and full-time work.
            There are many different types of jobs, ranging from education and
            training to journalism and writing.
            <br />
            Flexjobs ensures that every job posted on the website is genuine. It
            verifies and screens all job openings, weeding out scams and bogus
            businesses. This freelance website, unlike other online job boards,
            does not display advertisements on its page.
            <br />
            Users must sign up for a subscription in order to find freelance
            jobs. There are four plans available, with prices starting at $6.95
            per week. Every subscription includes unlimited access to job
            listings, a personalized work portfolio, career advice, and free
            skill testing.
            <br />
            Users can pay for their subscriptions with a prepaid card or through
            PayPal. There is a 30-day satisfaction guarantee, which means that
            if you are dissatisfied with the service, you can get a full refund.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Flexjobs;

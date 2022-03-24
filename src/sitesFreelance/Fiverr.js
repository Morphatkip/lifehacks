import fiver from "../images/Fiverr.PNG";
function Fiverr() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6">
          <img src={fiver} alt="..." className="img-thumbnail"></img>
        </div>
        <div className="col-md-6">
          <h1>Fiverr</h1>
          <p>
            Fiverr is a marketplace that links freelancers with company owners
            seeking services in a variety of digital tasks such as website
            design, content writing, and voice-overs.
            <br />
            This freelance website makes it easy for freelancers and company
            owners to communicate with one another. It's worth noting that on
            the website, freelancers are referred to as sellers, their services
            as gigs, and company owners as buyers.
            <br />
            Sellers may sign up for free, post their gigs, and establish their
            own rates instead of putting out bids. Meanwhile, shoppers may
            easily browse through various product categories to make a purchase.
            <br />
            When a customer purchases a gig, the system charges their account
            and places the money on hold. The system will then charge a
            commission fee and pay freelancers 80% of the proposed amount.
            <br />
            Withdrawing money might take up to 14 days, depending on the
            freelancer's seller level. There are several methods for withdrawing
            funds, including debit card, PayPal, and wire transfer.
          </p>
          <a href="https://www.fiverr.com/join">
            Check the freelance available at fiver
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fiverr;

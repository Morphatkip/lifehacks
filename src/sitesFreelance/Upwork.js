import upwork from "../images/Upwork.PNG";
function Upwork() {
  return (
    <div className="container bg-light pt-5">
      <div className="row g-5">
        <div className="col-md-6">
          <h1>Upwork</h1>
          <p>
            Upwork is a platform that links clients and freelancers from all
            around the world. The platform offers a diverse range of categories,
            including web design and software development, as well as customer
            service and accountancy.
            <br />
            Clients and freelancers may interact in a variety of ways - clients
            can post a task and recruit talent, or they can purchase a
            predetermined service from the project catalog. Similarly,
            freelancers might use the job board to advertise their services.
            <br />
            Create a profile on Upwork to get started as a freelancer. Make sure
            it contains information about yourself, your skills, and your job
            experience. Keep in mind that when you bid on contracts or pitch a
            project, clients will check your profile to see whether you're
            qualified.
            <br />
            Upwork pays on a sliding basis, so the more you work, the less you
            get paid. For example, the commission price begins at 20% for the
            first $500 bill and progressively decreases as you get more money.
            <br />
            There are various withdrawal methods available, including direct
            deposit, PayPal, and wire transfer.
            <br />
          </p>
        </div>
        <div className="col-md-6">
          <img src={upwork} alt="..." className="img-thumbnail"></img>
        </div>
      </div>
    </div>
  );
}

export default Upwork;

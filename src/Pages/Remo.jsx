import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import books from "../images/books.PNG";
import payment from "../images/payment.png";
import { Link } from "react-router-dom";
import "../styles/styles.css";
function Remo() {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${books})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backdropFilter: "blur(10px)",
  };
  return (
    <div>
      <div className=" ">
        <Navbar />
        <div className="pt-5">
          <div className="container">
            <div className="px-4 py-5  text-dark ">
              <h1 className="display-5 fw-bold">Remotasks</h1>
              <div className="col-lg- 8 mx-auto lead ">
                <p className="mb-4">
                  Welcome to FireTipsEdu, where we strive to provide valuable
                  insights and opportunities for personal and financial growth.
                  In today's feature, we're excited to shed light on Remotasks –
                  an innovative platform revolutionizing the way we work from
                  the comfort of our homes.
                </p>

                <p>
                  Remotask is a platform where you can do small tasks and get
                  paid. It pays as promised. Currently, I'm earning $11-$16 on
                  my coding account. I have some helpful notes about my
                  experience that you won't find on their website.
                </p>
                <hr />
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div
          className="container text-light pt-5"
          style={{ backgroundColor: "olivedrab" }}
        >
          {" "}
          <div className="row g-5 ">
            <h1 className="text-md-centre">Remotask account Categories </h1>
            <p className="fs-5 col-md-8 m-30 text-md-centre">
              Remotask offers various accounts types depending on your
              expertise. Here are the main available categories.
            </p>
            <div className="col-md-6">
              <ul className="icon-list">
                <li>Coder</li>
                <li>Biology</li>
                <li>Math</li>
                <li>Nursing </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="icon-list">
                <li>Human Resource</li>
                <li>Computer Science</li>
              </ul>
            </div>

            <p className="fs-5 col-md-8 m-30 text-md-centre">
              I've put together a set of questions and answers related to coding
              screening, which is my expertise. You can check them out
              <Link to="/screening-answers"> here</Link>.
            </p>
          </div>
        </div>
        <hr />

        <div className="container pt-4 ">
          <h1 className="display-5 fw-bold">Remotasks Payments</h1>
          <div className="m-3">
            <img alt="Payment" src={payment} className="payment-img" />
          </div>
          <div className="m-3">
            <p className="p-3">
              Remotasks facilitates payments through reliable platforms such as
              PayPal or AirTM, contingent upon the quality and quantity of tasks
              you successfully complete. Payments are disbursed on a weekly
              basis, specifically every Wednesday, as illustrated in the image
              above. During my tenure with Remotasks, I opted for PayPal as my
              preferred method of receiving payments, finding it to be a secure
              and efficient choice for my financial transactions.
            </p>
          </div>
        </div>
        <div className="container pt-4"></div>
        <hr />
      </div>
      <Footer />
    </div>
  );
}

export default Remo;

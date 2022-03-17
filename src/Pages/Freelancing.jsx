import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Toptal from "../sitesFreelance/Toptal.js";
import Fiverr from "../sitesFreelance/Fiverr";
import Upwork from "../sitesFreelance/Upwork";
import Linkedin from "../sitesFreelance/LinkedIn";
import Freelance from "../sitesFreelance/Freelance";
import Flexjobs from "../sitesFreelance/Flexjobs";
import fpic from "../images/fpic3.PNG";
import SimplyHired from "../sitesFreelance/SimplyHired";
import Guru from "../sitesFreelance/Guru";
import Behance from "../sitesFreelance/Behance";
import Designs from "../sitesFreelance/99designs";
class Freelancing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ backgroundColor: "black" }}>
          <div className="container pt-5" />
          <div
            style={{
              backgroundImage: `url(${fpic})`,
            }}
            className="container"
          >
            <div className="px-4 py-5 text-center text-light">
              <div className="col-lg-6 mx-auto lead mb-4">
                <p>
                  Companies are increasingly hiring freelancers to meet labor
                  needs during the COVID-19 pandemic. As a result, the number of
                  potential freelancing tasks – ranging from supermarket
                  shoppers to web engineers – is greater than ever.
                  <br />
                  If you've been looking for freelance work, you're certainly
                  aware of how difficult it may be, even if you've already built
                  an online portfolio. But don't worry, we've compiled a list of
                  the greatest freelance websites in this post.
                </p>
              </div>
            </div>
          </div>

          <div className="container bg-transparent pt-5"></div>
          <Toptal />
          <hr />
          <div className="container bg-transparent pt-5"></div>
          <Upwork />
          <div className="container bg-transparent pt-5"></div>
          <Fiverr />
          <div className="container bg-transparent pt-5"></div>
          <Linkedin />
          <div className="container bg-transparent pt-5"></div>
          <Freelance />
          <hr />
          <Flexjobs />
          <hr />
          <SimplyHired />
          <hr />
          <Guru />
          <hr />
          <Behance />
          <Designs />

          <div className="container bg-transparent pt-5"></div>
          <div className="container text-light pt-5 px-4 py-5 text-center text-light">
            <h1>Conclusion</h1>
            <p>
              That concludes the list of the best freelancing websites in 2022
              for finding work and making money online. Finding freelance job
              does not have to be difficult. Most sites merely need you to
              create an account and a profile. However, before setting up for an
              account, double-check how each freelance website operates. Take
              into account the payment system, withdrawal method, and service
              cost.{" "}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Freelancing;

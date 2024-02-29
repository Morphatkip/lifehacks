import React, { useRef } from "react";
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
import "../styles/styles.css";

function Freelancing() {
  const ToptalSection = useRef(null);
  const UpworkSection = useRef(null);
  const FiverrSection = useRef(null);
  const LinkedinSection = useRef(null);
  const FreelanceSection = useRef(null);
  const FlexjobsSection = useRef(null);
  const SimplyHiredSection = useRef(null);
  const GuruSection = useRef(null);
  const BehanceSection = useRef(null);
  const DesignsSection = useRef(null);
  const whatFreelancing = useRef(null);
  const FreelancingSites = useRef(null);
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />

      <div>
        <div className="container pt-5" />
        <div
          style={{
            backgroundImage: `url(${fpic})`,
          }}
          className="container"
        >
          <div className="px-4 py-5 text-center text-light">
            <div className="col-lg-6 mx-auto lead mb-4">
              <h1>Top 10 freelancing Sites</h1>
              <p>
                Companies are increasingly hiring freelancers to meet labor
                needs during the COVID-19 pandemic. As a result, the number
                potential freelancing tasks – ranging from supermarket shoppers
                to web engineers – is greater than ever.
                <br />
                If you've been looking for freelance work, you're certainly
                aware of how difficult it may be, even if you've already built
                an online portfolio. But don't worry, we've compiled a list of
                the greatest freelance websites in this post.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="container">
          <div className="section section1 bg-light ">
            <strong style={{ fontSize: 26 }}>Content</strong>
            <br />
            click on the link for easy navigation
            <ol style={{ color: "blue", fontSize: 24 }}>
              <li className="link" onClick={() => scrollDown(whatFreelancing)}>
                <h1 style={{ fontSize: 24, cursor: "pointer" }}>
                  What is Freelancing?
                </h1>
              </li>
              <li>
                <h1
                  style={{ fontSize: 24, cursor: "pointer" }}
                  className="link"
                  onClick={() => scrollDown(FreelancingSites)}
                >
                  {" "}
                  Freelancing Sites
                </h1>

                <ol type="i">
                  <li
                    className="link"
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollDown(ToptalSection)}
                  >
                    Toptal
                  </li>

                  <li
                    className="link"
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollDown(UpworkSection)}
                  >
                    Upwork
                  </li>
                  <li
                    className="link"
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollDown(FiverrSection)}
                  >
                    Fiverr
                  </li>
                  <li
                    className="link"
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollDown(LinkedinSection)}
                  >
                    LinkedIn
                  </li>
                  <li
                    className="nav-item"
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollDown(FreelanceSection)}
                  >
                    freelancer
                  </li>
                  <li
                    className="link"
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollDown(FlexjobsSection)}
                  >
                    Flexjobs
                  </li>
                  <li
                    className="link"
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollDown(SimplyHiredSection)}
                  >
                    SimplyHired
                  </li>
                  <li
                    className="link"
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollDown(GuruSection)}
                  >
                    Guru
                  </li>
                  <li
                    className="link"
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollDown(BehanceSection)}
                  >
                    Behance
                  </li>
                  <li
                    className="link"
                    style={{ cursor: "pointer" }}
                    onClick={() => scrollDown(DesignsSection)}
                  >
                    99designs
                  </li>
                </ol>
              </li>
            </ol>
          </div>
          <div>
            <div>
              <div className="row justify-content-around">
                <div
                  className="col-sm-8 section section12"
                  style={{ backgroundColor: "white", margin: 2 }}
                >
                  <div>
                    <div style={{ fontSize: 20 }}>
                      <p>
                        The phrase 'I am a freelancer/ I have a freelance job'
                        gets thrown a lot nowadays when one is asked about their
                        source of livelihood. It is not surprising that one can
                        quit their regular jobs and shift to freelancer.
                      </p>
                      <p>
                        A lot of factors are in play causing the sudden shift of
                        people's mentality on freelancing.
                      </p>
                      <p>
                        <ul>
                          <li>
                            <h1 style={{ fontSize: 20 }}>
                              Is freelancing job worth quit a job?
                            </h1>
                          </li>
                          <li>
                            <h1 style={{ fontSize: 20 }}>
                              What exactly do these freelancers do ?
                            </h1>
                          </li>
                          <li>
                            <h1 style={{ fontSize: 20 }}>
                              Is freelancing Job worth your venture?{" "}
                            </h1>
                          </li>
                        </ul>
                        <br />
                        We got you covered with a comprehensive guide of all the
                        questions you have.
                      </p>
                      <div ref={whatFreelancing}>
                        <h1 style={{ fontSize: 24 }}>What is freelancing ?</h1>
                        <div style={{ fontSize: 20 }}>
                          <p>
                            Freelance work is a service agreement job in which a
                            person uses his or her talents and experience to
                            give services to a variety of clients rather than
                            being hired by an organization.
                          </p>
                          <p>
                            Simply said, freelancing is when you are using your
                            abilities, knowledge, and experience to work with a
                            variety of clients and take on a variety of jobs
                            without being tied to a single company. The quantity
                            of assignments or tasks you can take depends solely
                            on your ability to complete them as requested.
                          </p>
                          <p>
                            Freelancing typically entails jobs (known as gigs)
                            that make it possible to create from home. However,
                            don't confuse freelancing with having a
                            work-from-home job.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-2"
                  style={{ backgroundColor: "black", margin: 2 }}
                ></div>
              </div>
            </div>
          </div>
          <br />

          <div className="bg-light" style={{ fontSize: 20 }}>
            <h1 className="bg-light" ref={FreelancingSites}>
              Freelancing Sites
            </h1>
            <div className=" section section2" ref={ToptalSection}>
              <Toptal />
            </div>

            <div
              className="bg-transparent pt-5 section section3"
              ref={UpworkSection}
            >
              <Upwork />
            </div>

            <div
              className="bg-transparent pt-5 section section4"
              ref={FiverrSection}
            >
              {" "}
              <Fiverr />
            </div>

            <div
              className="bg-transparent pt-5 section section5"
              ref={LinkedinSection}
            >
              <Linkedin />
            </div>

            <div
              className=" bg-transparent pt-5 section section6"
              ref={FreelanceSection}
            >
              {" "}
              <Freelance />
            </div>

            <div
              className=" bg-transparent pt-5 section section7"
              ref={FlexjobsSection}
            >
              {" "}
              <Flexjobs />
            </div>

            <div
              className=" bg-transparent pt-5 section section8"
              ref={SimplyHiredSection}
            >
              {" "}
              <SimplyHired />
            </div>

            <div
              className=" bg-transparent pt-5 section section9"
              ref={GuruSection}
            >
              {" "}
              <Guru />
            </div>

            <div
              className=" bg-transparent pt-5 section section10"
              ref={BehanceSection}
            >
              <Behance />
            </div>

            <div
              className=" bg-transparent pt-5 section section11"
              ref={DesignsSection}
            >
              {" "}
              <Designs />
            </div>
          </div>

          <div className="container bg-transparent pt-5">
            <div className="container text-dark pt-5 px-4 py-5 text-center ">
              <h1>Conclusion</h1>
              <p>
                That concludes the list of the best freelancing websites in 2022
                for finding work and making money online. Finding freelance job
                does not have to be difficult. Most sites merely need you to
                create an account and a profile. However, before setting up for
                an account, double-check how each freelance website operates.
                Take into account the payment system, withdrawal method, and
                service cost.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Freelancing;

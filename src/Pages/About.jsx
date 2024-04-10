import React from "react";
import Navbar from "../components/Navbar";
import "../styles/styles.css";
import AboutImage from "../assets/images/aboutimage.jpg";
import Footer from "../components/footer";
function About() {
  return (
    <div>
      {/*   Fact Start   */}

      {/*  Page Header Start  */}
      <div class="container-fluid page-header ">
        <Navbar />
        <div class="container text-center py-5">
          <h1 class="display-2 text-white mb-4 animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li class="breadcrumb-item" aria-current="page">
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/*   Page Header End  */}

      <div className="container-fluid bg-secondary py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">99</h1>
                <h5 className="text-white mt-1">
                  Success in getting happy customer
                </h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">25</h1>
                <h5 className="text-white mt-1">
                  Thousands of successful business
                </h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">120</h1>
                <h5 className="text-white mt-1">
                  Total clients who love HighTech
                </h5>
              </div>
            </div>
            <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
              <div className="d-flex counter">
                <h1 className="me-3 text-primary counter-value">5</h1>
                <h5 className="text-white mt-1">
                  Stars reviews given by satisfied clients
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*   Fact End   */}

      {/*   About Start  */}
      <div className="container-fluid py-5 my-5">
        <div className="container py-5">
          <div className="row g-5">
            <div
              className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay=".3s"
            >
              <div className="h-100 position-relative">
                <img
                  src={AboutImage}
                  className="img-fluid w-75 rounded"
                  alt=""
                  style={{ marginBottom: "25%" }}
                />
                <div
                  className="position-absolute w-75"
                  style={{ top: "25%", left: "25%" }}
                >
                  <img
                    src={AboutImage}
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
              data-wow-delay=".5s"
            >
              <h5 className="text-primary">About Us</h5>
              <h1 className="mb-4">About Firetipsedu</h1>
              Our website is dedicated to providing high-quality React templates
              for various components like navbar, dashboard, and more. Whether
              you are a developer, designer, or business owner, our templates
              are designed to streamline your development process and enhance
              the user experience of your web applications. At Firetipsedu, we
              understand the importance of efficient and visually appealing UI
              components in modern web development. That's why we have curated a
              collection of templates that are not only easy to integrate but
              also customizable to suit your specific needs. Our templates are
              built with the latest technologies and best practices, ensuring
              compatibility, responsiveness, and performance. With Firetipsedu,
              you can elevate your projects with professionally designed React
              templates that save you time and effort. Explore our range of
              templates today and take your web development to the next level!
              {/*  <a
                href=""
                className="btn btn-secondary rounded-pill px-5 py-3 text-white"
              >
                More Details
              </a> */}
            </div>
          </div>
        </div>
      </div>
      {/*   About End {/*  */}

      {/*   Team Start {/*  */}
      {/*   <div className="container-fluid pb-5 mb-5 team">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeIn"
            data-wow-delay=".3s"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="text-primary">Our Team</h5>
            <h1>Meet our expert Team</h1>
          </div>
          <div
            className="owl-carousel team-carousel wow fadeIn"
            data-wow-delay=".5s"
          >
            <div className="rounded team-item">
              <div className="team-content">
                <div className="team-img-icon">
                  <div className="team-img rounded-circle">
                    <img
                      src="img/team-1.jpg"
                      className="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div className="team-name text-center py-3">
                    <h4 className="">Full Name</h4>
                    <p className="m-0">Designation</p>
                  </div>
                  <div className="team-icon d-flex justify-content-center pb-4">
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded team-item">
              <div className="team-content">
                <div className="team-img-icon">
                  <div className="team-img rounded-circle">
                    <img
                      src="img/team-2.jpg"
                      className="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div className="team-name text-center py-3">
                    <h4 className="">Full Name</h4>
                    <p className="m-0">Designation</p>
                  </div>
                  <div className="team-icon d-flex justify-content-center pb-4">
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded team-item">
              <div className="team-content">
                <div className="team-img-icon">
                  <div className="team-img rounded-circle">
                    <img
                      src="img/team-3.jpg"
                      className="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div className="team-name text-center py-3">
                    <h4 className="">Full Name</h4>
                    <p className="m-0">Designation</p>
                  </div>
                  <div className="team-icon d-flex justify-content-center pb-4">
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded team-item">
              <div className="team-content">
                <div className="team-img-icon">
                  <div className="team-img rounded-circle">
                    <img
                      src="img/team-4.jpg"
                      className="img-fluid w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div className="team-name text-center py-3">
                    <h4 className="">Full Name</h4>
                    <p className="m-0">Designation</p>
                  </div>
                  <div className="team-icon d-flex justify-content-center pb-4">
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      className="btn btn-square btn-secondary text-white rounded-circle m-1"
                      href=""
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*   Team End {/*  */}

      <Footer />
    </div>
  );
}

export default About;

import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import "../assets/css/fontawesome.css";
import "../assets/css/templatemo-snapx-photography.css";
import "../assets/css/owl.css";
import "../assets/css/animate.css";
import Icon01Image from "../assets/images/icon-01.png";
import Icon02Image from "../assets/images/icon-02.png";
import Icon03Image from "../assets/images/icon-03.png";
import Icon04Image from "../assets/images/icon-04.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleCategoriesClick = (location) => {
    navigate(`/template/${location}`);
  };
  return (
    <div>
      <div>
        {/* <Body /> */}
        {/*   ***** Main Banner Area Start *****  */}
        <div className="main-banner">
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="header-text">
                  <h2>
                    Enter a world of <em>Designs</em> &amp; Amazing{" "}
                    <em>Templates</em>
                  </h2>
                  <p>
                    Design Themes Hub. provides professional React templates and
                    components that are fully customizable or ready to use out
                    of the box. They are suitable for both commercial and
                    personal use.
                  </p>
                  <div className="buttons">
                    <div className="big-border-button">
                      <Link to="/categories">Explore Design Themes Hub</Link>
                    </div>
                    {/*  <div className="icon-button">
                      <a href="https://youtube.com/templatemo" target="_blank">
                        <i className="fa fa-play"></i> Watch Our Video Now
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*   <!-- ***** Main Banner Area End ***** --> */}

        <section className="featured-items" id="featured-items">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="" style={{ position: "relative", zIndex: 9 }}>
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide>
                      {" "}
                      <div className="item">
                        <div className="thumb">
                          <img
                            style={{ height: "200px", width: "auto" }}
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                          />
                          <div className="hover-effect">
                            <div className="content">
                              <h4>
                                Dashboard
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i> <span>(5)</span>
                              </h4>
                              {/* <ul>
                                <li>
                                  <span>Contest Winner:</span> Vincent Adam
                                </li>
                                <li>
                                  <span>Contest Author:</span> Anthony Soft
                                </li>
                                <li>
                                  <span>Awards:</span> $1.000 + Camera Nikon
                                </li>
                              </ul> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="item">
                        <div className="thumb">
                          <img
                            style={{ height: "200px", width: "auto" }}
                            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9pbnQlMjBvZiUyMHNhbGVzfGVufDB8fDB8fHww"
                            alt=""
                          />
                          <div className="hover-effect">
                            <div className="content">
                              <h4>
                                Navigation component
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span>(5)</span>
                              </h4>
                              {/*  <ul>
                                <li>
                                  <span>Contest Winner:</span> Thomas Eddy
                                </li>
                                <li>
                                  <span>Contest Author:</span> Anthony Soft
                                </li>
                                <li>
                                  <span>Awards:</span> $1,200 + Canon EOS R7
                                </li>
                              </ul> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="item">
                        <div className="thumb">
                          <img
                            style={{ height: "200px", width: "auto" }}
                            src="https://images.unsplash.com/photo-1530435460869-d13625c69bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMHRlbXBsYXRlfGVufDB8fDB8fHww"
                            alt=""
                          />
                          <div className="hover-effect">
                            <div className="content">
                              <h4>
                                Website template
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span>(5)</span>
                              </h4>
                              {/*   <ul>
                                <li>
                                  <span>Contest Winner:</span> Vincent Adam
                                </li>
                                <li>
                                  <span>Contest Author:</span> Anthony Soft
                                </li>
                                <li>
                                  <span>Awards:</span> $1,800 + Canon EOS R6
                                </li>
                              </ul> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="item">
                        <div className="thumb">
                          <img
                            style={{ height: "200px", width: "auto" }}
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGRpc3BsYXklMjBjb21wb25lbnR8ZW58MHx8MHx8fDA%3D"
                            alt=""
                          />
                          <div className="hover-effect">
                            <div className="content">
                              <h4>
                                Data display component
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <span>(5)</span>
                              </h4>
                              {/*    <ul>
                                <li>
                                  <span>Contest Winner:</span> Thomas Eddy
                                </li>
                                <li>
                                  <span>Contest Author:</span> Anthony Soft
                                </li>
                                <li>
                                  <span>Awards:</span> $8,400 + Canon EOS R1
                                </li>
                              </ul> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="popular-categories">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-heading">
                  <h6>Our Categories</h6>
                  <h4>
                    Check Out <em>Our</em> <em>Categories</em>
                  </h4>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="main-button">
                  <Link to="/categories">Discover All Categories</Link>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="popular-item">
                  <div className="top-content">
                    <div className="icon">
                      <img src={Icon01Image} alt="" />
                    </div>
                    <div className="right">
                      <h4
                        onClick={() => handleCategoriesClick("dashboard")}
                        style={{ cursor: "pointer" }}
                      >
                        Dashboard components
                      </h4>
                      <span>
                        <em>126</em> Available Commponents
                      </span>
                    </div>
                  </div>
                  <div className="thumb">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <span className="category">Downloads</span>
                    <span className="likes">
                      <i className="fa fa-heart"></i> 256
                    </span>
                  </div>
                  {/* <div className="border-button">
                    <a href="contest-details.html">
                      Browse Nature Pic Contests
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="popular-item">
                  <div className="top-content">
                    <div className="icon">
                      <img src={Icon02Image} alt="" />
                    </div>
                    <div className="right">
                      <h4
                        onClick={() =>
                          handleCategoriesClick("advanced-components")
                        }
                        style={{ cursor: "pointer" }}
                      >
                        Website components
                      </h4>
                      <span>
                        <em>116</em> Available Components
                      </span>
                    </div>
                  </div>
                  <div className="thumb">
                    <img
                      src="https://images.unsplash.com/photo-1530435460869-d13625c69bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMHRlbXBsYXRlfGVufDB8fDB8fHww"
                      alt=""
                    />
                    <span className="category">Downloads</span>
                    <span className="likes">
                      <i className="fa fa-heart"></i> 256
                    </span>
                  </div>
                  {/*   <div className="border-button">
                    <a href="contest-details.html">
                      Browse Random Pic Contests
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="popular-item">
                  <div className="top-content">
                    <div className="icon">
                      <img src={Icon03Image} alt="" />
                    </div>
                    <div className="right">
                      <h4
                        onClick={() => handleCategoriesClick("navbar")}
                        style={{ cursor: "pointer" }}
                      >
                        Navigation components
                      </h4>
                      <span>
                        <em>164</em> Available Components
                      </span>
                    </div>
                  </div>
                  <div className="thumb">
                    <img
                      src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9pbnQlMjBvZiUyMHNhbGVzfGVufDB8fDB8fHww"
                      alt=""
                    />
                    <span className="category">Downloads</span>
                    <span className="likes">
                      <i className="fa fa-heart"></i> 256
                    </span>
                  </div>
                  {/*  <div className="border-button">
                    <a href="contest-details.html">
                      Browse Portrait Pic Contests
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="popular-item">
                  <div className="top-content">
                    <div className="icon">
                      <img src={Icon04Image} alt="" />
                    </div>
                    <div className="right">
                      <h4
                        onClick={() =>
                          handleCategoriesClick("data-display-components")
                        }
                        style={{ cursor: "pointer" }}
                      >
                        Data display components
                      </h4>
                      <span>
                        <em>135</em> Available Components
                      </span>
                    </div>
                  </div>
                  <div className="thumb">
                    <img
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGRpc3BsYXklMjBjb21wb25lbnR8ZW58MHx8MHx8fDA%3D"
                      alt=""
                    />
                    <span className="category">Downloads</span>
                    <span className="likes">
                      <i className="fa fa-heart"></i> 256
                    </span>
                  </div>
                  {/*   <div className="border-button">
                    <a href="contest-details.html">Browse Space Pic Contests</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  <section className="closed-contests">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading text-center">
                  <h6>Closed Photography Contests</h6>
                  <h4>
                    <em>Previous Contests</em> With Handpicked <em>Winners</em>
                  </h4>
                </div>
              </div>
              <div className="col-lg-12">
                <div
                  className="owl-features owl-carousel"
                  style={{ position: "relative", zIndex: 5 }}
                >
                  <div className="item">
                    <div className="closed-item">
                      <div className="thumb">
                        <img src="assets/images/closed-01.jpg" alt="" />
                        <span className="winner">
                          <em>Winner:</em> Anthony Soft
                        </span>
                        <span className="price">
                          <em>Award :</em> $1,600
                        </span>
                      </div>
                      <div className="down-content">
                        <div className="row">
                          <div className="col-7">
                            <h4>
                              88 Participants <br />
                              <span>Number Of Artists</span>
                            </h4>
                          </div>
                          <div className="col-5">
                            <h4 className="pics">
                              320 Pictures <br />
                              <span>Submited Pics</span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="closed-item">
                      <div className="thumb">
                        <img src="assets/images/closed-02.jpg" alt="" />
                        <span className="winner">
                          <em>Winner:</em> Anthony Soft
                        </span>
                        <span className="price">
                          <em>Award :</em> $4,200
                        </span>
                      </div>
                      <div className="down-content">
                        <div className="row">
                          <div className="col-7">
                            <h4>
                              96 Participants <br />
                              <span>Number Of Artists</span>
                            </h4>
                          </div>
                          <div className="col-5">
                            <h4 className="pics">
                              410 Pictures <br />
                              <span>Submited Pics</span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="closed-item">
                      <div className="thumb">
                        <img src="assets/images/closed-03.jpg" alt="" />
                        <span className="winner">
                          <em>Winner:</em> Anthony Soft
                        </span>
                        <span className="price">
                          <em>Award :</em> $3,200
                        </span>
                      </div>
                      <div className="down-content">
                        <div className="row">
                          <div className="col-7">
                            <h4>
                              74 Participants <br />
                              <span>Number Of Artists</span>
                            </h4>
                          </div>
                          <div className="col-5">
                            <h4 className="pics">
                              284 Pictures <br />
                              <span>Submited Pics</span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="border-button text-center">
                  <a href="contests.html">Browse Open Contests</a>
                </div>
              </div>
            </div>
          </div>
        </section>
 */}
        {/*    <section className="pricing-plans">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading text-center">
                  <h6>Our Pricing</h6>
                  <h4>
                    Photography <em>Contest Plans</em> and Price <em>Awards</em>
                  </h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="pricing-item">
                  <img src="../assets/images/pricing-01.jpg" alt="" />
                  <h4>Basic Plan</h4>
                  <ul className="first-plan">
                    <li>Lorem Ipsum Dolores Sonte</li>
                    <li>Songe Lorem Ipsum Dol</li>
                    <li>Matrios Venga Heptuss</li>
                    <li>Denim Sriracha Kogi</li>
                    <li>Digital Photography Awards</li>
                  </ul>
                  <span className="price">$25 USD</span>
                  <div className="border-button">
                    <a href="#">Choose This Plan</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="pricing-item">
                  <img src="assets/images/pricing-02.jpg" alt="" />
                  <h4>Standard Plan</h4>
                  <ul className="second-plan">
                    <li>Lorem Ipsum Dolores Sonte</li>
                    <li>Songe Lorem Ipsum Dol</li>
                    <li>Matrios Venga Heptuss</li>
                    <li>Denim Sriracha Kogi</li>
                    <li>Digital Photography Awards</li>
                  </ul>
                  <span className="price">$45 USD</span>
                  <div className="border-button">
                    <a href="#">Choose This Plan</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="pricing-item">
                  <img src="assets/images/pricing-03.jpg" alt="" />
                  <h4>Advanced Plan</h4>
                  <ul className="third-plan">
                    <li>Lorem Ipsum Dolores Sonte</li>
                    <li>Songe Lorem Ipsum Dol</li>
                    <li>Matrios Venga Heptuss</li>
                    <li>Denim Sriracha Kogi</li>
                    <li>Digital Photography Awards</li>
                  </ul>
                  <span className="price">$85 USD</span>
                  <div className="border-button">
                    <a href="#">Choose This Plan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/*   <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>
                  Copyright © 2048 <a href="#">SnapX</a> Photo Contest Co., Ltd.
                  All rights reserved. Design:{" "}
                  <a
                    title="CSS Templates"
                    rel="sponsored"
                    href="https://templatemo.com/page/1"
                    target="_blank"
                  >
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer> */}

        <Footer />
      </div>
    </div>
  );
}

export default Home;

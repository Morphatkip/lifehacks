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
import personalImg from "../assets/images/featured-03.jpg";
import socialImg from "../assets/images/featured-02.jpg";
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

        {/*    <section className="featured-items" id="featured-items">
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
        </section> */}

        <section className="m-3 p-3">
          <div className="wt-grid wt-body-max-width wt-pr-xs-1 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3 appears-ready">
            <div className="wt-grid__item-xs-12 wt-pr-xs-1 wt-pl-xs-1 wt-pr-md-2 wt-pl-md-2 wt-pr-lg-3 wt-pl-lg-3">
              <section
                className="shoppable-hero wt-mt-xs-4 wt-mt-md-4 shoppable-hero--two-column wt-display-flex-xs"
                aria-labelledby="shoppable-hero-title"
              >
                {/* Primary Hero Section */}
                <div
                  data-clg-id="WtCard"
                  className="wt-card wt-card--contained shoppable-hero-headline shoppable-hero-headline--xs-portrait wt-display-flex-xs wt-width-full wt-flex-grow-xs-1"
                >
                  <Link
                    className="wt-card__action-link"
                    to="/categories"
                  ></Link>
                  <div className="wt-width-full">
                    <div
                      className="shoppable-hero-headline__container wt-display-flex-xs wt-overflow-hidden wt-height-full"
                      style={{ backgroundColor: "#8C8AF0" }}
                    >
                      {/* Content Section */}
                      <div className="shoppable-hero-headline__content wt-p-xs-4 wt-display-flex-xs wt-flex-direction-column-xs wt-flex-gap-xs-1 wt-align-items-center wt-justify-content-center wt-text-center-xs wt-text-black">
                        <p
                          id="shoppable-hero-title"
                          className="wt-text-display"
                        >
                          Social Media Made Simple
                        </p>
                        <p className="wt-text-title-large">
                          Beautiful Instagram & TikTok templates to boost
                          engagement. No design skills needed
                        </p>
                        <Link
                          to="/categories"
                          type="button"
                          className="wt-btn shoppable-hero-headline__content-cta wt-mt-xs-3 wt-btn--primary"
                        >
                          Shop Now
                        </Link>
                      </div>

                      {/* Image Section */}
                      <div className="shoppable-hero-headline__image shoppable-hero-headline__image--spotlighted wt-flex-grow-xs-1">
                        <img
                          data-clg-id="WtImage"
                          className="wt-height-full wt-object-fit-cover wt-image"
                          src={socialImg}
                          alt="A dog birthday celebration with a cake, personalized portrait and red bandana and dog tote."
                          style={{ aspectRatio: "1.25925925926" }}
                          fetchpriority="high"
                          sizes="(max-width: 639px) 100vw, (max-width: 899px) 45vw, (max-width: 1199px) 55vw, 33vw"
                          srcSet={""}
                        />
                        <Link
                          to="/categories"
                          type="button"
                          className="wt-btn shoppable-hero-headline__image-cta wt-btn--primary"
                        >
                          Shop now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Hero Section (Visible on XL screens) */}
                <div className="shoppable-hero-section wt-width-full wt-hide-xs wt-show-xl">
                  <div className="shoppable-hero-page wt-flex-grow-xs-1 wt-flex-basis-xs-full">
                    <div className="shoppable-hero-page__container wt-height-full">
                      <div className="wt-card wt-card--contained shoppable-hero-page__item shoppable-hero-page__item--primary shoppable-hero-page__item--primary-gradient wt-display-flex-xs wt-flex-direction-column-xs wt-position-relative wt-justify-content-flex-end">
                        <Link
                          className="wt-card__action-link"
                          to="/categories"
                          aria-label="Personalized Clothing Shop Now"
                        ></Link>
                        <img
                          data-clg-id="WtImage"
                          class="wt-height-full wt-object-fit-cover shoppable-hero-page__image wt-z-index-negative-1 wt-rounded-02 wt-image"
                          src="personalImg"
                          alt="Personalized Clothing"
                          style={{ aspectRatio: 1 }}
                          sizes="400px"
                          srcset={personalImg}
                        ></img>

                        <div
                          className="wt-position-absolute wt-width-full wt-pl-xs-3 wt-pr-xs-3 wt-pb-xs-3"
                          style={{
                            bottom: "10px",
                            left: "0",

                            zIndex: 10,
                          }}
                        >
                          <p className="wt-text-white wt-text-title-larger">
                            Personalized Designs
                          </p>
                          <span className="text-light wt-text-title ">
                            Shop Now
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="popular-categories">
          <div className="container-fluid">
            <div className="row">
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

        <section className="closed-contests m-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading text-center">
                  <h6>Popular Digital Downloads</h6>
                  <h4>
                    <em>Top-Selling</em> Products With <em>High Ratings</em>
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
                        <img src="assets/images/product-01.jpg" alt="" />
                        <span className="winner">
                          <em>Top Seller:</em> Modern UI Kit
                        </span>
                        <span className="price">
                          <em>Price:</em> $19.99
                        </span>
                      </div>
                      <div className="down-content">
                        <div className="row">
                          <div className="col-7">
                            <h4>
                              1,200+ Downloads <br />
                              <span>Total Sales</span>
                            </h4>
                          </div>
                          <div className="col-5">
                            <h4 className="ratings">
                              ★★★★★ <br />
                              <span>Customer Rating</span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="closed-item">
                      <div className="thumb">
                        <img src="assets/images/product-02.jpg" alt="" />
                        <span className="winner">
                          <em>Top Seller:</em> Notion Planner
                        </span>
                        <span className="price">
                          <em>Price:</em> $24.99
                        </span>
                      </div>
                      <div className="down-content">
                        <div className="row">
                          <div className="col-7">
                            <h4>
                              980+ Downloads <br />
                              <span>Total Sales</span>
                            </h4>
                          </div>
                          <div className="col-5">
                            <h4 className="ratings">
                              ★★★★☆ <br />
                              <span>Customer Rating</span>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="closed-item">
                      <div className="thumb">
                        <img src="assets/images/product-03.jpg" alt="" />
                        <span className="winner">
                          <em>Top Seller:</em> Business Card Templates
                        </span>
                        <span className="price">
                          <em>Price:</em> $14.99
                        </span>
                      </div>
                      <div className="down-content">
                        <div className="row">
                          <div className="col-7">
                            <h4>
                              860+ Downloads <br />
                              <span>Total Sales</span>
                            </h4>
                          </div>
                          <div className="col-5">
                            <h4 className="ratings">
                              ★★★★☆ <br />
                              <span>Customer Rating</span>
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
                  <Link to="/categories">Browse All Products</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="pricing-plans">
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

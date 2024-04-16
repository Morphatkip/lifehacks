import React, { useEffect } from "react";
import featuredImage01 from "../assets/images/featured-01.jpg";
import AiBlogImg from "../assets/images/AiBlog.jpg";
import BlockChainImage from "../assets/images/BlockChain.jpg";
import CyberSecurityImage from "../assets/images/CyberSecurity.jpg";
import AutomotiveImg from "../assets/images/AutomotiveImage.jpg";
import TiktokImg from "../assets/images/Tiktok.jpg";
import "../assets/css/blog.css";
// Import Swiper React components
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay, Pagination]);
function Blog() {
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    const swiper = document.querySelector(".swiper-container");
    if (swiper) {
      swiper.swiper.autoplay.start();
    }
  }, []);
  return (
    <div>
      <div className="bg-dark">
        <Navbar />
      </div>

      <section id="hero-slider" className="hero-slider blog">
        <div className="container-md" data-aos="fade-in">
          <div className="row">
            <div className="col-12">
              <div className="swiper sliderFeaturedPosts">
                <Swiper
                  className="swiper-container"
                  autoplay={{ delay: 7000 }} // Adjust autoplay delay as needed (in milliseconds)
                  pagination={{ clickable: true }}
                  slidesPerView={"auto"}
                  centeredSlides={true}
                  spaceBetween={30}
                  modules={[Pagination]}
                >
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <Link
                        to={`/blog/${"pve8d3x"}`}
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage: `url(${AiBlogImg})`,
                        }}
                      >
                        <div className="img-bg-inner text-light">
                          <h2>The Evolution of Artificial Intelligence.</h2>
                          <p>
                            Artificial Intelligence (AI) has come a long way
                            since its nascent beginnings in the mid-20th
                            century. What was once the stuff of science fiction
                            has now become an integral part of our daily lives,
                            transforming industries,
                          </p>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <Link
                        to={`/blog/${"blockchain-technology"}`}
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage: `url(${BlockChainImage})`,
                        }}
                      >
                        <div className="img-bg-inner text-light">
                          <h2>
                            Unraveling the Complex World of Blockchain
                            Technology
                          </h2>
                          <p>
                            In the last decade, blockchain technology has
                            emerged as one of the most groundbreaking
                            advancements in the field of information technology.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <Link
                        to={`/blog/${" cyber-security-trends"}`}
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage: `url(${CyberSecurityImage})`,
                        }}
                      >
                        <div className="img-bg-inner text-light">
                          <h2>
                            Cybersecurity Trends: Navigating the Evolving Threat
                            Landscape
                          </h2>
                          <p>
                            The Internet of Things (IoT) continues to expand the
                            cybersecurity perimeter with every connected device
                            serving as a potential entry point for cyberattacks.
                          </p>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>

                  {/*  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <a
                        href="single-post.html"
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage: `url(${featuredImage01})`,
                        }}
                      >
                        <div className="img-bg-inner">
                          <h2>
                            17 Pictures of Medium Length Hair in Layers That
                            Will Inspire Your New Haircut
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem neque est mollitia! Beatae minima
                            assumenda repellat harum vero, officiis ipsam magnam
                            obcaecati cumque maxime inventore repudiandae quidem
                            necessitatibus rem atque.
                          </p>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <a
                        href="single-post.html"
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage: `url(${featuredImage01})`,
                        }}
                      >
                        <div className="img-bg-inner">
                          <h2>
                            13 Amazing Poems from Shel Silverstein with Valuable
                            Life Lessons
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem neque est mollitia! Beatae minima
                            assumenda repellat harum vero, officiis ipsam magnam
                            obcaecati cumque maxime inventore repudiandae quidem
                            necessitatibus rem atque.
                          </p>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="swiper-slide">
                      <a
                        href="single-post.html"
                        className="img-bg d-flex align-items-end"
                        style={{
                          backgroundImage: `url(${featuredImage01})`,
                        }}
                      >
                        <div className="img-bg-inner">
                          <h2>
                            9 Half-up/half-down Hairstyles for Long and Medium
                            Hair
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem neque est mollitia! Beatae minima
                            assumenda repellat harum vero, officiis ipsam magnam
                            obcaecati cumque maxime inventore repudiandae quidem
                            necessitatibus rem atque.
                          </p>
                        </div>
                      </a>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
                <div className="swiper-wrapper"></div>
                <div className="custom-swiper-button-next">
                  <span className="bi-chevron-right"></span>
                </div>
                <div className="custom-swiper-button-prev">
                  <span className="bi-chevron-left"></span>
                </div>

                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  End Hero Slider Section  */}

      {/*   ======= Post Grid Section =======  */}
      <section id="posts" className="posts">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="post-entry-1 lg">
                <Link to="/blog/pve8d3x">
                  <img src={AiBlogImg} alt="" className="img-fluid" />
                </Link>
                <div className="post-meta">
                  <span className="date"> technology</span>
                  <span className="mx-1">&AI;</span> <span>APR 5th '24</span>
                </div>
                <h2>
                  <Link to="/blog/pve8d3x">
                    The Evolution of Artificial Intelligence
                  </Link>
                </h2>
                <p className="mb-4 d-block">
                  Artificial Intelligence (AI) has come a long way since its
                  nascent beginnings in the mid-20th century. What was once the
                  stuff of science fiction has now become an integral part of
                  our daily lives, transforming industries, revolutionizing
                  research, and promising to reshape the very fabric of human
                  existence. The evolution of AI has been a captivating journey,
                  marked by remarkable breakthroughs, setbacks, and the constant
                  push towards ever-greater capabilities.
                </p>

                <div className="d-flex align-items-center author">
                  <div className="photo">
                    <img src={featuredImage01} alt="" className="img-fluid" />
                  </div>
                  <div className="name">
                    <h3 className="m-0 p-0">Alphonce Walters</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="row g-5">
                <div className="col-lg-4 border-start custom-border">
                  <div className="post-entry-1">
                    <Link to="/blog/blockchain-technology">
                      <img src={BlockChainImage} alt="" className="img-fluid" />
                    </Link>
                    <div className="post-meta">
                      <span className="date">technology</span>
                      <span className="mx-1">& AI;</span>
                      <span>APR 12th '24</span>
                    </div>
                    <h2>
                      <Link to="/blog/blockchain-technology">
                        Unraveling the Complex World of Blockchain Technology
                      </Link>
                    </h2>
                  </div>

                  <div className="post-entry-1">
                    <Link to="/blog/cyber-security-trends">
                      <img
                        src={CyberSecurityImage}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <div className="post-meta">
                      <span className="date">cyber Security</span>
                      <span className="mx-1">&bullet;</span>
                      <span>APR 12th '24</span>
                    </div>
                    <h2>
                      <Link to="/blog/cyber-security-trends">
                        Cybersecurity Trends: Navigating the Evolving Threat
                        Landscape
                      </Link>
                    </h2>
                  </div>
                  <div className="post-entry-1">
                    <Link to={`/blog/${"automotive-aftermath"}`}>
                      <img src={AutomotiveImg} alt="" className="img-fluid" />
                    </Link>
                    <div className="post-meta">
                      <span className="date">Industry Knowledge</span>
                      <span className="mx-1">&bullet;</span>
                      <span>APR 15th '24</span>
                    </div>
                    <h2>
                      <Link to={`/blog/${"automotive-aftermath"}`}>
                        Automotive Aftermath: Navigating the New Terrain of the
                        Auto Industry
                      </Link>
                    </h2>
                  </div>
                </div>
                <div className="col-lg-4 border-start custom-border">
                  <div className="post-entry-1">
                    <Link to={`/blog/${"is-tiktok-stealing-my-data"}`}>
                      <img src={TiktokImg} alt="" className="img-fluid" />
                    </Link>
                    <div className="post-meta">
                      <span className="date">Technology </span>
                      <span className="mx-1">&bullet;</span>
                      <span>APR a6th '24</span>
                    </div>
                    <h2>
                      <Link to={`/blog/${"is-tiktok-stealing-my-data"}`}>
                        Is TikTok Really Stealing My Data?
                      </Link>
                    </h2>
                  </div>
                  {/*  <div className="post-entry-1">
                    <a href="single-post.html">
                      <img src={featuredImage01} alt="" className="img-fluid" />
                    </a>
                    <div className="post-meta">
                      <span className="date">Tech</span>
                      <span className="mx-1">&bullet;</span>
                      <span>Mar 1st '22</span>
                    </div>
                    <h2>
                      <a href="single-post.html">
                        10 Life-Changing Hacks Every Working Mom Should Know
                      </a>
                    </h2>
                  </div>
                  <div className="post-entry-1">
                    <a href="single-post.html">
                      <img src={featuredImage01} alt="" className="img-fluid" />
                    </a>
                    <div className="post-meta">
                      <span className="date">Travel</span>
                      <span className="mx-1">&bullet;</span>
                      <span>Jul 5th '22</span>
                    </div>
                    <h2>
                      <a href="single-post.html">
                        5 Great Startup Tips for Female Founders
                      </a>
                    </h2>
                  </div> */}
                </div>

                {/*   Trending Section  */}
                <div className="col-lg-4">
                  {/*  <div className="trending">
                    <h3>Trending</h3>
                    <ul className="trending-post">
                      <li>
                        <a href="single-post.html">
                          <span className="number">1</span>
                          <h3>
                            The Best Homemade Masks for Face (keep the Pimples
                            Away)
                          </h3>
                          <span className="author">Jane Cooper</span>
                        </a>
                      </li>
                      <li>
                        <a href="single-post.html">
                          <span className="number">2</span>
                          <h3>
                            17 Pictures of Medium Length Hair in Layers That
                            Will Inspire Your New Haircut
                          </h3>
                          <span className="author">Wade Warren</span>
                        </a>
                      </li>
                      <li>
                        <a href="single-post.html">
                          <span className="number">3</span>
                          <h3>
                            13 Amazing Poems from Shel Silverstein with Valuable
                            Life Lessons
                          </h3>
                          <span className="author">Esther Howard</span>
                        </a>
                      </li>
                      <li>
                        <a href="single-post.html">
                          <span className="number">4</span>
                          <h3>
                            9 Half-up/half-down Hairstyles for Long and Medium
                            Hair
                          </h3>
                          <span className="author">Cameron Williamson</span>
                        </a>
                      </li>
                      <li>
                        <a href="single-post.html">
                          <span className="number">5</span>
                          <h3>
                            Life Insurance And Pregnancy: A Working Mom’s Guide
                          </h3>
                          <span className="author">Jenny Wilson</span>
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
                {/*   End Trending Section  */}
              </div>
            </div>
          </div>
          {/*   End .row  */}
        </div>
      </section>
      {/*   End Post Grid Section  */}

      <Footer />
    </div>
  );
}

export default Blog;

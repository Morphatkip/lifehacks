import React from "react";
import { useParams } from "react-router-dom";
import "../assets/css/blog.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import AiImage from "../assets/images/AiBlog.jpg";
function SinglePost() {
  const { postId } = useParams();
  const blogPosts = [
    {
      id: "pve8d3x",
      title: "The Evolution of Artificial Intelligence",
      content: `

      Artificial Intelligence (AI) has come a long way since its nascent beginnings in the mid-20th century. What was once the stuff of science fiction has now become an integral part of our daily lives, transforming industries, revolutionizing research, and promising to reshape the very fabric of human existence. The evolution of AI has been a captivating journey, marked by remarkable breakthroughs, setbacks, and the constant push towards ever-greater capabilities.
      
      The Foundations of AI The origins of AI can be traced back to the 1950s, when pioneering computer scientists and mathematicians began exploring the possibility of creating machines that could mimic human intelligence. Luminaries like Alan Turing, John McCarthy, Marvin Minsky, and Herbert Simon laid the groundwork for this burgeoning field, laying out the fundamental principles and approaches that would guide the development of AI over the coming decades.
      
      In those early years, the focus was on developing rule-based systems that could perform specific tasks, such as playing chess or solving mathematical problems. These "expert systems" were built upon a deep understanding of a particular domain, and they relied on a set of predefined rules to make decisions and draw conclusions. While impressive in their own right, these systems were limited in their scope and lacked the flexibility and adaptability that would be required for more general-purpose intelligence.
      
      The AI Winter and the Rise of Machine Learning As the 1960s and 1970s progressed, the initial enthusiasm for AI began to wane, leading to a period known as the "AI winter." Funding dried up, and progress slowed to a crawl as the limitations of the prevailing approaches became increasingly apparent. It was not until the 1980s and 1990s that a resurgence of interest in AI began to take hold, driven by the emergence of new techniques and the increasing availability of computational power.
      
      At the forefront of this renaissance was the rise of machine learning, a paradigm shift that allowed AI systems to learn from data rather than relying solely on predefined rules. By feeding vast amounts of information into algorithms that could identify patterns and make predictions, researchers were able to create systems that could adapt and improve over time, rather than being constrained by their initial programming.
      
      The Breakthrough of Deep Learning The 2000s and 2010s saw the most significant advancements in AI, driven largely by the remarkable progress in deep learning – a powerful subset of machine learning that utilizes artificial neural networks to process and interpret complex data. Deep learning algorithms, inspired by the structure and function of the human brain, have been instrumental in driving breakthroughs across a wide range of domains, from computer vision and natural language processing to robotics and healthcare.
      
      The success of deep learning can be attributed to several key factors, including the availability of large datasets, the exponential growth in computational power, and the development of more sophisticated neural network architectures. As these technologies have matured, AI systems have demonstrated superhuman performance in tasks such as image recognition, language translation, and game-playing, often surpassing human capabilities.
      
      The Transformative Potential of AI Today, AI is poised to have a profound and far-reaching impact on our world. From autonomous vehicles and intelligent personal assistants to medical diagnosis and scientific discovery, the applications of this technology are vast and rapidly expanding. As AI systems become more sophisticated and integrated into our daily lives, they have the potential to revolutionize entire industries, enhance our quality of life, and even tackle some of the most pressing global challenges we face.
      
      However, the evolution of AI also raises important ethical and societal considerations. Questions around privacy, bias, transparency, and the potential displacement of human labor have become central to the ongoing discourse surrounding the development and deployment of AI systems. As we continue to push the boundaries of what is possible with this technology, it is crucial that we do so in a responsible and thoughtful manner, ensuring that the benefits of AI are equitably distributed and the risks are carefully managed.
      
      The Future of AI The future of AI is both exciting and uncertain. While we can be certain that the pace of innovation will continue to accelerate, the specific trajectories and implications of this technology remain difficult to predict. Will we witness the emergence of artificial general intelligence (AGI), systems that can match or exceed human-level capabilities across a wide range of tasks? How will AI transform the nature of work, education, and social interaction? And what ethical and philosophical questions will arise as we grapple with the increasing autonomy and decision-making power of these intelligent systems?
      
      These are the questions that will shape the ongoing evolution of AI, as researchers, policymakers, and the public at large work to harness the immense potential of this transformative technology while mitigating its risks and unintended consequences. As we continue to push the boundaries of what is possible, one thing is clear: the evolution of AI will be a defining feature of the 21st century, with profound implications for the future of humanity.`,

      imageUrl: AiImage,
    },
  ];

  const post = blogPosts.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <div className="bg-dark">
        <Navbar />
      </div>

      <main id="main">
        <section className="single-post-content">
          <div className="container">
            <div className="row">
              <div className="col-md-9 post-content" data-aos="fade-up">
                {/*  ======= Single Post Content =======  */}
                <div className="single-post">
                  <div className="post-meta">
                    <span className="date">Business</span>{" "}
                    <span className="mx-1">&bullet;</span>{" "}
                    <span>Jul 5th '22</span>
                  </div>
                  <h1 className="mb-5">{post.title}</h1>
                  <figure className="my-4 ">
                    <div>
                      <img
                        src={post.imageUrl}
                        alt=""
                        class="img-fluid post-image"
                      />
                    </div>

                    {/*   <figcaption>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Explicabo, odit?{" "}
                    </figcaption> */}
                  </figure>
                  {post.content.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/*  End Single Post Content  */}

                {/*  ======= Comments =======  */}
                {/*   <div className="comments">
                  <h5 className="comment-title py-4">2 Comments</h5>
                  <div className="comment d-flex mb-4">
                    <div className="flex-shrink-0">
                      <div className="avatar avatar-sm rounded-circle">
                        <img
                          className="avatar-img img-fluid"
                          src="assets/img/person-5.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-2 ms-sm-3">
                      <div className="comment-meta d-flex align-items-baseline">
                        <h6 className="me-2">Jordan Singer</h6>
                        <span className="text-muted">2d</span>
                      </div>
                      <div className="comment-body">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Non minima ipsum at amet doloremque qui magni,
                        placeat deserunt pariatur itaque laudantium impedit
                        aliquam eligendi repellendus excepturi quibusdam nobis
                        esse accusantium.
                      </div>

                      <div className="comment-replies bg-light p-3 mt-3 rounded">
                        <h6 className="comment-replies-title mb-4 text-muted text-uppercase">
                          2 replies
                        </h6>

                        <div className="reply d-flex mb-4">
                          <div className="flex-shrink-0">
                            <div className="avatar avatar-sm rounded-circle">
                              <img
                                className="avatar-img img-fluid"
                                src="assets/img/person-4.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-2 ms-sm-3">
                            <div className="reply-meta d-flex align-items-baseline">
                              <h6 className="mb-0 me-2">Brandon Smith</h6>
                              <span className="text-muted">2d</span>
                            </div>
                            <div className="reply-body">
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit.
                            </div>
                          </div>
                        </div>
                        <div className="reply d-flex">
                          <div className="flex-shrink-0">
                            <div className="avatar avatar-sm rounded-circle">
                              <img
                                className="avatar-img img-fluid"
                                src="assets/img/person-3.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-2 ms-sm-3">
                            <div className="reply-meta d-flex align-items-baseline">
                              <h6 className="mb-0 me-2">James Parsons</h6>
                              <span className="text-muted">1d</span>
                            </div>
                            <div className="reply-body">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Distinctio dolore sed eos
                              sapiente, praesentium.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment d-flex">
                    <div className="flex-shrink-0">
                      <div className="avatar avatar-sm rounded-circle">
                        <img
                          className="avatar-img img-fluid"
                          src="assets/img/person-2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-1 ms-2 ms-sm-3">
                      <div className="comment-meta d-flex">
                        <h6 className="me-2">Santiago Roberts</h6>
                        <span className="text-muted">4d</span>
                      </div>
                      <div className="comment-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto laborum in corrupti dolorum, quas delectus nobis
                        porro accusantium molestias sequi.
                      </div>
                    </div>
                  </div>
                </div> */}
                {/*  End Comments  */}

                {/*  ======= Comments Form =======  */}
                {/*  <div className="row justify-content-center mt-5">
                  <div className="col-lg-12">
                    <h5 className="comment-title">Leave a Comment</h5>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <label for="comment-name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="comment-name"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label for="comment-email">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="comment-email"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label for="comment-message">Message</label>

                        <textarea
                          className="form-control"
                          id="comment-message"
                          placeholder="Enter your name"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <input
                          type="submit"
                          className="btn btn-primary"
                          value="Post comment"
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
                {/*  End Comments Form  */}
              </div>
              {/*    <div className="col-md-3">
                
                <div className="aside-block">
                  <ul
                    className="nav nav-pills custom-tab-nav mb-4"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-popular-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-popular"
                        type="button"
                        role="tab"
                        aria-controls="pills-popular"
                        aria-selected="true"
                      >
                        Popular
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-trending-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-trending"
                        type="button"
                        role="tab"
                        aria-controls="pills-trending"
                        aria-selected="false"
                      >
                        Trending
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-latest-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-latest"
                        type="button"
                        role="tab"
                        aria-controls="pills-latest"
                        aria-selected="false"
                      >
                        Latest
                      </button>
                    </li>
                  </ul>

                  <div className="tab-content" id="pills-tabContent">
                
                    <div
                      className="tab-pane fade show active"
                      id="pills-popular"
                      role="tabpanel"
                      aria-labelledby="pills-popular-tab"
                    >
                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Sport</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            How to Avoid Distraction and Stay Focused During
                            Video Calls?
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>

                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Lifestyle</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            17 Pictures of Medium Length Hair in Layers That
                            Will Inspire Your New Haircut
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>

                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Culture</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            9 Half-up/half-down Hairstyles for Long and Medium
                            Hair
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>

                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Lifestyle</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            Life Insurance And Pregnancy: A Working Mom’s Guide
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>

                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Business</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            The Best Homemade Masks for Face (keep the Pimples
                            Away)
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>

                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Lifestyle</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            10 Life-Changing Hacks Every Working Mom Should Know
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>
                    </div>{" "}
                  
                    <div
                      className="tab-pane fade"
                      id="pills-trending"
                      role="tabpanel"
                      aria-labelledby="pills-trending-tab"
                    >
                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Lifestyle</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            17 Pictures of Medium Length Hair in Layers That
                            Will Inspire Your New Haircut
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>

                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Culture</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            9 Half-up/half-down Hairstyles for Long and Medium
                            Hair
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>

                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Lifestyle</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            Life Insurance And Pregnancy: A Working Mom’s Guide
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>

                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Sport</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            How to Avoid Distraction and Stay Focused During
                            Video Calls?
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>
                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Business</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            The Best Homemade Masks for Face (keep the Pimples
                            Away)
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>

                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Lifestyle</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            10 Life-Changing Hacks Every Working Mom Should Know
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>
                    </div>{" "}
                  
                    <div
                      className="tab-pane fade"
                      id="pills-latest"
                      role="tabpanel"
                      aria-labelledby="pills-latest-tab"
                    >
                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Lifestyle</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            Life Insurance And Pregnancy: A Working Mom’s Guide
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>

                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Business</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            The Best Homemade Masks for Face (keep the Pimples
                            Away)
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>

                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Lifestyle</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            10 Life-Changing Hacks Every Working Mom Should Know
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>

                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Sport</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            How to Avoid Distraction and Stay Focused During
                            Video Calls?
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>

                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Lifestyle</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            17 Pictures of Medium Length Hair in Layers That
                            Will Inspire Your New Haircut
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>

                      <div className="post-entry-1 border-bottom">
                        <div className="post-meta">
                          <span className="date">Culture</span>{" "}
                          <span className="mx-1">&bullet;</span>{" "}
                          <span>Jul 5th '22</span>
                        </div>
                        <h2 className="mb-2">
                          <a href="#">
                            9 Half-up/half-down Hairstyles for Long and Medium
                            Hair
                          </a>
                        </h2>
                        <span className="author mb-3 d-block">
                          Jenny Wilson
                        </span>
                      </div>
                    </div>{" "}
                  
                  </div>
                </div>

                <div className="aside-block">
                  <h3 className="aside-title">Video</h3>
                  <div className="video-post">
                    <a
                      href="https://www.youtube.com/watch?v=AiFfDjmd0jU"
                      className="glightbox link-video"
                    >
                      <span className="bi-play-fill"></span>
                      <img
                        src="assets/img/post-landscape-5.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
               

                <div className="aside-block">
                  <h3 className="aside-title">Categories</h3>
                  <ul className="aside-links list-unstyled">
                    <li>
                      <a href="category.html">
                        <i className="bi bi-chevron-right"></i> Business
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        <i className="bi bi-chevron-right"></i> Culture
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        <i className="bi bi-chevron-right"></i> Sport
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        <i className="bi bi-chevron-right"></i> Food
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        <i className="bi bi-chevron-right"></i> Politics
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        <i className="bi bi-chevron-right"></i> Celebrity
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        <i className="bi bi-chevron-right"></i> Startups
                      </a>
                    </li>
                    <li>
                      <a href="category.html">
                        <i className="bi bi-chevron-right"></i> Travel
                      </a>
                    </li>
                  </ul>
                </div>
               

                <div className="aside-block">
                  <h3 className="aside-title">Tags</h3>
                  <ul className="aside-tags list-unstyled">
                    <li>
                      <a href="category.html">Business</a>
                    </li>
                    <li>
                      <a href="category.html">Culture</a>
                    </li>
                    <li>
                      <a href="category.html">Sport</a>
                    </li>
                    <li>
                      <a href="category.html">Food</a>
                    </li>
                    <li>
                      <a href="category.html">Politics</a>
                    </li>
                    <li>
                      <a href="category.html">Celebrity</a>
                    </li>
                    <li>
                      <a href="category.html">Startups</a>
                    </li>
                    <li>
                      <a href="category.html">Travel</a>
                    </li>
                  </ul>
                </div>
               
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SinglePost;

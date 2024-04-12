import React from "react";
import { useParams } from "react-router-dom";
import "../assets/css/singlepost.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import AiImage from "../assets/images/AiBlog.jpg";
import BlockChainImage from "../assets/images/BlockChain.jpg";
import "../assets/scss/main.scss";
import ReactMarkdown from "react-markdown";

function SinglePost() {
  const { postId } = useParams();
  const blogPosts = [
    {
      id: "pve8d3x",

      caption:
        "The Future of AI The future of AI is both exciting and uncertain. While we can be certain that the pace of innovation will continue to accelerate, the specific trajectories and implications of this technology remain difficult to predict. Will we witness the emergence of artificial general intelligence (AGI), systems that can match or exceed human-level capabilities across a wide range of tasks? How will AI transform the nature of work, education, and social interaction?",
      title: "The Evolution of Artificial Intelligence",
      content: `
      <p>Artificial Intelligence (AI) has come a long way since its nascent beginnings in the mid-20th century. What was once the stuff of science fiction has now become an integral part of our daily lives, transforming industries, revolutionizing research, and promising to reshape the very fabric of human existence. The evolution of AI has been a captivating journey, marked by remarkable breakthroughs, setbacks, and the constant push towards ever-greater capabilities.</p>

      <h2>The Foundations of AI</h2>
      <p>The origins of AI can be traced back to the 1950s, when pioneering computer scientists and mathematicians began exploring the possibility of creating machines that could mimic human intelligence. Luminaries like Alan Turing, John McCarthy, Marvin Minsky, and Herbert Simon laid the groundwork for this burgeoning field, laying out the fundamental principles and approaches that would guide the development of AI over the coming decades.</p>

      <p>In those early years, the focus was on developing rule-based systems that could perform specific tasks, such as playing chess or solving mathematical problems. These "expert systems" were built upon a deep understanding of a particular domain, and they relied on a set of predefined rules to make decisions and draw conclusions. While impressive in their own right, these systems were limited in their scope and lacked the flexibility and adaptability that would be required for more general-purpose intelligence.</p>

      <h2>The AI Winter and the Rise of Machine Learning</h2>
      <p>As the 1960s and 1970s progressed, the initial enthusiasm for AI began to wane, leading to a period known as the "AI winter." Funding dried up, and progress slowed to a crawl as the limitations of the prevailing approaches became increasingly apparent. It was not until the 1980s and 1990s that a resurgence of interest in AI began to take hold, driven by the emergence of new techniques and the increasing availability of computational power.</p>

      <p>At the forefront of this renaissance was the rise of machine learning, a paradigm shift that allowed AI systems to learn from data rather than relying solely on predefined rules. By feeding vast amounts of information into algorithms that could identify patterns and make predictions, researchers were able to create systems that could adapt and improve over time, rather than being constrained by their initial programming.</p>

      <h2>The Breakthrough of Deep Learning</h2>
      <p>The 2000s and 2010s saw the most significant advancements in AI, driven largely by the remarkable progress in deep learning – a powerful subset of machine learning that utilizes artificial neural networks to process and interpret complex data. Deep learning algorithms, inspired by the structure and function of the human brain, have been instrumental in driving breakthroughs across a wide range of domains, from computer vision and natural language processing to robotics and healthcare.</p>

      <p>The success of deep learning can be attributed to several key factors, including the availability of large datasets, the exponential growth in computational power, and the development of more sophisticated neural network architectures. As these technologies have matured, AI systems have demonstrated superhuman performance in tasks such as image recognition, language translation, and game-playing, often surpassing human capabilities.</p>

      <h2>The Transformative Potential of AI</h2>
      <p>Today, AI is poised to have a profound and far-reaching impact on our world. From autonomous vehicles and intelligent personal assistants to medical diagnosis and scientific discovery, the applications of this technology are vast and rapidly expanding. As AI systems become more sophisticated and integrated into our daily lives, they have the potential to revolutionize entire industries, enhance our quality of life, and even tackle some of the most pressing global challenges we face.</p>

      <p>However, the evolution of AI also raises important ethical and societal considerations. Questions around privacy, bias, transparency, and the potential displacement of human labor have become central to the ongoing discourse surrounding the development and deployment of AI systems. As we continue to push the boundaries of what is possible with this technology, it is crucial that we do so in a responsible and thoughtful manner, ensuring that the benefits of AI are equitably distributed and the risks are carefully managed.</p>

      <h2>The Future of AI</h2>
      <p>The future of AI is both exciting and uncertain. While we can be certain that the pace of innovation will continue to accelerate, the specific trajectories and implications of this technology remain difficult to predict. Will we witness the emergence of artificial general intelligence (AGI), systems that can match or exceed human-level capabilities across a wide range of tasks? How will AI transform the nature of work, education, and social interaction? And what ethical and philosophical questions will arise as we grapple with the increasing autonomy and decision-making power of these intelligent systems?</p>

      <p>These are the questions that will shape the ongoing evolution of AI, as researchers, policymakers, and the public at large work to harness the immense potential of this transformative technology while mitigating its risks and unintended consequences. As we continue to push the boundaries of what is possible, one thing is clear: the evolution of AI will be a defining feature of the 21st century, with profound implications for the future of humanity.</p>
`,

      imageUrl: AiImage,
    },
    {
      id: "blockchain-technology",
      caption:
        "Blockchain operates on the principles of cryptography, decentralization, and consensus to ensure the integrity and security of data.",
      title: "Unraveling the Complex World of Blockchain Technology",
      content: `
        <p>In the last decade, blockchain technology has emerged as one of the most groundbreaking advancements in the field of information technology. Its implications stretch far beyond its initial application in cryptocurrency, promising innovations in various sectors such as finance, supply chain management, healthcare, and even governance. This blog post aims to demystify blockchain technology, exploring its mechanisms, applications, benefits, and challenges.</p>
  
        <h2>What is Blockchain Technology?</h2>
        <p>At its core, blockchain technology is a decentralized digital ledger that records transactions across multiple computers in such a way that the registered transactions cannot be altered retroactively. This technology is designed to bring high levels of transparency and security to digital transactions.</p>
  
        <p>The "block" in blockchain refers to digital information stored in a public database, the "chain". Each block contains a number of transactions, and every time a new transaction occurs on the blockchain, a record of that transaction is added to every participant's ledger. The decentralization aspect means that no single entity has control over the entire chain, rather, it is maintained by a network of nodes (computers), making it very resistant to tampering and fraud.</p>
  
        <h2>How Does Blockchain Work?</h2>
        <p>Blockchain operates on the principles of cryptography, decentralization, and consensus to ensure the integrity and security of data. When a transaction is initiated, it is broadcast to a network of peer-to-peer computers scattered across the globe, known as nodes. These nodes have the responsibility of validating the transaction using algorithms—a process known as mining in the context of cryptocurrencies.</p>
  
        <p>Once a transaction is verified, it is combined with other transactions to create a new block of data for the ledger. This new block is then permanently added to the existing blockchain, in a way that is chronological and immutable. Finally, the transaction is complete and the update is visible to all parties involved.</p>
  
        <h2>Key Features of Blockchain Technology</h2>
        <ol>
          <li><strong>Decentralization</strong>: Unlike traditional ledgers or databases that are controlled by central authorities (e.g., banks, governments), a blockchain has no central point of control. This decentralization reduces the risk of centralized corruption or failure.</li>
          <li><strong>Transparency</strong>: Changes to public blockchains are publicly viewable by all parties creating transparency, and all transactions are immutable, meaning they cannot be altered or deleted.</li>
          <li><strong>Security</strong>: Blockchain uses advanced cryptographic techniques that ensure that data is locked and secure. It is practically impossible to change any aspect of the blockchain without the consensus of the network.</li>
        </ol>
  
        <h2>Practical Applications of Blockchain Technology</h2>
        <ul>
          <li><strong>Cryptocurrencies</strong>: Bitcoin and Ethereum are among the most known cryptocurrencies that use blockchain to facilitate secure and anonymous transactions.</li>
          <li><strong>Supply Chain Management</strong>: Blockchain provides traceability and clear accountability in supply chains, enhancing transparency and reducing delays and human errors.</li>
          <li><strong>Healthcare</strong>: Secure sharing of medical records, ensuring the privacy and integrity of sensitive data across platforms.</li>
          <li><strong>Voting Systems</strong>: Blockchain can be used to create tamper-proof voting systems, potentially increasing voter turnout and trust in election processes.</li>
          <li><strong>Smart Contracts</strong>: These are self-executing contracts with the terms of the agreement directly written into lines of code. They automate processes and reduce the need for intermediaries.</li>
        </ul>
  
        <h2>Challenges Facing Blockchain Technology</h2>
        <ol>
          <li><strong>Scalability</strong>:
           The current capacity of blockchain networks is limited. For instance, Bitcoin can handle about 7 transactions per second, while Visa can handle more than 24,000.</li>
          <li><strong>Energy Consumption</strong>: The mining process can be incredibly energy-intensive, leading to concerns about its environmental impact.</li>
          <li><strong>Regulatory Issues</strong>: As a disruptive technology, blockchain faces significant scrutiny and regulatory challenges as governments and institutions try to figure out how to best handle it.</li>
          <li><strong>Complexity and Cost</strong>: Implementing blockchain technology can be complex and costly, limiting its adoption to entities that can afford such investments.</li>
        </ol>
  
        <h2>The Future of Blockchain Technology</h2>
        <p>The future of blockchain technology holds tremendous potential. As scalability and regulatory challenges are addressed, we can expect wider adoption across various sectors. Innovations like blockchain interoperability, enhanced privacy features, and the development of more eco-friendly consensus algorithms (such as proof of stake) are on the horizon.</p>
  
        <p>In conclusion, blockchain technology is not just a fad;`,
      imageUrl: BlockChainImage,
    },
    /* {
      id: "pve8d3x",
    caption:""  ,
    title: "",
    content: ``,
    imageUrl:""} */
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

      {/* The new one starts here */}
      <div className="container">
        <div className="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
          <div className="h-100 tofront">
            <div className="row justify-content-between">
              <div className="col-md-5 pt-6 pb-6 pr-6 align-self-center">
                <p className="text-uppercase font-weight-bold">
                  <a className="text-danger" href="./category.html">
                    Technology
                  </a>
                </p>
                <h1 className="display-4 secondfont mb-3 font-weight-bold">
                  {post.title}
                </h1>
                <p className="mb-3">{post.caption}</p>
                <div className="d-flex align-items-center">
                  {/* <img className="rounded-circle" src={AiImage} width="70" /> */}
                  <small className="ml-2">
                    Alphonce Walters{" "}
                    <span className="text-muted d-block">
                      A few hours ago &middot; 40min. read
                    </span>
                  </small>
                </div>
              </div>
              <div className="col-md-7 pr-0 mt-3 pt-6">
                <img src={post.imageUrl} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-4 pb-4">
        <div className="row justify-content-center">
          <div className="col-lg-2 pr-4 mb-4 col-md-12">
            <div className="sticky-top text-center">
              <div className="text-muted">Share this</div>
              <div className="share d-inline-block">
                {/*   AddToAny BEGIN  */}
                <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                  <a
                    className="a2a_dd"
                    href="https://www.addtoany.com/share"
                  ></a>
                  <a className="a2a_button_facebook"></a>
                  <a className="a2a_button_twitter"></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-8">
            <article className=" text-color">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            <div className="border p-5 bg-lightblue">
              <div className="row justify-content-between">
                <div className="col-md-5 mb-2 mb-md-0">
                  <h5 className="font-weight-bold secondfont">
                    Become a member
                  </h5>
                  Get the latest news right in your inbox. We never spam!
                </div>
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your e-mail address"
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <button
                        type="submit"
                        className="btn btn-success btn-block"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  <div className="container pt-4 pb-4">
        <h5 className="font-weight-bold spanborder">
          <span>Read next</span>
        </h5>
        <div className="row">
          <div className="col-lg-6">
            <div className="card border-0 mb-4 box-shadow h-xl-300">
              <div
                style={{
                  backgroundImage: `url(./assets/img/demo/3.jpg)`,
                  height: "150px",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
                <h2 className="h4 font-weight-bold">
                  <a className="text-dark" href="#">
                    Brain Stimulation Relieves Depression Symptoms
                  </a>
                </h2>
                <p className="card-text">
                  Researchers have found an effective target in the brain for
                  electrical stimulation to improve mood in people suffering
                  from depression.
                </p>
                <div>
                  <small className="d-block">
                    <a className="text-muted" href="./author.html">
                      Favid Rick
                    </a>
                  </small>
                  <small className="text-muted">Dec 12 · 5 min read</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="flex-md-row mb-4 box-shadow h-xl-300">
              <div className="mb-3 d-flex align-items-center">
                <img height="80" src="./assets/img/demo/blog4.jpg" />
                <div className="pl-3">
                  <h2 className="mb-2 h6 font-weight-bold">
                    <a className="text-dark" href="./article.html">
                      Nasa's IceSat space laser makes height maps of Earth
                    </a>
                  </h2>
                  <div className="card-text text-muted small">
                    Jake Bittle in LOVE/HATE
                  </div>
                  <small className="text-muted">Dec 12 · 5 min read</small>
                </div>
              </div>
              <div className="mb-3 d-flex align-items-center">
                <img height="80" src="./assets/img/demo/blog5.jpg" />
                <div className="pl-3">
                  <h2 className="mb-2 h6 font-weight-bold">
                    <a className="text-dark" href="./article.html">
                      Underwater museum brings hope to Lake Titicaca
                    </a>
                  </h2>
                  <div className="card-text text-muted small">
                    Jake Bittle in LOVE/HATE
                  </div>
                  <small className="text-muted">Dec 12 · 5 min read</small>
                </div>
              </div>
              <div className="mb-3 d-flex align-items-center">
                <img height="80" src="./assets/img/demo/blog6.jpg" />
                <div className="pl-3">
                  <h2 className="mb-2 h6 font-weight-bold">
                    <a className="text-dark" href="./article.html">
                      Sun-skimming probe starts calling home
                    </a>
                  </h2>
                  <div className="card-text text-muted small">
                    Jake Bittle in LOVE/HATE
                  </div>
                  <small className="text-muted">Dec 12 · 5 min read</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default SinglePost;

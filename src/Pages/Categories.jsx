import React from "react";
import "../assets/css/fontawesome.css";
import "../assets/css/templatemo-snapx-photography.css";
import "../assets/css/owl.css";
import "../assets/css/animate.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Holder from "../components/Holder";
import NavbarImg from "../assets/downloads/images/Navbar-1.png";
import dashboard1 from "../assets/downloads/zip/dashboard1.zip";
import userProfileImage from "../assets/downloads/images/user-profile.png";
import userProfileZip from "../assets/downloads/zip/user-profile.zip";

function Categories() {
  return (
    <div>
      <div className="page-heading">
        <Navbar />
        <div className="container ">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 header-text">
              <h2>All categories</h2>
              <p>
                You are allowed to freely use Firetipedu design Template for
                your commercial websites. You are not allowed to redistribute
                the template ZIP file on any other Free react template websites.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="designs">
        <Holder
          title="Admin Navbar"
          image={NavbarImg}
          price="Free"
          rating={4.5}
          downloadSrc={dashboard1}
        >
          {/* <div>
            This is additional content passed as children to the Holder
            component.
          </div> */}
          {/* <div>Another div passed as children.</div> */}
        </Holder>

        <Holder
          title="User Profile"
          image={userProfileImage}
          price="Free"
          rating={5}
          downloadSrc={userProfileZip}
        >
          {/* <div>
            This is additional content passed as children to the Holder
            component.
          </div> */}
          {/* <div>Another div passed as children.</div> */}
        </Holder>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;
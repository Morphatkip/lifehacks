import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/fontawesome.css";
import "../assets/css/templatemo-snapx-photography.css";
import "../assets/css/owl.css";
import "../assets/css/animate.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Holder from "../components/Holder";
import NavbarImg from "../assets/downloads/images/Navbar-1.png";
import Navbar2Img from "../assets/downloads/images/navbar-2.png";
import Navbar3Img from "../assets/downloads/images/navbar-3.png";
import MovieAppImg from "../assets/downloads/images/movie-app.png";
import blogAppImage from "../assets/downloads/images/awesome-blog.png";
import dashboard1 from "../assets/downloads/zip/dashboard1.zip";
import userProfileImage from "../assets/downloads/images/user-profile.png";
import tourismImage from "../assets/downloads/images/tourism.png";
import companyImage from "../assets/downloads/images/company-website.png";
import userProfileZip from "../assets/downloads/zip/user-profile.zip";
import navbar2Zip from "../assets/downloads/zip/navbar-2.zip";
import navbar3Zip from "../assets/downloads/zip/navbar-3.zip";
import movieApp from "../assets/downloads/zip/movie-app.zip";
import blogApp from "../assets/downloads/zip/awesome-blog.zip";
import tourismZip from "../assets/downloads/zip/tourism.zip";
import companyWebsiteZip from "../assets/downloads/zip/companywebsite.zip";

function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/template/dashboard":
        setSelectedCategory("dashboard");
        break;
      case "/template/navbar":
        setSelectedCategory("navigationComponents");
        break;
      case "/template/data-display-components":
        setSelectedCategory("dataDisplayComponents");
        break;
      case "/template/advanced-components":
        setSelectedCategory("advancedComponents");
        break;
      default:
        setSelectedCategory(null);
    }
  }, [location]);

  const filteredCategories = selectedCategory
    ? categories.filter((category) => category.category === selectedCategory)
    : categories;

  return (
    <div>
      <div className="page-heading">
        <Navbar />
        <div className="container ">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 header-text">
              <h2>React Themes and Templates</h2>
              <p>
                You are allowed to freely use our design Template for your
                commercial websites. You are not allowed to redistribute the
                template on any other template websites.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="designs bg-dark p-3">
        {filteredCategories.map((category) => (
          <Holder
            key={category.title}
            title={category.title}
            image={category.image}
            price={category.price}
            rating={category.rating}
            downloadSrc={category.downloadSrc}
            previewLink={category.previewLink}
            id={category.id}
          >
            <div>{category.description}</div>
          </Holder>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Categories;

export const categories = [
  {
    title: "Company website",
    id: 8,
    image: companyImage,
    price: 15,
    rating: 4.5,
    downloadSrc: companyWebsiteZip,
    description:
      "This React company website template is designed and built using Tailwind CSS. It is highly flexible and responsive, accommodating both small and large screens. To get started, simply install the dependencies with npm install and run the development server.",
    category: "advancedComponents",
    previewLink:
      "https://company-website-h9ay8yc9f-morphats-projects.vercel.app/",
  },
  {
    title: "React Admin Navbar",
    id: 1,
    image: NavbarImg,
    price: "Free",
    rating: 4.5,
    downloadSrc: dashboard1,
    description:
      "A React navbar designed for an admin dashboard, customizable and built using Bootstrap and CSS. It is flexible and responsive, accommodating both small and large screens.",
    category: "navigationComponents",
  },
  {
    title: "React User Profile",
    id: 2,
    image: userProfileImage,
    price: "Free",
    rating: 5,
    downloadSrc: userProfileZip,
    description:
      "A React user profile component featuring a profile overview, change password functionality, settings, and an edit profile option. It is versatile and can be used for user profiles, admin profiles, and other types of profiles.",
    category: "User Profile",
  },
  {
    title: "Simple Responsive React Navigation Bar",
    id: 3,
    image: Navbar2Img,
    price: "Free",
    rating: 5,
    downloadSrc: navbar2Zip,
    description:
      "The navigation bar is designed to be responsive, adapting to different screen sizes. On smaller screens, the navigation bar collapses into a toggleable menu accessible via an icon on the right end. Users can easily access the navigation links by toggling the menu with the icon. To utilize this feature, simply run npm install to install the necessary dependencies for the application.",
    category: "navigationComponents",
  },
  {
    title: "React Navigation Links Hover Animations",
    id: 4,
    image: Navbar3Img,
    price: "Free",
    rating: 5,
    downloadSrc: navbar3Zip,
    description:
      "The navigation bar is designed to be responsive, adapting to different screen sizes. On smaller screens, the navigation bar collapses into a toggleable menu accessible via an icon on the right end. Users can easily access the navigation links by toggling the menu with the icon. On hover on the links, a line is animated below the navigation links to provide a visual indication of the active link.",
    category: "navigationComponents",
  },
  {
    title: "Movie Streaming Application",
    id: 5,
    image: MovieAppImg,
    price: 10,
    rating: 5,
    downloadSrc: movieApp,
    description: `The Movie website template integrates seamlessly with the themoviedb API, allowing you to access a wealth of movie information. Simply create a free account on themoviedb to obtain your API key, which you'll then replace in the designated variable api_key. This process is entirely free of charge.

    Please note that while the website template itself doesn't support streaming, you can easily source streaming options from servers that permit streaming. To install the website template on your system, use the command npm install or yarn install in your terminal, depending on your preferred package manager.`,
    category: "advancedComponents",
    previewLink: "https://movie-streaming-app-teal.vercel.app/",
  },
  {
    title: "Awesome Blog",
    id: 6,
    image: blogAppImage,
    price: 10,
    rating: 5,
    downloadSrc: blogApp,
    description: ``,
    category: "advancedComponents",
    previewLink: "https://awwesome-blog-react.vercel.app/",
  },
  {
    title: "Tourism website",
    id: 7,
    image: tourismImage,
    price: 15,
    rating: 5,
    downloadSrc: tourismZip,
    description: ``,
    category: "advancedComponents",
    previewLink: "https://tourism-vert.vercel.app/",
  },
];

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
import laundry from "../assets/downloads/images/laundry_app.png";
import blogAppImage from "../assets/downloads/images/awesome-blog.png";
import dashboard1 from "../assets/downloads/zip/dashboard1.zip";
import userProfileImage from "../assets/downloads/images/user-profile.png";
import tourismImage from "../assets/downloads/images/tourism.png";
import companyImage from "../assets/downloads/images/company-website.png";
import AdminDashboardImage from "../assets/downloads/images/admin-dashboard.png";
import introductionImg from "../assets/downloads/images/introduction cover.png";
import userProfileZip from "../assets/downloads/zip/user-profile.zip";
import navbar2Zip from "../assets/downloads/zip/navbar-2.zip";
import navbar3Zip from "../assets/downloads/zip/navbar-3.zip";
import movieApp from "../assets/downloads/zip/movie-app.zip";
import blogApp from "../assets/downloads/zip/awesome-blog.zip";
import tourismZip from "../assets/downloads/zip/tourism.zip";
import companyWebsiteZip from "../assets/downloads/zip/companywebsite.zip";
import AdminDashboardZip from "../assets/downloads/zip/admin-dashboard.zip";
import laundryZip from "../assets/downloads/zip/laundry.zip";
import IntroductionZip from "../assets/downloads/zip/Introduction to Digital products.pdf";

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

  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <div>
      <div className="page-heading">
        <Navbar />
        {/*  <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 header-text text-center">
              <h2>React Themes and Templates</h2>
              <p>
                You are allowed to freely use our design Template for your
                commercial websites. You are not allowed to redistribute the
                template on any other template websites.
              </p>
            </div>
          </div>
        </div> */}
      </div>

      <div className=" py-4">
        <div className="row g-4 justify-content-center">
          {filteredCategories.map((category) => (
            <div key={category.id} className="col-12 col-sm-6 col-md-4">
              <Holder
                title={category.title}
                image={category.image}
                price={category.price}
                downloadSrc={category.downloadSrc}
                previewLink={category.previewLink}
                id={category.id}
              >
                <div>{truncateText(category.description, 80)}</div>
              </Holder>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;

export const categories = [
  /*  {
    title: "Company website",
    id: 8,
    image: companyImage,
    price: 15,
    rating: 4.5,
    downloadSrc: companyWebsiteZip,
    description:
      "This React company website template is designed and built using Tailwind CSS. It is highly flexible and responsive, accommodating both small and large screens. To get started, simply install the dependencies with npm install and run the development server.",
    category: "advancedComponents",
    previewLink: "https://company-website-alpha-six.vercel.app/",
  } */
  {
    title: "The Digital Product Blueprint: A Step-by-Step Guide to Success",
    id: 10,
    image: introductionImg,
    price: 8,
    rating: 4.5,
    downloadSrc: IntroductionZip,
    description:
      "Unlock the Power of Digital Products. Looking to start an online business with minimal upfront costs? The Digital Product Blueprint: A Beginner's Guide to Digital Products is your step-by-step guide to creating and selling profitable digital products. Learn how to research, create, and market eBooks, online courses, templates, and more—without worrying about inventory or shipping. Whether you're a beginner or an experienced entrepreneur, this guide will help you navigate the world of digital sales and build a scalable income stream.",
    category: "Ebook",
    previewLink: "",
  },
  {
    title: "Laundry (Service) Management application ",
    id: 9,
    image: laundry,
    price: 30,
    rating: 4.5,
    downloadSrc: laundryZip,
    description:
      "This is an Electron application built with React.js and JavaScript, featuring an SQLite3 database for backend storage. Designed for laundry management and similar services, it streamlines operations with an intuitive interface and efficient data handling.To set up the application, install the required modules using: npm install Then, run the application with: npm run electron-dev Note: The desktop application is the one that interacts with the database. The version running in the browser cannot connect to the database. The default logins are (admin@gmail.com, admin)",
    category: "advancedComponents",
    previewLink: "https://youtu.be/QSSupiT2S10",
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
  {
    title: "Admin dashboard",
    id: 9,
    image: AdminDashboardImage,
    price: 10,
    rating: 5,
    downloadSrc: AdminDashboardZip,
    description: ``,
    category: "dashboard",
    previewLink: " https://admin-dashboard-lime-five-40.vercel.app/",
  },
];

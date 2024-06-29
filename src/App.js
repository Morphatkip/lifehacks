import "bootstrap/dist/css/bootstrap.css";
import Home from "./Pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./Pages/Categories.jsx";
import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
import SinglePost from "./Pages/SinglePost.jsx";
import Preview from "./Pages/Preview.jsx";
import Templates from "./Pages/Templates.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
function App() {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          "EJI4J7zlsXQBOiYNBWGBdouv_1iHEivGCHBskE_zl2rPpEzs5XKu3qxBm-3o6byhKfqxFNDELopZaJWW",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<SinglePost />} />
          <Route path="/template/:postId" element={<Categories />} />
          <Route path="/categories/preview/:postId" element={<Preview />} />
          <Route path="/single-template/:templateId" element={<Templates />} />
        </Routes>
      </Router>
    </PayPalScriptProvider>
  );
}

export default App;

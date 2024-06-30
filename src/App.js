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
          "AUjaX_AbcDSRxihm7vUgR1RneEZ7aevDakIpxzQTsYBZ5VbfJ8Q7p7JN74Om9rSSQ9I-xN8Lp0A-2rX7",
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

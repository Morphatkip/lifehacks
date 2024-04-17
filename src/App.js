import "bootstrap/dist/css/bootstrap.css";
import Home from "./Pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./Pages/Categories.jsx";
import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
import SinglePost from "./Pages/SinglePost.jsx";
import Preview from "./Pages/Preview.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<SinglePost />} />
        <Route path="/categories/preview/:postId" element={<Preview />} />
      </Routes>
    </Router>
  );
}

export default App;

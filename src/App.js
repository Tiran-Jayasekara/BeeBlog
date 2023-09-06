import Navbar from "./components/NavBar/NavBar";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/NavBar/ScrollToTop";
import Policy from "./pages/policy/Policy";
import Term from "./pages/Term/Term";
import Health from "./pages/Health/health";
import DMCA from "./pages/DMCA/DMCA";
import BreedPost1 from "./pages/Breeds/BlogPosts/BreedBlogpost1";
import Blogs from "./pages/Breeds/Blogs";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="Header_container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breed" element={<Blogs />} />
            <Route path="/health" element={<Health />} />
            <Route path="/breedpost1" element={<BreedPost1 />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/term" element={<Term />} />
            <Route path="/dmca" element={<DMCA/>} />
            
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

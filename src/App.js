import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import EinriLiving from './pages/home1';
import About from './pages/innerpages/about';
import Services from './pages/innerpages/services';
import Portfolio from './pages/innerpages/portfolio';
import Blog from './pages/innerpages/blog';
import Contact from './pages/innerpages/contact';
import SingleProject from './pages/innerpages/single_project';
import SingleProject2 from './pages/innerpages/single_project2';
import SinglePost from './pages/innerpages/single_post';

/**
 * Einri Living - Official Website
 * 
 * Developed by: KSSAITEJA
 * Designer: KSSAITEJA
 * 
 * A bespoke interior design studio website showcasing
 * timeless elegance and artistic transformations.
 * 
 * "Art in the heart of your abode"
 */

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<EinriLiving />} />
        <Route path="/home" element={<EinriLiving />} />
        <Route path="/einri-living" element={<EinriLiving />} />
        
        {/* Inner Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/studio" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cases" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Single Pages */}
        <Route path="/project/:id" element={<SingleProject />} />
        <Route path="/project2/:id" element={<SingleProject2 />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/blog/single-post/:id" element={<SinglePost />} />
      </Routes>
    </Router>
  );
}

export default App;
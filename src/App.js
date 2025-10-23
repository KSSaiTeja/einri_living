import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EinriLiving from './pages/home1';

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
      <Routes>
        <Route path="/" element={<EinriLiving />} />
        <Route path="/home" element={<EinriLiving />} />
        <Route path="/einri-living" element={<EinriLiving />} />
      </Routes>
    </Router>
  );
}

export default App;
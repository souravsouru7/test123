import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import LandingPage from './component/LandingPage';
import AboutUs from './component/AboutUs';
import ContactPage from "./component/ContactPage"
import StickyContact from './component/again/StickyContact';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<div>Services Page Coming Soon</div>} />
          <Route path="/portfolio" element={<div>Portfolio Page Coming Soon</div>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <StickyContact />
      </div>
    </Router>
  );
}

export default App;
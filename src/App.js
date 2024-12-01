// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Offerings from './pages/Offerings';
import Header from './components/Header'; // Import the Header component
import SolutionPage from './pages/SolutionPage';
import MainPage from './pages/MainPage';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> Include the Header here to display on all pages
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/solutions" element={<SolutionPage/>} />
          <Route path="/Team" element={<MainPage/>} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// src/App.jsx

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import WhyCA from "./components/WhyCA";
import Responsibilities from "./components/Responsibilities";
import Incentives from "./components/Incentives";
import FAQ from "./components/FAQs";
import Register from "./components/Register";

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

const MainContent = () => {
  return (
    <div className="relative text-white bg-black min-h-screen flex flex-col font-['Poppins'] selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow pt-16 pb-0 w-full z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div className="max-w-7xl mx-auto px-4 sm:px-8 w-full"><AboutUs /></div>} />
          <Route path="/whyca" element={<div className="max-w-7xl mx-auto px-4 sm:px-8 w-full"><WhyCA /></div>} />
          <Route path="/responsibilities" element={<div className="max-w-7xl mx-auto px-4 sm:px-8 w-full"><Responsibilities /></div>} />
          <Route path="/incentives" element={<div className="max-w-7xl mx-auto px-4 sm:px-8 w-full"><Incentives /></div>} />
          <Route path="/faqs" element={<div className="max-w-7xl mx-auto px-4 sm:px-8 w-full"><FAQ /></div>} />
          <Route path="/register" element={<div className="max-w-7xl mx-auto px-4 sm:px-8 w-full"><Register /></div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <MainContent />
  </Router>
);

export default App;


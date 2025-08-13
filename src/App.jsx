import React, { useRef, useState } from "react";
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

const ScrollRouter = () => {
  const refs = {
    home: useRef(null),
    about: useRef(null),
    whyca: useRef(null),
    responsibilities: useRef(null),
    incentives: useRef(null),
    faqs: useRef(null),
  };

  const scrollTo = (section) => {
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const location = useLocation();
  const isMobile = window.innerWidth <= 768;

  const [showRegister, setShowRegister] = useState(false);

  const handleShowRegister = () => {
    setShowRegister(true);
    setTimeout(() => {
      document.getElementById("mobile-register")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="relative text-white min-h-screen flex flex-col overflow-hidden">
      {/* 🌟 Background Video with Dark Shield */}
<div className="fixed top-0 left-0 w-full h-full -z-10">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/background_50mb.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* 🔳 Dark Overlay */}
  <div className="absolute inset-0 bg-black/40 "></div>
</div>


      <Navbar scrollTo={scrollTo} isMobile={isMobile} />

      <main className="pt-20 pb-32 flex-grow">
        {isMobile ? (
          <div>
            <div ref={refs.home}>
              <Home scrollTo={scrollTo} showRegister={handleShowRegister} />
            </div>
            <div ref={refs.about}><AboutUs /></div>
            <div ref={refs.whyca}><WhyCA /></div>
            <div ref={refs.responsibilities}><Responsibilities /></div>
            <div ref={refs.incentives}><Incentives /></div>
            <div ref={refs.faqs}><FAQ /></div>

            {showRegister && (
              <div id="mobile-register">
                <Register />
              </div>
            )}
          </div>
        ) : (
          <Routes location={location}>
            <Route path="/" element={<Home scrollTo={scrollTo} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/whyca" element={<WhyCA />} />
            <Route path="/responsibilities" element={<Responsibilities />} />
            <Route path="/incentives" element={<Incentives />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </main>

      <Footer />
    </div>
  );
};

const App = () => (
  <Router>
    <ScrollRouter />
  </Router>
);

export default App;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import VideoPlayer from "./VideoPlayer";

const Home = () => {
  const stats = [
    { value: "500+", label: "COLLEGES REACH" },
    { value: "₹5 Lakh+", label: "PRIZES & SWAG" },
    { value: "50,000+", label: "FOOTFALL" },
    { value: "100%", label: "EXPOSURE & LOR" },
  ];

  const pageHighlights = [
    {
      title: "ABOUT US",
      subtitle: "Where Champions Ascend & Legends Collide",
      desc: "Explore IIT Kharagpur's grandest annual sports fest celebrating athletic excellence.",
      path: "/about",
      image: "/images/about_us.png",
    },
    {
      title: "WHY BECOME A CA?",
      subtitle: "Leadership, Merch & National Exposure",
      desc: "Develop management skills, network with student leaders, and earn exclusive rewards.",
      path: "/whyca",
      image: "/images/why_ca.png",
    },
    {
      title: "RESPONSIBILITIES",
      subtitle: "Campus Outreach & Contingents",
      desc: "Lead student contingents, manage social media publicity, and represent your college.",
      path: "/responsibilities",
      image: "/images/responsibilities.png",
    },
    {
      title: "INCENTIVES & LEADERBOARD",
      subtitle: "Bronze, Silver & Gold Tiers",
      desc: "Climb the leaderboard to earn free accommodation, VIP passes, LORs, and cash prizes.",
      path: "/incentives",
      image: "/images/incentives.png",
    },
    {
      title: "FREQUENTLY ASKED QUESTIONS",
      subtitle: "Get Answers & Support",
      desc: "Find answers to application processes, timeline commitments, and certificate eligibility.",
      path: "/faqs",
      image: "/images/faqs.png",
    },
    {
      title: "APPLY NOW",
      subtitle: "Represent Your Institution",
      desc: "Fill out the official Campus Ambassador application form to secure your position.",
      path: "/register",
      image: "/images/apply_now.png",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center text-left">
      {/* 🎬 100% FULL SCREEN WIDTH HERO & STATS SECTION WITH VIDEO BACKGROUND */}
      <div className="w-full relative min-h-[600px] pt-12 pb-16 flex flex-col items-center justify-center overflow-hidden bg-black space-y-12">
        {/* Background Video (Spans 100% full viewport width edge-to-edge) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-45 z-0 pointer-events-none"
        >
          <source src="/background_50mb.mp4" type="video/mp4" />
        </video>

        {/* Hero Content Grid */}
        <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 sm:px-8">
          {/* Left Column: Clear Text & Call-to-Action */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none text-white font-['Bungee',sans-serif]">
              IGNITE THE ARENA
              <span className="block text-yellow-400 mt-2">SHAURYA CA PROGRAM</span>
            </h1>

            <p className="text-base sm:text-xl text-gray-100 font-medium leading-relaxed max-w-xl">
              Be the official face of Shaurya on your campus. Lead student contingents, inspire young athletes, and represent IIT Kharagpur’s annual sports fest.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/register"
                className="px-8 py-3.5 rounded font-extrabold text-sm uppercase text-black bg-yellow-400 hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-400/30"
              >
                BE A PART OF SHAURYA CA
              </Link>
              <Link
                to="/about"
                className="px-8 py-3.5 rounded font-extrabold text-sm uppercase text-white border-2 border-yellow-400 hover:bg-yellow-400/20 transition-colors shadow-lg"
              >
                EXPLORE PROGRAM
              </Link>
            </div>
          </div>
        </div>

        {/* STATS BANNER (Transparent Floating over Video Background) */}
        <div className="relative z-10 w-full max-w-7xl px-4 sm:px-8 pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4 border-r border-yellow-500/30 last:border-r-0">
                <span className="text-3xl sm:text-4xl font-extrabold text-yellow-400 font-['Bungee']">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold tracking-wider text-gray-200 mt-1 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REST OF HOME PAGE CONTENT (Lighter shade of black #121216) */}
      <div className="w-full bg-[#121216] border-t border-yellow-500/20 py-12 flex justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-8 space-y-16 flex flex-col items-center">
          {/* PROGRAM PAGES & VERTICALS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full space-y-8 pt-4 pb-4"
          >
            <div className="space-y-2 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-yellow-400 font-['Bungee']">
                PROGRAM PAGES & VERTICALS
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto">
                Click on any section below to navigate to its dedicated page view.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pageHighlights.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="group relative rounded-2xl bg-[#1c1c22] border border-yellow-500/20 text-left transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,0.2)] flex flex-col justify-between overflow-hidden"
                >
                  {/* Image Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c22] via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 inline-block px-3 py-1 rounded text-xs font-extrabold bg-yellow-400 text-black uppercase tracking-wider shadow-md">
                      {item.title}
                    </span>
                  </div>

                  {/* Text Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4 bg-[#1c1c22]">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {item.subtitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center text-xs font-bold text-yellow-400 group-hover:translate-x-1 transition-transform uppercase">
                      <span>Explore Section</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

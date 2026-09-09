import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WhyCA = () => {
  const benefits = [
    {
      num: "01",
      tag: "SKILL SET",
      title: "LEADERSHIP & TEAM MANAGEMENT",
      desc: "Drive teams, coordinate college contingents, and cultivate vital real-world leadership, event management, and team communication skills.",
    },
    {
      num: "02",
      tag: "NETWORK",
      title: "NATIONAL RECOGNITION & NETWORKING",
      desc: "Connect directly with student ambassadors and athletic directors across 500+ top Indian universities and IIT Kharagpur organizing bodies.",
    },
    {
      num: "03",
      tag: "REWARDS",
      title: "EXCLUSIVE SHAURYA MERCH & SWAG",
      desc: "Receive customized Shaurya merchandise, limited-edition hoodies, wristbands, and sponsored partner hampers based on your performance.",
    },
    {
      num: "04",
      tag: "PASSES",
      title: "FREE ENTRY & VIP HOSPITALITY",
      desc: "Enjoy complimentary accommodation, VIP access passes to star nights, concerts, and exclusive athlete lounges during the 3-day fest.",
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-12 py-6 text-left">
      {/* Heading */}
      <div className="text-center w-full max-w-4xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-['Bungee',sans-serif]">
          <span className="block text-white">WHY STEP FORWARD AS A</span>
          <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-red-500 bg-clip-text text-transparent">
            SHAURYA CA?
          </span>
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Serve as the official face of IIT Kharagpur’s sports fest at your university. Gain nationwide exposure, hone management expertise, and unlock exclusive rewards.
        </p>
      </div>

      {/* Hero Image Banner */}
      <div className="w-full max-w-6xl relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-yellow-500/30 shadow-2xl">
        <img src="/images/why_ca.png" alt="Why CA" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-8">
          <div>
            <span className="px-3 py-1 rounded bg-yellow-400 text-black text-xs font-black uppercase tracking-widest">
              EMPOWER YOUR CAREER
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-['Bungee'] uppercase mt-2">
              BECOME THE FACE OF SHAURYA
            </h2>
          </div>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {benefits.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-8 rounded-3xl bg-black/60 border border-yellow-500/30 backdrop-blur-xl hover:border-yellow-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold tracking-widest px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-300 border border-yellow-400/30">
                  FEATURE {item.num}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-yellow-300 transition-colors uppercase font-['Ubuntu']">
                {item.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {item.tag}
              </span>
              <Link
                to="/register"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-yellow-400 hover:text-yellow-300 group-hover:translate-x-1 transition-transform"
              >
                <span>JOIN NOW</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyCA;


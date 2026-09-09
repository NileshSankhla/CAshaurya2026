import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const pillars = [
    {
      title: "PAN-INDIA ARENA",
      desc: "Nationwide arena for elite college sports competition hosted by IIT Kharagpur.",
    },
    {
      title: "INCENTIVIZING TIERS",
      desc: "Structured ambassador tiers offering rewards, VIP privileges, and certificates.",
    },
    {
      title: "PROMOTIONAL LEGACY",
      desc: "Promote sports excellence and represent your institution on a national stage.",
    },
  ];

  const sports = [
    "Cricket",
    "Football",
    "Basketball",
    "Badminton",
    "Tennis",
    "Athletics",
    "Chess",
    "Volleyball",
    "Table Tennis",
    "Squash",
    "Swimming",
  ];

  return (
    <div className="flex flex-col items-center space-y-12 py-6 text-left">
      {/* Heading */}
      <div className="text-center w-full max-w-4xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-['Bungee',sans-serif]">
          <span className="block text-white">WHERE CHAMPIONS ASCEND &</span>
          <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-red-500 bg-clip-text text-transparent">
            LEGENDS COLLIDE
          </span>
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Shaurya is the premier annual inter-collegiate sports festival organized by the Technology Students' Gymkhana, Indian Institute of Technology Kharagpur. Celebrating 7+ years of athletic glory, Shaurya unites thousands of top collegiate athletes across India.
        </p>
      </div>

      {/* Grid: Left Content + Right Card */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
        {/* Left Column: 3 Feature Cards + Sports Tags */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-black/60 border border-yellow-500/30 backdrop-blur-md hover:border-yellow-400 transition-all duration-300 space-y-2"
              >
                <h3 className="text-sm font-extrabold text-yellow-300 tracking-wider uppercase">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Ambassador Disciplines */}
          <div className="p-6 rounded-2xl bg-black/60 border border-yellow-500/30 backdrop-blur-md space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              SPECIAL AMBASSADOR DISCIPLINES
            </h4>
            <div className="flex flex-wrap gap-2">
              {sports.map((sport, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-400/10 border border-yellow-400/20 text-gray-200 hover:text-yellow-300 hover:border-yellow-400 transition-colors cursor-default"
                >
                  {sport}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Gymkhana Shakti Visual Card */}
        <div className="lg:col-span-5 relative group overflow-hidden rounded-3xl border border-yellow-500/40 min-h-[340px] bg-gradient-to-br from-red-950/40 via-black to-yellow-950/40 backdrop-blur-xl flex flex-col justify-end p-8 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: "url('/images/about_us.png')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <div className="relative z-10 space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 border border-red-500/40 text-red-300 uppercase tracking-widest inline-block">
              IIT KHARAGPUR SHAKTI
            </span>
            <h3 className="text-2xl font-black text-white uppercase font-['Bungee']">
              7TH EDITION ATHLETIC EXTRAVAGANZA
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Join 500+ colleges nationwide in celebrating the raw spirit of sportsmanship at Technology Students' Gymkhana, IIT Kharagpur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


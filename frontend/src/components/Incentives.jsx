import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import happyGift from "../assets/happyGift.json";
import cretificate from "../assets/cretificate.json";
import invitation from "../assets/invitation.json";
import connection from "../assets/connection.json";

const FlipCard = ({ animation, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full h-64 relative cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-yellow-500/30 flex flex-col items-center justify-center text-center shadow-lg hover:border-yellow-400 transition-colors"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <Lottie animationData={animation} className="w-24 h-24 mb-2" loop />
          <h3 className="text-lg font-bold text-yellow-300 font-['Ubuntu'] uppercase">
            {title}
          </h3>
          <span className="text-xs text-amber-400/80 mt-2 font-semibold flex items-center space-x-1">
            <span>Tap to flip details</span>
          </span>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full rounded-2xl p-6 bg-gradient-to-br from-amber-950/80 via-black to-black backdrop-blur-xl border border-yellow-400 flex flex-col items-center justify-center text-center shadow-2xl [transform:rotateY(180deg)]"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <h4 className="text-sm font-bold text-yellow-300 uppercase mb-2">
            {title}
          </h4>
          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Incentives = () => {
  const leaderboardTiers = [
    {
      name: "BRONZE TIER",
      range: "100 - 499 POINTS",
      color: "from-amber-700/30 to-black",
      borderColor: "border-amber-700/50",
      badgeColor: "bg-amber-700/20 text-amber-300 border-amber-700/40",
      rewards: [
        "Certificate of Participation from TSG, IIT Kharagpur",
        "Access to exclusive Ambassador WhatsApp network",
        "Promotional posters & digital toolkits",
      ],
    },
    {
      name: "SILVER TIER",
      range: "500 - 999 POINTS",
      color: "from-slate-400/30 to-black",
      borderColor: "border-slate-400/50",
      badgeColor: "bg-slate-400/20 text-slate-200 border-slate-400/40",
      rewards: [
        "Official Shaurya T-shirt & Swag Kit",
        "VIP Pass to Fest Pro-Nights & Celebrations",
        "Free Accommodation & Mess food voucher during fest",
        "Special mention in official Shaurya post-fest report",
      ],
    },
    {
      name: "GOLD TIER",
      range: "1000+ POINTS",
      color: "from-yellow-500/30 to-black",
      borderColor: "border-yellow-400",
      badgeColor: "bg-yellow-400/20 text-yellow-300 border-yellow-400/40",
      rewards: [
        "Fully Sponsored Trip to IIT Kharagpur for Shaurya",
        "Certificate of Excellence & Official Letter of Recommendation (LOR)",
        "Exclusive cash rewards pool & premium sponsored hampers",
        "VIP Backstage access & artist meet-and-greet",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-16 py-6 text-left">
      {/* Heading */}
      <div className="text-center w-full max-w-4xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-['Bungee',sans-serif]">
          <span className="block text-white">CLIMB THE AMBASSADOR</span>
          <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-red-500 bg-clip-text text-transparent">
            LEADERBOARD
          </span>
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Points are awarded for every athlete registration, contingent college referral, social media task, and institutional outreach milestone completed.
        </p>
      </div>

      {/* LEADERBOARD TIERS GRID */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {leaderboardTiers.map((tier, idx) => (
          <div
            key={idx}
            className={`p-8 rounded-3xl bg-gradient-to-b ${tier.color} border ${tier.borderColor} backdrop-blur-xl flex flex-col justify-between space-y-6 shadow-xl hover:scale-[1.02] transition-transform duration-300`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${tier.badgeColor}`}>
                  {tier.range}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white font-['Bungee'] tracking-wide">
                  {tier.name}
                </h3>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-white/10">
                {tier.rewards.map((reward, rIdx) => (
                  <div key={rIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-200">
                    <span className="text-yellow-400 font-bold mt-0.5">•</span>
                    <span>{reward}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/register"
              className="w-full py-3 rounded-full text-center text-xs font-extrabold tracking-wider uppercase text-black bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 shadow-[0_0_15px_rgba(250,204,21,0.3)] transition-all"
            >
              UNLOCK {tier.name}
            </Link>
          </div>
        ))}
      </div>

      {/* INCENTIVE FLIPCARDS SECTION */}
      <div className="w-full max-w-6xl space-y-8 pt-8 border-t border-white/10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase bg-gradient-to-r from-yellow-300 via-amber-400 to-red-500 bg-clip-text text-transparent font-['Bungee']">
            PROGRAM HIGHLIGHT REWARDS
          </h2>
          <p className="text-sm text-gray-300">
            Interactive breakdown of perks awarded upon successful program completion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FlipCard
            animation={happyGift}
            title="Premium Hampers"
            description="Curated gift hampers, merchandise, and branded goodies presented upon fest conclusion."
          />
          <FlipCard
            animation={cretificate}
            title="Certificate of Merit"
            description="Official certificate issued by Technology Students' Gymkhana, IIT Kharagpur."
          />
          <FlipCard
            animation={invitation}
            title="VIP Access Privilege"
            description="VIP entry to star nights, concerts, opening ceremonies, and athlete arenas."
          />
          <FlipCard
            animation={connection}
            title="Networking Hub"
            description="Network with student ambassadors and top collegiate leaders across India."
          />
        </div>
      </div>
    </div>
  );
};

export default Incentives;


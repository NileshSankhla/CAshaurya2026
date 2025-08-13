// src/components/Incentives.jsx

import React, { useState } from "react";
import Lottie from "lottie-react";
import happyGift from "../assets/happyGift.json";
import cretificate from "../assets/cretificate.json";
import invitation from "../assets/invitation.json";
import connection from "../assets/connection.json";

const FlipCard = ({ animation, title, description }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div
      className="w-72 h-72 relative"
      style={{ perspective: "1000px", marginTop: "1rem" }}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 bg-black/40 backdrop-blur-md border border-yellow-500/30"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Lottie animationData={animation} className="w-32 h-32" loop />
          <h2 className="text-lg font-bold font-['Ubuntu'] text-yellow-400 text-center mt-2">
            {title}
          </h2>
          <p
            onClick={(e) => {
              e.stopPropagation();
              setFlipped((prev) => !prev);
            }}
            className="text-sm text-gray-300 text-center mt-6 cursor-pointer transition-colors duration-300 hover:text-yellow-400"
          >
            Tap Here For More
          </p>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full rounded-2xl shadow-lg flex items-center justify-center p-6 rotate-y-180 bg-black/40 backdrop-blur-md border border-yellow-500/30"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <p className="text-base font-semibold text-yellow-400 text-center font-['Poppins']">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Incentives = () => {
  return (
    <div className="min-h-screen flex flex-col font-['Poppins'] items-center px-6 pt-24 pb-12 text-white">
      <h2 className="text-5xl font-['Playwrite_AU_QLD'] bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text mb-10 text-center">
        Incentives
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        <FlipCard
          animation={happyGift}
          title="Premium Hampers"
          description="Premium gifts assortments and curated hampers presented upon the fest conclusion"
        />
        <FlipCard
          animation={cretificate}
          title="Certificate of Merit"
          description="Exclusive certificate awarded in recognition of outstanding performance"
        />
        <FlipCard
          animation={invitation}
          title="Formal Access Privilege"
          description="Entitled to attend all formal events and official programs conducted by Shaurya, IIT Kharagpur."
        />
        <FlipCard
          animation={connection}
          title="Networking Opportunity"
          description="Engage with students from IIT Kharagpur and diverse colleges across the country."
        />
      </div>
    </div>
  );
};

export default Incentives;

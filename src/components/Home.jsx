import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home = ({ showRegister }) => {
  const heading = "Shaurya Campus Ambassador";
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const words = heading.split(" ");

  const animateWord = (word, baseDelay = 0) =>
    [...word].map((char, i) => (
      <span
        key={i}
        className="inline-block bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent"
        style={{
          animation: "wave 2s ease-in-out infinite",
          animationDelay: `${(baseDelay + i) * 0.1}s`,
        }}
      >
        {char}
      </span>
    ));

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (isMobile && showRegister) {
        showRegister(); // ✅ scroll on mobile
      } else {
        navigate("/register"); // ✅ navigate on PC
      }
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        
        {/* ✅ PNG Image at Top
        <div className="flex flex-col items-center mb-6">
          <img
            src="/logos/Platinum_Jubilee.png"
            alt="Platinum Jubilee Logo"
            className="w-96 h-96 object-contain mb-2"
          />
          <p className="text-gray-300 text-lg italic">
            Igniting Passion, Inspiring Leaders
          </p>
          <hr className="w-40 border-t-2 border-yellow-400 mt-2" />
        </div> */}

        {/* ✅ Animated Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg leading-tight flex flex-wrap justify-center">
          {words.map((word, idx) => (
            <span
              key={idx}
              className={`inline-block whitespace-nowrap
                ${idx === 2 ? "w-full text-center mt-2 lg:mt-0 lg:w-auto lg:ml-4" : "mr-4"}
              `}
            >
              {animateWord(word, idx * 10)}
            </span>
          ))}
        </h1>

        {/* ✅ Subtext */}
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
          Be the face of Shaurya on your campus. Lead. Inspire. Grow.
        </p>

        {/* ✅ Button or Loader */}
        {!loading ? (
          <button
            onClick={handleClick}
            className="mt-10 px-10 py-3 rounded-full font-semibold text-white shadow-xl relative overflow-hidden
              bg-gray-800
              transition-colors duration-500 ease-in-out
              hover:text-white
              hover:scale-105
            "
            style={{
              background:
                "linear-gradient(to right, #facc15, #ef4444, #ec4899 50%, #1f2937 50%)",
              backgroundSize: "200% 100%",
              backgroundPosition: "right",
              transition: "background-position 0.5s ease-in-out, color 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = "left";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundPosition = "right";
            }}
          >
            Be a part of Shaurya CA
          </button>
        ) : (
          <div className="mt-10 flex justify-center items-center">
            <div className="loader"></div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .loader {
          border: 4px solid rgba(250, 204, 21, 0.2);
          border-top: 4px solid #facc15;
          border-right: 4px solid #facc15;
          border-bottom: 4px solid #facc15;
          border-left: 4px solid transparent;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
          box-shadow: 0 0 8px #facc15, 0 0 16px #facc15;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Home;

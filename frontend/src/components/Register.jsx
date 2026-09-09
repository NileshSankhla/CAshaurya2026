import React from 'react';
import RegisterForm from './RegisterForm';

export default function Register() {
  return (
    <div className="flex flex-col items-center space-y-12 py-6 text-left">
      {/* Top Badge */}
      <div className="text-center w-full">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wider text-yellow-300 uppercase shadow-[0_0_15px_rgba(250,204,21,0.2)]">
          <span>ACTION TIME</span>
          <span className="text-gray-500">|</span>
          <span className="text-white">BECOME A CA</span>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center w-full max-w-4xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-['Bungee',sans-serif]">
          <span className="block text-white">APPLY TO REPRESENT</span>
          <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-red-500 bg-clip-text text-transparent">
            SHAURYA
          </span>
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Take the lead as the official Campus Ambassador for IIT Kharagpur’s annual sports fest. Fill out the application form below.
        </p>
      </div>

      {/* Grid: Info + Form */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-black/60 border border-yellow-500/30 backdrop-blur-xl space-y-6 shadow-xl">
            <h3 className="text-2xl font-black text-yellow-300 font-['Bungee'] uppercase">
              WHY REGISTER TODAY?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-lg">✦</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Official Certification</h4>
                  <p className="text-xs text-gray-300">Certificate signed by Technology Students' Gymkhana, IIT Kharagpur.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-lg">✦</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Free Accommodation & Passes</h4>
                  <p className="text-xs text-gray-300">Stay on IIT Kharagpur campus & get VIP passes to pro-nights.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-lg">✦</span>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Cash Rewards & Hampers</h4>
                  <p className="text-xs text-gray-300">Win from ₹5 Lakh+ prize pool based on leaderboard ranking.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-yellow-500/30 bg-black/40 backdrop-blur-md p-6 text-center space-y-3">
            <img
              src="/logos/register.png"
              alt="Shaurya Graphic"
              className="w-48 h-auto mx-auto object-contain drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]"
            />
            <p className="text-xs text-gray-400 italic">
              "Lead your campus delegation to the pinnacle of athletic victory."
            </p>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-black/70 border border-yellow-500/40 backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.9)]">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}


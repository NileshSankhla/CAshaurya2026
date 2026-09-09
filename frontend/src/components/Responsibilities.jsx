import React from "react";
import { motion } from "framer-motion";

const Responsibilities = () => {
  const duties = [
    {
      num: "01",
      badge: "CAMPUS HUB",
      title: "CAMPUS OUTREACH & EVANGELISM",
      desc: "Promote Shaurya events across your campus, post official posters, distribute flyers, and inspire sports enthusiasts to register.",
      points: [
        "Distribute official flyers across college campus notice boards",
        "Engage directly with sports club heads and team captains",
      ],
    },
    {
      num: "02",
      badge: "ROSTER MGMT",
      title: "CONTINGENT COORDINATION",
      desc: "Guide sports teams & athletes through college registration, assist with team verification documentation, and coordinate travel schedules.",
      points: [
        "Validate athlete roster documentation and registration forms",
        "Serve as team manager & primary liaison for your college contingent",
      ],
    },
    {
      num: "03",
      badge: "DIGITAL REACH",
      title: "SOCIAL MEDIA AMPLIFICATION",
      desc: "Drive digital campaign engagement across Instagram, LinkedIn, and WhatsApp groups by sharing promotional teasers and announcements.",
      points: [
        "Amplify official announcements across social handles",
        "Circulate posters, reels, and video promotional assets",
      ],
    },
    {
      num: "04",
      badge: "OFFICIAL ADVISOR",
      title: "DIRECT INSTITUTIONAL LIAISON",
      desc: "Serve as the official link between your university administration & Technology Students' Gymkhana, IIT Kharagpur.",
      points: [
        "Liaise with college sports department directors",
        "Ensure seamless college approval for contingent travel",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-12 py-6 text-left">
      {/* Heading */}
      <div className="text-center w-full max-w-4xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-['Bungee',sans-serif]">
          <span className="block text-white">YOUR RESPONSIBILITIES AS</span>
          <span className="block bg-gradient-to-r from-yellow-300 via-amber-400 to-red-500 bg-clip-text text-transparent">
            AMBASSADOR
          </span>
        </h1>
        <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          As the sole ambassador of your institution, you sit at the epicenter of athletic outreach, driving student participation and logistics.
        </p>
      </div>

      {/* Hero Image Banner */}
      <div className="w-full max-w-6xl relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-yellow-500/30 shadow-2xl">
        <img src="/images/responsibilities.png" alt="Responsibilities" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-8">
          <div>
            <span className="px-3 py-1 rounded bg-yellow-400 text-black text-xs font-black uppercase tracking-widest">
              CAMPUS OUTREACH & LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-['Bungee'] uppercase mt-2">
              LEAD YOUR INSTITUTION'S CONTINGENT
            </h2>
          </div>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {duties.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-black/60 border border-yellow-500/30 backdrop-blur-xl hover:border-yellow-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.2)] flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 uppercase tracking-widest">
                  {item.badge}
                </span>
                <span className="text-2xl font-black text-amber-500 font-['Bungee']">
                  {item.num}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white uppercase font-['Ubuntu']">
                {item.title}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2">
              {item.points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start space-x-2 text-xs text-gray-300">
                  <span className="text-yellow-400 font-bold mt-0.5">•</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Responsibilities;


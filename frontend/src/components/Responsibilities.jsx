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
    <div className="w-full relative flex flex-col items-center py-6 text-left min-h-screen overflow-hidden">
      {/* 🎬 Fixed 100% Viewport Edge-to-Edge Background Image Layer */}
      <div className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
        <img
          src="/images/responsibilities.png"
          alt="Responsibilities Background"
          className="w-full h-full object-cover object-center opacity-25 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#121216]/90 to-[#121216]" />
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-8 space-y-16 flex flex-col items-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center w-full max-w-4xl mx-auto space-y-3 pt-6"
        >
          <span className="text-xs font-extrabold text-yellow-400 uppercase tracking-widest block">
            CAMPUS OUTREACH & LEADERSHIP
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-['Bungee',sans-serif]">
            <span className="block text-white">YOUR RESPONSIBILITIES AS</span>
            <span className="block text-yellow-400">AMBASSADOR</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            As the sole ambassador of your institution, you sit at the epicenter of athletic outreach, driving student participation and logistics.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 pt-4"
        >
          {duties.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className="group p-8 rounded-2xl bg-black border border-yellow-500/20 hover:border-yellow-400 transition-all duration-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.2)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-yellow-400 uppercase tracking-widest">
                    {item.badge}
                  </span>
                  <span className="text-2xl font-black text-yellow-400 font-['Bungee']">
                    {item.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors uppercase font-['Ubuntu']">
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
        </motion.div>
      </div>
    </div>
  );
};

export default Responsibilities;


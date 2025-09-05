// src/components/Responsibilities.jsx

import React from "react";
import { motion } from "framer-motion";

const responsibilities = [
  {
    title: "Bridge",
    description:
      "To act as a bridge between Shaurya, IIT Kharagpur and your respective college.",
  },
  {
    title: "Publicity",
    description:
      "Publicising Shaurya in your respective colleges by circulating posters, mails or messages in the official college groups.",
  },
  {
    title: "College",
    description:
      "Ensuring participation from your respective colleges for various events conducted by Shaurya.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Responsibilities = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-24 pb-12 font-['Poppins'] text-white">
      <h1 className="text-5xl font-bungee bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text mb-10 text-center">
        Responsibilities
      </h1>

      <div className="flex flex-col text-md font-bold font-['Ubuntu'] sm:flex-row flex-wrap justify-center items-center gap-8 max-w-6xl w-full">
        {responsibilities.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="w-80 min-h-[240px] p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-yellow-500/30 shadow-xl transition-transform duration-500 hover:scale-105 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold font-['Ubuntu'] text-yellow-400 mb-3 text-center">
              {item.title}
            </h3>
            <p className="text-white text-center">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Responsibilities;

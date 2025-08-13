// src/components/WhyCA.jsx

import { motion } from "framer-motion";

const paragraphParts = [
  {
    text: "Be a part of Shaurya, the renowned sports fest at IIT Kharagpur, and elevate your love for sports.",
    direction: "left",
  },
  {
    text: "As a Campus Ambassador, you'll gain valuable experience in event promotion and management, all while building your communication and leadership skills.",
    direction: "right",
  },
  {
    text: "You'll have the chance to organize exciting sports competitions, connect with fellow athletes from across the country, and stay on top of the latest trends in the sports world.",
    direction: "left",
  },
  {
    text: "Join us and play a key role in making Shaurya a memorable and impactful event.",
    direction: "right",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const paragraphVariants = {
  hidden: (direction) => ({
    x: direction === "left" ? -60 : 60,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const WhyCA = () => {
  return (
    <div
      id="whyca"
      className="min-h-screen flex items-center justify-center text-white px-4 py-16 font-['Poppins']"
    >
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-4xl font-['Playwrite_AU_QLD'] bg-gradient-to-r from-yellow-400 to-red-500 text-transparent bg-clip-text mb-10 text-center">
          Why CA?
        </h2>

        <motion.div
          className="relative p-10 border-2 border-yellow-400 rounded-[60px] max-w-2xl mx-auto mt-6 bg-black/60 shadow-yellow-200 shadow-xl animate-[goldenRippleMove_12s_linear_infinite]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {paragraphParts.map(({ text, direction }, index) => (
            <motion.p
              key={index}
              custom={direction}
              variants={paragraphVariants}
              className="text-lg font-bold font-['Ubuntu'] leading-relaxed tracking-wide text-transparent bg-gradient-to-r from-yellow-300 to-yellow-700 bg-clip-text mb-6 hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.4)] transition-all"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyCA;

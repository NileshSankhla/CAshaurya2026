//src/components/AboutUs.jsx

import { motion } from "framer-motion";

const paragraphParts = [
  {
    text: "Shaurya, IIT Kharagpur's annual inter-collegiate sports fest, held over a span of three days.",
    direction: "left",
  },
  {
    text: "Since its inception, Shaurya has become a platform that celebrates the spirit of sportsmanship and fosters a vibrant sports culture among college athletes across the nation.",
    direction: "right",
  },
  {
    text: "Now in its 7th edition, Shaurya brings together passion, competition, and camaraderie, offering a stage where athletes can showcase their skills, push their limits, and create unforgettable memories.",
    direction: "left",
  },
  {
    text: "Join us in this journey of determination, energy, and sports excellence.",
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

const AboutUs = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center  text-white px-4 py-16 font-['Poppins']"
    >
      <div className="w-full max-w-4xl text-center">
        {/* Updated Heading Style */}
        <h2 className="text-5xl font-sans bg-gradient-to-r from-yellow-300 to-red-500 text-transparent bg-clip-text mb-10 text-center">
          About Us
        </h2>

        {/* Removed motion.div underline */}

        <motion.div
          className="relative p-10 border-2 border-yellow-400 rounded-[60px] max-w-2xl mx-auto mt-6 bg-black/40 shadow-yellow-200 shadow-xl animate-[goldenRippleMove_12s_linear_infinite]"
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
              className="text-lg font-bold font-['Ubuntu'] leading-relaxed tracking-wide text-transparent bg-yellow-300 bg-clip-text mb-6 hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.4)] transition-all"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
